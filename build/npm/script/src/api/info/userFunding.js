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
exports.UserFundingResponse = exports.UserFundingRequest = void 0;
exports.userFunding = userFunding;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request array of user funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
exports.UserFundingRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userFunding"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Start time (in ms since epoch). */
        startTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Start time (in ms since epoch).")),
        /** End time (in ms since epoch). */
        endTime: v.pipe(v.nullish(_base_js_1.UnsignedInteger), v.description("End time (in ms since epoch).")),
    }), v.description("Request array of user funding ledger updates."));
})();
/**
 * Array of user funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
exports.UserFundingResponse = (() => {
    return v.pipe(v.array(
    /** User funding ledger update. */
    v.pipe(v.object({
        /** Timestamp of the update (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp of the update (in ms since epoch).")),
        /** L1 transaction hash. */
        hash: v.pipe(v.pipe(_base_js_1.Hex, v.length(66)), v.description("L1 transaction hash.")),
        /** Update details. */
        delta: v.pipe(v.object({
            /** Update type. */
            type: v.pipe(v.literal("funding"), v.description("Update type.")),
            /** Asset symbol. */
            coin: v.pipe(v.string(), v.description("Asset symbol.")),
            /** Amount transferred in USDC. */
            usdc: v.pipe(_base_js_1.Decimal, v.description("Amount transferred in USDC.")),
            /** Signed position size. */
            szi: v.pipe(_base_js_1.Decimal, v.description("Signed position size.")),
            /** Applied funding rate. */
            fundingRate: v.pipe(_base_js_1.Decimal, v.description("Applied funding rate.")),
            /** Number of samples. */
            nSamples: v.pipe(v.nullable(_base_js_1.UnsignedInteger), v.description("Number of samples.")),
        }), v.description("Update details.")),
    }), v.description("User funding ledger update."))), v.description("Array of user funding ledger updates."));
})();
/**
 * Request array of user funding ledger updates.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user funding ledger updates.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userFunding } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userFunding(
 *   { transport },
 *   { user: "0x...", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
function userFunding(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.UserFundingRequest)({
        type: "userFunding",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userFunding.js.map