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
exports.ConvertToMultiSigUserTypes = exports.SuccessResponse = exports.ConvertToMultiSigUserRequest = exports.ConvertToMultiSigUserRequestSigners = void 0;
exports.convertToMultiSigUser = convertToMultiSigUser;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/** Signers configuration for {@linkcode ConvertToMultiSigUserRequest}. */
exports.ConvertToMultiSigUserRequestSigners = (() => {
    return v.pipe(v.union([
        v.object({
            /** List of authorized user addresses. */
            authorizedUsers: v.pipe(v.array(_base_js_1.Address), v.description("List of authorized user addresses.")),
            /** Minimum number of signatures required. */
            threshold: v.pipe(_base_js_1.UnsignedInteger, v.description("Minimum number of signatures required.")),
        }),
        /** Convert a multi-signature account to a single-signature account. */
        v.pipe(v.null(), v.description("Convert a multi-signature account to a single-signature account.")),
    ]), v.description("Signers configuration for `ConvertToMultiSigUserRequest`"));
})();
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
exports.ConvertToMultiSigUserRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("convertToMultiSigUser"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(_base_js_1.Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /**
             * Signers configuration.
             *
             * Must be {@linkcode ConvertToMultiSigUserRequestSigners} converted to a string via `JSON.stringify(...)`.
             */
            signers: v.pipe(v.union([
                v.pipe(v.string(), v.parseJson(), exports.ConvertToMultiSigUserRequestSigners, v.stringifyJson()),
                v.pipe(exports.ConvertToMultiSigUserRequestSigners, v.stringifyJson()),
            ]), v.description("Signers configuration." +
                "\n\nMust be `ConvertToMultiSigUserRequestSigners` converted to a string via `JSON.stringify(...)`.")),
            /** Unique request identifier (current timestamp in ms). */
            nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
    }), v.description("Convert a single-signature account to a multi-signature account or vice versa."));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
exports.ConvertToMultiSigUserTypes = {
    "HyperliquidTransaction:ConvertToMultiSigUser": [
        { name: "hyperliquidChain", type: "string" },
        { name: "signers", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { convertToMultiSigUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * // Convert to multi-sig user
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   {
 *     signers: {
 *       authorizedUsers: ["0x...", "0x...", "0x..."],
 *       threshold: 2,
 *     },
 *   },
 * );
 *
 * // Convert to single-sig user
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   { signers: null },
 * );
 * ```
 */
async function convertToMultiSigUser(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.ConvertToMultiSigUserRequest.entries.action)({
        type: "convertToMultiSigUser",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await (0, _base_js_2.getSignatureChainId)(config),
        nonce: await (0, _base_js_2.getNonce)(config),
        ...params,
    });
    return await (0, _base_js_2.executeUserSignedAction)(config, { action, types: exports.ConvertToMultiSigUserTypes }, opts?.signal);
}
//# sourceMappingURL=convertToMultiSigUser.js.map