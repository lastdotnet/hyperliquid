import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Modify an order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export declare const ModifyRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"modify", undefined>, v.DescriptionAction<"modify", "Type of action.">]>;
        /** Order ID or Client Order ID. */
        readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
        /** New order parameters. */
        readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
        }, "Place order parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "modify";
        oid: number | `0x${string}`;
        order: {
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
        type: "modify";
        oid: number | `0x${string}`;
        order: {
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
}, "Modify an order.">]>;
export type ModifyRequest = v.InferOutput<typeof ModifyRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode modify} function. */
export type ModifyParameters = ExtractRequestAction<v.InferInput<typeof ModifyRequest>>;
/** Request options for the {@linkcode modify} function. */
export type ModifyOptions = ExtractRequestOptions<v.InferInput<typeof ModifyRequest>>;
/**
 * Modify an order.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { modify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await modify(
 *   { transport, wallet },
 *   {
 *     oid: 123,
 *     order: {
 *       a: 0,
 *       b: true,
 *       p: "31000",
 *       s: "0.2",
 *       r: false,
 *       t: { limit: { tif: "Gtc" } },
 *       c: "0x...",
 *     },
 *   },
 * );
 * ```
 */
export declare function modify(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<ModifyParameters>, opts?: ModifyOptions): Promise<SuccessResponse>;
//# sourceMappingURL=modify.d.ts.map