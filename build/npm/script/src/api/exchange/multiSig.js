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
exports.MultiSigTypes = exports.TwapOrderSuccessResponse = exports.TwapCancelSuccessResponse = exports.SuccessResponse = exports.OrderSuccessResponse = exports.CreateVaultResponse = exports.CreateSubAccountResponse = exports.CancelSuccessResponse = exports.MultiSigRequest = void 0;
exports.multiSig = multiSig;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
const approveAgent_js_1 = require("./approveAgent.js");
const approveBuilderFee_js_1 = require("./approveBuilderFee.js");
const batchModify_js_1 = require("./batchModify.js");
const cancel_js_1 = require("./cancel.js");
Object.defineProperty(exports, "CancelSuccessResponse", { enumerable: true, get: function () { return cancel_js_1.CancelSuccessResponse; } });
const cancelByCloid_js_1 = require("./cancelByCloid.js");
const claimRewards_js_1 = require("./claimRewards.js");
const cDeposit_js_1 = require("./cDeposit.js");
const convertToMultiSigUser_js_1 = require("./convertToMultiSigUser.js");
const createSubAccount_js_1 = require("./createSubAccount.js");
Object.defineProperty(exports, "CreateSubAccountResponse", { enumerable: true, get: function () { return createSubAccount_js_1.CreateSubAccountResponse; } });
const createVault_js_1 = require("./createVault.js");
Object.defineProperty(exports, "CreateVaultResponse", { enumerable: true, get: function () { return createVault_js_1.CreateVaultResponse; } });
const cSignerAction_js_1 = require("./cSignerAction.js");
const cValidatorAction_js_1 = require("./cValidatorAction.js");
const cWithdraw_js_1 = require("./cWithdraw.js");
const evmUserModify_js_1 = require("./evmUserModify.js");
const modify_js_1 = require("./modify.js");
const noop_js_1 = require("./noop.js");
const order_js_1 = require("./order.js");
Object.defineProperty(exports, "OrderSuccessResponse", { enumerable: true, get: function () { return order_js_1.OrderSuccessResponse; } });
const registerReferrer_js_1 = require("./registerReferrer.js");
const reserveRequestWeight_js_1 = require("./reserveRequestWeight.js");
const scheduleCancel_js_1 = require("./scheduleCancel.js");
const setDisplayName_js_1 = require("./setDisplayName.js");
const setReferrer_js_1 = require("./setReferrer.js");
const spotDeploy_js_1 = require("./spotDeploy.js");
const subAccountModify_js_1 = require("./subAccountModify.js");
const tokenDelegate_js_1 = require("./tokenDelegate.js");
const twapOrder_js_1 = require("./twapOrder.js");
Object.defineProperty(exports, "TwapOrderSuccessResponse", { enumerable: true, get: function () { return twapOrder_js_1.TwapOrderSuccessResponse; } });
const usdClassTransfer_js_1 = require("./usdClassTransfer.js");
const vaultDistribute_js_1 = require("./vaultDistribute.js");
const withdraw3_js_1 = require("./withdraw3.js");
const perpDeploy_js_1 = require("./perpDeploy.js");
const sendAsset_js_1 = require("./sendAsset.js");
const spotSend_js_1 = require("./spotSend.js");
const spotUser_js_1 = require("./spotUser.js");
const subAccountSpotTransfer_js_1 = require("./subAccountSpotTransfer.js");
const subAccountTransfer_js_1 = require("./subAccountTransfer.js");
const twapCancel_js_1 = require("./twapCancel.js");
Object.defineProperty(exports, "TwapCancelSuccessResponse", { enumerable: true, get: function () { return twapCancel_js_1.TwapCancelSuccessResponse; } });
const updateIsolatedMargin_js_1 = require("./updateIsolatedMargin.js");
const updateLeverage_js_1 = require("./updateLeverage.js");
const usdSend_js_1 = require("./usdSend.js");
const vaultModify_js_1 = require("./vaultModify.js");
const vaultTransfer_js_1 = require("./vaultTransfer.js");
// -------------------- Schemas --------------------
/**
 * A multi-signature request.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
exports.MultiSigRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("multiSig"), v.description("Type of action.")),
            /** Chain ID used for signing. */
            signatureChainId: v.pipe(_base_js_1.Hex, v.description("Chain ID used for signing.")),
            /** List of signatures from authorized signers. */
            signatures: v.pipe(v.array(_base_js_2.Signature), v.description("List of signatures from authorized signers.")),
            /** Multi-signature payload information. */
            payload: v.pipe(v.object({
                /** Address of the multi-signature user account. */
                multiSigUser: v.pipe(_base_js_1.Address, v.description("Address of the multi-signature user account.")),
                /** Address of the authorized user initiating the request (any authorized user). */
                outerSigner: v.pipe(_base_js_1.Address, v.description("Address of the authorized user initiating the request (any authorized user).")),
                /** The underlying action to be executed through multi-sig. */
                action: v.pipe(v.variant("type", [
                    approveAgent_js_1.ApproveAgentRequest.entries.action,
                    approveBuilderFee_js_1.ApproveBuilderFeeRequest.entries.action,
                    batchModify_js_1.BatchModifyRequest.entries.action,
                    cancel_js_1.CancelRequest.entries.action,
                    cancelByCloid_js_1.CancelByCloidRequest.entries.action,
                    cDeposit_js_1.CDepositRequest.entries.action,
                    claimRewards_js_1.ClaimRewardsRequest.entries.action,
                    convertToMultiSigUser_js_1.ConvertToMultiSigUserRequest.entries.action,
                    createSubAccount_js_1.CreateSubAccountRequest.entries.action,
                    createVault_js_1.CreateVaultRequest.entries.action,
                    cSignerAction_js_1.CSignerActionRequest.entries.action,
                    cValidatorAction_js_1.CValidatorActionRequest.entries.action,
                    cWithdraw_js_1.CWithdrawRequest.entries.action,
                    evmUserModify_js_1.EvmUserModifyRequest.entries.action,
                    modify_js_1.ModifyRequest.entries.action,
                    noop_js_1.NoopRequest.entries.action,
                    order_js_1.OrderRequest.entries.action,
                    perpDeploy_js_1.PerpDeployRequest.entries.action,
                    registerReferrer_js_1.RegisterReferrerRequest.entries.action,
                    reserveRequestWeight_js_1.ReserveRequestWeightRequest.entries.action,
                    scheduleCancel_js_1.ScheduleCancelRequest.entries.action,
                    sendAsset_js_1.SendAssetRequest.entries.action,
                    setDisplayName_js_1.SetDisplayNameRequest.entries.action,
                    setReferrer_js_1.SetReferrerRequest.entries.action,
                    spotDeploy_js_1.SpotDeployRequest.entries.action,
                    spotSend_js_1.SpotSendRequest.entries.action,
                    spotUser_js_1.SpotUserRequest.entries.action,
                    subAccountModify_js_1.SubAccountModifyRequest.entries.action,
                    subAccountSpotTransfer_js_1.SubAccountSpotTransferRequest.entries.action,
                    subAccountTransfer_js_1.SubAccountTransferRequest.entries.action,
                    tokenDelegate_js_1.TokenDelegateRequest.entries.action,
                    twapCancel_js_1.TwapCancelRequest.entries.action,
                    twapOrder_js_1.TwapOrderRequest.entries.action,
                    updateIsolatedMargin_js_1.UpdateIsolatedMarginRequest.entries.action,
                    updateLeverage_js_1.UpdateLeverageRequest.entries.action,
                    usdClassTransfer_js_1.UsdClassTransferRequest.entries.action,
                    usdSend_js_1.UsdSendRequest.entries.action,
                    vaultDistribute_js_1.VaultDistributeRequest.entries.action,
                    vaultModify_js_1.VaultModifyRequest.entries.action,
                    vaultTransfer_js_1.VaultTransferRequest.entries.action,
                    withdraw3_js_1.Withdraw3Request.entries.action,
                ]), v.description("The underlying action to be executed through multi-sig.")),
            }), v.description("Multi-signature payload information.")),
        }), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_base_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("A multi-signature request."));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/** EIP-712 types for the {@linkcode multiSig} function. */
