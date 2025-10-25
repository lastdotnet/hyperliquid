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
exports.BboEvent = exports.BboRequest = void 0;
exports.bbo = bbo;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/** Subscription to best bid and offer events for a specific asset. */
exports.BboRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("bbo"), v.description("Type of subscription.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
    }), v.description("Subscription to best bid and offer events for a specific asset."));
})();
/** Event of best bid and offer. */
exports.BboEvent = (() => {
    return v.pipe(v.object({
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Time of the BBO update (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Time of the BBO update (in ms since epoch).")),
        /** Best bid and offer tuple [bid, offer], either can be undefined if unavailable. */
        bbo: v.pipe(v.tuple([_common_schemas_js_1.L2BookLevelSchema, _common_schemas_js_1.L2BookLevelSchema]), v.description("Best bid and offer tuple [bid, offer], either can be undefined if unavailable.")),
    }), v.description("Event of best bid and offer."));
})();
/**
 * Subscribe to best bid and offer updates for a specific asset.
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
 * import { bbo } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await bbo(
 *   { transport },
 *   { coin: "ETH" },
 *   (data) => console.log(data),
 * );
 * ```
 */
function bbo(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.BboRequest)({ type: "bbo", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.coin === payload.coin) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=bbo.js.map