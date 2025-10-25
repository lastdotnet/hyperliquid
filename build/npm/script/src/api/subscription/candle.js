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
exports.CandleEvent = exports.CandleRequest = void 0;
exports.candle = candle;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
const candleSnapshot_js_1 = require("../info/candleSnapshot.js");
// -------------------- Schemas --------------------
/** Subscription to candlestick events for a specific asset and time interval. */
exports.CandleRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("candle"), v.description("Type of subscription.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Time interval. */
        interval: _common_schemas_js_1.CandleIntervalSchema,
    }), v.description("Subscription to candlestick events for a specific asset and time interval."));
})();
/** Event of candlestick data point. */
exports.CandleEvent = (() => {
    return candleSnapshot_js_1.CandleSnapshotResponse.item;
})();
/**
 * Subscribe to candlestick data updates for a specific asset.
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
 * import { candle } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await candle(
 *   { transport },
 *   { coin: "ETH", interval: "1h" },
 *   (data) => console.log(data),
 * );
 * ```
 */
function candle(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.CandleRequest)({ type: "candle", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.s === payload.coin && e.detail.i === payload.interval) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=candle.js.map