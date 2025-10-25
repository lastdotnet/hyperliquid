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
exports.ApiRequestError = exports.SuccessResponse = exports.ErrorResponse = exports.Signature = void 0;
exports.getSignatureChainId = getSignatureChainId;
exports.getNonce = getNonce;
exports.executeL1Action = executeL1Action;
exports.executeUserSignedAction = executeUserSignedAction;
exports.executeMultiSigAction = executeMultiSigAction;
const _base_js_1 = require("../_base.js");
const mod_js_1 = require("../../signing/mod.js");
const _base_js_2 = require("../../_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/** ECDSA signature components for Ethereum typed data. */
exports.Signature = (() => {
    return v.pipe(v.object({
        /** First 32-byte component of ECDSA signature. */
        r: v.pipe(v.pipe(_base_js_1.Hex, v.length(66), v.transform((value) => value.replace(/^0x0+/, "0x"))), v.description("First 32-byte component of ECDSA signature.")),
        /** Second 32-byte component of ECDSA signature. */
        s: v.pipe(v.pipe(_base_js_1.Hex, v.length(66), v.transform((value) => value.replace(/^0x0+/, "0x"))), v.description("Second 32-byte component of ECDSA signature.")),
        /** Recovery identifier. */
        v: v.pipe(v.pipe(_base_js_1.Integer, v.union([v.literal(27), v.literal(28)])), v.description("Recovery identifier.")),
    }), v.description("ECDSA signature components for Ethereum typed data."));
})();
/** Error response for failed operations. */
exports.ErrorResponse = (() => {
    return v.pipe(v.object({
        /** Error status. */
        status: v.pipe(v.literal("err"), v.description("Error status.")),
        /** Error message. */
        response: v.pipe(v.string(), v.description("Error message.")),
    }), v.description("Error response for failed operations."));
})();
/** Successful response without specific data. */
exports.SuccessResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("default"), v.description("Type of response.")),
        }), v.description("Response details.")),
    }), v.description("Successful response without specific data."));
})();
/** Thrown when an API request fails. */
class ApiRequestError extends _base_js_2.HyperliquidError {
    response;
    constructor(response) {
        let message;
        if (response.status === "err") {
            // ErrorResponse
            message = response.response;
        }
        else {
            if ("statuses" in response.response.data) {
                // OrderResponse | CancelResponse
                const errors = response.response.data.statuses.reduce((acc, status, index) => {
                    if (typeof status === "object" && "error" in status) {
                        acc.push(`Order ${index}: ${status.error}`);
                    }
                    return acc;
                }, []);
                if (errors.length > 0) {
                    message = errors.join(", ");
                }
            }
            else {
                // TwapOrderResponse | TwapCancelResponse
                if (typeof response.response.data.status === "object" && "error" in response.response.data.status) {
                    message = response.response.data.status.error;
                }
            }
        }
        super(message || "An unknown error occurred while processing an API request. See `response` for more details.");
        this.response = response;
        this.name = "ApiRequestError";
    }
}
exports.ApiRequestError = ApiRequestError;
/**
 * Nonce manager for generating unique nonces for signing transactions.
 * Uses the current timestamp, and increments if the timestamp is not greater than the last nonce.
 */
