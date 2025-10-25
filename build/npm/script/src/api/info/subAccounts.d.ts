import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export declare const SubAccountsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccounts", undefined>, v.DescriptionAction<"subAccounts", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "subAccounts";
    user: `0x${string}`;
}, "Request user sub-accounts.">]>;
export type SubAccountsRequest = v.InferOutput<typeof SubAccountsRequest>;
/**
 * Array of user sub-account or null if the user does not have any sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export declare const SubAccountsResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Sub-account name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Sub-account name.">]>;
    /** Sub-account address. */
    readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address.">]>;
    /** Master account address. */
    readonly master: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Master account address.">]>;
    /** Perpetual trading clearinghouse state summary. */
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
    /** Spot tokens clearinghouse state. */
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
}, undefined>, v.DescriptionAction<{
    name: string;
    subAccountUser: `0x${string}`;
    master: `0x${string}`;
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
}, "Sub-account details for a user.">]>, undefined>, undefined>, v.DescriptionAction<{
    name: string;
    subAccountUser: `0x${string}`;
    master: `0x${string}`;
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
}[] | null, "Array of user sub-account or null if the user does not have any sub-accounts.">]>;
export type SubAccountsResponse = v.InferOutput<typeof SubAccountsResponse>;
/** Request parameters for the {@linkcode subAccounts} function. */
export type SubAccountsParameters = Omit<v.InferInput<typeof SubAccountsRequest>, "type">;
/**
 * Request user sub-accounts.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user sub-account or null if the user does not have any sub-accounts.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { subAccounts } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await subAccounts(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function subAccounts(config: InfoRequestConfig, params: DeepImmutable<SubAccountsParameters>, signal?: AbortSignal): Promise<SubAccountsResponse>;
//# sourceMappingURL=subAccounts.d.ts.map