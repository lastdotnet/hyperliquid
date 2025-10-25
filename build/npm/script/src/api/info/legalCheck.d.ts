import * as v from "valibot";
import { type DeepImmutable } from "../_base.js";
import type { InfoRequestConfig } from "./_base.js";
/**
 * Request legal verification status of a user.
 * @see null
 */
export declare const LegalCheckRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"legalCheck", undefined>, v.DescriptionAction<"legalCheck", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "legalCheck";
    user: `0x${string}`;
}, "Request legal verification status of a user.">]>;
export type LegalCheckRequest = v.InferOutput<typeof LegalCheckRequest>;
/**
 * Legal verification status for a user.
 * @see null
 */
export declare const LegalCheckResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Whether the user IP address is allowed. */
    readonly ipAllowed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the user IP address is allowed.">]>;
    /** Whether the user has accepted the terms of service. */
    readonly acceptedTerms: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the user has accepted the terms of service.">]>;
    /** Whether the user is allowed to use the platform. */
    readonly userAllowed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the user is allowed to use the platform.">]>;
}, undefined>, v.DescriptionAction<{
    ipAllowed: boolean;
    acceptedTerms: boolean;
    userAllowed: boolean;
}, "Legal verification status for a user.">]>;
export type LegalCheckResponse = v.InferOutput<typeof LegalCheckResponse>;
/** Request parameters for the {@linkcode legalCheck} function. */
export type LegalCheckParameters = Omit<v.InferInput<typeof LegalCheckRequest>, "type">;
/**
 * Request legal verification status of a user.
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) can be used to cancel the request by calling [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) on the corresponding [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
 * @returns Legal verification status for a user.
 *
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see null
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { legalCheck } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const data = await legalCheck(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function legalCheck(config: InfoRequestConfig, params: DeepImmutable<LegalCheckParameters>, signal?: AbortSignal): Promise<LegalCheckResponse>;
//# sourceMappingURL=legalCheck.d.ts.map