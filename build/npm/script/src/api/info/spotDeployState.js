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
exports.SpotDeployStateResponse = exports.SpotDeployStateRequest = void 0;
exports.spotDeployState = spotDeployState;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request spot deploy state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
exports.SpotDeployStateRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("spotDeployState"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request spot deploy state."));
})();
/**
 * Deploy state for spot tokens.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
exports.SpotDeployStateResponse = (() => {
    return v.pipe(v.object({
        /** Array of deploy states for tokens. */
        states: v.pipe(v.array(
        /** Deploy state for a specific token. */
        v.pipe(v.object({
            /** Token ID. */
            token: v.pipe(_base_js_1.UnsignedInteger, v.description("Token ID.")),
            /** Token specification. */
            spec: v.pipe(v.object({
                /** Name of the token. */
                name: v.pipe(v.string(), v.description("Name of the token.")),
                /** Minimum decimal places for order sizes. */
                szDecimals: v.pipe(_base_js_1.UnsignedInteger, v.description("Minimum decimal places for order sizes.")),
                /** Number of decimals for the token's smallest unit. */
                weiDecimals: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of decimals for the token's smallest unit.")),
            }), v.description("Token specification.")),
            /** Full name of the token. */
            fullName: v.pipe(v.nullable(v.string()), v.description("Full name of the token.")),
            /** Deployer trading fee share for the token. */
            deployerTradingFeeShare: v.pipe(_base_js_1.UnsignedDecimal, v.description("Deployer trading fee share for the token.")),
            /** Spot indices for the token. */
            spots: v.pipe(v.array(_base_js_1.UnsignedInteger), v.description("Spot indices for the token.")),
            /** Maximum supply of the token. */
            maxSupply: v.pipe(v.nullable(_base_js_1.UnsignedDecimal), v.description("Maximum supply of the token.")),
            /** Hyperliquidity genesis balance of the token. */
            hyperliquidityGenesisBalance: v.pipe(_base_js_1.UnsignedDecimal, v.description("Hyperliquidity genesis balance of the token.")),
            /** Total genesis balance (in wei) for the token. */
            totalGenesisBalanceWei: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total genesis balance (in wei) for the token.")),
            /** User genesis balances for the token. */
            userGenesisBalances: v.pipe(v.array(v.tuple([_base_js_1.Address, _base_js_1.UnsignedDecimal])), v.description("User genesis balances for the token.")),
            /** Existing token genesis balances for the token. */
            existingTokenGenesisBalances: v.pipe(v.array(v.tuple([_base_js_1.UnsignedInteger, _base_js_1.UnsignedDecimal])), v.description("Existing token genesis balances for the token.")),
            /** Blacklisted users for the token. */
            blacklistUsers: v.pipe(v.array(_base_js_1.Address), v.description("Blacklisted users for the token.")),
        }), v.description("Deploy state for a specific token."))), v.description("Array of deploy states for tokens.")),
        /** Status of the deploy auction. */
        gasAuction: v.pipe(v.object({
            /** Current gas. */
            currentGas: v.pipe(v.nullable(_base_js_1.UnsignedDecimal), v.description("Current gas.")),
            /** Duration in seconds. */
            durationSeconds: v.pipe(_base_js_1.UnsignedInteger, v.description("Duration in seconds.")),
            /** Ending gas. */
            endGas: v.pipe(v.nullable(_base_js_1.UnsignedDecimal), v.description("Ending gas.")),
            /** Starting gas. */
            startGas: v.pipe(_base_js_1.UnsignedDecimal, v.description("Starting gas.")),
            /** Auction start time (seconds since epoch). */
            startTimeSeconds: v.pipe(_base_js_1.UnsignedInteger, v.description("Auction start time (seconds since epoch).")),
        }), v.description("Status of the deploy auction.")),
    }), v.description("Deploy state for spot tokens."));
})();
/**
 * Request spot deploy state.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Deploy state for spot tokens.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotDeployState } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotDeployState(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function spotDeployState(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.SpotDeployStateRequest)({
        type: "spotDeployState",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=spotDeployState.js.map