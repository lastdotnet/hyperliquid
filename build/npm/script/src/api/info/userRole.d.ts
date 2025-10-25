import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user role.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
 */
export declare const UserRoleRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userRole", undefined>, v.DescriptionAction<"userRole", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userRole";
    user: `0x${string}`;
}, "Request user role.">]>;
export type UserRoleRequest = v.InferOutput<typeof UserRoleRequest>;
/**
 * User role.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
 */
export declare const UserRoleResponse: v.SchemaWithPipe<readonly [v.VariantSchema<"role", [v.ObjectSchema<{
    /** Role identifier. */
    readonly role: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"missing", undefined>, v.LiteralSchema<"user", undefined>, v.LiteralSchema<"vault", undefined>], undefined>, v.DescriptionAction<"user" | "vault" | "missing", "Role identifier.">]>;
}, undefined>, v.ObjectSchema<{
    /** Role identifier. */
    readonly role: v.SchemaWithPipe<readonly [v.LiteralSchema<"agent", undefined>, v.DescriptionAction<"agent", "Role identifier.">]>;
    /** Details for agent role. */
    readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Master account address associated with the agent. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Master account address associated with the agent.">]>;
    }, undefined>, v.DescriptionAction<{
        user: `0x${string}`;
    }, "Details for agent role.">]>;
}, undefined>, v.ObjectSchema<{
    /** Role identifier. */
    readonly role: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccount", undefined>, v.DescriptionAction<"subAccount", "Role identifier.">]>;
    /** Details for sub-account role. */
    readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Master account address associated with the sub-account. */
        readonly master: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Master account address associated with the sub-account.">]>;
    }, undefined>, v.DescriptionAction<{
        master: `0x${string}`;
    }, "Details for sub-account role.">]>;
}, undefined>], undefined>, v.DescriptionAction<{
    role: "user" | "vault" | "missing";
} | {
    role: "agent";
    data: {
        user: `0x${string}`;
    };
} | {
    role: "subAccount";
    data: {
        master: `0x${string}`;
    };
}, "User role.">]>;
export type UserRoleResponse = v.InferOutput<typeof UserRoleResponse>;
/** Request parameters for the {@linkcode userRole} function. */
export type UserRoleParameters = Omit<v.InferInput<typeof UserRoleRequest>, "type">;
/**
 * Request user role.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns User role.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userRole } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userRole(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function userRole(config: InfoRequestConfig, params: DeepImmutable<UserRoleParameters>, signal?: AbortSignal): Promise<UserRoleResponse>;
//# sourceMappingURL=userRole.d.ts.map