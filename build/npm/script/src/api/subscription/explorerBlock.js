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
exports.ExplorerBlockEvent = exports.ExplorerBlockRequest = void 0;
exports.explorerBlock = explorerBlock;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/** Subscription to explorer block events (RPC endpoint). */
exports.ExplorerBlockRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("explorerBlock"), v.description("Type of subscription.")),
    }), v.description("Subscription to explorer block events."));
})();
/** Event of array of block details. */
exports.ExplorerBlockEvent = (() => {
    return v.pipe(v.array(
    /** Block details. */
    v.pipe(v.object({
        /** Block creation timestamp. */
        blockTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Block creation timestamp.")),
        /** Block hash. */
        hash: v.pipe(v.pipe(_base_js_1.Hex, v.length(66)), v.description("Block hash.")),
        /** Block height in chain. */
        height: v.pipe(_base_js_1.UnsignedInteger, v.description("Block height in chain.")),
        /** Total transactions in block. */
        numTxs: v.pipe(_base_js_1.UnsignedInteger, v.description("Total transactions in block.")),
        /** Block proposer address. */
        proposer: v.pipe(_base_js_1.Address, v.description("Block proposer address.")),
    }), v.description("The details of a block."))), v.description("Event of array of block details."));
})();
/**
 * Subscribe to explorer block updates.
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
 * import { explorerBlock } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
 *
 * const sub = await explorerBlock(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 */
function explorerBlock(config, listener) {
    const payload = (0, _base_js_1.parser)(exports.ExplorerBlockRequest)({ type: "explorerBlock" });
    return config.transport.subscribe("_explorerBlock", payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=explorerBlock.js.map