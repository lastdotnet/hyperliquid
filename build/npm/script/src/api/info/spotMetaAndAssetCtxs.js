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
exports.SpotMetaAndAssetCtxsResponse = exports.SpotMetaAndAssetCtxsRequest = void 0;
exports.spotMetaAndAssetCtxs = spotMetaAndAssetCtxs;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const spotMeta_js_1 = require("./spotMeta.js");
// -------------------- Schemas --------------------
/**
 * Request spot metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
exports.SpotMetaAndAssetCtxsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("spotMetaAndAssetCtxs"), v.description("Type of request.")),
    }), v.description("Request spot metadata and asset contexts."));
})();
/**
 * Metadata and context for spot assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
exports.SpotMetaAndAssetCtxsResponse = (() => {
    return v.pipe(v.tuple([
        spotMeta_js_1.SpotMetaResponse,
        /** Context for each spot asset. */
        v.pipe(v.array(
        /** Context for a specific spot asset. */
        v.pipe(v.object({
            /** Previous day's closing price. */
            prevDayPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Previous day's closing price.")),
            /** Daily notional volume. */
            dayNtlVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Daily notional volume.")),
            /** Mark price. */
            markPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Mark price.")),
            /** Mid price. */
            midPx: v.pipe(v.nullable(_base_js_1.UnsignedDecimal), v.description("Mid price.")),
            /** Circulating supply. */
            circulatingSupply: v.pipe(_base_js_1.UnsignedDecimal, v.description("Circulating supply.")),
            /** Asset symbol. */
            coin: v.pipe(v.string(), v.description("Asset symbol.")),
            /** Total supply. */
            totalSupply: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total supply.")),
            /** Daily volume in base currency. */
            dayBaseVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Daily volume in base currency.")),
        }), v.description("Context for a specific spot asset."))), v.description("Context for each spot asset.")),
    ]), v.description("Metadata and context for spot assets."));
})();
// -------------------- Function --------------------
/**
 * Request spot metadata and asset contexts.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Metadata and context for spot assets.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotMetaAndAssetCtxs } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotMetaAndAssetCtxs({ transport });
 * ```
 */
function spotMetaAndAssetCtxs(config, signal) {
    const request = (0, _base_js_1.parser)(exports.SpotMetaAndAssetCtxsRequest)({
        type: "spotMetaAndAssetCtxs",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=spotMetaAndAssetCtxs.js.map