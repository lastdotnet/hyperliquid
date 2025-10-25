import { TransportError } from "../base.js";
/** Configuration options for the `ReconnectingWebSocket`. */
export interface ReconnectingWebSocketOptions {
    /**
     * Custom WebSocket constructor.
     * @defaultValue The global `WebSocket` constructor.
     */
    WebSocket?: new (url: string | URL, protocols?: string | string[]) => WebSocket;
    /**
     * Maximum number of reconnection attempts.
     * @defaultValue `3`
     */
    maxRetries?: number;
    /**
     * Maximum time in ms to wait for a connection to open.
     * Set to `null` to disable.
     * @defaultValue `10_000`
     */
    connectionTimeout?: number | null;
    /**
     * Delay before reconnection in ms.
     * May be a number or a function that returns a number.
     * @param attempt - The current attempt number.
     * @defaultValue `(attempt) => Math.min(~~(1 << attempt) * 150, 10_000)` - Exponential backoff (max 10s)
     */
    reconnectionDelay?: number | ((attempt: number) => number);
}
type WebSocketSendData = string | ArrayBufferLike | Blob | ArrayBufferView;
/** Error thrown when reconnection problems occur. */
export declare class ReconnectingWebSocketError extends TransportError {
    code: "RECONNECTION_LIMIT" | "TERMINATED_BY_USER" | "UNKNOWN_ERROR";
    constructor(code: "RECONNECTION_LIMIT" | "TERMINATED_BY_USER" | "UNKNOWN_ERROR", cause?: unknown);
}
/**
 * A WebSocket that automatically reconnects and restores event listeners after disconnection.
 * Fully compatible with standard WebSocket API.
 *
 * Additions:
 * - `reconnectOptions` property: The options used to configure the reconnection behavior.
 * - `terminateSignal` property: An `AbortSignal` that is aborted when the instance is permanently closed.
 */
export declare class ReconnectingWebSocket implements WebSocket {
    protected _socket: WebSocket;
    protected _protocols?: string | string[];
    protected _listeners: {
        type: string;
        listener: EventListenerOrEventListenerObject;
        options?: boolean | AddEventListenerOptions;
        listenerProxy: EventListenerOrEventListenerObject;
    }[];
    protected _attempt: number;
    protected _messageBuffer: {
        data: WebSocketSendData;
        signal?: AbortSignal;
    }[];
    protected _abortController: AbortController;
    reconnectOptions: Required<ReconnectingWebSocketOptions>;
    readonly terminateSignal: AbortSignal;
    constructor(url: string | URL, options?: ReconnectingWebSocketOptions);
    constructor(url: string | URL, protocols?: string | string[], options?: ReconnectingWebSocketOptions);
    protected _createSocket(url: string | URL, protocols?: string | string[]): WebSocket;
    protected _cleanup(code: ConstructorParameters<typeof ReconnectingWebSocketError>[0], cause?: unknown): void;
    /** Initializes the internal event listeners for the socket. */
    protected _initInternalListeners(): void;
    protected _open: () => void;
    protected _close: () => Promise<void>;
    get url(): string;
    get readyState(): number;
    get bufferedAmount(): number;
    get extensions(): string;
    get protocol(): string;
    get binaryType(): BinaryType;
    set binaryType(value: BinaryType);
    readonly CONNECTING = 0;
    readonly OPEN = 1;
    readonly CLOSING = 2;
    readonly CLOSED = 3;
    static readonly CONNECTING = 0;
    static readonly OPEN = 1;
    static readonly CLOSING = 2;
    static readonly CLOSED = 3;
    get onclose(): ((this: WebSocket, ev: CloseEvent) => any) | null;
    set onclose(value: ((this: WebSocket, ev: CloseEvent) => any) | null);
    get onerror(): ((this: WebSocket, ev: Event) => any) | null;
    set onerror(value: ((this: WebSocket, ev: Event) => any) | null);
    get onmessage(): ((this: WebSocket, ev: MessageEvent<any>) => any) | null;
    set onmessage(value: ((this: WebSocket, ev: MessageEvent<any>) => any) | null);
    get onopen(): ((this: WebSocket, ev: Event) => any) | null;
    set onopen(value: ((this: WebSocket, ev: Event) => any) | null);
    /**
     * @param permanently - If `true`, the connection will be permanently closed. Default is `true`.
     */
    close(code?: number, reason?: string, permanently?: boolean): void;
    /**
     * @param signal - `AbortSignal` to cancel sending a message if it was in the buffer.
     * @note If the connection is not open, the data will be buffered and sent when the connection is established.
     */
    send(data: WebSocketSendData, signal?: AbortSignal): void;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: ((this: ReconnectingWebSocket, ev: WebSocketEventMap[K]) => any) | {
        handleEvent: (event: WebSocketEventMap[K]) => any;
    }, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: ((this: ReconnectingWebSocket, ev: WebSocketEventMap[K]) => any) | {
        handleEvent: (event: WebSocketEventMap[K]) => any;
    }, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
}
export {};
//# sourceMappingURL=_reconnecting_websocket.d.ts.map