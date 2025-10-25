import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user HIP-3 DEX abstraction state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
 */
export declare const UserDexAbstractionInfoRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userDexAbstraction", undefined>, v.DescriptionAction<"userDexAbstraction", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userDexAbstraction";
    user: `0x${string}`;
}, "Request user referral.">]>;
export type UserDexAbstractionInfoRequest = v.InferOutput<typeof UserDexAbstractionInfoRequest>;
/**
 * User HIP-3 DEX abstraction state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
 */
export declare const UserDexAbstractionInfoResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "User HIP-3 DEX abstraction state.">]>;
export type UserDexAbstractionInfoResponse = v.InferOutput<typeof UserDexAbstractionInfoResponse>;
/** Request parameters for the {@linkcode userDexAbstraction} function. */
export type UserDexAbstractionInfoParameters = Omit<v.InferInput<typeof UserDexAbstractionInfoRequest>, "type">;
/**
 * Request user HIP-3 DEX abstraction state.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns User HIP-3 DEX abstraction state.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-hip-3-dex-abstraction-state
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userDexAbstraction } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userDexAbstraction(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function userDexAbstraction(config: InfoRequestConfig, params: DeepImmutable<UserDexAbstractionInfoParameters>, signal?: AbortSignal): Promise<UserDexAbstractionInfoResponse>;
//# sourceMappingURL=userDexAbstraction.d.ts.map