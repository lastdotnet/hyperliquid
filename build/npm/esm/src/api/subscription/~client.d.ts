import type { OmitFirst, OverloadedParameters } from "../_base.js";
import type { ISubscriptionTransport } from "../../transport/base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import { activeAssetCtx } from "./activeAssetCtx.js";
import { activeAssetData } from "./activeAssetData.js";
import { activeSpotAssetCtx } from "./activeSpotAssetCtx.js";
import { allMids } from "./allMids.js";
import { assetCtxs } from "./assetCtxs.js";
import { bbo } from "./bbo.js";
import { candle } from "./candle.js";
import { clearinghouseState } from "./clearinghouseState.js";
import { explorerBlock } from "./explorerBlock.js";
import { explorerTxs } from "./explorerTxs.js";
import { l2Book } from "./l2Book.js";
import { notification } from "./notification.js";
import { openOrders } from "./openOrders.js";
import { orderUpdates } from "./orderUpdates.js";
import { trades } from "./trades.js";
import { userEvents } from "./userEvents.js";
import { userFills } from "./userFills.js";
import { userFundings } from "./userFundings.js";
import { userHistoricalOrders } from "./userHistoricalOrders.js";
import { userNonFundingLedgerUpdates } from "./userNonFundingLedgerUpdates.js";
import { userTwapHistory } from "./userTwapHistory.js";
import { userTwapSliceFills } from "./userTwapSliceFills.js";
import { webData2 } from "./webData2.js";
export type { ActiveAssetCtxEvent as WsActiveAssetCtxEvent, ActiveAssetCtxParameters as WsActiveAssetCtxParameters, } from "./activeAssetCtx.js";
export type { ActiveAssetDataEvent as WsActiveAssetDataEvent, ActiveAssetDataParameters as WsActiveAssetDataParameters, } from "./activeAssetData.js";
export type { ActiveSpotAssetCtxEvent as WsActiveSpotAssetCtxEvent, ActiveSpotAssetCtxParameters as WsActiveSpotAssetCtxParameters, } from "./activeSpotAssetCtx.js";
export type { AllMidsEvent as WsAllMidsEvent, AllMidsParameters as WsAllMidsParameters } from "./allMids.js";
export type { AssetCtxsEvent as WsAssetCtxsEvent, AssetCtxsParameters as WsAssetCtxsParameters } from "./assetCtxs.js";
export type { BboEvent as WsBboEvent, BboParameters as WsBboParameters } from "./bbo.js";
export type { CandleEvent as WsCandleEvent, CandleParameters as WsCandleParameters } from "./candle.js";
export type { ClearinghouseStateEvent as WsClearinghouseStateEvent, ClearinghouseStateParameters as WsClearinghouseStateParameters, } from "./clearinghouseState.js";
export type { ExplorerBlockEvent as WsExplorerBlockEvent, ExplorerBlockParameters as WsExplorerBlockParameters, } from "./explorerBlock.js";
export type { ExplorerTxsEvent as WsExplorerTxsEvent, ExplorerTxsParameters as WsExplorerTxsParameters, } from "./explorerTxs.js";
export type { L2BookEvent as WsL2BookEvent, L2BookParameters as WsL2BookParameters } from "./l2Book.js";
export type { NotificationEvent as WsNotificationEvent, NotificationParameters as WsNotificationParameters, } from "./notification.js";
export type { OpenOrdersEvent as WsOpenOrdersEvent, OpenOrdersParameters as WsOpenOrdersParameters, } from "./openOrders.js";
export type { OrderUpdatesEvent as WsOrderUpdatesEvent, OrderUpdatesParameters as WsOrderUpdatesParameters, } from "./orderUpdates.js";
export type { TradesEvent as WsTradesEvent, TradesParameters as WsTradesParameters } from "./trades.js";
export type { UserEventsEvent as WsUserEventsEvent, UserEventsParameters as WsUserEventsParameters, } from "./userEvents.js";
export type { UserFillsEvent as WsUserFillsEvent, UserFillsParameters as WsUserFillsParameters } from "./userFills.js";
export type { UserFundingsEvent as WsUserFundingsEvent, UserFundingsParameters as WsUserFundingsParameters, } from "./userFundings.js";
export type { UserHistoricalOrdersEvent as WsUserHistoricalOrdersEvent, UserHistoricalOrdersParameters as WsUserHistoricalOrdersParameters, } from "./userHistoricalOrders.js";
export type { UserNonFundingLedgerUpdatesEvent as WsUserNonFundingLedgerUpdatesEvent, UserNonFundingLedgerUpdatesParameters as WsUserNonFundingLedgerUpdatesParameters, } from "./userNonFundingLedgerUpdates.js";
export type { UserTwapHistoryEvent as WsUserTwapHistoryEvent, UserTwapHistoryParameters as WsUserTwapHistoryParameters, } from "./userTwapHistory.js";
export type { UserTwapSliceFillsEvent as WsUserTwapSliceFillsEvent, UserTwapSliceFillsParameters as WsUserTwapSliceFillsParameters, } from "./userTwapSliceFills.js";
export type { WebData2Event as WsWebData2Event, WebData2Parameters as WsWebData2Parameters } from "./webData2.js";
/**
 * A client for interacting with the Hyperliquid Subscription API.
 * @typeParam T - The transport (extends {@linkcode ISubscriptionTransport}) used to connect to the Hyperliquid API.
 */
