import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request spot metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
export declare const SpotMetaAndAssetCtxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotMetaAndAssetCtxs", undefined>, v.DescriptionAction<"spotMetaAndAssetCtxs", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotMetaAndAssetCtxs";
}, "Request spot metadata and asset contexts.">]>;
export type SpotMetaAndAssetCtxsRequest = v.InferOutput<typeof SpotMetaAndAssetCtxsRequest>;
/**
 * Metadata and context for spot assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 */
export declare const SpotMetaAndAssetCtxsResponse: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly tokens: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number[], "Token indices included in this universe.">]>;
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
        readonly index: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier of the universe.">]>;
        readonly isCanonical: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the token is the primary representation in the system.">]>;
    }, undefined>, v.DescriptionAction<{
        tokens: number[];
        name: string;
        index: number;
        isCanonical: boolean;
    }, "Trading universe details.">]>, undefined>, v.DescriptionAction<{
        tokens: number[];
        name: string;
        index: number;
        isCanonical: boolean;
    }[], "Trading universes available for spot trading.">]>;
    readonly tokens: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the token.">]>;
        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
        readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for the token's smallest unit.">]>;
        readonly index: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
        readonly tokenId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Token ID.">]>;
        readonly isCanonical: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the token is the primary representation in the system.">]>;
        readonly evmContract: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            readonly address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Contract address.">]>;
            readonly evm_extra_wei_decimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.DescriptionAction<number, "Extra decimals in the token's smallest unit.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            address: `0x${string}`;
            evm_extra_wei_decimals: number;
        } | null, "EVM contract details.">]>;
        readonly fullName: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Full display name of the token.">]>;
        readonly deployerTradingFeeShare: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Deployer trading fee share for the token.">]>;
    }, undefined>, v.DescriptionAction<{
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
    }, "Spot token details.">]>, undefined>, v.DescriptionAction<{
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
    }[], "Tokens available for spot trading.">]>;
}, undefined>, v.DescriptionAction<{
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
}, "Metadata for spot assets.">]>, v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
}, "Context for a specific spot asset.">]>, undefined>, v.DescriptionAction<{
    prevDayPx: string;
    dayNtlVlm: string;
    markPx: string;
    midPx: string | null;
    circulatingSupply: string;
    coin: string;
    totalSupply: string;
    dayBaseVlm: string;
}[], "Context for each spot asset.">]>], undefined>, v.DescriptionAction<[{
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
}[]], "Metadata and context for spot assets.">]>;
export type SpotMetaAndAssetCtxsResponse = v.InferOutput<typeof SpotMetaAndAssetCtxsResponse>;
/**
 * Request spot metadata and asset contexts.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Metadata and context for spot assets.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-asset-contexts
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotMetaAndAssetCtxs } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotMetaAndAssetCtxs({ transport });
 * ```
 */
export declare function spotMetaAndAssetCtxs(config: InfoRequestConfig, signal?: AbortSignal): Promise<SpotMetaAndAssetCtxsResponse>;
//# sourceMappingURL=spotMetaAndAssetCtxs.d.ts.map