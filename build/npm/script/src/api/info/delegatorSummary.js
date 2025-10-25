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
exports.DelegatorSummaryResponse = exports.DelegatorSummaryRequest = void 0;
exports.delegatorSummary = delegatorSummary;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request user's staking summary.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
 */
exports.DelegatorSummaryRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("delegatorSummary"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request user's staking summary."));
})();
/**
 * User's staking summary.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
 */
exports.DelegatorSummaryResponse = (() => {
    return v.pipe(v.object({
        /** Total amount of delegated tokens. */
        delegated: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total amount of delegated tokens.")),
        /** Total amount of undelegated tokens. */
        undelegated: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total amount of undelegated tokens.")),
        /** Total amount of tokens pending withdrawal. */
        totalPendingWithdrawal: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total amount of tokens pending withdrawal.")),
        /** Number of pending withdrawals. */
        nPendingWithdrawals: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of pending withdrawals.")),
    }), v.description("User's staking summary."));
})();
/**
 * Request user's staking summary.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns User's staking summary.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegatorSummary } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await delegatorSummary(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function delegatorSummary(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.DelegatorSummaryRequest)({
        type: "delegatorSummary",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=delegatorSummary.js.map