import * as v from "valibot";
import { Address, parser, UnsignedDecimal, UnsignedInteger } from "../_base.js";
// -------------------- Schemas --------------------
/**
 * Request user staking delegations.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export const DelegationsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("delegations"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request user staking delegations."));
})();
/**
 * Array of user's delegations to validators.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export const DelegationsResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.array(
    /** User delegation to a validator. */
    v.pipe(v.object({
        /** Validator address. */
        validator: v.pipe(Address, v.description("Validator address.")),
        /** Amount of tokens delegated to the validator. */
        amount: v.pipe(UnsignedDecimal, v.description("Amount of tokens delegated to the validator.")),
        /** Locked until timestamp (in ms since epoch). */
        lockedUntilTimestamp: v.pipe(UnsignedInteger, v.description("Locked until timestamp (in ms since epoch).")),
    }), v.description("User delegation to a validator."))), v.description("Array of user's delegations to validators."));
})();
/**
 * Request user staking delegations.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's delegations to validators.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegations } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await delegations(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export function delegations(config, params, signal) {
    const request = parser(DelegationsRequest)({
        type: "delegations",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=delegations.js.map