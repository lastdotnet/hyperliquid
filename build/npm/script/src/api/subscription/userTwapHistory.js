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
exports.UserTwapHistoryEvent = exports.UserTwapHistoryRequest = void 0;
exports.userTwapHistory = userTwapHistory;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/** Subscription to user TWAP history events for a specific user. */
exports.UserTwapHistoryRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("userTwapHistory"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to user TWAP history events for a specific user."));
})();
/** Event of user TWAP history. */
exports.UserTwapHistoryEvent = (() => {
    return v.pipe(v.object({
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Array of user's TWAP history. */
        history: v.pipe(v.array(
        /** TWAP history record. */
        v.pipe(v.object({
            /** Creation time of the history record (in seconds since epoch). */
            time: v.pipe(_base_js_1.UnsignedInteger, v.description("Creation time of the history record (in seconds since epoch).")),
            /** State of the TWAP order. */
            state: _common_schemas_js_1.TwapStateSchema,
            /** Current status of the TWAP order. */
            status: _common_schemas_js_1.TwapStatusSchema,
            /** ID of the TWAP. */
            twapId: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("ID of the TWAP.")),
        }), v.description("TWAP history record."))), v.description("Array of user's TWAP history.")),
        /** Whether this is an initial snapshot. */
        isSnapshot: v.pipe(v.optional(v.literal(true)), v.description("Whether this is an initial snapshot.")),
    }), v.description("Event of user TWAP history."));
})();
/**
 * Subscribe to TWAP order history updates for a specific user.
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
 * import { userTwapHistory } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userTwapHistory(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
function userTwapHistory(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.UserTwapHistoryRequest)({ type: "userTwapHistory", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=userTwapHistory.js.map