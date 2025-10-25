import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user referral.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
 */
export declare const ReferralRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"referral", undefined>, v.DescriptionAction<"referral", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "referral";
    user: `0x${string}`;
}, "Request user referral.">]>;
export type ReferralRequest = v.InferOutput<typeof ReferralRequest>;
/**
 * Referral details for a user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
 */
export declare const ReferralResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Referrer details. */
    readonly referredBy: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
        /** Referrer address. */
        readonly referrer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Referrer address.">]>;
        /** Referral code used. */
        readonly code: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Referral code used.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        referrer: `0x${string}`;
        code: string;
    } | null, "Referrer details.">]>;
    /** Cumulative traded volume. */
    readonly cumVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cumulative traded volume.">]>;
    /** Rewards earned but not yet claimed. */
    readonly unclaimedRewards: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Rewards earned but not yet claimed.">]>;
    /** Rewards that have been claimed. */
    readonly claimedRewards: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Rewards that have been claimed.">]>;
    /** Builder reward amount. */
    readonly builderRewards: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Builder reward amount.">]>;
    /** Current state of the referrer. */
    readonly referrerState: v.SchemaWithPipe<readonly [v.VariantSchema<"stage", [v.ObjectSchema<{
        /** Referrer is ready to receive rewards. */
        readonly stage: v.SchemaWithPipe<readonly [v.LiteralSchema<"ready", undefined>, v.DescriptionAction<"ready", "Referrer is ready to receive rewards.">]>;
        /** Referral program details. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Assigned referral code. */
            readonly code: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Assigned referral code.">]>;
            /** Total number of referrals. */
            readonly nReferrals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total number of referrals.">]>;
            /** Summary of each referral state. */
            readonly referralStates: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Cumulative traded volume. */
                readonly cumVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cumulative traded volume.">]>;
                /** Total fees rewarded to the referred user since referral. */
                readonly cumRewardedFeesSinceReferred: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total fees rewarded to the referred user since referral.">]>;
                /** Total fees rewarded to the referrer from referred trades. */
                readonly cumFeesRewardedToReferrer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total fees rewarded to the referrer from referred trades.">]>;
                /** Timestamp when the referred user joined (in ms since epoch). */
                readonly timeJoined: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the referred user joined (in ms since epoch).">]>;
                /** Address of the referred user. */
                readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the referred user.">]>;
                /** Mapping of token IDs to referral reward states. */
                readonly tokenToState: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.ObjectSchema<{
                    /** Cumulative traded volume. */
                    readonly cumVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cumulative traded volume.">]>;
                    /** Total fees rewarded to the referred user since referral. */
                    readonly cumRewardedFeesSinceReferred: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total fees rewarded to the referred user since referral.">]>;
                    /** Total fees rewarded to the referrer from referred trades. */
                    readonly cumFeesRewardedToReferrer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total fees rewarded to the referrer from referred trades.">]>;
                }, undefined>], undefined>, v.DescriptionAction<[number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }], "Tuple of token ID and its referral reward state.">]>, undefined>, v.DescriptionAction<[number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }][], "Mapping of token IDs to referral reward states.">]>;
            }, undefined>, v.DescriptionAction<{
                cumVlm: string;
                cumRewardedFeesSinceReferred: string;
                cumFeesRewardedToReferrer: string;
                timeJoined: number;
                user: `0x${string}`;
                tokenToState: [number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }][];
            }, "Referral state for a referred user.">]>, undefined>, v.DescriptionAction<{
                cumVlm: string;
                cumRewardedFeesSinceReferred: string;
                cumFeesRewardedToReferrer: string;
                timeJoined: number;
                user: `0x${string}`;
                tokenToState: [number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }][];
            }[], "Summary of each referral state.">]>;
        }, undefined>, v.DescriptionAction<{
            code: string;
            nReferrals: number;
            referralStates: {
                cumVlm: string;
                cumRewardedFeesSinceReferred: string;
                cumFeesRewardedToReferrer: string;
                timeJoined: number;
                user: `0x${string}`;
                tokenToState: [number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }][];
            }[];
        }, "Referral program details.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Referrer needs to create a referral code. */
        readonly stage: v.SchemaWithPipe<readonly [v.LiteralSchema<"needToCreateCode", undefined>, v.DescriptionAction<"needToCreateCode", "Referrer needs to create a referral code.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Referrer must complete a trade before earning rewards. */
        readonly stage: v.SchemaWithPipe<readonly [v.LiteralSchema<"needToTrade", undefined>, v.DescriptionAction<"needToTrade", "Referrer must complete a trade before earning rewards.">]>;
        /** Required trading volume details for activation. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Required trading volume. */
            readonly required: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Required trading volume.">]>;
        }, undefined>, v.DescriptionAction<{
            required: string;
        }, "Required trading volume details for activation.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        stage: "ready";
        data: {
            code: string;
            nReferrals: number;
            referralStates: {
                cumVlm: string;
                cumRewardedFeesSinceReferred: string;
                cumFeesRewardedToReferrer: string;
                timeJoined: number;
                user: `0x${string}`;
                tokenToState: [number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }][];
            }[];
        };
    } | {
        stage: "needToCreateCode";
    } | {
        stage: "needToTrade";
        data: {
            required: string;
        };
    }, "Current state of the referrer.">]>;
    /** History of referral rewards. */
    readonly rewardHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Amount of earned rewards. */
        readonly earned: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of earned rewards.">]>;
        /** Traded volume at the time of reward. */
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Traded volume at the time of reward.">]>;
        /** Traded volume via referrals. */
        readonly referralVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Traded volume via referrals.">]>;
        /** Timestamp when the reward was earned (in ms since epoch). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the reward was earned (in ms since epoch).">]>;
    }, undefined>, v.DescriptionAction<{
        earned: string;
        vlm: string;
        referralVlm: string;
        time: number;
    }, "Referral reward entry.">]>, undefined>, v.DescriptionAction<{
        earned: string;
        vlm: string;
        referralVlm: string;
        time: number;
    }[], "History of referral rewards.">]>;
    /** Mapping of token IDs to referral reward states. */
    readonly tokenToState: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.ObjectSchema<{
        /** Cumulative traded volume. */
        readonly cumVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Cumulative traded volume.">]>;
        /** Rewards earned but not yet claimed. */
        readonly unclaimedRewards: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Rewards earned but not yet claimed.">]>;
        /** Rewards that have been claimed. */
        readonly claimedRewards: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Rewards that have been claimed.">]>;
        /** Builder reward amount. */
        readonly builderRewards: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Builder reward amount.">]>;
    }, undefined>], undefined>, v.DescriptionAction<[number, {
        cumVlm: string;
        unclaimedRewards: string;
        claimedRewards: string;
        builderRewards: string;
    }], "Tuple of token ID and its referral reward state.">]>, undefined>, v.DescriptionAction<[number, {
        cumVlm: string;
        unclaimedRewards: string;
        claimedRewards: string;
        builderRewards: string;
    }][], "Mapping of token IDs to referral reward states.">]>;
}, undefined>, v.DescriptionAction<{
    referredBy: {
        referrer: `0x${string}`;
        code: string;
    } | null;
    cumVlm: string;
    unclaimedRewards: string;
    claimedRewards: string;
    builderRewards: string;
    referrerState: {
        stage: "ready";
        data: {
            code: string;
            nReferrals: number;
            referralStates: {
                cumVlm: string;
                cumRewardedFeesSinceReferred: string;
                cumFeesRewardedToReferrer: string;
                timeJoined: number;
                user: `0x${string}`;
                tokenToState: [number, {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                }][];
            }[];
        };
    } | {
        stage: "needToCreateCode";
    } | {
        stage: "needToTrade";
        data: {
            required: string;
        };
    };
    rewardHistory: {
        earned: string;
        vlm: string;
        referralVlm: string;
        time: number;
    }[];
    tokenToState: [number, {
        cumVlm: string;
        unclaimedRewards: string;
        claimedRewards: string;
        builderRewards: string;
    }][];
}, "Referral details for a user.">]>;
export type ReferralResponse = v.InferOutput<typeof ReferralResponse>;
/** Request parameters for the {@linkcode referral} function. */
export type ReferralParameters = Omit<v.InferInput<typeof ReferralRequest>, "type">;
/**
 * Request user referral.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Referral details for a user.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { referral } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await referral(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function referral(config: InfoRequestConfig, params: DeepImmutable<ReferralParameters>, signal?: AbortSignal): Promise<ReferralResponse>;
//# sourceMappingURL=referral.d.ts.map