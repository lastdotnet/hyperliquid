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
exports.MetaAndAssetCtxsResponse = exports.MetaAndAssetCtxsRequest = void 0;
exports.metaAndAssetCtxs = metaAndAssetCtxs;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const meta_js_1 = require("./meta.js");
// -------------------- Schemas --------------------
/**
 * Request metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
exports.MetaAndAssetCtxsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("metaAndAssetCtxs"), v.description("Type of request.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request metadata and asset contexts."));
})();
/**
 * Metadata and context for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
exports.MetaAndAssetCtxsResponse = (() => {
    return v.pipe(v.tuple([
        meta_js_1.MetaResponse,
        /** Array of contexts for each perpetual asset. */
        v.pipe(v.array(
        /** Context for a specific perpetual asset. */
        v.pipe(v.object({
            /** Previous day's closing price. */
            prevDayPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Previous day's closing price.")),
            /** Daily notional volume. */
            dayNtlVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Daily notional volume.")),
            /** Mark price. */
            markPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Mark price.")),
            /** Mid price. */
            midPx: v.pipe(v.nullable(_base_js_1.UnsignedDecimal), v.description("Mid price.")),
            /** Funding rate. */
            funding: v.pipe(_base_js_1.Decimal, v.description("Funding rate.")),
            /** Total open interest. */
            openInterest: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total open interest.")),
            /** Premium price. */
            premium: v.pipe(v.nullable(_base_js_1.Decimal), v.description("Premium price.")),
            /** Oracle price. */
            oraclePx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Oracle price.")),
            /** Array of impact prices. */
            impactPxs: v.pipe(v.nullable(v.array(v.string())), v.description("Array of impact prices.")),
            /** Daily volume in base currency. */
            dayBaseVlm: v.pipe(_base_js_1.UnsignedDecimal, v.description("Daily volume in base currency.")),
        }), v.description("Context for a specific perpetual asset."))), v.description("Array of contexts for each perpetual asset.")),
    ]), v.description("Metadata and context for perpetual assets."));
})();
function metaAndAssetCtxs(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = (0, _base_js_1.parser)(exports.MetaAndAssetCtxsRequest)({
        type: "metaAndAssetCtxs",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=metaAndAssetCtxs.js.map