exports.MultiSigTypes = {
    "HyperliquidTransaction:SendMultiSig": [
        { name: "hyperliquidChain", type: "string" },
        { name: "multiSigActionHash", type: "bytes32" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * A multi-signature request.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Any successful response.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { multiSig, parser, ScheduleCancelRequest } from "@nktkas/hyperliquid/api/exchange";
 * import { signL1Action } from "@nktkas/hyperliquid/signing";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const multiSigUser = "0x...";
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const nonce = Date.now();
 * const action = parser(ScheduleCancelRequest.entries.action)({
 *   type: "scheduleCancel",
 *   time: Date.now() + 10000,
 * });
 *
 * // Create the required number of signatures
 * const signatures = await Promise.all(["0x...", "0x..."].map(async (signerPrivKey) => {
 *   return await signL1Action({
 *     wallet: privateKeyToAccount(signerPrivKey as `0x${string}`), // viem or ethers
 *     action: [multiSigUser.toLowerCase(), wallet.address.toLowerCase(), action],
 *     nonce,
 *   });
 * }));
 *
 * // // or user-signed action
 * // const signatures = await Promise.all(["0x...", "0x..."].map(async (signerPrivKey) => {
 * //   return await signUserSignedAction({
 * //     wallet: privateKeyToAccount(signerPrivKey as `0x${string}`), // viem or ethers
 * //     action: {
 * //       ...action,
 * //       payloadMultiSigUser: multiSigUser,
 * //       outerSigner: wallet.address,
 * //     },
 * //     types: SomeTypes,
 * //   });
 * // }));
 *
 * // Then use signatures in the `multiSig` action
 * const data = await multiSig(
 *   { transport, wallet },
 *   {
 *     signatures,
 *     payload: {
 *       multiSigUser,
 *       outerSigner: wallet.address,
 *       action,
 *     },
 *     nonce,
 *   },
 * );
 * ```
 */
async function multiSig(config, paramsAndNonce, opts) {
    const { nonce, ...params } = paramsAndNonce;
    const action = (0, _base_js_1.parser)(exports.MultiSigRequest.entries.action)({
        type: "multiSig",
        signatureChainId: await (0, _base_js_2.getSignatureChainId)(config),
        ...params,
    });
    const vaultAddress = opts?.vaultAddress ?? config.defaultVaultAddress;
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await (0, _base_js_2.executeMultiSigAction)(config, {
        action,
        vaultAddress,
        expiresAfter,
        nonce: Number(nonce),
    }, opts?.signal);
}
//# sourceMappingURL=multiSig.js.map