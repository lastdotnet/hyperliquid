import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Cancel order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export declare const CancelRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of action.">]>;
        /** Orders to cancel. */
        readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Order ID. */
            readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            a: number;
            o: number;
        }[], "Orders to cancel.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "cancel";
        cancels: {
            a: number;
            o: number;
        }[];
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
    /** Vault address (for vault trading). */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Vault address (for vault trading).">]>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "cancel";
        cancels: {
            a: number;
            o: number;
        }[];
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    vaultAddress?: `0x${string}` | undefined;
    expiresAfter?: number | undefined;
}, "Cancel order(s).">]>;
export type CancelRequest = v.InferOutput<typeof CancelRequest>;
/** Response for order cancellation. */
export declare const CancelResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Array of statuses or error messages. */
            readonly statuses: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.LiteralSchema<"success", undefined>, v.ObjectSchema<{
                /** Error message. */
                readonly error: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
            }, undefined>], undefined>, undefined>, v.DescriptionAction<("success" | {
                error: string;
            })[], "Array of statuses or error messages.">]>;
        }, undefined>, v.DescriptionAction<{
            statuses: ("success" | {
                error: string;
            })[];
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "cancel";
        data: {
            statuses: ("success" | {
                error: string;
            })[];
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "cancel";
        data: {
            statuses: ("success" | {
                error: string;
            })[];
        };
    };
}, "Response for order cancellation.">]>;
export type CancelResponse = v.InferOutput<typeof CancelResponse>;
/** Successful variant of {@linkcode CancelResponse} without errors. */
export declare const CancelSuccessResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Array of success statuses. */
            readonly statuses: v.SchemaWithPipe<readonly [v.ArraySchema<v.LiteralSchema<"success", undefined>, undefined>, v.DescriptionAction<"success"[], "Array of success statuses.">]>;
        }, undefined>, v.DescriptionAction<{
            statuses: "success"[];
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "cancel";
        data: {
            statuses: "success"[];
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "cancel";
        data: {
            statuses: "success"[];
        };
    };
}, "Successful variant of `CancelResponse` without errors.">]>;
export type CancelSuccessResponse = v.InferOutput<typeof CancelSuccessResponse>;
/** Action parameters for the {@linkcode cancel} function. */
export type CancelParameters = ExtractRequestAction<v.InferInput<typeof CancelRequest>>;
/** Request options for the {@linkcode cancel} function. */
export type CancelOptions = ExtractRequestOptions<v.InferInput<typeof CancelRequest>>;
/**
 * Cancel order(s).
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful variant of {@link CancelResponse} without error statuses.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cancel } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await cancel(
 *   { transport, wallet },
 *   {
 *     cancels: [
 *       { a: 0, o: 123 },
 *     ],
 *   },
 * );
 * ```
 */
export declare function cancel(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<CancelParameters>, opts?: CancelOptions): Promise<CancelSuccessResponse>;
//# sourceMappingURL=cancel.d.ts.map