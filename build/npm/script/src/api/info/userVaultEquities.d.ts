import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user vault deposits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
 */
export declare const UserVaultEquitiesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userVaultEquities", undefined>, v.DescriptionAction<"userVaultEquities", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userVaultEquities";
    user: `0x${string}`;
}, "Request user vault deposits.">]>;
export type UserVaultEquitiesRequest = v.InferOutput<typeof UserVaultEquitiesRequest>;
/**
 * Array of user's vault deposits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
 */
export declare const UserVaultEquitiesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Vault address. */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
    /** User deposited equity. */
    readonly equity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "User deposited equity.">]>;
    /** Timestamp when the user can withdraw their equity. */
    readonly lockedUntilTimestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the user can withdraw their equity.">]>;
}, undefined>, v.DescriptionAction<{
    vaultAddress: `0x${string}`;
    equity: string;
    lockedUntilTimestamp: number;
}, "User's vault deposit.">]>, undefined>, v.DescriptionAction<{
    vaultAddress: `0x${string}`;
    equity: string;
    lockedUntilTimestamp: number;
}[], "Array of user's vault deposits.">]>;
export type UserVaultEquitiesResponse = v.InferOutput<typeof UserVaultEquitiesResponse>;
/** Request parameters for the {@linkcode userVaultEquities} function. */
export type UserVaultEquitiesParameters = Omit<v.InferInput<typeof UserVaultEquitiesRequest>, "type">;
/**
 * Request user vault deposits.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user's vault deposits.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-vault-deposits
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userVaultEquities } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await userVaultEquities(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function userVaultEquities(config: InfoRequestConfig, params: DeepImmutable<UserVaultEquitiesParameters>, signal?: AbortSignal): Promise<UserVaultEquitiesResponse>;
//# sourceMappingURL=userVaultEquities.d.ts.map