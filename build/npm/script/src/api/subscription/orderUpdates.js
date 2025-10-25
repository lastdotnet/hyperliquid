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
exports.OrderUpdatesEvent = exports.OrderUpdatesRequest = void 0;
exports.orderUpdates = orderUpdates;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/** Subscription to order updates for a specific user. */
exports.OrderUpdatesRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("orderUpdates"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to order updates for a specific user."));
})();
/** Event of array of orders with their current processing status. */
exports.OrderUpdatesEvent = (() => {
    return v.pipe(v.array(
    /** Order with its current processing status. */
    v.pipe(v.object({
        /** Order details. */
        order: _common_schemas_js_1.OrderSchema,
        /** Order processing status. */
        status: _common_schemas_js_1.OrderProcessingStatusSchema,
        /** Timestamp when the status was last updated (in ms since epoch). */
        statusTimestamp: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp when the status was last updated (in ms since epoch).")),
    }), v.description("Order with its current processing status."))), v.description("Event of array of orders with their current processing status."));
})();
/**
 * Subscribe to order status updates for a specific user.
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
 * import { orderUpdates } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await orderUpdates(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
function orderUpdates(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.OrderUpdatesRequest)({ type: "orderUpdates", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=orderUpdates.js.map