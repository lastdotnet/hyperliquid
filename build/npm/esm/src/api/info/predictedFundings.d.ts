import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request predicted funding rates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
export declare const PredictedFundingsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"predictedFundings", undefined>, v.DescriptionAction<"predictedFundings", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "predictedFundings";
}, "Request predicted funding rates.">]>;
export type PredictedFundingsRequest = v.InferOutput<typeof PredictedFundingsRequest>;
/**
 * Array of predicted funding rates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
export declare const PredictedFundingsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>, v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Exchange symbol.">]>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
    /** Predicted funding rate. */
    readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Predicted funding rate.">]>;
    /** Next funding time (ms since epoch). */
    readonly nextFundingTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Next funding time (ms since epoch).">]>;
    /** Funding interval in hours. */
    readonly fundingIntervalHours: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Funding interval in hours.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    fundingRate: string;
    nextFundingTime: number;
    fundingIntervalHours?: number | undefined;
} | null, "Predicted funding data.">]>], undefined>, v.DescriptionAction<[string, {
    fundingRate: string;
    nextFundingTime: number;
    fundingIntervalHours?: number | undefined;
} | null], "Tuple of exchange symbol and predicted funding data.">]>, undefined>, v.DescriptionAction<[string, {
    fundingRate: string;
    nextFundingTime: number;
    fundingIntervalHours?: number | undefined;
} | null][], "Array of predicted funding data for each exchange.">]>], undefined>, v.DescriptionAction<[string, [string, {
    fundingRate: string;
    nextFundingTime: number;
    fundingIntervalHours?: number | undefined;
} | null][]], "Tuple of asset symbol and its predicted funding data.">]>, undefined>, v.DescriptionAction<[string, [string, {
    fundingRate: string;
    nextFundingTime: number;
    fundingIntervalHours?: number | undefined;
} | null][]][], "Array of predicted funding rates.">]>;
export type PredictedFundingsResponse = v.InferOutput<typeof PredictedFundingsResponse>;
/**
 * Request predicted funding rates.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of predicted funding rates.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { predictedFundings } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await predictedFundings({ transport });
 * ```
 */
export declare function predictedFundings(config: InfoRequestConfig, signal?: AbortSignal): Promise<PredictedFundingsResponse>;
//# sourceMappingURL=predictedFundings.d.ts.map