"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoClient = void 0;
const activeAssetData_js_1 = require("./activeAssetData.js");
const alignedQuoteTokenInfo_js_1 = require("./alignedQuoteTokenInfo.js");
const allMids_js_1 = require("./allMids.js");
const blockDetails_js_1 = require("./blockDetails.js");
const candleSnapshot_js_1 = require("./candleSnapshot.js");
const clearinghouseState_js_1 = require("./clearinghouseState.js");
const delegations_js_1 = require("./delegations.js");
const delegatorHistory_js_1 = require("./delegatorHistory.js");
const delegatorRewards_js_1 = require("./delegatorRewards.js");
const delegatorSummary_js_1 = require("./delegatorSummary.js");
const exchangeStatus_js_1 = require("./exchangeStatus.js");
const extraAgents_js_1 = require("./extraAgents.js");
const frontendOpenOrders_js_1 = require("./frontendOpenOrders.js");
const fundingHistory_js_1 = require("./fundingHistory.js");
const gossipRootIps_js_1 = require("./gossipRootIps.js");
const historicalOrders_js_1 = require("./historicalOrders.js");
const isVip_js_1 = require("./isVip.js");
const l2Book_js_1 = require("./l2Book.js");
const leadingVaults_js_1 = require("./leadingVaults.js");
const legalCheck_js_1 = require("./legalCheck.js");
const liquidatable_js_1 = require("./liquidatable.js");
const marginTable_js_1 = require("./marginTable.js");
const maxBuilderFee_js_1 = require("./maxBuilderFee.js");
const maxMarketOrderNtls_js_1 = require("./maxMarketOrderNtls.js");
const meta_js_1 = require("./meta.js");
const metaAndAssetCtxs_js_1 = require("./metaAndAssetCtxs.js");
const openOrders_js_1 = require("./openOrders.js");
const orderStatus_js_1 = require("./orderStatus.js");
const perpDeployAuctionStatus_js_1 = require("./perpDeployAuctionStatus.js");
const perpDexLimits_js_1 = require("./perpDexLimits.js");
const perpDexs_js_1 = require("./perpDexs.js");
const perpsAtOpenInterestCap_js_1 = require("./perpsAtOpenInterestCap.js");
const portfolio_js_1 = require("./portfolio.js");
const predictedFundings_js_1 = require("./predictedFundings.js");
const preTransferCheck_js_1 = require("./preTransferCheck.js");
const recentTrades_js_1 = require("./recentTrades.js");
const referral_js_1 = require("./referral.js");
const spotClearinghouseState_js_1 = require("./spotClearinghouseState.js");
const spotDeployState_js_1 = require("./spotDeployState.js");
const spotMeta_js_1 = require("./spotMeta.js");
const spotMetaAndAssetCtxs_js_1 = require("./spotMetaAndAssetCtxs.js");
const spotPairDeployAuctionStatus_js_1 = require("./spotPairDeployAuctionStatus.js");
const subAccounts_js_1 = require("./subAccounts.js");
const tokenDetails_js_1 = require("./tokenDetails.js");
const twapHistory_js_1 = require("./twapHistory.js");
const txDetails_js_1 = require("./txDetails.js");
const userDetails_js_1 = require("./userDetails.js");
const userDexAbstraction_js_1 = require("./userDexAbstraction.js");
const userFees_js_1 = require("./userFees.js");
const userFills_js_1 = require("./userFills.js");
const userFillsByTime_js_1 = require("./userFillsByTime.js");
const userFunding_js_1 = require("./userFunding.js");
const userNonFundingLedgerUpdates_js_1 = require("./userNonFundingLedgerUpdates.js");
const userRateLimit_js_1 = require("./userRateLimit.js");
const userRole_js_1 = require("./userRole.js");
const userToMultiSigSigners_js_1 = require("./userToMultiSigSigners.js");
const userTwapSliceFills_js_1 = require("./userTwapSliceFills.js");
const userTwapSliceFillsByTime_js_1 = require("./userTwapSliceFillsByTime.js");
const userVaultEquities_js_1 = require("./userVaultEquities.js");
const validatorL1Votes_js_1 = require("./validatorL1Votes.js");
const validatorSummaries_js_1 = require("./validatorSummaries.js");
const vaultDetails_js_1 = require("./vaultDetails.js");
const vaultSummaries_js_1 = require("./vaultSummaries.js");
const webData2_js_1 = require("./webData2.js");
/**
 * A client for interacting with the Hyperliquid Info API.
 * @typeParam T - The transport (extends {@linkcode IRequestTransport}) used to connect to the Hyperliquid API.
 */
