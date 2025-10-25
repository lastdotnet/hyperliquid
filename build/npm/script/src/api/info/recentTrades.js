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
exports.RecentTradesResponse = exports.RecentTradesRequest = void 0;
exports.recentTrades = recentTrades;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request recent trades.
 * @see null
 */
exports.RecentTradesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("recentTrades"), v.description("Type of request.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
    }), v.description("Request recent trades."));
})();
/**
 * Array of recent trades.
 * @see null
 */
exports.RecentTradesResponse = (() => {
    return v.pipe(v.array(
    /** Trade for a specific asset. */
    v.pipe(v.object({
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Trade side ("B" = Bid/Buy, "A" = Ask/Sell). */
        side: v.pipe(v.union([v.literal("B"), v.literal("A")]), v.description('Trade side ("B" = Bid/Buy, "A" = Ask/Sell).')),
        /** Trade price. */
        px: v.pipe(_base_js_1.UnsignedDecimal, v.description("Trade price.")),
        /** Trade size. */
        sz: v.pipe(_base_js_1.UnsignedDecimal, v.description("Trade size.")),
        /** Trade timestamp (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Trade timestamp (in ms since epoch).")),
        /** Transaction hash. */
        hash: v.pipe(v.pipe(_base_js_1.Hex, v.length(66)), v.description("Transaction hash.")),
        /** Trade ID. */
        tid: v.pipe(_base_js_1.UnsignedInteger, v.description("Trade ID.")),
        /** Addresses of users involved in the trade [Maker, Taker]. */
        users: v.pipe(v.tuple([_base_js_1.Address, _base_js_1.Address]), v.description("Addresses of users involved in the trade [Maker, Taker].")),
    }), v.description("Trade for a specific asset."))), v.description("Array of recent trades."));
})();
/**
 * Request recent trades.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of recent trades.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { recentTrades } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await recentTrades(
 *   { transport },
 *   { coin: "ETH" },
 * );
 * ```
 */
function recentTrades(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.RecentTradesRequest)({
        type: "recentTrades",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=recentTrades.js.map