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
exports.ExchangeStatusResponse = exports.ExchangeStatusRequest = void 0;
exports.exchangeStatus = exchangeStatus;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request exchange system status information.
 * @see null
 */
exports.ExchangeStatusRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("exchangeStatus"), v.description("Type of request.")),
    }), v.description("Request exchange system status information."));
})();
/**
 * Exchange system status information.
 * @see null
 */
exports.ExchangeStatusResponse = (() => {
    return v.pipe(v.object({
        /** Server time (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Server time (in ms since epoch).")),
        specialStatuses: v.pipe(v.nullable(v.unknown())),
    }), v.description("Exchange system status information."));
})();
// -------------------- Function --------------------
/**
 * Request exchange system status information.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Exchange system status information.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { exchangeStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await exchangeStatus({ transport });
 * ```
 */
function exchangeStatus(config, signal) {
    const request = (0, _base_js_1.parser)(exports.ExchangeStatusRequest)({
        type: "exchangeStatus",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=exchangeStatus.js.map