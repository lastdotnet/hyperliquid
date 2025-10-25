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
exports.VaultSummariesResponse = exports.VaultSummariesRequest = void 0;
exports.vaultSummaries = vaultSummaries;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request a list of vaults less than 2 hours old.
 * @see null
 */
exports.VaultSummariesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("vaultSummaries"), v.description("Type of request.")),
    }), v.description("Request a list of vaults less than 2 hours old."));
})();
/**
 * Array of vaults less than 2 hours old.
 * @see null
 */
exports.VaultSummariesResponse = (() => {
    return v.pipe(v.array(
    /** Summary of a vault. */
    v.pipe(v.object({
        /** Vault name. */
        name: v.pipe(v.string(), v.description("Vault name.")),
        /** Vault address. */
        vaultAddress: v.pipe(_base_js_1.Address, v.description("Vault address.")),
        /** Leader address. */
        leader: v.pipe(_base_js_1.Address, v.description("Leader address.")),
        /** Total value locked. */
        tvl: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total value locked.")),
        /** Vault closure status. */
        isClosed: v.pipe(v.boolean(), v.description("Vault closure status.")),
        /** Vault relationship type. */
        relationship: v.pipe(v.variant("type", [
            v.object({
                /** Relationship type. */
                type: v.pipe(v.union([v.literal("normal"), v.literal("child")]), v.description("Relationship type.")),
            }),
            v.object({
                /** Relationship type. */
                type: v.pipe(v.literal("parent"), v.description("Relationship type.")),
                /** Child vault information. */
                data: v.pipe(v.object({
                    /** Child vault addresses. */
                    childAddresses: v.pipe(v.array(_base_js_1.Address), v.description("Child vault addresses.")),
                }), v.description("Child vault information.")),
            }),
        ]), v.description("Vault relationship type.")),
        /** Creation timestamp. */
        createTimeMillis: v.pipe(_base_js_1.UnsignedInteger, v.description("Creation timestamp.")),
    }), v.description("Summary of a vault."))), v.description("Array of vaults less than 2 hours old."));
})();
// -------------------- Function --------------------
/**
 * Request a list of vaults less than 2 hours old.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of vaults less than 2 hours old.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { vaultSummaries } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await vaultSummaries({ transport });
 * ```
 */
function vaultSummaries(config, signal) {
    const request = (0, _base_js_1.parser)(exports.VaultSummariesRequest)({
        type: "vaultSummaries",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=vaultSummaries.js.map