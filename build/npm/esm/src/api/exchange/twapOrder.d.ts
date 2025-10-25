import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Place a TWAP order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 */
export declare const TwapOrderRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"twapOrder", undefined>, v.DescriptionAction<"twapOrder", "Type of action.">]>;
        /** Twap parameters. */
        readonly twap: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Position side (`true` for long, `false` for short). */
            readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
            /** Size (in base currency units). */
            readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
            /** Is reduce-only? */
            readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
            /** TWAP duration in minutes. */
            readonly m: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "TWAP duration in minutes.">]>;
            /** Enable random order timing. */
            readonly t: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Enable random order timing.">]>;
        }, undefined>, v.DescriptionAction<{
            a: number;
            b: boolean;
            s: string;
            r: boolean;
            m: number;
            t: boolean;
        }, "Twap parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "twapOrder";
        twap: {
            a: number;
            b: boolean;
            s: string;
            r: boolean;
            m: number;
            t: boolean;
        };
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
        type: "twapOrder";
        twap: {
            a: number;
            b: boolean;
            s: string;
            r: boolean;
            m: number;
            t: boolean;
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    vaultAddress?: `0x${string}` | undefined;
    expiresAfter?: number | undefined;
}, "Place a TWAP order.">]>;
export type TwapOrderRequest = v.InferOutput<typeof TwapOrderRequest>;
/** Response for creating a TWAP order. */
export declare const TwapOrderResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"twapOrder", undefined>, v.DescriptionAction<"twapOrder", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Status of the operation or error message. */
            readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                /** Running order status. */
                readonly running: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** TWAP ID. */
                    readonly twapId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "TWAP ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    twapId: number;
                }, "Running order status.">]>;
            }, undefined>, v.ObjectSchema<{
                /** Error message. */
                readonly error: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
            }, undefined>], undefined>, v.DescriptionAction<{
                running: {
                    twapId: number;
                };
            } | {
                error: string;
            }, "Status of the operation or error message.">]>;
        }, undefined>, v.DescriptionAction<{
            status: {
                running: {
                    twapId: number;
                };
            } | {
                error: string;
            };
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "twapOrder";
        data: {
            status: {
                running: {
                    twapId: number;
                };
            } | {
                error: string;
            };
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "twapOrder";
        data: {
            status: {
                running: {
                    twapId: number;
                };
            } | {
                error: string;
            };
        };
    };
}, "Response for creating a TWAP order.">]>;
export type TwapOrderResponse = v.InferOutput<typeof TwapOrderResponse>;
/** Successful variant of {@linkcode TwapOrderResponse} without errors. */
export declare const TwapOrderSuccessResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"twapOrder", undefined>, v.DescriptionAction<"twapOrder", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Status of the operation. */
            readonly status: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Running order status. */
                readonly running: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** TWAP ID. */
                    readonly twapId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "TWAP ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    twapId: number;
                }, "Running order status.">]>;
            }, undefined>, v.DescriptionAction<{
                running: {
                    twapId: number;
                };
            }, "Status of the operation.">]>;
        }, undefined>, v.DescriptionAction<{
            status: {
                running: {
                    twapId: number;
                };
            };
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "twapOrder";
        data: {
            status: {
                running: {
                    twapId: number;
                };
            };
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "twapOrder";
        data: {
            status: {
                running: {
                    twapId: number;
                };
            };
        };
    };
}, "Successful variant of `TwapOrderResponse` without errors.">]>;
export type TwapOrderSuccessResponse = v.InferOutput<typeof TwapOrderSuccessResponse>;
/** Action parameters for the {@linkcode twapOrder} function. */
export type TwapOrderParameters = ExtractRequestAction<v.InferInput<typeof TwapOrderRequest>>;
/** Request options for the {@linkcode twapOrder} function. */
export type TwapOrderOptions = ExtractRequestOptions<v.InferInput<typeof TwapOrderRequest>>;
/**
 * Place a TWAP order.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful variant of {@link TwapOrderResponse} without error status.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-a-twap-order
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { twapOrder } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await twapOrder(
 *   { transport, wallet },
 *   {
 *     twap: {
 *       a: 0,
 *       b: true,
 *       s: "1",
 *       r: false,
 *       m: 10,
 *       t: true,
 *     },
 *   },
 * );
 * ```
 */
export declare function twapOrder(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<TwapOrderParameters>, opts?: TwapOrderOptions): Promise<TwapOrderSuccessResponse>;
//# sourceMappingURL=twapOrder.d.ts.map