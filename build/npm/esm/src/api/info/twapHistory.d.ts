import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request twap history of a user.
 * @see null
 */
export declare const TwapHistoryRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"twapHistory", undefined>, v.DescriptionAction<"twapHistory", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "twapHistory";
    user: `0x${string}`;
}, "Request twap history of a user.">]>;
export type TwapHistoryRequest = v.InferOutput<typeof TwapHistoryRequest>;
/**
 * Array of user's TWAP history.
 * @see null
 */
export declare const TwapHistoryResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Creation time of the history record (in seconds since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Creation time of the history record (in seconds since epoch).">]>;
    /** State of the TWAP order. */
    readonly state: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly executedNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed notional value.">]>;
        readonly executedSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed size.">]>;
        readonly minutes: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in minutes.">]>;
        readonly randomize: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the TWAP randomizes execution.">]>;
        readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is reduce-only.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Order size.">]>;
        readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time of the TWAP order (in ms since epoch).">]>;
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        executedNtl: string;
        executedSz: string;
        minutes: number;
        randomize: boolean;
        reduceOnly: boolean;
        side: "B" | "A";
        sz: string;
        timestamp: number;
        user: `0x${string}`;
    }, "State of the TWAP order.">]>;
    /** Current status of the TWAP order. */
    readonly status: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
        readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"finished", undefined>, v.LiteralSchema<"activated", undefined>, v.LiteralSchema<"terminated", undefined>], undefined>, v.DescriptionAction<"finished" | "activated" | "terminated", "Status of the TWAP order.">]>;
    }, undefined>, v.ObjectSchema<{
        readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"error", undefined>, v.DescriptionAction<"error", "Status of the TWAP order.">]>;
        readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        status: "finished" | "activated" | "terminated";
    } | {
        status: "error";
        description: string;
    }, string>]>;
    /** ID of the TWAP. */
    readonly twapId: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "ID of the TWAP.">]>;
}, undefined>, v.DescriptionAction<{
    time: number;
    state: {
        coin: string;
        executedNtl: string;
        executedSz: string;
        minutes: number;
        randomize: boolean;
        reduceOnly: boolean;
        side: "B" | "A";
        sz: string;
        timestamp: number;
        user: `0x${string}`;
    };
    status: {
        status: "finished" | "activated" | "terminated";
    } | {
        status: "error";
        description: string;
    };
    twapId?: number | undefined;
}, "TWAP history record.">]>, undefined>, v.DescriptionAction<{
    time: number;
    state: {
        coin: string;
        executedNtl: string;
        executedSz: string;
        minutes: number;
        randomize: boolean;
        reduceOnly: boolean;
        side: "B" | "A";
        sz: string;
        timestamp: number;
        user: `0x${string}`;
    };
    status: {
        status: "finished" | "activated" | "terminated";
    } | {
        status: "error";
        description: string;
    };
    twapId?: number | undefined;
}[], "Array of user's TWAP history.">]>;
export type TwapHistoryResponse = v.InferOutput<typeof TwapHistoryResponse>;
/** Request parameters for the {@linkcode twapHistory} function. */
export type TwapHistoryParameters = Omit<v.InferInput<typeof TwapHistoryRequest>, "type">;
/**
 * Request twap history of a user.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's TWAP history.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { twapHistory } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await twapHistory(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function twapHistory(config: InfoRequestConfig, params: DeepImmutable<TwapHistoryParameters>, signal?: AbortSignal): Promise<TwapHistoryResponse>;
//# sourceMappingURL=twapHistory.d.ts.map