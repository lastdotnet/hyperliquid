"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArgs = parseArgs;
exports.transformArgs = transformArgs;
/**
 * Parse command-line arguments into a key-value object.
 * Does not transform values.
 */
function parseArgs(args, options) {
    const result = { _: [] };
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const nextArg = args[i + 1];
        if (arg.startsWith("-")) {
            if (arg === "-_" || arg === "--_")
                continue; // Skip reserved key "_"
            const isLong = arg.startsWith("--");
            let keyPart = arg.slice(isLong ? 2 : 1);
            let value;
            const eqIndex = keyPart.indexOf("=");
            if (eqIndex !== -1) {
                value = keyPart.substring(eqIndex + 1);
                keyPart = keyPart.substring(0, eqIndex);
            }
            else if (!options?.flags?.includes(keyPart) && // Skip if key is defined as flag and don't expect value
                typeof nextArg === "string" && (!nextArg.startsWith("-") || !isNaN(parseFloat(nextArg)))) {
                value = nextArg;
                i++; // Skip next arg as it's consumed as value for current key
            }
            result[keyPart] = value;
        }
        else {
            result._.push(arg);
        }
    }
    return result;
}
/**
 * Transform raw args (string values) into typed args based on rules.
 *
 * Order of transformation:
 * 1. flag (`undefined`)
 * 2. null (`"null"`)
 * 3. boolean (`"true"`, `"false"`)
 * 4. hex (`"0x..."`)
 * 5. special number (`"Infinity"`, `"-Infinity"`, `"NaN", "-NaN"`)
 * 6. number (numeric strings)
 * 7. json (object/array strings)
 * 8. string (default)
 */
function transformArgs(args, options) {
    const opts = {
        flag: "true",
        null: "null",
        bool: "bool",
        hex: "string",
        specialNumber: "string",
        number: "number",
        json: "object",
        ...options,
    };
    const result = { _: args._ };
    for (const key in args) {
        if (key === "_")
            continue; // Skip the positional args array
        const value = args[key];
        // Transformation logic
        let transformedValue;
        // flag
        if (value === undefined) {
            const action = typeof opts.flag === "function" ? opts.flag(key) : opts.flag;
            transformedValue = action === "true" ? true : false;
        } // null
        else if (value.toLowerCase() === "null") {
            const action = typeof opts.null === "function" ? opts.null(key, value) : opts.null;
            transformedValue = action === "null" ? null : value;
        } // boolean
        else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
            const action = typeof opts.bool === "function" ? opts.bool(key, value) : opts.bool;
            transformedValue = action === "bool" ? value.toLowerCase() === "true" : value;
        } // hex
        else if ((value.startsWith("0x") || value.startsWith("0X")) && !isNaN(parseInt(value, 16))) {
            const action = typeof opts.hex === "function" ? opts.hex(key, value) : opts.hex;
            transformedValue = action === "string" ? value : parseInt(value, 16);
        } // special number
        else if (value.toLowerCase() === "infinity" || value.toLowerCase() === "-infinity" ||
            value.toLowerCase() === "nan" || value.toLowerCase() === "-nan") {
            const action = typeof opts.specialNumber === "function" ? opts.specialNumber(key, value) : opts.specialNumber;
            transformedValue = action === "string" ? value : Number(value);
        } // number
        else if (!isNaN(Number(value))) {
            const action = typeof opts.number === "function" ? opts.number(key, value) : opts.number;
            transformedValue = action === "number" ? Number(value) : value;
        } // json object/array
        else if ((value.startsWith("{") && value.endsWith("}")) ||
            (value.startsWith("[") && value.endsWith("]"))) {
            const action = typeof opts.json === "function" ? opts.json(key, value) : opts.json;
            try {
                transformedValue = action === "object" ? JSON.parse(value) : value;
            }
            catch {
                transformedValue = value;
            }
        } // string (default)
        else {
            transformedValue = value;
        }
        result[key] = transformedValue;
    }
    return result;
}
//# sourceMappingURL=_utils.js.map