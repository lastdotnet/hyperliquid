import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions, type MultiSignRequestConfig } from "./_base.js";
import * as v from "valibot";
/**
 * Action related to validator management.
 * @see null
 */
export declare const CValidatorActionRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Profile changes to apply. */
        readonly changeProfile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator node IP address. */
            readonly node_ip: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** IP address. */
                readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                Ip: string;
            } | null, "Validator node IP address.">]>;
            /** Validator name. */
            readonly name: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator name.">]>;
            /** Validator description. */
            readonly description: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator description.">]>;
            /** Validator jail status. */
            readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Validator jail status.">]>;
            /** Enable or disable delegations. */
            readonly disable_delegations: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "Enable or disable delegations.">]>;
            /** Commission rate in basis points (1 = 0.0001%). */
            readonly commission_bps: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Commission rate in basis points (1 = 0.0001%).">]>;
            /** Signer address. */
            readonly signer: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Signer address.">]>;
        }, undefined>, v.DescriptionAction<{
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        }, "Profile changes to apply.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Registration parameters. */
        readonly register: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator profile information. */
            readonly profile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Validator node IP address. */
                readonly node_ip: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** IP address. */
                    readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
                }, undefined>, v.DescriptionAction<{
                    Ip: string;
                }, "Validator node IP address.">]>;
                /** Validator name. */
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator name.">]>;
                /** Validator description. */
                readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator description.">]>;
                /** Whether delegations are disabled. */
                readonly delegations_disabled: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether delegations are disabled.">]>;
                /** Commission rate in basis points (1 = 0.0001%). */
                readonly commission_bps: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Commission rate in basis points (1 = 0.0001%).">]>;
                /** Signer address. */
                readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Signer address.">]>;
            }, undefined>, v.DescriptionAction<{
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            }, "Validator profile information.">]>;
            /** Initial jail status. */
            readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Initial jail status.">]>;
            /** Initial stake amount in wei. */
            readonly initial_wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Initial stake amount in wei.">]>;
        }, undefined>, v.DescriptionAction<{
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        }, "Registration parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Unregister the validator. */
        readonly unregister: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unregister the validator.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "CValidatorAction";
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        };
    } | {
        type: "CValidatorAction";
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        };
    } | {
        type: "CValidatorAction";
        unregister: null;
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
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "CValidatorAction";
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        };
    } | {
        type: "CValidatorAction";
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        };
    } | {
        type: "CValidatorAction";
        unregister: null;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Action related to validator management.">]>;
export type CValidatorActionRequest = v.InferOutput<typeof CValidatorActionRequest>;
import { SuccessResponse } from "./_base.js";
export { SuccessResponse };
/** Action parameters for the {@linkcode CValidatorAction} function. */
export type CValidatorActionParameters = ExtractRequestAction<v.InferInput<typeof CValidatorActionRequest>>;
/** Request options for the {@linkcode CValidatorAction} function. */
export type CValidatorActionOptions = ExtractRequestOptions<v.InferInput<typeof CValidatorActionRequest>>;
/**
 * Action related to validator management.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cValidatorAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * // Change validator profile
 * await cValidatorAction(
 *   { transport, wallet },
 *   {
 *     changeProfile: {
 *       node_ip: { Ip: "1.2.3.4" },
 *       name: "...",
 *       description: "...",
 *       unjailed: true,
 *       disable_delegations: false,
 *       commission_bps: null,
 *       signer: null,
 *     },
 *   },
 * );
 *
 * // Register a new validator
 * await cValidatorAction(
 *   { transport, wallet },
 *   {
 *     register: {
 *       profile: {
 *         node_ip: { Ip: "1.2.3.4" },
 *         name: "...",
 *         description: "...",
 *         delegations_disabled: true,
 *         commission_bps: 1,
 *         signer: "0x...",
 *       },
 *       unjailed: false,
 *       initial_wei: 1,
 *     },
 *   },
 * );
 *
 * // Unregister a validator
 * await cValidatorAction(
 *   { transport, wallet },
 *   { unregister: null },
 * );
 * ```
 */
export declare function cValidatorAction(config: ExchangeRequestConfig | MultiSignRequestConfig, params: DeepImmutable<CValidatorActionParameters>, opts?: CValidatorActionOptions): Promise<SuccessResponse>;
//# sourceMappingURL=cValidatorAction.d.ts.map