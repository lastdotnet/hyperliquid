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
exports.UserFeesResponse = exports.UserFeesRequest = void 0;
exports.userFees = userFees;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request user fees.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
 */
exports.UserFeesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userFees"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request user fees."));
})();
/**
 * User fees.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
 */
exports.UserFeesResponse = (() => {
    return v.pipe(v.object({
        /** Daily user volume metrics. */
        dailyUserVlm: v.pipe(v.array(
        /** Daily user volume metrics record. */
        v.pipe(v.object({
            /** Date in YYYY-M-D format. */
            date: v.pipe(v.string(), v.isoDate(), v.description("Date in YYYY-M-D format.")),
            /** User cross-trade volume. */
            userCross: v.pipe(_base_js_1.UnsignedDecimal, v.description("User cross-trade volume.")),
            /** User add-liquidity volume. */
            userAdd: v.pipe(_base_js_1.UnsignedDecimal, v.description("User add-liquidity volume.")),
            /** Exchange total volume. */
            exchange: v.pipe(_base_js_1.UnsignedDecimal, v.description("Exchange total volume.")),
        }), v.description("Daily user volume metrics record."))), v.description("Daily user volume metrics.")),
        /** Fee schedule information. */
        feeSchedule: v.pipe(v.object({
            /** Cross-trade fee rate. */
            cross: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cross-trade fee rate.")),
            /** Add-liquidity fee rate. */
            add: v.pipe(_base_js_1.UnsignedDecimal, v.description("Add-liquidity fee rate.")),
            /** Spot cross-trade fee rate. */
            spotCross: v.pipe(_base_js_1.UnsignedDecimal, v.description("Spot cross-trade fee rate.")),
            /** Spot add-liquidity fee rate. */
            spotAdd: v.pipe(_base_js_1.UnsignedDecimal, v.description("Spot add-liquidity fee rate.")),
            /** Fee tiers details. */
            tiers: v.pipe(v.object({
                /** Array of VIP fee tiers. */
                vip: v.pipe(v.array(
                /** VIP fee tier. */
                v.pipe(v.object({
                    /** Notional volume cutoff. */
                    ntlCutoff: v.pipe(_base_js_1.UnsignedDecimal, v.description("Notional volume cutoff.")),
                    /** Cross-trade fee rate. */
                    cross: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cross-trade fee rate.")),
                    /** Add-liquidity fee rate. */
                    add: v.pipe(_base_js_1.UnsignedDecimal, v.description("Add-liquidity fee rate.")),
                    /** Spot cross-trade fee rate. */
                    spotCross: v.pipe(_base_js_1.UnsignedDecimal, v.description("Spot cross-trade fee rate.")),
                    /** Spot add-liquidity fee rate. */
                    spotAdd: v.pipe(_base_js_1.UnsignedDecimal, v.description("Spot add-liquidity fee rate.")),
                }), v.description("VIP fee tier."))), v.description("Array of VIP fee tiers.")),
                /** Array of market maker fee tiers. */
                mm: v.pipe(v.array(
                /** Market maker fee tier. */
                v.pipe(v.object({
                    /** Maker fraction cutoff. */
                    makerFractionCutoff: v.pipe(_base_js_1.UnsignedDecimal, v.description("Maker fraction cutoff.")),
                    /** Add-liquidity fee rate. */
                    add: v.pipe(_base_js_1.Decimal, v.description("Add-liquidity fee rate.")),
                }), v.description("Market maker fee tier."))), v.description("Array of market maker fee tiers.")),
            }), v.description("Fee tiers details.")),
            /** Referral discount rate. */
            referralDiscount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Referral discount rate.")),
            /** Array of staking discount tiers. */
            stakingDiscountTiers: v.pipe(v.array(
            /** Staking discount tier. */
            v.pipe(v.object({
                /** Basis points of maximum supply. */
                bpsOfMaxSupply: v.pipe(_base_js_1.UnsignedDecimal, v.description("Basis points of maximum supply.")),
                /** Discount rate applied. */
                discount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Discount rate applied.")),
            }), v.description("Staking discount tier."))), v.description("Staking discount tiers details.")),
        }), v.description("Array of staking discount tiers.")),
        /** User cross-trade rate. */
        userCrossRate: v.pipe(_base_js_1.UnsignedDecimal, v.description("User cross-trade rate.")),
        /** User add-liquidity rate. */
        userAddRate: v.pipe(_base_js_1.UnsignedDecimal, v.description("User add-liquidity rate.")),
        /** User spot cross-trade rate. */
        userSpotCrossRate: v.pipe(_base_js_1.UnsignedDecimal, v.description("User spot cross-trade rate.")),
        /** User spot add-liquidity rate. */
        userSpotAddRate: v.pipe(_base_js_1.UnsignedDecimal, v.description("User spot add-liquidity rate.")),
        /** Active referral discount rate. */
        activeReferralDiscount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Active referral discount rate.")),
        /** Trial details. */
        trial: v.pipe(v.nullable(v.unknown()), v.description("Trial details.")),
        /** Fee trial escrow amount. */
        feeTrialEscrow: v.pipe(_base_js_1.UnsignedDecimal, v.description("Fee trial escrow amount.")),
        /** Timestamp when next trial becomes available. */
        nextTrialAvailableTimestamp: v.pipe(v.nullable(v.unknown()), v.description("Timestamp when next trial becomes available.")),
        stakingLink: v.nullable(v.unknown()),
        /** Active staking discount details. */
        activeStakingDiscount: v.pipe(v.object({
            /** Basis points of maximum supply. */
            bpsOfMaxSupply: v.pipe(_base_js_1.UnsignedDecimal, v.description("Basis points of maximum supply.")),
            /** Discount rate applied. */
            discount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Discount rate applied.")),
        }), v.description("Active staking discount details.")),
    }), v.description("User fees."));
})();
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
function userFees(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.UserFeesRequest)({
        type: "userFees",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userFees.js.map