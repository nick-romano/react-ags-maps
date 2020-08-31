"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMapContext = void 0;

var _react = require("react");

var _context = require("./context");

var useMapContext = function useMapContext() {
  return (0, _react.useContext)(_context.MapContext);
};

exports.useMapContext = useMapContext;