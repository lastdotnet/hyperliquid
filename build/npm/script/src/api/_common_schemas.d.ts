import * as v from "valibot";
/**
 * Time-in-force.
 * - `"Gtc"`: Remains active until filled or canceled.
 * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
 * - `"Alo"`: Adds liquidity only.
 * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
 * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
 */
export declare const TIFSchema: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
/** Place order parameters. */
export declare const PlaceOrderParamsSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset ID. */
    readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
    /** Position side (`true` for long, `false` for short). */
    readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
    /** Price. */
    readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
    /** Size (in base currency units). */
    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
    /** Is reduce-only? */
    readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
    /** Order type. */
    readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        /** Limit order parameters. */
        readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /**
             * Time-in-force.
             * - `"Gtc"`: Remains active until filled or canceled.
             * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
             * - `"Alo"`: Adds liquidity only.
             * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
             * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
             */
            readonly tif: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
        }, undefined>, v.DescriptionAction<{
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
        }, "Limit order parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Trigger order parameters. */
        readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Is market order? */
            readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
            /** Trigger price. */
            readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
            /** Indicates whether it is take profit or stop loss. */
            readonly tpsl: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"tp", undefined>, v.LiteralSchema<"sl", undefined>], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
        }, undefined>, v.DescriptionAction<{
            isMarket: boolean;
            triggerPx: string;
            tpsl: "tp" | "sl";
        }, "Trigger order parameters.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        limit: {
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
        };
    } | {
        trigger: {
            isMarket: boolean;
            triggerPx: string;
            tpsl: "tp" | "sl";
        };
    }, "Order type.">]>;
    /** Client Order ID. */
    readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
}, undefined>, v.DescriptionAction<{
    a: number;
    b: boolean;
    p: string;
    s: string;
    r: boolean;
    t: {
        limit: {
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
        };
    } | {
        trigger: {
            isMarket: boolean;
            triggerPx: string;
            tpsl: "tp" | "sl";
        };
    };
    c?: `0x${string}` | undefined;
}, "Place order parameters.">]>;
/** Candle interval. */
export declare const CandleIntervalSchema: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"1m", undefined>, v.LiteralSchema<"3m", undefined>, v.LiteralSchema<"5m", undefined>, v.LiteralSchema<"15m", undefined>, v.LiteralSchema<"30m", undefined>, v.LiteralSchema<"1h", undefined>, v.LiteralSchema<"2h", undefined>, v.LiteralSchema<"4h", undefined>, v.LiteralSchema<"8h", undefined>, v.LiteralSchema<"12h", undefined>, v.LiteralSchema<"1d", undefined>, v.LiteralSchema<"3d", undefined>, v.LiteralSchema<"1w", undefined>, v.LiteralSchema<"1M", undefined>], undefined>, v.DescriptionAction<"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M", "Time interval.">]>;
/** Order details. */
export declare const OrderSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Order side ("B" = Bid/Buy, "A" = Ask/Sell). */
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    /** Limit price. */
    readonly limitPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Limit price.">]>;
    /** Size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
    /** Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    /** Timestamp when the order was placed (in ms since epoch). */
    readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the order was placed (in ms since epoch).">]>;
    /** Original size at order placement. */
    readonly origSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Original size at order placement.">]>;
    /** Client Order ID. */
    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
    /** Indicates if the order is reduce-only. */
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
/** Open order with additional display information. */
export declare const DetailedOrderSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Order side ("B" = Bid/Buy, "A" = Ask/Sell). */
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    /** Limit price. */
    readonly limitPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Limit price.">]>;
    /** Size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
    /** Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    /** Timestamp when the order was placed (in ms since epoch). */
    readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the order was placed (in ms since epoch).">]>;
    /** Original size at order placement. */
    readonly origSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Original size at order placement.">]>;
    /** Condition for triggering the order. */
    readonly triggerCondition: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Condition for triggering the order.">]>;
    /** Indicates if the order is a trigger order. */
    readonly isTrigger: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is a trigger order.">]>;
    /** Trigger price. */
    readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
    /** Child orders associated with this order. */
    readonly children: v.SchemaWithPipe<readonly [v.ArraySchema<v.LazySchema<any>, undefined>, v.DescriptionAction<any[], "Child orders associated with this order.">]>;
    /** Indicates if the order is a position TP/SL order. */
    readonly isPositionTpsl: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is a position TP/SL order.">]>;
    /** Indicates whether the order is reduce-only. */
    readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates whether the order is reduce-only.">]>;
    /**
     * Order type for market execution.
     * - `"Market"`: Executes immediately at the market price.
     * - `"Limit"`: Executes at the specified limit price or better.
     * - `"Stop Market"`: Activates as a market order when a stop price is reached.
     * - `"Stop Limit"`: Activates as a limit order when a stop price is reached.
     * - `"Take Profit Market"`: Executes as a market order when a take profit price is reached.
     * - `"Take Profit Limit"`: Executes as a limit order when a take profit price is reached.
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/order-types
     */
    readonly orderType: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Market", undefined>, v.LiteralSchema<"Limit", undefined>, v.LiteralSchema<"Stop Market", undefined>, v.LiteralSchema<"Stop Limit", undefined>, v.LiteralSchema<"Take Profit Market", undefined>, v.LiteralSchema<"Take Profit Limit", undefined>], undefined>, v.DescriptionAction<"Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit", string>]>;
    /**
     * Time-in-force options.
     * - `"Gtc"`: Remains active until filled or canceled.
     * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
     * - `"Alo"`: Adds liquidity only.
     * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
     * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
     */
    readonly tif: v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>, undefined>;
    /** Client Order ID. */
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
/**
 * Order processing status.
 * - `"open"`: Order active and waiting to be filled.
 * - `"filled"`: Order fully executed.
 * - `"canceled"`: Order canceled by the user.
 * - `"triggered"`: Order triggered and awaiting execution.
 * - `"rejected"`: Order rejected by the system.
 * - `"marginCanceled"`: Order canceled due to insufficient margin.
 * - `"vaultWithdrawalCanceled"`: Canceled due to a user withdrawal from vault.
 * - `"openInterestCapCanceled"`: Canceled due to order being too aggressive when open interest was at cap.
 * - `"selfTradeCanceled"`: Canceled due to self-trade prevention.
 * - `"reduceOnlyCanceled"`: Canceled reduced-only order that does not reduce position.
 * - `"siblingFilledCanceled"`: Canceled due to sibling ordering being filled.
 * - `"delistedCanceled"`: Canceled due to asset delisting.
 * - `"liquidatedCanceled"`: Canceled due to liquidation.
 * - `"scheduledCancel"`: Canceled due to exceeding scheduled cancel deadline (dead man's switch).
 * - `"tickRejected"`: Rejected due to invalid tick price.
 * - `"minTradeNtlRejected"`: Rejected due to order notional below minimum.
 * - `"perpMarginRejected"`: Rejected due to insufficient margin.
 * - `"reduceOnlyRejected"`: Rejected due to reduce only.
 * - `"badAloPxRejected"`: Rejected due to post-only immediate match.
 * - `"iocCancelRejected"`: Rejected due to IOC not able to match.
 * - `"badTriggerPxRejected"`: Rejected due to invalid TP/SL price.
 * - `"marketOrderNoLiquidityRejected"`: Rejected due to lack of liquidity for market order.
 * - `"positionIncreaseAtOpenInterestCapRejected"`: Rejected due to open interest cap.
 * - `"positionFlipAtOpenInterestCapRejected"`: Rejected due to open interest cap.
 * - `"tooAggressiveAtOpenInterestCapRejected"`: Rejected due to price too aggressive at open interest cap.
 * - `"openInterestIncreaseRejected"`: Rejected due to open interest cap.
 * - `"insufficientSpotBalanceRejected"`: Rejected due to insufficient spot balance.
 * - `"oracleRejected"`: Rejected due to price too far from oracle.
 * - `"perpMaxPositionRejected"`: Rejected due to exceeding margin tier limit at current leverage.
 */
