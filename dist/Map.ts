"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");

var _MapInstance = _interopRequireDefault(require("./MapInstance"));

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _interopRequireDefault(obj: any) { return obj && obj.__esModule ? obj : { "default": obj }; }

// @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
var Map = function Map(_ref: any) {
  var id = _ref.id,
      _ref$webMapId = _ref.webMapId,
      webMapId = _ref$webMapId === void 0 ? null : _ref$webMapId,
      style = _ref.style,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      zoom = _ref.zoom,
      children = _ref.children,
      portal = _ref.portal;
  return /*#__PURE__*/_react["default"].createElement(_context.MapProvider, null, /*#__PURE__*/_react["default"].createElement(_MapInstance["default"], {
    id: id,
    webMapId: webMapId,
    style: style,
    centerX: centerX,
    centerY: centerY,
    zoom: zoom,
    portal: portal
  }, children));
};

var _default = Map;
exports["default"] = _default;