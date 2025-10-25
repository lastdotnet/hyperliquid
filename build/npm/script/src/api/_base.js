"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaError = exports.Percent = exports.TokenId = exports.Address = exports.Hex = exports.UnsignedInteger = exports.Integer = exports.Decimal = exports.UnsignedDecimal = void 0;
exports.parser = parser;
// deno-lint-ignore-file no-explicit-any ban-types
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
// -------------------- Schemas --------------------
exports.UnsignedDecimal = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(String), v.trim(), v.regex(/^[0-9]+(\.[0-9]+)?$/), v.transform((value) => formatDecimal(value)));
})();
exports.Decimal = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(String), v.trim(), v.regex(/^-?[0-9]+(\.[0-9]+)?$/), v.transform((value) => formatDecimal(value)));
})();
exports.Integer = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(Number), v.safeInteger());
})();
exports.UnsignedInteger = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.transform(Number), v.safeInteger(), v.minValue(0));
})();
exports.Hex = (() => {
    return v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.transform((value) => value.toLowerCase()));
})();
exports.Address = (() => {
    return v.pipe(exports.Hex, v.length(42));
})();
exports.TokenId = (() => {
    return v.pipe(v.string(), v.regex(/^[^:]+:0x[0-9a-fA-F]+$/), v.transform((value) => value));
})();
exports.Percent = (() => {
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
class SchemaError extends _base_js_1.HyperliquidError {
    constructor(message) {
        super(message);
        this.name = "SchemaError";
    }
}
exports.SchemaError = SchemaError;
/**
 * Creates a valibot parser with summarized error messages.
 * Used for validating, formatting, and sorting object keys for correct signature generation.
 * @param schema - The valibot schema to validate against.
 * @returns A parser function that validates input against the schema.
 */
function parser(schema) {
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