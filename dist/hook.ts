"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMapContext = void 0;

var _react = require("react");

var _context = require("./context");

var useMapContext = function useMapContext() {
  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  return (0, _react.useContext)(_context.MapContext);
};

exports.useMapContext = useMapContext;