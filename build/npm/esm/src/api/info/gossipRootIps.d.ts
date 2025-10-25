import * as v from "valibot";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request gossip root IPs.
 * @see null
 */
export declare const GossipRootIpsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"gossipRootIps", undefined>, v.DescriptionAction<"gossipRootIps", "Type of request.">]>;
}, undefined>, v.DescriptionAction<{
    type: "gossipRootIps";
}, "Request gossip root IPs.">]>;
export type GossipRootIpsRequest = v.InferOutput<typeof GossipRootIpsRequest>;
/**
 * Array of gossip root IPs.
 * @see null
 */
export declare const GossipRootIpsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.Ipv4Action<string, undefined>]>, undefined>, v.DescriptionAction<string[], "Array of gossip root IPs.">]>;
export type GossipRootIpsResponse = v.InferOutput<typeof GossipRootIpsResponse>;
/**
 * Request gossip root IPs.
 * @param config - General configuration for Info API requests.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Array of gossip root IPs.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { gossipRootIps } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await gossipRootIps({ transport });
 * ```
 */
export declare function gossipRootIps(config: InfoRequestConfig, signal?: AbortSignal): Promise<GossipRootIpsResponse>;
//# sourceMappingURL=gossipRootIps.d.ts.map