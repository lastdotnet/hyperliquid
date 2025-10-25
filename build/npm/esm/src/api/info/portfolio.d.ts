import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user portfolio.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
export declare const PortfolioRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"portfolio", undefined>, v.DescriptionAction<"portfolio", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "portfolio";
    user: `0x${string}`;
}, "Request user portfolio.">]>;
export type PortfolioRequest = v.InferOutput<typeof PortfolioRequest>;
/**
 * Portfolio metrics grouped by time periods.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
export declare const PortfolioResponse: v.SchemaWithPipe<readonly [v.TupleSchema<[v.TupleSchema<[v.LiteralSchema<"day", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"week", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"month", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"allTime", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpDay", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpWeek", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpMonth", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpAllTime", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** History entries for account value as [timestamp, value]. */
    readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
    /** History entries for profit and loss as [timestamp, value]. */
    readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
    /** Volume metric for the portfolio. */
    readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
}, undefined>, v.DescriptionAction<{
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}, "Portfolio metrics snapshot.">]>], undefined>], undefined>, v.DescriptionAction<[["day", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["week", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["month", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["allTime", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["perpDay", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["perpWeek", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["perpMonth", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}], ["perpAllTime", {
    accountValueHistory: [number, string][];
    pnlHistory: [number, string][];
    vlm: string;
}]], "Portfolio metrics grouped by time periods.">]>;
export type PortfolioResponse = v.InferOutput<typeof PortfolioResponse>;
/** Request parameters for the {@linkcode portfolio} function. */
export type PortfolioParameters = Omit<v.InferInput<typeof PortfolioRequest>, "type">;
/**
 * Request user portfolio.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Portfolio metrics grouped by time periods.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { portfolio } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await portfolio(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function portfolio(config: InfoRequestConfig, params: DeepImmutable<PortfolioParameters>, signal?: AbortSignal): Promise<PortfolioResponse>;
//# sourceMappingURL=portfolio.d.ts.map