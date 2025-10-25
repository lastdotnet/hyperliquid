"use strict";
// -------------------- EIP-712 --------------------
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
exports.PrivateKeyEIP712Signer = void 0;
const sha3_js_1 = require("@noble/hashes/sha3.js");
const secp = __importStar(require("@noble/secp256k1"));
/** Signs typed data with a private key. */
async function signTypedData(args) {
    const { privateKey, domain = {}, types, primaryType, message, } = args;
    const hash = hashTypedData({ domain, types, primaryType, message });
    const signature = await secp.signAsync(hash, privateKey instanceof Uint8Array ? privateKey : secp.etc.hexToBytes(cleanHex(privateKey)), { prehash: false, format: "recovered" });
    const r = secp.etc.bytesToHex(signature.slice(1, 33));
    const s = secp.etc.bytesToHex(signature.slice(33, 65));
    const v = (signature[0] + 27).toString(16).padStart(2, "0");
    return `0x${r}${s}${v}`;
}
function hashTypedData(args) {
    const { domain, types: types_, primaryType, message } = args;
    const domainFields = [];
    if (domain.name !== undefined) {
        domainFields.push({ name: "name", type: "string" });
    }
    if (domain.version !== undefined) {
        domainFields.push({ name: "version", type: "string" });
    }
    if (domain.chainId !== undefined) {
        domainFields.push({ name: "chainId", type: "uint256" });
    }
    if (domain.verifyingContract !== undefined) {
        domainFields.push({ name: "verifyingContract", type: "address" });
    }
    if (domain.salt !== undefined) {
        domainFields.push({ name: "salt", type: "bytes32" });
    }
    const types = {
        EIP712Domain: domainFields,
        ...types_,
    };
    const bytes = [new Uint8Array([0x19, 0x01])];
    bytes.push(hashStruct("EIP712Domain", domain, types));
    if (primaryType !== "EIP712Domain")
        bytes.push(hashStruct(primaryType, message, types));
    return (0, sha3_js_1.keccak_256)(secp.etc.concatBytes(...bytes));
}
function hashStruct(primaryType, data, types) {
    const typeHash = (0, sha3_js_1.keccak_256)(new TextEncoder().encode(encodeType(primaryType, types)));
    const encodedValues = types[primaryType].map((field) => encodeValue(field.type, data[field.name], types));
    return (0, sha3_js_1.keccak_256)(secp.etc.concatBytes(typeHash, ...encodedValues));
}
function encodeType(primaryType, types) {
    const deps = findTypeDependencies(primaryType, types);
    const sortedDeps = [primaryType, ...deps.filter((d) => d !== primaryType).sort()];
    return sortedDeps
        .map((type) => `${type}(${types[type].map((field) => `${resolveTypeAlias(field.type)} ${field.name}`).join(",")})`)
        .join("");
}
function resolveTypeAlias(type) {
    if (type === "uint")
        return "uint256";
    if (type === "int")
        return "int256";
    return type;
}
function findTypeDependencies(primaryType, types, _found = new Set()) {
    if (_found.has(primaryType) || !types[primaryType])
        return [];
    _found.add(primaryType);
    for (const field of types[primaryType]) {
        const baseType = field.type.replace(/\[.*?\]/g, "");
        if (types[baseType]) {
            findTypeDependencies(baseType, types, _found);
        }
    }
    return Array.from(_found);
}
function encodeValue(type, value, types) {
    const arrayMatch = type.match(/^(.*)\[(\d*)\]$/);
    if (arrayMatch) {
        // Extract type info: base type and optional length
        const [, baseType, len] = arrayMatch;
        if (!Array.isArray(value)) {
            throw new Error(`Expected array for ${type}. Received: ${typeof value}`);
        }
        if (len && value.length !== +len) {
            throw new Error(`Invalid length for ${type}: expected ${len}. Received: ${value.length}`);
        }
        // Encode each element in the array and hash them together
        const encodedElements = value.map((v) => encodeValue(baseType, v, types));
        return (0, sha3_js_1.keccak_256)(secp.etc.concatBytes(...encodedElements));
    }
    if (types[type]) {
        if (value === undefined)
            return new Uint8Array(32);
        return hashStruct(type, value, types);
    }
    if (type === "string") {
        return (0, sha3_js_1.keccak_256)(new TextEncoder().encode(value));
    }
    if (type === "address") {
        const bytes = secp.etc.hexToBytes(cleanHex(value));
        if (bytes.length !== 20) {
            throw new Error(`Address must be 20 bytes.`);
        }
        const padded = new Uint8Array(32);
        padded.set(bytes, 12);
        return padded;
    }
    if (type.startsWith("uint") || type.startsWith("int")) {
        // Extract type info: uint/int and bit size
        const isUint = type.startsWith("uint");
        const bitsStr = type.slice(isUint ? 4 : 3);
        const bits = parseInt(bitsStr || "256");
        if (bits > 256 || bits % 8 !== 0) {
            throw new Error(`Invalid ${isUint ? "uint" : "int"} size: ${bitsStr}. Must be 8-256 in steps of 8`);
        }
        // Apply Two's complement for specified bit size
        const bigIntValue = BigInt(value);
        const resizedValue = isUint ? BigInt.asUintN(bits, bigIntValue) : BigInt.asIntN(bits, bigIntValue);
        // Convert to 32-byte big-endian
        const hex = BigInt.asUintN(256, resizedValue).toString(16).padStart(64, "0");
        return secp.etc.hexToBytes(hex);
    }
    if (type === "bool") {
        const result = new Uint8Array(32);
        result[31] = value ? 1 : 0;
        return result;
    }
    if (type === "bytes") {
        const bytes = typeof value === "string" ? secp.etc.hexToBytes(cleanHex(value)) : value;
        return (0, sha3_js_1.keccak_256)(bytes);
    }
    const bytesMatch = type.match(/^bytes(\d+)$/);
    if (bytesMatch) {
        // Extract type info: bytes size
        const size = parseInt(bytesMatch[1]);
        if (size === 0 || size > 32) {
            throw new Error(`bytesN size must be 1-32. Received: ${size}`);
        }
        // Convert hex to bytes
        const bytes = secp.etc.hexToBytes(cleanHex(value));
        if (bytes.length !== size) {
            throw new Error(`${type} requires exactly ${size} bytes. Received: ${bytes.length} from '${value}'`);
        }
        // Pad to 32 bytes
        const padded = new Uint8Array(32);
        padded.set(bytes, 0);
        return padded;
    }
    throw new Error(`Unsupported type: '${type}'.`);
}
function cleanHex(hex) {
    return hex.startsWith("0x") ? hex.slice(2) : hex;
}
/** A minimalist EIP-712 signer using a raw private key. */
class PrivateKeyEIP712Signer {
    #privateKey;
    address;
    constructor(privateKey) {
        this.#privateKey = privateKey;
        this.address = privateKeyToAddress(privateKey); // and validate the key
    }
    signTypedData(params) {
        return signTypedData({ privateKey: this.#privateKey, ...params });
    }
}
exports.PrivateKeyEIP712Signer = PrivateKeyEIP712Signer;
function privateKeyToAddress(privateKey) {
    const pk = typeof privateKey === "string" ? secp.etc.hexToBytes(cleanHex(privateKey)) : privateKey;
    const publicKey = secp.getPublicKey(pk, false);
    const publicKeyWithoutPrefix = publicKey.slice(1);
    const hash = (0, sha3_js_1.keccak_256)(publicKeyWithoutPrefix);
    const addressBytes = hash.slice(-20);
    const address = secp.etc.bytesToHex(addressBytes);
    return `0x${address}`;
}
//# sourceMappingURL=_minimalEIP712Signer.js.map