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
exports.AlignedQuoteTokenInfoResponse = exports.AlignedQuoteTokenInfoRequest = void 0;
exports.alignedQuoteTokenInfo = alignedQuoteTokenInfo;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 * @see null
 */
exports.AlignedQuoteTokenInfoRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("alignedQuoteTokenInfo"), v.description("Type of request.")),
        /** Token index. */
        token: v.pipe(_base_js_1.UnsignedInteger, v.description("Token index.")),
    }), v.description("Request supply, rate, and pending payment information for an aligned quote token."));
})();
/**
 * Supply, rate, and pending payment information for an aligned quote token.
 * @see null
 */
exports.AlignedQuoteTokenInfoResponse = (() => {
    return v.pipe(v.object({
        /** Whether the token is aligned. */
        isAligned: v.pipe(v.boolean(), v.description("Whether the token is aligned.")),
        /** Timestamp (in ms since epoch) when the token was first aligned. */
        firstAlignedTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp (in ms since epoch) when the token was first aligned.")),
        /** Total EVM minted supply. */
        evmMintedSupply: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total EVM minted supply.")),
        /** Daily wei owed as an array of [date, amount] tuples. */
        dailyWeiOwed: v.pipe(v.array(v.pipe(v.tuple([
            /** Date in YYYY-MM-DD format. */
            v.pipe(v.string(), v.description("Date in YYYY-MM-DD format.")),
            /** Amount of wei owed. */
            v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount of wei owed.")),
        ]), v.description("[date, amount] tuple."))), v.description("Daily wei owed as an array of [date, amount] tuples.")),
        /** Predicted rate. */
        predictedRate: v.pipe(_base_js_1.UnsignedDecimal, v.description("Predicted rate.")),
    }), v.description("Supply, rate, and pending payment information for an aligned quote token."));
})();
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Supply, rate, and pending payment information for an aligned quote token.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { alignedQuoteTokenInfo } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await alignedQuoteTokenInfo(
 *   { transport },
 *   { token: 1328 },
 * );
 * ```
 */
function alignedQuoteTokenInfo(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.AlignedQuoteTokenInfoRequest)({
        type: "alignedQuoteTokenInfo",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=alignedQuoteTokenInfo.js.map