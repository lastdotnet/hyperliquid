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
exports.UserToMultiSigSignersResponse = exports.UserToMultiSigSignersRequest = void 0;
exports.userToMultiSigSigners = userToMultiSigSigners;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request multi-sig signers for a user.
 * @see null
 */
exports.UserToMultiSigSignersRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userToMultiSigSigners"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request multi-sig signers for a user."));
})();
/**
 * Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 * @see null
 */
exports.UserToMultiSigSignersResponse = (() => {
    return v.pipe(v.nullable(v.object({
        /** Authorized users addresses. */
        authorizedUsers: v.pipe(v.array(_base_js_1.Address), v.minLength(1), v.description("Authorized users addresses.")),
        /** Threshold number of signatures required. */
        threshold: v.pipe(_base_js_1.UnsignedInteger, v.minValue(1), v.description("Threshold number of signatures required.")),
    })), v.description("Multi-sig signers for a user or null if the user does not have any multi-sig signers."));
})();
/**
 * Request multi-sig signers for a user.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userToMultiSigSigners } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userToMultiSigSigners(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function userToMultiSigSigners(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.UserToMultiSigSignersRequest)({
        type: "userToMultiSigSigners",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userToMultiSigSigners.js.map