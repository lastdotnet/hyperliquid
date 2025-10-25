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
exports.SuccessResponse = exports.SubAccountSpotTransferRequest = void 0;
exports.subAccountSpotTransfer = subAccountSpotTransfer;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Transfer between sub-accounts (spot).
 * @see null
 */
exports.SubAccountSpotTransferRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("subAccountSpotTransfer"), v.description("Type of action.")),
            /** Sub-account address. */
            subAccountUser: v.pipe(_base_js_1.Address, v.description("Sub-account address.")),
            /** `true` for deposit, `false` for withdrawal. */
            isDeposit: v.pipe(v.boolean(), v.description("`true` for deposit, `false` for withdrawal.")),
            /** Token identifier. */
            token: v.pipe(_base_js_1.TokenId, v.description("Token identifier.")),
            /** Amount to send (not in wei). */
            amount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount to send (not in wei).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Transfer between sub-accounts (spot)."));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/**
 * Transfer between sub-accounts (spot).
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
 * import { subAccountSpotTransfer } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountSpotTransfer(
 *   { transport, wallet },
 *   {
 *     subAccountUser: "0x...",
 *     isDeposit: true,
 *     token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *     amount: "1",
 *   },
 * );
 * ```
 */
async function subAccountSpotTransfer(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.SubAccountSpotTransferRequest.entries.action)({
        type: "subAccountSpotTransfer",
        ...params,
    });
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await (0, _base_js_2.executeL1Action)(config, { action, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=subAccountSpotTransfer.js.map