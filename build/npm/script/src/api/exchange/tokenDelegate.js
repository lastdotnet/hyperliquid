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
exports.TokenDelegateTypes = exports.SuccessResponse = exports.TokenDelegateRequest = void 0;
exports.tokenDelegate = tokenDelegate;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Delegate or undelegate native tokens to or from a validator.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#delegate-or-undelegate-stake-from-validator
 */
exports.TokenDelegateRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("tokenDelegate"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(_base_js_1.Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /** Validator address. */
            validator: v.pipe(_base_js_1.Address, v.description("Validator address.")),
            /** Amount for delegate/undelegate (float * 1e8). */
            wei: v.pipe(_base_js_1.UnsignedInteger, v.description("Amount for delegate/undelegate (float * 1e8).")),
            /** `true` for undelegate, `false` for delegate. */
            isUndelegate: v.pipe(v.boolean(), v.description("`true` for undelegate, `false` for delegate.")),
            /** Unique request identifier (current timestamp in ms). */
            nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
    }), v.description("Delegate or undelegate native tokens to or from a validator."));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/** EIP-712 types for the {@linkcode tokenDelegate} function. */
exports.TokenDelegateTypes = {
    "HyperliquidTransaction:TokenDelegate": [
        { name: "hyperliquidChain", type: "string" },
        { name: "validator", type: "address" },
        { name: "wei", type: "uint64" },
        { name: "isUndelegate", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Delegate or undelegate native tokens to or from a validator.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#delegate-or-undelegate-stake-from-validator
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { tokenDelegate } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await tokenDelegate(
 *   { transport, wallet },
 *   { validator: "0x...", isUndelegate: true, wei: 1 * 1e8 },
 * );
 * ```
 */
async function tokenDelegate(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.TokenDelegateRequest.entries.action)({
        type: "tokenDelegate",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await (0, _base_js_2.getSignatureChainId)(config),
        nonce: await (0, _base_js_2.getNonce)(config),
        ...params,
    });
    return await (0, _base_js_2.executeUserSignedAction)(config, { action, types: exports.TokenDelegateTypes }, opts?.signal);
}
//# sourceMappingURL=tokenDelegate.js.map