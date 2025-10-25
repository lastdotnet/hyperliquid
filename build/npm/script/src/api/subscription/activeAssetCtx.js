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
exports.ActiveAssetCtxEvent = exports.ActiveAssetCtxRequest = void 0;
exports.activeAssetCtx = activeAssetCtx;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/** Subscription to context events for a specific perpetual asset. */
exports.ActiveAssetCtxRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("activeAssetCtx"), v.description("Type of subscription.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
    }), v.description("Subscription to context events for a specific perpetual asset."));
})();
/** Event of active perpetual asset context. */
exports.ActiveAssetCtxEvent = (() => {
    return v.pipe(v.object({
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Context for a specific perpetual asset. */
        ctx: v.pipe(v.object({
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
        }), v.description("Context for a specific perpetual asset.")),
    }), v.description("Event of active perpetual asset context."));
})();
/**
 * Subscribe to context updates for a specific perpetual asset.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { activeAssetCtx } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeAssetCtx(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 */
function activeAssetCtx(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.ActiveAssetCtxRequest)({ type: "activeAssetCtx", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=activeAssetCtx.js.map