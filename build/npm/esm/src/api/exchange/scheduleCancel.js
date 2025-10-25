import { Address, parser, UnsignedInteger } from "../_base.js";
import { executeL1Action, Signature, } from "./_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/**
 * Schedule a cancel-all operation at a future time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
 */
export const ScheduleCancelRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("scheduleCancel"), v.description("Type of action.")),
            /**
             * Scheduled time (in ms since epoch).
             * Must be at least 5 seconds in the future.
             *
             * If not specified, will cause all scheduled cancel operations to be deleted.
             */
            time: v.pipe(v.optional(UnsignedInteger), v.description("Scheduled time (in ms since epoch)." +
                "\nMust be at least 5 seconds in the future." +
                "\n\nIf not specified, will cause all scheduled cancel operations to be deleted.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(Signature, v.description("Cryptographic signature.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Schedule a cancel-all operation at a future time."));
})();
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
export async function scheduleCancel(config, paramsOrOpts, maybeOpts) {
    const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
    const params = isFirstArgParams ? paramsOrOpts : {};
    const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
    const action = parser(ScheduleCancelRequest.entries.action)({
        type: "scheduleCancel",
        ...params,
    });
    const vaultAddress = opts?.vaultAddress ?? config.defaultVaultAddress;
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await executeL1Action(config, { action, vaultAddress, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=scheduleCancel.js.map