"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSignClient = exports.ExchangeClient = exports.ApiRequestError = void 0;
const _minimalEIP712Signer_js_1 = require("../../utils/_minimalEIP712Signer.js");
const agentEnableDexAbstraction_js_1 = require("./agentEnableDexAbstraction.js");
const approveAgent_js_1 = require("./approveAgent.js");
const approveBuilderFee_js_1 = require("./approveBuilderFee.js");
const batchModify_js_1 = require("./batchModify.js");
const cancel_js_1 = require("./cancel.js");
const cancelByCloid_js_1 = require("./cancelByCloid.js");
const cDeposit_js_1 = require("./cDeposit.js");
const claimRewards_js_1 = require("./claimRewards.js");
const convertToMultiSigUser_js_1 = require("./convertToMultiSigUser.js");
const createSubAccount_js_1 = require("./createSubAccount.js");
const createVault_js_1 = require("./createVault.js");
const cSignerAction_js_1 = require("./cSignerAction.js");
const cValidatorAction_js_1 = require("./cValidatorAction.js");
const cWithdraw_js_1 = require("./cWithdraw.js");
const evmUserModify_js_1 = require("./evmUserModify.js");
const modify_js_1 = require("./modify.js");
const multiSig_js_1 = require("./multiSig.js");
const order_js_1 = require("./order.js");
const noop_js_1 = require("./noop.js");
const perpDeploy_js_1 = require("./perpDeploy.js");
const registerReferrer_js_1 = require("./registerReferrer.js");
const reserveRequestWeight_js_1 = require("./reserveRequestWeight.js");
const scheduleCancel_js_1 = require("./scheduleCancel.js");
const sendAsset_js_1 = require("./sendAsset.js");
const setDisplayName_js_1 = require("./setDisplayName.js");
const setReferrer_js_1 = require("./setReferrer.js");
const spotDeploy_js_1 = require("./spotDeploy.js");
const spotSend_js_1 = require("./spotSend.js");
const spotUser_js_1 = require("./spotUser.js");
const subAccountModify_js_1 = require("./subAccountModify.js");
const subAccountSpotTransfer_js_1 = require("./subAccountSpotTransfer.js");
const subAccountTransfer_js_1 = require("./subAccountTransfer.js");
const tokenDelegate_js_1 = require("./tokenDelegate.js");
const twapCancel_js_1 = require("./twapCancel.js");
const twapOrder_js_1 = require("./twapOrder.js");
const updateIsolatedMargin_js_1 = require("./updateIsolatedMargin.js");
const updateLeverage_js_1 = require("./updateLeverage.js");
const usdClassTransfer_js_1 = require("./usdClassTransfer.js");
const usdSend_js_1 = require("./usdSend.js");
const userDexAbstraction_js_1 = require("./userDexAbstraction.js");
const vaultDistribute_js_1 = require("./vaultDistribute.js");
const vaultModify_js_1 = require("./vaultModify.js");
const vaultTransfer_js_1 = require("./vaultTransfer.js");
const withdraw3_js_1 = require("./withdraw3.js");
var _base_js_1 = require("./_base.js");
Object.defineProperty(exports, "ApiRequestError", { enumerable: true, get: function () { return _base_js_1.ApiRequestError; } });
/**
 * A client for interacting with the Hyperliquid Exchange API.
 * @typeParam T The transport (extends {@linkcode IRequestTransport}) used to connect to the Hyperliquid API.
 * @typeParam W The wallet used for signing transactions.
 */
