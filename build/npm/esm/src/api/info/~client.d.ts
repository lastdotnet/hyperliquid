import type { OmitFirst, OverloadedParameters } from "../_base.js";
import type { IRequestTransport } from "../../transport/base.js";
import type { InfoRequestConfig } from "./_base.js";
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
export type { ActiveAssetDataParameters, ActiveAssetDataResponse } from "./activeAssetData.js";
export type { AlignedQuoteTokenInfoParameters, AlignedQuoteTokenInfoResponse } from "./alignedQuoteTokenInfo.js";
export type { AllMidsParameters, AllMidsResponse } from "./allMids.js";
export type { BlockDetailsParameters, BlockDetailsResponse } from "./blockDetails.js";
export type { CandleSnapshotParameters, CandleSnapshotResponse } from "./candleSnapshot.js";
export type { ClearinghouseStateParameters, ClearinghouseStateResponse } from "./clearinghouseState.js";
export type { DelegationsParameters, DelegationsResponse } from "./delegations.js";
export type { DelegatorHistoryParameters, DelegatorHistoryResponse } from "./delegatorHistory.js";
export type { DelegatorRewardsParameters, DelegatorRewardsResponse } from "./delegatorRewards.js";
export type { DelegatorSummaryParameters, DelegatorSummaryResponse } from "./delegatorSummary.js";
export type { ExchangeStatusResponse } from "./exchangeStatus.js";
export type { ExtraAgentsParameters, ExtraAgentsResponse } from "./extraAgents.js";
export type { FrontendOpenOrdersParameters, FrontendOpenOrdersResponse } from "./frontendOpenOrders.js";
export type { FundingHistoryParameters, FundingHistoryResponse } from "./fundingHistory.js";
export type { GossipRootIpsResponse } from "./gossipRootIps.js";
export type { HistoricalOrdersParameters, HistoricalOrdersResponse } from "./historicalOrders.js";
export type { IsVipParameters, IsVipResponse } from "./isVip.js";
export type { L2BookParameters, L2BookResponse } from "./l2Book.js";
export type { LeadingVaultsParameters, LeadingVaultsResponse } from "./leadingVaults.js";
export type { LegalCheckParameters, LegalCheckResponse } from "./legalCheck.js";
export type { LiquidatableResponse } from "./liquidatable.js";
export type { MarginTableParameters, MarginTableResponse } from "./marginTable.js";
export type { MaxBuilderFeeParameters, MaxBuilderFeeResponse } from "./maxBuilderFee.js";
export type { MaxMarketOrderNtlsParameters, MaxMarketOrderNtlsResponse } from "./maxMarketOrderNtls.js";
export type { MetaParameters, MetaResponse } from "./meta.js";
export type { MetaAndAssetCtxsParameters, MetaAndAssetCtxsResponse } from "./metaAndAssetCtxs.js";
export type { OpenOrdersParameters, OpenOrdersResponse } from "./openOrders.js";
export type { OrderStatusParameters, OrderStatusResponse } from "./orderStatus.js";
export type { PerpDeployAuctionStatusResponse } from "./perpDeployAuctionStatus.js";
export type { PerpDexLimitsParameters, PerpDexLimitsResponse } from "./perpDexLimits.js";
export type { PerpDexsResponse } from "./perpDexs.js";
export type { PerpsAtOpenInterestCapParameters, PerpsAtOpenInterestCapResponse } from "./perpsAtOpenInterestCap.js";
export type { PortfolioParameters, PortfolioResponse } from "./portfolio.js";
export type { PredictedFundingsResponse } from "./predictedFundings.js";
export type { PreTransferCheckParameters, PreTransferCheckResponse } from "./preTransferCheck.js";
export type { RecentTradesParameters, RecentTradesResponse } from "./recentTrades.js";
export type { ReferralParameters, ReferralResponse } from "./referral.js";
export type { SpotClearinghouseStateParameters, SpotClearinghouseStateResponse } from "./spotClearinghouseState.js";
export type { SpotDeployStateParameters, SpotDeployStateResponse } from "./spotDeployState.js";
export type { SpotMetaResponse } from "./spotMeta.js";
export type { SpotMetaAndAssetCtxsResponse } from "./spotMetaAndAssetCtxs.js";
export type { SpotPairDeployAuctionStatusResponse } from "./spotPairDeployAuctionStatus.js";
export type { SubAccountsParameters, SubAccountsResponse } from "./subAccounts.js";
export type { TokenDetailsParameters, TokenDetailsResponse } from "./tokenDetails.js";
export type { TwapHistoryParameters, TwapHistoryResponse } from "./twapHistory.js";
export type { TxDetailsParameters, TxDetailsResponse } from "./txDetails.js";
export type { UserDetailsParameters, UserDetailsResponse } from "./userDetails.js";
export type { UserDexAbstractionInfoParameters, UserDexAbstractionInfoResponse } from "./userDexAbstraction.js";
export type { UserFeesParameters, UserFeesResponse } from "./userFees.js";
export type { UserFillsParameters, UserFillsResponse } from "./userFills.js";
export type { UserFillsByTimeParameters, UserFillsByTimeResponse } from "./userFillsByTime.js";
export type { UserFundingParameters, UserFundingResponse } from "./userFunding.js";
export type { UserNonFundingLedgerUpdatesParameters, UserNonFundingLedgerUpdatesResponse, } from "./userNonFundingLedgerUpdates.js";
export type { UserRateLimitParameters, UserRateLimitResponse } from "./userRateLimit.js";
export type { UserRoleParameters, UserRoleResponse } from "./userRole.js";
export type { UserToMultiSigSignersParameters, UserToMultiSigSignersResponse } from "./userToMultiSigSigners.js";
export type { UserTwapSliceFillsParameters, UserTwapSliceFillsResponse } from "./userTwapSliceFills.js";
export type { UserTwapSliceFillsByTimeParameters, UserTwapSliceFillsByTimeResponse, } from "./userTwapSliceFillsByTime.js";
export type { UserVaultEquitiesParameters, UserVaultEquitiesResponse } from "./userVaultEquities.js";
export type { ValidatorL1VotesResponse } from "./validatorL1Votes.js";
export type { ValidatorSummariesResponse } from "./validatorSummaries.js";
export type { VaultDetailsParameters, VaultDetailsResponse } from "./vaultDetails.js";
export type { VaultSummariesResponse } from "./vaultSummaries.js";
export type { WebData2Parameters, WebData2Response } from "./webData2.js";
/**
 * A client for interacting with the Hyperliquid Info API.
 * @typeParam T - The transport (extends {@linkcode IRequestTransport}) used to connect to the Hyperliquid API.
 */
