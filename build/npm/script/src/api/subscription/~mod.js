"use strict";
/**
 * This module re-exports all subscription-related API request functions and types.
 *
 * You can use raw functions to maximize tree-shaking in your app,
 * or to access [valibot](https://github.com/fabian-hiller/valibot) schemas Request/Response.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { candle } from "@nktkas/hyperliquid/api/subscription";
 * //       ^^^^^^
 * //       same name as in `SubscriptionClient`
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await candle(
 *   { transport }, // same params as in `SubscriptionClient`
 *   { coin: "ETH", interval: "1h" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @module
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaError = exports.parser = void 0;
var _base_js_1 = require("../_base.js");
Object.defineProperty(exports, "parser", { enumerable: true, get: function () { return _base_js_1.parser; } });
Object.defineProperty(exports, "SchemaError", { enumerable: true, get: function () { return _base_js_1.SchemaError; } });
__exportStar(require("./activeAssetCtx.js"), exports);
__exportStar(require("./activeAssetData.js"), exports);
__exportStar(require("./activeSpotAssetCtx.js"), exports);
__exportStar(require("./allMids.js"), exports);
__exportStar(require("./assetCtxs.js"), exports);
__exportStar(require("./bbo.js"), exports);
__exportStar(require("./candle.js"), exports);
__exportStar(require("./clearinghouseState.js"), exports);
__exportStar(require("./explorerBlock.js"), exports);
__exportStar(require("./explorerTxs.js"), exports);
__exportStar(require("./l2Book.js"), exports);
__exportStar(require("./notification.js"), exports);
__exportStar(require("./openOrders.js"), exports);
__exportStar(require("./orderUpdates.js"), exports);
__exportStar(require("./trades.js"), exports);
__exportStar(require("./userEvents.js"), exports);
__exportStar(require("./userFills.js"), exports);
__exportStar(require("./userFundings.js"), exports);
__exportStar(require("./userHistoricalOrders.js"), exports);
__exportStar(require("./userNonFundingLedgerUpdates.js"), exports);
__exportStar(require("./userTwapHistory.js"), exports);
__exportStar(require("./userTwapSliceFills.js"), exports);
__exportStar(require("./webData2.js"), exports);
//# sourceMappingURL=~mod.js.map