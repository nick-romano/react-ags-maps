"use strict";

// @ts-expect-error ts-migrate(2539) FIXME: Cannot assign to '_typeof' because it is not a var... Remove this comment to see the full error message
function _typeof(obj: any) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj: any) { return typeof obj; }; } else { _typeof = function _typeof(obj: any) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _hook = require("../hook");

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

function asyncGeneratorStep(gen: any, resolve: any, reject: any, _next: any, _throw: any, key: any, arg: any) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
function _asyncToGenerator(fn: any) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('esri-loader'),
    loadModules = _require.loadModules;

var LayerList = function LayerList(_ref: any) {
  var _ref$expander = _ref.expander,
      expander = _ref$expander === void 0 ? false : _ref$expander,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? "top-right" : _ref$position;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useMapContext = (0, _hook.useMapContext)(),
      view = _useMapContext.view;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var mounted = true;
    var layerList: any;

    var asyncEffect = /*#__PURE__*/function () {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var reqModules, _yield$loadModules, _yield$loadModules2, LayerList, Expand, layerListExpand;

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
        return regeneratorRuntime.wrap(function _callee$(_context: any) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reqModules = ["esri/widgets/LayerList"];
                if (expander) reqModules.push("esri/widgets/Expand");
                _context.next = 4;
                return loadModules(reqModules);

              case 4:
                _yield$loadModules = _context.sent;
                _yield$loadModules2 = _slicedToArray(_yield$loadModules, 2);
                // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                LayerList = _yield$loadModules2[0];
                // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                Expand = _yield$loadModules2[1];
                layerList = new LayerList({
                  view: view
                });

                if (expander) {
                  layerListExpand = new Expand({
                    expandIconClass: "esri-icon-layers",
                    // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
                    // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
                    view: view,
                    content: layerList
                  });
                  mounted && view.ui.add(layerListExpand, position);
                } else {
                  mounted && view.ui.add(layerList, position);
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function asyncEffect() {
        // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
        return _ref2.apply(this, arguments);
      };
    }();

    view && view.ready && asyncEffect();
    return function () {
      mounted = false;
      layerList && layerList.destroy();
    };
  }, [view, expander, position]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};

// @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
var _default = LayerList;
exports["default"] = _default;