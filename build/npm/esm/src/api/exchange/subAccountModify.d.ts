import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Modify a sub-account's.
 * @see null
 */
export declare const SubAccountModifyRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountModify", undefined>, v.DescriptionAction<"subAccountModify", "Type of action.">]>;
        /** Sub-account address to modify. */
        readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address to modify.">]>;
        /** New sub-account name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "New sub-account name.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "subAccountModify";
        subAccountUser: `0x${string}`;
        name: string;
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
        type: "subAccountModify";
        subAccountUser: `0x${string}`;
        name: string;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Modify a sub-account.">]>;
export type SubAccountModifyRequest = v.InferOutput<typeof SubAccountModifyRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode subAccountModify} function. */
export type SubAccountModifyParameters = ExtractRequestAction<v.InferInput<typeof SubAccountModifyRequest>>;
/** Request options for the {@linkcode subAccountModify} function. */
export type SubAccountModifyOptions = ExtractRequestOptions<v.InferInput<typeof SubAccountModifyRequest>>;
/**
 * Modify a sub-account's.
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
 * import { subAccountModify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountModify(
 *   { transport, wallet },
 *   { subAccountUser: "0x...", name: "..."  },
 * );
 * ```
 */
export declare function subAccountModify(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<SubAccountModifyParameters>, opts?: SubAccountModifyOptions): Promise<SuccessResponse>;
//# sourceMappingURL=subAccountModify.d.ts.map