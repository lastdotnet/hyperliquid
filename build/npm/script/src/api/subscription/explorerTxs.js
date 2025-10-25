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
exports.ExplorerTxsEvent = exports.ExplorerTxsRequest = void 0;
exports.explorerTxs = explorerTxs;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/** Subscription to explorer transaction events (RPC endpoint). */
exports.ExplorerTxsRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("explorerTxs"), v.description("Type of subscription.")),
    }), v.description("Subscription to explorer transaction events."));
})();
/** Event of array of transaction details. */
exports.ExplorerTxsEvent = (() => {
    return v.pipe(v.array(
    /** Transaction details. */
    v.pipe(v.object({
        /** Action performed in transaction. */
        action: v.pipe(v.looseObject({
            /** Action type. */
            type: v.pipe(v.string(), v.description("Action type.")),
        }), v.description("Action performed in transaction.")),
        /** Block number where transaction was included. */
        block: v.pipe(_base_js_1.UnsignedInteger, v.description("Block number where transaction was included.")),
        /** Error message if transaction failed. */
        error: v.pipe(v.nullable(v.string()), v.description("Error message if transaction failed.")),
        /** Transaction hash. */
        hash: v.pipe(v.pipe(_base_js_1.Hex, v.length(66)), v.description("Transaction hash.")),
        /** Transaction creation timestamp. */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Transaction creation timestamp.")),
        /** Creator's address. */
        user: v.pipe(_base_js_1.Address, v.description("Creator's address.")),
    }), v.description("Transaction details."))), v.description("Event of array of transaction details."));
})();
/**
 * Subscribe to explorer transaction updates.
 * @param config - General configuration for Subscription API subscriptions.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 * @note Make sure the endpoint in the {@link transport} supports this method.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { explorerTxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
 *
 * const sub = await explorerTxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 */
function explorerTxs(config, listener) {
    const payload = (0, _base_js_1.parser)(exports.ExplorerTxsRequest)({ type: "explorerTxs" });
    return config.transport.subscribe("_explorerTxs", payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=explorerTxs.js.map