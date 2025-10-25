import { parser, UnsignedInteger } from "../_base.js";
import { executeL1Action, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Claim rewards from referral program.
 * @see null
 */
export const ClaimRewardsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("claimRewards"), v.description("Type of action.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Claim rewards from referral program."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/**
 * Claim rewards from referral program.
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
 * import { claimRewards } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await claimRewards({ transport, wallet });
 * ```
 */
export async function claimRewards(config, opts) {
    const action = parser(ClaimRewardsRequest.entries.action)({
        type: "claimRewards",
    });
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await executeL1Action(config, { action, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=claimRewards.js.map