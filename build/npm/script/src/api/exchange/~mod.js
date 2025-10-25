"use strict";
/**
 * This module re-exports all exchange-related API request functions and types.
 *
 * You can use raw functions to maximize tree-shaking in your app,
 * or to access [valibot](https://github.com/fabian-hiller/valibot) schemas Request/Response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 * import { order } from "@nktkas/hyperliquid/api/exchange";
 * //       ^^^^^
 * //       same name as in `ExchangeClient`
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await order(
 *   { transport, wallet }, // same params as in `ExchangeClient` or `MultiSignClient`
 *   {
 *     orders: [
 *       {
 *         a: 0,
 *         b: true,
 *         p: "30000",
 *         s: "0.1",
 *         r: false,
 *         t: { limit: { tif: "Gtc" } },
 *         c: "0x...",
 *       },
 *     ],
 *     grouping: "na",
 *   },
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
__exportStar(require("./agentEnableDexAbstraction.js"), exports);
__exportStar(require("./approveAgent.js"), exports);
__exportStar(require("./approveBuilderFee.js"), exports);
__exportStar(require("./batchModify.js"), exports);
__exportStar(require("./cancel.js"), exports);
__exportStar(require("./cancelByCloid.js"), exports);
__exportStar(require("./cDeposit.js"), exports);
__exportStar(require("./claimRewards.js"), exports);
__exportStar(require("./convertToMultiSigUser.js"), exports);
__exportStar(require("./createSubAccount.js"), exports);
__exportStar(require("./createVault.js"), exports);
__exportStar(require("./cSignerAction.js"), exports);
__exportStar(require("./cValidatorAction.js"), exports);
__exportStar(require("./cWithdraw.js"), exports);
__exportStar(require("./evmUserModify.js"), exports);
__exportStar(require("./modify.js"), exports);
__exportStar(require("./multiSig.js"), exports);
__exportStar(require("./order.js"), exports);
__exportStar(require("./noop.js"), exports);
__exportStar(require("./perpDeploy.js"), exports);
__exportStar(require("./registerReferrer.js"), exports);
__exportStar(require("./reserveRequestWeight.js"), exports);
__exportStar(require("./scheduleCancel.js"), exports);
__exportStar(require("./sendAsset.js"), exports);
__exportStar(require("./setDisplayName.js"), exports);
__exportStar(require("./setReferrer.js"), exports);
__exportStar(require("./spotDeploy.js"), exports);
__exportStar(require("./spotSend.js"), exports);
__exportStar(require("./spotUser.js"), exports);
__exportStar(require("./subAccountModify.js"), exports);
__exportStar(require("./subAccountSpotTransfer.js"), exports);
__exportStar(require("./subAccountTransfer.js"), exports);
__exportStar(require("./tokenDelegate.js"), exports);
__exportStar(require("./twapCancel.js"), exports);
__exportStar(require("./twapOrder.js"), exports);
__exportStar(require("./updateIsolatedMargin.js"), exports);
__exportStar(require("./updateLeverage.js"), exports);
__exportStar(require("./usdClassTransfer.js"), exports);
__exportStar(require("./usdSend.js"), exports);
__exportStar(require("./userDexAbstraction.js"), exports);
__exportStar(require("./vaultDistribute.js"), exports);
__exportStar(require("./vaultModify.js"), exports);
__exportStar(require("./vaultTransfer.js"), exports);
__exportStar(require("./withdraw3.js"), exports);
//# sourceMappingURL=~mod.js.map