import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user fees.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
 */
export declare const UserFeesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userFees", undefined>, v.DescriptionAction<"userFees", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userFees";
    user: `0x${string}`;
}, "Request user fees.">]>;
export type UserFeesRequest = v.InferOutput<typeof UserFeesRequest>;
/**
 * User fees.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
 */
export declare const UserFeesResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Daily user volume metrics. */
    readonly dailyUserVlm: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Date in YYYY-M-D format. */
        readonly date: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IsoDateAction<string, undefined>, v.DescriptionAction<string, "Date in YYYY-M-D format.">]>;
        /** User cross-trade volume. */
        readonly userCross: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User cross-trade volume.">]>;
        /** User add-liquidity volume. */
        readonly userAdd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User add-liquidity volume.">]>;
        /** Exchange total volume. */
        readonly exchange: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Exchange total volume.">]>;
    }, undefined>, v.DescriptionAction<{
        date: string;
        userCross: string;
        userAdd: string;
        exchange: string;
    }, "Daily user volume metrics record.">]>, undefined>, v.DescriptionAction<{
        date: string;
        userCross: string;
        userAdd: string;
        exchange: string;
    }[], "Daily user volume metrics.">]>;
    /** Fee schedule information. */
    readonly feeSchedule: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Cross-trade fee rate. */
        readonly cross: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cross-trade fee rate.">]>;
        /** Add-liquidity fee rate. */
        readonly add: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Add-liquidity fee rate.">]>;
        /** Spot cross-trade fee rate. */
        readonly spotCross: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Spot cross-trade fee rate.">]>;
        /** Spot add-liquidity fee rate. */
        readonly spotAdd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Spot add-liquidity fee rate.">]>;
        /** Fee tiers details. */
        readonly tiers: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Array of VIP fee tiers. */
            readonly vip: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Notional volume cutoff. */
                readonly ntlCutoff: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Notional volume cutoff.">]>;
                /** Cross-trade fee rate. */
                readonly cross: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cross-trade fee rate.">]>;
                /** Add-liquidity fee rate. */
                readonly add: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Add-liquidity fee rate.">]>;
                /** Spot cross-trade fee rate. */
                readonly spotCross: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Spot cross-trade fee rate.">]>;
                /** Spot add-liquidity fee rate. */
                readonly spotAdd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Spot add-liquidity fee rate.">]>;
            }, undefined>, v.DescriptionAction<{
                ntlCutoff: string;
                cross: string;
                add: string;
                spotCross: string;
                spotAdd: string;
            }, "VIP fee tier.">]>, undefined>, v.DescriptionAction<{
                ntlCutoff: string;
                cross: string;
                add: string;
                spotCross: string;
                spotAdd: string;
            }[], "Array of VIP fee tiers.">]>;
            /** Array of market maker fee tiers. */
            readonly mm: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Maker fraction cutoff. */
                readonly makerFractionCutoff: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Maker fraction cutoff.">]>;
                /** Add-liquidity fee rate. */
                readonly add: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Add-liquidity fee rate.">]>;
            }, undefined>, v.DescriptionAction<{
                makerFractionCutoff: string;
                add: string;
            }, "Market maker fee tier.">]>, undefined>, v.DescriptionAction<{
                makerFractionCutoff: string;
                add: string;
            }[], "Array of market maker fee tiers.">]>;
        }, undefined>, v.DescriptionAction<{
            vip: {
                ntlCutoff: string;
                cross: string;
                add: string;
                spotCross: string;
                spotAdd: string;
            }[];
            mm: {
                makerFractionCutoff: string;
                add: string;
            }[];
        }, "Fee tiers details.">]>;
        /** Referral discount rate. */
        readonly referralDiscount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Referral discount rate.">]>;
        /** Array of staking discount tiers. */
        readonly stakingDiscountTiers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Basis points of maximum supply. */
            readonly bpsOfMaxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Basis points of maximum supply.">]>;
            /** Discount rate applied. */
            readonly discount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Discount rate applied.">]>;
        }, undefined>, v.DescriptionAction<{
            bpsOfMaxSupply: string;
            discount: string;
        }, "Staking discount tier.">]>, undefined>, v.DescriptionAction<{
            bpsOfMaxSupply: string;
            discount: string;
        }[], "Staking discount tiers details.">]>;
    }, undefined>, v.DescriptionAction<{
        cross: string;
        add: string;
        spotCross: string;
        spotAdd: string;
        tiers: {
            vip: {
                ntlCutoff: string;
                cross: string;
                add: string;
                spotCross: string;
                spotAdd: string;
            }[];
            mm: {
                makerFractionCutoff: string;
                add: string;
            }[];
        };
        referralDiscount: string;
        stakingDiscountTiers: {
            bpsOfMaxSupply: string;
            discount: string;
        }[];
    }, "Array of staking discount tiers.">]>;
    /** User cross-trade rate. */
    readonly userCrossRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User cross-trade rate.">]>;
    /** User add-liquidity rate. */
    readonly userAddRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User add-liquidity rate.">]>;
    /** User spot cross-trade rate. */
    readonly userSpotCrossRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User spot cross-trade rate.">]>;
    /** User spot add-liquidity rate. */
    readonly userSpotAddRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User spot add-liquidity rate.">]>;
    /** Active referral discount rate. */
    readonly activeReferralDiscount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Active referral discount rate.">]>;
    /** Trial details. */
    readonly trial: v.SchemaWithPipe<readonly [v.NullableSchema<v.UnknownSchema, undefined>, v.DescriptionAction<unknown, "Trial details.">]>;
    /** Fee trial escrow amount. */
    readonly feeTrialEscrow: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee trial escrow amount.">]>;
    /** Timestamp when next trial becomes available. */
    readonly nextTrialAvailableTimestamp: v.SchemaWithPipe<readonly [v.NullableSchema<v.UnknownSchema, undefined>, v.DescriptionAction<unknown, "Timestamp when next trial becomes available.">]>;
    readonly stakingLink: v.NullableSchema<v.UnknownSchema, undefined>;
    /** Active staking discount details. */
    readonly activeStakingDiscount: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Basis points of maximum supply. */
        readonly bpsOfMaxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Basis points of maximum supply.">]>;
        /** Discount rate applied. */
        readonly discount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Discount rate applied.">]>;
    }, undefined>, v.DescriptionAction<{
        bpsOfMaxSupply: string;
        discount: string;
    }, "Active staking discount details.">]>;
}, undefined>, v.DescriptionAction<{
    dailyUserVlm: {
        date: string;
        userCross: string;
        userAdd: string;
        exchange: string;
    }[];
    feeSchedule: {
        cross: string;
        add: string;
        spotCross: string;
        spotAdd: string;
        tiers: {
            vip: {
                ntlCutoff: string;
                cross: string;
                add: string;
                spotCross: string;
                spotAdd: string;
            }[];
            mm: {
                makerFractionCutoff: string;
                add: string;
            }[];
        };
        referralDiscount: string;
        stakingDiscountTiers: {
            bpsOfMaxSupply: string;
            discount: string;
        }[];
    };
    userCrossRate: string;
    userAddRate: string;
    userSpotCrossRate: string;
    userSpotAddRate: string;
    activeReferralDiscount: string;
    trial: unknown;
    feeTrialEscrow: string;
    nextTrialAvailableTimestamp: unknown;
    stakingLink: unknown;
    activeStakingDiscount: {
        bpsOfMaxSupply: string;
        discount: string;
    };
}, "User fees.">]>;
export type UserFeesResponse = v.InferOutput<typeof UserFeesResponse>;
/** Request parameters for the {@linkcode userFees} function. */
export type UserFeesParameters = Omit<v.InferInput<typeof UserFeesRequest>, "type">;
/**
 * Request user fees.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns User fees.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userFees } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userFees(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function userFees(config: InfoRequestConfig, params: DeepImmutable<UserFeesParameters>, signal?: AbortSignal): Promise<UserFeesResponse>;
//# sourceMappingURL=userFees.d.ts.map