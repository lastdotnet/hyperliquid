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
exports.PredictedFundingsResponse = exports.PredictedFundingsRequest = void 0;
exports.predictedFundings = predictedFundings;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request predicted funding rates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
exports.PredictedFundingsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("predictedFundings"), v.description("Type of request.")),
    }), v.description("Request predicted funding rates."));
})();
/**
 * Array of predicted funding rates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 */
exports.PredictedFundingsResponse = (() => {
    return v.pipe(v.array(
    /** Tuple of asset symbol and its predicted funding data. */
    v.pipe(v.tuple([
        /** Asset symbol. */
        v.pipe(v.string(), v.description("Asset symbol.")),
        /** Array of predicted funding data for each exchange. */
        v.pipe(v.array(
        /** Tuple of exchange symbol and predicted funding data. */
        v.pipe(v.tuple([
            /** Exchange symbol. */
            v.pipe(v.string(), v.description("Exchange symbol.")),
            /** Predicted funding data. */
            v.pipe(v.nullable(v.object({
                /** Predicted funding rate. */
                fundingRate: v.pipe(_base_js_1.Decimal, v.description("Predicted funding rate.")),
                /** Next funding time (ms since epoch). */
                nextFundingTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Next funding time (ms since epoch).")),
                /** Funding interval in hours. */
                fundingIntervalHours: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Funding interval in hours.")),
            })), v.description("Predicted funding data.")),
        ]), v.description("Tuple of exchange symbol and predicted funding data."))), v.description("Array of predicted funding data for each exchange.")),
    ]), v.description("Tuple of asset symbol and its predicted funding data."))), v.description("Array of predicted funding rates."));
})();
// -------------------- Function --------------------
/**
 * Request predicted funding rates.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of predicted funding rates.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { predictedFundings } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await predictedFundings({ transport });
 * ```
 */
function predictedFundings(config, signal) {
    const request = (0, _base_js_1.parser)(exports.PredictedFundingsRequest)({
        type: "predictedFundings",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=predictedFundings.js.map