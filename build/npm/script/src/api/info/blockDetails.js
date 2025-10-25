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
exports.BlockDetailsResponse = exports.BlockDetailsRequest = void 0;
exports.blockDetails = blockDetails;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request block details by block height.
 * @see null
 */
exports.BlockDetailsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("blockDetails"), v.description("Type of request.")),
        /** Block height. */
        height: v.pipe(_base_js_1.UnsignedInteger, v.description("Block height.")),
    }), v.description("Request block details by block height."));
})();
/**
 * Response containing block information.
 * @see null
 */
exports.BlockDetailsResponse = (() => {
    return v.pipe(v.object({
        /** Type of response. */
        type: v.pipe(v.literal("blockDetails"), v.description("Type of response.")),
        /** The details of a block. */
        blockDetails: v.pipe(v.object({
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
            /** Array of transactions in the block. */
            txs: v.pipe(v.array(
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
            }), v.description("Transaction details."))), v.description("Array of transactions in the block.")),
        }), v.description("The details of a block.")),
    }), v.description("Response containing block information."));
})();
/**
 * Request block details by block height.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Response containing block information.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { blockDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 * const data = await blockDetails(
 *   { transport },
 *   { height: 123 },
 * );
 * ```
 */
function blockDetails(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.BlockDetailsRequest)({
        type: "blockDetails",
        ...params,
    });
    return config.transport.request("explorer", request, signal);
}
//# sourceMappingURL=blockDetails.js.map