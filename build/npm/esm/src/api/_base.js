// deno-lint-ignore-file no-explicit-any ban-types
import * as v from "valibot";
import { HyperliquidError } from "../_base.js";
// -------------------- Schemas --------------------
export const UnsignedDecimal = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(String), v.trim(), v.regex(/^[0-9]+(\.[0-9]+)?$/), v.transform((value) => formatDecimal(value)));
})();
export const Decimal = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(String), v.trim(), v.regex(/^-?[0-9]+(\.[0-9]+)?$/), v.transform((value) => formatDecimal(value)));
})();
export const Integer = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(Number), v.safeInteger());
})();
export const UnsignedInteger = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(Number), v.safeInteger(), v.minValue(0));
})();
export const Hex = /* @__PURE__ */ (() => {
    return v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.transform((value) => value.toLowerCase()));
})();
export const Address = /* @__PURE__ */ (() => {
    return v.pipe(Hex, v.length(42));
})();
export const TokenId = /* @__PURE__ */ (() => {
    return v.pipe(v.string(), v.regex(/^[^:]+:0x[0-9a-fA-F]+$/), v.transform((value) => value));
})();
export const Percent = /* @__PURE__ */ (() => {
    return v.pipe(v.string(), v.regex(/^[0-9]+(\.[0-9]+)?%$/), v.transform((value) => value));
})();
/** Removes leading/trailing zeros from decimal string without precision loss. */
function formatDecimal(numStr) {
    return numStr
        .trim()
        .replace(/^(-?)0+(?=\d)/, "$1") // Remove leading zeros, keep sign
        .replace(/(\.\d*?)0+$/, "$1") // Remove trailing zeros after decimal
        .replace(/\.$/, ""); // Remove lone decimal point
}
/** Thrown when a schema validation error occurs.  */
export class SchemaError extends HyperliquidError {
    constructor(message) {
        super(message);
        this.name = "SchemaError";
    }
}
/**
 * Creates a valibot parser with summarized error messages.
 * Used for validating, formatting, and sorting object keys for correct signature generation.
 * @param schema - The valibot schema to validate against.
 * @returns A parser function that validates input against the schema.
 */
export function parser(schema) {
    const safeParser = v.safeParser(schema);
    const parser = (input) => {
        const result = safeParser(input);
        if (result.issues)
            throw new SchemaError("\n" + v.summarize(result.issues));
        return result.output;
    };
    parser.schema = schema;
    parser.config = undefined;
    return parser;
}
//# sourceMappingURL=_base.js.map