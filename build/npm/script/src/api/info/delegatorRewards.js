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
exports.DelegatorRewardsResponse = exports.DelegatorRewardsRequest = void 0;
exports.delegatorRewards = delegatorRewards;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request user staking rewards.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
exports.DelegatorRewardsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("delegatorRewards"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request user staking rewards."));
})();
/**
 * Array of rewards received from staking activities.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
exports.DelegatorRewardsResponse = (() => {
    return v.pipe(v.array(
    /** Reward received from staking activities. */
    v.pipe(v.object({
        /** Timestamp when the reward was received (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp when the reward was received (in ms since epoch).")),
        /** Source of the reward. */
        source: v.pipe(v.union([v.literal("delegation"), v.literal("commission")]), v.description("Source of the reward.")),
        /** Total reward amount. */
        totalAmount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total reward amount.")),
    }), v.description("Reward received from staking activities."))), v.description("Array of rewards received from staking activities."));
})();
/**
 * Request user staking rewards.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of rewards received from staking activities.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegatorRewards } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await delegatorRewards(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function delegatorRewards(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.DelegatorRewardsRequest)({
        type: "delegatorRewards",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=delegatorRewards.js.map