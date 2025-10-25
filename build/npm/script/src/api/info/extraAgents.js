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
exports.ExtraAgentsResponse = exports.ExtraAgentsRequest = void 0;
exports.extraAgents = extraAgents;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request user extra agents.
 * @see null
 */
exports.ExtraAgentsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("extraAgents"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Request user extra agents."));
})();
/**
 * Array of extra agent details for a user.
 * @see null
 */
exports.ExtraAgentsResponse = (() => {
    return v.pipe(v.array(
    /** Extra agent details for a user. */
    v.pipe(v.object({
        /** Extra agent address. */
        address: v.pipe(_base_js_1.Address, v.description("Extra agent address.")),
        /** Extra agent name. */
        name: v.pipe(v.string(), v.minLength(1), v.description("Extra agent name.")),
        /** Validity period as a timestamp (in ms since epoch). */
        validUntil: v.pipe(_base_js_1.UnsignedInteger, v.description("Validity period as a timestamp (in ms since epoch).")),
    }), v.description("Extra agent details for a user."))), v.description("Array of extra agent details for a user."));
})();
/**
 * Request user extra agents.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of extra agent details for a user.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { extraAgents } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await extraAgents(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function extraAgents(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.ExtraAgentsRequest)({
        type: "extraAgents",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=extraAgents.js.map