class ExchangeClient {
    transport;
    wallet;
    signatureChainId;
    nonceManager;
    defaultVaultAddress;
    defaultExpiresAfter;
    /**
     * Initialises a new instance.
     * @param args - The parameters for the client.
     *
     * @example via a private key
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const privateKey = "0x...";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     * const exchClient = new hl.ExchangeClient({ wallet: privateKey, transport });
     * ```
     *
     * @example via [viem](https://viem.sh/docs/clients/wallet#local-accounts-private-key-mnemonic-etc)
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x...";
     *
     * const transport = new hl.HttpTransport();
     * const exchClient = new hl.ExchangeClient({ wallet: pk, transport });
     * ```
     *
     * @example via [ethers.js v6](https://docs.ethers.org/v6/api/wallet/#Wallet) or [ethers.js v5](https://docs.ethers.org/v5/api/signer/#Wallet)
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     * import { ethers } from "npm:ethers";
     *
     * const wallet = new ethers.Wallet("0x...");
     *
     * const transport = new hl.HttpTransport();
     * const exchClient = new hl.ExchangeClient({ wallet, transport });
     * ```
     *
     * @example via an external wallet (e.g. MetaMask) with [viem](https://viem.sh/docs/clients/wallet)
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     * import { createWalletClient, custom } from "npm:viem";
     *
     * const ethereum = (window as any).ethereum;
     * const [account] = await ethereum.request({ method: "eth_requestAccounts" }) as `0x${string}`[];
     * const wallet = createWalletClient({ account, transport: custom(ethereum) });
     *
     * const transport = new hl.HttpTransport();
     * const exchClient = new hl.ExchangeClient({ wallet, transport });
     * ```
     */
    constructor(args) {
        this.transport = args.transport;
        this.wallet = typeof args.wallet === "string"
            // convert private key string to PrivateKeyEIP712Signer instance
            ? new _minimalEIP712Signer_js_1.PrivateKeyEIP712Signer(args.wallet)
            : args.wallet;
        this.defaultVaultAddress = args.defaultVaultAddress;
        this.defaultExpiresAfter = args.defaultExpiresAfter;
        this.signatureChainId = args.signatureChainId;
        this.nonceManager = args.nonceManager;
    }
    /**
     * Enable HIP-3 DEX abstraction.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.agentEnableDexAbstraction();
     * ```
     */
    agentEnableDexAbstraction(...args) {
        return (0, agentEnableDexAbstraction_js_1.agentEnableDexAbstraction)(this, ...args);
    }
    /**
     * Approve an agent to sign on behalf of the master account.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.approveAgent({ agentAddress: "0x...", agentName: "..." });
     * ```
     */
    approveAgent(...args) {
        return (0, approveAgent_js_1.approveAgent)(this, ...args);
    }
    /**
     * Approve a maximum fee rate for a builder.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-a-builder-fee
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.approveBuilderFee({ maxFeeRate: "0.01%", builder: "0x..." });
     * ```
     */
    approveBuilderFee(...args) {
        return (0, approveBuilderFee_js_1.approveBuilderFee)(this, ...args);
    }
    /**
     * Modify multiple orders.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful variant of {@link OrderResponse} without error statuses.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-multiple-orders
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.batchModify({
     *   modifies: [
     *     {
     *       oid: 123,
     *       order: {
     *         a: 0,
     *         b: true,
     *         p: "31000",
     *         s: "0.2",
     *         r: false,
     *         t: { limit: { tif: "Gtc" } },
     *       },
     *     },
     *   ],
     * });
     * ```
     */
    batchModify(...args) {
        return (0, batchModify_js_1.batchModify)(this, ...args);
    }
    /**
     * Cancel order(s).
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful variant of {@link CancelResponse} without error statuses.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.cancel({
     *   cancels: [
     *     { a: 0, o: 123 },
     *   ],
     * });
     * ```
     */
    cancel(...args) {
        return (0, cancel_js_1.cancel)(this, ...args);
    }
    /**
     * Cancel order(s) by cloid.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful variant of {@link CancelResponse} without error statuses.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.cancelByCloid({
     *   cancels: [
     *     { asset: 0, cloid: "0x..." },
     *   ],
     * });
     * ```
     */
    cancelByCloid(...args) {
        return (0, cancelByCloid_js_1.cancelByCloid)(this, ...args);
    }
    /**
     * Transfer native token from the user spot account into staking for delegating to validators.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-into-staking
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.cDeposit({ wei: 1 * 1e8 });
     * ```
     */
    cDeposit(...args) {
        return (0, cDeposit_js_1.cDeposit)(this, ...args);
    }
    /**
     * Claim rewards from referral program.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.claimRewards();
     * ```
     */
    claimRewards(...args) {
        return (0, claimRewards_js_1.claimRewards)(this, ...args);
    }
    /**
     * Convert a single-signature account to a multi-signature account or vice versa.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     *
     * // Convert to multi-sig user
     * await client.convertToMultiSigUser({
     *   signers: {
     *     authorizedUsers: ["0x...", "0x...", "0x..."],
     *     threshold: 2,
     *   },
     * });
     *
     * // Convert to single-sig user
     * await client.convertToMultiSigUser({ signers: null });
     * ```
     */
    convertToMultiSigUser(...args) {
        return (0, convertToMultiSigUser_js_1.convertToMultiSigUser)(this, ...args);
    }
    /**
     * Create a sub-account.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Response for creating a sub-account.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.createSubAccount({ name: "..." });
     * ```
     */
    createSubAccount(...args) {
        return (0, createSubAccount_js_1.createSubAccount)(this, ...args);
    }
    /**
     * Create a vault.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Response for creating a vault.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.createVault({
     *   name: "...",
     *   description: "...",
     *   initialUsd: 100 * 1e6,
     * });
     * ```
     */
    createVault(...args) {
        return (0, createVault_js_1.createVault)(this, ...args);
    }
    /**
     * Jail or unjail self as a validator signer.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     *
     * // Jail self
     * await client.cSignerAction({ jailSelf: null });
     *
     * // Unjail self
     * await client.cSignerAction({ unjailSelf: null });
     * ```
     */
    cSignerAction(...args) {
        return (0, cSignerAction_js_1.cSignerAction)(this, ...args);
    }
    /**
     * Action related to validator management.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     *
     * // Change validator profile
     * await client.cValidatorAction({
     *   changeProfile: {
     *     node_ip: { Ip: "1.2.3.4" },
     *     name: "...",
     *     description: "...",
     *     unjailed: true,
     *     disable_delegations: false,
     *     commission_bps: null,
     *     signer: null,
     *   },
     * });
     *
     * // Register a new validator
     * await client.cValidatorAction({
     *   register: {
     *     profile: {
     *       node_ip: { Ip: "1.2.3.4" },
     *       name: "...",
     *       description: "...",
     *       delegations_disabled: true,
     *       commission_bps: 1,
     *       signer: "0x...",
     *     },
     *     unjailed: false,
     *     initial_wei: 1,
     *   },
     * });
     *
     * // Unregister a validator
     * await client.cValidatorAction({ unregister: null });
     * ```
     */
    cValidatorAction(...args) {
        return (0, cValidatorAction_js_1.cValidatorAction)(this, ...args);
    }
    /**
     * Transfer native token from staking into the user's spot account.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#withdraw-from-staking
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.cWithdraw({ wei: 1 * 1e8 });
     * ```
     */
    cWithdraw(...args) {
        return (0, cWithdraw_js_1.cWithdraw)(this, ...args);
    }
    /**
     * Configure block type for EVM transactions.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Response for creating a sub-account.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.evmUserModify({ usingBigBlocks: true });
     * ```
     */
    evmUserModify(...args) {
        return (0, evmUserModify_js_1.evmUserModify)(this, ...args);
    }
    /**
     * Modify an order.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.modify({
     *   oid: 123,
     *   order: {
     *     a: 0,
     *     b: true,
     *     p: "31000",
     *     s: "0.2",
     *     r: false,
     *     t: { limit: { tif: "Gtc" } },
     *     c: "0x...",
     *   },
     * });
     * ```
     */
    modify(...args) {
        return (0, modify_js_1.modify)(this, ...args);
    }
    /**
     * A multi-signature request.
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
     * import * as hl from "@nktkas/hyperliquid";
     * import { signL1Action } from "@nktkas/hyperliquid/signing";
     * import { parser, ScheduleCancelRequest } from "@nktkas/hyperliquid/api/exchange";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem, ethers or private key
     * const multiSigUser = "0x...";
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet });
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
     * const data = await client.multiSig({
     *   signatures,
     *   payload: {
     *     multiSigUser,
     *     outerSigner: wallet.address,
     *     action,
     *   },
     *   nonce,
     * });
     * ```
     */
    multiSig(...args) {
        return (0, multiSig_js_1.multiSig)(this, ...args);
    }
    /**
     * Place an order(s).
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful variant of {@link OrderResponse} without error statuses.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.order({
     *   orders: [
     *     {
     *       a: 0,
     *       b: true,
     *       p: "30000",
     *       s: "0.1",
     *       r: false,
     *       t: { limit: { tif: "Gtc" } },
     *       c: "0x...",
     *     },
     *   ],
     *   grouping: "na",
     * });
     * ```
     */
    order(...args) {
        return (0, order_js_1.order)(this, ...args);
    }
    /**
     * This action does not do anything (no operation), but causes the nonce to be marked as used.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#invalidate-pending-nonce-noop
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.noop();
     * ```
     */
    noop(...args) {
        return (0, noop_js_1.noop)(this, ...args);
    }
    /**
     * Deploying HIP-3 assets.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-3-assets
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.perpDeploy({
     *   registerAsset: {
     *     maxGas: 1000000,
     *     assetRequest: {
     *       coin: "USDC",
     *       szDecimals: 8,
     *       oraclePx: "1",
     *       marginTableId: 1,
     *       onlyIsolated: false,
     *     },
     *     dex: "test",
     *     schema: null,
     *   },
     * });
     * ```
     */
    perpDeploy(...args) {
        return (0, perpDeploy_js_1.perpDeploy)(this, ...args);
    }
    /**
     * Create a referral code.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.registerReferrer({ code: "..." });
     * ```
     */
    registerReferrer(...args) {
        return (0, registerReferrer_js_1.registerReferrer)(this, ...args);
    }
    /**
     * Reserve additional rate-limited actions for a fee.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#reserve-additional-actions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.reserveRequestWeight({ weight: 10 });
     * ```
     */
    reserveRequestWeight(...args) {
        return (0, reserveRequestWeight_js_1.reserveRequestWeight)(this, ...args);
    }
    /**
     * Schedule a cancel-all operation at a future time.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.scheduleCancel({ time: Date.now() + 10_000 });
     * ```
     */
    scheduleCancel(...args) {
        return (0, scheduleCancel_js_1.scheduleCancel)(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
    /**
     * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset-testnet-only
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.sendAsset({
     *   destination: "0x0000000000000000000000000000000000000001",
     *   sourceDex: "",
     *   destinationDex: "test",
     *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
     *   amount: "1",
     * });
     * ```
     */
    sendAsset(...args) {
        return (0, sendAsset_js_1.sendAsset)(this, ...args);
    }
    /**
     * Set the display name in the leaderboard.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.setDisplayName({ displayName: "..." });
     * ```
     */
    setDisplayName(...args) {
        return (0, setDisplayName_js_1.setDisplayName)(this, ...args);
    }
    /**
     * Set a referral code.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.setReferrer({ code: "..." });
     * ```
     */
    setReferrer(...args) {
        return (0, setReferrer_js_1.setReferrer)(this, ...args);
    }
    /**
     * Deploying HIP-1 and HIP-2 assets.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.spotDeploy({
     *   registerToken2: {
     *     spec: {
     *       name: "USDC",
     *       szDecimals: 8,
     *       weiDecimals: 8,
     *     },
     *     maxGas: 1000000,
     *     fullName: "USD Coin",
     *   },
     * });
     * ```
     */
    spotDeploy(...args) {
        return (0, spotDeploy_js_1.spotDeploy)(this, ...args);
    }
    /**
     * Send spot assets to another address.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-spot-transfer
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.spotSend({
     *   destination: "0x...",
     *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
     *   amount: "1",
     * });
     * ```
     */
    spotSend(...args) {
        return (0, spotSend_js_1.spotSend)(this, ...args);
    }
    /**
     * Opt Out of Spot Dusting.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.spotUser({ toggleSpotDusting: { optOut: false } });
     * ```
     */
    spotUser(...args) {
        return (0, spotUser_js_1.spotUser)(this, ...args);
    }
    /**
     * Modify a sub-account's.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.subAccountModify({ subAccountUser: "0x...", name: "..." });
     * ```
     */
    subAccountModify(...args) {
        return (0, subAccountModify_js_1.subAccountModify)(this, ...args);
    }
    /**
     * Transfer between sub-accounts (spot).
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.subAccountSpotTransfer({
     *   subAccountUser: "0x...",
     *   isDeposit: true,
     *   token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
     *   amount: "1",
     * });
     * ```
     */
    subAccountSpotTransfer(...args) {
        return (0, subAccountSpotTransfer_js_1.subAccountSpotTransfer)(this, ...args);
    }
    /**
     * Transfer between sub-accounts (perpetual).
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.subAccountTransfer({ subAccountUser: "0x...", isDeposit: true, usd: 1 * 1e6 });
     * ```
     */
    subAccountTransfer(...args) {
        return (0, subAccountTransfer_js_1.subAccountTransfer)(this, ...args);
    }
    /**
     * Delegate or undelegate native tokens to or from a validator.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#delegate-or-undelegate-stake-from-validator
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.tokenDelegate({ validator: "0x...", isUndelegate: true, wei: 1 * 1e8 });
     * ```
     */
    tokenDelegate(...args) {
        return (0, tokenDelegate_js_1.tokenDelegate)(this, ...args);
    }
    /**
     * Cancel a TWAP order.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful variant of {@link TwapCancelResponse} without error status.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-a-twap-order
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.twapCancel({ a: 0, t: 1 });
     * ```
     */
    twapCancel(...args) {
        return (0, twapCancel_js_1.twapCancel)(this, ...args);
    }
    /**
     * Place a TWAP order.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful variant of {@link TwapOrderResponse} without error status.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * const data = await client.twapOrder({
     *   twap: {
     *     a: 0,
     *     b: true,
     *     s: "1",
     *     r: false,
     *     m: 10,
     *     t: true,
     *   },
     * });
     * ```
     */
    twapOrder(...args) {
        return (0, twapOrder_js_1.twapOrder)(this, ...args);
    }
    /**
     * Add or remove margin from isolated position.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.updateIsolatedMargin({ asset: 0, isBuy: true, ntli: 1 * 1e6 });
     * ```
     */
    updateIsolatedMargin(...args) {
        return (0, updateIsolatedMargin_js_1.updateIsolatedMargin)(this, ...args);
    }
    /**
     * Update cross or isolated leverage on a coin.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-leverage
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.updateLeverage({ asset: 0, isCross: true, leverage: 5 });
     * ```
     */
    updateLeverage(...args) {
        return (0, updateLeverage_js_1.updateLeverage)(this, ...args);
    }
    /**
     * Transfer funds between Spot account and Perp account.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#transfer-from-spot-account-to-perp-account-and-vice-versa
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.usdClassTransfer({ amount: "1", toPerp: true });
     * ```
     */
    usdClassTransfer(...args) {
        return (0, usdClassTransfer_js_1.usdClassTransfer)(this, ...args);
    }
    /**
     * Send usd to another address.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.usdSend({ destination: "0x...", amount: "1" });
     * ```
     */
    usdSend(...args) {
        return (0, usdSend_js_1.usdSend)(this, ...args);
    }
    /**
     * Enable/disable HIP-3 DEX abstraction.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.userDexAbstraction({ user: "0x...", enabled: true });
     * ```
     */
    userDexAbstraction(...args) {
        return (0, userDexAbstraction_js_1.userDexAbstraction)(this, ...args);
    }
    /**
     * Distribute funds from a vault between followers.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.vaultDistribute({ vaultAddress: "0x...", usd: 10 * 1e6 });
     * ```
     */
    vaultDistribute(...args) {
        return (0, vaultDistribute_js_1.vaultDistribute)(this, ...args);
    }
    /**
     * Modify a vault's configuration.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.vaultModify({
     *   vaultAddress: "0x...",
     *   allowDeposits: true,
     *   alwaysCloseOnWithdraw: false,
     * });
     * ```
     */
    vaultModify(...args) {
        return (0, vaultModify_js_1.vaultModify)(this, ...args);
    }
    /**
     * Deposit or withdraw from a vault.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.vaultTransfer({ vaultAddress: "0x...", isDeposit: true, usd: 10 * 1e6 });
     * ```
     */
    vaultTransfer(...args) {
        return (0, vaultTransfer_js_1.vaultTransfer)(this, ...args);
    }
    /**
     * Initiate a withdrawal request.
     * @param params - Parameters specific to the API request.
     * @param opts - Request execution options.
     * @returns Successful response without specific data.
     *
     * @throws {ApiRequestError} When the API returns an unsuccessful response.
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#initiate-a-withdrawal-request
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const pk = "0x..."; // viem, ethers or private key
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet: pk });
     * await client.withdraw3({ destination: "0x...", amount: "1" });
     * ```
     */
    withdraw3(...args) {
        return (0, withdraw3_js_1.withdraw3)(this, ...args);
    }
}
exports.ExchangeClient = ExchangeClient;
/**
 * A client for interacting with the Hyperliquid Exchange API using multi-signature wallet.
 * Extends the {@link ExchangeClient} to support multi-signature operations.
 * @typeParam T The transport (extends {@linkcode IRequestTransport}) used to connect to the Hyperliquid API.
 * @typeParam S Array of wallets where the first wallet is the leader.
 */
class MultiSignClient extends ExchangeClient {
    multiSigUser;
    signers;
    /**
     * Initialises a new multi-signature client instance.
     * @param args - The parameters for the multi-signature client.
     *
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const multiSigUser = "0x...";
     * const signers = [
     *   "0x...", // viem, ethers or private key
     *   // ... (more signers if needed)
     * ] as const;
     *
     * const transport = new hl.HttpTransport();
     * const multiSignClient = new hl.MultiSignClient({ transport, multiSigUser, signers });
     * ```
     */
    constructor(args) {
        // Convert string private keys to PrivateKeyEIP712Signer instances
        const processedSigners = args.signers
            .map((signer) => typeof signer === "string" ? new _minimalEIP712Signer_js_1.PrivateKeyEIP712Signer(signer) : signer);
        super({ ...args, wallet: processedSigners[0] });
        this.multiSigUser = args.multiSigUser;
        this.signers = processedSigners;
        Object.defineProperty(this, "wallet", {
            get() {
                return this.signers[0];
            },
            set(value) {
                this.signers[0] = value;
            },
            enumerable: true,
            configurable: true,
        });
    }
}
exports.MultiSignClient = MultiSignClient;
//# sourceMappingURL=~client.js.map