import type { IRequestTransport } from "../../transport/base.js";
/** Configuration for Info API requests. */
export interface InfoRequestConfig<T extends IRequestTransport = IRequestTransport> {
    /** The transport used to connect to the Hyperliquid API. */
    transport: T;
}
//# sourceMappingURL=_base.d.ts.map