export declare const OrderProcessingStatusSchema: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"open", undefined>, v.LiteralSchema<"filled", undefined>, v.LiteralSchema<"canceled", undefined>, v.LiteralSchema<"triggered", undefined>, v.LiteralSchema<"rejected", undefined>, v.LiteralSchema<"marginCanceled", undefined>, v.LiteralSchema<"vaultWithdrawalCanceled", undefined>, v.LiteralSchema<"openInterestCapCanceled", undefined>, v.LiteralSchema<"selfTradeCanceled", undefined>, v.LiteralSchema<"reduceOnlyCanceled", undefined>, v.LiteralSchema<"siblingFilledCanceled", undefined>, v.LiteralSchema<"delistedCanceled", undefined>, v.LiteralSchema<"liquidatedCanceled", undefined>, v.LiteralSchema<"scheduledCancel", undefined>, v.LiteralSchema<"tickRejected", undefined>, v.LiteralSchema<"minTradeNtlRejected", undefined>, v.LiteralSchema<"perpMarginRejected", undefined>, v.LiteralSchema<"reduceOnlyRejected", undefined>, v.LiteralSchema<"badAloPxRejected", undefined>, v.LiteralSchema<"iocCancelRejected", undefined>, v.LiteralSchema<"badTriggerPxRejected", undefined>, v.LiteralSchema<"marketOrderNoLiquidityRejected", undefined>, v.LiteralSchema<"positionIncreaseAtOpenInterestCapRejected", undefined>, v.LiteralSchema<"positionFlipAtOpenInterestCapRejected", undefined>, v.LiteralSchema<"tooAggressiveAtOpenInterestCapRejected", undefined>, v.LiteralSchema<"openInterestIncreaseRejected", undefined>, v.LiteralSchema<"insufficientSpotBalanceRejected", undefined>, v.LiteralSchema<"oracleRejected", undefined>, v.LiteralSchema<"perpMaxPositionRejected", undefined>], undefined>, v.DescriptionAction<"open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected", string>]>;
/** L2 order book level. */
export declare const L2BookLevelSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Price. */
    readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
    /** Total size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size.">]>;
    /** Number of individual orders. */
    readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
}, undefined>, v.DescriptionAction<{
    px: string;
    sz: string;
    n: number;
}, "L2 order book level.">]>;
/** State of the TWAP order. */
export declare const TwapStateSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Executed notional value. */
    readonly executedNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed notional value.">]>;
    /** Executed size. */
    readonly executedSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed size.">]>;
    /** Duration in minutes. */
    readonly minutes: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in minutes.">]>;
    /** Indicates if the TWAP randomizes execution. */
    readonly randomize: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the TWAP randomizes execution.">]>;
    /** Indicates if the order is reduce-only. */
    readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is reduce-only.">]>;
    /** Order side ("B" = Bid/Buy, "A" = Ask/Sell). */
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    /** Order size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Order size.">]>;
    /** Start time of the TWAP order (in ms since epoch). */
    readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time of the TWAP order (in ms since epoch).">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    executedNtl: string;
    executedSz: string;
    minutes: number;
    randomize: boolean;
    reduceOnly: boolean;
    side: "B" | "A";
    sz: string;
    timestamp: number;
    user: `0x${string}`;
}, "State of the TWAP order.">]>;
/**
 * Current status of the TWAP order.
 * - `"finished"`: Fully executed.
 * - `"activated"`: Active and executing.
 * - `"terminated"`: Terminated.
 * - `"error"`: An error occurred.
 */
