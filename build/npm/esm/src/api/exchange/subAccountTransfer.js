import { Address, parser, UnsignedInteger } from "../_base.js";
import { executeL1Action, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Transfer between sub-accounts (perpetual).
 * @see null
 */
export const SubAccountTransferRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("subAccountTransfer"), v.description("Type of action.")),
            /** Sub-account address. */
            subAccountUser: v.pipe(Address, v.description("Sub-account address.")),
            /** `true` for deposit, `false` for withdrawal. */
            isDeposit: v.pipe(v.boolean(), v.description("`true` for deposit, `false` for withdrawal.")),
            /** Amount to transfer (float * 1e6). */
            usd: v.pipe(UnsignedInteger, v.description("Amount to transfer (float * 1e6).")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Transfer between sub-accounts (perpetual)."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/**
 * Transfer between sub-accounts (perpetual).
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
 * import { subAccountTransfer } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountTransfer(
 *   { transport, wallet },
 *   { subAccountUser: "0x...", isDeposit: true, usd: 1 * 1e6 },
 * );
 * ```
 */
export async function subAccountTransfer(config, params, opts) {
    const action = parser(SubAccountTransferRequest.entries.action)({
        type: "subAccountTransfer",
        ...params,
    });
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await executeL1Action(config, { action, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=subAccountTransfer.js.map