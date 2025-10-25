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
exports.ActiveSpotAssetCtxEvent = exports.ActiveSpotAssetCtxRequest = void 0;
exports.activeSpotAssetCtx = activeSpotAssetCtx;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/** Subscription to context events for a specific spot asset. */
exports.ActiveSpotAssetCtxRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("activeAssetCtx"), v.description("Type of subscription.")),
        /** Asset ID (e.g., @1). */
        coin: v.pipe(v.string(), v.description("Asset ID (e.g., @1).")),
    }), v.description("Subscription to context events for a specific spot asset."));
})();
/** Event of active spot asset context. */
exports.ActiveSpotAssetCtxEvent = (() => {
    return v.pipe(v.object({
        /** Asset ID (e.g., @1). */
        coin: v.pipe(v.string(), v.description("Asset ID (e.g., @1).")),
        /** Context for a specific spot asset. */
        ctx: v.pipe(v.object({
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
        }), v.description("Context for a specific spot asset.")),
    }), v.description("Event of active spot asset context."));
})();
/**
 * Subscribe to context updates for a specific spot asset.
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
 * import { activeSpotAssetCtx } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeSpotAssetCtx(
 *   { transport },
 *   { coin: "@1" },
 *   (data) => console.log(data),
 * );
 * ```
 */
function activeSpotAssetCtx(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.ActiveSpotAssetCtxRequest)({ type: "activeAssetCtx", ...params });
    return config.transport.subscribe("activeSpotAssetCtx", payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=activeSpotAssetCtx.js.map