import { type IRequestTransport, type ISubscriptionTransport, type Subscription } from "../base.js";
import { ReconnectingWebSocket, ReconnectingWebSocketError, type ReconnectingWebSocketOptions } from "./_reconnecting_websocket.js";
import { HyperliquidEventTarget } from "./_hyperliquid_event_target.js";
import { WebSocketAsyncRequest, WebSocketRequestError } from "./_websocket_async_request.js";
export { ReconnectingWebSocket, ReconnectingWebSocketError, WebSocketRequestError };
export type { ReconnectingWebSocketOptions };
type MaybePromise<T> = T | Promise<T>;
/** Configuration options for the WebSocket transport layer. */
export interface WebSocketTransportOptions {
    /**
     * Indicates this transport uses testnet endpoint.
     * @defaultValue `false`
     */
    isTestnet?: boolean;
    /**
     * Custom WebSocket endpoint for API and Subscription requests.
     * - Mainnet:
     *   - API: `wss://api.hyperliquid.xyz/ws`
     *   - Explorer: `wss://rpc.hyperliquid.xyz/ws`
     * - Testnet:
     *   - API: `wss://api.hyperliquid-testnet.xyz/ws`
     *   - Explorer: `wss://rpc.hyperliquid-testnet.xyz/ws`
     * @defaultValue `wss://api.hyperliquid.xyz/ws` for mainnet, `wss://api.hyperliquid-testnet.xyz/ws` for testnet
     */
    url?: string | URL;
    /**
     * Timeout for requests in ms.
     * Set to `null` to disable.
     * @defaultValue `10_000`
     */
    timeout?: number | null;
    /**
     * Interval between sending ping messages in ms.
     * Set to `null` to disable.
     * @defaultValue `30_000`
     */
    keepAliveInterval?: number | null;
    /** Reconnection policy configuration for closed connections. */
    reconnect?: ReconnectingWebSocketOptions;
    /**
     * Enable automatic re-subscription to Hyperliquid subscription after reconnection.
     * @defaultValue `true`
     */
    resubscribe?: boolean;
    onRequest?: (type: string, payload: unknown) => MaybePromise<unknown | void | null | undefined>;
    onResponse?: (response: unknown) => MaybePromise<unknown | void | null | undefined>;
    onError?: (error: unknown) => MaybePromise<Error | void | null | undefined>;
}
/** WebSocket implementation of the REST and Subscription transport interfaces. */
export declare class WebSocketTransport implements IRequestTransport, ISubscriptionTransport {
    protected _wsRequester: WebSocketAsyncRequest;
    protected _hlEvents: HyperliquidEventTarget;
    protected _keepAliveTimeout: ReturnType<typeof setTimeout> | undefined;
    protected _subscriptions: Map<string, // Unique identifier based on the payload
    {
        listeners: Map<(data: CustomEvent) => void, // Event listener function
        () => Promise<void>>;
        promise: Promise<unknown>;
        promiseFinished: boolean;
        resubscribeAbortController: AbortController;
    }>;
    /** Indicates this transport uses testnet endpoint. */
    readonly isTestnet: boolean;
    /**
     * Timeout for requests in ms.
     * Set to `null` to disable.
     */
    timeout: number | null;
    /**
     * Interval between sending ping messages in ms.
     * Set to `null` to disable.
     */
    keepAliveInterval: number | null;
    /** Enable automatic re-subscription to Hyperliquid subscription after reconnection. */
    resubscribe: boolean;
    /** The WebSocket that is used for communication. */
    readonly socket: ReconnectingWebSocket;
    /**
     * Creates a new WebSocket transport instance.
     * @param options - Configuration options for the WebSocket transport layer.
     */
    constructor(options?: WebSocketTransportOptions);
    /**
     * Keep the connection alive.
     * Sends ping only when no other requests were sent within the keep-alive interval.
     */
    protected _keepAliveRun(): void;
    protected _keepAliveStop(): void;
    /** Resubscribe to all existing subscriptions if auto-resubscribe is enabled. */
    protected _resubscribeRun(): void;
    protected _resubscribeStop(): void;
    /**
     * Sends a request to the Hyperliquid API via WebSocket.
     * @param endpoint - The API endpoint to send the request to.
     * @param payload - The payload to send with the request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves with parsed JSON response body.
     * @throws {WebSocketRequestError} - An error that occurs when a WebSocket request fails.
     */
    request<T>(type: "info" | "exchange", payload: unknown, signal?: AbortSignal): Promise<T>;
    /**
     * Subscribes to a Hyperliquid event channel.
     * Sends a subscription request to the server and listens for events.
     * @param channel - The event channel to listen to.
     * @param payload - A payload to send with the subscription request.
     * @param listener - A function to call when the event is dispatched.
     * @returns A promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     * @throws {WebSocketRequestError} - An error that occurs when a WebSocket request fails.
     */
    subscribe<T>(channel: string, payload: unknown, listener: (data: CustomEvent<T>) => void): Promise<Subscription>;
    /**
     * Waits until the WebSocket connection is ready.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the promise by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves when the connection is ready.
     */
    ready(signal?: AbortSignal): Promise<void>;
    /**
     * Closes the WebSocket connection and waits until it is fully closed.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the promise by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves when the connection is fully closed.
     */
    close(signal?: AbortSignal): Promise<void>;
}
//# sourceMappingURL=mod.d.ts.map