import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Place an order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 */
export declare const OrderRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"order", undefined>, v.DescriptionAction<"order", "Type of action.">]>;
        /** Order parameters. */
        readonly orders: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
            readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
            readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
            readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
            readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly tif: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
                }, undefined>, v.DescriptionAction<{
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                }, "Limit order parameters.">]>;
            }, undefined>, v.ObjectSchema<{
                readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                    readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
                    readonly tpsl: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"tp", undefined>, v.LiteralSchema<"sl", undefined>], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
                }, undefined>, v.DescriptionAction<{
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                }, "Trigger order parameters.">]>;
            }, undefined>], undefined>, v.DescriptionAction<{
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            }, "Order type.">]>;
            readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        }, undefined>, v.DescriptionAction<{
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        }, "Place order parameters.">]>, undefined>, v.DescriptionAction<{
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        }[], "Order parameters.">]>;
        /**
         * Order grouping strategy:
         * - `na`: Standard order without grouping (default).
         * - `normalTpsl`: TP/SL order with fixed size that doesn't adjust with position changes.
         * - `positionTpsl`: TP/SL order that adjusts proportionally with the position size.
         */
        readonly grouping: v.SchemaWithPipe<readonly [v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"na", undefined>, v.LiteralSchema<"normalTpsl", undefined>, v.LiteralSchema<"positionTpsl", undefined>], undefined>, "na">, v.DescriptionAction<"na" | "normalTpsl" | "positionTpsl", string>]>;
        /** Builder fee. */
        readonly builder: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ObjectSchema<{
            /** Builder address. */
            readonly b: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
            /** Builder fee in 0.1bps (1 = 0.0001%). */
            readonly f: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Builder fee in 0.1bps (1 = 0.0001%).">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            b: `0x${string}`;
            f: number;
        } | undefined, "Builder fee.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "order";
        orders: {
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        }[];
        grouping: "na" | "normalTpsl" | "positionTpsl";
        builder?: {
            b: `0x${string}`;
            f: number;
        } | undefined;
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
        type: "order";
        orders: {
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        }[];
        grouping: "na" | "normalTpsl" | "positionTpsl";
        builder?: {
            b: `0x${string}`;
            f: number;
        } | undefined;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    vaultAddress?: `0x${string}` | undefined;
    expiresAfter?: number | undefined;
}, "Place an order(s).">]>;
export type OrderRequest = v.InferOutput<typeof OrderRequest>;
/** Response for order placement and batch modifications. */
export declare const OrderResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"order", undefined>, v.DescriptionAction<"order", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Array of statuses or error messages. */
            readonly statuses: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
                /** Resting order status. */
                readonly resting: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** Order ID. */
                    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
                    /** Client Order ID. */
                    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                }, "Resting order status.">]>;
            }, undefined>, v.ObjectSchema<{
                /** Filled order status. */
                readonly filled: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** Total size filled. */
                    readonly totalSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size filled.">]>;
                    /** Average price of fill. */
                    readonly avgPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Average price of fill.">]>;
                    /** Order ID. */
                    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
                    /** Client Order ID. */
                    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                }, "Filled order status.">]>;
            }, undefined>, v.ObjectSchema<{
                /** Error message. */
                readonly error: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
            }, undefined>], undefined>, undefined>, v.DescriptionAction<({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                error: string;
            })[], "Array of statuses or error messages.">]>;
        }, undefined>, v.DescriptionAction<{
            statuses: ({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                error: string;
            })[];
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "order";
        data: {
            statuses: ({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                error: string;
            })[];
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "order";
        data: {
            statuses: ({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                error: string;
            })[];
        };
    };
}, "Response for order placement and batch modifications.">]>;
export type OrderResponse = v.InferOutput<typeof OrderResponse>;
/** Successful variant of {@linkcode OrderResponse} without errors. */
export declare const OrderSuccessResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"order", undefined>, v.DescriptionAction<"order", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Array of successful order statuses. */
            readonly statuses: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
                /** Resting order status. */
                readonly resting: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** Order ID. */
                    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
                    /** Client Order ID. */
                    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                }, "Resting order status.">]>;
            }, undefined>, v.ObjectSchema<{
                /** Filled order status. */
                readonly filled: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** Total size filled. */
                    readonly totalSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total size filled.">]>;
                    /** Average price of fill. */
                    readonly avgPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Average price of fill.">]>;
                    /** Order ID. */
                    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
                    /** Client Order ID. */
                    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                }, "Filled order status.">]>;
            }, undefined>], undefined>, undefined>, v.DescriptionAction<({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            })[], "Array of successful order statuses.">]>;
        }, undefined>, v.DescriptionAction<{
            statuses: ({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            })[];
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "order";
        data: {
            statuses: ({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            })[];
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "order";
        data: {
            statuses: ({
                resting: {
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            } | {
                filled: {
                    totalSz: string;
                    avgPx: string;
                    oid: number;
                    cloid?: `0x${string}` | undefined;
                };
            })[];
        };
    };
}, "Successful variant of `OrderResponse` without errors.">]>;
export type OrderSuccessResponse = v.InferOutput<typeof OrderSuccessResponse>;
/** Action parameters for the {@linkcode order} function. */
export type OrderParameters = ExtractRequestAction<v.InferInput<typeof OrderRequest>>;
/** Request options for the {@linkcode order} function. */
export type OrderOptions = ExtractRequestOptions<v.InferInput<typeof OrderRequest>>;
/**
 * Place an order(s).
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful variant of {@link OrderResponse} without error statuses.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#place-an-order
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { order } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await order(
 *   { transport, wallet },
 *   {
 *     orders: [
 *       {
 *         a: 0,
 *         b: true,
 *         p: "30000",
 *         s: "0.1",
 *         r: false,
 *         t: { limit: { tif: "Gtc" } },
 *         c: "0x...",
 *       },
 *     ],
 *     grouping: "na",
 *   },
 * );
 * ```
 */
export declare function order(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<OrderParameters>, opts?: OrderOptions): Promise<OrderSuccessResponse>;
//# sourceMappingURL=order.d.ts.map