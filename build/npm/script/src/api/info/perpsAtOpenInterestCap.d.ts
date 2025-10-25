import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request perpetuals at open interest cap.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 */
export declare const PerpsAtOpenInterestCapRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpsAtOpenInterestCap", undefined>, v.DescriptionAction<"perpsAtOpenInterestCap", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "perpsAtOpenInterestCap";
    dex?: string | undefined;
}, "Request perpetuals at open interest cap.">]>;
export type PerpsAtOpenInterestCapRequest = v.InferOutput<typeof PerpsAtOpenInterestCapRequest>;
/**
 * Array of perpetuals at open interest caps.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 */
export declare const PerpsAtOpenInterestCapResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string[], "Array of perpetuals at open interest caps.">]>;
export type PerpsAtOpenInterestCapResponse = v.InferOutput<typeof PerpsAtOpenInterestCapResponse>;
/** Request parameters for the {@linkcode perpsAtOpenInterestCap} function. */
export type PerpsAtOpenInterestCapParameters = Omit<v.InferInput<typeof PerpsAtOpenInterestCapRequest>, "type">;
/**
 * Request perpetuals at open interest cap.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of perpetuals at open interest caps.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpsAtOpenInterestCap } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await perpsAtOpenInterestCap({ transport });
 * ```
 */
export declare function perpsAtOpenInterestCap(config: InfoRequestConfig, params?: DeepImmutable<PerpsAtOpenInterestCapParameters>, signal?: AbortSignal): Promise<PerpsAtOpenInterestCapResponse>;
export declare function perpsAtOpenInterestCap(config: InfoRequestConfig, signal?: AbortSignal): Promise<PerpsAtOpenInterestCapResponse>;
//# sourceMappingURL=perpsAtOpenInterestCap.d.ts.map