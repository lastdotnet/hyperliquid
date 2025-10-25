import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to candlestick events for a specific asset and time interval. */
export declare const CandleRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"candle", undefined>, v.DescriptionAction<"candle", "Type of subscription.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Time interval. */
    readonly interval: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"1m", undefined>, v.LiteralSchema<"3m", undefined>, v.LiteralSchema<"5m", undefined>, v.LiteralSchema<"15m", undefined>, v.LiteralSchema<"30m", undefined>, v.LiteralSchema<"1h", undefined>, v.LiteralSchema<"2h", undefined>, v.LiteralSchema<"4h", undefined>, v.LiteralSchema<"8h", undefined>, v.LiteralSchema<"12h", undefined>, v.LiteralSchema<"1d", undefined>, v.LiteralSchema<"3d", undefined>, v.LiteralSchema<"1w", undefined>, v.LiteralSchema<"1M", undefined>], undefined>, v.DescriptionAction<"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M", "Time interval.">]>;
}, undefined>, v.DescriptionAction<{
    type: "candle";
    coin: string;
    interval: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
}, "Subscription to candlestick events for a specific asset and time interval.">]>;
export type CandleRequest = v.InferOutput<typeof CandleRequest>;
/** Event of candlestick data point. */
export declare const CandleEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly t: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Opening timestamp (ms since epoch).">]>;
    readonly T: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Closing timestamp (ms since epoch).">]>;
    readonly s: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    readonly i: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"1m", undefined>, v.LiteralSchema<"3m", undefined>, v.LiteralSchema<"5m", undefined>, v.LiteralSchema<"15m", undefined>, v.LiteralSchema<"30m", undefined>, v.LiteralSchema<"1h", undefined>, v.LiteralSchema<"2h", undefined>, v.LiteralSchema<"4h", undefined>, v.LiteralSchema<"8h", undefined>, v.LiteralSchema<"12h", undefined>, v.LiteralSchema<"1d", undefined>, v.LiteralSchema<"3d", undefined>, v.LiteralSchema<"1w", undefined>, v.LiteralSchema<"1M", undefined>], undefined>, v.DescriptionAction<"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M", "Time interval.">]>;
    readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Opening price.">]>;
    readonly c: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Closing price.">]>;
    readonly h: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Highest price.">]>;
    readonly l: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Lowest price.">]>;
    readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total volume traded in base currency.">]>;
    readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of trades executed.">]>;
}, undefined>, v.DescriptionAction<{
    t: number;
    T: number;
    s: string;
    i: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
    o: string;
    c: string;
    h: string;
    l: string;
    v: string;
    n: number;
}, "Candlestick data point.">]>;
export type CandleEvent = v.InferOutput<typeof CandleEvent>;
/** Request parameters for the {@linkcode candle} function. */
export type CandleParameters = Omit<v.InferInput<typeof CandleRequest>, "type">;
/**
 * Subscribe to candlestick data updates for a specific asset.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { candle } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await candle(
 *   { transport },
 *   { coin: "ETH", interval: "1h" },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function candle(config: SubscriptionRequestConfig, params: DeepImmutable<CandleParameters>, listener: (data: CandleEvent) => void): Promise<Subscription>;
//# sourceMappingURL=candle.d.ts.map