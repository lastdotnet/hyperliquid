import { Address, type DeepImmutable, Hex, parser, UnsignedInteger } from "../_base.js";
import {
  type ExchangeRequestConfig,
  executeMultiSigAction,
  type ExtractRequestAction,
  type ExtractRequestOptions,
  getSignatureChainId,
  Signature,
} from "./_base.js";
import * as v from "valibot";

import { ApproveAgentRequest } from "./approveAgent.js";
import { ApproveBuilderFeeRequest } from "./approveBuilderFee.js";
import { BatchModifyRequest } from "./batchModify.js";
import { CancelRequest, CancelSuccessResponse } from "./cancel.js";
import { CancelByCloidRequest } from "./cancelByCloid.js";
import { ClaimRewardsRequest } from "./claimRewards.js";
import { CDepositRequest } from "./cDeposit.js";
import { ConvertToMultiSigUserRequest } from "./convertToMultiSigUser.js";
import { CreateSubAccountRequest, CreateSubAccountResponse } from "./createSubAccount.js";
import { CreateVaultRequest, CreateVaultResponse } from "./createVault.js";
import { CSignerActionRequest } from "./cSignerAction.js";
import { CValidatorActionRequest } from "./cValidatorAction.js";
import { CWithdrawRequest } from "./cWithdraw.js";
import { EvmUserModifyRequest } from "./evmUserModify.js";
import { ModifyRequest } from "./modify.js";
import { NoopRequest } from "./noop.js";
import { OrderRequest, OrderSuccessResponse } from "./order.js";
import { RegisterReferrerRequest } from "./registerReferrer.js";
import { ReserveRequestWeightRequest } from "./reserveRequestWeight.js";
import { ScheduleCancelRequest } from "./scheduleCancel.js";
import { SetDisplayNameRequest } from "./setDisplayName.js";
import { SetReferrerRequest } from "./setReferrer.js";
import { SpotDeployRequest } from "./spotDeploy.js";
import { SubAccountModifyRequest } from "./subAccountModify.js";
import { TokenDelegateRequest } from "./tokenDelegate.js";
import { TwapOrderRequest, TwapOrderSuccessResponse } from "./twapOrder.js";
import { UsdClassTransferRequest } from "./usdClassTransfer.js";
import { VaultDistributeRequest } from "./vaultDistribute.js";
import { Withdraw3Request } from "./withdraw3.js";
import { PerpDeployRequest } from "./perpDeploy.js";
import { SendAssetRequest } from "./sendAsset.js";
import { SpotSendRequest } from "./spotSend.js";
import { SpotUserRequest } from "./spotUser.js";
import { SubAccountSpotTransferRequest } from "./subAccountSpotTransfer.js";
import { SubAccountTransferRequest } from "./subAccountTransfer.js";
import { TwapCancelRequest, TwapCancelSuccessResponse } from "./twapCancel.js";
import { UpdateIsolatedMarginRequest } from "./updateIsolatedMargin.js";
import { UpdateLeverageRequest } from "./updateLeverage.js";
import { UsdSendRequest } from "./usdSend.js";
import { VaultModifyRequest } from "./vaultModify.js";
import { VaultTransferRequest } from "./vaultTransfer.js";

// -------------------- Schemas --------------------

