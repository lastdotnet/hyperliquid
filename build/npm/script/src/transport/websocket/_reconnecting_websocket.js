"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconnectingWebSocket = exports.ReconnectingWebSocketError = void 0;
// deno-lint-ignore-file no-explicit-any
const base_js_1 = require("../base.js");
const _polyfills_js_1 = require("../_polyfills.js");
/** Error thrown when reconnection problems occur. */
class ReconnectingWebSocketError extends base_js_1.TransportError {
    code;
    constructor(code, cause) {
        super(`Error when reconnecting WebSocket: ${code}`);
        this.code = code;
        this.name = "ReconnectingWebSocketError";
        this.cause = cause;
    }
}
exports.ReconnectingWebSocketError = ReconnectingWebSocketError;
/**
 * A WebSocket that automatically reconnects and restores event listeners after disconnection.
 * Fully compatible with standard WebSocket API.
 *
 * Additions:
 * - `reconnectOptions` property: The options used to configure the reconnection behavior.
 * - `terminateSignal` property: An `AbortSignal` that is aborted when the instance is permanently closed.
 */
class ReconnectingWebSocket {
    _socket;
    _protocols;
    _listeners = [];
    _attempt = 0;
    _messageBuffer = [];
    _abortController = new AbortController();
    reconnectOptions;
    terminateSignal = this._abortController.signal;
    constructor(url, protocolsOrOptions, maybeOptions) {
        const protocols = typeof protocolsOrOptions === "string" || Array.isArray(protocolsOrOptions)
            ? protocolsOrOptions
            : undefined;
        const options = typeof protocolsOrOptions === "object" && !Array.isArray(protocolsOrOptions)
            ? protocolsOrOptions
            : maybeOptions;
        if (!globalThis.WebSocket && !options?.WebSocket) {
            throw new Error("No WebSocket implementation found. Please provide a custom WebSocket constructor in the options.");
        }
        this.reconnectOptions = {
            WebSocket: options?.WebSocket ?? WebSocket,
            maxRetries: options?.maxRetries ?? 3,
            connectionTimeout: options?.connectionTimeout === undefined ? 10_000 : options.connectionTimeout,
            reconnectionDelay: options?.reconnectionDelay ?? ((n) => Math.min(~~(1 << n) * 150, 10_000)),
        };
        this._socket = this._createSocket(url, protocols);
        this._protocols = protocols;
        this._initInternalListeners();
    }
    _createSocket(url, protocols) {
        const socket = new this.reconnectOptions.WebSocket(url, protocols);
        if (this.reconnectOptions.connectionTimeout === null)
            return socket;
        const handleOpen = () => {
            socket.removeEventListener("close", handleClose);
            socket.removeEventListener("error", handleError);
            signal.removeEventListener("abort", handleAbort);
        };
        const handleClose = () => {
            socket.removeEventListener("open", handleOpen);
            socket.removeEventListener("error", handleError);
            signal.removeEventListener("abort", handleAbort);
        };
        const handleError = () => {
            socket.removeEventListener("open", handleOpen);
            socket.removeEventListener("close", handleClose);
            signal.removeEventListener("abort", handleAbort);
        };
        const handleAbort = () => {
            socket.close(3008, "Timeout"); // https://www.iana.org/assignments/websocket/websocket.xml#close-code-number
        };
        const signal = _polyfills_js_1.AbortSignal_.timeout(this.reconnectOptions.connectionTimeout);
        socket.addEventListener("open", handleOpen, { once: true, signal });
        socket.addEventListener("close", handleClose, { once: true, signal });
        socket.addEventListener("error", handleError, { once: true, signal });
        signal.addEventListener("abort", handleAbort, { once: true });
        return socket;
    }
    _cleanup(code, cause) {
        const error = new ReconnectingWebSocketError(code, cause);
        this._abortController.abort(error);
        this._listeners = [];
        this._socket.close();
    }
    /** Initializes the internal event listeners for the socket. */
    _initInternalListeners() {
        const handleClose = () => {
            this._socket.removeEventListener("error", handleError);
            this._close();
        };
        const handleError = () => {
            this._socket.removeEventListener("close", handleClose);
            this._close();
        };
        this._socket.addEventListener("open", this._open, { once: true });
        this._socket.addEventListener("close", handleClose, { once: true });
        this._socket.addEventListener("error", handleError, { once: true });
    }
    _open = () => {
        // Reset the attempt counter
        this._attempt = 0;
        // Send all buffered messages
        while (this._messageBuffer.length > 0) {
            const item = this._messageBuffer.shift();
            if (item.signal?.aborted)
                continue;
            this._socket.send(item.data);
        }
    };
    _close = async () => {
        try {
            // If the instance is terminated, do not attempt to reconnect
            if (this._abortController.signal.aborted)
                return;
            // Check if reconnection should be attempted
            if (++this._attempt > this.reconnectOptions.maxRetries) {
                this._cleanup("RECONNECTION_LIMIT");
                return;
            }
            // Delay before reconnecting
            const delay = typeof this.reconnectOptions.reconnectionDelay === "number"
                ? this.reconnectOptions.reconnectionDelay
                : this.reconnectOptions.reconnectionDelay(this._attempt);
            await sleep(delay, this._abortController.signal);
            // Create a new WebSocket instance and re-apply event listeners
            const { onclose, onerror, onmessage, onopen } = this._socket; // preserve event handlers
            this._socket = this._createSocket(this._socket.url, this._protocols);
            this._initInternalListeners();
            this._listeners.forEach(({ type, listenerProxy, options }) => {
                this._socket.addEventListener(type, listenerProxy, options);
            });
            this._socket.onclose = onclose;
            this._socket.onerror = onerror;
            this._socket.onmessage = onmessage;
            this._socket.onopen = onopen;
        }
        catch (error) {
            this._cleanup("UNKNOWN_ERROR", error);
        }
    };
    // WebSocket property implementations
    get url() {
        return this._socket.url;
    }
    get readyState() {
        return this._socket.readyState;
    }
    get bufferedAmount() {
        return this._socket.bufferedAmount;
    }
    get extensions() {
        return this._socket.extensions;
    }
    get protocol() {
        return this._socket.protocol;
    }
    get binaryType() {
        return this._socket.binaryType;
    }
    set binaryType(value) {
        this._socket.binaryType = value;
    }
    CONNECTING = 0;
    OPEN = 1;
    CLOSING = 2;
    CLOSED = 3;
    static CONNECTING = 0;
    static OPEN = 1;
    static CLOSING = 2;
    static CLOSED = 3;
    get onclose() {
        return this._socket.onclose;
    }
    set onclose(value) {
        this._socket.onclose = value;
    }
    get onerror() {
        return this._socket.onerror;
    }
    set onerror(value) {
        this._socket.onerror = value;
    }
    get onmessage() {
        return this._socket.onmessage;
    }
    set onmessage(value) {
        this._socket.onmessage = value;
    }
    get onopen() {
        return this._socket.onopen;
    }
    set onopen(value) {
        this._socket.onopen = value;
    }
    /**
     * @param permanently - If `true`, the connection will be permanently closed. Default is `true`.
     */
    close(code, reason, permanently = true) {
        this._socket.close(code, reason);
        if (permanently)
            this._cleanup("TERMINATED_BY_USER");
    }
    /**
     * @param signal - `AbortSignal` to cancel sending a message if it was in the buffer.
     * @note If the connection is not open, the data will be buffered and sent when the connection is established.
     */
    send(data, signal) {
        if (signal?.aborted)
            return;
        if (this._socket.readyState !== ReconnectingWebSocket.OPEN && !this._abortController.signal.aborted) {
            this._messageBuffer.push({ data, signal });
        }
        else {
            this._socket.send(data);
        }
    }
    addEventListener(type, listener, options) {
        // Wrap the listener to handle reconnection
        let listenerProxy;
        if (this._abortController.signal.aborted) {
            // If the instance is terminated, use the original listener
            listenerProxy = listener;
        }
        else {
            // Check if the listener is already registered
            const index = this._listeners.findIndex((e) => listenersMatch(e, { type, listener, options }));
            if (index !== -1) {
                // Use the existing listener proxy
                listenerProxy = this._listeners[index].listenerProxy;
            }
            else {
                // Wrap the original listener to follow the once option when reconnecting
                listenerProxy = (event) => {
                    try {
                        if (typeof listener === "function") {
                            listener.call(this, event);
                        }
                        else {
                            listener.handleEvent(event);
                        }
                    }
                    finally {
                        // If the listener is marked as once, remove it after the first invocation
                        if (typeof options === "object" && options.once === true) {
                            const index = this._listeners.findIndex((e) => listenersMatch(e, { type, listener, options }));
                            if (index !== -1) {
                                this._listeners.splice(index, 1);
                            }
                        }
                    }
                };
                this._listeners.push({ type, listener, options, listenerProxy });
            }
        }
        // Add the wrapped (or original) listener
        this._socket.addEventListener(type, listenerProxy, options);
    }
    removeEventListener(type, listener, options) {
        // Remove a wrapped listener, not an original listener
        const index = this._listeners.findIndex((e) => listenersMatch(e, { type, listener, options }));
        if (index !== -1) {
            const { listenerProxy } = this._listeners[index];
            this._socket.removeEventListener(type, listenerProxy, options);
            this._listeners.splice(index, 1);
        }
        else {
            // If the wrapped listener is not found, remove the original listener
            this._socket.removeEventListener(type, listener, options);
        }
    }
    dispatchEvent(event) {
        return this._socket.dispatchEvent(event);
    }
}
exports.ReconnectingWebSocket = ReconnectingWebSocket;
function listenersMatch(a, b) {
    // `EventTarget` only compares `capture` in options, even if one is an object and the other is boolean
    const aCapture = Boolean(typeof a.options === "object" ? a.options.capture : a.options);
    const bCapture = Boolean(typeof b.options === "object" ? b.options.capture : b.options);
    return a.type === b.type && a.listener === b.listener && aCapture === bCapture;
}
function sleep(ms, signal) {
    if (signal?.aborted)
        return Promise.reject(signal.reason);
    return new Promise((resolve, reject) => {
        const onAbort = () => {
            clearTimeout(timer);
            reject(signal?.reason);
        };
        const onTimeout = () => {
            signal?.removeEventListener("abort", onAbort);
            resolve();
        };
        const timer = setTimeout(onTimeout, ms);
        signal?.addEventListener("abort", onAbort, { once: true });
    });
}
//# sourceMappingURL=_reconnecting_websocket.js.map