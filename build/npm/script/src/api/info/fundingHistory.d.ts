import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request funding history.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export declare const FundingHistoryRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"fundingHistory", undefined>, v.DescriptionAction<"fundingHistory", "Type of request.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time (in ms since epoch).">]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null | undefined, "End time (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    type: "fundingHistory";
    coin: string;
    startTime: number;
    endTime?: number | null | undefined;
}, "Request funding history.">]>;
export type FundingHistoryRequest = v.InferOutput<typeof FundingHistoryRequest>;
/**
 * Array of historical funding rate records for an asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
export declare const FundingHistoryResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Funding rate. */
    readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Funding rate.">]>;
    /** Premium price. */
    readonly premium: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Premium price.">]>;
    /** Funding record timestamp (ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Funding record timestamp (ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    fundingRate: string;
    premium: string;
    time: number;
}, "Historical funding rate record for an asset.">]>, undefined>, v.DescriptionAction<{
    coin: string;
    fundingRate: string;
    premium: string;
    time: number;
}[], "Array of historical funding rate records for an asset.">]>;
export type FundingHistoryResponse = v.InferOutput<typeof FundingHistoryResponse>;
/** Request parameters for the {@linkcode fundingHistory} function. */
export type FundingHistoryParameters = Omit<v.InferInput<typeof FundingHistoryRequest>, "type">;
/**
 * Request funding history.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of historical funding rate records for an asset.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { fundingHistory } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await fundingHistory(
 *   { transport },
 *   { coin: "ETH", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
export declare function fundingHistory(config: InfoRequestConfig, params: DeepImmutable<FundingHistoryParameters>, signal?: AbortSignal): Promise<FundingHistoryResponse>;
//# sourceMappingURL=fundingHistory.d.ts.map