export declare class InfoClient<T extends IRequestTransport = IRequestTransport> implements InfoRequestConfig<T> {
    transport: T;
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
    constructor(args: InfoRequestConfig<T>);
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
    activeAssetData(...args: OmitFirst<OverloadedParameters<typeof activeAssetData>>): Promise<{
        user: `0x${string}`;
        coin: string;
        leverage: {
            type: "isolated";
            value: number;
            rawUsd: string;
        } | {
            type: "cross";
            value: number;
        };
        maxTradeSzs: [string, string];
        availableToTrade: [string, string];
        markPx: string;
    }>;
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
    alignedQuoteTokenInfo(...args: OmitFirst<OverloadedParameters<typeof alignedQuoteTokenInfo>>): Promise<{
        isAligned: boolean;
        firstAlignedTime: number;
        evmMintedSupply: string;
        dailyWeiOwed: [string, string][];
        predictedRate: string;
    }>;
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
    allMids(...args: OmitFirst<OverloadedParameters<typeof allMids>>): Promise<{
        [x: string]: string;
    }>;
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
    blockDetails(this: T extends {
        request(endpoint: "explorer", ...args: unknown[]): unknown;
    } ? InfoRequestConfig<T> : never, ...args: OmitFirst<OverloadedParameters<typeof blockDetails>>): Promise<{
        type: "blockDetails";
        blockDetails: {
            blockTime: number;
            hash: `0x${string}`;
            height: number;
            numTxs: number;
            proposer: `0x${string}`;
            txs: {
                action: {
                    type: string;
                } & {
                    [key: string]: unknown;
                };
                block: number;
                error: string | null;
                hash: `0x${string}`;
                time: number;
                user: `0x${string}`;
            }[];
        };
    }>;
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
    candleSnapshot(...args: OmitFirst<OverloadedParameters<typeof candleSnapshot>>): Promise<{
        t: number;
        T: number;
        s: string;
        i: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M";
        o: string;
        c: string;
        h: string;
        l: string;
        v: string;
        n: number;
    }[]>;
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
    clearinghouseState(...args: OmitFirst<OverloadedParameters<typeof clearinghouseState>>): Promise<{
        marginSummary: {
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        };
        crossMarginSummary: {
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        };
        crossMaintenanceMarginUsed: string;
        withdrawable: string;
        assetPositions: {
            type: "oneWay";
            position: {
                coin: string;
                szi: string;
                leverage: {
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                };
                entryPx: string;
                positionValue: string;
                unrealizedPnl: string;
                returnOnEquity: string;
                liquidationPx: string | null;
                marginUsed: string;
                maxLeverage: number;
                cumFunding: {
                    allTime: string;
                    sinceOpen: string;
                    sinceChange: string;
                };
            };
        }[];
        time: number;
    }>;
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
    delegations(...args: OmitFirst<OverloadedParameters<typeof delegations>>): Promise<{
        validator: `0x${string}`;
        amount: string;
        lockedUntilTimestamp: number;
    }[]>;
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
    delegatorHistory(...args: OmitFirst<OverloadedParameters<typeof delegatorHistory>>): Promise<{
        time: number;
        hash: `0x${string}`;
        delta: {
            delegate: {
                validator: `0x${string}`;
                amount: string;
                isUndelegate: boolean;
            };
        } | {
            cDeposit: {
                amount: string;
            };
        } | {
            withdrawal: {
                amount: string;
                phase: "initiated" | "finalized";
            };
        };
    }[]>;
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
    delegatorRewards(...args: OmitFirst<OverloadedParameters<typeof delegatorRewards>>): Promise<{
        time: number;
        source: "delegation" | "commission";
        totalAmount: string;
    }[]>;
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
    delegatorSummary(...args: OmitFirst<OverloadedParameters<typeof delegatorSummary>>): Promise<{
        delegated: string;
        undelegated: string;
        totalPendingWithdrawal: string;
        nPendingWithdrawals: number;
    }>;
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
    exchangeStatus(...args: OmitFirst<OverloadedParameters<typeof exchangeStatus>>): Promise<{
        time: number;
        specialStatuses: unknown;
    }>;
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
    extraAgents(...args: OmitFirst<OverloadedParameters<typeof extraAgents>>): Promise<{
        address: `0x${string}`;
        name: string;
        validUntil: number;
    }[]>;
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
    frontendOpenOrders(...args: OmitFirst<OverloadedParameters<typeof frontendOpenOrders>>): Promise<{
        coin: string;
        side: "B" | "A";
        limitPx: string;
        sz: string;
        oid: number;
        timestamp: number;
        origSz: string;
        triggerCondition: string;
        isTrigger: boolean;
        triggerPx: string;
        children: any[];
        isPositionTpsl: boolean;
        reduceOnly: boolean;
        orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
        tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
        cloid: `0x${string}` | null;
    }[]>;
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
    fundingHistory(...args: OmitFirst<OverloadedParameters<typeof fundingHistory>>): Promise<{
        coin: string;
        fundingRate: string;
        premium: string;
        time: number;
    }[]>;
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
    gossipRootIps(...args: OmitFirst<OverloadedParameters<typeof gossipRootIps>>): Promise<string[]>;
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
    historicalOrders(...args: OmitFirst<OverloadedParameters<typeof historicalOrders>>): Promise<{
        order: {
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: any[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        };
        status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
        statusTimestamp: number;
    }[]>;
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
    isVip(...args: OmitFirst<OverloadedParameters<typeof isVip>>): Promise<boolean | null>;
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
    l2Book(...args: OmitFirst<OverloadedParameters<typeof l2Book>>): Promise<{
        coin: string;
        time: number;
        levels: [{
            px: string;
            sz: string;
            n: number;
        }[], {
            px: string;
            sz: string;
            n: number;
        }[]];
    } | null>;
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
    leadingVaults(...args: OmitFirst<OverloadedParameters<typeof leadingVaults>>): Promise<{
        address: `0x${string}`;
        name: string;
    }[]>;
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
    legalCheck(...args: OmitFirst<OverloadedParameters<typeof legalCheck>>): Promise<{
        ipAllowed: boolean;
        acceptedTerms: boolean;
        userAllowed: boolean;
    }>;
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
    liquidatable(...args: OmitFirst<OverloadedParameters<typeof liquidatable>>): Promise<unknown[]>;
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
    marginTable(...args: OmitFirst<OverloadedParameters<typeof marginTable>>): Promise<{
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }>;
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
    maxBuilderFee(...args: OmitFirst<OverloadedParameters<typeof maxBuilderFee>>): Promise<number>;
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
    maxMarketOrderNtls(...args: OmitFirst<OverloadedParameters<typeof maxMarketOrderNtls>>): Promise<[string, string][]>;
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
    meta(...args: OmitFirst<OverloadedParameters<typeof meta>>): Promise<{
        universe: {
            szDecimals: number;
            name: string;
            maxLeverage: number;
            marginTableId: number;
            onlyIsolated?: true | undefined;
            isDelisted?: true | undefined;
        }[];
        marginTables: [number, {
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }][];
        collateralToken: number;
    }>;
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
    metaAndAssetCtxs(...args: OmitFirst<OverloadedParameters<typeof metaAndAssetCtxs>>): Promise<[{
        universe: {
            szDecimals: number;
            name: string;
            maxLeverage: number;
            marginTableId: number;
            onlyIsolated?: true | undefined;
            isDelisted?: true | undefined;
        }[];
        marginTables: [number, {
            description: string;
            marginTiers: {
                lowerBound: string;
                maxLeverage: number;
            }[];
        }][];
        collateralToken: number;
    }, {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }[]]>;
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
    openOrders(...args: OmitFirst<OverloadedParameters<typeof openOrders>>): Promise<{
        coin: string;
        side: "B" | "A";
        limitPx: string;
        sz: string;
        oid: number;
        timestamp: number;
        origSz: string;
        cloid?: `0x${string}` | undefined;
        reduceOnly?: true | undefined;
    }[]>;
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
    orderStatus(...args: OmitFirst<OverloadedParameters<typeof orderStatus>>): Promise<{
        status: "order";
        order: {
            order: {
                coin: string;
                side: "B" | "A";
                limitPx: string;
                sz: string;
                oid: number;
                timestamp: number;
                origSz: string;
                triggerCondition: string;
                isTrigger: boolean;
                triggerPx: string;
                children: any[];
                isPositionTpsl: boolean;
                reduceOnly: boolean;
                orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
                cloid: `0x${string}` | null;
            };
            status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
            statusTimestamp: number;
        };
    } | {
        status: "unknownOid";
    }>;
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
    perpDeployAuctionStatus(...args: OmitFirst<OverloadedParameters<typeof perpDeployAuctionStatus>>): Promise<{
        currentGas: string | null;
        durationSeconds: number;
        endGas: string | null;
        startGas: string;
        startTimeSeconds: number;
    }>;
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
    perpDexLimits(...args: OmitFirst<OverloadedParameters<typeof perpDexLimits>>): Promise<{
        totalOiCap: string;
        oiSzCapPerPerp: string;
        maxTransferNtl: string;
        coinToOiCap: [string, string][];
    } | null>;
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
    perpDexs(...args: OmitFirst<OverloadedParameters<typeof perpDexs>>): Promise<({
        name: string;
        fullName: string;
        deployer: `0x${string}`;
        oracleUpdater: `0x${string}` | null;
        feeRecipient: `0x${string}` | null;
        assetToStreamingOiCap: [string, string][];
    } | null)[]>;
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
    perpsAtOpenInterestCap(...args: OmitFirst<OverloadedParameters<typeof perpsAtOpenInterestCap>>): Promise<string[]>;
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
    portfolio(...args: OmitFirst<OverloadedParameters<typeof portfolio>>): Promise<[["day", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["week", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["month", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["allTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpDay", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpWeek", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpMonth", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpAllTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }]]>;
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
    predictedFundings(...args: OmitFirst<OverloadedParameters<typeof predictedFundings>>): Promise<[string, [string, {
        fundingRate: string;
        nextFundingTime: number;
        fundingIntervalHours?: number | undefined;
    } | null][]][]>;
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
    preTransferCheck(...args: OmitFirst<OverloadedParameters<typeof preTransferCheck>>): Promise<{
        fee: string;
        isSanctioned: boolean;
        userExists: boolean;
        userHasSentTx: boolean;
    }>;
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
    recentTrades(...args: OmitFirst<OverloadedParameters<typeof recentTrades>>): Promise<{
        coin: string;
        side: "B" | "A";
        px: string;
        sz: string;
        time: number;
        hash: `0x${string}`;
        tid: number;
        users: [`0x${string}`, `0x${string}`];
    }[]>;
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
    referral(...args: OmitFirst<OverloadedParameters<typeof referral>>): Promise<{
        referredBy: {
            referrer: `0x${string}`;
            code: string;
        } | null;
        cumVlm: string;
        unclaimedRewards: string;
        claimedRewards: string;
        builderRewards: string;
        referrerState: {
            stage: "ready";
            data: {
                code: string;
                nReferrals: number;
                referralStates: {
                    cumVlm: string;
                    cumRewardedFeesSinceReferred: string;
                    cumFeesRewardedToReferrer: string;
                    timeJoined: number;
                    user: `0x${string}`;
                    tokenToState: [number, {
                        cumVlm: string;
                        cumRewardedFeesSinceReferred: string;
                        cumFeesRewardedToReferrer: string;
                    }][];
                }[];
            };
        } | {
            stage: "needToCreateCode";
        } | {
            stage: "needToTrade";
            data: {
                required: string;
            };
        };
        rewardHistory: {
            earned: string;
            vlm: string;
            referralVlm: string;
            time: number;
        }[];
        tokenToState: [number, {
            cumVlm: string;
            unclaimedRewards: string;
            claimedRewards: string;
            builderRewards: string;
        }][];
    }>;
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
    spotClearinghouseState(...args: OmitFirst<OverloadedParameters<typeof spotClearinghouseState>>): Promise<{
        balances: {
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[];
        evmEscrows?: {
            coin: string;
            token: number;
            total: string;
        }[] | undefined;
    }>;
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
    spotDeployState(...args: OmitFirst<OverloadedParameters<typeof spotDeployState>>): Promise<{
        states: {
            token: number;
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            fullName: string | null;
            deployerTradingFeeShare: string;
            spots: number[];
            maxSupply: string | null;
            hyperliquidityGenesisBalance: string;
            totalGenesisBalanceWei: string;
            userGenesisBalances: [`0x${string}`, string][];
            existingTokenGenesisBalances: [number, string][];
            blacklistUsers: `0x${string}`[];
        }[];
        gasAuction: {
            currentGas: string | null;
            durationSeconds: number;
            endGas: string | null;
            startGas: string;
            startTimeSeconds: number;
        };
    }>;
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
    spotMeta(...args: OmitFirst<OverloadedParameters<typeof spotMeta>>): Promise<{
        universe: {
            tokens: number[];
            name: string;
            index: number;
            isCanonical: boolean;
        }[];
        tokens: {
            name: string;
            szDecimals: number;
            weiDecimals: number;
            index: number;
            tokenId: `0x${string}`;
            isCanonical: boolean;
            evmContract: {
                address: `0x${string}`;
                evm_extra_wei_decimals: number;
            } | null;
            fullName: string | null;
            deployerTradingFeeShare: string;
        }[];
    }>;
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
    spotMetaAndAssetCtxs(...args: OmitFirst<OverloadedParameters<typeof spotMetaAndAssetCtxs>>): Promise<[{
        universe: {
            tokens: number[];
            name: string;
            index: number;
            isCanonical: boolean;
        }[];
        tokens: {
            name: string;
            szDecimals: number;
            weiDecimals: number;
            index: number;
            tokenId: `0x${string}`;
            isCanonical: boolean;
            evmContract: {
                address: `0x${string}`;
                evm_extra_wei_decimals: number;
            } | null;
            fullName: string | null;
            deployerTradingFeeShare: string;
        }[];
    }, {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    }[]]>;
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
    spotPairDeployAuctionStatus(...args: OmitFirst<OverloadedParameters<typeof spotPairDeployAuctionStatus>>): Promise<{
        currentGas: string | null;
        durationSeconds: number;
        endGas: string | null;
        startGas: string;
        startTimeSeconds: number;
    }>;
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
    subAccounts(...args: OmitFirst<OverloadedParameters<typeof subAccounts>>): Promise<{
        name: string;
        subAccountUser: `0x${string}`;
        master: `0x${string}`;
        clearinghouseState: {
            marginSummary: {
                accountValue: string;
                totalNtlPos: string;
                totalRawUsd: string;
                totalMarginUsed: string;
            };
            crossMarginSummary: {
                accountValue: string;
                totalNtlPos: string;
                totalRawUsd: string;
                totalMarginUsed: string;
            };
            crossMaintenanceMarginUsed: string;
            withdrawable: string;
            assetPositions: {
                type: "oneWay";
                position: {
                    coin: string;
                    szi: string;
                    leverage: {
                        type: "isolated";
                        value: number;
                        rawUsd: string;
                    } | {
                        type: "cross";
                        value: number;
                    };
                    entryPx: string;
                    positionValue: string;
                    unrealizedPnl: string;
                    returnOnEquity: string;
                    liquidationPx: string | null;
                    marginUsed: string;
                    maxLeverage: number;
                    cumFunding: {
                        allTime: string;
                        sinceOpen: string;
                        sinceChange: string;
                    };
                };
            }[];
            time: number;
        };
        spotState: {
            balances: {
                coin: string;
                token: number;
                total: string;
                hold: string;
                entryNtl: string;
            }[];
            evmEscrows?: {
                coin: string;
                token: number;
                total: string;
            }[] | undefined;
        };
    }[] | null>;
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
    tokenDetails(...args: OmitFirst<OverloadedParameters<typeof tokenDetails>>): Promise<{
        name: string;
        maxSupply: string;
        totalSupply: string;
        circulatingSupply: string;
        szDecimals: number;
        weiDecimals: number;
        midPx: string;
        markPx: string;
        prevDayPx: string;
        genesis: {
            userBalances: [`0x${string}`, string][];
            existingTokenBalances: [number, string][];
            blacklistUsers: `0x${string}`[];
        } | null;
        deployer: `0x${string}` | null;
        deployGas: string | null;
        deployTime: string | null;
        seededUsdc: string;
        nonCirculatingUserBalances: [`0x${string}`, string][];
        futureEmissions: string;
    }>;
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
    twapHistory(...args: OmitFirst<OverloadedParameters<typeof twapHistory>>): Promise<{
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }[]>;
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
    txDetails(this: T extends {
        request(endpoint: "explorer", ...args: unknown[]): unknown;
    } ? InfoRequestConfig<T> : never, ...args: OmitFirst<OverloadedParameters<typeof txDetails>>): Promise<{
        type: "txDetails";
        tx: {
            action: {
                type: string;
            } & {
                [key: string]: unknown;
            };
            block: number;
            error: string | null;
            hash: `0x${string}`;
            time: number;
            user: `0x${string}`;
        };
    }>;
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
    userDetails(this: T extends {
        request(endpoint: "explorer", ...args: unknown[]): unknown;
    } ? InfoRequestConfig<T> : never, ...args: OmitFirst<OverloadedParameters<typeof userDetails>>): Promise<{
        type: "userDetails";
        txs: {
            action: {
                type: string;
            } & {
                [key: string]: unknown;
            };
            block: number;
            error: string | null;
            hash: `0x${string}`;
            time: number;
            user: `0x${string}`;
        }[];
    }>;
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
    userDexAbstraction(...args: OmitFirst<OverloadedParameters<typeof userDexAbstraction>>): Promise<boolean | null>;
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
    userFees(...args: OmitFirst<OverloadedParameters<typeof userFees>>): Promise<{
        dailyUserVlm: {
            date: string;
            userCross: string;
            userAdd: string;
            exchange: string;
        }[];
        feeSchedule: {
            cross: string;
            add: string;
            spotCross: string;
            spotAdd: string;
            tiers: {
                vip: {
                    ntlCutoff: string;
                    cross: string;
                    add: string;
                    spotCross: string;
                    spotAdd: string;
                }[];
                mm: {
                    makerFractionCutoff: string;
                    add: string;
                }[];
            };
            referralDiscount: string;
            stakingDiscountTiers: {
                bpsOfMaxSupply: string;
                discount: string;
            }[];
        };
        userCrossRate: string;
        userAddRate: string;
        userSpotCrossRate: string;
        userSpotAddRate: string;
        activeReferralDiscount: string;
        trial: unknown;
        feeTrialEscrow: string;
        nextTrialAvailableTimestamp: unknown;
        stakingLink: unknown;
        activeStakingDiscount: {
            bpsOfMaxSupply: string;
            discount: string;
        };
    }>;
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
    userFills(...args: OmitFirst<OverloadedParameters<typeof userFills>>): Promise<{
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        cloid?: `0x${string}` | undefined;
        liquidation?: {
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined;
        feeToken: string;
        twapId: number | null;
    }[]>;
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
    userFillsByTime(...args: OmitFirst<OverloadedParameters<typeof userFillsByTime>>): Promise<{
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        cloid?: `0x${string}` | undefined;
        liquidation?: {
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined;
        feeToken: string;
        twapId: number | null;
    }[]>;
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
    userFunding(...args: OmitFirst<OverloadedParameters<typeof userFunding>>): Promise<{
        time: number;
        hash: `0x${string}`;
        delta: {
            type: "funding";
            coin: string;
            usdc: string;
            szi: string;
            fundingRate: string;
            nSamples: number | null;
        };
    }[]>;
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
    userNonFundingLedgerUpdates(...args: OmitFirst<OverloadedParameters<typeof userNonFundingLedgerUpdates>>): Promise<{
        time: number;
        hash: `0x${string}`;
        delta: {
            type: "accountClassTransfer";
            usdc: string;
            toPerp: boolean;
        } | {
            type: "deposit";
            usdc: string;
        } | {
            type: "internalTransfer";
            usdc: string;
            user: `0x${string}`;
            destination: `0x${string}`;
            fee: string;
        } | {
            type: "liquidation";
            liquidatedNtlPos: string;
            accountValue: string;
            leverageType: "Cross" | "Isolated";
            liquidatedPositions: {
                coin: string;
                szi: string;
            }[];
        } | {
            type: "rewardsClaim";
            amount: string;
            token: string;
        } | {
            type: "spotTransfer";
            token: string;
            amount: string;
            usdcValue: string;
            user: `0x${string}`;
            destination: `0x${string}`;
            fee: string;
            nativeTokenFee: string;
            nonce: null;
            feeToken: string;
        } | {
            type: "subAccountTransfer";
            usdc: string;
            user: `0x${string}`;
            destination: `0x${string}`;
        } | {
            type: "vaultCreate";
            vault: `0x${string}`;
            usdc: string;
            fee: string;
        } | {
            type: "vaultDeposit";
            vault: `0x${string}`;
            usdc: string;
        } | {
            type: "vaultDistribution";
            vault: `0x${string}`;
            usdc: string;
        } | {
            type: "vaultWithdraw";
            vault: `0x${string}`;
            user: `0x${string}`;
            requestedUsd: string;
            commission: string;
            closingCost: string;
            basis: string;
            netWithdrawnUsd: string;
        } | {
            type: "withdraw";
            usdc: string;
            nonce: number;
            fee: string;
        };
    }[]>;
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
    userRateLimit(...args: OmitFirst<OverloadedParameters<typeof userRateLimit>>): Promise<{
        cumVlm: string;
        nRequestsUsed: number;
        nRequestsCap: number;
    }>;
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
    userRole(...args: OmitFirst<OverloadedParameters<typeof userRole>>): Promise<{
        role: "user" | "vault" | "missing";
    } | {
        role: "agent";
        data: {
            user: `0x${string}`;
        };
    } | {
        role: "subAccount";
        data: {
            master: `0x${string}`;
        };
    }>;
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
    userToMultiSigSigners(...args: OmitFirst<OverloadedParameters<typeof userToMultiSigSigners>>): Promise<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null>;
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
    userTwapSliceFills(...args: OmitFirst<OverloadedParameters<typeof userTwapSliceFills>>): Promise<{
        fill: {
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        };
        twapId: number;
    }[]>;
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
    userTwapSliceFillsByTime(...args: OmitFirst<OverloadedParameters<typeof userTwapSliceFillsByTime>>): Promise<{
        fill: {
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        };
        twapId: number;
    }[]>;
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
    userVaultEquities(...args: OmitFirst<OverloadedParameters<typeof userVaultEquities>>): Promise<{
        vaultAddress: `0x${string}`;
        equity: string;
        lockedUntilTimestamp: number;
    }[]>;
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
    validatorL1Votes(...args: OmitFirst<OverloadedParameters<typeof validatorL1Votes>>): Promise<{
        expireTime: number;
        action: {
            D: string;
        } | {
            C: string[];
        };
        votes: `0x${string}`[];
    }[]>;
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
    validatorSummaries(...args: OmitFirst<OverloadedParameters<typeof validatorSummaries>>): Promise<{
        validator: `0x${string}`;
        signer: `0x${string}`;
        name: string;
        description: string;
        nRecentBlocks: number;
        stake: number;
        isJailed: boolean;
        unjailableAfter: number | null;
        isActive: boolean;
        commission: string;
        stats: [["day", {
            uptimeFraction: string;
            predictedApr: string;
            nSamples: number;
        }], ["week", {
            uptimeFraction: string;
            predictedApr: string;
            nSamples: number;
        }], ["month", {
            uptimeFraction: string;
            predictedApr: string;
            nSamples: number;
        }]];
    }[]>;
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
    vaultDetails(...args: OmitFirst<OverloadedParameters<typeof vaultDetails>>): Promise<{
        name: string;
        vaultAddress: `0x${string}`;
        leader: `0x${string}`;
        description: string;
        portfolio: [["day", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["week", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["month", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["allTime", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["perpDay", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["perpWeek", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["perpMonth", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }], ["perpAllTime", {
            accountValueHistory: [number, string][];
            pnlHistory: [number, string][];
            vlm: string;
        }]];
        apr: number;
        followerState: {
            user: `0x${string}`;
            vaultEquity: string;
            pnl: string;
            allTimePnl: string;
            daysFollowing: number;
            vaultEntryTime: number;
            lockupUntil: number;
        } | null;
        leaderFraction: number;
        leaderCommission: number;
        followers: {
            user: `0x${string}` | "Leader";
            vaultEquity: string;
            pnl: string;
            allTimePnl: string;
            daysFollowing: number;
            vaultEntryTime: number;
            lockupUntil: number;
        }[];
        maxDistributable: number;
        maxWithdrawable: number;
        isClosed: boolean;
        relationship: {
            type: "normal" | "child";
        } | {
            type: "parent";
            data: {
                childAddresses: `0x${string}`[];
            };
        };
        allowDeposits: boolean;
        alwaysCloseOnWithdraw: boolean;
    } | null>;
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
    vaultSummaries(...args: OmitFirst<OverloadedParameters<typeof vaultSummaries>>): Promise<{
        name: string;
        vaultAddress: `0x${string}`;
        leader: `0x${string}`;
        tvl: string;
        isClosed: boolean;
        relationship: {
            type: "normal" | "child";
        } | {
            type: "parent";
            data: {
                childAddresses: `0x${string}`[];
            };
        };
        createTimeMillis: number;
    }[]>;
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
    webData2(...args: OmitFirst<OverloadedParameters<typeof webData2>>): Promise<{
        clearinghouseState: {
            marginSummary: {
                accountValue: string;
                totalNtlPos: string;
                totalRawUsd: string;
                totalMarginUsed: string;
            };
            crossMarginSummary: {
                accountValue: string;
                totalNtlPos: string;
                totalRawUsd: string;
                totalMarginUsed: string;
            };
            crossMaintenanceMarginUsed: string;
            withdrawable: string;
            assetPositions: {
                type: "oneWay";
                position: {
                    coin: string;
                    szi: string;
                    leverage: {
                        type: "isolated";
                        value: number;
                        rawUsd: string;
                    } | {
                        type: "cross";
                        value: number;
                    };
                    entryPx: string;
                    positionValue: string;
                    unrealizedPnl: string;
                    returnOnEquity: string;
                    liquidationPx: string | null;
                    marginUsed: string;
                    maxLeverage: number;
                    cumFunding: {
                        allTime: string;
                        sinceOpen: string;
                        sinceChange: string;
                    };
                };
            }[];
            time: number;
        };
        leadingVaults: {
            address: `0x${string}`;
            name: string;
        }[];
        totalVaultEquity: string;
        openOrders: {
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: any[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        }[];
        agentAddress: `0x${string}` | null;
        agentValidUntil: number | null;
        cumLedger: string;
        meta: {
            universe: {
                szDecimals: number;
                name: string;
                maxLeverage: number;
                marginTableId: number;
                onlyIsolated?: true | undefined;
                isDelisted?: true | undefined;
            }[];
            marginTables: [number, {
                description: string;
                marginTiers: {
                    lowerBound: string;
                    maxLeverage: number;
                }[];
            }][];
            collateralToken: number;
        };
        assetCtxs: {
            prevDayPx: string;
            dayNtlVlm: string;
            markPx: string;
            midPx: string | null;
            funding: string;
            openInterest: string;
            premium: string | null;
            oraclePx: string;
            impactPxs: string[] | null;
            dayBaseVlm: string;
        }[];
        serverTime: number;
        isVault: boolean;
        user: `0x${string}`;
        twapStates: [number, {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        }][];
        spotState: {
            balances: {
                coin: string;
                token: number;
                total: string;
                hold: string;
                entryNtl: string;
            }[];
            evmEscrows?: {
                coin: string;
                token: number;
                total: string;
            }[] | undefined;
        };
        spotAssetCtxs: {
            prevDayPx: string;
            dayNtlVlm: string;
            markPx: string;
            midPx: string | null;
            circulatingSupply: string;
            coin: string;
            totalSupply: string;
            dayBaseVlm: string;
        }[];
        optOutOfSpotDusting?: true | undefined;
        perpsAtOpenInterestCap?: string[] | undefined;
    }>;
}
//# sourceMappingURL=~client.d.ts.map