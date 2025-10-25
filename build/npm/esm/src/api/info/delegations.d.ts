import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user staking delegations.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export declare const DelegationsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"delegations", undefined>, v.DescriptionAction<"delegations", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "delegations";
    user: `0x${string}`;
}, "Request user staking delegations.">]>;
export type DelegationsRequest = v.InferOutput<typeof DelegationsRequest>;
/**
 * Array of user's delegations to validators.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 */
export declare const DelegationsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Validator address. */
    readonly validator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Validator address.">]>;
    /** Amount of tokens delegated to the validator. */
    readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of tokens delegated to the validator.">]>;
    /** Locked until timestamp (in ms since epoch). */
    readonly lockedUntilTimestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Locked until timestamp (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    validator: `0x${string}`;
    amount: string;
    lockedUntilTimestamp: number;
}, "User delegation to a validator.">]>, undefined>, v.DescriptionAction<{
    validator: `0x${string}`;
    amount: string;
    lockedUntilTimestamp: number;
}[], "Array of user's delegations to validators.">]>;
export type DelegationsResponse = v.InferOutput<typeof DelegationsResponse>;
/** Request parameters for the {@linkcode delegations} function. */
export type DelegationsParameters = Omit<v.InferInput<typeof DelegationsRequest>, "type">;
/**
 * Request user staking delegations.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's delegations to validators.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-delegations
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegations } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await delegations(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function delegations(config: InfoRequestConfig, params: DeepImmutable<DelegationsParameters>, signal?: AbortSignal): Promise<DelegationsResponse>;
//# sourceMappingURL=delegations.d.ts.map