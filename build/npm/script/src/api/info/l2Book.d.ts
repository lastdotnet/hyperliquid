import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request L2 order book.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare const L2BookRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"l2Book", undefined>, v.DescriptionAction<"l2Book", "Type of request.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Number of significant figures. */
    readonly nSigFigs: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<2, undefined>, v.LiteralSchema<3, undefined>, v.LiteralSchema<4, undefined>, v.LiteralSchema<5, undefined>], undefined>]>, undefined>, v.DescriptionAction<2 | 5 | 4 | 3 | null | undefined, "Number of significant figures.">]>;
    /** Mantissa for aggregation (if `nSigFigs` is 5). */
    readonly mantissa: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<2, undefined>, v.LiteralSchema<5, undefined>], undefined>]>, undefined>, v.DescriptionAction<2 | 5 | null | undefined, "Mantissa for aggregation (if `nSigFigs` is 5).">]>;
}, undefined>, v.DescriptionAction<{
    type: "l2Book";
    coin: string;
    nSigFigs?: 2 | 5 | 4 | 3 | null | undefined;
    mantissa?: 2 | 5 | null | undefined;
}, "Request L2 order book.">]>;
export type L2BookRequest = v.InferOutput<typeof L2BookRequest>;
/**
 * L2 order book snapshot.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare const L2BookResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Timestamp of the snapshot (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the snapshot (in ms since epoch).">]>;
    /** Bid and ask levels (index 0 = bids, index 1 = asks). */
    readonly levels: v.SchemaWithPipe<readonly [v.TupleSchema<[v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size.">]>;
        readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
    }, undefined>, v.DescriptionAction<{
        px: string;
        sz: string;
        n: number;
    }, "L2 order book level.">]>, undefined>, v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size.">]>;
        readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
    }, undefined>, v.DescriptionAction<{
        px: string;
        sz: string;
        n: number;
    }, "L2 order book level.">]>, undefined>], undefined>, v.DescriptionAction<[{
        px: string;
        sz: string;
        n: number;
    }[], {
        px: string;
        sz: string;
        n: number;
    }[]], "Bid and ask levels (index 0 = bids, index 1 = asks).">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    coin: string;
    time: number;
    levels: [{
        px: string;
        sz: string;
        n: number;
    }[], {
        px: string;
        sz: string;
        n: number;
    }[]];
} | null, "L2 order book snapshot or `null` if the market does not exist.">]>;
export type L2BookResponse = v.InferOutput<typeof L2BookResponse>;
/** Request parameters for the {@linkcode l2Book} function. */
export type L2BookParameters = Omit<v.InferInput<typeof L2BookRequest>, "type">;
/**
 * Request L2 order book.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns L2 order book snapshot.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { l2Book } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await l2Book(
 *   { transport },
 *   { coin: "ETH", nSigFigs: 2 },
 * );
 * ```
 */
export declare function l2Book(config: InfoRequestConfig, params: DeepImmutable<L2BookParameters>, signal?: AbortSignal): Promise<L2BookResponse>;
//# sourceMappingURL=l2Book.d.ts.map