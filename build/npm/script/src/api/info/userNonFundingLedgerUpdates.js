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
exports.UserNonFundingLedgerUpdatesResponse = exports.WithdrawUpdate = exports.VaultWithdrawUpdate = exports.VaultDistributionUpdate = exports.VaultDepositUpdate = exports.VaultCreateUpdate = exports.SubAccountTransferUpdate = exports.SpotTransferUpdate = exports.RewardsClaimUpdate = exports.LiquidationUpdate = exports.InternalTransferUpdate = exports.DepositUpdate = exports.AccountClassTransferUpdate = exports.UserNonFundingLedgerUpdatesRequest = void 0;
exports.userNonFundingLedgerUpdates = userNonFundingLedgerUpdates;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
/**
 * Request user non-funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
exports.UserNonFundingLedgerUpdatesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userNonFundingLedgerUpdates"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_base_js_1.Address, v.description("User address.")),
        /** Start time (in ms since epoch). */
        startTime: v.pipe(_base_js_1.UnsignedInteger, v.description("Start time (in ms since epoch).")),
        /** End time (in ms since epoch). */
        endTime: v.pipe(v.nullish(_base_js_1.UnsignedInteger), v.description("End time (in ms since epoch).")),
    }), v.description("Request user non-funding ledger updates."));
})();
/** Transfer between spot and perpetual accounts. */
exports.AccountClassTransferUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("accountClassTransfer"), v.description("Update type.")),
        /** Amount transferred in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount transferred in USDC.")),
        /** Indicates if the transfer is to the perpetual account. */
        toPerp: v.pipe(v.boolean(), v.description("Indicates if the transfer is to the perpetual account.")),
    }), v.description("Transfer between spot and perpetual accounts."));
})();
/** Deposit update to an account. */
exports.DepositUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("deposit"), v.description("Update type.")),
        /** Amount deposited in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount deposited in USDC.")),
    }), v.description("Deposit update to an account."));
})();
/** Internal transfer between accounts. */
exports.InternalTransferUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("internalTransfer"), v.description("Update type.")),
        /** Amount transferred in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount transferred in USDC.")),
        /** Initiator address. */
        user: v.pipe(_base_js_1.Address, v.description("Initiator address.")),
        /** Destination address. */
        destination: v.pipe(_base_js_1.Address, v.description("Destination address.")),
        /** Transfer fee. */
        fee: v.pipe(_base_js_1.UnsignedDecimal, v.description("Transfer fee.")),
    }), v.description("Internal transfer between accounts."));
})();
/** Liquidation event update. */
exports.LiquidationUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("liquidation"), v.description("Update type.")),
        /** Total notional value of liquidated positions. */
        liquidatedNtlPos: v.pipe(_base_js_1.UnsignedDecimal, v.description("Total notional value of liquidated positions.")),
        /** Account value at liquidation time. */
        accountValue: v.pipe(_base_js_1.UnsignedDecimal, v.description("Account value at liquidation time.")),
        /** Leverage type for liquidated positions. */
        leverageType: v.pipe(v.union([v.literal("Cross"), v.literal("Isolated")]), v.description("Leverage type for liquidated positions.")),
        /** Details of each liquidated position. */
        liquidatedPositions: v.pipe(v.array(
        /** Liquidated position. */
        v.pipe(v.object({
            /** Asset symbol of the liquidated position. */
            coin: v.pipe(v.string(), v.description("Asset symbol of the liquidated position.")),
            /** Signed position size liquidated. */
            szi: v.pipe(_base_js_1.Decimal, v.description("Signed position size liquidated.")),
        }), v.description("Liquidated position."))), v.description("Details of each liquidated position.")),
    }), v.description("Liquidation event update."));
})();
/** Rewards claim event update. */
exports.RewardsClaimUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("rewardsClaim"), v.description("Update type.")),
        /** Amount of rewards claimed. */
        amount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount of rewards claimed.")),
        /** Token symbol. */
        token: v.pipe(v.string(), v.description("Token symbol.")),
    }), v.description("Rewards claim event update."));
})();
/** Spot transfer update between accounts. */
exports.SpotTransferUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("spotTransfer"), v.description("Update type.")),
        /** Token symbol. */
        token: v.pipe(v.string(), v.description("Token symbol.")),
        /** Amount transferred. */
        amount: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount transferred.")),
        /** Equivalent USDC value. */
        usdcValue: v.pipe(_base_js_1.UnsignedDecimal, v.description("Equivalent USDC value.")),
        /** Initiator address. */
        user: v.pipe(_base_js_1.Address, v.description("Initiator address.")),
        /** Destination address. */
        destination: v.pipe(_base_js_1.Address, v.description("Destination address.")),
        /** Transfer fee. */
        fee: v.pipe(_base_js_1.UnsignedDecimal, v.description("Transfer fee.")),
        /** Fee in native token. */
        nativeTokenFee: v.pipe(_base_js_1.UnsignedDecimal, v.description("Fee in native token.")),
        nonce: v.null(),
        /** Token in which the fee is denominated (e.g., "USDC"). */
        feeToken: v.pipe(v.string(), v.description('Token in which the fee is denominated (e.g., "USDC").')),
    }), v.description("Spot transfer update between accounts."));
})();
/** Transfer update between sub-accounts. */
exports.SubAccountTransferUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("subAccountTransfer"), v.description("Update type.")),
        /** Amount transferred in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount transferred in USDC.")),
        /** Initiator address. */
        user: v.pipe(_base_js_1.Address, v.description("Initiator address.")),
        /** Destination address. */
        destination: v.pipe(_base_js_1.Address, v.description("Destination address.")),
    }), v.description("Transfer update between sub-accounts."));
})();
/** Vault creation update. */
exports.VaultCreateUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("vaultCreate"), v.description("Update type.")),
        /** Address of the created vault. */
        vault: v.pipe(_base_js_1.Address, v.description("Address of the created vault.")),
        /** Initial allocated amount in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Initial allocated amount in USDC.")),
        /** Vault creation fee. */
        fee: v.pipe(_base_js_1.UnsignedDecimal, v.description("Vault creation fee.")),
    }), v.description("Vault creation update."));
})();
/** Vault deposit update. */
exports.VaultDepositUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("vaultDeposit"), v.description("Update type.")),
        /** Address of the target vault. */
        vault: v.pipe(_base_js_1.Address, v.description("Address of the target vault.")),
        /** Amount deposited in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount deposited in USDC.")),
    }), v.description("Vault deposit update."));
})();
/** Vault distribution update. */
exports.VaultDistributionUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("vaultDistribution"), v.description("Update type.")),
        /** Address of the vault distributing funds. */
        vault: v.pipe(_base_js_1.Address, v.description("Address of the vault distributing funds.")),
        /** Amount distributed in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount distributed in USDC.")),
    }), v.description("Vault distribution update."));
})();
/** Vault withdrawal event update. */
exports.VaultWithdrawUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("vaultWithdraw"), v.description("Update type.")),
        /** Vault address. */
        vault: v.pipe(_base_js_1.Address, v.description("Vault address.")),
        /** Address of the user withdrawing funds. */
        user: v.pipe(_base_js_1.Address, v.description("Address of the user withdrawing funds.")),
        /** Withdrawal request amount in USD. */
        requestedUsd: v.pipe(_base_js_1.UnsignedDecimal, v.description("Withdrawal request amount in USD.")),
        /** Withdrawal commission fee. */
        commission: v.pipe(_base_js_1.UnsignedDecimal, v.description("Withdrawal commission fee.")),
        /** Closing cost associated with positions. */
        closingCost: v.pipe(_base_js_1.UnsignedDecimal, v.description("Closing cost associated with positions.")),
        /** Basis value for withdrawal calculation. */
        basis: v.pipe(_base_js_1.UnsignedDecimal, v.description("Basis value for withdrawal calculation.")),
        /** Net withdrawn amount in USD after fees and costs. */
        netWithdrawnUsd: v.pipe(_base_js_1.UnsignedDecimal, v.description("Net withdrawn amount in USD after fees and costs.")),
    }), v.description("Vault withdrawal event update."));
})();
/** Withdrawal update from an account. */
exports.WithdrawUpdate = (() => {
    return v.pipe(v.object({
        /** Update type. */
        type: v.pipe(v.literal("withdraw"), v.description("Update type.")),
        /** Amount withdrawn in USDC. */
        usdc: v.pipe(_base_js_1.UnsignedDecimal, v.description("Amount withdrawn in USDC.")),
        /** Unique nonce for the withdrawal request. */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique nonce for the withdrawal request.")),
        /** Withdrawal fee. */
        fee: v.pipe(_base_js_1.UnsignedDecimal, v.description("Withdrawal fee.")),
    }), v.description("Withdrawal update from an account."));
})();
/**
 * Array of user's non-funding ledger update.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
exports.UserNonFundingLedgerUpdatesResponse = (() => {
    return v.pipe(v.array(
    /** User's non-funding ledger update. */
    v.pipe(v.object({
        /** Timestamp of the update (in ms since epoch). */
        time: v.pipe(_base_js_1.UnsignedInteger, v.description("Timestamp of the update (in ms since epoch).")),
        /** L1 transaction hash. */
        hash: v.pipe(v.pipe(_base_js_1.Hex, v.length(66)), v.description("L1 transaction hash.")),
        /** Update details. */
        delta: v.pipe(v.variant("type", [
            exports.AccountClassTransferUpdate,
            exports.DepositUpdate,
            exports.InternalTransferUpdate,
            exports.LiquidationUpdate,
            exports.RewardsClaimUpdate,
            exports.SpotTransferUpdate,
            exports.SubAccountTransferUpdate,
            exports.VaultCreateUpdate,
            exports.VaultDepositUpdate,
            exports.VaultDistributionUpdate,
            exports.VaultWithdrawUpdate,
            exports.WithdrawUpdate,
        ]), v.description("Update details.")),
    }), v.description("User's non-funding ledger update."))), v.description("Array of user's non-funding ledger update."));
})();
/**
 * Request user non-funding ledger updates.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's non-funding ledger update.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userNonFundingLedgerUpdates } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userNonFundingLedgerUpdates(
 *   { transport },
 *   { user: "0x...", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
function userNonFundingLedgerUpdates(config, params, signal) {
    const request = (0, _base_js_1.parser)(exports.UserNonFundingLedgerUpdatesRequest)({
        type: "userNonFundingLedgerUpdates",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userNonFundingLedgerUpdates.js.map