import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Create a vault.
 * @see null
 */
export declare const CreateVaultRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createVault", undefined>, v.DescriptionAction<"createVault", "Type of action.">]>;
        /** Vault name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 3, undefined>, v.DescriptionAction<string, "Vault name.">]>;
        /** Vault description. */
        readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 10, undefined>, v.DescriptionAction<string, "Vault description.">]>;
        /** Initial balance (float * 1e6). */
        readonly initialUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 100000000, undefined>, v.DescriptionAction<number, "Initial balance (float * 1e6).">]>;
        /** Unique request identifier (current timestamp in ms) (default: Date.now()). */
        readonly nonce: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, () => number>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    }, undefined>, v.DescriptionAction<{
        type: "createVault";
        name: string;
        description: string;
        initialUsd: number;
        nonce: number;
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
        type: "createVault";
        name: string;
        description: string;
        initialUsd: number;
        nonce: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Create a vault.">]>;
export type CreateVaultRequest = v.InferOutput<typeof CreateVaultRequest>;
/** Response for creating a vault. */
export declare const CreateVaultResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createVault", undefined>, v.DescriptionAction<"createVault", "Type of response.">]>;
        /** Vault address. */
        readonly data: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "createVault";
        data: `0x${string}`;
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "createVault";
        data: `0x${string}`;
    };
}, "Response for creating a vault.">]>;
export type CreateVaultResponse = v.InferOutput<typeof CreateVaultResponse>;
/** Action parameters for the {@linkcode createVault} function. */
export type CreateVaultParameters = ExtractRequestAction<v.InferInput<typeof CreateVaultRequest>>;
/** Request options for the {@linkcode createVault} function. */
export type CreateVaultOptions = ExtractRequestOptions<v.InferInput<typeof CreateVaultRequest>>;
/**
 * Create a vault.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Response for creating a vault.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { createVault } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createVault(
 *   { transport, wallet },
 *   {
 *     name: "...",
 *     description: "...",
 *     initialUsd: 100 * 1e6,
 *   },
 * );
 * ```
 */
export declare function createVault(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<CreateVaultParameters>, opts?: CreateVaultOptions): Promise<CreateVaultResponse>;
//# sourceMappingURL=createVault.d.ts.map