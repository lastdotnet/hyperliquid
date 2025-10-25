export const Promise_ = /* @__PURE__ */ (() => {
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
export const AbortSignal_ = /* @__PURE__ */ (() => {
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
export const CustomEvent_ = /* @__PURE__ */ (() => {
    return globalThis.CustomEvent || class extends Event {
        detail;
        constructor(type, eventInitDict) {
            super(type, eventInitDict);
            this.detail = eventInitDict?.detail;
        }
    };
})();
//# sourceMappingURL=_polyfills.js.map