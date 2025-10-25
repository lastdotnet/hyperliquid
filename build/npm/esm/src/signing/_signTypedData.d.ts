/**
 * Abstract interfaces and utilities for signing typed data with various wallet implementations.
 * Supports ethers.js (v5 and v6) and viem wallets.
 */
/** Abstract interface for an {@link https://docs.ethers.org/v6/api/providers/#Signer | ethers.js signer}. */
export interface AbstractEthersV6Signer {
    signTypedData(domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
    }, types: {
        [key: string]: {
            name: string;
            type: string;
        }[];
    }, value: Record<string, unknown>): Promise<string>;
    getAddress?(): Promise<string>;
    provider?: {
        getNetwork(): Promise<{
            chainId: number | bigint;
        }>;
    } | null;
}
/** Abstract interface for an {@link https://docs.ethers.org/v5/api/signer/ | ethers.js v5 signer}. */
export interface AbstractEthersV5Signer {
    _signTypedData(domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
    }, types: {
        [key: string]: {
            name: string;
            type: string;
        }[];
    }, value: Record<string, unknown>): Promise<string>;
    getAddress?(): Promise<string>;
    provider?: {
        getNetwork(): Promise<{
            chainId: number | bigint;
        }>;
    } | null;
}
/** Abstract interface for a viem {@link https://viem.sh/docs/accounts/jsonRpc#json-rpc-account | JSON-RPC Account}. */
export interface AbstractViemJsonRpcAccount {
    signTypedData(params: {
        domain: {
            name: string;
            version: string;
            chainId: number;
            verifyingContract: `0x${string}`;
        };
        types: {
            [key: string]: {
                name: string;
                type: string;
            }[];
        };
        primaryType: string;
        message: Record<string, unknown>;
    }, options?: unknown): Promise<`0x${string}`>;
    getAddresses?(): Promise<`0x${string}`[]>;
    getChainId?(): Promise<number>;
}
/** Abstract interface for a viem {@link https://viem.sh/docs/accounts/local | Local Account}. */
export interface AbstractViemLocalAccount {
    signTypedData(params: {
        domain: {
            name: string;
            version: string;
            chainId: number;
            verifyingContract: `0x${string}`;
        };
        types: {
            [key: string]: {
                name: string;
                type: string;
            }[];
        };
        primaryType: string;
        message: Record<string, unknown>;
    }, options?: unknown): Promise<`0x${string}`>;
    address?: `0x${string}`;
}
/** Abstract interface for a wallet that can sign typed data. */
export type AbstractWallet = AbstractViemJsonRpcAccount | AbstractViemLocalAccount | AbstractEthersV6Signer | AbstractEthersV5Signer;
/** ECDSA signature components for Ethereum transactions and typed data. */
export interface Signature {
    /** First 32-byte component of ECDSA signature */
    r: `0x${string}`;
    /** Second 32-byte component of ECDSA signature */
    s: `0x${string}`;
    /** Recovery identifier */
    v: 27 | 28;
}
export declare function signTypedData(args: {
    wallet: AbstractWallet;
    domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: `0x${string}`;
    };
    types: {
        [key: string]: {
            name: string;
            type: string;
        }[];
    };
    primaryType: string;
    message: Record<string, unknown>;
}): Promise<Signature>;
/** Get the chain ID of the wallet. */
export declare function getWalletChainId(wallet: AbstractWallet): Promise<`0x${string}`>;
/** Get the wallet address from various wallet types. */
export declare function getWalletAddress(wallet: AbstractWallet): Promise<`0x${string}`>;
//# sourceMappingURL=_signTypedData.d.ts.map