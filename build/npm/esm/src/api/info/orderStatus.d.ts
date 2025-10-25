import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request order status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export declare const OrderStatusRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"orderStatus", undefined>, v.DescriptionAction<"orderStatus", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Order ID or Client Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
}, undefined>, v.DescriptionAction<{
    type: "orderStatus";
    user: `0x${string}`;
    oid: number | `0x${string}`;
}, "Request order status.">]>;
export type OrderStatusRequest = v.InferOutput<typeof OrderStatusRequest>;
/**
 * Order status response.
 * - If the order is found, returns detailed order information and its current status.
 * - If the order is not found, returns a status of "unknownOid".
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export declare const OrderStatusResponse: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
    /** Indicates that the order was found. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"order", undefined>, v.DescriptionAction<"order", "Indicates that the order was found.">]>;
    /** Order status details. */
    readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Order details. */
        readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
            readonly limitPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Limit price.">]>;
            readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
            readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
            readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the order was placed (in ms since epoch).">]>;
            readonly origSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Original size at order placement.">]>;
            readonly triggerCondition: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Condition for triggering the order.">]>;
            readonly isTrigger: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is a trigger order.">]>;
            readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
            readonly children: v.SchemaWithPipe<readonly [v.ArraySchema<v.LazySchema<any>, undefined>, v.DescriptionAction<any[], "Child orders associated with this order.">]>;
            readonly isPositionTpsl: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is a position TP/SL order.">]>;
            readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates whether the order is reduce-only.">]>;
            readonly orderType: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Market", undefined>, v.LiteralSchema<"Limit", undefined>, v.LiteralSchema<"Stop Market", undefined>, v.LiteralSchema<"Stop Limit", undefined>, v.LiteralSchema<"Take Profit Market", undefined>, v.LiteralSchema<"Take Profit Limit", undefined>], undefined>, v.DescriptionAction<"Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit", string>]>;
            readonly tif: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>, undefined>;
            readonly cloid: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Client Order ID.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: any[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        }, "Open order with additional display information.">]>;
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
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: any[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        };
        status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
        statusTimestamp: number;
    }, "Order status details.">]>;
}, undefined>, v.ObjectSchema<{
    /** Indicates that the order was not found. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"unknownOid", undefined>, v.DescriptionAction<"unknownOid", "Indicates that the order was not found.">]>;
}, undefined>], undefined>, v.DescriptionAction<{
    status: "order";
    order: {
        order: {
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: any[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        };
        status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
        statusTimestamp: number;
    };
} | {
    status: "unknownOid";
}, string>]>;
export type OrderStatusResponse = v.InferOutput<typeof OrderStatusResponse>;
/** Request parameters for the {@linkcode orderStatus} function. */
export type OrderStatusParameters = Omit<v.InferInput<typeof OrderStatusRequest>, "type">;
/**
 * Request order status.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Order status response.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { orderStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await orderStatus(
 *   { transport },
 *   { user: "0x...", oid: 12345 },
 * );
 * ```
 */
export declare function orderStatus(config: InfoRequestConfig, params: DeepImmutable<OrderStatusParameters>, signal?: AbortSignal): Promise<OrderStatusResponse>;
//# sourceMappingURL=orderStatus.d.ts.map