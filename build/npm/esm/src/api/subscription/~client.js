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
/**
 * A client for interacting with the Hyperliquid Subscription API.
 * @typeParam T - The transport (extends {@linkcode ISubscriptionTransport}) used to connect to the Hyperliquid API.
 */
export class SubscriptionClient {
    transport;
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
    constructor(args) {
        this.transport = args.transport;
    }
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
    activeAssetCtx(...args) {
        return activeAssetCtx(this, ...args);
    }
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
    activeAssetData(...args) {
        return activeAssetData(this, ...args);
    }
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
    activeSpotAssetCtx(...args) {
        return activeSpotAssetCtx(this, ...args);
    }
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
    allMids(...args) {
        return allMids(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
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
    assetCtxs(...args) {
        return assetCtxs(this, 
        // @ts-ignore: TypeScript can't resolve overloaded signatures from parameter unions
        ...args);
    }
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
    bbo(...args) {
        return bbo(this, ...args);
    }
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
    candle(...args) {
        return candle(this, ...args);
    }
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
    clearinghouseState(...args) {
        return clearinghouseState(this, ...args);
    }
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
    explorerBlock(...args) {
        return explorerBlock(this, ...args);
    }
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
    explorerTxs(...args) {
        return explorerTxs(this, ...args);
    }
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
    l2Book(...args) {
        return l2Book(this, ...args);
    }
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
    notification(...args) {
        return notification(this, ...args);
    }
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
    openOrders(...args) {
        return openOrders(this, ...args);
    }
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
    orderUpdates(...args) {
        return orderUpdates(this, ...args);
    }
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
    trades(...args) {
        return trades(this, ...args);
    }
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
    userEvents(...args) {
        return userEvents(this, ...args);
    }
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
    userFills(...args) {
        return userFills(this, ...args);
    }
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
    userFundings(...args) {
        return userFundings(this, ...args);
    }
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
    userHistoricalOrders(...args) {
        return userHistoricalOrders(this, ...args);
    }
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
    userNonFundingLedgerUpdates(...args) {
        return userNonFundingLedgerUpdates(this, ...args);
    }
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
    userTwapHistory(...args) {
        return userTwapHistory(this, ...args);
    }
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
    userTwapSliceFills(...args) {
        return userTwapSliceFills(this, ...args);
    }
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
    webData2(...args) {
        return webData2(this, ...args);
    }
}
//# sourceMappingURL=~client.js.map