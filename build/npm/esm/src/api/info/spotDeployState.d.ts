import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request spot deploy state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
export declare const SpotDeployStateRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeployState", undefined>, v.DescriptionAction<"spotDeployState", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotDeployState";
    user: `0x${string}`;
}, "Request spot deploy state.">]>;
export type SpotDeployStateRequest = v.InferOutput<typeof SpotDeployStateRequest>;
/**
 * Deploy state for spot tokens.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 */
export declare const SpotDeployStateResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of deploy states for tokens. */
    readonly states: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token ID. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token ID.">]>;
        /** Token specification. */
        readonly spec: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the token. */
            readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the token.">]>;
            /** Minimum decimal places for order sizes. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
            /** Number of decimals for the token's smallest unit. */
            readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for the token's smallest unit.">]>;
        }, undefined>, v.DescriptionAction<{
            name: string;
            szDecimals: number;
            weiDecimals: number;
        }, "Token specification.">]>;
        /** Full name of the token. */
        readonly fullName: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Full name of the token.">]>;
        /** Deployer trading fee share for the token. */
        readonly deployerTradingFeeShare: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Deployer trading fee share for the token.">]>;
        /** Spot indices for the token. */
        readonly spots: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number[], "Spot indices for the token.">]>;
        /** Maximum supply of the token. */
        readonly maxSupply: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Maximum supply of the token.">]>;
        /** Hyperliquidity genesis balance of the token. */
        readonly hyperliquidityGenesisBalance: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Hyperliquidity genesis balance of the token.">]>;
        /** Total genesis balance (in wei) for the token. */
        readonly totalGenesisBalanceWei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total genesis balance (in wei) for the token.">]>;
        /** User genesis balances for the token. */
        readonly userGenesisBalances: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "User genesis balances for the token.">]>;
        /** Existing token genesis balances for the token. */
        readonly existingTokenGenesisBalances: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Existing token genesis balances for the token.">]>;
        /** Blacklisted users for the token. */
        readonly blacklistUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "Blacklisted users for the token.">]>;
    }, undefined>, v.DescriptionAction<{
        token: number;
        spec: {
            name: string;
            szDecimals: number;
            weiDecimals: number;
        };
        fullName: string | null;
        deployerTradingFeeShare: string;
        spots: number[];
        maxSupply: string | null;
        hyperliquidityGenesisBalance: string;
        totalGenesisBalanceWei: string;
        userGenesisBalances: [`0x${string}`, string][];
        existingTokenGenesisBalances: [number, string][];
        blacklistUsers: `0x${string}`[];
    }, "Deploy state for a specific token.">]>, undefined>, v.DescriptionAction<{
        token: number;
        spec: {
            name: string;
            szDecimals: number;
            weiDecimals: number;
        };
        fullName: string | null;
        deployerTradingFeeShare: string;
        spots: number[];
        maxSupply: string | null;
        hyperliquidityGenesisBalance: string;
        totalGenesisBalanceWei: string;
        userGenesisBalances: [`0x${string}`, string][];
        existingTokenGenesisBalances: [number, string][];
        blacklistUsers: `0x${string}`[];
    }[], "Array of deploy states for tokens.">]>;
    /** Status of the deploy auction. */
    readonly gasAuction: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Current gas. */
        readonly currentGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Current gas.">]>;
        /** Duration in seconds. */
        readonly durationSeconds: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in seconds.">]>;
        /** Ending gas. */
        readonly endGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Ending gas.">]>;
        /** Starting gas. */
        readonly startGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Starting gas.">]>;
        /** Auction start time (seconds since epoch). */
        readonly startTimeSeconds: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Auction start time (seconds since epoch).">]>;
    }, undefined>, v.DescriptionAction<{
        currentGas: string | null;
        durationSeconds: number;
        endGas: string | null;
        startGas: string;
        startTimeSeconds: number;
    }, "Status of the deploy auction.">]>;
}, undefined>, v.DescriptionAction<{
    states: {
        token: number;
        spec: {
            name: string;
            szDecimals: number;
            weiDecimals: number;
        };
        fullName: string | null;
        deployerTradingFeeShare: string;
        spots: number[];
        maxSupply: string | null;
        hyperliquidityGenesisBalance: string;
        totalGenesisBalanceWei: string;
        userGenesisBalances: [`0x${string}`, string][];
        existingTokenGenesisBalances: [number, string][];
        blacklistUsers: `0x${string}`[];
    }[];
    gasAuction: {
        currentGas: string | null;
        durationSeconds: number;
        endGas: string | null;
        startGas: string;
        startTimeSeconds: number;
    };
}, "Deploy state for spot tokens.">]>;
export type SpotDeployStateResponse = v.InferOutput<typeof SpotDeployStateResponse>;
/** Request parameters for the {@linkcode spotDeployState} function. */
export type SpotDeployStateParameters = Omit<v.InferInput<typeof SpotDeployStateRequest>, "type">;
/**
 * Request spot deploy state.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Deploy state for spot tokens.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-deploy-auction
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotDeployState } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotDeployState(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function spotDeployState(config: InfoRequestConfig, params: DeepImmutable<SpotDeployStateParameters>, signal?: AbortSignal): Promise<SpotDeployStateResponse>;
//# sourceMappingURL=spotDeployState.d.ts.map