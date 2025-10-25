"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent_ = exports.AbortSignal_ = exports.Promise_ = void 0;
exports.Promise_ = (() => {
    return {
        withResolvers: Promise.withResolvers ? () => Promise.withResolvers() : () => {
            let resolve;
            // deno-lint-ignore no-explicit-any
            let reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        },
    };
})();
exports.AbortSignal_ = (() => {
    return {
        any: AbortSignal.any ? (signals) => AbortSignal.any(signals) : (signals) => {
            const controller = new AbortController();
            for (const signal of signals) {
                if (signal.aborted) {
                    controller.abort(signal.reason);
                    return controller.signal;
                }
                signal.addEventListener("abort", () => {
                    controller.abort(signal.reason);
                }, { once: true, signal: controller.signal });
            }
            return controller.signal;
        },
        timeout: AbortSignal.timeout ? (ms) => AbortSignal.timeout(ms) : (ms) => {
            const controller = new AbortController();
            setTimeout(() => controller.abort(new Error("Signal timed out")), ms);
            return controller.signal;
        },
    };
})();
exports.CustomEvent_ = (() => {
    return globalThis.CustomEvent || class extends Event {
        detail;
        constructor(type, eventInitDict) {
            super(type, eventInitDict);
            this.detail = eventInitDict?.detail;
        }
    };
})();
//# sourceMappingURL=_polyfills.js.map