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
exports.CancelSuccessResponse = exports.CancelByCloidRequest = void 0;
exports.cancelByCloid = cancelByCloid;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Cancel order(s) by cloid.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 */
exports.CancelByCloidRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("cancelByCloid"), v.description("Type of action.")),
            /** Orders to cancel. */
            cancels: v.pipe(v.array(v.object({
                /** Asset ID. */
                asset: v.pipe(_base_js_1.UnsignedInteger, v.description("Asset ID.")),
                /** Client Order ID. */
                cloid: v.pipe(v.pipe(_base_js_1.Hex, v.length(34)), v.description("Client Order ID.")),
            })), v.description("Orders to cancel.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_base_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Cancel order(s) by cloid."));
})();
const cancel_js_1 = require("./cancel.js");
Object.defineProperty(exports, "CancelSuccessResponse", { enumerable: true, get: function () { return cancel_js_1.CancelSuccessResponse; } });
/**
 * Cancel order(s) by cloid.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful variant of {@link CancelResponse} without error statuses.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cancelByCloid } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await cancelByCloid(
 *   { transport, wallet },
 *   {
 *     cancels: [
 *       { asset: 0, cloid: "0x..." },
 *     ],
 *   },
 * );
 * ```
 */
async function cancelByCloid(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.CancelByCloidRequest.entries.action)({
        type: "cancelByCloid",
        ...params,
    });
    const vaultAddress = opts?.vaultAddress ?? config.defaultVaultAddress;
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await (0, _base_js_2.executeL1Action)(config, { action, vaultAddress, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=cancelByCloid.js.map