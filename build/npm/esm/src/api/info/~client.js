import { activeAssetData } from "./activeAssetData.js";
import { alignedQuoteTokenInfo } from "./alignedQuoteTokenInfo.js";
import { allMids } from "./allMids.js";
import { blockDetails } from "./blockDetails.js";
import { candleSnapshot } from "./candleSnapshot.js";
import { clearinghouseState } from "./clearinghouseState.js";
import { delegations } from "./delegations.js";
import { delegatorHistory } from "./delegatorHistory.js";
import { delegatorRewards } from "./delegatorRewards.js";
import { delegatorSummary } from "./delegatorSummary.js";
import { exchangeStatus } from "./exchangeStatus.js";
import { extraAgents } from "./extraAgents.js";
import { frontendOpenOrders } from "./frontendOpenOrders.js";
import { fundingHistory } from "./fundingHistory.js";
import { gossipRootIps } from "./gossipRootIps.js";
import { historicalOrders } from "./historicalOrders.js";
import { isVip } from "./isVip.js";
import { l2Book } from "./l2Book.js";
import { leadingVaults } from "./leadingVaults.js";
import { legalCheck } from "./legalCheck.js";
import { liquidatable } from "./liquidatable.js";
import { marginTable } from "./marginTable.js";
import { maxBuilderFee } from "./maxBuilderFee.js";
import { maxMarketOrderNtls } from "./maxMarketOrderNtls.js";
import { meta } from "./meta.js";
import { metaAndAssetCtxs } from "./metaAndAssetCtxs.js";
import { openOrders } from "./openOrders.js";
import { orderStatus } from "./orderStatus.js";
import { perpDeployAuctionStatus } from "./perpDeployAuctionStatus.js";
import { perpDexLimits } from "./perpDexLimits.js";
import { perpDexs } from "./perpDexs.js";
import { perpsAtOpenInterestCap } from "./perpsAtOpenInterestCap.js";
import { portfolio } from "./portfolio.js";
import { predictedFundings } from "./predictedFundings.js";
import { preTransferCheck } from "./preTransferCheck.js";
import { recentTrades } from "./recentTrades.js";
import { referral } from "./referral.js";
import { spotClearinghouseState } from "./spotClearinghouseState.js";
import { spotDeployState } from "./spotDeployState.js";
import { spotMeta } from "./spotMeta.js";
import { spotMetaAndAssetCtxs } from "./spotMetaAndAssetCtxs.js";
import { spotPairDeployAuctionStatus } from "./spotPairDeployAuctionStatus.js";
import { subAccounts } from "./subAccounts.js";
import { tokenDetails } from "./tokenDetails.js";
import { twapHistory } from "./twapHistory.js";
import { txDetails } from "./txDetails.js";
import { userDetails } from "./userDetails.js";
import { userDexAbstraction } from "./userDexAbstraction.js";
import { userFees } from "./userFees.js";
import { userFills } from "./userFills.js";
import { userFillsByTime } from "./userFillsByTime.js";
import { userFunding } from "./userFunding.js";
import { userNonFundingLedgerUpdates } from "./userNonFundingLedgerUpdates.js";
import { userRateLimit } from "./userRateLimit.js";
import { userRole } from "./userRole.js";
import { userToMultiSigSigners } from "./userToMultiSigSigners.js";
import { userTwapSliceFills } from "./userTwapSliceFills.js";
import { userTwapSliceFillsByTime } from "./userTwapSliceFillsByTime.js";
import { userVaultEquities } from "./userVaultEquities.js";
import { validatorL1Votes } from "./validatorL1Votes.js";
import { validatorSummaries } from "./validatorSummaries.js";
import { vaultDetails } from "./vaultDetails.js";
import { vaultSummaries } from "./vaultSummaries.js";
import { webData2 } from "./webData2.js";
/**
 * A client for interacting with the Hyperliquid Info API.
 * @typeParam T - The transport (extends {@linkcode IRequestTransport}) used to connect to the Hyperliquid API.
 */
export class InfoClient {
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
        return activeAssetData(this, ...args);
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
        return alignedQuoteTokenInfo(this, ...args);
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
        return allMids(this, 
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
        return blockDetails(this, ...args);
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
        return candleSnapshot(this, ...args);
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
        return clearinghouseState(this, ...args);
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
        return delegations(this, ...args);
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
        return delegatorHistory(this, ...args);
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
        return delegatorRewards(this, ...args);
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
        return delegatorSummary(this, ...args);
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
        return exchangeStatus(this, ...args);
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
        return extraAgents(this, ...args);
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
        return frontendOpenOrders(this, ...args);
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
        return fundingHistory(this, ...args);
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
        return gossipRootIps(this, ...args);
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
        return historicalOrders(this, ...args);
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
        return isVip(this, ...args);
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
        return l2Book(this, ...args);
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
        return leadingVaults(this, ...args);
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
        return legalCheck(this, ...args);
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
        return liquidatable(this, ...args);
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
        return marginTable(this, ...args);
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
        return maxBuilderFee(this, ...args);
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
        return maxMarketOrderNtls(this, ...args);
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
        return meta(this, 
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
        return metaAndAssetCtxs(this, 
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
        return openOrders(this, ...args);
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
        return orderStatus(this, ...args);
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
        return perpDeployAuctionStatus(this, ...args);
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
        return perpDexLimits(this, ...args);
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
        return perpDexs(this, ...args);
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
        return perpsAtOpenInterestCap(this, 
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
        return portfolio(this, ...args);
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
        return predictedFundings(this, ...args);
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
        return preTransferCheck(this, ...args);
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
        return recentTrades(this, ...args);
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
        return referral(this, ...args);
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
        return spotClearinghouseState(this, ...args);
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
        return spotDeployState(this, ...args);
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
        return spotMeta(this, ...args);
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
        return spotMetaAndAssetCtxs(this, ...args);
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
        return spotPairDeployAuctionStatus(this, ...args);
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
        return subAccounts(this, ...args);
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
        return tokenDetails(this, ...args);
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
        return twapHistory(this, ...args);
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
        return txDetails(this, ...args);
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
        return userDetails(this, ...args);
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
        return userDexAbstraction(this, ...args);
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
        return userFees(this, ...args);
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
        return userFills(this, ...args);
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
        return userFillsByTime(this, ...args);
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
        return userFunding(this, ...args);
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
        return userNonFundingLedgerUpdates(this, ...args);
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
        return userRateLimit(this, ...args);
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
        return userRole(this, ...args);
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
        return userToMultiSigSigners(this, ...args);
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
        return userTwapSliceFills(this, ...args);
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
        return userTwapSliceFillsByTime(this, ...args);
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
        return userVaultEquities(this, ...args);
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
        return validatorL1Votes(this, ...args);
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
        return validatorSummaries(this, ...args);
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
        return vaultDetails(this, ...args);
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
        return vaultSummaries(this, ...args);
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
        return webData2(this, ...args);
    }
}
//# sourceMappingURL=~client.js.map