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
exports.AssetCtxsEvent = exports.AssetCtxsRequest = void 0;
exports.assetCtxs = assetCtxs;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/** Subscription to context events for all perpetual assets. */
exports.AssetCtxsRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("assetCtxs"), v.description("Type of subscription.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Subscription to context events for all perpetual assets."));
})();
/** Event of asset contexts for all perpetual assets on a specified DEX. */
exports.AssetCtxsEvent = (() => {
    return v.pipe(v.object({
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.string(), v.description("DEX name (empty string for main dex).")),
        /** Array of context information for each perpetual asset. */
        ctxs: v.pipe(v.array(
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
        }), v.description("Context for a specific perpetual asset."))), v.description("Array of context information for each perpetual asset.")),
    }), v.description("Event of asset contexts for all perpetual assets on a specified DEX."));
})();
function assetCtxs(config, paramsOrListener, maybeListener) {
    const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
    const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
    const payload = (0, _base_js_1.parser)(exports.AssetCtxsRequest)({
        type: "assetCtxs",
        ...params,
        dex: params.dex ?? "", // same value as in response
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.dex === payload.dex) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=assetCtxs.js.map