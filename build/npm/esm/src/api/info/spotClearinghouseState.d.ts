import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request spot clearinghouse state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
export declare const SpotClearinghouseStateRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotClearinghouseState", undefined>, v.DescriptionAction<"spotClearinghouseState", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotClearinghouseState";
    user: `0x${string}`;
    dex?: string | undefined;
}, "Request spot clearinghouse state.">]>;
export type SpotClearinghouseStateRequest = v.InferOutput<typeof SpotClearinghouseStateRequest>;
/**
 * Account summary for spot trading.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 */
export declare const SpotClearinghouseStateResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Balance for each token. */
    readonly balances: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Unique identifier for the token. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
        /** Total balance. */
        readonly total: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total balance.">]>;
        /** Amount on hold. */
        readonly hold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount on hold.">]>;
        /** Entry notional value. */
        readonly entryNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Entry notional value.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        token: number;
        total: string;
        hold: string;
        entryNtl: string;
    }, "Balance for a specific spot token.">]>, undefined>, v.DescriptionAction<{
        coin: string;
        token: number;
        total: string;
        hold: string;
        entryNtl: string;
    }[], "Balance for each token.">]>;
    /** Escrowed balances. */
    readonly evmEscrows: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Unique identifier for the token. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
        /** Total balance. */
        readonly total: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total balance.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        token: number;
        total: string;
    }, "Escrowed balance for a specific asset.">]>, undefined>, undefined>, v.DescriptionAction<{
        coin: string;
        token: number;
        total: string;
    }[] | undefined, "Escrowed balances.">]>;
}, undefined>, v.DescriptionAction<{
    balances: {
        coin: string;
        token: number;
        total: string;
        hold: string;
        entryNtl: string;
    }[];
    evmEscrows?: {
        coin: string;
        token: number;
        total: string;
    }[] | undefined;
}, "Account summary for spot trading.">]>;
export type SpotClearinghouseStateResponse = v.InferOutput<typeof SpotClearinghouseStateResponse>;
/** Request parameters for the {@linkcode spotClearinghouseState} function. */
export type SpotClearinghouseStateParameters = Omit<v.InferInput<typeof SpotClearinghouseStateRequest>, "type">;
/**
 * Request spot clearinghouse state.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Account summary for spot trading.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-a-users-token-balances
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotClearinghouseState } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotClearinghouseState(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function spotClearinghouseState(config: InfoRequestConfig, params: DeepImmutable<SpotClearinghouseStateParameters>, signal?: AbortSignal): Promise<SpotClearinghouseStateResponse>;
//# sourceMappingURL=spotClearinghouseState.d.ts.map