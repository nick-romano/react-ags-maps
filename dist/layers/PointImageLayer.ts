"use strict";

// @ts-expect-error ts-migrate(2539) FIXME: Cannot assign to '_typeof' because it is not a var... Remove this comment to see the full error message
function _typeof(obj: any) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj: any) { return typeof obj; }; } else { _typeof = function _typeof(obj: any) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _hook = require("./hook");

// @ts-expect-error ts-migrate(2539) FIXME: Cannot assign to '_getRequireWildcardCache' becaus... Remove this comment to see the full error message
function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

// @ts-expect-error ts-migrate(2774) FIXME: This condition will always return true since the f... Remove this comment to see the full error message
function _interopRequireWildcard(obj: any) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr: any, i: any) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o: any, minLen: any) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr: any, len: any) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr: any, i: any) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr: any) { if (Array.isArray(arr)) return arr; }

var _require = require('esri-loader'),
    loadModules = _require.loadModules;

var PointImageLayer = function PointImageLayer(_ref: any) {
  var image = _ref.image,
      center = _ref.center,
      spatialReference = _ref.spatialReference;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useMapContext = (0, _hook.useMapContext)(),
      map = _useMapContext.map,
      initialized = _useMapContext.initialized;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var gl: any;

    var asyncEffects = function asyncEffects() {
      loadModules(["esri/layers/GraphicsLayer", "esri/geometry/Point", "esri/Graphic", "esri/symbols/PictureMarkerSymbol"]).then(function (_ref2: any) {
        var _ref3 = _slicedToArray(_ref2, 4),
            // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
            GraphicsLayer = _ref3[0],
            // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
            Point = _ref3[1],
            // @ts-expect-error ts-migrate(7053) FIXME: Property '2' does not exist on type 'void | any[]'... Remove this comment to see the full error message
            Graphic = _ref3[2],
            // @ts-expect-error ts-migrate(7053) FIXME: Property '3' does not exist on type 'void | any[]'... Remove this comment to see the full error message
            PictureMarkerSymbol = _ref3[3];

        var loc = new Graphic({
          geometry: new Point({
            x: center[0],
            y: center[1],
            spatialReference: {
              wkid: spatialReference
            }
          }),
          symbol: new PictureMarkerSymbol({
            url: image,
            width: "64px",
            height: "64px"
          })
        });
        gl = new GraphicsLayer({
          graphics: [loc]
        });
        map.layers.add(gl, 0);
        map.allLayers.on("change", function (event: any) {
          map.reorder(gl, 1000);
        });
      });
    };

    map && asyncEffects();
    return function () {
      return map && map.layers.remove(gl);
    };
  }, [map, center, spatialReference]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};

// @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
var _default = PointImageLayer;
exports["default"] = _default;