import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Modify a vault's configuration.
 * @see null
 */
export declare const VaultModifyRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultModify", undefined>, v.DescriptionAction<"vaultModify", "Type of action.">]>;
        /** Vault address. */
        readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
        /** Allow deposits from followers (default: null). */
        readonly allowDeposits: v.SchemaWithPipe<readonly [v.OptionalSchema<v.NullableSchema<v.BooleanSchema<undefined>, undefined>, null>, v.DescriptionAction<boolean | null, "Allow deposits from followers.">]>;
        /** Always close positions on withdrawal (default: null). */
        readonly alwaysCloseOnWithdraw: v.SchemaWithPipe<readonly [v.OptionalSchema<v.NullableSchema<v.BooleanSchema<undefined>, undefined>, null>, v.DescriptionAction<boolean | null, "Always close positions on withdrawal.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "vaultModify";
        vaultAddress: `0x${string}`;
        allowDeposits: boolean | null;
        alwaysCloseOnWithdraw: boolean | null;
    }, "Action to perform.">]>;
    /** Unique request identifier (current timestamp in ms). */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    /** Cryptographic signature. */
    readonly signature: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "First 32-byte component of ECDSA signature.">]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Second 32-byte component of ECDSA signature.">]>;
        readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<27, undefined>, v.LiteralSchema<28, undefined>], undefined>]>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
    }, undefined>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components for Ethereum typed data.">]>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "Cryptographic signature.">]>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "vaultModify";
        vaultAddress: `0x${string}`;
        allowDeposits: boolean | null;
        alwaysCloseOnWithdraw: boolean | null;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Modify a vault's configuration.">]>;
export type VaultModifyRequest = v.InferOutput<typeof VaultModifyRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode vaultModify} function. */
export type VaultModifyParameters = ExtractRequestAction<v.InferInput<typeof VaultModifyRequest>>;
/** Request options for the {@linkcode vaultModify} function. */
export type VaultModifyOptions = ExtractRequestOptions<v.InferInput<typeof VaultModifyRequest>>;
/**
 * Modify a vault's configuration.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { vaultModify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultModify(
 *   { transport, wallet },
 *   {
 *     vaultAddress: "0x...",
 *     allowDeposits: true,
 *     alwaysCloseOnWithdraw: false,
 *   },
 * );
 * ```
 */
export declare function vaultModify(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<VaultModifyParameters>, opts?: VaultModifyOptions): Promise<SuccessResponse>;
//# sourceMappingURL=vaultModify.d.ts.map