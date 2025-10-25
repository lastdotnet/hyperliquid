import { Address, Hex, Integer, parser } from "../_base.js";
import { getWalletAddress, getWalletChainId, signL1Action, signMultiSigAction, signUserSignedAction, } from "../../signing/mod.js";
import { HyperliquidError } from "../../_base.js";
import * as v from "valibot";
// -------------------- Schemas --------------------
/** ECDSA signature components for Ethereum typed data. */
export const Signature = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** First 32-byte component of ECDSA signature. */
        r: v.pipe(v.pipe(Hex, v.length(66), v.transform((value) => value.replace(/^0x0+/, "0x"))), v.description("First 32-byte component of ECDSA signature.")),
        /** Second 32-byte component of ECDSA signature. */
        s: v.pipe(v.pipe(Hex, v.length(66), v.transform((value) => value.replace(/^0x0+/, "0x"))), v.description("Second 32-byte component of ECDSA signature.")),
        /** Recovery identifier. */
        v: v.pipe(v.pipe(Integer, v.union([v.literal(27), v.literal(28)])), v.description("Recovery identifier.")),
    }), v.description("ECDSA signature components for Ethereum typed data."));
})();
/** Error response for failed operations. */
export const ErrorResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Error status. */
        status: v.pipe(v.literal("err"), v.description("Error status.")),
        /** Error message. */
        response: v.pipe(v.string(), v.description("Error message.")),
    }), v.description("Error response for failed operations."));
})();
/** Successful response without specific data. */
export const SuccessResponse = /* @__PURE__ */ (() => {
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
export class ApiRequestError extends HyperliquidError {
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
export async function getSignatureChainId(config) {
    if ("signatureChainId" in config && config.signatureChainId) {
        const signatureChainId = typeof config.signatureChainId === "string"
            ? config.signatureChainId
            : await config.signatureChainId();
        return parser(Hex)(signatureChainId);
    }
    else if ("wallet" in config) {
        return await getWalletChainId(config.wallet);
    }
    else {
        return await getWalletChainId(config.signers[0]);
    }
}
/** Get the nonce from the config function or from the global nonce manager. */
export async function getNonce(config) {
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
export async function executeL1Action(config, request, signal) {
    const { transport, nonceManager } = config;
    const { action, vaultAddress: vaultAddress_, expiresAfter } = request;
    const vaultAddress = vaultAddress_ ? parser(Address)(vaultAddress_) : undefined;
    const nonce = nonceManager ? await nonceManager() : globalNonceManager.getNonce();
    if ("signers" in config) {
        const { signers, multiSigUser: multiSigUser_ } = config;
        const multiSigUser = parser(Address)(multiSigUser_);
        const outerSigner = parser(Address)(await getWalletAddress(signers[0]));
        // Sign an L1 action for each signer
        let signatures = await Promise.all(signers.map(async (signer) => {
            return await signL1Action({
                wallet: signer,
                action: [multiSigUser, outerSigner, action],
                nonce,
                isTestnet: transport.isTestnet,
                vaultAddress,
                expiresAfter,
            });
        }));
        signatures = parser(v.array(Signature))(signatures); // ensure correct format
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
        const signature = await signL1Action({
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
export async function executeUserSignedAction(config, request, signal) {
    const { transport } = config;
    const { action, types } = request;
    const nonce = action.nonce ?? action.time;
    if ("signers" in config) {
        const { signers, multiSigUser: multiSigUser_ } = config;
        const multiSigUser = parser(Address)(multiSigUser_);
        const outerSigner = parser(Address)(await getWalletAddress(signers[0]));
        // Sign a user-signed action for each signer
        let signatures = await Promise.all(signers.map(async (signer) => {
            return await signUserSignedAction({
                wallet: signer,
                action: {
                    payloadMultiSigUser: multiSigUser,
                    outerSigner,
                    ...action,
                },
                types,
            });
        }));
        signatures = parser(v.array(Signature))(signatures); // ensure correct format
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
        const signature = await signUserSignedAction({ wallet, action, types });
        // Send a request
        const response = await transport.request("exchange", { action, signature, nonce }, signal);
        validateResponse(response);
        return response;
    }
}
export async function executeMultiSigAction(config, request, signal) {
    const { transport, wallet } = config;
    const { action, nonce, vaultAddress: vaultAddress_, expiresAfter } = request;
    const vaultAddress = vaultAddress_ ? parser(Address)(vaultAddress_) : undefined;
    // Sign a multi-signature action
    const signature = await signMultiSigAction({
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