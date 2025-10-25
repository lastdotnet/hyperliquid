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
exports.OrderStatusResponse = exports.OrderStatusRequest = void 0;
exports.orderStatus = orderStatus;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/**
 * Request order status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
exports.OrderStatusRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("orderStatus"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Order ID or Client Order ID. */
        oid: v.pipe(v.union([_base_js_1.UnsignedInteger, v.pipe(_base_js_1.Hex, v.length(34))]), v.description("Order ID or Client Order ID.")),
    }), v.description("Request order status."));
})();
/**
 * Order status response.
 * - If the order is found, returns detailed order information and its current status.
 * - If the order is not found, returns a status of "unknownOid".
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
exports.OrderStatusResponse = (() => {
    return v.pipe(v.variant("status", [
        v.object({
            /** Indicates that the order was found. */
            status: v.pipe(v.literal("order"), v.description("Indicates that the order was found.")),
            /** Order status details. */
            order: v.pipe(v.object({
                /** Order details. */
                order: _common_schemas_js_1.DetailedOrderSchema,
                /** Order processing status. */
                status: _common_schemas_js_1.OrderProcessingStatusSchema,
                /** Timestamp when the status was last updated (in ms since epoch). */
                statusTimestamp: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp when the status was last updated (in ms since epoch).")),
            }), v.description("Order status details.")),
        }),
        v.object({
            /** Indicates that the order was not found. */
            status: v.pipe(v.literal("unknownOid"), v.description("Indicates that the order was not found.")),
        }),
    ]), v.description("Order status response." +
        "\n- If the order is found, returns detailed order information and its current status." +
        '\n- If the order is not found, returns a status of "unknownOid".'));
})();
/**
 * Request order status.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Order status response.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { orderStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await orderStatus(
 *   { transport },
 *   { user: "0x...", oid: 12345 },
 * );
 * ```
 */
function orderStatus(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.OrderStatusRequest)({
        type: "orderStatus",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=orderStatus.js.map