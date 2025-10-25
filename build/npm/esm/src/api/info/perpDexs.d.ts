import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request all perpetual dexs.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
export declare const PerpDexsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDexs", undefined>, v.DescriptionAction<"perpDexs", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "perpDexs";
}, "Request all perpetual dexs.">]>;
export type PerpDexsRequest = v.InferOutput<typeof PerpDexsRequest>;
/**
 * Array of perpetual dexes (null is main dex).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 */
export declare const PerpDexsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.NullableSchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Short name of the perpetual dex. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Short name of the perpetual dex.">]>;
    /** Complete name of the perpetual dex. */
    readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Complete name of the perpetual dex.">]>;
    /** Hex address of the dex deployer. */
    readonly deployer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Hex address of the dex deployer.">]>;
    /** Hex address of the oracle updater, or null if not available. */
    readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Hex address of the oracle updater, or null if not available.">]>;
    /** Hex address of the fee recipient, or null if not available. */
    readonly feeRecipient: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Hex address of the fee recipient, or null if not available.">]>;
    /** Mapping of asset names to their streaming open interest caps. */
    readonly assetToStreamingOiCap: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.StringSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[string, string][], "Mapping of asset names to their streaming open interest caps.">]>;
}, undefined>, v.DescriptionAction<{
    name: string;
    fullName: string;
    deployer: `0x${string}`;
    oracleUpdater: `0x${string}` | null;
    feeRecipient: `0x${string}` | null;
    assetToStreamingOiCap: [string, string][];
}, " Perpetual dex metadata.">]>, undefined>, undefined>, v.DescriptionAction<({
    name: string;
    fullName: string;
    deployer: `0x${string}`;
    oracleUpdater: `0x${string}` | null;
    feeRecipient: `0x${string}` | null;
    assetToStreamingOiCap: [string, string][];
} | null)[], "Array of perpetual dexes (null is main dex).">]>;
export type PerpDexsResponse = v.InferOutput<typeof PerpDexsResponse>;
/**
 * Request all perpetual dexs.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of perpetual dexes (null is main dex).
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-all-perpetual-dexs
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDexs } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await perpDexs({ transport });
 * ```
 */
export declare function perpDexs(config: InfoRequestConfig, signal?: AbortSignal): Promise<PerpDexsResponse>;
//# sourceMappingURL=perpDexs.d.ts.map