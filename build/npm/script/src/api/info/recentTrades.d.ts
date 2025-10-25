import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request recent trades.
 * @see null
 */
export declare const RecentTradesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"recentTrades", undefined>, v.DescriptionAction<"recentTrades", "Type of request.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
}, undefined>, v.DescriptionAction<{
    type: "recentTrades";
    coin: string;
}, "Request recent trades.">]>;
export type RecentTradesRequest = v.InferOutput<typeof RecentTradesRequest>;
/**
 * Array of recent trades.
 * @see null
 */
export declare const RecentTradesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Trade side ("B" = Bid/Buy, "A" = Ask/Sell). */
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Trade side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    /** Trade price. */
    readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trade price.">]>;
    /** Trade size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trade size.">]>;
    /** Trade timestamp (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Trade timestamp (in ms since epoch).">]>;
    /** Transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
    /** Trade ID. */
    readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Trade ID.">]>;
    /** Addresses of users involved in the trade [Maker, Taker]. */
    readonly users: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>], undefined>, v.DescriptionAction<[`0x${string}`, `0x${string}`], "Addresses of users involved in the trade [Maker, Taker].">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    side: "B" | "A";
    px: string;
    sz: string;
    time: number;
    hash: `0x${string}`;
    tid: number;
    users: [`0x${string}`, `0x${string}`];
}, "Trade for a specific asset.">]>, undefined>, v.DescriptionAction<{
    coin: string;
    side: "B" | "A";
    px: string;
    sz: string;
    time: number;
    hash: `0x${string}`;
    tid: number;
    users: [`0x${string}`, `0x${string}`];
}[], "Array of recent trades.">]>;
export type RecentTradesResponse = v.InferOutput<typeof RecentTradesResponse>;
/** Request parameters for the {@linkcode recentTrades} function. */
export type RecentTradesParameters = Omit<v.InferInput<typeof RecentTradesRequest>, "type">;
/**
 * Request recent trades.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of recent trades.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { recentTrades } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await recentTrades(
 *   { transport },
 *   { coin: "ETH" },
 * );
 * ```
 */
export declare function recentTrades(config: InfoRequestConfig, params: DeepImmutable<RecentTradesParameters>, signal?: AbortSignal): Promise<RecentTradesResponse>;
//# sourceMappingURL=recentTrades.d.ts.map