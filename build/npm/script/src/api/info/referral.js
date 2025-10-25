"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralResponse = exports.ReferralRequest = void 0;
exports.referral = referral;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request user referral.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
 */
exports.ReferralRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("referral"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request user referral."));
})();
/**
 * Referral details for a user.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
 */
exports.ReferralResponse = (() => {
    return v.pipe(v.object({
        /** Referrer details. */
        referredBy: v.pipe(v.nullable(v.object({
            /** Referrer address. */
            referrer: v.pipe(_base_js_1.Address, v.description("Referrer address.")),
            /** Referral code used. */
            code: v.pipe(v.string(), v.minLength(1), v.description("Referral code used.")),
        })), v.description("Referrer details.")),
        /** Cumulative traded volume. */
        cumVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cumulative traded volume.")),
        /** Rewards earned but not yet claimed. */
        unclaimedRewards: v.pipe(_base_js_1.UnsignedDecimal, v.description("Rewards earned but not yet claimed.")),
        /** Rewards that have been claimed. */
        claimedRewards: v.pipe(_base_js_1.UnsignedDecimal, v.description("Rewards that have been claimed.")),
        /** Builder reward amount. */
        builderRewards: v.pipe(_base_js_1.UnsignedDecimal, v.description("Builder reward amount.")),
        /** Current state of the referrer. */
        referrerState: v.pipe(v.variant("stage", [
            v.object({
                /** Referrer is ready to receive rewards. */
                stage: v.pipe(v.literal("ready"), v.description("Referrer is ready to receive rewards.")),
                /** Referral program details. */
                data: v.pipe(v.object({
                    /** Assigned referral code. */
                    code: v.pipe(v.string(), v.minLength(1), v.description("Assigned referral code.")),
                    /** Total number of referrals. */
                    nReferrals: v.pipe(_base_js_1.UnsignedInteger, v.description("Total number of referrals.")),
                    /** Summary of each referral state. */
                    referralStates: v.pipe(v.array(
                    /** Referral state for a referred user. */
                    v.pipe(v.object({
                        /** Cumulative traded volume. */
                        cumVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cumulative traded volume.")),
                        /** Total fees rewarded to the referred user since referral. */
                        cumRewardedFeesSinceReferred: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total fees rewarded to the referred user since referral.")),
                        /** Total fees rewarded to the referrer from referred trades. */
                        cumFeesRewardedToReferrer: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total fees rewarded to the referrer from referred trades.")),
                        /** Timestamp when the referred user joined (in ms since epoch). */
                        timeJoined: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp when the referred user joined (in ms since epoch).")),
                        /** Address of the referred user. */
                        user: v.pipe(_base_js_1.Address, v.description("Address of the referred user.")),
                        /** Mapping of token IDs to referral reward states. */
                        tokenToState: v.pipe(v.array(
                        /** Tuple of token ID and its referral reward state. */
                        v.pipe(v.tuple([
                            _base_js_1.UnsignedInteger,
                            v.object({
                                /** Cumulative traded volume. */
                                cumVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cumulative traded volume.")),
                                /** Total fees rewarded to the referred user since referral. */
                                cumRewardedFeesSinceReferred: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total fees rewarded to the referred user since referral.")),
                                /** Total fees rewarded to the referrer from referred trades. */
                                cumFeesRewardedToReferrer: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total fees rewarded to the referrer from referred trades.")),
                            }),
                        ]), v.description("Tuple of token ID and its referral reward state."))), v.description("Mapping of token IDs to referral reward states.")),
                    }), v.description("Referral state for a referred user."))), v.description("Summary of each referral state.")),
                }), v.description("Referral program details.")),
            }),
            v.object({
                /** Referrer needs to create a referral code. */
                stage: v.pipe(v.literal("needToCreateCode"), v.description("Referrer needs to create a referral code.")),
            }),
            v.object({
                /** Referrer must complete a trade before earning rewards. */
                stage: v.pipe(v.literal("needToTrade"), v.description("Referrer must complete a trade before earning rewards.")),
                /** Required trading volume details for activation. */
                data: v.pipe(v.object({
                    /** Required trading volume. */
                    required: v.pipe(_base_js_1.UnsignedDecimal, v.description("Required trading volume.")),
                }), v.description("Required trading volume details for activation.")),
            }),
        ]), v.description("Current state of the referrer.")),
        /** History of referral rewards. */
        rewardHistory: v.pipe(v.array(
        /** Referral reward entry. */
        v.pipe(v.object({
            /** Amount of earned rewards. */
            earned: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount of earned rewards.")),
            /** Traded volume at the time of reward. */
            vlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Traded volume at the time of reward.")),
            /** Traded volume via referrals. */
            referralVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Traded volume via referrals.")),
            /** Timestamp when the reward was earned (in ms since epoch). */
            time: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp when the reward was earned (in ms since epoch).")),
        }), v.description("Referral reward entry."))), v.description("History of referral rewards.")),
        /** Mapping of token IDs to referral reward states. */
        tokenToState: v.pipe(v.array(
        /** Tuple of token ID and its referral reward state. */
        v.pipe(v.tuple([
            _base_js_1.UnsignedInteger,
            v.object({
                /** Cumulative traded volume. */
                cumVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cumulative traded volume.")),
                /** Rewards earned but not yet claimed. */
                unclaimedRewards: v.pipe(_base_js_1.UnsignedDecimal, v.description("Rewards earned but not yet claimed.")),
                /** Rewards that have been claimed. */
                claimedRewards: v.pipe(_base_js_1.UnsignedDecimal, v.description("Rewards that have been claimed.")),
                /** Builder reward amount. */
                builderRewards: v.pipe(_base_js_1.UnsignedDecimal, v.description("Builder reward amount.")),
            }),
        ]), v.description("Tuple of token ID and its referral reward state."))), v.description("Mapping of token IDs to referral reward states.")),
    }), v.description("Referral details for a user."));
})();
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
function referral(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.ReferralRequest)({
        type: "referral",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=referral.js.map