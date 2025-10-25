import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request token details.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
export declare const TokenDetailsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"tokenDetails", undefined>, v.DescriptionAction<"tokenDetails", "Type of request.">]>;
    /** Token ID. */
    readonly tokenId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, v.DescriptionAction<`0x${string}`, "Token ID.">]>;
}, undefined>, v.DescriptionAction<{
    type: "tokenDetails";
    tokenId: `0x${string}`;
}, "Request token details.">]>;
export type TokenDetailsRequest = v.InferOutput<typeof TokenDetailsRequest>;
/**
 * Details of a token.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
export declare const TokenDetailsResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Name of the token. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the token.">]>;
    /** Maximum supply of the token. */
    readonly maxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Maximum supply of the token.">]>;
    /** Total supply of the token. */
    readonly totalSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total supply of the token.">]>;
    /** Circulating supply of the token. */
    readonly circulatingSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Circulating supply of the token.">]>;
    /** Decimal places for the minimum tradable unit. */
    readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Decimal places for the minimum tradable unit.">]>;
    /** Decimal places for the token's smallest unit. */
    readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Decimal places for the token's smallest unit.">]>;
    /** Mid price of the token. */
    readonly midPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mid price of the token.">]>;
    /** Mark price of the token. */
    readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Mark price of the token.">]>;
    /** Previous day's price of the token. */
    readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Previous day's price of the token.">]>;
    /** Genesis data for the token. */
    readonly genesis: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
        /** User balances. */
        readonly userBalances: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.StringSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "User balances.">]>;
        /** Existing token balances. */
        readonly existingTokenBalances: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.StringSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Existing token balances.">]>;
        /** Blacklisted users. */
        readonly blacklistUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "Blacklisted users.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        userBalances: [`0x${string}`, string][];
        existingTokenBalances: [number, string][];
        blacklistUsers: `0x${string}`[];
    } | null, "Genesis data for the token.">]>;
    /** Deployer address. */
    readonly deployer: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Deployer address.">]>;
    /** Gas used during token deployment. */
    readonly deployGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Gas used during token deployment.">]>;
    /** Deployment time. */
    readonly deployTime: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Deployment time.">]>;
    /** Seeded USDC amount for the token. */
    readonly seededUsdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Seeded USDC amount for the token.">]>;
    /** Non-circulating user balances of the token. */
    readonly nonCirculatingUserBalances: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.StringSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "Non-circulating user balances of the token.">]>;
    /** Future emissions amount. */
    readonly futureEmissions: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Future emissions amount.">]>;
}, undefined>, v.DescriptionAction<{
    name: string;
    maxSupply: string;
    totalSupply: string;
    circulatingSupply: string;
    szDecimals: number;
    weiDecimals: number;
    midPx: string;
    markPx: string;
    prevDayPx: string;
    genesis: {
        userBalances: [`0x${string}`, string][];
        existingTokenBalances: [number, string][];
        blacklistUsers: `0x${string}`[];
    } | null;
    deployer: `0x${string}` | null;
    deployGas: string | null;
    deployTime: string | null;
    seededUsdc: string;
    nonCirculatingUserBalances: [`0x${string}`, string][];
    futureEmissions: string;
}, "Details of a token.">]>;
export type TokenDetailsResponse = v.InferOutput<typeof TokenDetailsResponse>;
/** Request parameters for the {@linkcode tokenDetails} function. */
export type TokenDetailsParameters = Omit<v.InferInput<typeof TokenDetailsRequest>, "type">;
/**
 * Request token details.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Details of a token.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { tokenDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await tokenDetails(
 *   { transport },
 *   { tokenId: "0x..." },
 * );
 * ```
 */
export declare function tokenDetails(config: InfoRequestConfig, params: DeepImmutable<TokenDetailsParameters>, signal?: AbortSignal): Promise<TokenDetailsResponse>;
//# sourceMappingURL=tokenDetails.d.ts.map