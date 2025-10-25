import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare const MetaAndAssetCtxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"metaAndAssetCtxs", undefined>, v.DescriptionAction<"metaAndAssetCtxs", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "metaAndAssetCtxs";
    dex?: string | undefined;
}, "Request metadata and asset contexts.">]>;
export type MetaAndAssetCtxsRequest = v.InferOutput<typeof MetaAndAssetCtxsRequest>;
/**
 * Metadata and context for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare const MetaAndAssetCtxsResponse: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
        readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
        readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the margin requirements table.">]>;
        readonly onlyIsolated: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if only isolated margin trading is allowed.">]>;
        readonly isDelisted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if the universe is delisted.">]>;
    }, undefined>, v.DescriptionAction<{
        szDecimals: number;
        name: string;
        maxLeverage: number;
        marginTableId: number;
        onlyIsolated?: true | undefined;
        isDelisted?: true | undefined;
    }, "Trading universe parameters for perpetual asset.">]>, undefined>, v.DescriptionAction<{
        szDecimals: number;
        name: string;
        maxLeverage: number;
        marginTableId: number;
        onlyIsolated?: true | undefined;
        isDelisted?: true | undefined;
    }[], "Trading universes available for perpetual trading.">]>;
    readonly marginTables: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Description of the margin table.">]>;
        readonly marginTiers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly lowerBound: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Lower position size boundary for this tier.">]>;
            readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage for this tier.">]>;
        }, undefined>, v.DescriptionAction<{
            lowerBound: string;
            maxLeverage: number;
        }, "Individual tier in a margin requirements table.">]>, undefined>, v.DescriptionAction<{
            lowerBound: string;
            maxLeverage: number;
        }[], "Array of margin tiers defining leverage limits.">]>;
    }, undefined>, v.DescriptionAction<{
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }, "Margin requirements table with multiple tiers.">]>], undefined>, v.DescriptionAction<[number, {
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }], "Tuple of margin table ID and its details.">]>, undefined>, v.DescriptionAction<[number, {
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }][], "Margin requirement tables for different leverage tiers.">]>;
    readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
}, undefined>, v.DescriptionAction<{
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
}, "Metadata for perpetual assets.">]>, v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
}[], "Array of contexts for each perpetual asset.">]>], undefined>, v.DescriptionAction<[{
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
}[]], "Metadata and context for perpetual assets.">]>;
export type MetaAndAssetCtxsResponse = v.InferOutput<typeof MetaAndAssetCtxsResponse>;
/** Request parameters for the {@linkcode metaAndAssetCtxs} function. */
export type MetaAndAssetCtxsParameters = Omit<v.InferInput<typeof MetaAndAssetCtxsRequest>, "type">;
/**
 * Request metadata and asset contexts.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Metadata and context for perpetual assets.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { metaAndAssetCtxs } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await metaAndAssetCtxs({ transport });
 * ```
 */
export declare function metaAndAssetCtxs(config: InfoRequestConfig, params?: DeepImmutable<MetaAndAssetCtxsParameters>, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
export declare function metaAndAssetCtxs(config: InfoRequestConfig, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
//# sourceMappingURL=metaAndAssetCtxs.d.ts.map