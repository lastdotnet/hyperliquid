import { HyperliquidError } from "../_base.js";
/** Thrown when a transport layer error occurs. */
export class TransportError extends HyperliquidError {
    constructor(message, options) {
        super(message, options);
        this.name = "TransportError";
    }
}
//# sourceMappingURL=base.js.map