import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request liquidatable.
 * @see null
 */
export declare const LiquidatableRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"liquidatable", undefined>, v.DescriptionAction<"liquidatable", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "liquidatable";
}, "Request liquidatable.">]>;
export type LiquidatableRequest = v.InferOutput<typeof LiquidatableRequest>;
/**
 * @see null
 */
export declare const LiquidatableResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnknownSchema, undefined>]>;
export type LiquidatableResponse = v.InferOutput<typeof LiquidatableResponse>;
/**
 * Request liquidatable.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { liquidatable } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await liquidatable({ transport });
 * ```
 */
export declare function liquidatable(config: InfoRequestConfig, signal?: AbortSignal): Promise<LiquidatableResponse>;
//# sourceMappingURL=liquidatable.d.ts.map