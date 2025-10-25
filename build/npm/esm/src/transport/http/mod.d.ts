import { type IRequestTransport, TransportError } from "../base.js";
type MaybePromise<T> = T | Promise<T>;
/** Error thrown when an HTTP request fails. */
export declare class HttpRequestError extends TransportError {
    response?: Response;
    body?: string;
    constructor(args?: {
        response?: Response;
        body?: string;
    }, options?: ErrorOptions);
}
/** Configuration options for the HTTP transport layer. */
export interface HttpTransportOptions {
    /**
     * Specifies whether to use the testnet API endpoints from the {@linkcode server} property.
     * @defaultValue `false`
     */
    isTestnet?: boolean;
    /**
     * Request timeout in ms. Set to `null` to disable.
     * @defaultValue `10_000`
     */
    timeout?: number | null;
    /**
     * Custom server to use for API requests.
     * @defaultValue `https://api.hyperliquid.xyz` for mainnet and `https://api.hyperliquid-testnet.xyz` for testnet.
     */
    server?: {
        mainnet?: {
            api?: string | URL;
            rpc?: string | URL;
        };
        testnet?: {
            api?: string | URL;
            rpc?: string | URL;
        };
    };
    /** A custom [`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit) that is merged with a fetch request. */
    fetchOptions?: Omit<RequestInit, "body" | "method">;
    /**
     * A callback function that is called before the request is sent.
     * @param request - An original request to send.
     * @returns If returned a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request), it will replace the original request.
     */
    onRequest?: (request: Request) => MaybePromise<Request | void | null | undefined>;
    /**
     * A callback function that is called after the response is received.
     * @param response - An original response to process.
     * @returns If returned a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response), it will replace the original response.
     */
    onResponse?: (response: Response) => MaybePromise<Response | void | null | undefined>;
    /**
     * A callback function that is called when an error occurs during fetching.
     * @param error - The error that occurred.
     * @returns If returned an [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error), it will be thrown instead of the original error (still wraps an error in {@linkcode HttpRequestError}).
     */
    onError?: (error: unknown) => MaybePromise<Error | void | null | undefined>;
}
/** HTTP implementation of the REST transport interface. */
export declare class HttpTransport implements IRequestTransport, HttpTransportOptions {
    isTestnet: boolean;
    timeout: number | null;
    server: {
        mainnet: {
            api: string | URL;
            rpc: string | URL;
        };
        testnet: {
            api: string | URL;
            rpc: string | URL;
        };
    };
    fetchOptions: Omit<RequestInit, "body" | "method">;
    onRequest?: (request: Request) => MaybePromise<Request | void | null | undefined>;
    onResponse?: (response: Response) => MaybePromise<Response | void | null | undefined>;
    onError?: (error: unknown) => MaybePromise<Error | void | null | undefined>;
    /**
     * Creates a new HTTP transport instance.
     * @param options - Configuration options for the HTTP transport layer.
     */
    constructor(options?: HttpTransportOptions);
    /**
     * Sends a request to the Hyperliquid API via fetch.
     * @param endpoint - The API endpoint to send the request to.
     * @param payload - The payload to send with the request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns A promise that resolves with parsed JSON response body.
     *
     * @throws {HttpRequestError} Thrown when the HTTP request fails.
     */
    request<T>(endpoint: "info" | "exchange" | "explorer", payload: unknown, signal?: AbortSignal): Promise<T>;
}
export {};
//# sourceMappingURL=mod.d.ts.map