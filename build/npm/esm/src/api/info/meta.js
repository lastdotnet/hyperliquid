import * as v from "valibot";
import { parser, UnsignedInteger } from "../_base.js";
import { MarginTableResponse } from "./marginTable.js";
// -------------------- Schemas --------------------
/**
 * Request trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export const MetaRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("meta"), v.description("Type of request.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request trading metadata."));
})();
/**
 * Metadata for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export const MetaResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Trading universes available for perpetual trading. */
        universe: v.pipe(v.array(
        /** Trading universe parameters for perpetual asset. */
        v.pipe(v.object({
            /** Minimum decimal places for order sizes. */
            szDecimals: v.pipe(UnsignedInteger, v.description("Minimum decimal places for order sizes.")),
            /** Name of the universe. */
            name: v.pipe(v.string(), v.description("Name of the universe.")),
            /** Maximum allowed leverage. */
            maxLeverage: v.pipe(UnsignedInteger, v.minValue(1), v.description("Maximum allowed leverage.")),
            /** Unique identifier for the margin requirements table. */
            marginTableId: v.pipe(UnsignedInteger, v.description("Unique identifier for the margin requirements table.")),
            /** Indicates if only isolated margin trading is allowed. */
            onlyIsolated: v.pipe(v.optional(v.literal(true)), v.description("Indicates if only isolated margin trading is allowed.")),
            /** Indicates if the universe is delisted. */
            isDelisted: v.pipe(v.optional(v.literal(true)), v.description("Indicates if the universe is delisted.")),
        }), v.description("Trading universe parameters for perpetual asset."))), v.description("Trading universes available for perpetual trading.")),
        /** Margin requirement tables for different leverage tiers. */
        marginTables: v.pipe(v.array(
        /** Tuple of margin table ID and its details. */
        v.pipe(v.tuple([
            UnsignedInteger,
            MarginTableResponse,
        ]), v.description("Tuple of margin table ID and its details."))), v.description("Margin requirement tables for different leverage tiers.")),
        /** Collateral token index. */
        collateralToken: v.pipe(UnsignedInteger, v.description("Collateral token index.")),
    }), v.description("Metadata for perpetual assets."));
})();
export function meta(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = parser(MetaRequest)({
        type: "meta",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=meta.js.map