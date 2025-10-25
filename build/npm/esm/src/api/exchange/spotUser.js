import { parser, UnsignedInteger } from "../_base.js";
import { executeL1Action, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Opt Out of Spot Dusting.
 * @see null
 */
export const SpotUserRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("spotUser"), v.description("Type of action.")),
            /** Spot dusting options. */
            toggleSpotDusting: v.pipe(v.object({
                /** Opt out of spot dusting. */
                optOut: v.pipe(v.boolean(), v.description("Opt out of spot dusting.")),
            }), v.description("Spot dusting options.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Opt Out of Spot Dusting."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/**
 * Opt Out of Spot Dusting.
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
 * import { spotUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotUser(
 *   { transport, wallet },
 *   { toggleSpotDusting: { optOut: false } },
 * );
 * ```
 */
export async function spotUser(config, params, opts) {
    const action = parser(SpotUserRequest.entries.action)({
        type: "spotUser",
        ...params,
    });
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await executeL1Action(config, { action, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=spotUser.js.map