import { type DeepImmutable } from "../_base.js";
import { type ExchangeRequestConfig, type ExtractRequestAction, type ExtractRequestOptions } from "./_base.js";
import * as v from "valibot";
import { CancelSuccessResponse } from "./cancel.js";
import { CreateSubAccountResponse } from "./createSubAccount.js";
import { CreateVaultResponse } from "./createVault.js";
import { OrderSuccessResponse } from "./order.js";
import { TwapOrderSuccessResponse } from "./twapOrder.js";
import { TwapCancelSuccessResponse } from "./twapCancel.js";
/**
 * A multi-signature request.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare const MultiSigRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"multiSig", undefined>, v.DescriptionAction<"multiSig", "Type of action.">]>;
        /** Chain ID used for signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
        /** List of signatures from authorized signers. */
        readonly signatures: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "First 32-byte component of ECDSA signature.">]>;
            readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.TransformAction<`0x${string}`, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Second 32-byte component of ECDSA signature.">]>;
            readonly v: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>]>, v.UnionSchema<[v.LiteralSchema<27, undefined>, v.LiteralSchema<28, undefined>], undefined>]>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
        }, undefined>, v.DescriptionAction<{
            r: `0x${string}`;
            s: `0x${string}`;
            v: 27 | 28;
        }, "ECDSA signature components for Ethereum typed data.">]>, undefined>, v.DescriptionAction<{
            r: `0x${string}`;
            s: `0x${string}`;
            v: 27 | 28;
        }[], "List of signatures from authorized signers.">]>;
        /** Multi-signature payload information. */
        readonly payload: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Address of the multi-signature user account. */
            readonly multiSigUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the multi-signature user account.">]>;
            /** Address of the authorized user initiating the request (any authorized user). */
            readonly outerSigner: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the authorized user initiating the request (any authorized user).">]>;
            /** The underlying action to be executed through multi-sig. */
            readonly action: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveAgent", undefined>, v.DescriptionAction<"approveAgent", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Agent address.">]>;
                readonly agentName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.NullableSchema<v.StringSchema<undefined>, undefined>, null>, v.DescriptionAction<string | null, "Agent name or null for unnamed agent.">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "approveAgent";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                agentAddress: `0x${string}`;
                agentName: string | null;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveBuilderFee", undefined>, v.DescriptionAction<"approveBuilderFee", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly maxFeeRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "Max fee rate (e.g., \"0.01%\").">]>;
                readonly builder: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "approveBuilderFee";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                maxFeeRate: `${string}%`;
                builder: `0x${string}`;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"batchModify", undefined>, v.DescriptionAction<"batchModify", "Type of action.">]>;
                readonly modifies: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                    readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
                    readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                        readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                        readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
                        readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
                        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
                        readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
                        readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                            readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                                readonly tif: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
                            }, undefined>, v.DescriptionAction<{
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            }, "Limit order parameters.">]>;
                        }, undefined>, v.ObjectSchema<{
                            readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                                readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                                readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
                                readonly tpsl: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"tp", undefined>, v.LiteralSchema<"sl", undefined>], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
                            }, undefined>, v.DescriptionAction<{
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            }, "Trigger order parameters.">]>;
                        }, undefined>], undefined>, v.DescriptionAction<{
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        }, "Order type.">]>;
                        readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                    }, undefined>, v.DescriptionAction<{
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    }, "Place order parameters.">]>;
                }, undefined>, undefined>, v.DescriptionAction<{
                    oid: number | `0x${string}`;
                    order: {
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    };
                }[], "Order modifications.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "batchModify";
                modifies: {
                    oid: number | `0x${string}`;
                    order: {
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    };
                }[];
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of action.">]>;
                readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                    readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                    readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
                }, undefined>, undefined>, v.DescriptionAction<{
                    a: number;
                    o: number;
                }[], "Orders to cancel.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "cancel";
                cancels: {
                    a: number;
                    o: number;
                }[];
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancelByCloid", undefined>, v.DescriptionAction<"cancelByCloid", "Type of action.">]>;
                readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                    readonly asset: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                    readonly cloid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, v.DescriptionAction<`0x${string}`, "Client Order ID.">]>;
                }, undefined>, undefined>, v.DescriptionAction<{
                    asset: number;
                    cloid: `0x${string}`;
                }[], "Orders to cancel.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "cancelByCloid";
                cancels: {
                    asset: number;
                    cloid: `0x${string}`;
                }[];
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cDeposit", undefined>, v.DescriptionAction<"cDeposit", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount of wei to deposit into staking balance (float * 1e8).">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "cDeposit";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"claimRewards", undefined>, v.DescriptionAction<"claimRewards", "Type of action.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "claimRewards";
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"convertToMultiSigUser", undefined>, v.DescriptionAction<"convertToMultiSigUser", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly signers: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                    readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
                    readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
                }, undefined>, v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Convert a multi-signature account to a single-signature account.">]>], undefined>, v.DescriptionAction<{
                    authorizedUsers: `0x${string}`[];
                    threshold: number;
                } | null, "Signers configuration for `ConvertToMultiSigUserRequest`">]>, v.StringifyJsonAction<{
                    authorizedUsers: `0x${string}`[];
                    threshold: number;
                } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                    readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
                    readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
                }, undefined>, v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Convert a multi-signature account to a single-signature account.">]>], undefined>, v.DescriptionAction<{
                    authorizedUsers: `0x${string}`[];
                    threshold: number;
                } | null, "Signers configuration for `ConvertToMultiSigUserRequest`">]>, v.StringifyJsonAction<{
                    authorizedUsers: `0x${string}`[];
                    threshold: number;
                } | null, undefined, undefined>]>], undefined>, v.DescriptionAction<string, string>]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "convertToMultiSigUser";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                signers: string;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createSubAccount", undefined>, v.DescriptionAction<"createSubAccount", "Type of action.">]>;
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Sub-account name.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "createSubAccount";
                name: string;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createVault", undefined>, v.DescriptionAction<"createVault", "Type of action.">]>;
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 3, undefined>, v.DescriptionAction<string, "Vault name.">]>;
                readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 10, undefined>, v.DescriptionAction<string, "Vault description.">]>;
                readonly initialUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 100000000, undefined>, v.DescriptionAction<number, "Initial balance (float * 1e6).">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, () => number>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "createVault";
                name: string;
                description: string;
                initialUsd: number;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
                readonly jailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Jail the signer.">]>;
            }, undefined>, v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
                readonly unjailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unjail the signer.">]>;
            }, undefined>], undefined>, v.DescriptionAction<{
                type: "CSignerAction";
                jailSelf: null;
            } | {
                type: "CSignerAction";
                unjailSelf: null;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
                readonly changeProfile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly node_ip: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                        readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
                    }, undefined>, undefined>, v.DescriptionAction<{
                        Ip: string;
                    } | null, "Validator node IP address.">]>;
                    readonly name: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator name.">]>;
                    readonly description: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator description.">]>;
                    readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Validator jail status.">]>;
                    readonly disable_delegations: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "Enable or disable delegations.">]>;
                    readonly commission_bps: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Commission rate in basis points (1 = 0.0001%).">]>;
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
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
                readonly register: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly profile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                        readonly node_ip: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                            readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
                        }, undefined>, v.DescriptionAction<{
                            Ip: string;
                        }, "Validator node IP address.">]>;
                        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator name.">]>;
                        readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator description.">]>;
                        readonly delegations_disabled: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether delegations are disabled.">]>;
                        readonly commission_bps: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Commission rate in basis points (1 = 0.0001%).">]>;
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
                    readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Initial jail status.">]>;
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
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
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
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cWithdraw", undefined>, v.DescriptionAction<"cWithdraw", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount of wei to withdraw from staking balance (float * 1e8).">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "cWithdraw";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"evmUserModify", undefined>, v.DescriptionAction<"evmUserModify", "Type of action.">]>;
                readonly usingBigBlocks: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for large blocks, `false` for small blocks.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "evmUserModify";
                usingBigBlocks: boolean;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"modify", undefined>, v.DescriptionAction<"modify", "Type of action.">]>;
                readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
                readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                    readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
                    readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
                    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
                    readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
                    readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                        readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                            readonly tif: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
                        }, undefined>, v.DescriptionAction<{
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        }, "Limit order parameters.">]>;
                    }, undefined>, v.ObjectSchema<{
                        readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                            readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                            readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
                            readonly tpsl: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"tp", undefined>, v.LiteralSchema<"sl", undefined>], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
                        }, undefined>, v.DescriptionAction<{
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        }, "Trigger order parameters.">]>;
                    }, undefined>], undefined>, v.DescriptionAction<{
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    }, "Order type.">]>;
                    readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }, "Place order parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "modify";
                oid: number | `0x${string}`;
                order: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                };
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"noop", undefined>, v.DescriptionAction<"noop", "Type of action.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "noop";
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"order", undefined>, v.DescriptionAction<"order", "Type of action.">]>;
                readonly orders: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                    readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
                    readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Price.">]>;
                    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
                    readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
                    readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                        readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                            readonly tif: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Gtc", undefined>, v.LiteralSchema<"Ioc", undefined>, v.LiteralSchema<"Alo", undefined>, v.LiteralSchema<"FrontendMarket", undefined>, v.LiteralSchema<"LiquidationMarket", undefined>], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
                        }, undefined>, v.DescriptionAction<{
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        }, "Limit order parameters.">]>;
                    }, undefined>, v.ObjectSchema<{
                        readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                            readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                            readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Trigger price.">]>;
                            readonly tpsl: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"tp", undefined>, v.LiteralSchema<"sl", undefined>], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
                        }, undefined>, v.DescriptionAction<{
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        }, "Trigger order parameters.">]>;
                    }, undefined>], undefined>, v.DescriptionAction<{
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    }, "Order type.">]>;
                    readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
                }, undefined>, v.DescriptionAction<{
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }, "Place order parameters.">]>, undefined>, v.DescriptionAction<{
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }[], "Order parameters.">]>;
                readonly grouping: v.SchemaWithPipe<readonly [v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"na", undefined>, v.LiteralSchema<"normalTpsl", undefined>, v.LiteralSchema<"positionTpsl", undefined>], undefined>, "na">, v.DescriptionAction<"na" | "normalTpsl" | "positionTpsl", string>]>;
                readonly builder: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ObjectSchema<{
                    readonly b: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
                    readonly f: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Builder fee in 0.1bps (1 = 0.0001%).">]>;
                }, undefined>, undefined>, v.DescriptionAction<{
                    b: `0x${string}`;
                    f: number;
                } | undefined, "Builder fee.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "order";
                orders: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }[];
                grouping: "na" | "normalTpsl" | "positionTpsl";
                builder?: {
                    b: `0x${string}`;
                    f: number;
                } | undefined;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
                readonly registerAsset: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
                    readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
                        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
                        readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
                        readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
                        readonly onlyIsolated: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the asset can only be traded with isolated margin.">]>;
                    }, undefined>, v.DescriptionAction<{
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    }, "Contains new asset listing parameters.">]>;
                    readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
                    readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                        readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
                        readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
                        readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
                    }, undefined>, undefined>, v.DescriptionAction<{
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null, "Contains new dex parameters.">]>;
                }, undefined>, v.DescriptionAction<{
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                }, "Parameters for registering a new perpetual asset.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "perpDeploy";
                registerAsset: {
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                };
            }, "Register asset variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
                readonly setOracle: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
                    readonly oraclePxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and oracle prices.">]>;
                    readonly markPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, undefined>, v.DescriptionAction<[string, string][][], "An outer list of inner lists (inner list sorted by key) of asset and mark prices.">]>;
                    readonly externalPerpPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and external prices which prevent sudden mark price deviations.">]>;
                }, undefined>, v.DescriptionAction<{
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                }, "Parameters for setting oracle and mark prices for assets.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "perpDeploy";
                setOracle: {
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                };
            }, "Set oracle variant">]>], undefined>, v.DescriptionAction<{
                type: "perpDeploy";
                registerAsset: {
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                };
            } | {
                type: "perpDeploy";
                setOracle: {
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                };
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"registerReferrer", undefined>, v.DescriptionAction<"registerReferrer", "Type of action.">]>;
                readonly code: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Referral code to create.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "registerReferrer";
                code: string;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"reserveRequestWeight", undefined>, v.DescriptionAction<"reserveRequestWeight", "Type of action.">]>;
                readonly weight: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount of request weight to reserve.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "reserveRequestWeight";
                weight: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"scheduleCancel", undefined>, v.DescriptionAction<"scheduleCancel", "Type of action.">]>;
                readonly time: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, string>]>;
            }, undefined>, v.DescriptionAction<{
                type: "scheduleCancel";
                time?: number | undefined;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"sendAsset", undefined>, v.DescriptionAction<"sendAsset", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
                readonly sourceDex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Source DEX (\"\" for default USDC perp DEX, \"spot\" for spot).">]>;
                readonly destinationDex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Destination DEX (\"\" for default USDC perp DEX, \"spot\" for spot).">]>;
                readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}:0x${string}`>]>, v.DescriptionAction<`${string}:0x${string}`, "Token identifier.">]>;
                readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to send (not in wei).">]>;
                readonly fromSubAccount: v.SchemaWithPipe<readonly [v.OptionalSchema<v.UnionSchema<[v.LiteralSchema<"", undefined>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>], undefined>, "">, v.DescriptionAction<"" | `0x${string}`, "Source sub-account address (\"\" for main account).">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "sendAsset";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                sourceDex: string;
                destinationDex: string;
                token: `${string}:0x${string}`;
                amount: string;
                fromSubAccount: "" | `0x${string}`;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"setDisplayName", undefined>, v.DescriptionAction<"setDisplayName", "Type of action.">]>;
                readonly displayName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, string>]>;
            }, undefined>, v.DescriptionAction<{
                type: "setDisplayName";
                displayName: string;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"setReferrer", undefined>, v.DescriptionAction<"setReferrer", "Type of action.">]>;
                readonly code: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "Referral code.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "setReferrer";
                code: string;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
                readonly genesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
                    readonly maxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Maximum token supply.">]>;
                    readonly noHyperliquidity: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Set hyperliquidity balance to 0.">]>;
                }, undefined>, v.DescriptionAction<{
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                }, "Genesis parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                genesis: {
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                };
            }, "Genesis variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
                readonly registerHyperliquidity: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly spot: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Spot index (distinct from base token index).">]>;
                    readonly startPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Starting price for liquidity seeding.">]>;
                    readonly orderSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Order size as a float (not in wei).">]>;
                    readonly nOrders: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total number of orders to place.">]>;
                    readonly nSeededLevels: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Number of levels to seed with USDC.">]>;
                }, undefined>, v.DescriptionAction<{
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                }, "Register hyperliquidity parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                registerHyperliquidity: {
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                };
            }, "Register hyperliquidity variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
                readonly registerSpot: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly tokens: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, v.DescriptionAction<[number, number], "Tuple containing base and quote token indices.">]>;
                }, undefined>, v.DescriptionAction<{
                    tokens: [number, number];
                }, "Register spot parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                registerSpot: {
                    tokens: [number, number];
                };
            }, "Register spot variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
                readonly registerToken2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly spec: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token name.">]>;
                        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token size.">]>;
                        readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token amounts in wei.">]>;
                    }, undefined>, v.DescriptionAction<{
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    }, "Token specifications.">]>;
                    readonly maxGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Maximum gas allowed for registration.">]>;
                    readonly fullName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "Optional full token name.">]>;
                }, undefined>, v.DescriptionAction<{
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                }, "Register token parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                registerToken2: {
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                };
            }, "Register token variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
                readonly setDeployerTradingFeeShare: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
                    readonly share: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "The deployer trading fee share. Range is 0% to 100%.">]>;
                }, undefined>, v.DescriptionAction<{
                    token: number;
                    share: `${string}%`;
                }, "Set deployer trading fee share parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                setDeployerTradingFeeShare: {
                    token: number;
                    share: `${string}%`;
                };
            }, "Set deployer trading fee share variant">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
                readonly userGenesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
                    readonly userAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "Array of tuples: [user address, genesis amount in wei].">]>;
                    readonly existingTokenAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Array of tuples: [existing token identifier, genesis amount in wei].">]>;
                    readonly blacklistUsers: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>, v.DescriptionAction<[`0x${string}`, boolean][] | undefined, "Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).">]>;
                }, undefined>, v.DescriptionAction<{
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                }, "User genesis parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                userGenesis: {
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                };
            }, "User genesis variant">]>], undefined>, v.DescriptionAction<{
                type: "spotDeploy";
                genesis: {
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                };
            } | {
                type: "spotDeploy";
                registerHyperliquidity: {
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                };
            } | {
                type: "spotDeploy";
                registerSpot: {
                    tokens: [number, number];
                };
            } | {
                type: "spotDeploy";
                registerToken2: {
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                };
            } | {
                type: "spotDeploy";
                setDeployerTradingFeeShare: {
                    token: number;
                    share: `${string}%`;
                };
            } | {
                type: "spotDeploy";
                userGenesis: {
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                };
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotSend", undefined>, v.DescriptionAction<"spotSend", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
                readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}:0x${string}`>]>, v.DescriptionAction<`${string}:0x${string}`, "Token identifier.">]>;
                readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to send (not in wei).">]>;
                readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                token: `${string}:0x${string}`;
                amount: string;
                time: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotUser", undefined>, v.DescriptionAction<"spotUser", "Type of action.">]>;
                readonly toggleSpotDusting: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly optOut: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Opt out of spot dusting.">]>;
                }, undefined>, v.DescriptionAction<{
                    optOut: boolean;
                }, "Spot dusting options.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "spotUser";
                toggleSpotDusting: {
                    optOut: boolean;
                };
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountModify", undefined>, v.DescriptionAction<"subAccountModify", "Type of action.">]>;
                readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address to modify.">]>;
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.DescriptionAction<string, "New sub-account name.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "subAccountModify";
                subAccountUser: `0x${string}`;
                name: string;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountSpotTransfer", undefined>, v.DescriptionAction<"subAccountSpotTransfer", "Type of action.">]>;
                readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address.">]>;
                readonly isDeposit: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for deposit, `false` for withdrawal.">]>;
                readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}:0x${string}`>]>, v.DescriptionAction<`${string}:0x${string}`, "Token identifier.">]>;
                readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to send (not in wei).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "subAccountSpotTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                token: `${string}:0x${string}`;
                amount: string;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountTransfer", undefined>, v.DescriptionAction<"subAccountTransfer", "Type of action.">]>;
                readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address.">]>;
                readonly isDeposit: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for deposit, `false` for withdrawal.">]>;
                readonly usd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount to transfer (float * 1e6).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "subAccountTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"tokenDelegate", undefined>, v.DescriptionAction<"tokenDelegate", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly validator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Validator address.">]>;
                readonly wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount for delegate/undelegate (float * 1e8).">]>;
                readonly isUndelegate: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for undelegate, `false` for delegate.">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "tokenDelegate";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                validator: `0x${string}`;
                wei: number;
                isUndelegate: boolean;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"twapCancel", undefined>, v.DescriptionAction<"twapCancel", "Type of action.">]>;
                readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                readonly t: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Twap ID.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "twapCancel";
                a: number;
                t: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"twapOrder", undefined>, v.DescriptionAction<"twapOrder", "Type of action.">]>;
                readonly twap: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                    readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
                    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
                    readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
                    readonly m: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "TWAP duration in minutes.">]>;
                    readonly t: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Enable random order timing.">]>;
                }, undefined>, v.DescriptionAction<{
                    a: number;
                    b: boolean;
                    s: string;
                    r: boolean;
                    m: number;
                    t: boolean;
                }, "Twap parameters.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "twapOrder";
                twap: {
                    a: number;
                    b: boolean;
                    s: string;
                    r: boolean;
                    m: number;
                    t: boolean;
                };
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"updateIsolatedMargin", undefined>, v.DescriptionAction<"updateIsolatedMargin", "Type of action.">]>;
                readonly asset: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                readonly isBuy: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
                readonly ntli: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount to adjust (float * 1e6).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "updateIsolatedMargin";
                asset: number;
                isBuy: boolean;
                ntli: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"updateLeverage", undefined>, v.DescriptionAction<"updateLeverage", "Type of action.">]>;
                readonly asset: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
                readonly isCross: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for cross leverage, `false` for isolated leverage.">]>;
                readonly leverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>]>, v.DescriptionAction<number, "New leverage value.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "updateLeverage";
                asset: number;
                isCross: boolean;
                leverage: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"usdClassTransfer", undefined>, v.DescriptionAction<"usdClassTransfer", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to transfer (1 = $1).">]>;
                readonly toPerp: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for Spot to Perp, `false` for Perp to Spot.">]>;
                readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "usdClassTransfer";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                amount: string;
                toPerp: boolean;
                nonce: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"usdSend", undefined>, v.DescriptionAction<"usdSend", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
                readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to send (1 = $1).">]>;
                readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "usdSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDistribute", undefined>, v.DescriptionAction<"vaultDistribute", "Type of action.">]>;
                readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
                readonly usd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, string>]>;
            }, undefined>, v.DescriptionAction<{
                type: "vaultDistribute";
                vaultAddress: `0x${string}`;
                usd: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultModify", undefined>, v.DescriptionAction<"vaultModify", "Type of action.">]>;
                readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
                readonly allowDeposits: v.SchemaWithPipe<readonly [v.OptionalSchema<v.NullableSchema<v.BooleanSchema<undefined>, undefined>, null>, v.DescriptionAction<boolean | null, "Allow deposits from followers.">]>;
                readonly alwaysCloseOnWithdraw: v.SchemaWithPipe<readonly [v.OptionalSchema<v.NullableSchema<v.BooleanSchema<undefined>, undefined>, null>, v.DescriptionAction<boolean | null, "Always close positions on withdrawal.">]>;
            }, undefined>, v.DescriptionAction<{
                type: "vaultModify";
                vaultAddress: `0x${string}`;
                allowDeposits: boolean | null;
                alwaysCloseOnWithdraw: boolean | null;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultTransfer", undefined>, v.DescriptionAction<"vaultTransfer", "Type of action.">]>;
                readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
                readonly isDeposit: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for deposit, `false` for withdrawal.">]>;
                readonly usd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Amount for deposit/withdrawal (float * 1e6).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "vaultTransfer";
                vaultAddress: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            }, "Action to perform.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"withdraw3", undefined>, v.DescriptionAction<"withdraw3", "Type of action.">]>;
                readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID used for signing.">]>;
                readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Mainnet", undefined>, v.LiteralSchema<"Testnet", undefined>], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network.">]>;
                readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
                readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount to withdraw (1 = $1).">]>;
                readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique request identifier (current timestamp in ms).">]>;
            }, undefined>, v.DescriptionAction<{
                type: "withdraw3";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            }, "Action to perform.">]>], undefined>, v.DescriptionAction<{
                type: "order";
                orders: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }[];
                grouping: "na" | "normalTpsl" | "positionTpsl";
                builder?: {
                    b: `0x${string}`;
                    f: number;
                } | undefined;
            } | {
                type: "cancel";
                cancels: {
                    a: number;
                    o: number;
                }[];
            } | {
                type: "twapOrder";
                twap: {
                    a: number;
                    b: boolean;
                    s: string;
                    r: boolean;
                    m: number;
                    t: boolean;
                };
            } | {
                type: "twapCancel";
                a: number;
                t: number;
            } | {
                type: "createSubAccount";
                name: string;
            } | {
                type: "createVault";
                name: string;
                description: string;
                initialUsd: number;
                nonce: number;
            } | {
                type: "approveAgent";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                agentAddress: `0x${string}`;
                agentName: string | null;
                nonce: number;
            } | {
                type: "approveBuilderFee";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                maxFeeRate: `${string}%`;
                builder: `0x${string}`;
                nonce: number;
            } | {
                type: "batchModify";
                modifies: {
                    oid: number | `0x${string}`;
                    order: {
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    };
                }[];
            } | {
                type: "cancelByCloid";
                cancels: {
                    asset: number;
                    cloid: `0x${string}`;
                }[];
            } | {
                type: "cDeposit";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "claimRewards";
            } | {
                type: "convertToMultiSigUser";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                signers: string;
                nonce: number;
            } | {
                type: "CSignerAction";
                jailSelf: null;
            } | {
                type: "CSignerAction";
                unjailSelf: null;
            } | {
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
            } | {
                type: "cWithdraw";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "evmUserModify";
                usingBigBlocks: boolean;
            } | {
                type: "modify";
                oid: number | `0x${string}`;
                order: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                };
            } | {
                type: "noop";
            } | {
                type: "registerReferrer";
                code: string;
            } | {
                type: "reserveRequestWeight";
                weight: number;
            } | {
                type: "scheduleCancel";
                time?: number | undefined;
            } | {
                type: "setDisplayName";
                displayName: string;
            } | {
                type: "setReferrer";
                code: string;
            } | {
                type: "spotDeploy";
                genesis: {
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                };
            } | {
                type: "spotDeploy";
                registerHyperliquidity: {
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                };
            } | {
                type: "spotDeploy";
                registerSpot: {
                    tokens: [number, number];
                };
            } | {
                type: "spotDeploy";
                registerToken2: {
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                };
            } | {
                type: "spotDeploy";
                setDeployerTradingFeeShare: {
                    token: number;
                    share: `${string}%`;
                };
            } | {
                type: "spotDeploy";
                userGenesis: {
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                };
            } | {
                type: "subAccountModify";
                subAccountUser: `0x${string}`;
                name: string;
            } | {
                type: "tokenDelegate";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                validator: `0x${string}`;
                wei: number;
                isUndelegate: boolean;
                nonce: number;
            } | {
                type: "usdClassTransfer";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                amount: string;
                toPerp: boolean;
                nonce: number;
            } | {
                type: "vaultDistribute";
                vaultAddress: `0x${string}`;
                usd: number;
            } | {
                type: "withdraw3";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "perpDeploy";
                registerAsset: {
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                };
            } | {
                type: "perpDeploy";
                setOracle: {
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                };
            } | {
                type: "sendAsset";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                sourceDex: string;
                destinationDex: string;
                token: `${string}:0x${string}`;
                amount: string;
                fromSubAccount: "" | `0x${string}`;
                nonce: number;
            } | {
                type: "spotSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                token: `${string}:0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "spotUser";
                toggleSpotDusting: {
                    optOut: boolean;
                };
            } | {
                type: "subAccountSpotTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                token: `${string}:0x${string}`;
                amount: string;
            } | {
                type: "subAccountTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            } | {
                type: "updateIsolatedMargin";
                asset: number;
                isBuy: boolean;
                ntli: number;
            } | {
                type: "updateLeverage";
                asset: number;
                isCross: boolean;
                leverage: number;
            } | {
                type: "usdSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "vaultModify";
                vaultAddress: `0x${string}`;
                allowDeposits: boolean | null;
                alwaysCloseOnWithdraw: boolean | null;
            } | {
                type: "vaultTransfer";
                vaultAddress: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            }, "The underlying action to be executed through multi-sig.">]>;
        }, undefined>, v.DescriptionAction<{
            multiSigUser: `0x${string}`;
            outerSigner: `0x${string}`;
            action: {
                type: "order";
                orders: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }[];
                grouping: "na" | "normalTpsl" | "positionTpsl";
                builder?: {
                    b: `0x${string}`;
                    f: number;
                } | undefined;
            } | {
                type: "cancel";
                cancels: {
                    a: number;
                    o: number;
                }[];
            } | {
                type: "twapOrder";
                twap: {
                    a: number;
                    b: boolean;
                    s: string;
                    r: boolean;
                    m: number;
                    t: boolean;
                };
            } | {
                type: "twapCancel";
                a: number;
                t: number;
            } | {
                type: "createSubAccount";
                name: string;
            } | {
                type: "createVault";
                name: string;
                description: string;
                initialUsd: number;
                nonce: number;
            } | {
                type: "approveAgent";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                agentAddress: `0x${string}`;
                agentName: string | null;
                nonce: number;
            } | {
                type: "approveBuilderFee";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                maxFeeRate: `${string}%`;
                builder: `0x${string}`;
                nonce: number;
            } | {
                type: "batchModify";
                modifies: {
                    oid: number | `0x${string}`;
                    order: {
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    };
                }[];
            } | {
                type: "cancelByCloid";
                cancels: {
                    asset: number;
                    cloid: `0x${string}`;
                }[];
            } | {
                type: "cDeposit";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "claimRewards";
            } | {
                type: "convertToMultiSigUser";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                signers: string;
                nonce: number;
            } | {
                type: "CSignerAction";
                jailSelf: null;
            } | {
                type: "CSignerAction";
                unjailSelf: null;
            } | {
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
            } | {
                type: "cWithdraw";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "evmUserModify";
                usingBigBlocks: boolean;
            } | {
                type: "modify";
                oid: number | `0x${string}`;
                order: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                };
            } | {
                type: "noop";
            } | {
                type: "registerReferrer";
                code: string;
            } | {
                type: "reserveRequestWeight";
                weight: number;
            } | {
                type: "scheduleCancel";
                time?: number | undefined;
            } | {
                type: "setDisplayName";
                displayName: string;
            } | {
                type: "setReferrer";
                code: string;
            } | {
                type: "spotDeploy";
                genesis: {
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                };
            } | {
                type: "spotDeploy";
                registerHyperliquidity: {
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                };
            } | {
                type: "spotDeploy";
                registerSpot: {
                    tokens: [number, number];
                };
            } | {
                type: "spotDeploy";
                registerToken2: {
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                };
            } | {
                type: "spotDeploy";
                setDeployerTradingFeeShare: {
                    token: number;
                    share: `${string}%`;
                };
            } | {
                type: "spotDeploy";
                userGenesis: {
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                };
            } | {
                type: "subAccountModify";
                subAccountUser: `0x${string}`;
                name: string;
            } | {
                type: "tokenDelegate";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                validator: `0x${string}`;
                wei: number;
                isUndelegate: boolean;
                nonce: number;
            } | {
                type: "usdClassTransfer";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                amount: string;
                toPerp: boolean;
                nonce: number;
            } | {
                type: "vaultDistribute";
                vaultAddress: `0x${string}`;
                usd: number;
            } | {
                type: "withdraw3";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "perpDeploy";
                registerAsset: {
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                };
            } | {
                type: "perpDeploy";
                setOracle: {
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                };
            } | {
                type: "sendAsset";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                sourceDex: string;
                destinationDex: string;
                token: `${string}:0x${string}`;
                amount: string;
                fromSubAccount: "" | `0x${string}`;
                nonce: number;
            } | {
                type: "spotSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                token: `${string}:0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "spotUser";
                toggleSpotDusting: {
                    optOut: boolean;
                };
            } | {
                type: "subAccountSpotTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                token: `${string}:0x${string}`;
                amount: string;
            } | {
                type: "subAccountTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            } | {
                type: "updateIsolatedMargin";
                asset: number;
                isBuy: boolean;
                ntli: number;
            } | {
                type: "updateLeverage";
                asset: number;
                isCross: boolean;
                leverage: number;
            } | {
                type: "usdSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "vaultModify";
                vaultAddress: `0x${string}`;
                allowDeposits: boolean | null;
                alwaysCloseOnWithdraw: boolean | null;
            } | {
                type: "vaultTransfer";
                vaultAddress: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            };
        }, "Multi-signature payload information.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "multiSig";
        signatureChainId: `0x${string}`;
        signatures: {
            r: `0x${string}`;
            s: `0x${string}`;
            v: 27 | 28;
        }[];
        payload: {
            multiSigUser: `0x${string}`;
            outerSigner: `0x${string}`;
            action: {
                type: "order";
                orders: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }[];
                grouping: "na" | "normalTpsl" | "positionTpsl";
                builder?: {
                    b: `0x${string}`;
                    f: number;
                } | undefined;
            } | {
                type: "cancel";
                cancels: {
                    a: number;
                    o: number;
                }[];
            } | {
                type: "twapOrder";
                twap: {
                    a: number;
                    b: boolean;
                    s: string;
                    r: boolean;
                    m: number;
                    t: boolean;
                };
            } | {
                type: "twapCancel";
                a: number;
                t: number;
            } | {
                type: "createSubAccount";
                name: string;
            } | {
                type: "createVault";
                name: string;
                description: string;
                initialUsd: number;
                nonce: number;
            } | {
                type: "approveAgent";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                agentAddress: `0x${string}`;
                agentName: string | null;
                nonce: number;
            } | {
                type: "approveBuilderFee";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                maxFeeRate: `${string}%`;
                builder: `0x${string}`;
                nonce: number;
            } | {
                type: "batchModify";
                modifies: {
                    oid: number | `0x${string}`;
                    order: {
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    };
                }[];
            } | {
                type: "cancelByCloid";
                cancels: {
                    asset: number;
                    cloid: `0x${string}`;
                }[];
            } | {
                type: "cDeposit";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "claimRewards";
            } | {
                type: "convertToMultiSigUser";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                signers: string;
                nonce: number;
            } | {
                type: "CSignerAction";
                jailSelf: null;
            } | {
                type: "CSignerAction";
                unjailSelf: null;
            } | {
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
            } | {
                type: "cWithdraw";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "evmUserModify";
                usingBigBlocks: boolean;
            } | {
                type: "modify";
                oid: number | `0x${string}`;
                order: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                };
            } | {
                type: "noop";
            } | {
                type: "registerReferrer";
                code: string;
            } | {
                type: "reserveRequestWeight";
                weight: number;
            } | {
                type: "scheduleCancel";
                time?: number | undefined;
            } | {
                type: "setDisplayName";
                displayName: string;
            } | {
                type: "setReferrer";
                code: string;
            } | {
                type: "spotDeploy";
                genesis: {
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                };
            } | {
                type: "spotDeploy";
                registerHyperliquidity: {
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                };
            } | {
                type: "spotDeploy";
                registerSpot: {
                    tokens: [number, number];
                };
            } | {
                type: "spotDeploy";
                registerToken2: {
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                };
            } | {
                type: "spotDeploy";
                setDeployerTradingFeeShare: {
                    token: number;
                    share: `${string}%`;
                };
            } | {
                type: "spotDeploy";
                userGenesis: {
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                };
            } | {
                type: "subAccountModify";
                subAccountUser: `0x${string}`;
                name: string;
            } | {
                type: "tokenDelegate";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                validator: `0x${string}`;
                wei: number;
                isUndelegate: boolean;
                nonce: number;
            } | {
                type: "usdClassTransfer";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                amount: string;
                toPerp: boolean;
                nonce: number;
            } | {
                type: "vaultDistribute";
                vaultAddress: `0x${string}`;
                usd: number;
            } | {
                type: "withdraw3";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "perpDeploy";
                registerAsset: {
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                };
            } | {
                type: "perpDeploy";
                setOracle: {
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                };
            } | {
                type: "sendAsset";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                sourceDex: string;
                destinationDex: string;
                token: `${string}:0x${string}`;
                amount: string;
                fromSubAccount: "" | `0x${string}`;
                nonce: number;
            } | {
                type: "spotSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                token: `${string}:0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "spotUser";
                toggleSpotDusting: {
                    optOut: boolean;
                };
            } | {
                type: "subAccountSpotTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                token: `${string}:0x${string}`;
                amount: string;
            } | {
                type: "subAccountTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            } | {
                type: "updateIsolatedMargin";
                asset: number;
                isBuy: boolean;
                ntli: number;
            } | {
                type: "updateLeverage";
                asset: number;
                isCross: boolean;
                leverage: number;
            } | {
                type: "usdSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "vaultModify";
                vaultAddress: `0x${string}`;
                allowDeposits: boolean | null;
                alwaysCloseOnWithdraw: boolean | null;
            } | {
                type: "vaultTransfer";
                vaultAddress: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            };
        };
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
    /** Vault address (for vault trading). */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Vault address (for vault trading).">]>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "multiSig";
        signatureChainId: `0x${string}`;
        signatures: {
            r: `0x${string}`;
            s: `0x${string}`;
            v: 27 | 28;
        }[];
        payload: {
            multiSigUser: `0x${string}`;
            outerSigner: `0x${string}`;
            action: {
                type: "order";
                orders: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                }[];
                grouping: "na" | "normalTpsl" | "positionTpsl";
                builder?: {
                    b: `0x${string}`;
                    f: number;
                } | undefined;
            } | {
                type: "cancel";
                cancels: {
                    a: number;
                    o: number;
                }[];
            } | {
                type: "twapOrder";
                twap: {
                    a: number;
                    b: boolean;
                    s: string;
                    r: boolean;
                    m: number;
                    t: boolean;
                };
            } | {
                type: "twapCancel";
                a: number;
                t: number;
            } | {
                type: "createSubAccount";
                name: string;
            } | {
                type: "createVault";
                name: string;
                description: string;
                initialUsd: number;
                nonce: number;
            } | {
                type: "approveAgent";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                agentAddress: `0x${string}`;
                agentName: string | null;
                nonce: number;
            } | {
                type: "approveBuilderFee";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                maxFeeRate: `${string}%`;
                builder: `0x${string}`;
                nonce: number;
            } | {
                type: "batchModify";
                modifies: {
                    oid: number | `0x${string}`;
                    order: {
                        a: number;
                        b: boolean;
                        p: string;
                        s: string;
                        r: boolean;
                        t: {
                            limit: {
                                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                            };
                        } | {
                            trigger: {
                                isMarket: boolean;
                                triggerPx: string;
                                tpsl: "tp" | "sl";
                            };
                        };
                        c?: `0x${string}` | undefined;
                    };
                }[];
            } | {
                type: "cancelByCloid";
                cancels: {
                    asset: number;
                    cloid: `0x${string}`;
                }[];
            } | {
                type: "cDeposit";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "claimRewards";
            } | {
                type: "convertToMultiSigUser";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                signers: string;
                nonce: number;
            } | {
                type: "CSignerAction";
                jailSelf: null;
            } | {
                type: "CSignerAction";
                unjailSelf: null;
            } | {
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
            } | {
                type: "cWithdraw";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                wei: number;
                nonce: number;
            } | {
                type: "evmUserModify";
                usingBigBlocks: boolean;
            } | {
                type: "modify";
                oid: number | `0x${string}`;
                order: {
                    a: number;
                    b: boolean;
                    p: string;
                    s: string;
                    r: boolean;
                    t: {
                        limit: {
                            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                        };
                    } | {
                        trigger: {
                            isMarket: boolean;
                            triggerPx: string;
                            tpsl: "tp" | "sl";
                        };
                    };
                    c?: `0x${string}` | undefined;
                };
            } | {
                type: "noop";
            } | {
                type: "registerReferrer";
                code: string;
            } | {
                type: "reserveRequestWeight";
                weight: number;
            } | {
                type: "scheduleCancel";
                time?: number | undefined;
            } | {
                type: "setDisplayName";
                displayName: string;
            } | {
                type: "setReferrer";
                code: string;
            } | {
                type: "spotDeploy";
                genesis: {
                    token: number;
                    maxSupply: string;
                    noHyperliquidity?: true | undefined;
                };
            } | {
                type: "spotDeploy";
                registerHyperliquidity: {
                    spot: number;
                    startPx: string;
                    orderSz: string;
                    nOrders: number;
                    nSeededLevels?: number | undefined;
                };
            } | {
                type: "spotDeploy";
                registerSpot: {
                    tokens: [number, number];
                };
            } | {
                type: "spotDeploy";
                registerToken2: {
                    spec: {
                        name: string;
                        szDecimals: number;
                        weiDecimals: number;
                    };
                    maxGas: number;
                    fullName?: string | undefined;
                };
            } | {
                type: "spotDeploy";
                setDeployerTradingFeeShare: {
                    token: number;
                    share: `${string}%`;
                };
            } | {
                type: "spotDeploy";
                userGenesis: {
                    token: number;
                    userAndWei: [`0x${string}`, string][];
                    existingTokenAndWei: [number, string][];
                    blacklistUsers?: [`0x${string}`, boolean][] | undefined;
                };
            } | {
                type: "subAccountModify";
                subAccountUser: `0x${string}`;
                name: string;
            } | {
                type: "tokenDelegate";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                validator: `0x${string}`;
                wei: number;
                isUndelegate: boolean;
                nonce: number;
            } | {
                type: "usdClassTransfer";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                amount: string;
                toPerp: boolean;
                nonce: number;
            } | {
                type: "vaultDistribute";
                vaultAddress: `0x${string}`;
                usd: number;
            } | {
                type: "withdraw3";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "perpDeploy";
                registerAsset: {
                    maxGas: number | null;
                    assetRequest: {
                        coin: string;
                        szDecimals: number;
                        oraclePx: string;
                        marginTableId: number;
                        onlyIsolated: boolean;
                    };
                    dex: string;
                    schema: {
                        fullName: string;
                        collateralToken: number;
                        oracleUpdater: `0x${string}` | null;
                    } | null;
                };
            } | {
                type: "perpDeploy";
                setOracle: {
                    dex: string;
                    oraclePxs: [string, string][];
                    markPxs: [string, string][][];
                    externalPerpPxs: [string, string][];
                };
            } | {
                type: "sendAsset";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                sourceDex: string;
                destinationDex: string;
                token: `${string}:0x${string}`;
                amount: string;
                fromSubAccount: "" | `0x${string}`;
                nonce: number;
            } | {
                type: "spotSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                token: `${string}:0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "spotUser";
                toggleSpotDusting: {
                    optOut: boolean;
                };
            } | {
                type: "subAccountSpotTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                token: `${string}:0x${string}`;
                amount: string;
            } | {
                type: "subAccountTransfer";
                subAccountUser: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            } | {
                type: "updateIsolatedMargin";
                asset: number;
                isBuy: boolean;
                ntli: number;
            } | {
                type: "updateLeverage";
                asset: number;
                isCross: boolean;
                leverage: number;
            } | {
                type: "usdSend";
                signatureChainId: `0x${string}`;
                hyperliquidChain: "Testnet" | "Mainnet";
                destination: `0x${string}`;
                amount: string;
                time: number;
            } | {
                type: "vaultModify";
                vaultAddress: `0x${string}`;
                allowDeposits: boolean | null;
                alwaysCloseOnWithdraw: boolean | null;
            } | {
                type: "vaultTransfer";
                vaultAddress: `0x${string}`;
                isDeposit: boolean;
                usd: number;
            };
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    vaultAddress?: `0x${string}` | undefined;
    expiresAfter?: number | undefined;
}, "A multi-signature request.">]>;
export type MultiSigRequest = v.InferOutput<typeof MultiSigRequest>;
import { SuccessResponse } from "./_base.js";
export { CancelSuccessResponse, CreateSubAccountResponse, CreateVaultResponse, OrderSuccessResponse, SuccessResponse, TwapCancelSuccessResponse, TwapOrderSuccessResponse, };
/** Action parameters for the {@linkcode multiSig} function. */
export type MultiSigParameters = ExtractRequestAction<v.InferInput<typeof MultiSigRequest>> & Pick<v.InferInput<typeof MultiSigRequest>, "nonce">;
/** Request options for the {@linkcode multiSig} function. */
export type MultiSigOptions = ExtractRequestOptions<v.InferInput<typeof MultiSigRequest>>;
/** EIP-712 types for the {@linkcode multiSig} function. */
export declare const MultiSigTypes: {
    "HyperliquidTransaction:SendMultiSig": {
        name: string;
        type: string;
    }[];
};
/**
 * A multi-signature request.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Any successful response.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { multiSig, parser, ScheduleCancelRequest } from "@nktkas/hyperliquid/api/exchange";
 * import { signL1Action } from "@nktkas/hyperliquid/signing";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const multiSigUser = "0x...";
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const nonce = Date.now();
 * const action = parser(ScheduleCancelRequest.entries.action)({
 *   type: "scheduleCancel",
 *   time: Date.now() + 10000,
 * });
 *
 * // Create the required number of signatures
 * const signatures = await Promise.all(["0x...", "0x..."].map(async (signerPrivKey) => {
 *   return await signL1Action({
 *     wallet: privateKeyToAccount(signerPrivKey as `0x${string}`), // viem or ethers
 *     action: [multiSigUser.toLowerCase(), wallet.address.toLowerCase(), action],
 *     nonce,
 *   });
 * }));
 *
 * // // or user-signed action
 * // const signatures = await Promise.all(["0x...", "0x..."].map(async (signerPrivKey) => {
 * //   return await signUserSignedAction({
 * //     wallet: privateKeyToAccount(signerPrivKey as `0x${string}`), // viem or ethers
 * //     action: {
 * //       ...action,
 * //       payloadMultiSigUser: multiSigUser,
 * //       outerSigner: wallet.address,
 * //     },
 * //     types: SomeTypes,
 * //   });
 * // }));
 *
 * // Then use signatures in the `multiSig` action
 * const data = await multiSig(
 *   { transport, wallet },
 *   {
 *     signatures,
 *     payload: {
 *       multiSigUser,
 *       outerSigner: wallet.address,
 *       action,
 *     },
 *     nonce,
 *   },
 * );
 * ```
 */
export declare function multiSig<T extends SuccessResponse | CancelSuccessResponse | CreateSubAccountResponse | CreateVaultResponse | OrderSuccessResponse | TwapOrderSuccessResponse | TwapCancelSuccessResponse>(config: ExchangeRequestConfig, paramsAndNonce: DeepImmutable<MultiSigParameters>, opts?: MultiSigOptions): Promise<T>;
//# sourceMappingURL=multiSig.d.ts.map