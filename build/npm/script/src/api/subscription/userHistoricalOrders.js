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
exports.UserHistoricalOrdersEvent = exports.UserHistoricalOrdersRequest = void 0;
exports.userHistoricalOrders = userHistoricalOrders;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/** Subscription to user historical orders for a specific user. */
exports.UserHistoricalOrdersRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("userHistoricalOrders"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to user historical orders for a specific user."));
})();
/** Event of user historical orders. */
exports.UserHistoricalOrdersEvent = (() => {
    return v.pipe(v.object({
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Array of frontend orders with current processing status. */
        orderHistory: v.pipe(v.array(
        /** Frontend order with current processing status. */
        v.pipe(v.object({
            /** Order details. */
            order: _common_schemas_js_1.DetailedOrderSchema,
            /** Order processing status. */
            status: _common_schemas_js_1.OrderProcessingStatusSchema,
            /** Timestamp when the status was last updated (in ms since epoch). */
            statusTimestamp: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp when the status was last updated (in ms since epoch).")),
        }), v.description("Frontend order with current processing status."))), v.description("Array of frontend orders with current processing status.")),
        /** Whether this is an initial snapshot. */
        isSnapshot: v.pipe(v.optional(v.literal(true)), v.description("Whether this is an initial snapshot.")),
    }), v.description("Event of user historical orders."));
})();
/**
 * Subscribe to historical order updates for a specific user.
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
 * import { userHistoricalOrders } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userHistoricalOrders(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
function userHistoricalOrders(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.UserHistoricalOrdersRequest)({ type: "userHistoricalOrders", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=userHistoricalOrders.js.map