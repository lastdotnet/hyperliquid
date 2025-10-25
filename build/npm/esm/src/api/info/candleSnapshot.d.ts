import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request candlestick snapshots.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export declare const CandleSnapshotRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"candleSnapshot", undefined>, v.DescriptionAction<"candleSnapshot", "Type of request.">]>;
    /** Request parameters. */
    readonly req: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol (e.g., BTC). */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
        /** Time interval. */
        readonly interval: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"1m", undefined>, v.LiteralSchema<"3m", undefined>, v.LiteralSchema<"5m", undefined>, v.LiteralSchema<"15m", undefined>, v.LiteralSchema<"30m", undefined>, v.LiteralSchema<"1h", undefined>, v.LiteralSchema<"2h", undefined>, v.LiteralSchema<"4h", undefined>, v.LiteralSchema<"8h", undefined>, v.LiteralSchema<"12h", undefined>, v.LiteralSchema<"1d", undefined>, v.LiteralSchema<"3d", undefined>, v.LiteralSchema<"1w", undefined>, v.LiteralSchema<"1M", undefined>], undefined>, v.DescriptionAction<"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M", "Time interval.">]>;
        /** Start time (in ms since epoch). */
        readonly startTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time (in ms since epoch).">]>;
        /** End time (in ms since epoch). */
        readonly endTime: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null | undefined, "End time (in ms since epoch).">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        interval: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
        startTime: number;
        endTime?: number | null | undefined;
    }, "Request parameters.">]>;
}, undefined>, v.DescriptionAction<{
    type: "candleSnapshot";
    req: {
        coin: string;
        interval: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
        startTime: number;
        endTime?: number | null | undefined;
    };
}, "Request candlestick snapshots.">]>;
export type CandleSnapshotRequest = v.InferOutput<typeof CandleSnapshotRequest>;
/**
 * Array of candlestick data points.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
export declare const CandleSnapshotResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Opening timestamp (ms since epoch). */
    readonly t: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Opening timestamp (ms since epoch).">]>;
    /** Closing timestamp (ms since epoch). */
    readonly T: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Closing timestamp (ms since epoch).">]>;
    /** Asset symbol. */
    readonly s: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Candle interval. */
    readonly i: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"1m", undefined>, v.LiteralSchema<"3m", undefined>, v.LiteralSchema<"5m", undefined>, v.LiteralSchema<"15m", undefined>, v.LiteralSchema<"30m", undefined>, v.LiteralSchema<"1h", undefined>, v.LiteralSchema<"2h", undefined>, v.LiteralSchema<"4h", undefined>, v.LiteralSchema<"8h", undefined>, v.LiteralSchema<"12h", undefined>, v.LiteralSchema<"1d", undefined>, v.LiteralSchema<"3d", undefined>, v.LiteralSchema<"1w", undefined>, v.LiteralSchema<"1M", undefined>], undefined>, v.DescriptionAction<"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M", "Time interval.">]>;
    /** Opening price. */
    readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Opening price.">]>;
    /** Closing price. */
    readonly c: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Closing price.">]>;
    /** Highest price. */
    readonly h: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Highest price.">]>;
    /** Lowest price. */
    readonly l: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Lowest price.">]>;
    /** Total volume traded in base currency. */
    readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total volume traded in base currency.">]>;
    /** Number of trades executed. */
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
}, "Candlestick data point.">]>, undefined>, v.DescriptionAction<{
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
}[], "Array of candlestick data points.">]>;
export type CandleSnapshotResponse = v.InferOutput<typeof CandleSnapshotResponse>;
/** Request parameters for the {@linkcode candleSnapshot} function. */
export type CandleSnapshotParameters = v.InferInput<typeof CandleSnapshotRequest>["req"];
/**
 * Request candlestick snapshots.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of candlestick data points.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { candleSnapshot } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await candleSnapshot(
 *   { transport },
 *   { coin: "ETH", interval: "1h", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
export declare function candleSnapshot(config: InfoRequestConfig, params: DeepImmutable<CandleSnapshotParameters>, signal?: AbortSignal): Promise<CandleSnapshotResponse>;
//# sourceMappingURL=candleSnapshot.d.ts.map