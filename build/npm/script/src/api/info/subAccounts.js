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
exports.SubAccountsResponse = exports.SubAccountsRequest = void 0;
exports.subAccounts = subAccounts;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const clearinghouseState_js_1 = require("./clearinghouseState.js");
const spotClearinghouseState_js_1 = require("./spotClearinghouseState.js");
// -------------------- Schemas --------------------
/**
 * Request user sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
exports.SubAccountsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("subAccounts"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request user sub-accounts."));
})();
/**
 * Array of user sub-account or null if the user does not have any sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
exports.SubAccountsResponse = (() => {
    return v.pipe(v.nullable(v.array(
    /** Sub-account details for a user. */
    v.pipe(v.object({
        /** Sub-account name. */
        name: v.pipe(v.string(), v.minLength(1), v.description("Sub-account name.")),
        /** Sub-account address. */
        subAccountUser: v.pipe(_base_js_1.Address, v.description("Sub-account address.")),
        /** Master account address. */
        master: v.pipe(_base_js_1.Address, v.description("Master account address.")),
        /** Perpetual trading clearinghouse state summary. */
        clearinghouseState: clearinghouseState_js_1.ClearinghouseStateResponse,
        /** Spot tokens clearinghouse state. */
        spotState: spotClearinghouseState_js_1.SpotClearinghouseStateResponse,
    }), v.description("Sub-account details for a user.")))), v.description("Array of user sub-account or null if the user does not have any sub-accounts."));
})();
/**
 * Request user sub-accounts.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user sub-account or null if the user does not have any sub-accounts.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { subAccounts } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await subAccounts(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function subAccounts(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.SubAccountsRequest)({
        type: "subAccounts",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=subAccounts.js.map