export declare class SubscriptionClient<T extends ISubscriptionTransport = ISubscriptionTransport> implements SubscriptionRequestConfig<T> {
    transport: T;
    /**
     * Initialises a new instance.
     * @param args - The arguments for initialisation.
     *
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     * const subsClient = new hl.SubscriptionClient({ transport });
     * ```
     */
    constructor(args: SubscriptionRequestConfig<T>);
    /**
     * Subscribe to context updates for a specific perpetual asset.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.activeAssetCtx({ coin: "ETH" }, (data) => console.log(data));
     * ```
     */
    activeAssetCtx(...args: OmitFirst<OverloadedParameters<typeof activeAssetCtx>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to trading data updates for a specific asset and user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.activeAssetData({ coin: "ETH", user: "0x..." }, (data) => console.log(data));
     * ```
     */
    activeAssetData(...args: OmitFirst<OverloadedParameters<typeof activeAssetData>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to context updates for a specific spot asset.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.activeSpotAssetCtx({ coin: "@1" }, (data) => console.log(data));
     * ```
     */
    activeSpotAssetCtx(...args: OmitFirst<OverloadedParameters<typeof activeSpotAssetCtx>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to mid prices for all actively traded assets.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.allMids((data) => console.log(data));
     * ```
     */
    allMids(...args: OmitFirst<OverloadedParameters<typeof allMids>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to asset contexts for all perpetual assets.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.assetCtxs((data) => console.log(data));
     * ```
     */
    assetCtxs(...args: OmitFirst<OverloadedParameters<typeof assetCtxs>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to best bid and offer updates for a specific asset.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.bbo({ coin: "ETH" }, (data) => console.log(data));
     * ```
     */
    bbo(...args: OmitFirst<OverloadedParameters<typeof bbo>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to candlestick data updates for a specific asset.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.candle({ coin: "ETH", interval: "1h" }, (data) => console.log(data));
     * ```
     */
    candle(...args: OmitFirst<OverloadedParameters<typeof candle>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to clearinghouse state updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.clearinghouseState({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    clearinghouseState(...args: OmitFirst<OverloadedParameters<typeof clearinghouseState>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to explorer block updates.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     * @note Make sure the endpoint in the {@link transport} supports this method.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.explorerBlock((data) => console.log(data));
     * ```
     */
    explorerBlock(...args: OmitFirst<OverloadedParameters<typeof explorerBlock>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to explorer transaction updates.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     * @note Make sure the endpoint in the {@link transport} supports this method.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see null
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.explorerTxs((data) => console.log(data));
     * ```
     */
    explorerTxs(...args: OmitFirst<OverloadedParameters<typeof explorerTxs>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to L2 order book updates for a specific asset.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.l2Book({ coin: "ETH" }, (data) => console.log(data));
     * ```
     */
    l2Book(...args: OmitFirst<OverloadedParameters<typeof l2Book>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to notification updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.notification({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    notification(...args: OmitFirst<OverloadedParameters<typeof notification>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to open orders updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.openOrders({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    openOrders(...args: OmitFirst<OverloadedParameters<typeof openOrders>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to order status updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.orderUpdates({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    orderUpdates(...args: OmitFirst<OverloadedParameters<typeof orderUpdates>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to real-time trade updates for a specific asset.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.trades({ coin: "ETH" }, (data) => console.log(data));
     * ```
     */
    trades(...args: OmitFirst<OverloadedParameters<typeof trades>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to non-order events for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     * @note Different subscriptions cannot be distinguished from each other.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userEvents({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userEvents(...args: OmitFirst<OverloadedParameters<typeof userEvents>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to trade fill updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userFills({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userFills(...args: OmitFirst<OverloadedParameters<typeof userFills>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to funding payment updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userFundings({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userFundings(...args: OmitFirst<OverloadedParameters<typeof userFundings>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to historical order updates for a specific user.
     * @param config - General configuration for Subscription API subscriptions.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userHistoricalOrders({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userHistoricalOrders(...args: OmitFirst<OverloadedParameters<typeof userHistoricalOrders>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to non-funding ledger updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userNonFundingLedgerUpdates({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userNonFundingLedgerUpdates(...args: OmitFirst<OverloadedParameters<typeof userNonFundingLedgerUpdates>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to TWAP order history updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userTwapHistory({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userTwapHistory(...args: OmitFirst<OverloadedParameters<typeof userTwapHistory>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to TWAP execution updates for a specific user.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.userTwapSliceFills({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    userTwapSliceFills(...args: OmitFirst<OverloadedParameters<typeof userTwapSliceFills>>): Promise<import("../../mod.js").Subscription>;
    /**
     * Subscribe to comprehensive user and market data updates.
     * @param params - Parameters specific to the API subscription.
     * @param listener - A callback function to be called when the event is received.
     * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
     *
     * @throws {TransportError} When the transport layer throws an error.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport();
     *
     * const client = new hl.SubscriptionClient({ transport });
     * const sub = await client.webData2({ user: "0x..." }, (data) => console.log(data));
     * ```
     */
    webData2(...args: OmitFirst<OverloadedParameters<typeof webData2>>): Promise<import("../../mod.js").Subscription>;
}
//# sourceMappingURL=~client.d.ts.map