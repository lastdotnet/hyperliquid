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
exports.ApproveAgentTypes = exports.SuccessResponse = exports.ApproveAgentRequest = void 0;
exports.approveAgent = approveAgent;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Approve an agent to sign on behalf of the master account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
exports.ApproveAgentRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("approveAgent"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(_base_js_1.Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /** Agent address. */
            agentAddress: v.pipe(_base_js_1.Address, v.description("Agent address.")),
            /** Agent name or null for unnamed agent (default: null). */
            agentName: v.pipe(v.optional(v.nullable(v.string()), null), v.description("Agent name or null for unnamed agent.")),
            /** Unique request identifier (current timestamp in ms). */
            nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
    }), v.description("Approve an agent to sign on behalf of the master account."));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/** EIP-712 types for the {@linkcode approveAgent} function. */
exports.ApproveAgentTypes = {
    "HyperliquidTransaction:ApproveAgent": [
        { name: "hyperliquidChain", type: "string" },
        { name: "agentAddress", type: "address" },
        { name: "agentName", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Approve an agent to sign on behalf of the master account.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { approveAgent } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await approveAgent(
 *   { transport, wallet },
 *   { agentAddress: "0x...", agentName: "..." },
 * );
 * ```
 */
async function approveAgent(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.ApproveAgentRequest.entries.action)({
        type: "approveAgent",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await (0, _base_js_2.getSignatureChainId)(config),
        nonce: await (0, _base_js_2.getNonce)(config),
        ...params,
    });
    return await (0, _base_js_2.executeUserSignedAction)(config, { action, types: exports.ApproveAgentTypes }, opts?.signal);
}
//# sourceMappingURL=approveAgent.js.map