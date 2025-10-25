import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to clearinghouse state events for a specific user. */
export declare const ClearinghouseStateRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"clearinghouseState", undefined>, v.DescriptionAction<"clearinghouseState", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "clearinghouseState";
    user: `0x${string}`;
    dex?: string | undefined;
}, "Subscription to clearinghouse state events for a specific user.">]>;
export type ClearinghouseStateRequest = v.InferOutput<typeof ClearinghouseStateRequest>;
/** Event of clearinghouse state for a specific user. */
export declare const ClearinghouseStateEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "DEX name (empty string for main dex).">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
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
}, undefined>, v.DescriptionAction<{
    dex: string;
    user: `0x${string}`;
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
}, "Event of clearinghouse state for a specific user.">]>;
export type ClearinghouseStateEvent = v.InferOutput<typeof ClearinghouseStateEvent>;
/** Request parameters for the {@linkcode clearinghouseState} function. */
export type ClearinghouseStateParameters = Omit<v.InferInput<typeof ClearinghouseStateRequest>, "type">;
/**
 * Subscribe to clearinghouse state updates for a specific user.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { clearinghouseState } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await clearinghouseState(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function clearinghouseState(config: SubscriptionRequestConfig, params: DeepImmutable<ClearinghouseStateParameters>, listener: (data: ClearinghouseStateEvent) => void): Promise<Subscription>;
//# sourceMappingURL=clearinghouseState.d.ts.map