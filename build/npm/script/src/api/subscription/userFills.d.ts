import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to user fill events for a specific user. */
export declare const UserFillsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userFills", undefined>, v.DescriptionAction<"userFills", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** If true, partial fills are aggregated when a crossing order fills multiple resting orders. */
    readonly aggregateByTime: v.SchemaWithPipe<readonly [v.OptionalSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | undefined, "If true, partial fills are aggregated when a crossing order fills multiple resting orders.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userFills";
    user: `0x${string}`;
    aggregateByTime?: boolean | undefined;
}, "Subscription to user fill events for a specific user.">]>;
export type UserFillsRequest = v.InferOutput<typeof UserFillsRequest>;
/** Event of user trade fill. */
export declare const UserFillsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
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
    /** Whether this is an initial snapshot. */
    readonly isSnapshot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether this is an initial snapshot.">]>;
}, undefined>, v.DescriptionAction<{
    user: `0x${string}`;
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
    isSnapshot?: true | undefined;
}, "Event of user trade fill.">]>;
export type UserFillsEvent = v.InferOutput<typeof UserFillsEvent>;
/** Request parameters for the {@linkcode userFills} function. */
export type UserFillsParameters = Omit<v.InferInput<typeof UserFillsRequest>, "type">;
/**
 * Subscribe to trade fill updates for a specific user.
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
 * import { userFills } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userFills(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function userFills(config: SubscriptionRequestConfig, params: DeepImmutable<UserFillsParameters>, listener: (data: UserFillsEvent) => void): Promise<Subscription>;
//# sourceMappingURL=userFills.d.ts.map