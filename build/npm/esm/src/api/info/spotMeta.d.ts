import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request spot trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
export declare const SpotMetaRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotMeta", undefined>, v.DescriptionAction<"spotMeta", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotMeta";
}, "Request spot trading metadata.">]>;
export type SpotMetaRequest = v.InferOutput<typeof SpotMetaRequest>;
/**
 * Metadata for spot assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 */
export declare const SpotMetaResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Trading universes available for spot trading. */
    readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token indices included in this universe. */
        readonly tokens: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number[], "Token indices included in this universe.">]>;
        /** Name of the universe. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
        /** Unique identifier of the universe. */
        readonly index: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier of the universe.">]>;
        /** Indicates if the token is the primary representation in the system. */
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
    /** Tokens available for spot trading. */
    readonly tokens: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Name of the token. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the token.">]>;
        /** Minimum decimal places for order sizes. */
        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
        /** Number of decimals for the token's smallest unit. */
        readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for the token's smallest unit.">]>;
        /** Unique identifier for the token. */
        readonly index: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
        /** Token ID. */
        readonly tokenId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Token ID.">]>;
        /** Indicates if the token is the primary representation in the system. */
        readonly isCanonical: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the token is the primary representation in the system.">]>;
        /** EVM contract details. */
        readonly evmContract: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** Contract address. */
            readonly address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Contract address.">]>;
            /** Extra decimals in the token's smallest unit. */
            readonly evm_extra_wei_decimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.DescriptionAction<number, "Extra decimals in the token's smallest unit.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            address: `0x${string}`;
            evm_extra_wei_decimals: number;
        } | null, "EVM contract details.">]>;
        /** Full display name of the token. */
        readonly fullName: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Full display name of the token.">]>;
        /** Deployer trading fee share for the token. */
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
}, "Metadata for spot assets.">]>;
export type SpotMetaResponse = v.InferOutput<typeof SpotMetaResponse>;
/**
 * Request spot trading metadata.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Metadata for spot assets.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-spot-metadata
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotMeta } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotMeta({ transport });
 * ```
 */
export declare function spotMeta(config: InfoRequestConfig, signal?: AbortSignal): Promise<SpotMetaResponse>;
//# sourceMappingURL=spotMeta.d.ts.map