"use strict";

// @ts-expect-error ts-migrate(2539) FIXME: Cannot assign to '_typeof' because it is not a var... Remove this comment to see the full error message
function _typeof(obj: any) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj: any) { return typeof obj; }; } else { _typeof = function _typeof(obj: any) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContext = exports.MapProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

// @ts-expect-error ts-migrate(2539) FIXME: Cannot assign to '_getRequireWildcardCache' becaus... Remove this comment to see the full error message
function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

// @ts-expect-error ts-migrate(2774) FIXME: This condition will always return true since the f... Remove this comment to see the full error message
function _interopRequireWildcard(obj: any) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen: any, resolve: any, reject: any, _next: any, _throw: any, key: any, arg: any) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
function _asyncToGenerator(fn: any) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr: any, i: any) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o: any, minLen: any) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr: any, len: any) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr: any, i: any) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr: any) { if (Array.isArray(arr)) return arr; }

// @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
function ownKeys(object: any, enumerableOnly: any) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

// @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
function _objectSpread(target: any) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj: any, key: any, value: any) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('esri-loader'),
    loadModules = _require.loadModules;

var reducer = function reducer(state: any, action: any) {
  switch (action.type) {
    case "MAP_CHANGED":
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
      return _objectSpread(_objectSpread({}, state), {}, {
        map: action.payload
      });

    case "VIEW_CHANGED":
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.payload
      });

    case "SUBSCRIPTION_ADDED":
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
      return _objectSpread(_objectSpread({}, state), {}, {
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
        subscriptions: _objectSpread(_objectSpread({}, state.subscriptions), action.payload)
      });

    case "SUBSCRIPTION_CANCELED":
      //todo
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
      return _objectSpread({}, state);

    case "MAP_INIT_CHANGED":
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
      return _objectSpread(_objectSpread({}, state), {}, {
        initialized: action.payload
      });

    case "MAP_RENDERED_CHANGED":
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
      return _objectSpread(_objectSpread({}, state), {}, {
        rendered: action.payload
      });

    default:
      return state;
  }
};

var initialState = {
  map: null,
  view: null,
  subscriptions: {},
  initialized: false,
  rendered: false
};

var MapContext = /*#__PURE__*/_react["default"].createContext(initialState);

exports.MapContext = MapContext;

var MapProvider = function MapProvider(_ref: any) {
  var children = _ref.children;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      state = _useReducer2[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      dispatch = _useReducer2[1];

  var updateMap = function updateMap(map: any) {
    return dispatch({
      type: "MAP_CHANGED",
      payload: map
    });
  };

  var updateView = function updateView(view: any) {
    return dispatch({
      type: "VIEW_CHANGED",
      payload: view
    });
  };

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    if (state.map && state.view) {
      dispatch({
        type: "MAP_INIT_CHANGED",
        payload: true
      });
    }

    ;
  }, [state.map, state.view]);
  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var asyncEffect = /*#__PURE__*/function () {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
        return regeneratorRuntime.wrap(function _callee$(_context: any) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadModules(['esri/core/watchUtils']).then(function (_ref3: any) {
                  var _ref4 = _slicedToArray(_ref3, 1),
                      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                      watchUtils = _ref4[0];

                  watchUtils.whenFalseOnce(state.view, 'updating', function () {
                    dispatch({
                      type: "MAP_RENDERED_CHANGED",
                      payload: true
                    });
                  });
                });

              case 2:
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

    state.initialized && asyncEffect();
  }, [state.initialized, state.view]);
  return /*#__PURE__*/_react["default"].createElement(MapContext.Provider, {
    value: {
      updateMap: updateMap,
      updateView: updateView,
      map: state.map,
      view: state.view,
      rendered: state.rendered,
      subscriptions: state.subscriptions,
      initialized: state.initialized
    }
  }, children);
};

exports.MapProvider = MapProvider;