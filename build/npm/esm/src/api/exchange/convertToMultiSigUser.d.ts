import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/** Signers configuration for {@linkcode ConvertToMultiSigUserRequest}. */
export declare const ConvertToMultiSigUserRequestSigners: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
    /** List of authorized user addresses. */
    readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
    /** Minimum number of signatures required. */
    readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
}, undefined>, v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Convert a multi-signature account to a single-signature account.">]>], undefined>, v.DescriptionAction<{
    authorizedUsers: `0x${string}`[];
    threshold: number;
} | null, "Signers configuration for `ConvertToMultiSigUserRequest`">]>;
export type ConvertToMultiSigUserRequestSigners = v.InferOutput<typeof ConvertToMultiSigUserRequestSigners>;
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare const ConvertToMultiSigUserRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"convertToMultiSigUser", undefined>, v.DescriptionAction<"convertToMultiSigUser", "Type of action.">]>;
        /** Chain ID used for signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
        /** HyperLiquid network. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
        /**
         * Signers configuration.
         *
         * Must be {@linkcode ConvertToMultiSigUserRequestSigners} converted to a string via `JSON.stringify(...)`.
         */
        readonly signers: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
        }, undefined>, v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Convert a multi-signature account to a single-signature account.">]>], undefined>, v.DescriptionAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, "Signers configuration for `ConvertToMultiSigUserRequest`">]>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
        }, undefined>, v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Convert a multi-signature account to a single-signature account.">]>], undefined>, v.DescriptionAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, "Signers configuration for `ConvertToMultiSigUserRequest`">]>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>], undefined>, v.DescriptionAction<string, string>]>;
        /** Unique request identifier (current timestamp in ms). */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    }, undefined>, v.DescriptionAction<{
        type: "convertToMultiSigUser";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        signers: string;
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
}, undefined>, v.DescriptionAction<{
    action: {
        type: "convertToMultiSigUser";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        signers: string;
        nonce: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Convert a single-signature account to a multi-signature account or vice versa.">]>;
export type ConvertToMultiSigUserRequest = v.InferOutput<typeof ConvertToMultiSigUserRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode convertToMultiSigUser} function. */
export type ConvertToMultiSigUserParameters = ExtractRequestAction<v.InferInput<typeof ConvertToMultiSigUserRequest>>;
/** Request options for the {@linkcode convertToMultiSigUser} function. */
export type ConvertToMultiSigUserOptions = ExtractRequestOptions<v.InferInput<typeof ConvertToMultiSigUserRequest>>;
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
export declare const ConvertToMultiSigUserTypes: {
    "HyperliquidTransaction:ConvertToMultiSigUser": {
        name: string;
        type: string;
    }[];
};
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { convertToMultiSigUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * // Convert to multi-sig user
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   {
 *     signers: {
 *       authorizedUsers: ["0x...", "0x...", "0x..."],
 *       threshold: 2,
 *     },
 *   },
 * );
 *
 * // Convert to single-sig user
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   { signers: null },
 * );
 * ```
 */
export declare function convertToMultiSigUser(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<ConvertToMultiSigUserParameters>, opts?: ConvertToMultiSigUserOptions): Promise<SuccessResponse>;
//# sourceMappingURL=convertToMultiSigUser.d.ts.map