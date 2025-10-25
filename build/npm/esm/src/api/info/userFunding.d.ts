import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request array of user funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserFundingRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userFunding", undefined>, v.DescriptionAction<"userFunding", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time (in ms since epoch).">]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null | undefined, "End time (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    type: "userFunding";
    user: `0x${string}`;
    startTime: number;
    endTime?: number | null | undefined;
}, "Request array of user funding ledger updates.">]>;
export type UserFundingRequest = v.InferOutput<typeof UserFundingRequest>;
/**
 * Array of user funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserFundingResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Timestamp of the update (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the update (in ms since epoch).">]>;
    /** L1 transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
    /** Update details. */
    readonly delta: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"funding", undefined>, v.DescriptionAction<"funding", "Update type.">]>;
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Signed position size. */
        readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size.">]>;
        /** Applied funding rate. */
        readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Applied funding rate.">]>;
        /** Number of samples. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Number of samples.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "funding";
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }, "Update details.">]>;
}, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        type: "funding";
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    };
}, "User funding ledger update.">]>, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        type: "funding";
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    };
}[], "Array of user funding ledger updates.">]>;
export type UserFundingResponse = v.InferOutput<typeof UserFundingResponse>;
/** Request parameters for the {@linkcode userFunding} function. */
export type UserFundingParameters = Omit<v.InferInput<typeof UserFundingRequest>, "type">;
/**
 * Request array of user funding ledger updates.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user funding ledger updates.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userFunding } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userFunding(
 *   { transport },
 *   { user: "0x...", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
export declare function userFunding(config: InfoRequestConfig, params: DeepImmutable<UserFundingParameters>, signal?: AbortSignal): Promise<UserFundingResponse>;
//# sourceMappingURL=userFunding.d.ts.map