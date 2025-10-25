import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to mid price events for all coins. */
export declare const AllMidsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"allMids", undefined>, v.DescriptionAction<"allMids", "Type of subscription.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "allMids";
    dex?: string | undefined;
}, "Subscription to mid price events for all coins.">]>;
export type AllMidsRequest = v.InferOutput<typeof AllMidsRequest>;
/** Event of mid prices for all assets. */
export declare const AllMidsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Mapping of coin symbols to mid prices. */
    readonly mids: v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<{
        [x: string]: string;
    }, "Mapping of coin symbols to mid prices.">]>;
    /** DEX name (undefined for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    mids: {
        [x: string]: string;
    };
    dex?: string | undefined;
}, "Event of mid prices for all assets.">]>;
export type AllMidsEvent = v.InferOutput<typeof AllMidsEvent>;
/** Request parameters for the {@linkcode allMids} function. */
export type AllMidsParameters = Omit<v.InferInput<typeof AllMidsRequest>, "type">;
/**
 * Subscribe to mid prices for all actively traded assets.
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
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { allMids } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await allMids(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function allMids(config: SubscriptionRequestConfig, listener: (data: AllMidsEvent) => void): Promise<Subscription>;
export declare function allMids(config: SubscriptionRequestConfig, params: DeepImmutable<AllMidsParameters>, listener: (data: AllMidsEvent) => void): Promise<Subscription>;
//# sourceMappingURL=allMids.d.ts.map