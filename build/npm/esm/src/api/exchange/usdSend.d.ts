import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Send usd to another address.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export declare const UsdSendRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"usdSend", undefined>, v.DescriptionAction<"usdSend", "Type of action.">]>;
        /** Chain ID used for signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
        /** HyperLiquid network. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Amount to send (1 = $1). */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to send (1 = $1).">]>;
        /** Unique request identifier (current timestamp in ms). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    }, undefined>, v.DescriptionAction<{
        type: "usdSend";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        destination: `0x${string}`;
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
        type: "usdSend";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        destination: `0x${string}`;
        amount: string;
        time: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Send usd to another address.">]>;
export type UsdSendRequest = v.InferOutput<typeof UsdSendRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode usdSend} function. */
export type UsdSendParameters = ExtractRequestAction<v.InferInput<typeof UsdSendRequest>>;
/** Request options for the {@linkcode usdSend} function. */
export type UsdSendOptions = ExtractRequestOptions<v.InferInput<typeof UsdSendRequest>>;
/** EIP-712 types for the {@linkcode usdSend} function. */
export declare const UsdSendTypes: {
    "HyperliquidTransaction:UsdSend": {
        name: string;
        type: string;
    }[];
};
/**
 * Send usd to another address.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { usdSend } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await usdSend(
 *   { transport, wallet },
 *   { destination: "0x...", amount: "1" },
 * );
 * ```
 */
export declare function usdSend(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<UsdSendParameters>, opts?: UsdSendOptions): Promise<SuccessResponse>;
//# sourceMappingURL=usdSend.d.ts.map