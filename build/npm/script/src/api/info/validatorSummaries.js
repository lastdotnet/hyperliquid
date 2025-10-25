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
exports.ValidatorSummariesResponse = exports.ValidatorSummariesRequest = void 0;
exports.validatorSummaries = validatorSummaries;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request validator summaries.
 * @see null
 */
exports.ValidatorSummariesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("validatorSummaries"), v.description("Type of request.")),
    }), v.description("Request validator summaries."));
})();
/** Statistics for validator performance over a time period. */
const ValidatorStats = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Fraction of time the validator was online. */
        uptimeFraction: v.pipe(v.string(), v.description("Fraction of time the validator was online.")),
        /** Predicted annual percentage rate of returns. */
        predictedApr: v.pipe(_base_js_1.UnsignedDecimal, v.description("Predicted annual percentage rate of returns.")),
        /** Number of samples used for statistics calculation. */
        nSamples: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of samples used for statistics calculation.")),
    }), v.description("Statistics for validator performance over a time period."));
})();
/**
 * Array of validator performance statistics.
 * @see null
 */
exports.ValidatorSummariesResponse = (() => {
    return v.pipe(v.array(
    /** Validator performance statistics. */
    v.pipe(v.object({
        /** Address of the validator. */
        validator: v.pipe(_base_js_1.Address, v.description("Address of the validator.")),
        /** Address of the validator signer. */
        signer: v.pipe(_base_js_1.Address, v.description("Address of the validator signer.")),
        /** Name of the validator. */
        name: v.pipe(v.string(), v.description("Name of the validator.")),
        /** Description of the validator. */
        description: v.pipe(v.string(), v.description("Description of the validator.")),
        /** Number of blocks produced recently. */
        nRecentBlocks: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of blocks produced recently.")),
        /** Total amount of tokens staked **(unsafe integer)**. */
        stake: v.pipe(v.pipe(v.number(), v.integer()), v.description("Total amount of tokens staked **(unsafe integer)**.")),
        /** Whether the validator is currently jailed. */
        isJailed: v.pipe(v.boolean(), v.description("Whether the validator is currently jailed.")),
        /** Timestamp when the validator can be unjailed (in ms since epoch). */
        unjailableAfter: v.pipe(v.nullable(_base_js_1.UnsignedInteger), v.description("Timestamp when the validator can be unjailed (in ms since epoch).")),
        /** Whether the validator is currently active. */
        isActive: v.pipe(v.boolean(), v.description("Whether the validator is currently active.")),
        /** Commission rate charged by the validator. */
        commission: v.pipe(_base_js_1.UnsignedDecimal, v.description("Commission rate charged by the validator.")),
        /** Performance statistics over different time periods. */
        stats: v.pipe(v.tuple([
            v.tuple([v.literal("day"), ValidatorStats]),
            v.tuple([v.literal("week"), ValidatorStats]),
            v.tuple([v.literal("month"), ValidatorStats]),
        ]), v.description("Performance statistics over different time periods.")),
    }), v.description("Validator performance statistics."))), v.description("Array of validator performance statistics."));
})();
// -------------------- Function --------------------
/**
 * Request validator summaries.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of validator performance statistics.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { validatorSummaries } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await validatorSummaries({ transport });
 * ```
 */
function validatorSummaries(config, signal) {
    const request = (0, _base_js_1.parser)(exports.ValidatorSummariesRequest)({
        type: "validatorSummaries",
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=validatorSummaries.js.map