export declare const TwapStatusSchema: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
    /** Status of the TWAP order. */
    readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"finished", undefined>, v.LiteralSchema<"activated", undefined>, v.LiteralSchema<"terminated", undefined>], undefined>, v.DescriptionAction<"finished" | "activated" | "terminated", "Status of the TWAP order.">]>;
}, undefined>, v.ObjectSchema<{
    /** Status of the TWAP order. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"error", undefined>, v.DescriptionAction<"error", "Status of the TWAP order.">]>;
    /** Error message. */
    readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
}, undefined>], undefined>, v.DescriptionAction<{
    status: "finished" | "activated" | "terminated";
} | {
    status: "error";
    description: string;
}, string>]>;
/** Order fill record. */
export declare const FillSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Price. */
    readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
    /** Size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
    /** Order side ("B" = Bid/Buy, "A" = Ask/Sell). */
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    /** Timestamp when the trade occurred (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
    /** Start position size. */
    readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
    /** Direction indicator for frontend display. */
    readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
    /** Realized PnL. */
    readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
    /** L1 transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
    /** Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    /** Indicates if the fill was a taker order. */
    readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
    /** Fee charged or rebate received (negative indicates rebate). */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
    /** Unique transaction identifier for a partial fill of an order. */
    readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
    /** Client Order ID. */
    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
    /** Liquidation details. */
    readonly liquidation: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ObjectSchema<{
        /** Address of the liquidated user. */
        readonly liquidatedUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
        /** Mark price at the time of liquidation. */
        readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price at the time of liquidation.">]>;
        /** Liquidation method. */
        readonly method: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"market", undefined>, v.LiteralSchema<"backstop", undefined>], undefined>, v.DescriptionAction<"market" | "backstop", "Liquidation method.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        liquidatedUser: `0x${string}`;
        markPx: string;
        method: "market" | "backstop";
    } | undefined, "Liquidation details.">]>;
    /** Token in which the fee is denominated (e.g., "USDC"). */
    readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
    /** ID of the TWAP. */
    readonly twapId: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "ID of the TWAP.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    px: string;
    sz: string;
    side: "B" | "A";
    time: number;
    startPosition: string;
    dir: string;
    closedPnl: string;
    hash: `0x${string}`;
    oid: number;
    crossed: boolean;
    fee: string;
    tid: number;
    cloid?: `0x${string}` | undefined;
    liquidation?: {
        liquidatedUser: `0x${string}`;
        markPx: string;
        method: "market" | "backstop";
    } | undefined;
    feeToken: string;
    twapId: number | null;
}, "Order fill record.">]>;
/** TWAP fill record. */
export declare const TwapFillSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Price. */
    readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
    /** Size. */
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
    /** Order side ("B" = Bid/Buy, "A" = Ask/Sell). */
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    /** Timestamp when the trade occurred (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
    /** Start position size. */
    readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
    /** Direction indicator for frontend display. */
    readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
    /** Realized PnL. */
    readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
    /** L1 transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
    /** Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    /** Indicates if the fill was a taker order. */
    readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
    /** Fee charged or rebate received (negative indicates rebate). */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
    /** Unique transaction identifier for a partial fill of an order. */
    readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
    /** Token in which the fee is denominated (e.g., "USDC"). */
    readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
    /** ID of the TWAP. */
    readonly twapId: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "ID of the TWAP.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    px: string;
    sz: string;
    side: "B" | "A";
    time: number;
    startPosition: string;
    dir: string;
    closedPnl: string;
    hash: `0x${string}`;
    oid: number;
    crossed: boolean;
    fee: string;
    tid: number;
    feeToken: string;
    twapId: number | null;
}, "TWAP fill record.">]>;
//# sourceMappingURL=_common_schemas.d.ts.map