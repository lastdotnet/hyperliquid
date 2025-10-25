import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare const MetaRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"meta", undefined>, v.DescriptionAction<"meta", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "meta";
    dex?: string | undefined;
}, "Request trading metadata.">]>;
export type MetaRequest = v.InferOutput<typeof MetaRequest>;
/**
 * Metadata for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare const MetaResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Trading universes available for perpetual trading. */
    readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Minimum decimal places for order sizes. */
        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
        /** Name of the universe. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
        /** Maximum allowed leverage. */
        readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
        /** Unique identifier for the margin requirements table. */
        readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the margin requirements table.">]>;
        /** Indicates if only isolated margin trading is allowed. */
        readonly onlyIsolated: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if only isolated margin trading is allowed.">]>;
        /** Indicates if the universe is delisted. */
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
    /** Margin requirement tables for different leverage tiers. */
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
    /** Collateral token index. */
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
}, "Metadata for perpetual assets.">]>;
export type MetaResponse = v.InferOutput<typeof MetaResponse>;
/** Request parameters for the {@linkcode meta} function. */
export type MetaParameters = Omit<v.InferInput<typeof MetaRequest>, "type">;
/**
 * Request trading metadata.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Metadata for perpetual assets.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { meta } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await meta({ transport });
 * ```
 */
export declare function meta(config: InfoRequestConfig, params?: DeepImmutable<MetaParameters>, signal?: AbortSignal): Promise<MetaResponse>;
export declare function meta(config: InfoRequestConfig, signal?: AbortSignal): Promise<MetaResponse>;
//# sourceMappingURL=meta.d.ts.map