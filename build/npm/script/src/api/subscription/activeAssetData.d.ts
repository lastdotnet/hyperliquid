import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to active asset data events for a specific user and coin. */
export declare const ActiveAssetDataRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"activeAssetData", undefined>, v.DescriptionAction<"activeAssetData", "Type of subscription.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "activeAssetData";
    coin: string;
    user: `0x${string}`;
}, "Subscription to active asset data events for a specific user and coin.">]>;
export type ActiveAssetDataRequest = v.InferOutput<typeof ActiveAssetDataRequest>;
/** Event of user active asset data. */
export declare const ActiveAssetDataEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    readonly leverage: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"isolated", undefined>, v.DescriptionAction<"isolated", "Leverage type.">]>;
        readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
        readonly rawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of USD used (1 = $1).">]>;
    }, undefined>, v.ObjectSchema<{
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cross", undefined>, v.DescriptionAction<"cross", "Leverage type.">]>;
        readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "isolated";
        value: number;
        rawUsd: string;
    } | {
        type: "cross";
        value: number;
    }, "Leverage configuration.">]>;
    readonly maxTradeSzs: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, v.DescriptionAction<[string, string], "Maximum trade size range [min, max].">]>;
    readonly availableToTrade: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, v.DescriptionAction<[string, string], "Available to trade range [min, max].">]>;
    readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price.">]>;
}, undefined>, v.DescriptionAction<{
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
}, "User active asset data.">]>;
export type ActiveAssetDataEvent = v.InferOutput<typeof ActiveAssetDataEvent>;
/** Request parameters for the {@linkcode activeAssetData} function. */
export type ActiveAssetDataParameters = Omit<v.InferInput<typeof ActiveAssetDataRequest>, "type">;
/**
 * Subscribe to trading data updates for a specific asset and user.
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
 * import { activeAssetData } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeAssetData(
 *   { transport },
 *   { coin: "ETH", user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function activeAssetData(config: SubscriptionRequestConfig, params: DeepImmutable<ActiveAssetDataParameters>, listener: (data: ActiveAssetDataEvent) => void): Promise<Subscription>;
//# sourceMappingURL=activeAssetData.d.ts.map