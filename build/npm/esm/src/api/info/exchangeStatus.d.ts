import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request exchange system status information.
 * @see null
 */
export declare const ExchangeStatusRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"exchangeStatus", undefined>, v.DescriptionAction<"exchangeStatus", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "exchangeStatus";
}, "Request exchange system status information.">]>;
export type ExchangeStatusRequest = v.InferOutput<typeof ExchangeStatusRequest>;
/**
 * Exchange system status information.
 * @see null
 */
export declare const ExchangeStatusResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Server time (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Server time (in ms since epoch).">]>;
    readonly specialStatuses: v.SchemaWithPipe<readonly [v.NullableSchema<v.UnknownSchema, undefined>]>;
}, undefined>, v.DescriptionAction<{
    time: number;
    specialStatuses: unknown;
}, "Exchange system status information.">]>;
export type ExchangeStatusResponse = v.InferOutput<typeof ExchangeStatusResponse>;
/**
 * Request exchange system status information.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Exchange system status information.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { exchangeStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await exchangeStatus({ transport });
 * ```
 */
export declare function exchangeStatus(config: InfoRequestConfig, signal?: AbortSignal): Promise<ExchangeStatusResponse>;
//# sourceMappingURL=exchangeStatus.d.ts.map