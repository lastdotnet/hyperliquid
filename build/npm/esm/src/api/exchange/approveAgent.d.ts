import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Approve an agent to sign on behalf of the master account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export declare const ApproveAgentRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveAgent", undefined>, v.DescriptionAction<"approveAgent", "Type of action.">]>;
        /** Chain ID used for signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
        /** HyperLiquid network. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
        /** Agent address. */
        readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Agent address.">]>;
        /** Agent name or null for unnamed agent (default: null). */
        readonly agentName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.NullableSchema<v.StringSchema<undefined>, undefined>, null>, v.DescriptionAction<string | null, "Agent name or null for unnamed agent.">]>;
        /** Unique request identifier (current timestamp in ms). */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
    }, undefined>, v.DescriptionAction<{
        type: "approveAgent";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        agentAddress: `0x${string}`;
        agentName: string | null;
        nonce: number;
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
        type: "approveAgent";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        agentAddress: `0x${string}`;
        agentName: string | null;
        nonce: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Approve an agent to sign on behalf of the master account.">]>;
export type ApproveAgentRequest = v.InferOutput<typeof ApproveAgentRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode approveAgent} function. */
export type ApproveAgentParameters = ExtractRequestAction<v.InferInput<typeof ApproveAgentRequest>>;
/** Request options for the {@linkcode approveAgent} function. */
export type ApproveAgentOptions = ExtractRequestOptions<v.InferInput<typeof ApproveAgentRequest>>;
/** EIP-712 types for the {@linkcode approveAgent} function. */
export declare const ApproveAgentTypes: {
    "HyperliquidTransaction:ApproveAgent": {
        name: string;
        type: string;
    }[];
};
/**
 * Approve an agent to sign on behalf of the master account.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { approveAgent } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await approveAgent(
 *   { transport, wallet },
 *   { agentAddress: "0x...", agentName: "..." },
 * );
 * ```
 */
export declare function approveAgent(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<ApproveAgentParameters>, opts?: ApproveAgentOptions): Promise<SuccessResponse>;
//# sourceMappingURL=approveAgent.d.ts.map