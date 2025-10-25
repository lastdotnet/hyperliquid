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
exports.UserTwapSliceFillsByTimeResponse = exports.UserTwapSliceFillsByTimeRequest = void 0;
exports.userTwapSliceFillsByTime = userTwapSliceFillsByTime;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/**
 * Request user TWAP slice fills by time.
 * @see null
 */
exports.UserTwapSliceFillsByTimeRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userTwapSliceFillsByTime"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Start time (in ms since epoch). */
        startTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Start time (in ms since epoch).")),
        /** End time (in ms since epoch). */
        endTime: v.pipe(v.nullish(_base_js_1.UnsignedInteger), v.description("End time (in ms since epoch).")),
        /** If true, partial fills are aggregated when a crossing order fills multiple resting orders. */
        aggregateByTime: v.pipe(v.optional(v.boolean()), v.description("If true, partial fills are aggregated when a crossing order fills multiple resting orders.")),
    }), v.description("Request user TWAP slice fills by time."));
})();
/**
 * Array of user's twap slice fill by time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
exports.UserTwapSliceFillsByTimeResponse = (() => {
    return v.pipe(v.array(
    /** User twap slice fill. */
    v.pipe(v.object({
        /** Fill details for the TWAP slice. */
        fill: _common_schemas_js_1.TwapFillSchema,
        /** ID of the TWAP. */
        twapId: v.pipe(_base_js_1.UnsignedInteger, v.description("ID of the TWAP.")),
    }), v.description("User twap slice fill."))), v.description("Array of user's twap slice fill by time."));
})();
/**
 * Request user TWAP slice fills by time.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's twap slice fill by time.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userTwapSliceFillsByTime } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userTwapSliceFillsByTime(
 *   { transport },
 *   { user: "0x...", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
function userTwapSliceFillsByTime(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.UserTwapSliceFillsByTimeRequest)({
        type: "userTwapSliceFillsByTime",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userTwapSliceFillsByTime.js.map