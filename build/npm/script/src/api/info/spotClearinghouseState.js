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
exports.SpotClearinghouseStateResponse = exports.SpotClearinghouseStateRequest = void 0;
exports.spotClearinghouseState = spotClearinghouseState;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request spot clearinghouse state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
exports.SpotClearinghouseStateRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("spotClearinghouseState"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request spot clearinghouse state."));
})();
/**
 * Account summary for spot trading.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
exports.SpotClearinghouseStateResponse = (() => {
    return v.pipe(v.object({
        /** Balance for each token. */
        balances: v.pipe(v.array(
        /** Balance for a specific spot token. */
        v.pipe(v.object({
            /** Asset symbol. */
            coin: v.pipe(v.string(), v.description("Asset symbol.")),
            /** Unique identifier for the token. */
            token: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique identifier for the token.")),
            /** Total balance. */
            total: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total balance.")),
            /** Amount on hold. */
            hold: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount on hold.")),
            /** Entry notional value. */
            entryNtl: v.pipe(_base_js_1.UnsignedDecimal, v.description("Entry notional value.")),
        }), v.description("Balance for a specific spot token."))), v.description("Balance for each token.")),
        /** Escrowed balances. */
        evmEscrows: v.pipe(v.optional(v.array(
        /** Escrowed balance for a specific asset. */
        v.pipe(v.object({
            /** Asset symbol. */
            coin: v.pipe(v.string(), v.description("Asset symbol.")),
            /** Unique identifier for the token. */
            token: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique identifier for the token.")),
            /** Total balance. */
            total: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total balance.")),
        }), v.description("Escrowed balance for a specific asset.")))), v.description("Escrowed balances.")),
    }), v.description("Account summary for spot trading."));
})();
/**
 * Request spot clearinghouse state.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Account summary for spot trading.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotClearinghouseState } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotClearinghouseState(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function spotClearinghouseState(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.SpotClearinghouseStateRequest)({
        type: "spotClearinghouseState",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=spotClearinghouseState.js.map