class NonceManager {
    lastNonce = 0;
    getNonce() {
        let nonce = Date.now();
        if (nonce <= this.lastNonce) {
            nonce = ++this.lastNonce;
        }
        else {
            this.lastNonce = nonce;
        }
        return nonce;
    }
}
const globalNonceManager = /* @__PURE__ */ new NonceManager();
/** Get the signature chain ID from the config value / function or from the wallet. */
async function getSignatureChainId(config) {
    if ("signatureChainId" in config && config.signatureChainId) {
        const signatureChainId = typeof config.signatureChainId === "string"
            ? config.signatureChainId
            : await config.signatureChainId();
        return (0, _base_js_1.parser)(_base_js_1.Hex)(signatureChainId);
    }
    else if ("wallet" in config) {
        return await (0, mod_js_1.getWalletChainId)(config.wallet);
    }
    else {
        return await (0, mod_js_1.getWalletChainId)(config.signers[0]);
    }
}
/** Get the nonce from the config function or from the global nonce manager. */
async function getNonce(config) {
    return await config?.nonceManager?.() ?? globalNonceManager.getNonce();
}
function validateResponse(response) {
    if (response.status === "err") {
        throw new ApiRequestError(response);
    }
    else if (response.response.type === "order" || response.response.type === "cancel") {
        if (response.response.data.statuses.some((status) => typeof status === "object" && "error" in status)) {
            throw new ApiRequestError(response);
        }
    }
    else if (response.response.type === "twapOrder" || response.response.type === "twapCancel") {
        if (typeof response.response.data.status === "object" && "error" in response.response.data.status) {
            throw new ApiRequestError(response);
        }
    }
}
// -------------------- Functions: Signing --------------------
async function executeL1Action(config, request, signal) {
    const { transport, nonceManager } = config;
    const { action, vaultAddress: vaultAddress_, expiresAfter } = request;
    const vaultAddress = vaultAddress_ ? (0, _base_js_1.parser)(_base_js_1.Address)(vaultAddress_) : undefined;
    const nonce = nonceManager ? await nonceManager() : globalNonceManager.getNonce();
    if ("signers" in config) {
        const { signers, multiSigUser: multiSigUser_ } = config;
        const multiSigUser = (0, _base_js_1.parser)(_base_js_1.Address)(multiSigUser_);
        const outerSigner = (0, _base_js_1.parser)(_base_js_1.Address)(await (0, mod_js_1.getWalletAddress)(signers[0]));
        // Sign an L1 action for each signer
        let signatures = await Promise.all(signers.map(async (signer) => {
            return await (0, mod_js_1.signL1Action)({
                wallet: signer,
                action: [multiSigUser, outerSigner, action],
                nonce,
                isTestnet: transport.isTestnet,
                vaultAddress,
                expiresAfter,
            });
        }));
        signatures = (0, _base_js_1.parser)(v.array(exports.Signature))(signatures); // ensure correct format
        // Send a request via multi-sign action
        return await executeMultiSigAction({ ...config, wallet: signers[0] }, {
            action: {
                type: "multiSig",
                signatureChainId: await getSignatureChainId(config),
                signatures,
                payload: { multiSigUser, outerSigner, action },
            },
            vaultAddress,
            expiresAfter,
            nonce,
        }, signal);
    }
    else {
        const { wallet } = config;
        // Sign an L1 action
        const signature = await (0, mod_js_1.signL1Action)({
            wallet,
            action,
            nonce,
            isTestnet: transport.isTestnet,
            vaultAddress,
            expiresAfter,
        });
        // Send a request
        const response = await transport.request("exchange", { action, signature, nonce, vaultAddress, expiresAfter }, signal);
        validateResponse(response);
        return response;
    }
}
async function executeUserSignedAction(config, request, signal) {
    const { transport } = config;
    const { action, types } = request;
    const nonce = action.nonce ?? action.time;
    if ("signers" in config) {
        const { signers, multiSigUser: multiSigUser_ } = config;
        const multiSigUser = (0, _base_js_1.parser)(_base_js_1.Address)(multiSigUser_);
        const outerSigner = (0, _base_js_1.parser)(_base_js_1.Address)(await (0, mod_js_1.getWalletAddress)(signers[0]));
        // Sign a user-signed action for each signer
        let signatures = await Promise.all(signers.map(async (signer) => {
            return await (0, mod_js_1.signUserSignedAction)({
                wallet: signer,
                action: {
                    payloadMultiSigUser: multiSigUser,
                    outerSigner,
                    ...action,
                },
                types,
            });
        }));
        signatures = (0, _base_js_1.parser)(v.array(exports.Signature))(signatures); // ensure correct format
        // Send a request via multi-sign action
        return await executeMultiSigAction({ ...config, wallet: signers[0] }, {
            action: {
                type: "multiSig",
                signatureChainId: action.signatureChainId,
                signatures,
                payload: { multiSigUser, outerSigner, action },
            },
            nonce,
        }, signal);
    }
    else {
        const { wallet } = config;
        // Sign a user-signed action
        const signature = await (0, mod_js_1.signUserSignedAction)({ wallet, action, types });
        // Send a request
        const response = await transport.request("exchange", { action, signature, nonce }, signal);
        validateResponse(response);
        return response;
    }
}
async function executeMultiSigAction(config, request, signal) {
    const { transport, wallet } = config;
    const { action, nonce, vaultAddress: vaultAddress_, expiresAfter } = request;
    const vaultAddress = vaultAddress_ ? (0, _base_js_1.parser)(_base_js_1.Address)(vaultAddress_) : undefined;
    // Sign a multi-signature action
    const signature = await (0, mod_js_1.signMultiSigAction)({
        wallet,
        action,
        nonce,
        isTestnet: transport.isTestnet,
        vaultAddress,
        expiresAfter,
    });
    // Send a request
    const response = await transport.request("exchange", { action, signature, nonce, vaultAddress, expiresAfter }, signal);
    validateResponse(response);
    return response;
}
//# sourceMappingURL=_base.js.map