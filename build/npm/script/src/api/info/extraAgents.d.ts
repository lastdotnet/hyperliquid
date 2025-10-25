import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user extra agents.
 * @see null
 */
export declare const ExtraAgentsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"extraAgents", undefined>, v.DescriptionAction<"extraAgents", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "extraAgents";
    user: `0x${string}`;
}, "Request user extra agents.">]>;
export type ExtraAgentsRequest = v.InferOutput<typeof ExtraAgentsRequest>;
/**
 * Array of extra agent details for a user.
 * @see null
 */
export declare const ExtraAgentsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Extra agent address. */
    readonly address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Extra agent address.">]>;
    /** Extra agent name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Extra agent name.">]>;
    /** Validity period as a timestamp (in ms since epoch). */
    readonly validUntil: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Validity period as a timestamp (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    address: `0x${string}`;
    name: string;
    validUntil: number;
}, "Extra agent details for a user.">]>, undefined>, v.DescriptionAction<{
    address: `0x${string}`;
    name: string;
    validUntil: number;
}[], "Array of extra agent details for a user.">]>;
export type ExtraAgentsResponse = v.InferOutput<typeof ExtraAgentsResponse>;
/** Request parameters for the {@linkcode extraAgents} function. */
export type ExtraAgentsParameters = Omit<v.InferInput<typeof ExtraAgentsRequest>, "type">;
/**
 * Request user extra agents.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of extra agent details for a user.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { extraAgents } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await extraAgents(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function extraAgents(config: InfoRequestConfig, params: DeepImmutable<ExtraAgentsParameters>, signal?: AbortSignal): Promise<ExtraAgentsResponse>;
//# sourceMappingURL=extraAgents.d.ts.map