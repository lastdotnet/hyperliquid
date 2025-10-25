"use strict";
/**
 * This module re-exports all info-related API request functions and types.
 *
 * You can use raw functions to maximize tree-shaking in your app,
 * or to access [valibot](https://github.com/fabian-hiller/valibot) schemas Request/Response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { clearinghouseState } from "@nktkas/hyperliquid/api/info";
 * //       ^^^^^^^^^^^^^^^^^^
 * //       same name as in `InfoClient`
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await clearinghouseState(
 *   { transport }, // same params as in `InfoClient`
 *   { user: "0x..." },
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
__exportStar(require("./activeAssetData.js"), exports);
__exportStar(require("./alignedQuoteTokenInfo.js"), exports);
__exportStar(require("./allMids.js"), exports);
__exportStar(require("./blockDetails.js"), exports);
__exportStar(require("./candleSnapshot.js"), exports);
__exportStar(require("./clearinghouseState.js"), exports);
__exportStar(require("./delegations.js"), exports);
__exportStar(require("./delegatorHistory.js"), exports);
__exportStar(require("./delegatorRewards.js"), exports);
__exportStar(require("./delegatorSummary.js"), exports);
__exportStar(require("./exchangeStatus.js"), exports);
__exportStar(require("./extraAgents.js"), exports);
__exportStar(require("./frontendOpenOrders.js"), exports);
__exportStar(require("./fundingHistory.js"), exports);
__exportStar(require("./gossipRootIps.js"), exports);
__exportStar(require("./historicalOrders.js"), exports);
__exportStar(require("./isVip.js"), exports);
__exportStar(require("./l2Book.js"), exports);
__exportStar(require("./leadingVaults.js"), exports);
__exportStar(require("./legalCheck.js"), exports);
__exportStar(require("./liquidatable.js"), exports);
__exportStar(require("./marginTable.js"), exports);
__exportStar(require("./maxBuilderFee.js"), exports);
__exportStar(require("./maxMarketOrderNtls.js"), exports);
__exportStar(require("./meta.js"), exports);
__exportStar(require("./metaAndAssetCtxs.js"), exports);
__exportStar(require("./openOrders.js"), exports);
__exportStar(require("./orderStatus.js"), exports);
__exportStar(require("./perpDeployAuctionStatus.js"), exports);
__exportStar(require("./perpDexLimits.js"), exports);
__exportStar(require("./perpDexs.js"), exports);
__exportStar(require("./perpsAtOpenInterestCap.js"), exports);
__exportStar(require("./portfolio.js"), exports);
__exportStar(require("./predictedFundings.js"), exports);
__exportStar(require("./preTransferCheck.js"), exports);
__exportStar(require("./recentTrades.js"), exports);
__exportStar(require("./referral.js"), exports);
__exportStar(require("./spotClearinghouseState.js"), exports);
__exportStar(require("./spotDeployState.js"), exports);
__exportStar(require("./spotMeta.js"), exports);
__exportStar(require("./spotMetaAndAssetCtxs.js"), exports);
__exportStar(require("./spotPairDeployAuctionStatus.js"), exports);
__exportStar(require("./subAccounts.js"), exports);
__exportStar(require("./tokenDetails.js"), exports);
__exportStar(require("./twapHistory.js"), exports);
__exportStar(require("./txDetails.js"), exports);
__exportStar(require("./userDetails.js"), exports);
__exportStar(require("./userDexAbstraction.js"), exports);
__exportStar(require("./userFees.js"), exports);
__exportStar(require("./userFills.js"), exports);
__exportStar(require("./userFillsByTime.js"), exports);
__exportStar(require("./userFunding.js"), exports);
__exportStar(require("./userNonFundingLedgerUpdates.js"), exports);
__exportStar(require("./userRateLimit.js"), exports);
__exportStar(require("./userRole.js"), exports);
__exportStar(require("./userToMultiSigSigners.js"), exports);
__exportStar(require("./userTwapSliceFills.js"), exports);
__exportStar(require("./userTwapSliceFillsByTime.js"), exports);
__exportStar(require("./userVaultEquities.js"), exports);
__exportStar(require("./validatorL1Votes.js"), exports);
__exportStar(require("./validatorSummaries.js"), exports);
__exportStar(require("./vaultDetails.js"), exports);
__exportStar(require("./vaultSummaries.js"), exports);
__exportStar(require("./webData2.js"), exports);
//# sourceMappingURL=~mod.js.map