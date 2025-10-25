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
exports.UserEventsEvent = exports.TwapSliceFillsEvent = exports.TwapHistoryEvent = exports.NonUserCancelEvent = exports.LiquidationEvent = exports.FundingEvent = exports.FillEvent = exports.UserEventsRequest = void 0;
exports.userEvents = userEvents;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const _common_schemas_js_1 = require("../_common_schemas.js");
// -------------------- Schemas --------------------
/** Subscription to user events for a specific user. */
exports.UserEventsRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("userEvents"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to user events for a specific user."));
})();
/** Event of array of user trade fills. */
exports.FillEvent = (() => {
    return v.pipe(v.object({
        /** Array of user trade fills. */
        fills: v.pipe(v.array(_common_schemas_js_1.FillSchema), v.description("Array of user trade fills.")),
    }), v.description("Event of array of user trade fills."));
})();
/** Event of user funding update. */
exports.FundingEvent = (() => {
    return v.pipe(v.object({
        /** Funding update details. */
        funding: v.pipe(v.object({
            /** Asset symbol. */
            coin: v.pipe(v.string(), v.description("Asset symbol.")),
            /** Amount transferred in USDC. */
            usdc: v.pipe(_base_js_1.Decimal, v.description("Amount transferred in USDC.")),
            /** Signed position size. */
            szi: v.pipe(_base_js_1.Decimal, v.description("Signed position size.")),
            /** Applied funding rate. */
            fundingRate: v.pipe(_base_js_1.Decimal, v.description("Applied funding rate.")),
            /** Number of samples. */
            nSamples: v.pipe(v.nullable(_base_js_1.UnsignedInteger), v.description("Number of samples.")),
        }), v.description("Funding update details.")),
    }), v.description("Event of user funding update."));
})();
/** Event of user liquidation. */
exports.LiquidationEvent = (() => {
    return v.pipe(v.object({
        /** Liquidation details. */
        liquidation: v.pipe(v.object({
            /** Unique liquidation ID. */
            lid: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique liquidation ID.")),
            /** Address of the liquidator. */
            liquidator: v.pipe(_base_js_1.Address, v.description("Address of the liquidator.")),
            /** Address of the liquidated user. */
            liquidated_user: v.pipe(_base_js_1.Address, v.description("Address of the liquidated user.")),
            /** Notional position size that was liquidated. */
            liquidated_ntl_pos: v.pipe(_base_js_1.UnsignedDecimal, v.description("Notional position size that was liquidated.")),
            /** Account value at time of liquidation. */
            liquidated_account_value: v.pipe(_base_js_1.UnsignedDecimal, v.description("Account value at time of liquidation.")),
        }), v.description("Liquidation details.")),
    }), v.description("Event of user liquidation."));
})();
/** Event of array of non-user initiated order cancellations. */
exports.NonUserCancelEvent = (() => {
    return v.pipe(v.object({
        /** Array of non-user initiated order cancellations. */
        nonUserCancel: v.pipe(v.array(
        /** Cancelled order not initiated by the user. */
        v.pipe(v.object({
            /** Asset symbol (e.g., BTC). */
            coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
            /** Order ID. */
            oid: v.pipe(_base_js_1.UnsignedInteger, v.description("Order ID.")),
        }), v.description("Cancelled order not initiated by the user."))), v.description("Array of non-user initiated order cancellations.")),
    }), v.description("Event of array of non-user initiated order cancellations."));
})();
/** Event of a TWAP history entry. */
exports.TwapHistoryEvent = (() => {
    return v.pipe(v.object({
        /** Array of user's TWAP history. */
        twapHistory: v.pipe(v.array(
        /** TWAP history record. */
        v.pipe(v.object({
            /** Creation time of the history record (in seconds since epoch). */
            time: v.pipe(_base_js_1.UnsignedInteger, v.description("Creation time of the history record (in seconds since epoch).")),
            /** State of the TWAP order. */
            state: _common_schemas_js_1.TwapStateSchema,
            /** Current status of the TWAP order. */
            status: _common_schemas_js_1.TwapStatusSchema,
            /** TWAP ID. */
            twapId: v.pipe(_base_js_1.UnsignedInteger, v.description("TWAP ID.")),
        }), v.description("TWAP history record."))), v.description("Array of user's TWAP history.")),
    }), v.description("Event of a TWAP history entry."));
})();
/** Event of TWAP slice fills. */
exports.TwapSliceFillsEvent = (() => {
    return v.pipe(v.object({
        /** Array of TWAP slice fills. */
        twapSliceFills: v.pipe(v.array(_common_schemas_js_1.TwapFillSchema), v.description("Array of TWAP slice fills.")),
    }), v.description("Event of TWAP slice fills."));
})();
/** Event of one of possible user events. */
exports.UserEventsEvent = (() => {
    return v.pipe(v.union([
        exports.FillEvent,
        exports.FundingEvent,
        exports.LiquidationEvent,
        exports.NonUserCancelEvent,
        exports.TwapHistoryEvent,
        exports.TwapSliceFillsEvent,
    ]), v.description("Event of one of possible user events."));
})();
/**
 * Subscribe to non-order events for a specific user.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 * @note Different subscriptions cannot be distinguished from each other.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { userEvents } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userEvents(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
function userEvents(config, params, listener) {
    const payload = (0, _base_js_1.parser)(exports.UserEventsRequest)({ type: "userEvents", ...params });
    return config.transport.subscribe("user", payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=userEvents.js.map