import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to best bid and offer events for a specific asset. */
export declare const BboRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"bbo", undefined>, v.DescriptionAction<"bbo", "Type of subscription.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
}, undefined>, v.DescriptionAction<{
    type: "bbo";
    coin: string;
}, "Subscription to best bid and offer events for a specific asset.">]>;
export type BboRequest = v.InferOutput<typeof BboRequest>;
/** Event of best bid and offer. */
export declare const BboEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Time of the BBO update (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Time of the BBO update (in ms since epoch).">]>;
    /** Best bid and offer tuple [bid, offer], either can be undefined if unavailable. */
    readonly bbo: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size.">]>;
        readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
    }, undefined>, v.DescriptionAction<{
        px: string;
        sz: string;
        n: number;
    }, "L2 order book level.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size.">]>;
        readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
    }, undefined>, v.DescriptionAction<{
        px: string;
        sz: string;
        n: number;
    }, "L2 order book level.">]>], undefined>, v.DescriptionAction<[{
        px: string;
        sz: string;
        n: number;
    }, {
        px: string;
        sz: string;
        n: number;
    }], "Best bid and offer tuple [bid, offer], either can be undefined if unavailable.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    time: number;
    bbo: [{
        px: string;
        sz: string;
        n: number;
    }, {
        px: string;
        sz: string;
        n: number;
    }];
}, "Event of best bid and offer.">]>;
export type BboEvent = v.InferOutput<typeof BboEvent>;
/** Request parameters for the {@linkcode bbo} function. */
export type BboParameters = Omit<v.InferInput<typeof BboRequest>, "type">;
/**
 * Subscribe to best bid and offer updates for a specific asset.
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
 * import { bbo } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await bbo(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function bbo(config: SubscriptionRequestConfig, params: DeepImmutable<BboParameters>, listener: (data: BboEvent) => void): Promise<Subscription>;
//# sourceMappingURL=bbo.d.ts.map