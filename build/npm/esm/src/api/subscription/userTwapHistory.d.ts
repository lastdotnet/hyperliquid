import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to user TWAP history events for a specific user. */
export declare const UserTwapHistoryRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userTwapHistory", undefined>, v.DescriptionAction<"userTwapHistory", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userTwapHistory";
    user: `0x${string}`;
}, "Subscription to user TWAP history events for a specific user.">]>;
export type UserTwapHistoryRequest = v.InferOutput<typeof UserTwapHistoryRequest>;
/** Event of user TWAP history. */
export declare const UserTwapHistoryEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Array of user's TWAP history. */
    readonly history: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Creation time of the history record (in seconds since epoch). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Creation time of the history record (in seconds since epoch).">]>;
        /** State of the TWAP order. */
        readonly state: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly executedNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed notional value.">]>;
            readonly executedSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Executed size.">]>;
            readonly minutes: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in minutes.">]>;
            readonly randomize: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the TWAP randomizes execution.">]>;
            readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is reduce-only.">]>;
            readonly side: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"B", undefined>, v.LiteralSchema<"A", undefined>], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
            readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Order size.">]>;
            readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time of the TWAP order (in ms since epoch).">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        }, "State of the TWAP order.">]>;
        /** Current status of the TWAP order. */
        readonly status: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"finished", undefined>, v.LiteralSchema<"activated", undefined>, v.LiteralSchema<"terminated", undefined>], undefined>, v.DescriptionAction<"finished" | "activated" | "terminated", "Status of the TWAP order.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"error", undefined>, v.DescriptionAction<"error", "Status of the TWAP order.">]>;
            readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
        }, undefined>], undefined>, v.DescriptionAction<{
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        }, string>]>;
        /** ID of the TWAP. */
        readonly twapId: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "ID of the TWAP.">]>;
    }, undefined>, v.DescriptionAction<{
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }, "TWAP history record.">]>, undefined>, v.DescriptionAction<{
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }[], "Array of user's TWAP history.">]>;
    /** Whether this is an initial snapshot. */
    readonly isSnapshot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether this is an initial snapshot.">]>;
}, undefined>, v.DescriptionAction<{
    user: `0x${string}`;
    history: {
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }[];
    isSnapshot?: true | undefined;
}, "Event of user TWAP history.">]>;
export type UserTwapHistoryEvent = v.InferOutput<typeof UserTwapHistoryEvent>;
/** Request parameters for the {@linkcode userTwapHistory} function. */
export type UserTwapHistoryParameters = Omit<v.InferInput<typeof UserTwapHistoryRequest>, "type">;
/**
 * Subscribe to TWAP order history updates for a specific user.
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { userTwapHistory } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userTwapHistory(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function userTwapHistory(config: SubscriptionRequestConfig, params: DeepImmutable<UserTwapHistoryParameters>, listener: (data: UserTwapHistoryEvent) => void): Promise<Subscription>;
//# sourceMappingURL=userTwapHistory.d.ts.map