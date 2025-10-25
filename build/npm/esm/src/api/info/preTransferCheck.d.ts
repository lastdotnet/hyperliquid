import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user existence check before transfer.
 * @see null
 */
export declare const PreTransferCheckRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"preTransferCheck", undefined>, v.DescriptionAction<"preTransferCheck", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Source address. */
    readonly source: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Source address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "preTransferCheck";
    user: `0x${string}`;
    source: `0x${string}`;
}, "Request user existence check before transfer.">]>;
export type PreTransferCheckRequest = v.InferOutput<typeof PreTransferCheckRequest>;
/**
 * Pre-transfer user existence check result.
 * @see null
 */
export declare const PreTransferCheckResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Activation fee. */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Activation fee.">]>;
    /** Whether the user is sanctioned. */
    readonly isSanctioned: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the user is sanctioned.">]>;
    /** Whether the user exists. */
    readonly userExists: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the user exists.">]>;
    /** Whether the user has sent a transaction. */
    readonly userHasSentTx: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the user has sent a transaction.">]>;
}, undefined>, v.DescriptionAction<{
    fee: string;
    isSanctioned: boolean;
    userExists: boolean;
    userHasSentTx: boolean;
}, "Pre-transfer user existence check result.">]>;
export type PreTransferCheckResponse = v.InferOutput<typeof PreTransferCheckResponse>;
/** Request parameters for the {@linkcode preTransferCheck} function. */
export type PreTransferCheckParameters = Omit<v.InferInput<typeof PreTransferCheckRequest>, "type">;
/**
 * Request user existence check before transfer.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Pre-transfer user existence check result.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { preTransferCheck } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await preTransferCheck(
 *   { transport },
 *   { user: "0x...", source: "0x..." },
 * );
 * ```
 */
export declare function preTransferCheck(config: InfoRequestConfig, params: DeepImmutable<PreTransferCheckParameters>, signal?: AbortSignal): Promise<PreTransferCheckResponse>;
//# sourceMappingURL=preTransferCheck.d.ts.map