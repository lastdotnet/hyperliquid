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
exports.WebData2Event = exports.WebData2Request = void 0;
exports.webData2 = webData2;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
const metaAndAssetCtxs_js_1 = require("../info/metaAndAssetCtxs.js");
const clearinghouseState_js_1 = require("../info/clearinghouseState.js");
const spotClearinghouseState_js_1 = require("../info/spotClearinghouseState.js");
const spotMetaAndAssetCtxs_js_1 = require("../info/spotMetaAndAssetCtxs.js");
// -------------------- Schemas --------------------
/** Subscription to comprehensive user and market data events. */
exports.WebData2Request = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("webData2"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to comprehensive user and market data events."));
})();
/** Event of comprehensive user and market data. */
exports.WebData2Event = (() => {
    return v.pipe(v.object({
        /** Account summary for perpetual trading. */
        clearinghouseState: clearinghouseState_js_1.ClearinghouseStateResponse,
        /** Array of leading vaults. */
        leadingVaults: v.pipe(v.array(
        /** Vault that a user is leading. */
        v.pipe(v.object({
            /** Address of the vault. */
            address: v.pipe(_base_js_1.Address, v.description("Address of the vault.")),
            /** Name of the vault. */
            name: v.pipe(v.string(), v.description("Name of the vault.")),
        }), v.description("Vault that a user is leading."))), v.description("Array of leading vaults.")),
        /** Total equity in vaults. */
        totalVaultEquity: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total equity in vaults.")),
        /** Array of user open orders with frontend information. */
        openOrders: v.pipe(v.array(_common_schemas_js_1.DetailedOrderSchema), v.description("User open orders with frontend information.")),
        /** Agent address if one exists. */
        agentAddress: v.pipe(v.nullable(_base_js_1.Address), v.description("Agent address if one exists.")),
        /** Timestamp until which the agent is valid. */
        agentValidUntil: v.pipe(v.nullable(_base_js_1.UnsignedInteger), v.description("Timestamp until which the agent is valid.")),
        /** Cumulative ledger value. */
        cumLedger: v.pipe(_base_js_1.UnsignedDecimal, v.description("Cumulative ledger value.")),
        /** Metadata for perpetual assets. */
        meta: metaAndAssetCtxs_js_1.MetaAndAssetCtxsResponse.items[0],
        /** Context for each perpetual asset. */
        assetCtxs: metaAndAssetCtxs_js_1.MetaAndAssetCtxsResponse.items[1],
        /** Server timestamp (in ms since epoch). */
        serverTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Server timestamp (in ms since epoch).")),
        /** Whether this account is a vault. */
        isVault: v.pipe(v.boolean(), v.description("Whether this account is a vault.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Array of TWAP states. */
        twapStates: v.pipe(v.array(
        /** TWAP ID and state. */
        v.pipe(v.tuple([
            _base_js_1.UnsignedInteger,
            _common_schemas_js_1.TwapStateSchema,
        ]), v.description("TWAP ID and state."))), v.description("Array of TWAP states.")),
        /** Account summary for spot trading. */
        spotState: spotClearinghouseState_js_1.SpotClearinghouseStateResponse,
        /** Context for each spot asset. */
        spotAssetCtxs: spotMetaAndAssetCtxs_js_1.SpotMetaAndAssetCtxsResponse.items[1],
        /** Whether the user has opted out of spot dusting. */
        optOutOfSpotDusting: v.pipe(v.optional(v.literal(true)), v.description("Whether the user has opted out of spot dusting.")),
        /** Assets currently at their open interest cap. */
        perpsAtOpenInterestCap: v.pipe(v.optional(v.array(v.string())), v.description("Assets currently at their open interest cap.")),
    }), v.description("Comprehensive user and market data."));
})();
/**
 * Subscribe to comprehensive user and market data updates.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { webData2 } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await webData2(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
function webData2(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.WebData2Request)({ type: "webData2", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=webData2.js.map