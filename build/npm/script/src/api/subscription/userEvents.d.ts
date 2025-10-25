import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to user events for a specific user. */
export declare const UserEventsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userEvents", undefined>, v.DescriptionAction<"userEvents", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userEvents";
    user: `0x${string}`;
}, "Subscription to user events for a specific user.">]>;
export type UserEventsRequest = v.InferOutput<typeof UserEventsRequest>;
/** Event of array of user trade fills. */
export declare const FillEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of user trade fills. */
    readonly fills: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
        readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
        readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
        readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
        readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
        readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        readonly liquidation: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ObjectSchema<{
            readonly liquidatedUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
            readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price at the time of liquidation.">]>;
            readonly method: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"market", undefined>, v.LiteralSchema<"backstop", undefined>], undefined>, v.DescriptionAction<"market" | "backstop", "Liquidation method.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined, "Liquidation details.">]>;
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
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
    }, "Order fill record.">]>, undefined>, v.DescriptionAction<{
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
    }[], "Array of user trade fills.">]>;
}, undefined>, v.DescriptionAction<{
    fills: {
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
    }[];
}, "Event of array of user trade fills.">]>;
export type FillEvent = v.InferOutput<typeof FillEvent>;
/** Event of user funding update. */
export declare const FundingEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Funding update details. */
    readonly funding: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Signed position size. */
        readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size.">]>;
        /** Applied funding rate. */
        readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Applied funding rate.">]>;
        /** Number of samples. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Number of samples.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }, "Funding update details.">]>;
}, undefined>, v.DescriptionAction<{
    funding: {
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    };
}, "Event of user funding update.">]>;
export type FundingEvent = v.InferOutput<typeof FundingEvent>;
/** Event of user liquidation. */
export declare const LiquidationEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Liquidation details. */
    readonly liquidation: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Unique liquidation ID. */
        readonly lid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique liquidation ID.">]>;
        /** Address of the liquidator. */
        readonly liquidator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidator.">]>;
        /** Address of the liquidated user. */
        readonly liquidated_user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
        /** Notional position size that was liquidated. */
        readonly liquidated_ntl_pos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Notional position size that was liquidated.">]>;
        /** Account value at time of liquidation. */
        readonly liquidated_account_value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Account value at time of liquidation.">]>;
    }, undefined>, v.DescriptionAction<{
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    }, "Liquidation details.">]>;
}, undefined>, v.DescriptionAction<{
    liquidation: {
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    };
}, "Event of user liquidation.">]>;
export type LiquidationEvent = v.InferOutput<typeof LiquidationEvent>;
/** Event of array of non-user initiated order cancellations. */
export declare const NonUserCancelEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of non-user initiated order cancellations. */
    readonly nonUserCancel: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol (e.g., BTC). */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
        /** Order ID. */
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        oid: number;
    }, "Cancelled order not initiated by the user.">]>, undefined>, v.DescriptionAction<{
        coin: string;
        oid: number;
    }[], "Array of non-user initiated order cancellations.">]>;
}, undefined>, v.DescriptionAction<{
    nonUserCancel: {
        coin: string;
        oid: number;
    }[];
}, "Event of array of non-user initiated order cancellations.">]>;
export type NonUserCancelEvent = v.InferOutput<typeof NonUserCancelEvent>;
/** Event of a TWAP history entry. */
export declare const TwapHistoryEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of user's TWAP history. */
    readonly twapHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Creation time of the history record (in seconds since epoch). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Creation time of the history record (in seconds since epoch).">]>;
        /** State of the TWAP order. */
        readonly state: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
        }, "State of the TWAP order.">]>;
        /** Current status of the TWAP order. */
        readonly status: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"finished", undefined>, v.LiteralSchema<"activated", undefined>, v.LiteralSchema<"terminated", undefined>], undefined>, v.DescriptionAction<"finished" | "activated" | "terminated", "Status of the TWAP order.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"error", undefined>, v.DescriptionAction<"error", "Status of the TWAP order.">]>;
            readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
        }, undefined>], undefined>, v.DescriptionAction<{
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        }, string>]>;
        /** TWAP ID. */
        readonly twapId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "TWAP ID.">]>;
    }, undefined>, v.DescriptionAction<{
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }, "TWAP history record.">]>, undefined>, v.DescriptionAction<{
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }[], "Array of user's TWAP history.">]>;
}, undefined>, v.DescriptionAction<{
    twapHistory: {
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }[];
}, "Event of a TWAP history entry.">]>;
export type TwapHistoryEvent = v.InferOutput<typeof TwapHistoryEvent>;
/** Event of TWAP slice fills. */
export declare const TwapSliceFillsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of TWAP slice fills. */
    readonly twapSliceFills: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
        readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
        readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
        readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
        readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
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
    }, "TWAP fill record.">]>, undefined>, v.DescriptionAction<{
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
    }[], "Array of TWAP slice fills.">]>;
}, undefined>, v.DescriptionAction<{
    twapSliceFills: {
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
    }[];
}, "Event of TWAP slice fills.">]>;
export type TwapSliceFillsEvent = v.InferOutput<typeof TwapSliceFillsEvent>;
/** Event of one of possible user events. */
export declare const UserEventsEvent: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of user trade fills. */
    readonly fills: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
        readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
        readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
        readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
        readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
        readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        readonly liquidation: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ObjectSchema<{
            readonly liquidatedUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
            readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price at the time of liquidation.">]>;
            readonly method: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"market", undefined>, v.LiteralSchema<"backstop", undefined>], undefined>, v.DescriptionAction<"market" | "backstop", "Liquidation method.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined, "Liquidation details.">]>;
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
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
    }, "Order fill record.">]>, undefined>, v.DescriptionAction<{
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
    }[], "Array of user trade fills.">]>;
}, undefined>, v.DescriptionAction<{
    fills: {
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
    }[];
}, "Event of array of user trade fills.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Funding update details. */
    readonly funding: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Signed position size. */
        readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size.">]>;
        /** Applied funding rate. */
        readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Applied funding rate.">]>;
        /** Number of samples. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Number of samples.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }, "Funding update details.">]>;
}, undefined>, v.DescriptionAction<{
    funding: {
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    };
}, "Event of user funding update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Liquidation details. */
    readonly liquidation: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Unique liquidation ID. */
        readonly lid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique liquidation ID.">]>;
        /** Address of the liquidator. */
        readonly liquidator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidator.">]>;
        /** Address of the liquidated user. */
        readonly liquidated_user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
        /** Notional position size that was liquidated. */
        readonly liquidated_ntl_pos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Notional position size that was liquidated.">]>;
        /** Account value at time of liquidation. */
        readonly liquidated_account_value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Account value at time of liquidation.">]>;
    }, undefined>, v.DescriptionAction<{
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    }, "Liquidation details.">]>;
}, undefined>, v.DescriptionAction<{
    liquidation: {
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    };
}, "Event of user liquidation.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of non-user initiated order cancellations. */
    readonly nonUserCancel: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol (e.g., BTC). */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
        /** Order ID. */
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        oid: number;
    }, "Cancelled order not initiated by the user.">]>, undefined>, v.DescriptionAction<{
        coin: string;
        oid: number;
    }[], "Array of non-user initiated order cancellations.">]>;
}, undefined>, v.DescriptionAction<{
    nonUserCancel: {
        coin: string;
        oid: number;
    }[];
}, "Event of array of non-user initiated order cancellations.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of user's TWAP history. */
    readonly twapHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Creation time of the history record (in seconds since epoch). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Creation time of the history record (in seconds since epoch).">]>;
        /** State of the TWAP order. */
        readonly state: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
        }, "State of the TWAP order.">]>;
        /** Current status of the TWAP order. */
        readonly status: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"finished", undefined>, v.LiteralSchema<"activated", undefined>, v.LiteralSchema<"terminated", undefined>], undefined>, v.DescriptionAction<"finished" | "activated" | "terminated", "Status of the TWAP order.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"error", undefined>, v.DescriptionAction<"error", "Status of the TWAP order.">]>;
            readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
        }, undefined>], undefined>, v.DescriptionAction<{
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        }, string>]>;
        /** TWAP ID. */
        readonly twapId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "TWAP ID.">]>;
    }, undefined>, v.DescriptionAction<{
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }, "TWAP history record.">]>, undefined>, v.DescriptionAction<{
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }[], "Array of user's TWAP history.">]>;
}, undefined>, v.DescriptionAction<{
    twapHistory: {
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }[];
}, "Event of a TWAP history entry.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of TWAP slice fills. */
    readonly twapSliceFills: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
        readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
        readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
        readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
        readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
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
    }, "TWAP fill record.">]>, undefined>, v.DescriptionAction<{
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
    }[], "Array of TWAP slice fills.">]>;
}, undefined>, v.DescriptionAction<{
    twapSliceFills: {
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
    }[];
}, "Event of TWAP slice fills.">]>], undefined>, v.DescriptionAction<{
    fills: {
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
    }[];
} | {
    funding: {
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    };
} | {
    liquidation: {
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    };
} | {
    nonUserCancel: {
        coin: string;
        oid: number;
    }[];
} | {
    twapHistory: {
        time: number;
        state: {
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
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId: number;
    }[];
} | {
    twapSliceFills: {
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
    }[];
}, "Event of one of possible user events.">]>;
export type UserEventsEvent = v.InferOutput<typeof UserEventsEvent>;
/** Request parameters for the {@linkcode userEvents} function. */
export type UserEventsParameters = Omit<v.InferInput<typeof UserEventsRequest>, "type">;
/**
 * Subscribe to non-order events for a specific user.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 * @note Different subscriptions cannot be distinguished from each other.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { userEvents } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userEvents(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function userEvents(config: SubscriptionRequestConfig, params: DeepImmutable<UserEventsParameters>, listener: (data: UserEventsEvent) => void): Promise<Subscription>;
//# sourceMappingURL=userEvents.d.ts.map