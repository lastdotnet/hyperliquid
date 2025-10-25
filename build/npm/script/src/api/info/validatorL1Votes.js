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
exports.ValidatorL1VotesResponse = exports.ValidatorL1VotesRequest = void 0;
exports.validatorL1Votes = validatorL1Votes;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request validator L1 votes.
 * @see null
 */
exports.ValidatorL1VotesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("validatorL1Votes"), v.description("Type of request.")),
    }), v.description("Request validator L1 votes."));
})();
/**
 * Array of L1 governance votes cast by validators.
 * @see null
 */
exports.ValidatorL1VotesResponse = (() => {
    return v.pipe(v.array(
    /** L1 governance vote cast by validators. */
    v.pipe(v.object({
        /** Timestamp when the vote expires (in ms since epoch). */
        expireTime: v.pipe(_base_js_1.Integer, v.description("Timestamp when the vote expires (in ms since epoch).")),
        /** Type of the vote. */
        action: v.pipe(v.union([
            v.object({
                D: v.string(),
            }),
            v.object({
                C: v.array(v.string()),
            }),
        ]), v.description("Type of the vote.")),
        /** List of validator addresses that cast this vote. */
        votes: v.pipe(v.array(_base_js_1.Address), v.description("List of validator addresses that cast this vote.")),
    }), v.description("L1 governance vote cast by validators."))), v.description("Array of L1 governance votes cast by validators."));
})();
// -------------------- Function --------------------
/**
 * Request validator L1 votes.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of L1 governance votes cast by validators.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { validatorL1Votes } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await validatorL1Votes({ transport });
 * ```
 */
function validatorL1Votes(config, signal) {
    const request = (0, _base_js_1.parser)(exports.ValidatorL1VotesRequest)({
        type: "validatorL1Votes",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=validatorL1Votes.js.map