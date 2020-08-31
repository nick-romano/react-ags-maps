"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _hook = require("./hook");

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

var AccuweatherRadarLayer = function AccuweatherRadarLayer(_ref) {
  var _ref$proxyUrl = _ref.proxyUrl,
      proxyUrl = _ref$proxyUrl === void 0 ? null : _ref$proxyUrl,
      radarTileService = _ref.radarTileService,
      token = _ref.token;

  var _require = require('esri-loader'),
      loadModules = _require.loadModules;

  var _useMapContext = (0, _hook.useMapContext)(),
      map = _useMapContext.map,
      initialized = _useMapContext.initialized;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      radarIndex = _useState2[0],
      setRadarIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      looping = _useState4[0],
      setLooping = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      frames = _useState6[0],
      setFrames = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      tileUrl = _useState8[0],
      setTileUrl = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      layerIds = _useState10[0],
      setLayerIds = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      layers = _useState12[0],
      setLayers = _useState12[1];

  var numFrames = 13;
  var tileAlpha = .6;
  var loopTimeInterval = 700;
  var updateTimeInterval = 2e4;
  var forceUpdateTimeINterval = 3e5;
  var loopEndLagTime = 2000;
  var params = "?token=".concat(token, "&tt=").concat(new Date().toString());
  var url = "".concat(proxyUrl).concat(radarTileService).concat(params);

  function startLooping(data) {
    var _frames = data.frames.slice(data.frames.length - numFrames);

    setTileUrl(data.url);
    setLooping(true);
    setFrames(_frames);
  }

  ;

  function _convertFrameTime(frameTime) {
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
  (0, _react.useEffect)(function () {
    var _layers = [];
    var _layerIds = [];

    var createLayer = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var radarLoopingIndex, _yield$loadModules, _yield$loadModules2, WebTileLayer, i, _url, layer;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                radarLoopingIndex = 0;
                _context.next = 3;
                return loadModules(["esri/layers/WebTileLayer"]);

              case 3:
                _yield$loadModules = _context.sent;
                _yield$loadModules2 = _slicedToArray(_yield$loadModules, 1);
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
        return _ref2.apply(this, arguments);
      };
    }();

    if (frames.length > 0) {
      createLayer();
    }
  }, [frames]);
  (0, _react.useEffect)(function () {
    var updateDisplayLayer = function updateDisplayLayer() {
      var oldLayer = 0 === radarIndex ? layerIds[layerIds.length - 1] : layerIds[radarIndex - 1];
      map.findLayerById(oldLayer).opacity = 0; // Set next layer to specified opacity

      var newLayer = layers[radarIndex];
      newLayer.opacity = tileAlpha;
      var frameTime = frames[radarIndex];

      var time = _convertFrameTime(frameTime); // dom.byId('currentloopingframe').innerHTML = time;
      // time = null;


      var _radarIndex; // Advance the frame index


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
  (0, _react.useEffect)(function () {
    var startUp = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _looping, req, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
        return _ref3.apply(this, arguments);
      };
    }();

    initialized && startUp();
  }, [initialized]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};

var _default = AccuweatherRadarLayer;
exports["default"] = _default;