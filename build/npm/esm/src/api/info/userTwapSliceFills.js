import * as v from "valibot";
import { Address, parser, UnsignedInteger } from "../_base.js";
import { TwapFillSchema } from "../_common_schemas.js";
// -------------------- Schemas --------------------
/**
 * Request user TWAP slice fills.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
export const UserTwapSliceFillsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userTwapSliceFills"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request user TWAP slice fills."));
})();
/**
 * Array of user's twap slice fill.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
export const UserTwapSliceFillsResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.array(
    /** User twap slice fill. */
    v.pipe(v.object({
        /** Fill details for the TWAP slice. */
        fill: TwapFillSchema,
        /** ID of the TWAP. */
        twapId: v.pipe(UnsignedInteger, v.description("ID of the TWAP.")),
    }), v.description("User twap slice fill."))), v.description("Array of user's twap slice fill."));
})();
/**
 * Request user TWAP slice fills.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's twap slice fill.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userTwapSliceFills } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userTwapSliceFills(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export function userTwapSliceFills(config, params, signal) {
    const request = parser(UserTwapSliceFillsRequest)({
        type: "userTwapSliceFills",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userTwapSliceFills.js.map