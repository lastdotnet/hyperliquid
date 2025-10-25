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
exports.TwapOrderSuccessResponse = exports.TwapOrderResponse = exports.TwapOrderRequest = void 0;
exports.twapOrder = twapOrder;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Place a TWAP order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 */
exports.TwapOrderRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("twapOrder"), v.description("Type of action.")),
            /** Twap parameters. */
            twap: v.pipe(v.object({
                /** Asset ID. */
                a: v.pipe(_base_js_1.UnsignedInteger, v.description("Asset ID.")),
                /** Position side (`true` for long, `false` for short). */
                b: v.pipe(v.boolean(), v.description("Position side (`true` for long, `false` for short).")),
                /** Size (in base currency units). */
                s: v.pipe(_base_js_1.UnsignedDecimal, v.description("Size (in base currency units).")),
                /** Is reduce-only? */
                r: v.pipe(v.boolean(), v.description("Is reduce-only?")),
                /** TWAP duration in minutes. */
                m: v.pipe(_base_js_1.UnsignedInteger, v.description("TWAP duration in minutes.")),
                /** Enable random order timing. */
                t: v.pipe(v.boolean(), v.description("Enable random order timing.")),
            }), v.description("Twap parameters.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_base_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Place a TWAP order."));
})();
/** Response for creating a TWAP order. */
exports.TwapOrderResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("twapOrder"), v.description("Type of response.")),
            /** Specific data. */
            data: v.pipe(v.object({
                /** Status of the operation or error message. */
                status: v.pipe(v.union([
                    v.object({
                        /** Running order status. */
                        running: v.pipe(v.object({
                            /** TWAP ID. */
                            twapId: v.pipe(_base_js_1.UnsignedInteger, v.description("TWAP ID.")),
                        }), v.description("Running order status.")),
                    }),
                    v.object({
                        /** Error message. */
                        error: v.pipe(v.string(), v.description("Error message.")),
                    }),
                ]), v.description("Status of the operation or error message.")),
            }), v.description("Specific data.")),
        }), v.description("Response details.")),
    }), v.description("Response for creating a TWAP order."));
})();
/** Successful variant of {@linkcode TwapOrderResponse} without errors. */
exports.TwapOrderSuccessResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("twapOrder"), v.description("Type of response.")),
            /** Specific data. */
            data: v.pipe(v.object({
                /** Status of the operation. */
                status: v.pipe(v.object({
                    /** Running order status. */
                    running: v.pipe(v.object({
                        /** TWAP ID. */
                        twapId: v.pipe(_base_js_1.UnsignedInteger, v.description("TWAP ID.")),
                    }), v.description("Running order status.")),
                }), v.description("Status of the operation.")),
            }), v.description("Specific data.")),
        }), v.description("Response details.")),
    }), v.description("Successful variant of `TwapOrderResponse` without errors."));
})();
/**
 * Place a TWAP order.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful variant of {@link TwapOrderResponse} without error status.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { twapOrder } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await twapOrder(
 *   { transport, wallet },
 *   {
 *     twap: {
 *       a: 0,
 *       b: true,
 *       s: "1",
 *       r: false,
 *       m: 10,
 *       t: true,
 *     },
 *   },
 * );
 * ```
 */
async function twapOrder(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.TwapOrderRequest.entries.action)({
        type: "twapOrder",
        ...params,
    });
    const vaultAddress = opts?.vaultAddress ?? config.defaultVaultAddress;
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await (0, _base_js_2.executeL1Action)(config, { action, vaultAddress, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=twapOrder.js.map