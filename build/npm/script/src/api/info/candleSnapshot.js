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
exports.CandleSnapshotResponse = exports.CandleSnapshotRequest = void 0;
exports.candleSnapshot = candleSnapshot;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/**
 * Request candlestick snapshots.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
exports.CandleSnapshotRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("candleSnapshot"), v.description("Type of request.")),
        /** Request parameters. */
        req: v.pipe(v.object({
            /** Asset symbol (e.g., BTC). */
            coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
            /** Time interval. */
            interval: _common_schemas_js_1.CandleIntervalSchema,
            /** Start time (in ms since epoch). */
            startTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Start time (in ms since epoch).")),
            /** End time (in ms since epoch). */
            endTime: v.pipe(v.nullish(_base_js_1.UnsignedInteger), v.description("End time (in ms since epoch).")),
        }), v.description("Request parameters.")),
    }), v.description("Request candlestick snapshots."));
})();
/**
 * Array of candlestick data points.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 */
exports.CandleSnapshotResponse = (() => {
    return v.pipe(v.array(
    /** Candlestick data point. */
    v.pipe(v.object({
        /** Opening timestamp (ms since epoch). */
        t: v.pipe(_base_js_1.UnsignedInteger, v.description("Opening timestamp (ms since epoch).")),
        /** Closing timestamp (ms since epoch). */
        T: v.pipe(_base_js_1.UnsignedInteger, v.description("Closing timestamp (ms since epoch).")),
        /** Asset symbol. */
        s: v.pipe(v.string(), v.description("Asset symbol.")),
        /** Candle interval. */
        i: _common_schemas_js_1.CandleIntervalSchema,
        /** Opening price. */
        o: v.pipe(_base_js_1.UnsignedDecimal, v.description("Opening price.")),
        /** Closing price. */
        c: v.pipe(_base_js_1.UnsignedDecimal, v.description("Closing price.")),
        /** Highest price. */
        h: v.pipe(_base_js_1.UnsignedDecimal, v.description("Highest price.")),
        /** Lowest price. */
        l: v.pipe(_base_js_1.UnsignedDecimal, v.description("Lowest price.")),
        /** Total volume traded in base currency. */
        v: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total volume traded in base currency.")),
        /** Number of trades executed. */
        n: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of trades executed.")),
    }), v.description("Candlestick data point."))), v.description("Array of candlestick data points."));
})();
/**
 * Request candlestick snapshots.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of candlestick data points.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { candleSnapshot } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await candleSnapshot(
 *   { transport },
 *   { coin: "ETH", interval: "1h", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
function candleSnapshot(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.CandleSnapshotRequest)({
        type: "candleSnapshot",
        req: params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=candleSnapshot.js.map