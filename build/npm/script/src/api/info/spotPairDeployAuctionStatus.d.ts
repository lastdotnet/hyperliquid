import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request for the status of the spot deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
 */
export declare const SpotPairDeployAuctionStatusRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotPairDeployAuctionStatus", undefined>, v.DescriptionAction<"spotPairDeployAuctionStatus", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotPairDeployAuctionStatus";
}, "Request for the status of the spot deploy auction.">]>;
export type SpotPairDeployAuctionStatusRequest = v.InferOutput<typeof SpotPairDeployAuctionStatusRequest>;
/**
 * Status of the spot deploy auction.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
 */
export declare const SpotPairDeployAuctionStatusResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
}, "Status of the spot deploy auction.">]>;
export type SpotPairDeployAuctionStatusResponse = v.InferOutput<typeof SpotPairDeployAuctionStatusResponse>;
/**
 * Request for the status of the spot deploy auction.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Status of the spot deploy auction.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-the-spot-pair-deploy-auction
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotPairDeployAuctionStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await spotPairDeployAuctionStatus({ transport });
 * ```
 */
export declare function spotPairDeployAuctionStatus(config: InfoRequestConfig, signal?: AbortSignal): Promise<SpotPairDeployAuctionStatusResponse>;
//# sourceMappingURL=spotPairDeployAuctionStatus.d.ts.map