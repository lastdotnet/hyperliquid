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
exports.MaxMarketOrderNtlsResponse = exports.MaxMarketOrderNtlsRequest = void 0;
exports.maxMarketOrderNtls = maxMarketOrderNtls;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request maximum market order notionals.
 * @see null
 */
exports.MaxMarketOrderNtlsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("maxMarketOrderNtls"), v.description("Type of request.")),
    }), v.description("Request maximum market order notionals."));
})();
/**
 * Maximum market order notionals.
 * @see null
 */
exports.MaxMarketOrderNtlsResponse = (() => {
    return v.pipe(v.array(
    /** Tuple of maximum market order notional and corresponding asset symbol. */
    v.pipe(v.tuple([_base_js_1.UnsignedDecimal, v.string()]), v.description("Tuple of maximum market order notional and corresponding asset symbol."))), v.description("Maximum market order notionals."));
})();
/**
 * Request maximum market order notionals.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Maximum market order notionals.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { maxMarketOrderNtls } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await maxMarketOrderNtls({ transport });
 * ```
 */
function maxMarketOrderNtls(config, signal) {
    const request = (0, _base_js_1.parser)(exports.MaxMarketOrderNtlsRequest)({
        type: "maxMarketOrderNtls",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=maxMarketOrderNtls.js.map