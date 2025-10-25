import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to order updates for a specific user. */
export declare const OrderUpdatesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"orderUpdates", undefined>, v.DescriptionAction<"orderUpdates", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "orderUpdates";
    user: `0x${string}`;
}, "Subscription to order updates for a specific user.">]>;
export type OrderUpdatesRequest = v.InferOutput<typeof OrderUpdatesRequest>;
/** Event of array of orders with their current processing status. */
export declare const OrderUpdatesEvent: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Order details. */
    readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly limitPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Limit price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the order was placed (in ms since epoch).">]>;
        readonly origSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Original size at order placement.">]>;
        readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        readonly reduceOnly: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if the order is reduce-only.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        side: "B" | "A";
        limitPx: string;
        sz: string;
        oid: number;
        timestamp: number;
        origSz: string;
        cloid?: `0x${string}` | undefined;
        reduceOnly?: true | undefined;
    }, "Order details.">]>;
    /** Order processing status. */
    readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"open", undefined>, v.LiteralSchema<"filled", undefined>, v.LiteralSchema<"canceled", undefined>, v.LiteralSchema<"triggered", undefined>, v.LiteralSchema<"rejected", undefined>, v.LiteralSchema<"marginCanceled", undefined>, v.LiteralSchema<"vaultWithdrawalCanceled", undefined>, v.LiteralSchema<"openInterestCapCanceled", undefined>, v.LiteralSchema<"selfTradeCanceled", undefined>, v.LiteralSchema<"reduceOnlyCanceled", undefined>, v.LiteralSchema<"siblingFilledCanceled", undefined>, v.LiteralSchema<"delistedCanceled", undefined>, v.LiteralSchema<"liquidatedCanceled", undefined>, v.LiteralSchema<"scheduledCancel", undefined>, v.LiteralSchema<"tickRejected", undefined>, v.LiteralSchema<"minTradeNtlRejected", undefined>, v.LiteralSchema<"perpMarginRejected", undefined>, v.LiteralSchema<"reduceOnlyRejected", undefined>, v.LiteralSchema<"badAloPxRejected", undefined>, v.LiteralSchema<"iocCancelRejected", undefined>, v.LiteralSchema<"badTriggerPxRejected", undefined>, v.LiteralSchema<"marketOrderNoLiquidityRejected", undefined>, v.LiteralSchema<"positionIncreaseAtOpenInterestCapRejected", undefined>, v.LiteralSchema<"positionFlipAtOpenInterestCapRejected", undefined>, v.LiteralSchema<"tooAggressiveAtOpenInterestCapRejected", undefined>, v.LiteralSchema<"openInterestIncreaseRejected", undefined>, v.LiteralSchema<"insufficientSpotBalanceRejected", undefined>, v.LiteralSchema<"oracleRejected", undefined>, v.LiteralSchema<"perpMaxPositionRejected", undefined>], undefined>, v.DescriptionAction<"open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected", string>]>;
    /** Timestamp when the status was last updated (in ms since epoch). */
    readonly statusTimestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the status was last updated (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    order: {
        coin: string;
        side: "B" | "A";
        limitPx: string;
        sz: string;
        oid: number;
        timestamp: number;
        origSz: string;
        cloid?: `0x${string}` | undefined;
        reduceOnly?: true | undefined;
    };
    status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
    statusTimestamp: number;
}, "Order with its current processing status.">]>, undefined>, v.DescriptionAction<{
    order: {
        coin: string;
        side: "B" | "A";
        limitPx: string;
        sz: string;
        oid: number;
        timestamp: number;
        origSz: string;
        cloid?: `0x${string}` | undefined;
        reduceOnly?: true | undefined;
    };
    status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
    statusTimestamp: number;
}[], "Event of array of orders with their current processing status.">]>;
export type OrderUpdatesEvent = v.InferOutput<typeof OrderUpdatesEvent>;
/** Request parameters for the {@linkcode orderUpdates} function. */
export type OrderUpdatesParameters = Omit<v.InferInput<typeof OrderUpdatesRequest>, "type">;
/**
 * Subscribe to order status updates for a specific user.
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
 * import { orderUpdates } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await orderUpdates(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function orderUpdates(config: SubscriptionRequestConfig, params: DeepImmutable<OrderUpdatesParameters>, listener: (data: OrderUpdatesEvent) => void): Promise<Subscription>;
//# sourceMappingURL=orderUpdates.d.ts.map