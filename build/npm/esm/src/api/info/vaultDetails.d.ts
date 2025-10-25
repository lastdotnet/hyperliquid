import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request details of a vault.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
 */
export declare const VaultDetailsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDetails", undefined>, v.DescriptionAction<"vaultDetails", "Type of request.">]>;
    /** Vault address. */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null | undefined, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "vaultDetails";
    vaultAddress: `0x${string}`;
    user?: `0x${string}` | null | undefined;
}, "Request details of a vault.">]>;
export type VaultDetailsRequest = v.InferOutput<typeof VaultDetailsRequest>;
/**
 * Details of a vault or null if the vault does not exist.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
 */
export declare const VaultDetailsResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
    /** Vault name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Vault name.">]>;
    /** Vault address. */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    /** Leader address. */
    readonly leader: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Leader address.">]>;
    /** Vault description. */
    readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Vault description.">]>;
    /** Vault portfolio metrics grouped by time periods. */
    readonly portfolio: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.TupleSchema<[v.TupleSchema<[v.LiteralSchema<"day", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"week", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"month", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"allTime", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpDay", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpWeek", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpMonth", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>, v.TupleSchema<[v.LiteralSchema<"perpAllTime", undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly accountValueHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for account value as [timestamp, value].">]>;
        readonly pnlHistory: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "History entries for profit and loss as [timestamp, value].">]>;
        readonly vlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Volume metric for the portfolio.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }, "Portfolio metrics snapshot.">]>], undefined>], undefined>, v.DescriptionAction<[["day", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["week", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["month", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["allTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpDay", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpWeek", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpMonth", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpAllTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }]], "Portfolio metrics grouped by time periods.">]>, v.DescriptionAction<[["day", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["week", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["month", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["allTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpDay", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpWeek", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpMonth", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpAllTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }]], "Vault portfolio metrics grouped by time periods.">]>;
    /** Annual percentage rate. */
    readonly apr: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.DescriptionAction<number, "Annual percentage rate.">]>;
    /** Current user follower state */
    readonly followerState: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
        /** Follower address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Follower address.">]>;
        /** Follower vault equity. */
        readonly vaultEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Follower vault equity.">]>;
        /** Current profit and loss. */
        readonly pnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Current profit and loss.">]>;
        /** All-time profit and loss. */
        readonly allTimePnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "All-time profit and loss.">]>;
        /** Subscription duration in days. */
        readonly daysFollowing: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Subscription duration in days.">]>;
        /** Vault entry timestamp. */
        readonly vaultEntryTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Vault entry timestamp.">]>;
        /** Timestamp when funds become unlocked. */
        readonly lockupUntil: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when funds become unlocked.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        user: `0x${string}`;
        vaultEquity: string;
        pnl: string;
        allTimePnl: string;
        daysFollowing: number;
        vaultEntryTime: number;
        lockupUntil: number;
    } | null, "Current user follower state">]>;
    /** Ownership percentage held by leader. */
    readonly leaderFraction: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.DescriptionAction<number, "Ownership percentage held by leader.">]>;
    /** Leader commission percentage. */
    readonly leaderCommission: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.DescriptionAction<number, "Leader commission percentage.">]>;
    /** Array of vault followers. */
    readonly followers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Follower address or Leader. */
        readonly user: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.LiteralSchema<"Leader", undefined>], undefined>, v.DescriptionAction<`0x${string}` | "Leader", "Follower address or Leader.">]>;
        /** Follower vault equity. */
        readonly vaultEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Follower vault equity.">]>;
        /** Current profit and loss. */
        readonly pnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Current profit and loss.">]>;
        /** All-time profit and loss. */
        readonly allTimePnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "All-time profit and loss.">]>;
        /** Subscription duration in days. */
        readonly daysFollowing: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Subscription duration in days.">]>;
        /** Vault entry timestamp. */
        readonly vaultEntryTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Vault entry timestamp.">]>;
        /** Timestamp when funds become unlocked. */
        readonly lockupUntil: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when funds become unlocked.">]>;
    }, undefined>, v.DescriptionAction<{
        user: `0x${string}` | "Leader";
        vaultEquity: string;
        pnl: string;
        allTimePnl: string;
        daysFollowing: number;
        vaultEntryTime: number;
        lockupUntil: number;
    }, "Vault follower state.">]>, undefined>, v.DescriptionAction<{
        user: `0x${string}` | "Leader";
        vaultEquity: string;
        pnl: string;
        allTimePnl: string;
        daysFollowing: number;
        vaultEntryTime: number;
        lockupUntil: number;
    }[], "Array of vault followers.">]>;
    /** Maximum distributable amount. */
    readonly maxDistributable: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.DescriptionAction<number, "Maximum distributable amount.">]>;
    /** Maximum withdrawable amount. */
    readonly maxWithdrawable: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.DescriptionAction<number, "Maximum withdrawable amount.">]>;
    /** Vault closure status. */
    readonly isClosed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Vault closure status.">]>;
    /** Vault relationship type. */
    readonly relationship: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        /** Relationship type. */
        readonly type: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"normal", undefined>, v.LiteralSchema<"child", undefined>], undefined>, v.DescriptionAction<"normal" | "child", "Relationship type.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Relationship type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"parent", undefined>, v.DescriptionAction<"parent", "Relationship type.">]>;
        /** Child vault information. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Child vault addresses. */
            readonly childAddresses: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "Child vault addresses.">]>;
        }, undefined>, v.DescriptionAction<{
            childAddresses: `0x${string}`[];
        }, "Child vault information.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "normal" | "child";
    } | {
        type: "parent";
        data: {
            childAddresses: `0x${string}`[];
        };
    }, "Vault relationship type.">]>;
    /** Deposit permission status. */
    readonly allowDeposits: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Deposit permission status.">]>;
    /** Position closure policy on withdrawal. */
    readonly alwaysCloseOnWithdraw: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position closure policy on withdrawal.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    name: string;
    vaultAddress: `0x${string}`;
    leader: `0x${string}`;
    description: string;
    portfolio: [["day", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["week", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["month", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["allTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpDay", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpWeek", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpMonth", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }], ["perpAllTime", {
        accountValueHistory: [number, string][];
        pnlHistory: [number, string][];
        vlm: string;
    }]];
    apr: number;
    followerState: {
        user: `0x${string}`;
        vaultEquity: string;
        pnl: string;
        allTimePnl: string;
        daysFollowing: number;
        vaultEntryTime: number;
        lockupUntil: number;
    } | null;
    leaderFraction: number;
    leaderCommission: number;
    followers: {
        user: `0x${string}` | "Leader";
        vaultEquity: string;
        pnl: string;
        allTimePnl: string;
        daysFollowing: number;
        vaultEntryTime: number;
        lockupUntil: number;
    }[];
    maxDistributable: number;
    maxWithdrawable: number;
    isClosed: boolean;
    relationship: {
        type: "normal" | "child";
    } | {
        type: "parent";
        data: {
            childAddresses: `0x${string}`[];
        };
    };
    allowDeposits: boolean;
    alwaysCloseOnWithdraw: boolean;
} | null, "Details of a vault or null if the vault does not exist.">]>;
export type VaultDetailsResponse = v.InferOutput<typeof VaultDetailsResponse>;
/** Request parameters for the {@linkcode vaultDetails} function. */
export type VaultDetailsParameters = Omit<v.InferInput<typeof VaultDetailsRequest>, "type">;
/**
 * Request details of a vault.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Details of a vault or null if the vault does not exist.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { vaultDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await vaultDetails(
 *   { transport },
 *   { vaultAddress: "0x..." },
 * );
 * ```
 */
export declare function vaultDetails(config: InfoRequestConfig, params: DeepImmutable<VaultDetailsParameters>, signal?: AbortSignal): Promise<VaultDetailsResponse>;
//# sourceMappingURL=vaultDetails.d.ts.map