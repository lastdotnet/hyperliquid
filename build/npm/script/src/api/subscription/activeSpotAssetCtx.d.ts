import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to context events for a specific spot asset. */
export declare const ActiveSpotAssetCtxRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"activeAssetCtx", undefined>, v.DescriptionAction<"activeAssetCtx", "Type of subscription.">]>;
    /** Asset ID (e.g., @1). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset ID (e.g., @1).">]>;
}, undefined>, v.DescriptionAction<{
    type: "activeAssetCtx";
    coin: string;
}, "Subscription to context events for a specific spot asset.">]>;
export type ActiveSpotAssetCtxRequest = v.InferOutput<typeof ActiveSpotAssetCtxRequest>;
/** Event of active spot asset context. */
export declare const ActiveSpotAssetCtxEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset ID (e.g., @1). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset ID (e.g., @1).">]>;
    /** Context for a specific spot asset. */
    readonly ctx: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Previous day's closing price. */
        readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
        /** Daily notional volume. */
        readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
        /** Mark price. */
        readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price.">]>;
        /** Mid price. */
        readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
        /** Circulating supply. */
        readonly circulatingSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Circulating supply.">]>;
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Total supply. */
        readonly totalSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total supply.">]>;
        /** Daily volume in base currency. */
        readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
    }, undefined>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    }, "Context for a specific spot asset.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    ctx: {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    };
}, "Event of active spot asset context.">]>;
export type ActiveSpotAssetCtxEvent = v.InferOutput<typeof ActiveSpotAssetCtxEvent>;
/** Request parameters for the {@linkcode activeSpotAssetCtx} function. */
export type ActiveSpotAssetCtxParameters = Omit<v.InferInput<typeof ActiveSpotAssetCtxRequest>, "type">;
/**
 * Subscribe to context updates for a specific spot asset.
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
 * import { activeSpotAssetCtx } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await activeSpotAssetCtx(
 *   { transport },
 *   { coin: "@1" },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function activeSpotAssetCtx(config: SubscriptionRequestConfig, params: DeepImmutable<ActiveSpotAssetCtxParameters>, listener: (data: ActiveSpotAssetCtxEvent) => void): Promise<Subscription>;
//# sourceMappingURL=activeSpotAssetCtx.d.ts.map