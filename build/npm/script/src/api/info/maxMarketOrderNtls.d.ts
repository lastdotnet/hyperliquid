import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request maximum market order notionals.
 * @see null
 */
export declare const MaxMarketOrderNtlsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"maxMarketOrderNtls", undefined>, v.DescriptionAction<"maxMarketOrderNtls", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "maxMarketOrderNtls";
}, "Request maximum market order notionals.">]>;
export type MaxMarketOrderNtlsRequest = v.InferOutput<typeof MaxMarketOrderNtlsRequest>;
/**
 * Maximum market order notionals.
 * @see null
 */
export declare const MaxMarketOrderNtlsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.StringSchema<undefined>], undefined>, v.DescriptionAction<[string, string], "Tuple of maximum market order notional and corresponding asset symbol.">]>, undefined>, v.DescriptionAction<[string, string][], "Maximum market order notionals.">]>;
export type MaxMarketOrderNtlsResponse = v.InferOutput<typeof MaxMarketOrderNtlsResponse>;
/** Request parameters for the {@linkcode maxMarketOrderNtls} function. */
export type MaxMarketOrderNtlsParameters = Omit<v.InferInput<typeof MaxMarketOrderNtlsRequest>, "type">;
/**
 * Request maximum market order notionals.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Maximum market order notionals.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { maxMarketOrderNtls } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await maxMarketOrderNtls({ transport });
 * ```
 */
export declare function maxMarketOrderNtls(config: InfoRequestConfig, signal?: AbortSignal): Promise<MaxMarketOrderNtlsResponse>;
//# sourceMappingURL=maxMarketOrderNtls.d.ts.map