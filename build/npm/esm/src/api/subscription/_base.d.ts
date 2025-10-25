import type { ISubscriptionTransport } from "../../transport/base.js";
/** Configuration for subscription API requests. */
export interface SubscriptionRequestConfig<T extends ISubscriptionTransport = ISubscriptionTransport> {
    /** The transport used to connect to the Hyperliquid API. */
    transport: T;
}
//# sourceMappingURL=_base.d.ts.map