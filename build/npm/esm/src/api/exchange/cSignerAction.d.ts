import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Jail or unjail self as a validator signer.
 * @see null
 */
export declare const CSignerActionRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
        /** Jail the signer. */
        readonly jailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Jail the signer.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
        /** Unjail the signer. */
        readonly unjailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unjail the signer.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "CSignerAction";
        jailSelf: null;
    } | {
        type: "CSignerAction";
        unjailSelf: null;
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
        type: "CSignerAction";
        jailSelf: null;
    } | {
        type: "CSignerAction";
        unjailSelf: null;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Jail or unjail self as a validator signer.">]>;
export type CSignerActionRequest = v.InferOutput<typeof CSignerActionRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode CSignerAction} function. */
export type CSignerActionParameters = ExtractRequestAction<v.InferInput<typeof CSignerActionRequest>>;
/** Request options for the {@linkcode CSignerAction} function. */
export type CSignerActionOptions = ExtractRequestOptions<v.InferInput<typeof CSignerActionRequest>>;
/**
 * Jail or unjail self as a validator signer.
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
 * import { cSignerAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * // Jail self
 * await cSignerAction(
 *   { transport, wallet },
 *   { jailSelf: null },
 * );
 *
 * // Unjail self
 * await cSignerAction(
 *   { transport, wallet },
 *   { unjailSelf: null },
 * );
 * ```
 */
export declare function cSignerAction(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<CSignerActionParameters>, opts?: CSignerActionOptions): Promise<SuccessResponse>;
//# sourceMappingURL=cSignerAction.d.ts.map