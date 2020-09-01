"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var context_1 = require("./context");
var MapInstance_1 = __importDefault(require("./MapInstance"));
var Map = function (_a) {
    var id = _a.id, _b = _a.webMapId, webMapId = _b === void 0 ? null : _b, style = _a.style, centerX = _a.centerX, centerY = _a.centerY, zoom = _a.zoom, children = _a.children, portal = _a.portal;
    return (react_1.default.createElement(context_1.MapProvider, null,
        react_1.default.createElement(MapInstance_1.default, { id: id, webMapId: webMapId, style: style, centerX: centerX, centerY: centerY, zoom: zoom, portal: portal }, children)));
};
exports.default = Map;
//# sourceMappingURL=Map.js.map