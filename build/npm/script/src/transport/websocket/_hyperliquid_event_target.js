"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperliquidEventTarget = void 0;
const typescript_event_target_1 = require("typescript-event-target");
const v = __importStar(require("valibot"));
const _polyfills_js_1 = require("../_polyfills.js");
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
class HyperliquidEventTarget extends typescript_event_target_1.TypedEventTarget {
    constructor(socket) {
        super();
        socket.addEventListener("message", (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (v.is(HyperliquidEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_(msg.channel, { detail: msg.data }));
                }
                else if (v.is(ExplorerBlockEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("_explorerBlock", { detail: msg }));
                }
                else if (v.is(ExplorerTxsEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("_explorerTxs", { detail: msg }));
                }
            }
            catch {
                // Ignore JSON parsing errors
            }
        });
    }
}
exports.HyperliquidEventTarget = HyperliquidEventTarget;
//# sourceMappingURL=_hyperliquid_event_target.js.map