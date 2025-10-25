import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Deploying HIP-3 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-3-assets
 */
export declare const PerpDeployRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for registering a new perpetual asset. */
        readonly registerAsset: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
                /** Whether the asset can only be traded with isolated margin. */
                readonly onlyIsolated: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the asset can only be traded with isolated margin.">]>;
            }, undefined>, v.DescriptionAction<{
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            }, "Contains new asset listing parameters.">]>;
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Contains new dex parameters. */
            readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null, "Contains new dex parameters.">]>;
        }, undefined>, v.DescriptionAction<{
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        }, "Parameters for registering a new perpetual asset.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "perpDeploy";
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    }, "Register asset variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for setting oracle and mark prices for assets. */
        readonly setOracle: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** A list (sorted by key) of asset and oracle prices. */
            readonly oraclePxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and oracle prices.">]>;
            /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
            readonly markPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, undefined>, v.DescriptionAction<[string, string][][], "An outer list of inner lists (inner list sorted by key) of asset and mark prices.">]>;
            /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
            readonly externalPerpPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and external prices which prevent sudden mark price deviations.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        }, "Parameters for setting oracle and mark prices for assets.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "perpDeploy";
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    }, "Set oracle variant">]>], undefined>, v.DescriptionAction<{
        type: "perpDeploy";
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    } | {
        type: "perpDeploy";
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    }, "Action to perform.">]>;
    /** Unique request identifier (current timestamp in ms). */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    /** Cryptographic signature. */
    readonly signature: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "First 32-byte component of ECDSA signature.">]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Second 32-byte component of ECDSA signature.">]>;
        readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<27, undefined>, v.LiteralSchema<28, undefined>], undefined>]>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
    }, undefined>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components for Ethereum typed data.">]>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "Cryptographic signature.">]>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "perpDeploy";
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    } | {
        type: "perpDeploy";
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Deploying HIP-3 assets.">]>;
export type PerpDeployRequest = v.InferOutput<typeof PerpDeployRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode perpDeploy} function. */
export type PerpDeployParameters = ExtractRequestAction<v.InferInput<typeof PerpDeployRequest>>;
/** Request options for the {@linkcode perpDeploy} function. */
export type PerpDeployOptions = ExtractRequestOptions<v.InferInput<typeof PerpDeployRequest>>;
/**
 * Deploying HIP-3 assets.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-3-assets
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDeploy } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await perpDeploy(
 *   { transport, wallet },
 *   {
 *     registerAsset: {
 *       maxGas: 1000000,
 *       assetRequest: {
 *         coin: "USDC",
 *         szDecimals: 8,
 *         oraclePx: "1",
 *         marginTableId: 1,
 *         onlyIsolated: false,
 *       },
 *       dex: "test",
 *       schema: null,
 *     },
 *   },
 * );
 * ```
 */
export declare function perpDeploy(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<PerpDeployParameters>, opts?: PerpDeployOptions): Promise<SuccessResponse>;
//# sourceMappingURL=perpDeploy.d.ts.map