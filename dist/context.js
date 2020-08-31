"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContext = exports.MapProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('esri-loader'),
    loadModules = _require.loadModules;

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "MAP_CHANGED":
      return _objectSpread(_objectSpread({}, state), {}, {
        map: action.payload
      });

    case "VIEW_CHANGED":
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.payload
      });

    case "SUBSCRIPTION_ADDED":
      return _objectSpread(_objectSpread({}, state), {}, {
        subscriptions: _objectSpread(_objectSpread({}, state.subscriptions), action.payload)
      });

    case "SUBSCRIPTION_CANCELED":
      //todo
      return _objectSpread({}, state);

    case "MAP_INIT_CHANGED":
      return _objectSpread(_objectSpread({}, state), {}, {
        initialized: action.payload
      });

    case "MAP_RENDERED_CHANGED":
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

var MapProvider = function MapProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var updateMap = function updateMap(map) {
    return dispatch({
      type: "MAP_CHANGED",
      payload: map
    });
  };

  var updateView = function updateView(view) {
    return dispatch({
      type: "VIEW_CHANGED",
      payload: view
    });
  };

  (0, _react.useEffect)(function () {
    if (state.map && state.view) {
      dispatch({
        type: "MAP_INIT_CHANGED",
        payload: true
      });
    }

    ;
  }, [state.map, state.view]);
  (0, _react.useEffect)(function () {
    var asyncEffect = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadModules(['esri/core/watchUtils']).then(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 1),
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