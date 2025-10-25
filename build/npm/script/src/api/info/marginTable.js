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
exports.MarginTableResponse = exports.MarginTableRequest = void 0;
exports.marginTable = marginTable;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request margin table data.
 * @see null
 */
exports.MarginTableRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("marginTable"), v.description("Type of request.")),
        /** Margin requirements table. */
        id: v.pipe(_base_js_1.UnsignedInteger, v.description("Margin requirements table.")),
    }), v.description("Request margin table data."));
})();
/**
 * Margin requirements table with multiple tiers.
 * @see null
 */
exports.MarginTableResponse = (() => {
    return v.pipe(v.object({
        /** Description of the margin table. */
        description: v.pipe(v.string(), v.description("Description of the margin table.")),
        /** Array of margin tiers defining leverage limits. */
        marginTiers: v.pipe(v.array(
        /** Individual tier in a margin requirements table. */
        v.pipe(v.object({
            /** Lower position size boundary for this tier. */
            lowerBound: v.pipe(_base_js_1.UnsignedDecimal, v.description("Lower position size boundary for this tier.")),
            /** Maximum allowed leverage for this tier. */
            maxLeverage: v.pipe(_base_js_1.UnsignedInteger, v.minValue(1), v.description("Maximum allowed leverage for this tier.")),
        }), v.description("Individual tier in a margin requirements table."))), v.description("Array of margin tiers defining leverage limits.")),
    }), v.description("Margin requirements table with multiple tiers."));
})();
/**
 * Request margin table data.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Margin requirements table with multiple tiers.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { marginTable } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await marginTable(
 *   { transport },
 *   { id: 1 },
 * );
 * ```
 */
function marginTable(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.MarginTableRequest)({
        type: "marginTable",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=marginTable.js.map