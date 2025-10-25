import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
export declare const SpotDeployRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Genesis parameters. */
        readonly genesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** Maximum token supply. */
            readonly maxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Maximum token supply.">]>;
            /** Set hyperliquidity balance to 0. */
            readonly noHyperliquidity: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Set hyperliquidity balance to 0.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        }, "Genesis parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    }, "Genesis variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register hyperliquidity parameters. */
        readonly registerHyperliquidity: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Spot index (distinct from base token index). */
            readonly spot: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Spot index (distinct from base token index).">]>;
            /** Starting price for liquidity seeding. */
            readonly startPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Starting price for liquidity seeding.">]>;
            /** Order size as a float (not in wei). */
            readonly orderSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Order size as a float (not in wei).">]>;
            /** Total number of orders to place. */
            readonly nOrders: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total number of orders to place.">]>;
            /** Number of levels to seed with USDC. */
            readonly nSeededLevels: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Number of levels to seed with USDC.">]>;
        }, undefined>, v.DescriptionAction<{
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        }, "Register hyperliquidity parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    }, "Register hyperliquidity variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register spot parameters. */
        readonly registerSpot: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Tuple containing base and quote token indices. */
            readonly tokens: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, v.DescriptionAction<[number, number], "Tuple containing base and quote token indices.">]>;
        }, undefined>, v.DescriptionAction<{
            tokens: [number, number];
        }, "Register spot parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        registerSpot: {
            tokens: [number, number];
        };
    }, "Register spot variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register token parameters. */
        readonly registerToken2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token specifications. */
            readonly spec: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Token name. */
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token name.">]>;
                /** Number of decimals for token size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token size.">]>;
                /** Number of decimals for token amounts in wei. */
                readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token amounts in wei.">]>;
            }, undefined>, v.DescriptionAction<{
                name: string;
                szDecimals: number;
                weiDecimals: number;
            }, "Token specifications.">]>;
            /** Maximum gas allowed for registration. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Maximum gas allowed for registration.">]>;
            /** Optional full token name. */
            readonly fullName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "Optional full token name.">]>;
        }, undefined>, v.DescriptionAction<{
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        }, "Register token parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    }, "Register token variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Set deployer trading fee share parameters. */
        readonly setDeployerTradingFeeShare: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** The deployer trading fee share. Range is 0% to 100%. */
            readonly share: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "The deployer trading fee share. Range is 0% to 100%.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            share: `${string}%`;
        }, "Set deployer trading fee share parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    }, "Set deployer trading fee share variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** User genesis parameters. */
        readonly userGenesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** Array of tuples: [user address, genesis amount in wei]. */
            readonly userAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "Array of tuples: [user address, genesis amount in wei].">]>;
            /** Array of tuples: [existing token identifier, genesis amount in wei]. */
            readonly existingTokenAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Array of tuples: [existing token identifier, genesis amount in wei].">]>;
            /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
            readonly blacklistUsers: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>, v.DescriptionAction<[`0x${string}`, boolean][] | undefined, "Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        }, "User genesis parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        };
    }, "User genesis variant">]>], undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    } | {
        type: "spotDeploy";
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    } | {
        type: "spotDeploy";
        registerSpot: {
            tokens: [number, number];
        };
    } | {
        type: "spotDeploy";
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    } | {
        type: "spotDeploy";
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    } | {
        type: "spotDeploy";
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
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
        type: "spotDeploy";
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    } | {
        type: "spotDeploy";
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    } | {
        type: "spotDeploy";
        registerSpot: {
            tokens: [number, number];
        };
    } | {
        type: "spotDeploy";
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    } | {
        type: "spotDeploy";
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    } | {
        type: "spotDeploy";
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, string>]>;
export type SpotDeployRequest = v.InferOutput<typeof SpotDeployRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode spotDeploy} function. */
export type SpotDeployParameters = ExtractRequestAction<v.InferInput<typeof SpotDeployRequest>>;
/** Request options for the {@linkcode spotDeploy} function. */
export type SpotDeployOptions = ExtractRequestOptions<v.InferInput<typeof SpotDeployRequest>>;
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotDeploy } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotDeploy(
 *   { transport, wallet },
 *   {
 *     registerToken2: {
 *       spec: {
 *         name: "USDC",
 *         szDecimals: 8,
 *         weiDecimals: 8,
 *       },
 *       maxGas: 1000000,
 *       fullName: "USD Coin",
 *     },
 *   },
 * );
 * ```
 */
export declare function spotDeploy(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<SpotDeployParameters>, opts?: SpotDeployOptions): Promise<SuccessResponse>;
//# sourceMappingURL=spotDeploy.d.ts.map