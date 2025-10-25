import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request for the status of the perpetual deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
 */
export declare const PerpDeployAuctionStatusRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeployAuctionStatus", undefined>, v.DescriptionAction<"perpDeployAuctionStatus", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "perpDeployAuctionStatus";
}, "Request for the status of the perpetual deploy auction.">]>;
export type PerpDeployAuctionStatusRequest = v.InferOutput<typeof PerpDeployAuctionStatusRequest>;
/**
 * Status of the perpetual deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
 */
export declare const PerpDeployAuctionStatusResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Current gas. */
    readonly currentGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Current gas.">]>;
    /** Duration in seconds. */
    readonly durationSeconds: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in seconds.">]>;
    /** Ending gas. */
    readonly endGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, undefined>, v.DescriptionAction<string | null, "Ending gas.">]>;
    /** Starting gas. */
    readonly startGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, string>, v.TrimAction, v.RegexAction<string, undefined>, v.TransformAction<string, string>]>, v.DescriptionAction<string, "Starting gas.">]>;
    /** Auction start time (seconds since epoch). */
    readonly startTimeSeconds: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.TransformAction<any, number>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Auction start time (seconds since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    currentGas: string | null;
    durationSeconds: number;
    endGas: string | null;
    startGas: string;
    startTimeSeconds: number;
}, "Status of the perpetual deploy auction.">]>;
export type PerpDeployAuctionStatusResponse = v.InferOutput<typeof PerpDeployAuctionStatusResponse>;
/**
 * Request for the status of the perpetual deploy auction.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Status of the perpetual deploy auction.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-information-about-the-perp-deploy-auction
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDeployAuctionStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await perpDeployAuctionStatus({ transport });
 * ```
 */
export declare function perpDeployAuctionStatus(config: InfoRequestConfig, signal?: AbortSignal): Promise<PerpDeployAuctionStatusResponse>;
//# sourceMappingURL=perpDeployAuctionStatus.d.ts.map