import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { SubscriptionRequestConfig } from "./_base.js";
import type { Subscription } from "../../transport/base.js";
/** Subscription to notification events for a specific user. */
export declare const NotificationRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"notification", undefined>, v.DescriptionAction<"notification", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "notification";
    user: `0x${string}`;
}, "Subscription to notification events for a specific user.">]>;
export type NotificationRequest = v.InferOutput<typeof NotificationRequest>;
/** Event of user notification. */
export declare const NotificationEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Notification content. */
    readonly notification: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Notification content.">]>;
}, undefined>, v.DescriptionAction<{
    notification: string;
}, "Event of user notification.">]>;
export type NotificationEvent = v.InferOutput<typeof NotificationEvent>;
/** Request parameters for the {@linkcode notification} function. */
export type NotificationParameters = Omit<v.InferInput<typeof NotificationRequest>, "type">;
/**
 * Subscribe to notification updates for a specific user.
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
 * import { notification } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport();
 *
 * const sub = await notification(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 */
export declare function notification(config: SubscriptionRequestConfig, params: DeepImmutable<NotificationParameters>, listener: (data: NotificationEvent) => void): Promise<Subscription>;
//# sourceMappingURL=notification.d.ts.map