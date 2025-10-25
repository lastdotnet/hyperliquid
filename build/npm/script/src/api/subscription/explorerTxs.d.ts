import * as v from "valibot";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to explorer transaction events (RPC endpoint). */
export declare const ExplorerTxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"explorerTxs", undefined>, v.DescriptionAction<"explorerTxs", "Type of subscription.">]>;
}, undefined>, v.DescriptionAction<{
    type: "explorerTxs";
}, "Subscription to explorer transaction events.">]>;
export type ExplorerTxsRequest = v.InferOutput<typeof ExplorerTxsRequest>;
/** Event of array of transaction details. */
export declare const ExplorerTxsEvent: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action performed in transaction. */
    readonly action: v.SchemaWithPipe<readonly [v.LooseObjectSchema<{
        /** Action type. */
        readonly type: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Action type.">]>;
    }, undefined>, v.DescriptionAction<{
        type: string;
    } & {
        [key: string]: unknown;
    }, "Action performed in transaction.">]>;
    /** Block number where transaction was included. */
    readonly block: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block number where transaction was included.">]>;
    /** Error message if transaction failed. */
    readonly error: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Error message if transaction failed.">]>;
    /** Transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
    /** Transaction creation timestamp. */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Transaction creation timestamp.">]>;
    /** Creator's address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Creator's address.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: string;
    } & {
        [key: string]: unknown;
    };
    block: number;
    error: string | null;
    hash: `0x${string}`;
    time: number;
    user: `0x${string}`;
}, "Transaction details.">]>, undefined>, v.DescriptionAction<{
    action: {
        type: string;
    } & {
        [key: string]: unknown;
    };
    block: number;
    error: string | null;
    hash: `0x${string}`;
    time: number;
    user: `0x${string}`;
}[], "Event of array of transaction details.">]>;
export type ExplorerTxsEvent = v.InferOutput<typeof ExplorerTxsEvent>;
/** Request parameters for the {@linkcode explorerTxs} function. */
export type ExplorerTxsParameters = Omit<v.InferInput<typeof ExplorerTxsRequest>, "type">;
/**
 * Subscribe to explorer transaction updates.
 * @param config - General configuration for Subscription API subscriptions.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link Subscription} object to manage the subscription lifecycle.
 * @note Make sure the endpoint in the {@link transport} supports this method.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { explorerTxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" }); // RPC endpoint
 *
 * const sub = await explorerTxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function explorerTxs(config: SubscriptionRequestConfig, listener: (data: ExplorerTxsEvent) => void): Promise<Subscription>;
//# sourceMappingURL=explorerTxs.d.ts.map