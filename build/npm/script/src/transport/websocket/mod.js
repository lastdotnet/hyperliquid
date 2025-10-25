"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketTransport = exports.WebSocketRequestError = exports.ReconnectingWebSocketError = exports.ReconnectingWebSocket = void 0;
const base_js_1 = require("../base.js");
const _polyfills_js_1 = require("../_polyfills.js");
const _reconnecting_websocket_js_1 = require("./_reconnecting_websocket.js");
Object.defineProperty(exports, "ReconnectingWebSocket", { enumerable: true, get: function () { return _reconnecting_websocket_js_1.ReconnectingWebSocket; } });
Object.defineProperty(exports, "ReconnectingWebSocketError", { enumerable: true, get: function () { return _reconnecting_websocket_js_1.ReconnectingWebSocketError; } });
const _hyperliquid_event_target_js_1 = require("./_hyperliquid_event_target.js");
const _websocket_async_request_js_1 = require("./_websocket_async_request.js");
Object.defineProperty(exports, "WebSocketRequestError", { enumerable: true, get: function () { return _websocket_async_request_js_1.WebSocketRequestError; } });
/** WebSocket implementation of the REST and Subscription transport interfaces. */
class WebSocketTransport {
    _wsRequester;
    _hlEvents;
    _keepAliveTimeout;
    _subscriptions = new Map();
    /** Indicates this transport uses testnet endpoint. */
    isTestnet;
    /**
     * Timeout for requests in ms.
     * Set to `null` to disable.
     */
    timeout;
    /**
     * Interval between sending ping messages in ms.
     * Set to `null` to disable.
     */
    keepAliveInterval;
    /** Enable automatic re-subscription to Hyperliquid subscription after reconnection. */
    resubscribe;
    /** The WebSocket that is used for communication. */
    socket;
    /**
     * Creates a new WebSocket transport instance.
     * @param options - Configuration options for the WebSocket transport layer.
     */
    constructor(options) {
        this.isTestnet = options?.isTestnet ?? false;
        this.timeout = options?.timeout === undefined ? 10_000 : options.timeout;
        this.keepAliveInterval = options?.keepAliveInterval ?? 30_000;
        this.resubscribe = options?.resubscribe ?? true;
        this.socket = new _reconnecting_websocket_js_1.ReconnectingWebSocket(options?.url ?? (this.isTestnet ? "wss://api.hyperliquid-testnet.xyz/ws" : "wss://api.hyperliquid.xyz/ws"), options?.reconnect);
        this._hlEvents = new _hyperliquid_event_target_js_1.HyperliquidEventTarget(this.socket);
        this._wsRequester = new _websocket_async_request_js_1.WebSocketAsyncRequest(this.socket, this._hlEvents);
        // Initialize listeners
        this.socket.addEventListener("open", () => {
            this._keepAliveRun();
            this._resubscribeRun();
        });
        const handleClose = () => {
            this._keepAliveStop();
            this._resubscribeStop();
        };
        this.socket.addEventListener("close", handleClose);
        this.socket.addEventListener("error", handleClose);
    }
    /**
     * Keep the connection alive.
     * Sends ping only when no other requests were sent within the keep-alive interval.
     */
    _keepAliveRun() {
        if (this.keepAliveInterval === null || this._keepAliveTimeout)
            return;
        const tick = async () => {
            if (this.socket.readyState !== _reconnecting_websocket_js_1.ReconnectingWebSocket.OPEN || !this._keepAliveTimeout ||
                this.keepAliveInterval === null)
                return;
            // Check if the last request was sent more than the keep-alive interval ago
            if (Date.now() - this._wsRequester.lastRequestTime >= this.keepAliveInterval) {
                const timeoutSignal = this.timeout ? _polyfills_js_1.AbortSignal_.timeout(this.keepAliveInterval) : undefined;
                await this._wsRequester.request("ping", timeoutSignal)
                    .catch(() => undefined); // Ignore errors
            }
            // Schedule the next ping
            if (this.socket.readyState === _reconnecting_websocket_js_1.ReconnectingWebSocket.OPEN && this._keepAliveTimeout &&
                this.keepAliveInterval !== null) {
                const nextDelay = this.keepAliveInterval - (Date.now() - this._wsRequester.lastRequestTime);
                this._keepAliveTimeout = setTimeout(tick, nextDelay);
            }
        };
        this._keepAliveTimeout = setTimeout(tick, this.keepAliveInterval);
    }
    _keepAliveStop() {
        clearTimeout(this._keepAliveTimeout);
        this._keepAliveTimeout = undefined;
    }
    /** Resubscribe to all existing subscriptions if auto-resubscribe is enabled. */
    _resubscribeRun() {
        if (this.resubscribe) {
            for (const [id, subscription] of this._subscriptions.entries()) {
                if (subscription.promiseFinished) { // reconnect only previously connected subscriptions to avoid double subscriptions due to message buffering.
                    subscription.promise = this._wsRequester.request("subscribe", JSON.parse(id))
                        .catch((error) => subscription.resubscribeAbortController.abort(error))
                        .finally(() => subscription.promiseFinished = true);
                    subscription.promiseFinished = false;
                }
            }
        }
    }
    _resubscribeStop() {
        if (!this.resubscribe || this.socket.terminateSignal.aborted) {
            for (const subscriptionInfo of this._subscriptions.values()) {
                for (const [_, unsubscribe] of subscriptionInfo.listeners) {
                    unsubscribe(); // does not cause an error if used when the connection is closed
                }
            }
        }
    }
    /**
     * Sends a request to the Hyperliquid API via WebSocket.
     * @param endpoint - The API endpoint to send the request to.
     * @param payload - The payload to send with the request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves with parsed JSON response body.
     * @throws {WebSocketRequestError} - An error that occurs when a WebSocket request fails.
     */
    async request(type, payload, signal) {
        try {
            const timeoutSignal = this.timeout ? _polyfills_js_1.AbortSignal_.timeout(this.timeout) : undefined;
            const combinedSignal = signal && timeoutSignal
                ? _polyfills_js_1.AbortSignal_.any([signal, timeoutSignal])
                : signal ?? timeoutSignal;
            return await this._wsRequester.request("post", { type: type === "exchange" ? "action" : type, payload }, combinedSignal);
        }
        catch (error) {
            if (error instanceof base_js_1.TransportError)
                throw error; // Re-throw known errors
            throw new _websocket_async_request_js_1.WebSocketRequestError(`Unknown error while making a WebSocket request: ${error}`, { cause: error });
        }
    }
    /**
     * Subscribes to a Hyperliquid event channel.
     * Sends a subscription request to the server and listens for events.
     * @param channel - The event channel to listen to.
     * @param payload - A payload to send with the subscription request.
     * @param listener - A function to call when the event is dispatched.
     * @returns A promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     * @throws {WebSocketRequestError} - An error that occurs when a WebSocket request fails.
     */
    async subscribe(channel, payload, listener) {
        try {
            // Create a unique identifier for the subscription
            const id = _websocket_async_request_js_1.WebSocketAsyncRequest.requestToId(payload);
            // Initialize new subscription, if it doesn't exist
            let subscription = this._subscriptions.get(id);
            if (!subscription) {
                // Send subscription request
                const promise = this._wsRequester.request("subscribe", payload)
                    .finally(() => subscription.promiseFinished = true);
                // Cache subscription info
                subscription = {
                    listeners: new Map(),
                    promise,
                    promiseFinished: false,
                    resubscribeAbortController: new AbortController(),
                };
                this._subscriptions.set(id, subscription);
            }
            // Initialize new listener, if it doesn't exist
            let unsubscribe = subscription.listeners.get(listener);
            if (!unsubscribe) {
                // Create new unsubscribe function
                unsubscribe = async () => {
                    try {
                        // Remove listener and cleanup
                        this._hlEvents.removeEventListener(channel, listener);
                        const subscription = this._subscriptions.get(id);
                        subscription?.listeners.delete(listener);
                        // If no listeners remain, remove subscription entirely
                        if (subscription?.listeners.size === 0) {
                            // Cleanup subscription
                            this._subscriptions.delete(id);
                            // If the socket is open, send unsubscription request
                            if (this.socket.readyState === _reconnecting_websocket_js_1.ReconnectingWebSocket.OPEN) {
                                await this._wsRequester.request("unsubscribe", payload);
                            }
                        }
                    }
                    catch (error) {
                        if (error instanceof base_js_1.TransportError)
                            throw error; // Re-throw known errors
                        throw new _websocket_async_request_js_1.WebSocketRequestError(`Unknown error while unsubscribing from a WebSocket channel: ${error}`, { cause: error });
                    }
                };
                // Add listener and cache unsubscribe function
                this._hlEvents.addEventListener(channel, listener);
                subscription.listeners.set(listener, unsubscribe);
            }
            // Wait for the initial subscription request to complete
            await subscription.promise;
            // Return subscription control object
            return {
                unsubscribe,
                resubscribeSignal: subscription.resubscribeAbortController.signal,
            };
        }
        catch (error) {
            if (error instanceof base_js_1.TransportError)
                throw error; // Re-throw known errors
            throw new _websocket_async_request_js_1.WebSocketRequestError(`Unknown error while subscribing to a WebSocket channel: ${error}`, { cause: error });
        }
    }
    /**
     * Waits until the WebSocket connection is ready.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the promise by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves when the connection is ready.
     */
    ready(signal) {
        return new Promise((resolve, reject) => {
            const combinedSignal = signal
                ? _polyfills_js_1.AbortSignal_.any([this.socket.terminateSignal, signal])
                : this.socket.terminateSignal;
            if (combinedSignal.aborted)
                return reject(combinedSignal.reason);
            if (this.socket.readyState === _reconnecting_websocket_js_1.ReconnectingWebSocket.OPEN)
                return resolve();
            const handleOpen = () => {
                combinedSignal.removeEventListener("abort", handleAbort);
                resolve();
            };
            const handleAbort = () => {
                this.socket.removeEventListener("open", handleOpen);
                reject(combinedSignal.reason);
            };
            this.socket.addEventListener("open", handleOpen, { once: true });
            combinedSignal.addEventListener("abort", handleAbort, { once: true });
        });
    }
    /**
     * Closes the WebSocket connection and waits until it is fully closed.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the promise by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves when the connection is fully closed.
     */
    close(signal) {
        return new Promise((resolve, reject) => {
            if (signal?.aborted)
                return reject(signal.reason);
            if (this.socket.readyState === _reconnecting_websocket_js_1.ReconnectingWebSocket.CLOSED)
                return resolve();
            const handleClose = () => {
                signal?.removeEventListener("abort", handleAbort);
                resolve();
            };
            const handleAbort = () => {
                reject(signal?.reason);
            };
            this.socket.addEventListener("close", handleClose, { once: true, signal });
            this.socket.addEventListener("error", handleClose, { once: true, signal });
            signal?.addEventListener("abort", handleAbort, { once: true });
            this.socket.close();
        });
    }
}
exports.WebSocketTransport = WebSocketTransport;
//# sourceMappingURL=mod.js.map