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

function asyncGeneratorStep(gen: any, resolve: any, reject: any, _next: any, _throw: any, key: any, arg: any) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

// @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
function _asyncToGenerator(fn: any) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err: any) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr: any, i: any) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o: any, minLen: any) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr: any, len: any) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr: any, i: any) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr: any) { if (Array.isArray(arr)) return arr; }

var AccuweatherRadarLayer = function AccuweatherRadarLayer(_ref: any) {
  var _ref$proxyUrl = _ref.proxyUrl,
      proxyUrl = _ref$proxyUrl === void 0 ? null : _ref$proxyUrl,
      radarTileService = _ref.radarTileService,
      token = _ref.token;

  var _require = require('esri-loader'),
      loadModules = _require.loadModules;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useMapContext = (0, _hook.useMapContext)(),
      map = _useMapContext.map,
      initialized = _useMapContext.initialized;

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      radarIndex = _useState2[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      setRadarIndex = _useState2[1];

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      looping = _useState4[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      setLooping = _useState4[1];

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      frames = _useState6[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      setFrames = _useState6[1];

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      tileUrl = _useState8[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      setTileUrl = _useState8[1];

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      layerIds = _useState10[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      setLayerIds = _useState10[1];

  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      layers = _useState12[0],
      // @ts-expect-error ts-migrate(7053) FIXME: Property '1' does not exist on type 'void | any[]'... Remove this comment to see the full error message
      setLayers = _useState12[1];

  var numFrames = 13;
  var tileAlpha = .6;
  var loopTimeInterval = 700;
  var updateTimeInterval = 2e4;
  var forceUpdateTimeINterval = 3e5;
  var loopEndLagTime = 2000;
  var params = "?token=".concat(token, "&tt=").concat(new Date().toString());
  var url = "".concat(proxyUrl).concat(radarTileService).concat(params);

  function startLooping(data: any) {
    var _frames = data.frames.slice(data.frames.length - numFrames);

    setTileUrl(data.url);
    setLooping(true);
    setFrames(_frames);
  }

  ;

  function _convertFrameTime(frameTime: any) {
    var serverTz = 'GMT'; // get current date

    var serverDate = new Date(); // set hours for frame time, will be in UTC

    serverDate.setHours(frameTime.substr(0, 2));
    serverDate.setMinutes(frameTime.substr(2, 4)); // Convert to users time zone

    serverDate.setMinutes(serverDate.getMinutes() - serverDate.getTimezoneOffset());
    var readableDate = serverDate.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
    return readableDate;
  }

  ;
  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var _layers: any = [];
    var _layerIds: any = [];

    var createLayer = /*#__PURE__*/function () {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var radarLoopingIndex, _yield$loadModules, _yield$loadModules2, WebTileLayer, i, _url, layer;

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
        return regeneratorRuntime.wrap(function _callee$(_context: any) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                radarLoopingIndex = 0;
                _context.next = 3;
                return loadModules(["esri/layers/WebTileLayer"]);

              case 3:
                _yield$loadModules = _context.sent;
                _yield$loadModules2 = _slicedToArray(_yield$loadModules, 1);
                // @ts-expect-error ts-migrate(7053) FIXME: Property '0' does not exist on type 'void | any[]'... Remove this comment to see the full error message
                WebTileLayer = _yield$loadModules2[0];
                console.log(map);

                for (i = 0; i < numFrames; i++) {
                  _url = "".concat(tileUrl, "/").concat(frames[i], "/{level}/{col}_{row}.png");
                  layer = new WebTileLayer({
                    urlTemplate: _url,
                    listMode: 'hide'
                  });
                  layer.opacity = 0;
                  map.add(layer);

                  _layerIds.push(layer.id);

                  _layers.push(map.findLayerById(layer.id));
                }

                ;
                setRadarIndex(1);
                setLayers(_layers);
                setLayerIds(_layerIds);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function createLayer() {
        // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
        return _ref2.apply(this, arguments);
      };
    }();

    if (frames.length > 0) {
      createLayer();
    }
  }, [frames]);
  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var updateDisplayLayer = function updateDisplayLayer() {
      var oldLayer = 0 === radarIndex ? layerIds[layerIds.length - 1] : layerIds[radarIndex - 1];
      map.findLayerById(oldLayer).opacity = 0; // Set next layer to specified opacity

      var newLayer = layers[radarIndex];
      newLayer.opacity = tileAlpha;
      var frameTime = frames[radarIndex];

      var time = _convertFrameTime(frameTime); // dom.byId('currentloopingframe').innerHTML = time;
      // time = null;


      var _radarIndex: any; // Advance the frame index


      if (radarIndex + 1 < numFrames) {
        _radarIndex = radarIndex + 1;
      } else {
        _radarIndex = 0;
      }

      ;

      if (radarIndex !== 0) {
        setTimeout(function () {
          setRadarIndex(_radarIndex);
        }, loopTimeInterval);
      } else {
        setTimeout(function () {
          setRadarIndex(_radarIndex);
        }, loopEndLagTime);
      }
    };

    layerIds.length === numFrames && updateDisplayLayer();
  }, [layerIds, radarIndex]);
  // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
  (0, _react.useEffect)(function () {
    var startUp = /*#__PURE__*/function () {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _looping, req, data;

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'regeneratorRuntime'.
        return regeneratorRuntime.wrap(function _callee2$(_context2: any) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _looping = looping;
                _looping && setLooping(false);
                if (_looping) _looping = false;
                _context2.next = 5;
                return fetch(url);

              case 5:
                req = _context2.sent;
                _context2.next = 8;
                return req.json();

              case 8:
                data = _context2.sent;
                // todo add fail logic
                startLooping(data);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function startUp() {
        // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
        return _ref3.apply(this, arguments);
      };
    }();

    initialized && startUp();
  }, [initialized]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};

// @ts-expect-error ts-migrate(2403) FIXME: Subsequent variable declarations must have the sam... Remove this comment to see the full error message
var _default = AccuweatherRadarLayer;
exports["default"] = _default;