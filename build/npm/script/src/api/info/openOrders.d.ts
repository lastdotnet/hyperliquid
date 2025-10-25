import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request open orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
 */
export declare const OpenOrdersRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"openOrders", undefined>, v.DescriptionAction<"openOrders", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "openOrders";
    user: `0x${string}`;
    dex?: string | undefined;
}, "Request open orders.">]>;
export type OpenOrdersRequest = v.InferOutput<typeof OpenOrdersRequest>;
/**
 * Array of open orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
 */
export declare const OpenOrdersResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
    readonly limitPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Limit price.">]>;
    readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
    readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the order was placed (in ms since epoch).">]>;
    readonly origSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Original size at order placement.">]>;
    readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
    readonly reduceOnly: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if the order is reduce-only.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    side: "B" | "A";
    limitPx: string;
    sz: string;
    oid: number;
    timestamp: number;
    origSz: string;
    cloid?: `0x${string}` | undefined;
    reduceOnly?: true | undefined;
}, "Order details.">]>, undefined>, v.DescriptionAction<{
    coin: string;
    side: "B" | "A";
    limitPx: string;
    sz: string;
    oid: number;
    timestamp: number;
    origSz: string;
    cloid?: `0x${string}` | undefined;
    reduceOnly?: true | undefined;
}[], "Array of open orders.">]>;
export type OpenOrdersResponse = v.InferOutput<typeof OpenOrdersResponse>;
/** Request parameters for the {@linkcode openOrders} function. */
export type OpenOrdersParameters = Omit<v.InferInput<typeof OpenOrdersRequest>, "type">;
/**
 * Request open orders.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of open orders.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-open-orders
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { openOrders } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await openOrders(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function openOrders(config: InfoRequestConfig, params: DeepImmutable<OpenOrdersParameters>, signal?: AbortSignal): Promise<OpenOrdersResponse>;
//# sourceMappingURL=openOrders.d.ts.map