export interface Types {
    [type: string]: {
        name: string;
        type: string;
    }[];
}
export interface Domain {
    name?: string;
    version?: string;
    chainId?: number | string | bigint | `0x${string}`;
    verifyingContract?: `0x${string}`;
    salt?: `0x${string}`;
}
import type { AbstractViemLocalAccount } from "../signing/mod.js";
/** A minimalist EIP-712 signer using a raw private key. */
export declare class PrivateKeyEIP712Signer implements AbstractViemLocalAccount {
    #private;
    address: `0x${string}`;
    constructor(privateKey: string | Uint8Array);
    signTypedData(params: {
        domain: Domain;
        types: Types;
        primaryType: string;
        message: Record<string, unknown>;
    }): Promise<`0x${string}`>;
}
//# sourceMappingURL=_minimalEIP712Signer.d.ts.map