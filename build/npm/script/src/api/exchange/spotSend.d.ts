import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Send spot assets to another address.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-spot-transfer
 */
export declare const SpotSendRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotSend", undefined>, v.DescriptionAction<"spotSend", "Type of action.">]>;
        /** Chain ID used for signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
        /** HyperLiquid network. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}:0x${string}`>]>, v.DescriptionAction<`${string}:0x${string}`, "Token identifier.">]>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to send (not in wei).">]>;
        /** Unique request identifier (current timestamp in ms). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotSend";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        destination: `0x${string}`;
        token: `${string}:0x${string}`;
        amount: string;
        time: number;
    }, "Action to perform.">]>;
    /** Unique request identifier (current timestamp in ms). */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    /** Cryptographic signature. */
    readonly signature: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "First 32-byte component of ECDSA signature.">]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Second 32-byte component of ECDSA signature.">]>;
        readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<27, undefined>, v.LiteralSchema<28, undefined>], undefined>]>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
    }, undefined>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components for Ethereum typed data.">]>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "Cryptographic signature.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "spotSend";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        destination: `0x${string}`;
        token: `${string}:0x${string}`;
        amount: string;
        time: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Send spot assets to another address.">]>;
export type SpotSendRequest = v.InferOutput<typeof SpotSendRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode spotSend} function. */
export type SpotSendParameters = ExtractRequestAction<v.InferInput<typeof SpotSendRequest>>;
/** Request options for the {@linkcode spotSend} function. */
export type SpotSendOptions = ExtractRequestOptions<v.InferInput<typeof SpotSendRequest>>;
/** EIP-712 types for the {@linkcode spotSend} function. */
export declare const SpotSendTypes: {
    "HyperliquidTransaction:SpotSend": {
        name: string;
        type: string;
    }[];
};
/**
 * Send spot assets to another address.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-spot-transfer
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotSend } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotSend(
 *   { transport, wallet },
 *   {
 *     destination: "0x...",
 *     token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *     amount: "1",
 *   },
 * );
 * ```
 */
export declare function spotSend(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<SpotSendParameters>, opts?: SpotSendOptions): Promise<SuccessResponse>;
//# sourceMappingURL=spotSend.d.ts.map