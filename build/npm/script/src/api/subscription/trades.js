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
exports.TradesEvent = exports.TradesRequest = void 0;
exports.trades = trades;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const recentTrades_js_1 = require("../info/recentTrades.js");
// -------------------- Schemas --------------------
/** Subscription to trade events for a specific asset. */
exports.TradesRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("trades"), v.description("Type of subscription.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
    }), v.description("Subscription to trade events for a specific asset."));
})();
/** Event of array of trades for a specific asset. */
exports.TradesEvent = (() => {
    return recentTrades_js_1.RecentTradesResponse;
})();
/**
 * Subscribe to real-time trade updates for a specific asset.
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
 * import { trades } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await trades(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 */
function trades(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.TradesRequest)({ type: "trades", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail[0]?.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=trades.js.map