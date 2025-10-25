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
exports.SpotMetaResponse = exports.SpotMetaRequest = void 0;
exports.spotMeta = spotMeta;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request spot trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
exports.SpotMetaRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("spotMeta"), v.description("Type of request.")),
    }), v.description("Request spot trading metadata."));
})();
/**
 * Metadata for spot assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
exports.SpotMetaResponse = (() => {
    return v.pipe(v.object({
        /** Trading universes available for spot trading. */
        universe: v.pipe(v.array(
        /** Trading universe details. */
        v.pipe(v.object({
            /** Token indices included in this universe. */
            tokens: v.pipe(v.array(_base_js_1.UnsignedInteger), v.description("Token indices included in this universe.")),
            /** Name of the universe. */
            name: v.pipe(v.string(), v.description("Name of the universe.")),
            /** Unique identifier of the universe. */
            index: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique identifier of the universe.")),
            /** Indicates if the token is the primary representation in the system. */
            isCanonical: v.pipe(v.boolean(), v.description("Indicates if the token is the primary representation in the system.")),
        }), v.description("Trading universe details."))), v.description("Trading universes available for spot trading.")),
        /** Tokens available for spot trading. */
        tokens: v.pipe(v.array(
        /** Spot token details. */
        v.pipe(v.object({
            /** Name of the token. */
            name: v.pipe(v.string(), v.description("Name of the token.")),
            /** Minimum decimal places for order sizes. */
            szDecimals: v.pipe(_base_js_1.UnsignedInteger, v.description("Minimum decimal places for order sizes.")),
            /** Number of decimals for the token's smallest unit. */
            weiDecimals: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of decimals for the token's smallest unit.")),
            /** Unique identifier for the token. */
            index: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique identifier for the token.")),
            /** Token ID. */
            tokenId: v.pipe(_base_js_1.Hex, v.description("Token ID.")),
            /** Indicates if the token is the primary representation in the system. */
            isCanonical: v.pipe(v.boolean(), v.description("Indicates if the token is the primary representation in the system.")),
            /** EVM contract details. */
            evmContract: v.pipe(v.nullable(v.object({
                /** Contract address. */
                address: v.pipe(_base_js_1.Address, v.description("Contract address.")),
                /** Extra decimals in the token's smallest unit. */
                evm_extra_wei_decimals: v.pipe(_base_js_1.Integer, v.description("Extra decimals in the token's smallest unit.")),
            })), v.description("EVM contract details.")),
            /** Full display name of the token. */
            fullName: v.pipe(v.nullable(v.string()), v.description("Full display name of the token.")),
            /** Deployer trading fee share for the token. */
            deployerTradingFeeShare: v.pipe(_base_js_1.UnsignedDecimal, v.description("Deployer trading fee share for the token.")),
        }), v.description("Spot token details."))), v.description("Tokens available for spot trading.")),
    }), v.description("Metadata for spot assets."));
})();
// -------------------- Function --------------------
/**
 * Request spot trading metadata.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Metadata for spot assets.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotMeta } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotMeta({ transport });
 * ```
 */
function spotMeta(config, signal) {
    const request = (0, _base_js_1.parser)(exports.SpotMetaRequest)({
        type: "spotMeta",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=spotMeta.js.map