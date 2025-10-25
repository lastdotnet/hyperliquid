import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
import type { IRequestTransport } from "../../transport/base.js";
/**
 * Request transaction details by transaction hash.
 * @see null
 */
export declare const TxDetailsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"txDetails", undefined>, v.DescriptionAction<"txDetails", "Type of request.">]>;
    /** Transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
}, undefined>, v.DescriptionAction<{
    type: "txDetails";
    hash: `0x${string}`;
}, "Request transaction details by transaction hash.">]>;
export type TxDetailsRequest = v.InferOutput<typeof TxDetailsRequest>;
/**
 * Response with transaction details.
 * @see null
 */
export declare const TxDetailsResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Response type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"txDetails", undefined>, v.DescriptionAction<"txDetails", "Response type.">]>;
    /** Transaction details. */
    readonly tx: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
    }, "Transaction details.">]>;
}, undefined>, v.DescriptionAction<{
    type: "txDetails";
    tx: {
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
    };
}, "Response with transaction details.">]>;
export type TxDetailsResponse = v.InferOutput<typeof TxDetailsResponse>;
/** Request parameters for the {@linkcode txDetails} function. */
export type TxDetailsParameters = Omit<v.InferInput<typeof TxDetailsRequest>, "type">;
/**
 * Request transaction details by transaction hash.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Transaction details.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { txDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 * const data = await txDetails(
 *   { transport },
 *   { hash: "0x..." },
 * );
 * ```
 */
export declare function txDetails<T extends IRequestTransport>(config: T extends {
    request(endpoint: "explorer", ...args: unknown[]): unknown;
} ? InfoRequestConfig<T> : never, params: DeepImmutable<TxDetailsParameters>, signal?: AbortSignal): Promise<TxDetailsResponse>;
//# sourceMappingURL=txDetails.d.ts.map