import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request margin table data.
 * @see null
 */
export declare const MarginTableRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"marginTable", undefined>, v.DescriptionAction<"marginTable", "Type of request.">]>;
    /** Margin requirements table. */
    readonly id: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin requirements table.">]>;
}, undefined>, v.DescriptionAction<{
    type: "marginTable";
    id: number;
}, "Request margin table data.">]>;
export type MarginTableRequest = v.InferOutput<typeof MarginTableRequest>;
/**
 * Margin requirements table with multiple tiers.
 * @see null
 */
export declare const MarginTableResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Description of the margin table. */
    readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Description of the margin table.">]>;
    /** Array of margin tiers defining leverage limits. */
    readonly marginTiers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Lower position size boundary for this tier. */
        readonly lowerBound: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Lower position size boundary for this tier.">]>;
        /** Maximum allowed leverage for this tier. */
        readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage for this tier.">]>;
    }, undefined>, v.DescriptionAction<{
        lowerBound: string;
        maxLeverage: number;
    }, "Individual tier in a margin requirements table.">]>, undefined>, v.DescriptionAction<{
        lowerBound: string;
        maxLeverage: number;
    }[], "Array of margin tiers defining leverage limits.">]>;
}, undefined>, v.DescriptionAction<{
    description: string;
    marginTiers: {
        lowerBound: string;
        maxLeverage: number;
    }[];
}, "Margin requirements table with multiple tiers.">]>;
export type MarginTableResponse = v.InferOutput<typeof MarginTableResponse>;
/** Request parameters for the {@linkcode marginTable} function. */
export type MarginTableParameters = Omit<v.InferInput<typeof MarginTableRequest>, "type">;
/**
 * Request margin table data.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Margin requirements table with multiple tiers.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { marginTable } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await marginTable(
 *   { transport },
 *   { id: 1 },
 * );
 * ```
 */
export declare function marginTable(config: InfoRequestConfig, params: DeepImmutable<MarginTableParameters>, signal?: AbortSignal): Promise<MarginTableResponse>;
//# sourceMappingURL=marginTable.d.ts.map