import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request leading vaults for a user.
 * @see null
 */
export declare const LeadingVaultsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"leadingVaults", undefined>, v.DescriptionAction<"leadingVaults", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "leadingVaults";
    user: `0x${string}`;
}, "Request leading vaults for a user.">]>;
export type LeadingVaultsRequest = v.InferOutput<typeof LeadingVaultsRequest>;
/**
 * Array of leading vaults for a user.
 * @see null
 */
export declare const LeadingVaultsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Vault address. */
    readonly address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    /** Vault name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Vault name.">]>;
}, undefined>, v.DescriptionAction<{
    address: `0x${string}`;
    name: string;
}, "Vault that a user is leading.">]>, undefined>, v.DescriptionAction<{
    address: `0x${string}`;
    name: string;
}[], "Array of leading vaults for a user.">]>;
export type LeadingVaultsResponse = v.InferOutput<typeof LeadingVaultsResponse>;
/** Request parameters for the {@linkcode leadingVaults} function. */
export type LeadingVaultsParameters = Omit<v.InferInput<typeof LeadingVaultsRequest>, "type">;
/**
 * Request leading vaults for a user.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of leading vaults for a user.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { leadingVaults } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await leadingVaults(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function leadingVaults(config: InfoRequestConfig, params: DeepImmutable<LeadingVaultsParameters>, signal?: AbortSignal): Promise<LeadingVaultsResponse>;
//# sourceMappingURL=leadingVaults.d.ts.map