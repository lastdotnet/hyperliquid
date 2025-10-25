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
exports.PerpDexsResponse = exports.PerpDexsRequest = void 0;
exports.perpDexs = perpDexs;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request all perpetual dexs.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
exports.PerpDexsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("perpDexs"), v.description("Type of request.")),
    }), v.description("Request all perpetual dexs."));
})();
/**
 * Array of perpetual dexes (null is main dex).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
exports.PerpDexsResponse = (() => {
    return v.pipe(v.array(v.nullable(
    /** Perpetual dex metadata. */
    v.pipe(v.object({
        /** Short name of the perpetual dex. */
        name: v.pipe(v.string(), v.description("Short name of the perpetual dex.")),
        /** Complete name of the perpetual dex. */
        fullName: v.pipe(v.string(), v.description("Complete name of the perpetual dex.")),
        /** Hex address of the dex deployer. */
        deployer: v.pipe(_base_js_1.Address, v.description("Hex address of the dex deployer.")),
        /** Hex address of the oracle updater, or null if not available. */
        oracleUpdater: v.pipe(v.nullable(_base_js_1.Address), v.description("Hex address of the oracle updater, or null if not available.")),
        /** Hex address of the fee recipient, or null if not available. */
        feeRecipient: v.pipe(v.nullable(_base_js_1.Address), v.description("Hex address of the fee recipient, or null if not available.")),
        /** Mapping of asset names to their streaming open interest caps. */
        assetToStreamingOiCap: v.pipe(v.array(v.tuple([v.string(), v.string()])), v.description("Mapping of asset names to their streaming open interest caps.")),
    }), v.description(" Perpetual dex metadata.")))), v.description("Array of perpetual dexes (null is main dex)."));
})();
// -------------------- Function --------------------
/**
 * Request all perpetual dexs.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of perpetual dexes (null is main dex).
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDexs } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await perpDexs({ transport });
 * ```
 */
function perpDexs(config, signal) {
    const request = (0, _base_js_1.parser)(exports.PerpDexsRequest)({
        type: "perpDexs",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpDexs.js.map