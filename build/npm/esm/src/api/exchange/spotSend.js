import { Address, Hex, parser, TokenId, UnsignedDecimal, UnsignedInteger } from "../_base.js";
import { executeUserSignedAction, getNonce, getSignatureChainId, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Send spot assets to another address.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-spot-transfer
 */
export const SpotSendRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("spotSend"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(Hex, v.description("Chain ID used for signing.")),
            /** HyperLiquid network. */
            hyperliquidChain: v.pipe(v.union([v.literal("Mainnet"), v.literal("Testnet")]), v.description("HyperLiquid network.")),
            /** Destination address. */
            destination: v.pipe(Address, v.description("Destination address.")),
            /** Token identifier. */
            token: v.pipe(TokenId, v.description("Token identifier.")),
            /** Amount to send (not in wei). */
            amount: v.pipe(UnsignedDecimal, v.description("Amount to send (not in wei).")),
            /** Unique request identifier (current timestamp in ms). */
            time: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
    }), v.description("Send spot assets to another address."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** EIP-712 types for the {@linkcode spotSend} function. */
export const SpotSendTypes = {
    "HyperliquidTransaction:SpotSend": [
        { name: "hyperliquidChain", type: "string" },
        { name: "destination", type: "string" },
        { name: "token", type: "string" },
        { name: "amount", type: "string" },
        { name: "time", type: "uint64" },
    ],
};
/**
 * Send spot assets to another address.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-spot-transfer
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotSend } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotSend(
 *   { transport, wallet },
 *   {
 *     destination: "0x...",
 *     token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *     amount: "1",
 *   },
 * );
 * ```
 */
export async function spotSend(config, params, opts) {
    const action = parser(SpotSendRequest.entries.action)({
        type: "spotSend",
        hyperliquidChain: config.transport.isTestnet ? "Testnet" : "Mainnet",
        signatureChainId: await getSignatureChainId(config),
        time: await getNonce(config),
        ...params,
    });
    return await executeUserSignedAction(config, { action, types: SpotSendTypes }, opts?.signal);
}
//# sourceMappingURL=spotSend.js.map