import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 * @see null
 */
export declare const AlignedQuoteTokenInfoRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"alignedQuoteTokenInfo", undefined>, v.DescriptionAction<"alignedQuoteTokenInfo", "Type of request.">]>;
    /** Token index. */
    readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token index.">]>;
}, undefined>, v.DescriptionAction<{
    type: "alignedQuoteTokenInfo";
    token: number;
}, "Request supply, rate, and pending payment information for an aligned quote token.">]>;
export type AlignedQuoteTokenInfoRequest = v.InferOutput<typeof AlignedQuoteTokenInfoRequest>;
/**
 * Supply, rate, and pending payment information for an aligned quote token.
 * @see null
 */
export declare const AlignedQuoteTokenInfoResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Whether the token is aligned. */
    readonly isAligned: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the token is aligned.">]>;
    /** Timestamp (in ms since epoch) when the token was first aligned. */
    readonly firstAlignedTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp (in ms since epoch) when the token was first aligned.">]>;
    /** Total EVM minted supply. */
    readonly evmMintedSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total EVM minted supply.">]>;
    /** Daily wei owed as an array of [date, amount] tuples. */
    readonly dailyWeiOwed: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Date in YYYY-MM-DD format.">]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of wei owed.">]>], undefined>, v.DescriptionAction<[string, string], "[date, amount] tuple.">]>, undefined>, v.DescriptionAction<[string, string][], "Daily wei owed as an array of [date, amount] tuples.">]>;
    /** Predicted rate. */
    readonly predictedRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Predicted rate.">]>;
}, undefined>, v.DescriptionAction<{
    isAligned: boolean;
    firstAlignedTime: number;
    evmMintedSupply: string;
    dailyWeiOwed: [string, string][];
    predictedRate: string;
}, "Supply, rate, and pending payment information for an aligned quote token.">]>;
export type AlignedQuoteTokenInfoResponse = v.InferOutput<typeof AlignedQuoteTokenInfoResponse>;
/** Request parameters for the {@linkcode alignedQuoteTokenInfo} function. */
export type AlignedQuoteTokenInfoParameters = Omit<v.InferInput<typeof AlignedQuoteTokenInfoRequest>, "type">;
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Supply, rate, and pending payment information for an aligned quote token.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { alignedQuoteTokenInfo } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await alignedQuoteTokenInfo(
 *   { transport },
 *   { token: 1328 },
 * );
 * ```
 */
export declare function alignedQuoteTokenInfo(config: InfoRequestConfig, params: DeepImmutable<AlignedQuoteTokenInfoParameters>, signal?: AbortSignal): Promise<AlignedQuoteTokenInfoResponse>;
//# sourceMappingURL=alignedQuoteTokenInfo.d.ts.map