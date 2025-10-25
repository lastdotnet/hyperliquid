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
exports.OrderSuccessResponse = exports.OrderResponse = exports.OrderRequest = void 0;
exports.order = order;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/**
 * Place an order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
exports.OrderRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("order"), v.description("Type of action.")),
            /** Order parameters. */
            orders: v.pipe(v.array(_common_schemas_js_1.PlaceOrderParamsSchema), v.description("Order parameters.")),
            /**
             * Order grouping strategy:
             * - `na`: Standard order without grouping (default).
             * - `normalTpsl`: TP/SL order with fixed size that doesn't adjust with position changes.
             * - `positionTpsl`: TP/SL order that adjusts proportionally with the position size.
             */
            grouping: v.pipe(v.optional(v.union([
                v.literal("na"),
                v.literal("normalTpsl"),
                v.literal("positionTpsl"),
            ]), "na"), v.description("Order grouping strategy:" +
                "\n- `na`: Standard order without grouping." +
                "\n- `normalTpsl`: TP/SL order with fixed size that doesn't adjust with position changes." +
                "\n- `positionTpsl`: TP/SL order that adjusts proportionally with the position size.")),
            /** Builder fee. */
            builder: v.pipe(v.optional(v.object({
                /** Builder address. */
                b: v.pipe(_base_js_1.Address, v.description("Builder address.")),
                /** Builder fee in 0.1bps (1 = 0.0001%). */
                f: v.pipe(_base_js_1.UnsignedInteger, v.description("Builder fee in 0.1bps (1 = 0.0001%).")),
            })), v.description("Builder fee.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_base_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Place an order(s)."));
})();
/** Response for order placement and batch modifications. */
exports.OrderResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("order"), v.description("Type of response.")),
            /** Specific data. */
            data: v.pipe(v.object({
                /** Array of statuses or error messages. */
                statuses: v.pipe(v.array(v.union([
                    v.object({
                        /** Resting order status. */
                        resting: v.pipe(v.object({
                            /** Order ID. */
                            oid: v.pipe(_base_js_1.UnsignedInteger, v.description("Order ID.")),
                            /** Client Order ID. */
                            cloid: v.pipe(v.optional(v.pipe(_base_js_1.Hex, v.length(34))), v.description("Client Order ID.")),
                        }), v.description("Resting order status.")),
                    }),
                    v.object({
                        /** Filled order status. */
                        filled: v.pipe(v.object({
                            /** Total size filled. */
                            totalSz: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total size filled.")),
                            /** Average price of fill. */
                            avgPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Average price of fill.")),
                            /** Order ID. */
                            oid: v.pipe(_base_js_1.UnsignedInteger, v.description("Order ID.")),
                            /** Client Order ID. */
                            cloid: v.pipe(v.optional(v.pipe(_base_js_1.Hex, v.length(34))), v.description("Client Order ID.")),
                        }), v.description("Filled order status.")),
                    }),
                    v.object({
                        /** Error message. */
                        error: v.pipe(v.string(), v.description("Error message.")),
                    }),
                ])), v.description("Array of statuses or error messages.")),
            }), v.description("Specific data.")),
        }), v.description("Response details.")),
    }), v.description("Response for order placement and batch modifications."));
})();
/** Successful variant of {@linkcode OrderResponse} without errors. */
exports.OrderSuccessResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("order"), v.description("Type of response.")),
            /** Specific data. */
            data: v.pipe(v.object({
                /** Array of successful order statuses. */
                statuses: v.pipe(v.array(v.union([
                    v.object({
                        /** Resting order status. */
                        resting: v.pipe(v.object({
                            /** Order ID. */
                            oid: v.pipe(_base_js_1.UnsignedInteger, v.description("Order ID.")),
                            /** Client Order ID. */
                            cloid: v.pipe(v.optional(v.pipe(_base_js_1.Hex, v.length(34))), v.description("Client Order ID.")),
                        }), v.description("Resting order status.")),
                    }),
                    v.object({
                        /** Filled order status. */
                        filled: v.pipe(v.object({
                            /** Total size filled. */
                            totalSz: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total size filled.")),
                            /** Average price of fill. */
                            avgPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Average price of fill.")),
                            /** Order ID. */
                            oid: v.pipe(_base_js_1.UnsignedInteger, v.description("Order ID.")),
                            /** Client Order ID. */
                            cloid: v.pipe(v.optional(v.pipe(_base_js_1.Hex, v.length(34))), v.description("Client Order ID.")),
                        }), v.description("Filled order status.")),
                    }),
                ])), v.description("Array of successful order statuses.")),
            }), v.description("Specific data.")),
        }), v.description("Response details.")),
    }), v.description("Successful variant of `OrderResponse` without errors."));
})();
/**
 * Place an order(s).
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful variant of {@link OrderResponse} without error statuses.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { order } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await order(
 *   { transport, wallet },
 *   {
 *     orders: [
 *       {
 *         a: 0,
 *         b: true,
 *         p: "30000",
 *         s: "0.1",
 *         r: false,
 *         t: { limit: { tif: "Gtc" } },
 *         c: "0x...",
 *       },
 *     ],
 *     grouping: "na",
 *   },
 * );
 * ```
 */
async function order(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.OrderRequest.entries.action)({
        type: "order",
        ...params,
    });
    const vaultAddress = opts?.vaultAddress ?? config.defaultVaultAddress;
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await (0, _base_js_2.executeL1Action)(config, { action, vaultAddress, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=order.js.map