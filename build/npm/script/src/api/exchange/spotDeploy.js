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
exports.SuccessResponse = exports.SpotDeployRequest = void 0;
exports.spotDeploy = spotDeploy;
const _base_js_1 = require("../_base.js");
const _base_js_2 = require("./_base.js");
const v = __importStar(require("valibot"));
// -------------------- Schemas --------------------
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
exports.SpotDeployRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.variant("type", [
            v.pipe(v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Genesis parameters. */
                genesis: v.pipe(v.object({
                    /** Token identifier. */
                    token: v.pipe(_base_js_1.UnsignedInteger, v.description("Token identifier.")),
                    /** Maximum token supply. */
                    maxSupply: v.pipe(_base_js_1.UnsignedDecimal, v.description("Maximum token supply.")),
                    /** Set hyperliquidity balance to 0. */
                    noHyperliquidity: v.pipe(v.optional(v.literal(true)), v.description("Set hyperliquidity balance to 0.")),
                }), v.description("Genesis parameters.")),
            }), v.description("Genesis variant")),
            v.pipe(v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Register hyperliquidity parameters. */
                registerHyperliquidity: v.pipe(v.object({
                    /** Spot index (distinct from base token index). */
                    spot: v.pipe(_base_js_1.UnsignedInteger, v.description("Spot index (distinct from base token index).")),
                    /** Starting price for liquidity seeding. */
                    startPx: v.pipe(_base_js_1.UnsignedDecimal, v.description("Starting price for liquidity seeding.")),
                    /** Order size as a float (not in wei). */
                    orderSz: v.pipe(_base_js_1.UnsignedDecimal, v.description("Order size as a float (not in wei).")),
                    /** Total number of orders to place. */
                    nOrders: v.pipe(_base_js_1.UnsignedInteger, v.description("Total number of orders to place.")),
                    /** Number of levels to seed with USDC. */
                    nSeededLevels: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Number of levels to seed with USDC.")),
                }), v.description("Register hyperliquidity parameters.")),
            }), v.description("Register hyperliquidity variant")),
            v.pipe(v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Register spot parameters. */
                registerSpot: v.pipe(v.object({
                    /** Tuple containing base and quote token indices. */
                    tokens: v.pipe(v.tuple([
                        _base_js_1.UnsignedInteger,
                        _base_js_1.UnsignedInteger,
                    ]), v.description("Tuple containing base and quote token indices.")),
                }), v.description("Register spot parameters.")),
            }), v.description("Register spot variant")),
            v.pipe(v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Register token parameters. */
                registerToken2: v.pipe(v.object({
                    /** Token specifications. */
                    spec: v.pipe(v.object({
                        /** Token name. */
                        name: v.pipe(v.string(), v.description("Token name.")),
                        /** Number of decimals for token size. */
                        szDecimals: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of decimals for token size.")),
                        /** Number of decimals for token amounts in wei. */
                        weiDecimals: v.pipe(_base_js_1.UnsignedInteger, v.description("Number of decimals for token amounts in wei.")),
                    }), v.description("Token specifications.")),
                    /** Maximum gas allowed for registration. */
                    maxGas: v.pipe(_base_js_1.UnsignedInteger, v.description("Maximum gas allowed for registration.")),
                    /** Optional full token name. */
                    fullName: v.pipe(v.optional(v.string()), v.description("Optional full token name.")),
                }), v.description("Register token parameters.")),
            }), v.description("Register token variant")),
            v.pipe(v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Set deployer trading fee share parameters. */
                setDeployerTradingFeeShare: v.pipe(v.object({
                    /** Token identifier. */
                    token: v.pipe(_base_js_1.UnsignedInteger, v.description("Token identifier.")),
                    /** The deployer trading fee share. Range is 0% to 100%. */
                    share: v.pipe(_base_js_1.Percent, v.description("The deployer trading fee share. Range is 0% to 100%.")),
                }), v.description("Set deployer trading fee share parameters.")),
            }), v.description("Set deployer trading fee share variant")),
            v.pipe(v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** User genesis parameters. */
                userGenesis: v.pipe(v.object({
                    /** Token identifier. */
                    token: v.pipe(_base_js_1.UnsignedInteger, v.description("Token identifier.")),
                    /** Array of tuples: [user address, genesis amount in wei]. */
                    userAndWei: v.pipe(v.array(v.tuple([_base_js_1.Address, _base_js_1.UnsignedDecimal])), v.description("Array of tuples: [user address, genesis amount in wei].")),
                    /** Array of tuples: [existing token identifier, genesis amount in wei]. */
                    existingTokenAndWei: v.pipe(v.array(v.tuple([
                        _base_js_1.UnsignedInteger,
                        _base_js_1.UnsignedDecimal,
                    ])), v.description("Array of tuples: [existing token identifier, genesis amount in wei].")),
                    /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
                    blacklistUsers: v.pipe(v.optional(v.array(v.tuple([_base_js_1.Address, v.boolean()]))), v.description("Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).")),
                }), v.description("User genesis parameters.")),
            }), v.description("User genesis variant")),
        ]), v.description("Action to perform.")),
        /** Unique request identifier (current timestamp in ms). */
        nonce: v.pipe(_base_js_1.UnsignedInteger, v.description("Unique request identifier (current timestamp in ms).")),
        /** Cryptographic signature. */
        signature: v.pipe(_base_js_2.Signature, v.description("Cryptographic signature.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_base_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Deploying HIP-1 and HIP-2 assets:" +
        "\n- Genesis" +
        "\n- Register Hyperliquidity" +
        "\n- Register Spot" +
        "\n- Register Token2" +
        "\n- Set Deployer Trading Fee Share" +
        "\n- User Genesis"));
})();
const _base_js_3 = require("./_base.js");
Object.defineProperty(exports, "SuccessResponse", { enumerable: true, get: function () { return _base_js_3.SuccessResponse; } });
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 * @returns Successful response without specific data.
 *
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotDeploy } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotDeploy(
 *   { transport, wallet },
 *   {
 *     registerToken2: {
 *       spec: {
 *         name: "USDC",
 *         szDecimals: 8,
 *         weiDecimals: 8,
 *       },
 *       maxGas: 1000000,
 *       fullName: "USD Coin",
 *     },
 *   },
 * );
 * ```
 */
async function spotDeploy(config, params, opts) {
    const action = (0, _base_js_1.parser)(exports.SpotDeployRequest.entries.action)({
        type: "spotDeploy",
        ...params,
    });
    const expiresAfter = typeof config.defaultExpiresAfter === "number"
        ? config.defaultExpiresAfter
        : await config.defaultExpiresAfter?.();
    return await (0, _base_js_2.executeL1Action)(config, { action, expiresAfter }, opts?.signal);
}
//# sourceMappingURL=spotDeploy.js.map