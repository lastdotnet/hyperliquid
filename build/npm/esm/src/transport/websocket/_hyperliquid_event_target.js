import { TypedEventTarget } from "typescript-event-target";
import * as v from "valibot";
import { CustomEvent_ } from "../_polyfills.js";
const BlockDetails = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        blockTime: v.pipe(v.number(), v.integer(), v.minValue(0)),
        hash: v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.length(66)),
        height: v.pipe(v.number(), v.integer(), v.minValue(0)),
        numTxs: v.pipe(v.number(), v.integer(), v.minValue(0)),
        proposer: v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.length(42)),
    }));
})();
const TxDetails = /* @__PURE__ */ (() => {
    return v.object({
        action: v.looseObject({ type: v.string() }),
        block: v.pipe(v.number(), v.integer(), v.minValue(0)),
        error: v.nullable(v.string()),
        hash: v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.length(66)),
        time: v.pipe(v.number(), v.integer(), v.minValue(0)),
        user: v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.length(42)),
    });
})();
const HyperliquidEventSchema = /* @__PURE__ */ (() => {
    return v.object({ channel: v.string(), data: v.unknown() });
})();
const ExplorerBlockEventSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.array(BlockDetails), v.minLength(1));
})();
const ExplorerTxsEventSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.array(TxDetails), v.minLength(1));
})();
/** Listens for WebSocket messages and sends them as Hyperliquid typed events. */
export class HyperliquidEventTarget extends TypedEventTarget {
    constructor(socket) {
        super();
        socket.addEventListener("message", (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (v.is(HyperliquidEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_(msg.channel, { detail: msg.data }));
                }
                else if (v.is(ExplorerBlockEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_("_explorerBlock", { detail: msg }));
                }
                else if (v.is(ExplorerTxsEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_("_explorerTxs", { detail: msg }));
                }
            }
            catch {
                // Ignore JSON parsing errors
            }
        });
    }
}
//# sourceMappingURL=_hyperliquid_event_target.js.map