import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request validator L1 votes.
 * @see null
 */
export declare const ValidatorL1VotesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"validatorL1Votes", undefined>, v.DescriptionAction<"validatorL1Votes", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "validatorL1Votes";
}, "Request validator L1 votes.">]>;
export type ValidatorL1VotesRequest = v.InferOutput<typeof ValidatorL1VotesRequest>;
/**
 * Array of L1 governance votes cast by validators.
 * @see null
 */
export declare const ValidatorL1VotesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Timestamp when the vote expires (in ms since epoch). */
    readonly expireTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.DescriptionAction<number, "Timestamp when the vote expires (in ms since epoch).">]>;
    /** Type of the vote. */
    readonly action: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        readonly D: v.StringSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
        readonly C: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    }, undefined>], undefined>, v.DescriptionAction<{
        D: string;
    } | {
        C: string[];
    }, "Type of the vote.">]>;
    /** List of validator addresses that cast this vote. */
    readonly votes: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of validator addresses that cast this vote.">]>;
}, undefined>, v.DescriptionAction<{
    expireTime: number;
    action: {
        D: string;
    } | {
        C: string[];
    };
    votes: `0x${string}`[];
}, "L1 governance vote cast by validators.">]>, undefined>, v.DescriptionAction<{
    expireTime: number;
    action: {
        D: string;
    } | {
        C: string[];
    };
    votes: `0x${string}`[];
}[], "Array of L1 governance votes cast by validators.">]>;
export type ValidatorL1VotesResponse = v.InferOutput<typeof ValidatorL1VotesResponse>;
/**
 * Request validator L1 votes.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of L1 governance votes cast by validators.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { validatorL1Votes } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await validatorL1Votes({ transport });
 * ```
 */
export declare function validatorL1Votes(config: InfoRequestConfig, signal?: AbortSignal): Promise<ValidatorL1VotesResponse>;
//# sourceMappingURL=validatorL1Votes.d.ts.map