class InfoClient {
    transport;
    /**
     * Initialises a new instance.
     * @param args - The arguments for initialisation.
     *
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport();
     * const infoClient = new hl.InfoClient({ transport });
     * ```
     */
    constructor(args) {
        this.transport = args.transport;
    }
    /**
     * Request user active asset data.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns User active asset data.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.activeAssetData({ user: "0x...", coin: "ETH" });
     * ```
     */
    activeAssetData(...args) {
        return (0, activeAssetData_js_1.activeAssetData)(this, ...args);
    }
    /**
     * Request supply, rate, and pending payment information for an aligned quote token.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Supply, rate, and pending payment information for an aligned quote token.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.alignedQuoteTokenInfo({ token: 1328 });
     * ```
     */
    alignedQuoteTokenInfo(...args) {
        return (0, alignedQuoteTokenInfo_js_1.alignedQuoteTokenInfo)(this, ...args);
    }
    /**
     * Request mid coin prices.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Mapping of coin symbols to mid prices.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.allMids();
     * ```
     */
    allMids(...args) {
        return (0, allMids_js_1.allMids)(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
    /**
     * Request block details by block height.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Response containing block information.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // only `HttpTransport` supports this API
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.blockDetails({ height: 123 });
     * ```
     */
    blockDetails(...args) {
        return (0, blockDetails_js_1.blockDetails)(this, ...args);
    }
    /**
     * Request candlestick snapshots.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of candlestick data points.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#candle-snapshot
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.candleSnapshot({
     *   coin: "ETH",
     *   interval: "1h",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     */
    candleSnapshot(...args) {
        return (0, candleSnapshot_js_1.candleSnapshot)(this, ...args);
    }
    /**
     * Request clearinghouse state.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Account summary for perpetual trading.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.clearinghouseState({ user: "0x..." });
     * ```
     */
    clearinghouseState(...args) {
        return (0, clearinghouseState_js_1.clearinghouseState)(this, ...args);
    }
    /**
     * Request user staking delegations.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user's delegations to validators.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.delegations({ user: "0x..." });
     * ```
     */
    delegations(...args) {
        return (0, delegations_js_1.delegations)(this, ...args);
    }
    /**
     * Request user staking history.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of records of staking events by a delegator.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.delegatorHistory({ user: "0x..." });
     * ```
     */
    delegatorHistory(...args) {
        return (0, delegatorHistory_js_1.delegatorHistory)(this, ...args);
    }
    /**
     * Request user staking rewards.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of rewards received from staking activities.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.delegatorRewards({ user: "0x..." });
     * ```
     */
    delegatorRewards(...args) {
        return (0, delegatorRewards_js_1.delegatorRewards)(this, ...args);
    }
    /**
     * Request user's staking summary.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns User's staking summary.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-summary
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.delegatorSummary({ user: "0x..." });
     * ```
     */
    delegatorSummary(...args) {
        return (0, delegatorSummary_js_1.delegatorSummary)(this, ...args);
    }
    /**
     * Request exchange system status information.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Exchange system status information.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.exchangeStatus();
     * ```
     */
    exchangeStatus(...args) {
        return (0, exchangeStatus_js_1.exchangeStatus)(this, ...args);
    }
    /**
     * Request user extra agents.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of extra agent details for a user.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.extraAgents({ user: "0x..." });
     * ```
     */
    extraAgents(...args) {
        return (0, extraAgents_js_1.extraAgents)(this, ...args);
    }
    /**
     * Request frontend open orders.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of open orders with additional display information.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders-with-additional-frontend-info
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.frontendOpenOrders({ user: "0x..." });
     * ```
     */
    frontendOpenOrders(...args) {
        return (0, frontendOpenOrders_js_1.frontendOpenOrders)(this, ...args);
    }
    /**
     * Request funding history.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of historical funding rate records for an asset.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.fundingHistory({
     *   coin: "ETH",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     */
    fundingHistory(...args) {
        return (0, fundingHistory_js_1.fundingHistory)(this, ...args);
    }
    /**
     * Request gossip root IPs.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of gossip root IPs.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.gossipRootIps();
     * ```
     */
    gossipRootIps(...args) {
        return (0, gossipRootIps_js_1.gossipRootIps)(this, ...args);
    }
    /**
     * Request user historical orders.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of frontend orders with current processing status.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-historical-orders
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.historicalOrders({ user: "0x..." });
     * ```
     */
    historicalOrders(...args) {
        return (0, historicalOrders_js_1.historicalOrders)(this, ...args);
    }
    /**
     * Request to check if a user is a VIP.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Boolean indicating user's VIP status.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.isVip({ user: "0x..." });
     * ```
     */
    isVip(...args) {
        return (0, isVip_js_1.isVip)(this, ...args);
    }
    /**
     * Request L2 order book.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns L2 order book snapshot.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.l2Book({ coin: "ETH", nSigFigs: 2 });
     * ```
     */
    l2Book(...args) {
        return (0, l2Book_js_1.l2Book)(this, ...args);
    }
    /**
     * Request leading vaults for a user.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of leading vaults for a user.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.leadingVaults({ user: "0x..." });
     * ```
     */
    leadingVaults(...args) {
        return (0, leadingVaults_js_1.leadingVaults)(this, ...args);
    }
    /**
     * Request legal verification status of a user.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Legal verification status for a user.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.legalCheck({ user: "0x..." });
     * ```
     */
    legalCheck(...args) {
        return (0, legalCheck_js_1.legalCheck)(this, ...args);
    }
    /**
     * Request liquidatable.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.liquidatable();
     * ```
     */
    liquidatable(...args) {
        return (0, liquidatable_js_1.liquidatable)(this, ...args);
    }
    /**
     * Request margin table data.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Margin requirements table with multiple tiers.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.marginTable({ id: 1 });
     * ```
     */
    marginTable(...args) {
        return (0, marginTable_js_1.marginTable)(this, ...args);
    }
    /**
     * Request builder fee approval.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Maximum builder fee approval.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.maxBuilderFee({ user: "0x...", builder: "0x..." });
     * ```
     */
    maxBuilderFee(...args) {
        return (0, maxBuilderFee_js_1.maxBuilderFee)(this, ...args);
    }
    /**
     * Request maximum market order notionals.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Maximum market order notionals.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.maxMarketOrderNtls();
     * ```
     */
    maxMarketOrderNtls(...args) {
        return (0, maxMarketOrderNtls_js_1.maxMarketOrderNtls)(this, ...args);
    }
    /**
     * Request trading metadata.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Metadata for perpetual assets.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.meta();
     * ```
     */
    meta(...args) {
        return (0, meta_js_1.meta)(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
    /**
     * Request metadata and asset contexts.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Metadata and context for perpetual assets.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.metaAndAssetCtxs();
     * ```
     */
    metaAndAssetCtxs(...args) {
        return (0, metaAndAssetCtxs_js_1.metaAndAssetCtxs)(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
    /**
     * Request open orders.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of open orders.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.openOrders({ user: "0x..." });
     * ```
     */
    openOrders(...args) {
        return (0, openOrders_js_1.openOrders)(this, ...args);
    }
    /**
     * Request order status.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Order status response.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.orderStatus({ user: "0x...", oid: 12345 });
     * ```
     */
    orderStatus(...args) {
        return (0, orderStatus_js_1.orderStatus)(this, ...args);
    }
    /**
     * Request for the status of the perpetual deploy auction.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Status of the perpetual deploy auction.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.perpDeployAuctionStatus();
     * ```
     */
    perpDeployAuctionStatus(...args) {
        return (0, perpDeployAuctionStatus_js_1.perpDeployAuctionStatus)(this, ...args);
    }
    /**
     * Request builder deployed perpetual market limits.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Builder deployed perpetual market limits.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.perpDexLimits({ dex: "test" });
     * ```
     */
    perpDexLimits(...args) {
        return (0, perpDexLimits_js_1.perpDexLimits)(this, ...args);
    }
    /**
     * Request all perpetual dexs.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of perpetual dexes (null is main dex).
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.perpDexs();
     * ```
     */
    perpDexs(...args) {
        return (0, perpDexs_js_1.perpDexs)(this, ...args);
    }
    /**
     * Request perpetuals at open interest cap.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of perpetuals at open interest caps.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#query-perps-at-open-interest-caps
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.perpsAtOpenInterestCap();
     * ```
     */
    perpsAtOpenInterestCap(...args) {
        return (0, perpsAtOpenInterestCap_js_1.perpsAtOpenInterestCap)(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
    /**
     * Request user portfolio.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Portfolio metrics grouped by time periods.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.portfolio({ user: "0x..." });
     * ```
     */
    portfolio(...args) {
        return (0, portfolio_js_1.portfolio)(this, ...args);
    }
    /**
     * Request predicted funding rates.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of predicted funding rates.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-predicted-funding-rates-for-different-venues
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.predictedFundings();
     * ```
     */
    predictedFundings(...args) {
        return (0, predictedFundings_js_1.predictedFundings)(this, ...args);
    }
    /**
     * Request user existence check before transfer.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Pre-transfer user existence check result.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.preTransferCheck({ user: "0x...", source: "0x..." });
     * ```
     */
    preTransferCheck(...args) {
        return (0, preTransferCheck_js_1.preTransferCheck)(this, ...args);
    }
    /**
     * Request recent trades.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of recent trades.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.recentTrades({ coin: "ETH" });
     * ```
     */
    recentTrades(...args) {
        return (0, recentTrades_js_1.recentTrades)(this, ...args);
    }
    /**
     * Request user referral.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Referral details for a user.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-referral-information
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.referral({ user: "0x..." });
     * ```
     */
    referral(...args) {
        return (0, referral_js_1.referral)(this, ...args);
    }
    /**
     * Request spot clearinghouse state.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Account summary for spot trading.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.spotClearinghouseState({ user: "0x..." });
     * ```
     */
    spotClearinghouseState(...args) {
        return (0, spotClearinghouseState_js_1.spotClearinghouseState)(this, ...args);
    }
    /**
     * Request spot deploy state.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Deploy state for spot tokens.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.spotDeployState({ user: "0x..." });
     * ```
     */
    spotDeployState(...args) {
        return (0, spotDeployState_js_1.spotDeployState)(this, ...args);
    }
    /**
     * Request spot trading metadata.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Metadata for spot assets.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.spotMeta();
     * ```
     */
    spotMeta(...args) {
        return (0, spotMeta_js_1.spotMeta)(this, ...args);
    }
    /**
     * Request spot metadata and asset contexts.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Metadata and context for spot assets.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.spotMetaAndAssetCtxs();
     * ```
     */
    spotMetaAndAssetCtxs(...args) {
        return (0, spotMetaAndAssetCtxs_js_1.spotMetaAndAssetCtxs)(this, ...args);
    }
    /**
     * Request for the status of the spot deploy auction.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Status of the spot deploy auction.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.spotPairDeployAuctionStatus();
     * ```
     */
    spotPairDeployAuctionStatus(...args) {
        return (0, spotPairDeployAuctionStatus_js_1.spotPairDeployAuctionStatus)(this, ...args);
    }
    /**
     * Request user sub-accounts.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user sub-account or null if the user does not have any sub-accounts.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.subAccounts({ user: "0x..." });
     * ```
     */
    subAccounts(...args) {
        return (0, subAccounts_js_1.subAccounts)(this, ...args);
    }
    /**
     * Request token details.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Details of a token.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.tokenDetails({ tokenId: "0x..." });
     * ```
     */
    tokenDetails(...args) {
        return (0, tokenDetails_js_1.tokenDetails)(this, ...args);
    }
    /**
     * Request twap history of a user.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user's TWAP history.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.twapHistory({ user: "0x..." });
     * ```
     */
    twapHistory(...args) {
        return (0, twapHistory_js_1.twapHistory)(this, ...args);
    }
    /**
     * Request transaction details by transaction hash.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Transaction details.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // only `HttpTransport` supports this API
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.txDetails({ hash: "0x..." });
     * ```
     */
    txDetails(...args) {
        return (0, txDetails_js_1.txDetails)(this, ...args);
    }
    /**
     * Request array of user transaction details.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user transaction details.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // only `HttpTransport` supports this API
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userDetails({ user: "0x..." });
     * ```
     */
    userDetails(...args) {
        return (0, userDetails_js_1.userDetails)(this, ...args);
    }
    /**
     * Request user HIP-3 DEX abstraction state.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns User HIP-3 DEX abstraction state.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // only `HttpTransport` supports this API
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userDexAbstraction({ user: "0x..." });
     * ```
     */
    userDexAbstraction(...args) {
        return (0, userDexAbstraction_js_1.userDexAbstraction)(this, ...args);
    }
    /**
     * Request user fees.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns User fees.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-fees
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userFees({ user: "0x..." });
     * ```
     */
    userFees(...args) {
        return (0, userFees_js_1.userFees)(this, ...args);
    }
    /**
     * Request array of user fills.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user trade fills.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userFills({ user: "0x..." });
     * ```
     */
    userFills(...args) {
        return (0, userFills_js_1.userFills)(this, ...args);
    }
    /**
     * Request array of user fills by time.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user trade fills by time.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-fills-by-time
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userFillsByTime({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     */
    userFillsByTime(...args) {
        return (0, userFillsByTime_js_1.userFillsByTime)(this, ...args);
    }
    /**
     * Request array of user funding ledger updates.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user funding ledger updates.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userFunding({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     */
    userFunding(...args) {
        return (0, userFunding_js_1.userFunding)(this, ...args);
    }
    /**
     * Request user non-funding ledger updates.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user's non-funding ledger update.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userNonFundingLedgerUpdates({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     */
    userNonFundingLedgerUpdates(...args) {
        return (0, userNonFundingLedgerUpdates_js_1.userNonFundingLedgerUpdates)(this, ...args);
    }
    /**
     * Request user rate limits.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns User rate limits.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userRateLimit({ user: "0x..." });
     * ```
     */
    userRateLimit(...args) {
        return (0, userRateLimit_js_1.userRateLimit)(this, ...args);
    }
    /**
     * Request user role.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns User role.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userRole({ user: "0x..." });
     * ```
     */
    userRole(...args) {
        return (0, userRole_js_1.userRole)(this, ...args);
    }
    /**
     * Request multi-sig signers for a user.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Multi-sig signers for a user or null if the user does not have any multi-sig signers.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userToMultiSigSigners({ user: "0x..." });
     * ```
     */
    userToMultiSigSigners(...args) {
        return (0, userToMultiSigSigners_js_1.userToMultiSigSigners)(this, ...args);
    }
    /**
     * Request user TWAP slice fills.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user's twap slice fill.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userTwapSliceFills({ user: "0x..." });
     * ```
     */
    userTwapSliceFills(...args) {
        return (0, userTwapSliceFills_js_1.userTwapSliceFills)(this, ...args);
    }
    /**
     * Request user TWAP slice fills by time.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user's twap slice fill by time.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userTwapSliceFillsByTime({
     *   user: "0x...",
     *   startTime: Date.now() - 1000 * 60 * 60 * 24,
     * });
     * ```
     */
    userTwapSliceFillsByTime(...args) {
        return (0, userTwapSliceFillsByTime_js_1.userTwapSliceFillsByTime)(this, ...args);
    }
    /**
     * Request user vault deposits.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of user's vault deposits.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.userVaultEquities({ user: "0x..." });
     * ```
     */
    userVaultEquities(...args) {
        return (0, userVaultEquities_js_1.userVaultEquities)(this, ...args);
    }
    /**
     * Request validator L1 votes.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of L1 governance votes cast by validators.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.validatorL1Votes();
     * ```
     */
    validatorL1Votes(...args) {
        return (0, validatorL1Votes_js_1.validatorL1Votes)(this, ...args);
    }
    /**
     * Request validator summaries.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of validator performance statistics.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.validatorSummaries();
     * ```
     */
    validatorSummaries(...args) {
        return (0, validatorSummaries_js_1.validatorSummaries)(this, ...args);
    }
    /**
     * Request details of a vault.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Details of a vault or null if the vault does not exist.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.vaultDetails({ vaultAddress: "0x..." });
     * ```
     */
    vaultDetails(...args) {
        return (0, vaultDetails_js_1.vaultDetails)(this, ...args);
    }
    /**
     * Request a list of vaults less than 2 hours old.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Array of vaults less than 2 hours old.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.vaultSummaries();
     * ```
     */
    vaultSummaries(...args) {
        return (0, vaultSummaries_js_1.vaultSummaries)(this, ...args);
    }
    /**
     * Request comprehensive user and market data.
     * @param params - Parameters specific to the API request.
     * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     * @returns Comprehensive user and market data.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.InfoClient({ transport });
     * const data = await client.webData2({ user: "0x..." });
     * ```
     */
    webData2(...args) {
        return (0, webData2_js_1.webData2)(this, ...args);
    }
}
exports.InfoClient = InfoClient;
//# sourceMappingURL=~client.js.map