import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user TWAP slice fills by time.
 * @see null
 */
export declare const UserTwapSliceFillsByTimeRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userTwapSliceFillsByTime", undefined>, v.DescriptionAction<"userTwapSliceFillsByTime", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time (in ms since epoch).">]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null | undefined, "End time (in ms since epoch).">]>;
    /** If true, partial fills are aggregated when a crossing order fills multiple resting orders. */
    readonly aggregateByTime: v.SchemaWithPipe<readonly [v.OptionalSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | undefined, "If true, partial fills are aggregated when a crossing order fills multiple resting orders.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userTwapSliceFillsByTime";
    user: `0x${string}`;
    startTime: number;
    endTime?: number | null | undefined;
    aggregateByTime?: boolean | undefined;
}, "Request user TWAP slice fills by time.">]>;
export type UserTwapSliceFillsByTimeRequest = v.InferOutput<typeof UserTwapSliceFillsByTimeRequest>;
/**
 * Array of user's twap slice fill by time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-twap-slice-fills
 */
export declare const UserTwapSliceFillsByTimeResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Fill details for the TWAP slice. */
    readonly fill: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
        readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Start position size.">]>;
        readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
        readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Realized PnL.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
        readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
        readonly twapId: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "ID of the TWAP.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    }, "TWAP fill record.">]>;
    /** ID of the TWAP. */
    readonly twapId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "ID of the TWAP.">]>;
}, undefined>, v.DescriptionAction<{
    fill: {
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    };
    twapId: number;
}, "User twap slice fill.">]>, undefined>, v.DescriptionAction<{
    fill: {
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    };
    twapId: number;
}[], "Array of user's twap slice fill by time.">]>;
export type UserTwapSliceFillsByTimeResponse = v.InferOutput<typeof UserTwapSliceFillsByTimeResponse>;
/** Request parameters for the {@linkcode userTwapSliceFillsByTime} function. */
export type UserTwapSliceFillsByTimeParameters = Omit<v.InferInput<typeof UserTwapSliceFillsByTimeRequest>, "type">;
/**
 * Request user TWAP slice fills by time.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's twap slice fill by time.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userTwapSliceFillsByTime } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userTwapSliceFillsByTime(
 *   { transport },
 *   { user: "0x...", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
export declare function userTwapSliceFillsByTime(config: InfoRequestConfig, params: DeepImmutable<UserTwapSliceFillsByTimeParameters>, signal?: AbortSignal): Promise<UserTwapSliceFillsByTimeResponse>;
//# sourceMappingURL=userTwapSliceFillsByTime.d.ts.map