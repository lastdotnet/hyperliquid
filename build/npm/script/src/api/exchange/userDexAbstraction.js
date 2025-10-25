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
exports.UserDexAbstractionTypes = exports.SuccessResponse = exports.UserDexAbstractionExchangeRequest = void 0;
exports.userDexAbstraction = userDexAbstraction;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Enable/disable HIP-3 DEX abstraction.
 * @see null
 */
exports.UserDexAbstractionExchangeRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("userDexAbstraction"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(_base_js_1.Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /** User address. */
            user: v.pipe(_base_js_1.Address, v.description("User address.")),
            /** Whether to enable or disable HIP-3 DEX abstraction. */
            enabled: v.pipe(v.boolean(), v.description("Whether to enable or disable HIP-3 DEX abstraction.")),
            /** Unique request identifier (current timestamp in ms). */
            nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
    }), v.description("Enable/disable HIP-3 DEX abstraction."));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/** EIP-712 types for the {@linkcode userDexAbstraction} function. */
exports.UserDexAbstractionTypes = {
    "HyperliquidTransaction:UserDexAbstraction": [
        { name: "hyperliquidChain", type: "string" },
        { name: "user", type: "address" },
        { name: "enabled", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Enable/disable HIP-3 DEX abstraction.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userDexAbstraction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await userDexAbstraction(
 *   { transport, wallet },
 *   { user: "0x...", enabled: true },
 * );
 * ```
 */
async function userDexAbstraction(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.UserDexAbstractionExchangeRequest.entries.action)({
        type: "userDexAbstraction",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await (0, _base_js_2.getSignatureChainId)(config),
        nonce: await (0, _base_js_2.getNonce)(config),
        ...params,
    });
    return await (0, _base_js_2.executeUserSignedAction)(config, { action, types: exports.UserDexAbstractionTypes }, opts?.signal);
}
//# sourceMappingURL=userDexAbstraction.js.map