import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request a list of vaults less than 2 hours old.
 * @see null
 */
export declare const VaultSummariesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultSummaries", undefined>, v.DescriptionAction<"vaultSummaries", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "vaultSummaries";
}, "Request a list of vaults less than 2 hours old.">]>;
export type VaultSummariesRequest = v.InferOutput<typeof VaultSummariesRequest>;
/**
 * Array of vaults less than 2 hours old.
 * @see null
 */
export declare const VaultSummariesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Vault name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Vault name.">]>;
    /** Vault address. */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    /** Leader address. */
    readonly leader: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Leader address.">]>;
    /** Total value locked. */
    readonly tvl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total value locked.">]>;
    /** Vault closure status. */
    readonly isClosed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Vault closure status.">]>;
    /** Vault relationship type. */
    readonly relationship: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        /** Relationship type. */
        readonly type: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"normal", undefined>, v.LiteralSchema<"child", undefined>], undefined>, v.DescriptionAction<"normal" | "child", "Relationship type.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Relationship type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"parent", undefined>, v.DescriptionAction<"parent", "Relationship type.">]>;
        /** Child vault information. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Child vault addresses. */
            readonly childAddresses: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "Child vault addresses.">]>;
        }, undefined>, v.DescriptionAction<{
            childAddresses: `0x${string}`[];
        }, "Child vault information.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "normal" | "child";
    } | {
        type: "parent";
        data: {
            childAddresses: `0x${string}`[];
        };
    }, "Vault relationship type.">]>;
    /** Creation timestamp. */
    readonly createTimeMillis: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Creation timestamp.">]>;
}, undefined>, v.DescriptionAction<{
    name: string;
    vaultAddress: `0x${string}`;
    leader: `0x${string}`;
    tvl: string;
    isClosed: boolean;
    relationship: {
        type: "normal" | "child";
    } | {
        type: "parent";
        data: {
            childAddresses: `0x${string}`[];
        };
    };
    createTimeMillis: number;
}, "Summary of a vault.">]>, undefined>, v.DescriptionAction<{
    name: string;
    vaultAddress: `0x${string}`;
    leader: `0x${string}`;
    tvl: string;
    isClosed: boolean;
    relationship: {
        type: "normal" | "child";
    } | {
        type: "parent";
        data: {
            childAddresses: `0x${string}`[];
        };
    };
    createTimeMillis: number;
}[], "Array of vaults less than 2 hours old.">]>;
export type VaultSummariesResponse = v.InferOutput<typeof VaultSummariesResponse>;
/**
 * Request a list of vaults less than 2 hours old.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of vaults less than 2 hours old.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { vaultSummaries } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await vaultSummaries({ transport });
 * ```
 */
export declare function vaultSummaries(config: InfoRequestConfig, signal?: AbortSignal): Promise<VaultSummariesResponse>;
//# sourceMappingURL=vaultSummaries.d.ts.map