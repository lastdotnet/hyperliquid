import { Address, Hex, parser, UnsignedDecimal, UnsignedInteger } from "../_base.js";
import { executeUserSignedAction, getNonce, getSignatureChainId, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Send usd to another address.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export const UsdSendRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("usdSend"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /** Destination address. */
            destination: v.pipe(Address, v.description("Destination address.")),
            /** Amount to send (1 = $1). */
            amount: v.pipe(UnsignedDecimal, v.description("Amount to send (1 = $1).")),
            /** Unique request identifier (current timestamp in ms). */
            time: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
    }), v.description("Send usd to another address."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** EIP-712 types for the {@linkcode usdSend} function. */
export const UsdSendTypes = {
    "HyperliquidTransaction:UsdSend": [
        { name: "hyperliquidChain", type: "string" },
        { name: "destination", type: "string" },
        { name: "amount", type: "string" },
        { name: "time", type: "uint64" },
    ],
};
/**
 * Send usd to another address.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { usdSend } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await usdSend(
 *   { transport, wallet },
 *   { destination: "0x...", amount: "1" },
 * );
 * ```
 */
export async function usdSend(config, params, opts) {
    const action = parser(UsdSendRequest.entries.action)({
        type: "usdSend",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await getSignatureChainId(config),
        time: await getNonce(config),
        ...params,
    });
    return await executeUserSignedAction(config, { action, types: UsdSendTypes }, opts?.signal);
}
//# sourceMappingURL=usdSend.js.map