"use strict";

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _typeof(obj: any) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj: any) { return typeof obj; }; } else { _typeof = function _typeof(obj: any) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _hook = require("./hook");

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _interopRequireWildcard(obj: any) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function ownKeys(object: any, enumerableOnly: any) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _objectSpread(target: any) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _defineProperty(obj: any, key: any, value: any) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _slicedToArray(arr: any, i: any) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _unsupportedIterableToArray(o: any, minLen: any) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _arrayLikeToArray(arr: any, len: any) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _iterableToArrayLimit(arr: any, i: any) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _arrayWithHoles(arr: any) { if (Array.isArray(arr)) return arr; }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function asyncGeneratorStep(gen: any, resolve: any, reject: any, _next: any, _throw: any, key: any, arg: any) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

// @ts-expect-error ts-migrate(2393) FIXME: Duplicate function implementation.
function _asyncToGenerator(fn: any) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('esri-loader'),
    loadModules = _require.loadModules,
    loadCss = _require.loadCss,
    parseVersion = _require.parseVersion; // this will lazy load the ArcGIS API
// and then use Dojo's loader to require the map class


var MapInstance = function MapInstance(_ref: any) {
  var id = _ref.id,
      style = _ref.style,
      children = _ref.children,
      _ref$webMapId = _ref.webMapId,
      webMapId = _ref$webMapId === void 0 ? null : _ref$webMapId,
      _ref$centerX = _ref.centerX,
      centerX = _ref$centerX === void 0 ? 10.546874999 : _ref$centerX,
      _ref$centerY = _ref.centerY,
      centerY = _ref$centerY === void 0 ? 35.31736 : _ref$centerY,
      _ref$zoom = _ref.zoom,
      zoom = _ref$zoom === void 0 ? 2 : _ref$zoom,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useMapContext = (0, _hook.useMapContext)(),
      updateMap = _useMapContext.updateMap,
      updateView = _useMapContext.updateView;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var loadMap = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _view: any, _map: any, loadMap: any, modules;

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
    return regeneratorRuntime.wrap(function _callee2$(_context2: any) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loadCss();
            console.log(parseVersion());

            loadMap = /*#__PURE__*/function () {
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3: any) {
                var _ref5, MapView, WebMap, webMercatorUtils;

                // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
                return regeneratorRuntime.wrap(function _callee$(_context: any) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                        _ref5 = _slicedToArray(_ref3, 3), MapView = _ref5[0], WebMap = _ref5[1], webMercatorUtils = _ref5[2];
                        _context.prev = 1;

                        // then we load a web map from an id
                        if (webMapId) {
                          _map = new WebMap({
                            basemap: "dark-gray-vector",
                            portalItem: {
                              id: webMapId
                            }
                          });
                        } else {
                          _map = new WebMap({
                            basemap: "dark-gray-vector"
                          });
                        }

                        ; // and we show that map in a container w/ id #viewDiv

                        _view = new MapView({
                          map: _map,
                          container: id,
                          center: [centerX, centerY],
                          spatialReference: {
                            wkid: 102100
                          },
                          zoom: zoom
                        }); // Remove the default widgets

                        _view.ui.components = []; // Adds widget below other elements in the top left corner of the view

                        _context.next = 8;
                        return _map.when();

                      case 8:
                        _context.next = 10;
                        return _view.when();

                      case 10:
                        return _context.abrupt("return", [_map, _view]);

                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](1);
                        return _context.abrupt("return", [_context.t0, _context.t0, _context.t0, _context.t0]);

                      case 16:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[1, 13]]);
              }));

              return function loadMap(_x: any) {
                // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
                return _ref4.apply(this, arguments);
              };
            }();

            _context2.next = 5;
            return loadModules(['esri/views/MapView', "esri/WebMap", "esri/geometry/support/webMercatorUtils"]);

          case 5:
            modules = _context2.sent;
            _context2.next = 8;
            return loadMap(modules);

          case 8:
            return _context2.abrupt("return", _context2.sent);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [centerX, centerY, id, webMapId, zoom]);
  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var map: any, view: any;

    var asyncEffects = /*#__PURE__*/function () {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _yield$loadMap, _yield$loadMap2, map, view;

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
        return regeneratorRuntime.wrap(function _callee3$(_context3: any) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return loadMap();

              case 2:
                _yield$loadMap = _context3.sent;
                _yield$loadMap2 = _slicedToArray(_yield$loadMap, 2);
                // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                map = _yield$loadMap2[0];
                // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                view = _yield$loadMap2[1];
                view && updateView(view);
                map && updateMap(map);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function asyncEffects() {
        // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
        return _ref6.apply(this, arguments);
      };
    }();

    !map && asyncEffects();
    return function () {
      // console.log('map destroyed');
      map && map.destroy();
      view && view.destroy();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id,
    style: _objectSpread({
      width: "100%",
      height: "100%"
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
    }, style)
  }, " ", children, " ");
};

// @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
var _default = MapInstance;
exports["default"] = _default;