import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request builder deployed perpetual market limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
export declare const PerpDexLimitsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDexLimits", undefined>, v.DescriptionAction<"perpDexLimits", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "perpDexLimits";
    dex: string;
}, "Request builder deployed perpetual market limits.">]>;
export type PerpDexLimitsRequest = v.InferOutput<typeof PerpDexLimitsRequest>;
/**
 * Builder deployed perpetual market limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
export declare const PerpDexLimitsResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
    /** Total open interest cap. */
    readonly totalOiCap: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total open interest cap.">]>;
    /** Open interest size cap per perpetual. */
    readonly oiSzCapPerPerp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Open interest size cap per perpetual.">]>;
    /** Maximum transfer notional amount. */
    readonly maxTransferNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Maximum transfer notional amount.">]>;
    /** Coin to open interest cap mapping. */
    readonly coinToOiCap: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "Coin to open interest cap mapping.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    totalOiCap: string;
    oiSzCapPerPerp: string;
    maxTransferNtl: string;
    coinToOiCap: [string, string][];
} | null, "Builder deployed perpetual market limits.">]>;
export type PerpDexLimitsResponse = v.InferOutput<typeof PerpDexLimitsResponse>;
/** Request parameters for the {@linkcode perpDexLimits} function. */
export type PerpDexLimitsParameters = Omit<v.InferInput<typeof PerpDexLimitsRequest>, "type">;
/**
 * Request builder deployed perpetual market limits.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Builder deployed perpetual market limits.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDexLimits } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await perpDexLimits(
 *   { transport },
 *   { dex: "test" },
 * );
 * ```
 */
export declare function perpDexLimits(config: InfoRequestConfig, params: DeepImmutable<PerpDexLimitsParameters>, signal?: AbortSignal): Promise<PerpDexLimitsResponse>;
//# sourceMappingURL=perpDexLimits.d.ts.map