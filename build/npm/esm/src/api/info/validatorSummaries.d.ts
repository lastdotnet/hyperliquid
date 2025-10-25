import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request validator summaries.
 * @see null
 */
export declare const ValidatorSummariesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"validatorSummaries", undefined>, v.DescriptionAction<"validatorSummaries", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "validatorSummaries";
}, "Request validator summaries.">]>;
export type ValidatorSummariesRequest = v.InferOutput<typeof ValidatorSummariesRequest>;
/**
 * Array of validator performance statistics.
 * @see null
 */
export declare const ValidatorSummariesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Address of the validator. */
    readonly validator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the validator.">]>;
    /** Address of the validator signer. */
    readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the validator signer.">]>;
    /** Name of the validator. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the validator.">]>;
    /** Description of the validator. */
    readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Description of the validator.">]>;
    /** Number of blocks produced recently. */
    readonly nRecentBlocks: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of blocks produced recently.">]>;
    /** Total amount of tokens staked **(unsafe integer)**. */
    readonly stake: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.IntegerAction<number, undefined>]>, v.DescriptionAction<number, "Total amount of tokens staked **(unsafe integer)**.">]>;
    /** Whether the validator is currently jailed. */
    readonly isJailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the validator is currently jailed.">]>;
    /** Timestamp when the validator can be unjailed (in ms since epoch). */
    readonly unjailableAfter: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Timestamp when the validator can be unjailed (in ms since epoch).">]>;
    /** Whether the validator is currently active. */
    readonly isActive: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the validator is currently active.">]>;
    /** Commission rate charged by the validator. */
    readonly commission: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Commission rate charged by the validator.">]>;
    /** Performance statistics over different time periods. */
    readonly stats: v.SchemaWithPipe<readonly [v.TupleSchema<[v.TupleSchema<[v.LiteralSchema<"day", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Fraction of time the validator was online. */
        readonly uptimeFraction: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Fraction of time the validator was online.">]>;
        /** Predicted annual percentage rate of returns. */
        readonly predictedApr: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Predicted annual percentage rate of returns.">]>;
        /** Number of samples used for statistics calculation. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of samples used for statistics calculation.">]>;
    }, undefined>, v.DescriptionAction<{
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }, "Statistics for validator performance over a time period.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"week", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Fraction of time the validator was online. */
        readonly uptimeFraction: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Fraction of time the validator was online.">]>;
        /** Predicted annual percentage rate of returns. */
        readonly predictedApr: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Predicted annual percentage rate of returns.">]>;
        /** Number of samples used for statistics calculation. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of samples used for statistics calculation.">]>;
    }, undefined>, v.DescriptionAction<{
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }, "Statistics for validator performance over a time period.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"month", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Fraction of time the validator was online. */
        readonly uptimeFraction: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Fraction of time the validator was online.">]>;
        /** Predicted annual percentage rate of returns. */
        readonly predictedApr: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Predicted annual percentage rate of returns.">]>;
        /** Number of samples used for statistics calculation. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of samples used for statistics calculation.">]>;
    }, undefined>, v.DescriptionAction<{
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }, "Statistics for validator performance over a time period.">]>], undefined>], undefined>, v.DescriptionAction<[["day", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }], ["week", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }], ["month", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }]], "Performance statistics over different time periods.">]>;
}, undefined>, v.DescriptionAction<{
    validator: `0x${string}`;
    signer: `0x${string}`;
    name: string;
    description: string;
    nRecentBlocks: number;
    stake: number;
    isJailed: boolean;
    unjailableAfter: number | null;
    isActive: boolean;
    commission: string;
    stats: [["day", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }], ["week", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }], ["month", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }]];
}, "Validator performance statistics.">]>, undefined>, v.DescriptionAction<{
    validator: `0x${string}`;
    signer: `0x${string}`;
    name: string;
    description: string;
    nRecentBlocks: number;
    stake: number;
    isJailed: boolean;
    unjailableAfter: number | null;
    isActive: boolean;
    commission: string;
    stats: [["day", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }], ["week", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }], ["month", {
        uptimeFraction: string;
        predictedApr: string;
        nSamples: number;
    }]];
}[], "Array of validator performance statistics.">]>;
export type ValidatorSummariesResponse = v.InferOutput<typeof ValidatorSummariesResponse>;
/**
 * Request validator summaries.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of validator performance statistics.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { validatorSummaries } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await validatorSummaries({ transport });
 * ```
 */
export declare function validatorSummaries(config: InfoRequestConfig, signal?: AbortSignal): Promise<ValidatorSummariesResponse>;
//# sourceMappingURL=validatorSummaries.d.ts.map