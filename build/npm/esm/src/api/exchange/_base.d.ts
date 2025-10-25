import type { IRequestTransport } from "../../transport/base.js";
import { type Prettify } from "../_base.js";
import { type AbstractWallet } from "../../signing/mod.js";
import { HyperliquidError } from "../../_base.js";
import * as v from "valibot";
export type MaybePromise<T> = T | Promise<T>;
/** Configuration for Exchange API requests. */
export interface ExchangeRequestConfig<T extends IRequestTransport = IRequestTransport, W extends AbstractWallet = AbstractWallet> {
    /** The transport used to connect to the Hyperliquid Exchange API. */
    transport: T;
    /** The wallet used to sign requests. */
    wallet: W;
    /**
     * The network that will be used to sign transactions.
     * Must match the network of the {@link wallet}.
     *
     * Defaults to get chain id from wallet otherwise `0x1`.
     */
    signatureChainId?: string | (() => MaybePromise<string>);
    /**
     * Function to get the next nonce for signing transactions.
     *
     * Defaults to a global nonce manager that uses the current timestamp in milliseconds,
     * and increments if the timestamp is not greater than the last nonce.
     *
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/nonces-and-api-wallets#hyperliquid-nonces
     */
    nonceManager?: () => MaybePromise<number>;
    /**
     * Sets a default vaultAddress to be used if no vaultAddress is explicitly passed to a method.
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#subaccounts-and-vaults
     */
    defaultVaultAddress?: string;
    /**
     * Sets a default expiresAfter to be used if no expiresAfter is explicitly passed to a method.
     * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#expires-after
     */
    defaultExpiresAfter?: number | (() => MaybePromise<number>);
}
/** Configuration for Exchange API requests using multi-signature wallets. */
export interface MultiSignRequestConfig<T extends IRequestTransport = IRequestTransport, S extends readonly AbstractWallet[] = AbstractWallet[]> extends Omit<ExchangeRequestConfig<T, S[0]>, "wallet"> {
    /** The multi-signature account address. */
    multiSigUser: string;
    /** Array of wallets used for multi-signature operations. The first wallet acts as the leader. */
    signers: S;
}
type DistributiveOmit<T, K extends keyof any> = T extends unknown ? Omit<T, K> : never;
export type ExtractRequestAction<T extends {
    action: Record<string, unknown>;
}> = Prettify<T["action"] extends {
    signatureChainId: unknown;
} ? DistributiveOmit<T["action"], "type" | "signatureChainId" | "hyperliquidChain" | "nonce" | "time"> : DistributiveOmit<T["action"], "type">>;
export type ExtractRequestOptions<T extends {
    action: Record<string, unknown>;
}> = Prettify<{
    /**
     * An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
     * If this option is set, the request can be canceled by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)
     * on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
     */
    signal?: AbortSignal;
} & Omit<T, "action" | "nonce" | "signature">>;
/** ECDSA signature components for Ethereum typed data. */
export declare const Signature: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** First 32-byte component of ECDSA signature. */
    readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "First 32-byte component of ECDSA signature.">]>;
    /** Second 32-byte component of ECDSA signature. */
    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Second 32-byte component of ECDSA signature.">]>;
    /** Recovery identifier. */
    readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<27, undefined>, v.LiteralSchema<28, undefined>], undefined>]>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
}, undefined>, v.DescriptionAction<{
    r: `0x${string}`;
    s: `0x${string}`;
    v: 27 | 28;
}, "ECDSA signature components for Ethereum typed data.">]>;
export type Signature = v.InferOutput<typeof Signature>;
/** Error response for failed operations. */
export declare const ErrorResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Error status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"err", undefined>, v.DescriptionAction<"err", "Error status.">]>;
    /** Error message. */
    readonly response: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
}, undefined>, v.DescriptionAction<{
    status: "err";
    response: string;
}, "Error response for failed operations.">]>;
export type ErrorResponse = v.InferOutput<typeof ErrorResponse>;
/** Successful response without specific data. */
export declare const SuccessResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"default", undefined>, v.DescriptionAction<"default", "Type of response.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "default";
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "default";
    };
}, "Successful response without specific data.">]>;
export type SuccessResponse = v.InferOutput<typeof SuccessResponse>;
import type { OrderResponse, OrderSuccessResponse } from "./order.js";
import type { CancelResponse, CancelSuccessResponse } from "./cancel.js";
import type { TwapOrderResponse, TwapOrderSuccessResponse } from "./twapOrder.js";
import type { TwapCancelResponse, TwapCancelSuccessResponse } from "./twapCancel.js";
import type { CreateSubAccountResponse } from "./createSubAccount.js";
import type { CreateVaultResponse } from "./createVault.js";
/** Thrown when an API request fails. */
export declare class ApiRequestError extends HyperliquidError {
    response: ErrorResponse | OrderResponse | CancelResponse | TwapOrderResponse | TwapCancelResponse;
    constructor(response: ErrorResponse | OrderResponse | CancelResponse | TwapOrderResponse | TwapCancelResponse);
}
/** Get the signature chain ID from the config value / function or from the wallet. */
export declare function getSignatureChainId(config: {
    wallet: AbstractWallet;
    signatureChainId?: string | (() => MaybePromise<string>);
} | {
    signers: readonly AbstractWallet[];
    signatureChainId?: string | (() => MaybePromise<string>);
}): Promise<`0x${string}`>;
/** Get the nonce from the config function or from the global nonce manager. */
export declare function getNonce(config?: {
    nonceManager?: () => MaybePromise<number>;
}): Promise<number>;
type AnySuccessResponse = SuccessResponse | CancelSuccessResponse | CreateSubAccountResponse | CreateVaultResponse | OrderSuccessResponse | TwapOrderSuccessResponse | TwapCancelSuccessResponse;
export declare function executeL1Action<T extends AnySuccessResponse>(config: ExchangeRequestConfig | MultiSignRequestConfig, request: {
    action: Record<string, unknown>;
    vaultAddress?: string;
    expiresAfter?: number;
}, signal?: AbortSignal): Promise<T>;
export declare function executeUserSignedAction<T extends AnySuccessResponse>(config: ExchangeRequestConfig | MultiSignRequestConfig, request: {
    action: {
        signatureChainId: `0x${string}`;
        [key: string]: unknown;
    } & ({
        nonce: number;
        time?: undefined;
    } | {
        time: number;
        nonce?: undefined;
    });
    types: {
        [key: string]: {
            name: string;
            type: string;
        }[];
    };
}, signal?: AbortSignal): Promise<T>;
export declare function executeMultiSigAction<T extends AnySuccessResponse>(config: ExchangeRequestConfig, request: {
    action: {
        signatureChainId: `0x${string}`;
        [key: string]: unknown;
    };
    nonce: number;
    vaultAddress?: string;
    expiresAfter?: number;
}, signal?: AbortSignal): Promise<T>;
export {};
//# sourceMappingURL=_base.d.ts.map