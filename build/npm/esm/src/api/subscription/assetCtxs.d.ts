import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to context events for all perpetual assets. */
export declare const AssetCtxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"assetCtxs", undefined>, v.DescriptionAction<"assetCtxs", "Type of subscription.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "assetCtxs";
    dex?: string | undefined;
}, "Subscription to context events for all perpetual assets.">]>;
export type AssetCtxsRequest = v.InferOutput<typeof AssetCtxsRequest>;
/** Event of asset contexts for all perpetual assets on a specified DEX. */
export declare const AssetCtxsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "DEX name (empty string for main dex).">]>;
    /** Array of context information for each perpetual asset. */
    readonly ctxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Previous day's closing price. */
        readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
        /** Daily notional volume. */
        readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
        /** Mark price. */
        readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price.">]>;
        /** Mid price. */
        readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
        /** Funding rate. */
        readonly funding: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Funding rate.">]>;
        /** Total open interest. */
        readonly openInterest: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total open interest.">]>;
        /** Premium price. */
        readonly premium: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Premium price.">]>;
        /** Oracle price. */
        readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Oracle price.">]>;
        /** Array of impact prices. */
        readonly impactPxs: v.SchemaWithPipe<readonly [v.NullableSchema<v.ArraySchema<v.StringSchema<undefined>, undefined>, undefined>, v.DescriptionAction<string[] | null, "Array of impact prices.">]>;
        /** Daily volume in base currency. */
        readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
    }, undefined>, v.DescriptionAction<{
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
    }, "Context for a specific perpetual asset.">]>, undefined>, v.DescriptionAction<{
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
    }[], "Array of context information for each perpetual asset.">]>;
}, undefined>, v.DescriptionAction<{
    dex: string;
    ctxs: {
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
}, "Event of asset contexts for all perpetual assets on a specified DEX.">]>;
export type AssetCtxsEvent = v.InferOutput<typeof AssetCtxsEvent>;
/** Request parameters for the {@linkcode assetCtxs} function. */
export type AssetCtxsParameters = Omit<v.InferInput<typeof AssetCtxsRequest>, "type">;
/**
 * Subscribe to asset contexts for all perpetual assets.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { assetCtxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await assetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function assetCtxs(config: SubscriptionRequestConfig, listener: (data: AssetCtxsEvent) => void): Promise<Subscription>;
export declare function assetCtxs(config: SubscriptionRequestConfig, params: DeepImmutable<AssetCtxsParameters>, listener: (data: AssetCtxsEvent) => void): Promise<Subscription>;
//# sourceMappingURL=assetCtxs.d.ts.map