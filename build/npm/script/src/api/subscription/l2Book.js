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
exports.L2BookEvent = exports.L2BookRequest = void 0;
exports.l2Book = l2Book;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/** Subscription to L2 order book events for a specific asset. */
exports.L2BookRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("l2Book"), v.description("Type of subscription.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Number of significant figures. */
        nSigFigs: v.pipe(v.nullish(v.pipe(_base_js_1.Integer, v.union([v.literal(2), v.literal(3), v.literal(4), v.literal(5)]))), v.description("Number of significant figures.")),
        /** Mantissa for aggregation (if `nSigFigs` is 5). */
        mantissa: v.pipe(v.nullish(v.pipe(_base_js_1.Integer, v.union([v.literal(2), v.literal(5)]))), v.description("Mantissa for aggregation (if `nSigFigs` is 5).")),
    }), v.description("Subscription to L2 order book events for a specific asset."));
})();
/** Event of L2 order book snapshot. */
exports.L2BookEvent = (() => {
    return v.pipe(v.object({
        /** Asset symbol. */
        coin: v.pipe(v.string(), v.description("Asset symbol.")),
        /** Timestamp of the snapshot (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp of the snapshot (in ms since epoch).")),
        /** Bid and ask levels (index 0 = bids, index 1 = asks). */
        levels: v.pipe(v.tuple([v.array(_common_schemas_js_1.L2BookLevelSchema), v.array(_common_schemas_js_1.L2BookLevelSchema)]), v.description("Bid and ask levels (index 0 = bids, index 1 = asks).")),
    }), v.description("L2 order book snapshot."));
})();
/**
 * Subscribe to L2 order book updates for a specific asset.
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
 * import { l2Book } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await l2Book(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 */
function l2Book(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.L2BookRequest)({
        type: "l2Book",
        ...params,
        nSigFigs: params.nSigFigs ?? null,
        mantissa: params.mantissa ?? null,
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=l2Book.js.map