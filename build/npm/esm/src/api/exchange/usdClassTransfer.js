import { Hex, parser, UnsignedDecimal, UnsignedInteger } from "../_base.js";
import { executeUserSignedAction, getNonce, getSignatureChainId, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Transfer funds between Spot account and Perp account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#transfer-from-spot-account-to-perp-account-and-vice-versa
 */
export const UsdClassTransferRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("usdClassTransfer"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /** Amount to transfer (1 = $1). */
            amount: v.pipe(UnsignedDecimal, v.description("Amount to transfer (1 = $1).")),
            /** `true` for Spot to Perp, `false` for Perp to Spot. */
            toPerp: v.pipe(v.boolean(), v.description("`true` for Spot to Perp, `false` for Perp to Spot.")),
            /** Unique request identifier (current timestamp in ms). */
            nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
    }), v.description("Transfer funds between Spot account and Perp account."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** EIP-712 types for the {@linkcode usdClassTransfer} function. */
export const UsdClassTransferTypes = {
    "HyperliquidTransaction:UsdClassTransfer": [
        { name: "hyperliquidChain", type: "string" },
        { name: "amount", type: "string" },
        { name: "toPerp", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer funds between Spot account and Perp account.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#transfer-from-spot-account-to-perp-account-and-vice-versa
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { usdClassTransfer } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await usdClassTransfer(
 *   { transport, wallet },
 *   { amount: "1", toPerp: true },
 * );
 * ```
 */
export async function usdClassTransfer(config, params, opts) {
    const action = parser(UsdClassTransferRequest.entries.action)({
        type: "usdClassTransfer",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await getSignatureChainId(config),
        nonce: await getNonce(config),
        ...params,
    });
    return await executeUserSignedAction(config, { action, types: UsdClassTransferTypes }, opts?.signal);
}
//# sourceMappingURL=usdClassTransfer.js.map