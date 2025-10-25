import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to comprehensive user and market data events. */
export declare const WebData2Request: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"webData2", undefined>, v.DescriptionAction<"webData2", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "webData2";
    user: `0x${string}`;
}, "Subscription to comprehensive user and market data events.">]>;
export type WebData2Request = v.InferOutput<typeof WebData2Request>;
/** Event of comprehensive user and market data. */
export declare const WebData2Event: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Account summary for perpetual trading. */
    readonly clearinghouseState: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly marginSummary: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total account value.">]>;
            readonly totalNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total notional position value.">]>;
            readonly totalRawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total raw USD value.">]>;
            readonly totalMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total margin used.">]>;
        }, undefined>, v.DescriptionAction<{
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        }, "Margin summary details.">]>;
        readonly crossMarginSummary: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total account value.">]>;
            readonly totalNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total notional position value.">]>;
            readonly totalRawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total raw USD value.">]>;
            readonly totalMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total margin used.">]>;
        }, undefined>, v.DescriptionAction<{
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        }, "Cross-margin summary details.">]>;
        readonly crossMaintenanceMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Maintenance margin used for cross-margin positions.">]>;
        readonly withdrawable: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount available for withdrawal.">]>;
        readonly assetPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"oneWay", undefined>, v.DescriptionAction<"oneWay", "Position type.">]>;
            readonly position: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
                readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size.">]>;
                readonly leverage: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
                    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"isolated", undefined>, v.DescriptionAction<"isolated", "Leverage type.">]>;
                    readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
                    readonly rawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of USD used (1 = $1).">]>;
                }, undefined>, v.ObjectSchema<{
                    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cross", undefined>, v.DescriptionAction<"cross", "Leverage type.">]>;
                    readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
                }, undefined>], undefined>, v.DescriptionAction<{
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                }, "Leverage details.">]>;
                readonly entryPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Average entry price.">]>;
                readonly positionValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Position value.">]>;
                readonly unrealizedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Unrealized profit and loss.">]>;
                readonly returnOnEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Return on equity.">]>;
                readonly liquidationPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Liquidation price.">]>;
                readonly marginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Margin used.">]>;
                readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
                readonly cumFunding: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly allTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total funding paid or received since account opening.">]>;
                    readonly sinceOpen: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Funding accumulated since the position was opened.">]>;
                    readonly sinceChange: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Funding accumulated since the last change in position size.">]>;
                }, undefined>, v.DescriptionAction<{
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                }, "Cumulative funding details.">]>;
            }, undefined>, v.DescriptionAction<{
                coin: string;
                szi: string;
                leverage: {
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                };
                entryPx: string;
                positionValue: string;
                unrealizedPnl: string;
                returnOnEquity: string;
                liquidationPx: string | null;
                marginUsed: string;
                maxLeverage: number;
                cumFunding: {
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                };
            }, "Position details.">]>;
        }, undefined>, v.DescriptionAction<{
            type: "oneWay";
            position: {
                coin: string;
                szi: string;
                leverage: {
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                };
                entryPx: string;
                positionValue: string;
                unrealizedPnl: string;
                returnOnEquity: string;
                liquidationPx: string | null;
                marginUsed: string;
                maxLeverage: number;
                cumFunding: {
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                };
            };
        }, "Position for a specific asset.">]>, undefined>, v.DescriptionAction<{
            type: "oneWay";
            position: {
                coin: string;
                szi: string;
                leverage: {
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                };
                entryPx: string;
                positionValue: string;
                unrealizedPnl: string;
                returnOnEquity: string;
                liquidationPx: string | null;
                marginUsed: string;
                maxLeverage: number;
                cumFunding: {
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                };
            };
        }[], "Array of asset positions.">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when data was retrieved (in ms since epoch).">]>;
    }, undefined>, v.DescriptionAction<{
        marginSummary: {
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        };
        crossMarginSummary: {
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        };
        crossMaintenanceMarginUsed: string;
        withdrawable: string;
        assetPositions: {
            type: "oneWay";
            position: {
                coin: string;
                szi: string;
                leverage: {
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                };
                entryPx: string;
                positionValue: string;
                unrealizedPnl: string;
                returnOnEquity: string;
                liquidationPx: string | null;
                marginUsed: string;
                maxLeverage: number;
                cumFunding: {
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                };
            };
        }[];
        time: number;
    }, "Account summary for perpetual trading.">]>;
    /** Array of leading vaults. */
    readonly leadingVaults: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Address of the vault. */
        readonly address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the vault.">]>;
        /** Name of the vault. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the vault.">]>;
    }, undefined>, v.DescriptionAction<{
        address: `0x${string}`;
        name: string;
    }, "Vault that a user is leading.">]>, undefined>, v.DescriptionAction<{
        address: `0x${string}`;
        name: string;
    }[], "Array of leading vaults.">]>;
    /** Total equity in vaults. */
    readonly totalVaultEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total equity in vaults.">]>;
    /** Array of user open orders with frontend information. */
    readonly openOrders: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
    }, "Open order with additional display information.">]>, undefined>, v.DescriptionAction<{
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
    }[], "User open orders with frontend information.">]>;
    /** Agent address if one exists. */
    readonly agentAddress: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Agent address if one exists.">]>;
    /** Timestamp until which the agent is valid. */
    readonly agentValidUntil: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Timestamp until which the agent is valid.">]>;
    /** Cumulative ledger value. */
    readonly cumLedger: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cumulative ledger value.">]>;
    /** Metadata for perpetual assets. */
    readonly meta: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
            readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
            readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
            readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the margin requirements table.">]>;
            readonly onlyIsolated: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if only isolated margin trading is allowed.">]>;
            readonly isDelisted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if the universe is delisted.">]>;
        }, undefined>, v.DescriptionAction<{
            szDecimals: number;
            name: string;
            maxLeverage: number;
            marginTableId: number;
            onlyIsolated?: true | undefined;
            isDelisted?: true | undefined;
        }, "Trading universe parameters for perpetual asset.">]>, undefined>, v.DescriptionAction<{
            szDecimals: number;
            name: string;
            maxLeverage: number;
            marginTableId: number;
            onlyIsolated?: true | undefined;
            isDelisted?: true | undefined;
        }[], "Trading universes available for perpetual trading.">]>;
        readonly marginTables: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Description of the margin table.">]>;
            readonly marginTiers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly lowerBound: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Lower position size boundary for this tier.">]>;
                readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage for this tier.">]>;
            }, undefined>, v.DescriptionAction<{
                lowerBound: string;
                maxLeverage: number;
            }, "Individual tier in a margin requirements table.">]>, undefined>, v.DescriptionAction<{
                lowerBound: string;
                maxLeverage: number;
            }[], "Array of margin tiers defining leverage limits.">]>;
        }, undefined>, v.DescriptionAction<{
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }, "Margin requirements table with multiple tiers.">]>], undefined>, v.DescriptionAction<[number, {
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }], "Tuple of margin table ID and its details.">]>, undefined>, v.DescriptionAction<[number, {
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }][], "Margin requirement tables for different leverage tiers.">]>;
        readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
    }, undefined>, v.DescriptionAction<{
        universe: {
            szDecimals: number;
            name: string;
            maxLeverage: number;
            marginTableId: number;
            onlyIsolated?: true | undefined;
            isDelisted?: true | undefined;
        }[];
        marginTables: [number, {
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }][];
        collateralToken: number;
    }, "Metadata for perpetual assets.">]>;
    /** Context for each perpetual asset. */
    readonly assetCtxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
        readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
        readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price.">]>;
        readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
        readonly funding: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Funding rate.">]>;
        readonly openInterest: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total open interest.">]>;
        readonly premium: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Premium price.">]>;
        readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Oracle price.">]>;
        readonly impactPxs: v.SchemaWithPipe<readonly [v.NullableSchema<v.ArraySchema<v.StringSchema<undefined>, undefined>, undefined>, v.DescriptionAction<string[] | null, "Array of impact prices.">]>;
        readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
    }, undefined>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }, "Context for a specific perpetual asset.">]>, undefined>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }[], "Array of contexts for each perpetual asset.">]>;
    /** Server timestamp (in ms since epoch). */
    readonly serverTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Server timestamp (in ms since epoch).">]>;
    /** Whether this account is a vault. */
    readonly isVault: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether this account is a vault.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Array of TWAP states. */
    readonly twapStates: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly executedNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed notional value.">]>;
        readonly executedSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed size.">]>;
        readonly minutes: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in minutes.">]>;
        readonly randomize: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the TWAP randomizes execution.">]>;
        readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is reduce-only.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Order size.">]>;
        readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time of the TWAP order (in ms since epoch).">]>;
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
    }, "State of the TWAP order.">]>], undefined>, v.DescriptionAction<[number, {
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
    }], "TWAP ID and state.">]>, undefined>, v.DescriptionAction<[number, {
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
    }][], "Array of TWAP states.">]>;
    /** Account summary for spot trading. */
    readonly spotState: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly balances: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
            readonly total: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total balance.">]>;
            readonly hold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount on hold.">]>;
            readonly entryNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Entry notional value.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }, "Balance for a specific spot token.">]>, undefined>, v.DescriptionAction<{
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[], "Balance for each token.">]>;
        readonly evmEscrows: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
            readonly total: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total balance.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            token: number;
            total: string;
        }, "Escrowed balance for a specific asset.">]>, undefined>, undefined>, v.DescriptionAction<{
            coin: string;
            token: number;
            total: string;
        }[] | undefined, "Escrowed balances.">]>;
    }, undefined>, v.DescriptionAction<{
        balances: {
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[];
        evmEscrows?: {
            coin: string;
            token: number;
            total: string;
        }[] | undefined;
    }, "Account summary for spot trading.">]>;
    /** Context for each spot asset. */
    readonly spotAssetCtxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
        readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
        readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price.">]>;
        readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
        readonly circulatingSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Circulating supply.">]>;
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly totalSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total supply.">]>;
        readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
    }, undefined>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    }, "Context for a specific spot asset.">]>, undefined>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    }[], "Context for each spot asset.">]>;
    /** Whether the user has opted out of spot dusting. */
    readonly optOutOfSpotDusting: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether the user has opted out of spot dusting.">]>;
    /** Assets currently at their open interest cap. */
    readonly perpsAtOpenInterestCap: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.StringSchema<undefined>, undefined>, undefined>, v.DescriptionAction<string[] | undefined, "Assets currently at their open interest cap.">]>;
}, undefined>, v.DescriptionAction<{
    clearinghouseState: {
        marginSummary: {
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        };
        crossMarginSummary: {
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        };
        crossMaintenanceMarginUsed: string;
        withdrawable: string;
        assetPositions: {
            type: "oneWay";
            position: {
                coin: string;
                szi: string;
                leverage: {
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                };
                entryPx: string;
                positionValue: string;
                unrealizedPnl: string;
                returnOnEquity: string;
                liquidationPx: string | null;
                marginUsed: string;
                maxLeverage: number;
                cumFunding: {
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                };
            };
        }[];
        time: number;
    };
    leadingVaults: {
        address: `0x${string}`;
        name: string;
    }[];
    totalVaultEquity: string;
    openOrders: {
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
    }[];
    agentAddress: `0x${string}` | null;
    agentValidUntil: number | null;
    cumLedger: string;
    meta: {
        universe: {
            szDecimals: number;
            name: string;
            maxLeverage: number;
            marginTableId: number;
            onlyIsolated?: true | undefined;
            isDelisted?: true | undefined;
        }[];
        marginTables: [number, {
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }][];
        collateralToken: number;
    };
    assetCtxs: {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }[];
    serverTime: number;
    isVault: boolean;
    user: `0x${string}`;
    twapStates: [number, {
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
    }][];
    spotState: {
        balances: {
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[];
        evmEscrows?: {
            coin: string;
            token: number;
            total: string;
        }[] | undefined;
    };
    spotAssetCtxs: {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    }[];
    optOutOfSpotDusting?: true | undefined;
    perpsAtOpenInterestCap?: string[] | undefined;
}, "Comprehensive user and market data.">]>;
export type WebData2Event = v.InferOutput<typeof WebData2Event>;
/** Request parameters for the {@linkcode webData2} function. */
export type WebData2Parameters = Omit<v.InferInput<typeof WebData2Request>, "type">;
/**
 * Subscribe to comprehensive user and market data updates.
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
 * import { webData2 } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await webData2(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function webData2(config: SubscriptionRequestConfig, params: DeepImmutable<WebData2Parameters>, listener: (data: WebData2Event) => void): Promise<Subscription>;
//# sourceMappingURL=webData2.d.ts.map