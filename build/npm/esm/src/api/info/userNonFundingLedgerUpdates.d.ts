import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user non-funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserNonFundingLedgerUpdatesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userNonFundingLedgerUpdates", undefined>, v.DescriptionAction<"userNonFundingLedgerUpdates", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time (in ms since epoch).">]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null | undefined, "End time (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    type: "userNonFundingLedgerUpdates";
    user: `0x${string}`;
    startTime: number;
    endTime?: number | null | undefined;
}, "Request user non-funding ledger updates.">]>;
export type UserNonFundingLedgerUpdatesRequest = v.InferOutput<typeof UserNonFundingLedgerUpdatesRequest>;
/** Transfer between spot and perpetual accounts. */
export declare const AccountClassTransferUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"accountClassTransfer", undefined>, v.DescriptionAction<"accountClassTransfer", "Update type.">]>;
    /** Amount transferred in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
    /** Indicates if the transfer is to the perpetual account. */
    readonly toPerp: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the transfer is to the perpetual account.">]>;
}, undefined>, v.DescriptionAction<{
    type: "accountClassTransfer";
    usdc: string;
    toPerp: boolean;
}, "Transfer between spot and perpetual accounts.">]>;
export type AccountClassTransferUpdate = v.InferOutput<typeof AccountClassTransferUpdate>;
/** Deposit update to an account. */
export declare const DepositUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"deposit", undefined>, v.DescriptionAction<"deposit", "Update type.">]>;
    /** Amount deposited in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
}, undefined>, v.DescriptionAction<{
    type: "deposit";
    usdc: string;
}, "Deposit update to an account.">]>;
export type DepositUpdate = v.InferOutput<typeof DepositUpdate>;
/** Internal transfer between accounts. */
export declare const InternalTransferUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"internalTransfer", undefined>, v.DescriptionAction<"internalTransfer", "Update type.">]>;
    /** Amount transferred in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
    /** Initiator address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
    /** Destination address. */
    readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
    /** Transfer fee. */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Transfer fee.">]>;
}, undefined>, v.DescriptionAction<{
    type: "internalTransfer";
    usdc: string;
    user: `0x${string}`;
    destination: `0x${string}`;
    fee: string;
}, "Internal transfer between accounts.">]>;
export type InternalTransferUpdate = v.InferOutput<typeof InternalTransferUpdate>;
/** Liquidation event update. */
export declare const LiquidationUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"liquidation", undefined>, v.DescriptionAction<"liquidation", "Update type.">]>;
    /** Total notional value of liquidated positions. */
    readonly liquidatedNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total notional value of liquidated positions.">]>;
    /** Account value at liquidation time. */
    readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Account value at liquidation time.">]>;
    /** Leverage type for liquidated positions. */
    readonly leverageType: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Cross", undefined>, v.LiteralSchema<"Isolated", undefined>], undefined>, v.DescriptionAction<"Cross" | "Isolated", "Leverage type for liquidated positions.">]>;
    /** Details of each liquidated position. */
    readonly liquidatedPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol of the liquidated position. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol of the liquidated position.">]>;
        /** Signed position size liquidated. */
        readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size liquidated.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        szi: string;
    }, "Liquidated position.">]>, undefined>, v.DescriptionAction<{
        coin: string;
        szi: string;
    }[], "Details of each liquidated position.">]>;
}, undefined>, v.DescriptionAction<{
    type: "liquidation";
    liquidatedNtlPos: string;
    accountValue: string;
    leverageType: "Cross" | "Isolated";
    liquidatedPositions: {
        coin: string;
        szi: string;
    }[];
}, "Liquidation event update.">]>;
export type LiquidationUpdate = v.InferOutput<typeof LiquidationUpdate>;
/** Rewards claim event update. */
export declare const RewardsClaimUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"rewardsClaim", undefined>, v.DescriptionAction<"rewardsClaim", "Update type.">]>;
    /** Amount of rewards claimed. */
    readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of rewards claimed.">]>;
    /** Token symbol. */
    readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
}, undefined>, v.DescriptionAction<{
    type: "rewardsClaim";
    amount: string;
    token: string;
}, "Rewards claim event update.">]>;
export type RewardsClaimUpdate = v.InferOutput<typeof RewardsClaimUpdate>;
/** Spot transfer update between accounts. */
export declare const SpotTransferUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotTransfer", undefined>, v.DescriptionAction<"spotTransfer", "Update type.">]>;
    /** Token symbol. */
    readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
    /** Amount transferred. */
    readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred.">]>;
    /** Equivalent USDC value. */
    readonly usdcValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Equivalent USDC value.">]>;
    /** Initiator address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
    /** Destination address. */
    readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
    /** Transfer fee. */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Transfer fee.">]>;
    /** Fee in native token. */
    readonly nativeTokenFee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee in native token.">]>;
    readonly nonce: v.NullSchema<undefined>;
    /** Token in which the fee is denominated (e.g., "USDC"). */
    readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotTransfer";
    token: string;
    amount: string;
    usdcValue: string;
    user: `0x${string}`;
    destination: `0x${string}`;
    fee: string;
    nativeTokenFee: string;
    nonce: null;
    feeToken: string;
}, "Spot transfer update between accounts.">]>;
export type SpotTransferUpdate = v.InferOutput<typeof SpotTransferUpdate>;
/** Transfer update between sub-accounts. */
export declare const SubAccountTransferUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountTransfer", undefined>, v.DescriptionAction<"subAccountTransfer", "Update type.">]>;
    /** Amount transferred in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
    /** Initiator address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
    /** Destination address. */
    readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "subAccountTransfer";
    usdc: string;
    user: `0x${string}`;
    destination: `0x${string}`;
}, "Transfer update between sub-accounts.">]>;
export type SubAccountTransferUpdate = v.InferOutput<typeof SubAccountTransferUpdate>;
/** Vault creation update. */
export declare const VaultCreateUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultCreate", undefined>, v.DescriptionAction<"vaultCreate", "Update type.">]>;
    /** Address of the created vault. */
    readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the created vault.">]>;
    /** Initial allocated amount in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Initial allocated amount in USDC.">]>;
    /** Vault creation fee. */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Vault creation fee.">]>;
}, undefined>, v.DescriptionAction<{
    type: "vaultCreate";
    vault: `0x${string}`;
    usdc: string;
    fee: string;
}, "Vault creation update.">]>;
export type VaultCreateUpdate = v.InferOutput<typeof VaultCreateUpdate>;
/** Vault deposit update. */
export declare const VaultDepositUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDeposit", undefined>, v.DescriptionAction<"vaultDeposit", "Update type.">]>;
    /** Address of the target vault. */
    readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the target vault.">]>;
    /** Amount deposited in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
}, undefined>, v.DescriptionAction<{
    type: "vaultDeposit";
    vault: `0x${string}`;
    usdc: string;
}, "Vault deposit update.">]>;
export type VaultDepositUpdate = v.InferOutput<typeof VaultDepositUpdate>;
/** Vault distribution update. */
export declare const VaultDistributionUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDistribution", undefined>, v.DescriptionAction<"vaultDistribution", "Update type.">]>;
    /** Address of the vault distributing funds. */
    readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the vault distributing funds.">]>;
    /** Amount distributed in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount distributed in USDC.">]>;
}, undefined>, v.DescriptionAction<{
    type: "vaultDistribution";
    vault: `0x${string}`;
    usdc: string;
}, "Vault distribution update.">]>;
export type VaultDistributionUpdate = v.InferOutput<typeof VaultDistributionUpdate>;
/** Vault withdrawal event update. */
export declare const VaultWithdrawUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultWithdraw", undefined>, v.DescriptionAction<"vaultWithdraw", "Update type.">]>;
    /** Vault address. */
    readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    /** Address of the user withdrawing funds. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the user withdrawing funds.">]>;
    /** Withdrawal request amount in USD. */
    readonly requestedUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Withdrawal request amount in USD.">]>;
    /** Withdrawal commission fee. */
    readonly commission: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Withdrawal commission fee.">]>;
    /** Closing cost associated with positions. */
    readonly closingCost: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Closing cost associated with positions.">]>;
    /** Basis value for withdrawal calculation. */
    readonly basis: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Basis value for withdrawal calculation.">]>;
    /** Net withdrawn amount in USD after fees and costs. */
    readonly netWithdrawnUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Net withdrawn amount in USD after fees and costs.">]>;
}, undefined>, v.DescriptionAction<{
    type: "vaultWithdraw";
    vault: `0x${string}`;
    user: `0x${string}`;
    requestedUsd: string;
    commission: string;
    closingCost: string;
    basis: string;
    netWithdrawnUsd: string;
}, "Vault withdrawal event update.">]>;
export type VaultWithdrawUpdate = v.InferOutput<typeof VaultWithdrawUpdate>;
/** Withdrawal update from an account. */
export declare const WithdrawUpdate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Update type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"withdraw", undefined>, v.DescriptionAction<"withdraw", "Update type.">]>;
    /** Amount withdrawn in USDC. */
    readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount withdrawn in USDC.">]>;
    /** Unique nonce for the withdrawal request. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique nonce for the withdrawal request.">]>;
    /** Withdrawal fee. */
    readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Withdrawal fee.">]>;
}, undefined>, v.DescriptionAction<{
    type: "withdraw";
    usdc: string;
    nonce: number;
    fee: string;
}, "Withdrawal update from an account.">]>;
export type WithdrawUpdate = v.InferOutput<typeof WithdrawUpdate>;
/**
 * Array of user's non-funding ledger update.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserNonFundingLedgerUpdatesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Timestamp of the update (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the update (in ms since epoch).">]>;
    /** L1 transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
    /** Update details. */
    readonly delta: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"accountClassTransfer", undefined>, v.DescriptionAction<"accountClassTransfer", "Update type.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Indicates if the transfer is to the perpetual account. */
        readonly toPerp: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the transfer is to the perpetual account.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "accountClassTransfer";
        usdc: string;
        toPerp: boolean;
    }, "Transfer between spot and perpetual accounts.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"deposit", undefined>, v.DescriptionAction<"deposit", "Update type.">]>;
        /** Amount deposited in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "deposit";
        usdc: string;
    }, "Deposit update to an account.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"internalTransfer", undefined>, v.DescriptionAction<"internalTransfer", "Update type.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Initiator address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Transfer fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Transfer fee.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "internalTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
    }, "Internal transfer between accounts.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"liquidation", undefined>, v.DescriptionAction<"liquidation", "Update type.">]>;
        /** Total notional value of liquidated positions. */
        readonly liquidatedNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Total notional value of liquidated positions.">]>;
        /** Account value at liquidation time. */
        readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Account value at liquidation time.">]>;
        /** Leverage type for liquidated positions. */
        readonly leverageType: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"Cross", undefined>, v.LiteralSchema<"Isolated", undefined>], undefined>, v.DescriptionAction<"Cross" | "Isolated", "Leverage type for liquidated positions.">]>;
        /** Details of each liquidated position. */
        readonly liquidatedPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Asset symbol of the liquidated position. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol of the liquidated position.">]>;
            /** Signed position size liquidated. */
            readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size liquidated.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            szi: string;
        }, "Liquidated position.">]>, undefined>, v.DescriptionAction<{
            coin: string;
            szi: string;
        }[], "Details of each liquidated position.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "liquidation";
        liquidatedNtlPos: string;
        accountValue: string;
        leverageType: "Cross" | "Isolated";
        liquidatedPositions: {
            coin: string;
            szi: string;
        }[];
    }, "Liquidation event update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"rewardsClaim", undefined>, v.DescriptionAction<"rewardsClaim", "Update type.">]>;
        /** Amount of rewards claimed. */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of rewards claimed.">]>;
        /** Token symbol. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "rewardsClaim";
        amount: string;
        token: string;
    }, "Rewards claim event update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotTransfer", undefined>, v.DescriptionAction<"spotTransfer", "Update type.">]>;
        /** Token symbol. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
        /** Amount transferred. */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred.">]>;
        /** Equivalent USDC value. */
        readonly usdcValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Equivalent USDC value.">]>;
        /** Initiator address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Transfer fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Transfer fee.">]>;
        /** Fee in native token. */
        readonly nativeTokenFee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Fee in native token.">]>;
        readonly nonce: v.NullSchema<undefined>;
        /** Token in which the fee is denominated (e.g., "USDC"). */
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotTransfer";
        token: string;
        amount: string;
        usdcValue: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
        nativeTokenFee: string;
        nonce: null;
        feeToken: string;
    }, "Spot transfer update between accounts.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountTransfer", undefined>, v.DescriptionAction<"subAccountTransfer", "Update type.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Initiator address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "subAccountTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
    }, "Transfer update between sub-accounts.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultCreate", undefined>, v.DescriptionAction<"vaultCreate", "Update type.">]>;
        /** Address of the created vault. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the created vault.">]>;
        /** Initial allocated amount in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Initial allocated amount in USDC.">]>;
        /** Vault creation fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Vault creation fee.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "vaultCreate";
        vault: `0x${string}`;
        usdc: string;
        fee: string;
    }, "Vault creation update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDeposit", undefined>, v.DescriptionAction<"vaultDeposit", "Update type.">]>;
        /** Address of the target vault. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the target vault.">]>;
        /** Amount deposited in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "vaultDeposit";
        vault: `0x${string}`;
        usdc: string;
    }, "Vault deposit update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDistribution", undefined>, v.DescriptionAction<"vaultDistribution", "Update type.">]>;
        /** Address of the vault distributing funds. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the vault distributing funds.">]>;
        /** Amount distributed in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount distributed in USDC.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "vaultDistribution";
        vault: `0x${string}`;
        usdc: string;
    }, "Vault distribution update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultWithdraw", undefined>, v.DescriptionAction<"vaultWithdraw", "Update type.">]>;
        /** Vault address. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
        /** Address of the user withdrawing funds. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the user withdrawing funds.">]>;
        /** Withdrawal request amount in USD. */
        readonly requestedUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Withdrawal request amount in USD.">]>;
        /** Withdrawal commission fee. */
        readonly commission: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Withdrawal commission fee.">]>;
        /** Closing cost associated with positions. */
        readonly closingCost: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Closing cost associated with positions.">]>;
        /** Basis value for withdrawal calculation. */
        readonly basis: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Basis value for withdrawal calculation.">]>;
        /** Net withdrawn amount in USD after fees and costs. */
        readonly netWithdrawnUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Net withdrawn amount in USD after fees and costs.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "vaultWithdraw";
        vault: `0x${string}`;
        user: `0x${string}`;
        requestedUsd: string;
        commission: string;
        closingCost: string;
        basis: string;
        netWithdrawnUsd: string;
    }, "Vault withdrawal event update.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"withdraw", undefined>, v.DescriptionAction<"withdraw", "Update type.">]>;
        /** Amount withdrawn in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount withdrawn in USDC.">]>;
        /** Unique nonce for the withdrawal request. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique nonce for the withdrawal request.">]>;
        /** Withdrawal fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Withdrawal fee.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "withdraw";
        usdc: string;
        nonce: number;
        fee: string;
    }, "Withdrawal update from an account.">]>], undefined>, v.DescriptionAction<{
        type: "accountClassTransfer";
        usdc: string;
        toPerp: boolean;
    } | {
        type: "deposit";
        usdc: string;
    } | {
        type: "internalTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
    } | {
        type: "liquidation";
        liquidatedNtlPos: string;
        accountValue: string;
        leverageType: "Cross" | "Isolated";
        liquidatedPositions: {
            coin: string;
            szi: string;
        }[];
    } | {
        type: "rewardsClaim";
        amount: string;
        token: string;
    } | {
        type: "spotTransfer";
        token: string;
        amount: string;
        usdcValue: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
        nativeTokenFee: string;
        nonce: null;
        feeToken: string;
    } | {
        type: "subAccountTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
    } | {
        type: "vaultCreate";
        vault: `0x${string}`;
        usdc: string;
        fee: string;
    } | {
        type: "vaultDeposit";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultDistribution";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultWithdraw";
        vault: `0x${string}`;
        user: `0x${string}`;
        requestedUsd: string;
        commission: string;
        closingCost: string;
        basis: string;
        netWithdrawnUsd: string;
    } | {
        type: "withdraw";
        usdc: string;
        nonce: number;
        fee: string;
    }, "Update details.">]>;
}, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        type: "accountClassTransfer";
        usdc: string;
        toPerp: boolean;
    } | {
        type: "deposit";
        usdc: string;
    } | {
        type: "internalTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
    } | {
        type: "liquidation";
        liquidatedNtlPos: string;
        accountValue: string;
        leverageType: "Cross" | "Isolated";
        liquidatedPositions: {
            coin: string;
            szi: string;
        }[];
    } | {
        type: "rewardsClaim";
        amount: string;
        token: string;
    } | {
        type: "spotTransfer";
        token: string;
        amount: string;
        usdcValue: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
        nativeTokenFee: string;
        nonce: null;
        feeToken: string;
    } | {
        type: "subAccountTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
    } | {
        type: "vaultCreate";
        vault: `0x${string}`;
        usdc: string;
        fee: string;
    } | {
        type: "vaultDeposit";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultDistribution";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultWithdraw";
        vault: `0x${string}`;
        user: `0x${string}`;
        requestedUsd: string;
        commission: string;
        closingCost: string;
        basis: string;
        netWithdrawnUsd: string;
    } | {
        type: "withdraw";
        usdc: string;
        nonce: number;
        fee: string;
    };
}, "User's non-funding ledger update.">]>, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        type: "accountClassTransfer";
        usdc: string;
        toPerp: boolean;
    } | {
        type: "deposit";
        usdc: string;
    } | {
        type: "internalTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
    } | {
        type: "liquidation";
        liquidatedNtlPos: string;
        accountValue: string;
        leverageType: "Cross" | "Isolated";
        liquidatedPositions: {
            coin: string;
            szi: string;
        }[];
    } | {
        type: "rewardsClaim";
        amount: string;
        token: string;
    } | {
        type: "spotTransfer";
        token: string;
        amount: string;
        usdcValue: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
        nativeTokenFee: string;
        nonce: null;
        feeToken: string;
    } | {
        type: "subAccountTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
    } | {
        type: "vaultCreate";
        vault: `0x${string}`;
        usdc: string;
        fee: string;
    } | {
        type: "vaultDeposit";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultDistribution";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultWithdraw";
        vault: `0x${string}`;
        user: `0x${string}`;
        requestedUsd: string;
        commission: string;
        closingCost: string;
        basis: string;
        netWithdrawnUsd: string;
    } | {
        type: "withdraw";
        usdc: string;
        nonce: number;
        fee: string;
    };
}[], "Array of user's non-funding ledger update.">]>;
export type UserNonFundingLedgerUpdatesResponse = v.InferOutput<typeof UserNonFundingLedgerUpdatesResponse>;
/** Request parameters for the {@linkcode userNonFundingLedgerUpdates} function. */
export type UserNonFundingLedgerUpdatesParameters = Omit<v.InferInput<typeof UserNonFundingLedgerUpdatesRequest>, "type">;
/**
 * Request user non-funding ledger updates.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's non-funding ledger update.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userNonFundingLedgerUpdates } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userNonFundingLedgerUpdates(
 *   { transport },
 *   { user: "0x...", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 */
export declare function userNonFundingLedgerUpdates(config: InfoRequestConfig, params: DeepImmutable<UserNonFundingLedgerUpdatesParameters>, signal?: AbortSignal): Promise<UserNonFundingLedgerUpdatesResponse>;
//# sourceMappingURL=userNonFundingLedgerUpdates.d.ts.map