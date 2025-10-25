import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
import type { IRequestTransport } from "../../transport/base.js";
/**
 * Request array of user transaction details.
 * @see null
 */
export declare const UserDetailsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userDetails", undefined>, v.DescriptionAction<"userDetails", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userDetails";
    user: `0x${string}`;
}, "Request array of user transaction details.">]>;
export type UserDetailsRequest = v.InferOutput<typeof UserDetailsRequest>;
/**
 * Response array of user transaction details.
 * @see null
 */
export declare const UserDetailsResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of response. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userDetails", undefined>, v.DescriptionAction<"userDetails", "Type of response.">]>;
    /** Array of user transaction details. */
    readonly txs: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly action: v.SchemaWithPipe<readonly [v.LooseObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Action type.">]>;
        }, undefined>, v.DescriptionAction<{
            type: string;
        } & {
            [key: string]: unknown;
        }, "Action performed in transaction.">]>;
        readonly block: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block number where transaction was included.">]>;
        readonly error: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Error message if transaction failed.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Transaction creation timestamp.">]>;
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
    }[], "Array of user transaction details.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userDetails";
    txs: {
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
    }[];
}, "Response array of user transaction details.">]>;
export type UserDetailsResponse = v.InferOutput<typeof UserDetailsResponse>;
/** Request parameters for the {@linkcode userDetails} function. */
export type UserDetailsParameters = Omit<v.InferInput<typeof UserDetailsRequest>, "type">;
/**
 * Request array of user transaction details.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of user transaction details.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 * const data = await userDetails(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function userDetails<T extends IRequestTransport>(config: T extends {
    request(endpoint: "explorer", ...args: unknown[]): unknown;
} ? InfoRequestConfig<T> : never, params: DeepImmutable<UserDetailsParameters>, signal?: AbortSignal): Promise<UserDetailsResponse>;
//# sourceMappingURL=userDetails.d.ts.map