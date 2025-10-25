import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to user funding events for a specific user. */
export declare const UserFundingsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userFundings", undefined>, v.DescriptionAction<"userFundings", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userFundings";
    user: `0x${string}`;
}, "Subscription to user funding events for a specific user.">]>;
export type UserFundingsRequest = v.InferOutput<typeof UserFundingsRequest>;
/** Event of user fundings. */
export declare const UserFundingsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Array of funding events. */
    readonly fundings: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Timestamp of the update (in ms since epoch). */
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the update (in ms since epoch).">]>;
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Signed position size. */
        readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Signed position size.">]>;
        /** Applied funding rate. */
        readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Applied funding rate.">]>;
        /** Number of samples. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Number of samples.">]>;
    }, undefined>, v.DescriptionAction<{
        time: number;
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }, "Funding event.">]>, undefined>, v.DescriptionAction<{
        time: number;
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }[], "Array of funding events.">]>;
    /** Whether this is an initial snapshot. */
    readonly isSnapshot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether this is an initial snapshot.">]>;
}, undefined>, v.DescriptionAction<{
    user: `0x${string}`;
    fundings: {
        time: number;
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }[];
    isSnapshot?: true | undefined;
}, "Event of user fundings.">]>;
export type UserFundingsEvent = v.InferOutput<typeof UserFundingsEvent>;
/** Request parameters for the {@linkcode userFundings} function. */
export type UserFundingsParameters = Omit<v.InferInput<typeof UserFundingsRequest>, "type">;
/**
 * Subscribe to funding payment updates for a specific user.
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
 * import { userFundings } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await userFundings(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function userFundings(config: SubscriptionRequestConfig, params: DeepImmutable<UserFundingsParameters>, listener: (data: UserFundingsEvent) => void): Promise<Subscription>;
//# sourceMappingURL=userFundings.d.ts.map