/**
 * A multi-signature request.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export const MultiSigRequest = /* @__PURE__ */ (() => {
  return v.pipe(
    v.object({
      /** Action to perform. */
      action: v.pipe(
        v.object({
          /** Type of action. */
          type: v.pipe(
            v.literal("multiSig"),
            v.description("Type of action."),
          ),
          /** Chain ID used for signing. */
          signatureChainId: v.pipe(
            Hex,
            v.description("Chain ID used for signing."),
          ),
          /** List of signatures from authorized signers. */
          signatures: v.pipe(
            v.array(Signature),
            v.description("List of signatures from authorized signers."),
          ),
          /** Multi-signature payload information. */
          payload: v.pipe(
            v.object({
              /** Address of the multi-signature user account. */
              multiSigUser: v.pipe(
                Address,
                v.description("Address of the multi-signature user account."),
              ),
              /** Address of the authorized user initiating the request (any authorized user). */
              outerSigner: v.pipe(
                Address,
                v.description(
                  "Address of the authorized user initiating the request (any authorized user).",
                ),
              ),
              /** The underlying action to be executed through multi-sig. */
              action: v.pipe(
                v.variant("type", [
                  ApproveAgentRequest.entries.action,
                  ApproveBuilderFeeRequest.entries.action,
                  BatchModifyRequest.entries.action,
                  CancelRequest.entries.action,
                  CancelByCloidRequest.entries.action,
                  CDepositRequest.entries.action,
                  ClaimRewardsRequest.entries.action,
                  ConvertToMultiSigUserRequest.entries.action,
                  CreateSubAccountRequest.entries.action,
                  CreateVaultRequest.entries.action,
                  CSignerActionRequest.entries.action,
                  CValidatorActionRequest.entries.action,
                  CWithdrawRequest.entries.action,
                  EvmUserModifyRequest.entries.action,
                  ModifyRequest.entries.action,
                  NoopRequest.entries.action,
                  OrderRequest.entries.action,
                  PerpDeployRequest.entries.action,
                  RegisterReferrerRequest.entries.action,
                  ReserveRequestWeightRequest.entries.action,
                  ScheduleCancelRequest.entries.action,
                  SendAssetRequest.entries.action,
                  SetDisplayNameRequest.entries.action,
                  SetReferrerRequest.entries.action,
                  SpotDeployRequest.entries.action,
                  SpotSendRequest.entries.action,
                  SpotUserRequest.entries.action,
                  SubAccountModifyRequest.entries.action,
                  SubAccountSpotTransferRequest.entries.action,
                  SubAccountTransferRequest.entries.action,
                  TokenDelegateRequest.entries.action,
                  TwapCancelRequest.entries.action,
                  TwapOrderRequest.entries.action,
                  UpdateIsolatedMarginRequest.entries.action,
                  UpdateLeverageRequest.entries.action,
                  UsdClassTransferRequest.entries.action,
                  UsdSendRequest.entries.action,
                  VaultDistributeRequest.entries.action,
                  VaultModifyRequest.entries.action,
                  VaultTransferRequest.entries.action,
                  Withdraw3Request.entries.action,
                ]),
                v.description("The underlying action to be executed through multi-sig."),
              ),
            }),
            v.description("Multi-signature payload information."),
          ),
        }),
        v.description("Action to perform."),
      ),
      /** Unique request identifier (current timestamp in ms). */
      nonce: v.pipe(
        UnsignedInteger,
        v.description("Unique request identifier (current timestamp in ms)."),
      ),
      /** Cryptographic signature. */
      signature: v.pipe(
        Signature,
        v.description("Cryptographic signature."),
      ),
      /** Vault address (for vault trading). */
      vaultAddress: v.pipe(
        v.optional(Address),
        v.description("Vault address (for vault trading)."),
      ),
      /** Expiration time of the action. */
      expiresAfter: v.pipe(
        v.optional(UnsignedInteger),
        v.description("Expiration time of the action."),
      ),
    }),
    v.description("A multi-signature request."),
  );
})();
export type MultiSigRequest = v.InferOutput<typeof MultiSigRequest>;

import { SuccessResponse } from "./_base.js";
export {
  CancelSuccessResponse,
  CreateSubAccountResponse,
  CreateVaultResponse,
  OrderSuccessResponse,
  SuccessResponse,
  TwapCancelSuccessResponse,
  TwapOrderSuccessResponse,
};

// -------------------- Function --------------------

/** Action parameters for the {@linkcode multiSig} function. */
export type MultiSigParameters =
  & ExtractRequestAction<v.InferInput<typeof MultiSigRequest>>
  & Pick<v.InferInput<typeof MultiSigRequest>, "nonce">;
/** Request options for the {@linkcode multiSig} function. */
export type MultiSigOptions = ExtractRequestOptions<v.InferInput<typeof MultiSigRequest>>;

/** EIP-712 types for the {@linkcode multiSig} function. */
export const MultiSigTypes = {
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
export async function multiSig<
  T extends
    | SuccessResponse
    | CancelSuccessResponse
    | CreateSubAccountResponse
    | CreateVaultResponse
    | OrderSuccessResponse
    | TwapOrderSuccessResponse
    | TwapCancelSuccessResponse,
>(
  config: ExchangeRequestConfig,
  paramsAndNonce: DeepImmutable<MultiSigParameters>,
  opts?: MultiSigOptions,
): Promise<T> {
  const { nonce, ...params } = paramsAndNonce;

  const action = parser(MultiSigRequest.entries.action)({
    type: "multiSig",
    signatureChainId: await getSignatureChainId(config),
    ...params,
  });
  const vaultAddress = opts?.vaultAddress ?? config.defaultVaultAddress;
  const expiresAfter = typeof config.defaultExpiresAfter === "number"
    ? config.defaultExpiresAfter
    : await config.defaultExpiresAfter?.();
  return await executeMultiSigAction(
    config,
    {
      action,
      vaultAddress,
      expiresAfter,
      nonce: Number(nonce),
    },
    opts?.signal,
  );
}
