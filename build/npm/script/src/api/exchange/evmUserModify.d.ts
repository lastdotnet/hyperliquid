import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Configure block type for EVM transactions.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
 */
export declare const EvmUserModifyRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"evmUserModify", undefined>, v.DescriptionAction<"evmUserModify", "Type of action.">]>;
        /** `true` for large blocks, `false` for small blocks. */
        readonly usingBigBlocks: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for large blocks, `false` for small blocks.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "evmUserModify";
        usingBigBlocks: boolean;
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
        type: "evmUserModify";
        usingBigBlocks: boolean;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Configure block type for EVM transactions.">]>;
export type EvmUserModifyRequest = v.InferOutput<typeof EvmUserModifyRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode evmUserModify} function. */
export type EvmUserModifyParameters = ExtractRequestAction<v.InferInput<typeof EvmUserModifyRequest>>;
/** Request options for the {@linkcode evmUserModify} function. */
export type EvmUserModifyOptions = ExtractRequestOptions<v.InferInput<typeof EvmUserModifyRequest>>;
/**
 * Configure block type for EVM transactions.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Response for creating a sub-account.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm/dual-block-architecture
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { evmUserModify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await evmUserModify(
 *   { transport, wallet },
 *   { usingBigBlocks: true },
 * );
 * ```
 */
export declare function evmUserModify(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<EvmUserModifyParameters>, opts?: EvmUserModifyOptions): Promise<SuccessResponse>;
//# sourceMappingURL=evmUserModify.d.ts.map