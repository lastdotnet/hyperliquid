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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaError = exports.HyperliquidError = void 0;
var _base_js_1 = require("./_base.js");
Object.defineProperty(exports, "HyperliquidError", { enumerable: true, get: function () { return _base_js_1.HyperliquidError; } });
var _base_js_2 = require("./api/_base.js");
Object.defineProperty(exports, "SchemaError", { enumerable: true, get: function () { return _base_js_2.SchemaError; } });
__exportStar(require("./transport/base.js"), exports);
__exportStar(require("./transport/http/mod.js"), exports);
__exportStar(require("./transport/websocket/mod.js"), exports);
__exportStar(require("./api/exchange/~client.js"), exports);
__exportStar(require("./api/info/~client.js"), exports);
__exportStar(require("./api/subscription/~client.js"), exports);
//# sourceMappingURL=mod.js.map