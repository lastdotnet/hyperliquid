import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request user staking history.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
 */
export declare const DelegatorHistoryRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"delegatorHistory", undefined>, v.DescriptionAction<"delegatorHistory", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "delegatorHistory";
    user: `0x${string}`;
}, "Request user staking history.">]>;
export type DelegatorHistoryRequest = v.InferOutput<typeof DelegatorHistoryRequest>;
/**
 * Array of records of staking events by a delegator.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
 */
export declare const DelegatorHistoryResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Timestamp of the delegation event (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the delegation event (in ms since epoch).">]>;
    /** Transaction hash of the delegation event. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>]>, v.DescriptionAction<`0x${string}`, "Transaction hash of the delegation event.">]>;
    /** Details of the update. */
    readonly delta: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        /** Delegation operation details. */
        readonly delegate: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Address of the validator receiving or losing delegation. */
            readonly validator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the validator receiving or losing delegation.">]>;
            /** Amount of tokens being delegated or undelegated. */
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of tokens being delegated or undelegated.">]>;
            /** Whether this is an undelegation operation. */
            readonly isUndelegate: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether this is an undelegation operation.">]>;
        }, undefined>, v.DescriptionAction<{
            validator: `0x${string}`;
            amount: string;
            isUndelegate: boolean;
        }, "Delegation operation details.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Deposit details. */
        readonly cDeposit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Amount of tokens being deposited. */
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of tokens being deposited.">]>;
        }, undefined>, v.DescriptionAction<{
            amount: string;
        }, "Deposit details.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Withdrawal details. */
        readonly withdrawal: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Amount of tokens being withdrawn. */
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Amount of tokens being withdrawn.">]>;
            /** Phase of the withdrawal process. */
            readonly phase: v.SchemaWithPipe<readonly [v.UnionSchema<[v.LiteralSchema<"initiated", undefined>, v.LiteralSchema<"finalized", undefined>], undefined>, v.DescriptionAction<"initiated" | "finalized", "Phase of the withdrawal process.">]>;
        }, undefined>, v.DescriptionAction<{
            amount: string;
            phase: "initiated" | "finalized";
        }, "Withdrawal details.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        delegate: {
            validator: `0x${string}`;
            amount: string;
            isUndelegate: boolean;
        };
    } | {
        cDeposit: {
            amount: string;
        };
    } | {
        withdrawal: {
            amount: string;
            phase: "initiated" | "finalized";
        };
    }, "Details of the update.">]>;
}, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        delegate: {
            validator: `0x${string}`;
            amount: string;
            isUndelegate: boolean;
        };
    } | {
        cDeposit: {
            amount: string;
        };
    } | {
        withdrawal: {
            amount: string;
            phase: "initiated" | "finalized";
        };
    };
}, "Record of a staking event by a delegator.">]>, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        delegate: {
            validator: `0x${string}`;
            amount: string;
            isUndelegate: boolean;
        };
    } | {
        cDeposit: {
            amount: string;
        };
    } | {
        withdrawal: {
            amount: string;
            phase: "initiated" | "finalized";
        };
    };
}[], "Array of records of staking events by a delegator.">]>;
export type DelegatorHistoryResponse = v.InferOutput<typeof DelegatorHistoryResponse>;
/** Request parameters for the {@linkcode delegatorHistory} function. */
export type DelegatorHistoryParameters = Omit<v.InferInput<typeof DelegatorHistoryRequest>, "type">;
/**
 * Request user staking history.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of records of staking events by a delegator.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegatorHistory } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await delegatorHistory(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function delegatorHistory(config: InfoRequestConfig, params: DeepImmutable<DelegatorHistoryParameters>, signal?: AbortSignal): Promise<DelegatorHistoryResponse>;
//# sourceMappingURL=delegatorHistory.d.ts.map