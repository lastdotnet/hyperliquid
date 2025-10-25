import * as v from "valibot";
import { HyperliquidError } from "../_base.js";
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export type DeepImmutable<T> = {
    readonly [K in keyof T]: DeepImmutable<T[K]>;
};
export type OmitFirst<T extends readonly any[]> = T extends readonly [any, ...infer R] ? R : [];
export type OverloadedParameters<T> = T extends {
    (...args: infer A1): unknown;
    (...args: infer A2): unknown;
    (...args: infer A3): unknown;
    (...args: infer A4): unknown;
} ? A1 | A2 | A3 | A4 : T extends {
    (...args: infer A1): unknown;
    (...args: infer A2): unknown;
    (...args: infer A3): unknown;
} ? A1 | A2 | A3 : T extends {
    (...args: infer A1): unknown;
    (...args: infer A2): unknown;
} ? A1 | A2 : T extends (...args: infer A) => unknown ? A : never;
export declare const UnsignedDecimal: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>;
export type UnsignedDecimal = v.InferOutput<typeof UnsignedDecimal>;
export declare const Decimal: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>;
export type Decimal = v.InferOutput<typeof Decimal>;
export declare const Integer: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>;
export type Integer = v.InferOutput<typeof Integer>;
export declare const UnsignedInteger: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
export type UnsignedInteger = v.InferOutput<typeof UnsignedInteger>;
export declare const Hex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
export type Hex = v.InferOutput<typeof Hex>;
export declare const Address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
export type Address = v.InferOutput<typeof Address>;
export declare const TokenId: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}:0x${string}`>]>;
export type TokenId = v.InferOutput<typeof TokenId>;
export declare const Percent: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>;
export type Percent = v.InferOutput<typeof Percent>;
/** Thrown when a schema validation error occurs.  */
export declare class SchemaError extends HyperliquidError {
    constructor(message: string);
}
/**
 * Creates a valibot parser with summarized error messages.
 * Used for validating, formatting, and sorting object keys for correct signature generation.
 * @param schema - The valibot schema to validate against.
 * @returns A parser function that validates input against the schema.
 */
export declare function parser<TSchema extends v.GenericSchema>(schema: TSchema): v.Parser<TSchema, undefined>;
//# sourceMappingURL=_base.d.ts.map