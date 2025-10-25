"use strict";
/**
 * Abstract interfaces and utilities for signing typed data with various wallet implementations.
 * Supports ethers.js (v5 and v6) and viem wallets.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTypedData = signTypedData;
exports.getWalletChainId = getWalletChainId;
exports.getWalletAddress = getWalletAddress;
/** Checks if the given value is an abstract ethers signer. */
function isAbstractEthersV6Signer(client) {
    return typeof client === "object" && client !== null &&
        "signTypedData" in client && typeof client.signTypedData === "function" &&
        client.signTypedData.length === 3;
}
/** Checks if the given value is an abstract ethers v5 signer. */
function isAbstractEthersV5Signer(client) {
    return typeof client === "object" && client !== null &&
        "_signTypedData" in client && typeof client._signTypedData === "function" &&
        client._signTypedData.length === 3;
}
/** Checks if the given value is an abstract viem wallet. */
function isAbstractViemWallet(client) {
    return typeof client === "object" && client !== null &&
        "signTypedData" in client && typeof client.signTypedData === "function" &&
        (client.signTypedData.length === 1 || client.signTypedData.length === 2);
}
async function signTypedData(args) {
    const { wallet, domain, types, primaryType, message } = args;
    let signature;
    if (isAbstractViemWallet(wallet)) {
        signature = await wallet.signTypedData({
            domain,
            types: {
                EIP712Domain: [
                    { name: "name", type: "string" },
                    { name: "version", type: "string" },
                    { name: "chainId", type: "uint256" },
                    { name: "verifyingContract", type: "address" },
                ],
                ...types,
            },
            primaryType,
            message,
        });
    }
    else if (isAbstractEthersV6Signer(wallet)) {
        signature = await wallet.signTypedData(domain, types, message);
    }
    else if (isAbstractEthersV5Signer(wallet)) {
        signature = await wallet._signTypedData(domain, types, message);
    }
    else {
        throw new Error("Unsupported wallet for signing typed data");
    }
    return splitSignature(signature);
}
function splitSignature(signature) {
    const r = `0x${signature.slice(2, 66)}`;
    const s = `0x${signature.slice(66, 130)}`;
    const v = parseInt(signature.slice(130, 132), 16);
    return { r, s, v };
}
// -------------------- Utils --------------------
/** Get the chain ID of the wallet. */
async function getWalletChainId(wallet) {
    if (isAbstractViemWallet(wallet)) {
        if ("getChainId" in wallet && wallet.getChainId) {
            const chainId = await wallet.getChainId();
            return `0x${chainId.toString(16)}`;
        }
        else {
            return "0x1";
        }
    }
    else if (isAbstractEthersV6Signer(wallet) || isAbstractEthersV5Signer(wallet)) {
        if ("provider" in wallet && wallet.provider) {
            const network = await wallet.provider.getNetwork();
            return `0x${network.chainId.toString(16)}`;
        }
        else {
            return "0x1";
        }
    }
    else {
        return "0x1";
    }
}
/** Get the wallet address from various wallet types. */
async function getWalletAddress(wallet) {
    if (isAbstractViemWallet(wallet)) {
        if ("address" in wallet && wallet.address) {
            return wallet.address;
        }
        else if ("getAddresses" in wallet && wallet.getAddresses) {
            const addresses = await wallet.getAddresses();
            return addresses[0];
        }
    }
    else if (isAbstractEthersV6Signer(wallet) || isAbstractEthersV5Signer(wallet)) {
        if ("getAddress" in wallet && wallet.getAddress) {
            return await wallet.getAddress();
        }
    }
    throw new Error("Unsupported wallet for getting address");
}
//# sourceMappingURL=_signTypedData.js.map