import type { IRequestTransport } from "../transport/base.js";
export type DexOption = string[] | boolean;
/** Options for creating a SymbolConverter instance. */
export interface SymbolConverterOptions {
    /** Transport instance to use for API requests. */
    transport: IRequestTransport;
    /** Optional dex support: array of dex names, true for all dexs, or false/undefined to skip. */
    dexs?: DexOption;
}
/**
 * Utility class for converting asset symbols to their corresponding IDs and size decimals.
 * Supports perpetuals, spot markets, and optional builder dexs.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/asset-ids
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { SymbolConverter } from "@nktkas/hyperliquid/utils";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 * const converter = await SymbolConverter.create({ transport });
 *
 * const btcId = converter.getAssetId("BTC"); // perpetual → 0
 * const hypeUsdcId = converter.getAssetId("HYPE/USDC"); // spot market → 10107
 * const dexAbcId = converter.getAssetId("test:ABC"); // builder dex (if enabled) → 110000
 *
 * const btcSzDecimals = converter.getSzDecimals("BTC"); // perpetual → 5
 * const hypeUsdcSzDecimals = converter.getSzDecimals("HYPE/USDC"); // spot market → 2
 * const dexAbcSzDecimals = converter.getSzDecimals("test:ABC"); // builder dex (if enabled) → 0
 * ```
 */
export declare class SymbolConverter {
    private readonly transport;
    private readonly dexOption;
    private readonly nameToAssetId;
    private readonly nameToSzDecimals;
    private constructor();
    /**
     * Create and initialize a SymbolConverter instance.
     * @param options - Configuration options including transport and optional dex support.
     * @returns Initialized SymbolConverter instance.
     * @example
     * ```ts
     * import { HttpTransport } from "@nktkas/hyperliquid";
     * import { SymbolConverter } from "@nktkas/hyperliquid/utils";
     *
     * const transport = new HttpTransport(); // or `WebSocketTransport`
     * const converter = await SymbolConverter.create({ transport });
     * ```
     */
    static create(options: SymbolConverterOptions): Promise<SymbolConverter>;
    /**
     * Reload asset mappings from the API.
     * Useful for refreshing data when new assets are added.
     */
    reload(): Promise<void>;
    private processDefaultPerps;
    private processBuilderDexs;
    private processBuilderDexResult;
    private processSpotAssets;
    /**
     * Get asset ID for a coin.
     * - For Perpetuals, use the coin name (e.g., "BTC").
     * - For Spot markets, use the "BASE/QUOTE" format (e.g., "HYPE/USDC").
     * - For Builder Dex assets, use the "DEX_NAME:ASSET_NAME" format (e.g., "test:ABC").
     * @example "BTC" → 0, "HYPE/USDC" → 10107, "test:ABC" → 110000
     */
    getAssetId(name: string): number | undefined;
    /**
     * Get size decimals for a coin.
     * - For Perpetuals, use the coin name (e.g., "BTC").
     * - For Spot markets, use the "BASE/QUOTE" format (e.g., "HYPE/USDC").
     * - For Builder Dex assets, use the "DEX_NAME:ASSET_NAME" format (e.g., "test:ABC").
     * @example "BTC" → 5, "HYPE/USDC" → 2, "test:ABC" → 0
     */
    getSzDecimals(name: string): number | undefined;
}
//# sourceMappingURL=_symbolConverter.d.ts.map