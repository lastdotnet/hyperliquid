import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to L2 order book events for a specific asset. */
export declare const L2BookRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"l2Book", undefined>, v.DescriptionAction<"l2Book", "Type of subscription.">]>;
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
}, "Subscription to L2 order book events for a specific asset.">]>;
export type L2BookRequest = v.InferOutput<typeof L2BookRequest>;
/** Event of L2 order book snapshot. */
export declare const L2BookEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
}, undefined>, v.DescriptionAction<{
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
}, "L2 order book snapshot.">]>;
export type L2BookEvent = v.InferOutput<typeof L2BookEvent>;
/** Request parameters for the {@linkcode l2Book} function. */
export type L2BookParameters = Omit<v.InferInput<typeof L2BookRequest>, "type">;
/**
 * Subscribe to L2 order book updates for a specific asset.
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
 * import { l2Book } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await l2Book(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function l2Book(config: SubscriptionRequestConfig, params: DeepImmutable<L2BookParameters>, listener: (data: L2BookEvent) => void): Promise<Subscription>;
//# sourceMappingURL=l2Book.d.ts.map