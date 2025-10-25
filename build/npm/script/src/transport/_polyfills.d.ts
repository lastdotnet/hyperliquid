export declare const Promise_: {
    withResolvers: <T>() => PromiseWithResolvers<T>;
};
export declare const AbortSignal_: {
    any: (signals: AbortSignal[]) => AbortSignal;
    timeout: (ms: number) => AbortSignal;
};
export declare const CustomEvent_: {
    new <T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
    prototype: CustomEvent;
};
//# sourceMappingURL=_polyfills.d.ts.map