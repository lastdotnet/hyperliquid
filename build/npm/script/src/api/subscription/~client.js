"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionClient = void 0;
const activeAssetCtx_js_1 = require("./activeAssetCtx.js");
const activeAssetData_js_1 = require("./activeAssetData.js");
const activeSpotAssetCtx_js_1 = require("./activeSpotAssetCtx.js");
const allMids_js_1 = require("./allMids.js");
const assetCtxs_js_1 = require("./assetCtxs.js");
const bbo_js_1 = require("./bbo.js");
const candle_js_1 = require("./candle.js");
const clearinghouseState_js_1 = require("./clearinghouseState.js");
const explorerBlock_js_1 = require("./explorerBlock.js");
const explorerTxs_js_1 = require("./explorerTxs.js");
const l2Book_js_1 = require("./l2Book.js");
const notification_js_1 = require("./notification.js");
const openOrders_js_1 = require("./openOrders.js");
const orderUpdates_js_1 = require("./orderUpdates.js");
const trades_js_1 = require("./trades.js");
const userEvents_js_1 = require("./userEvents.js");
const userFills_js_1 = require("./userFills.js");
const userFundings_js_1 = require("./userFundings.js");
const userHistoricalOrders_js_1 = require("./userHistoricalOrders.js");
const userNonFundingLedgerUpdates_js_1 = require("./userNonFundingLedgerUpdates.js");
const userTwapHistory_js_1 = require("./userTwapHistory.js");
const userTwapSliceFills_js_1 = require("./userTwapSliceFills.js");
const webData2_js_1 = require("./webData2.js");
/**
 * A client for interacting with the Hyperliquid Subscription API.
 * @typeParam T - The transport (extends {@linkcode ISubscriptionTransport}) used to connect to the Hyperliquid API.
 */
class SubscriptionClient {
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
        return (0, activeAssetCtx_js_1.activeAssetCtx)(this, ...args);
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
        return (0, activeAssetData_js_1.activeAssetData)(this, ...args);
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
        return (0, activeSpotAssetCtx_js_1.activeSpotAssetCtx)(this, ...args);
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
        return (0, allMids_js_1.allMids)(this, 
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
        return (0, assetCtxs_js_1.assetCtxs)(this, 
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
        return (0, bbo_js_1.bbo)(this, ...args);
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
        return (0, candle_js_1.candle)(this, ...args);
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
        return (0, clearinghouseState_js_1.clearinghouseState)(this, ...args);
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
        return (0, explorerBlock_js_1.explorerBlock)(this, ...args);
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
        return (0, explorerTxs_js_1.explorerTxs)(this, ...args);
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
        return (0, l2Book_js_1.l2Book)(this, ...args);
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
        return (0, notification_js_1.notification)(this, ...args);
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
        return (0, openOrders_js_1.openOrders)(this, ...args);
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
        return (0, orderUpdates_js_1.orderUpdates)(this, ...args);
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
        return (0, trades_js_1.trades)(this, ...args);
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
        return (0, userEvents_js_1.userEvents)(this, ...args);
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
        return (0, userFills_js_1.userFills)(this, ...args);
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
        return (0, userFundings_js_1.userFundings)(this, ...args);
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
        return (0, userHistoricalOrders_js_1.userHistoricalOrders)(this, ...args);
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
        return (0, userNonFundingLedgerUpdates_js_1.userNonFundingLedgerUpdates)(this, ...args);
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
        return (0, userTwapHistory_js_1.userTwapHistory)(this, ...args);
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
        return (0, userTwapSliceFills_js_1.userTwapSliceFills)(this, ...args);
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
        return (0, webData2_js_1.webData2)(this, ...args);
    }
}
exports.SubscriptionClient = SubscriptionClient;
//# sourceMappingURL=~client.js.map