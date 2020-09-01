"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hook_1 = require("../hook");
var AccuweatherRadarLayer = function (_a) {
    var _b = _a.proxyUrl, proxyUrl = _b === void 0 ? "" : _b, radarTileService = _a.radarTileService, token = _a.token;
    var loadModules = require('esri-loader').loadModules;
    var _c = hook_1.useMapContext(), map = _c.map, initialized = _c.initialized;
    var _d = react_1.useState(0), radarIndex = _d[0], setRadarIndex = _d[1];
    var _e = react_1.useState(false), looping = _e[0], setLooping = _e[1];
    var _f = react_1.useState([]), frames = _f[0], setFrames = _f[1];
    var _g = react_1.useState(null), tileUrl = _g[0], setTileUrl = _g[1];
    var _h = react_1.useState([]), layerIds = _h[0], setLayerIds = _h[1];
    var _j = react_1.useState([]), layers = _j[0], setLayers = _j[1];
    var numFrames = 13;
    var tileAlpha = .6;
    var loopTimeInterval = 700;
    var loopEndLagTime = 2000;
    var params = "?token=" + token + "&tt=" + new Date().toString();
    var url = "" + proxyUrl + radarTileService + params;
    function startLooping(data) {
        var _frames = data.frames.slice(data.frames.length - numFrames);
        setTileUrl(data.url);
        setLooping(true);
        setFrames(_frames);
    }
    ;
    function _convertFrameTime(frameTime) {
        var serverTz = 'GMT';
        // get current date
        var serverDate = new Date();
        // set hours for frame time, will be in UTC
        serverDate.setHours(frameTime.substr(0, 2));
        serverDate.setMinutes(frameTime.substr(2, 4));
        // Convert to users time zone
        serverDate.setMinutes(serverDate.getMinutes() - serverDate.getTimezoneOffset());
        var readableDate = serverDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
        return readableDate;
    }
    ;
    react_1.useEffect(function () {
        var _layers = [];
        var _layerIds = [];
        var createLayer = function () { return __awaiter(void 0, void 0, void 0, function () {
            var radarLoopingIndex, WebTileLayer, i, url_1, layer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        radarLoopingIndex = 0;
                        return [4 /*yield*/, loadModules(["esri/layers/WebTileLayer"])];
                    case 1:
                        WebTileLayer = (_a.sent())[0];
                        console.log(map);
                        for (i = 0; i < numFrames; i++) {
                            url_1 = tileUrl + "/" + frames[i] + "/{level}/{col}_{row}.png";
                            layer = new WebTileLayer({ urlTemplate: url_1, listMode: 'hide' });
                            layer.opacity = 0;
                            map === null || map === void 0 ? void 0 : map.add(layer);
                            _layerIds.push(layer.id);
                            map && _layers.push(map === null || map === void 0 ? void 0 : map.findLayerById(layer.id));
                        }
                        ;
                        setRadarIndex(1);
                        setLayers(_layers);
                        setLayerIds(_layerIds);
                        return [2 /*return*/];
                }
            });
        }); };
        if (frames.length > 0) {
            createLayer();
        }
    }, [frames]);
    react_1.useEffect(function () {
        var updateDisplayLayer = function () {
            var oldLayer = 0 === radarIndex ? layerIds[layerIds.length - 1] : layerIds[radarIndex - 1];
            map.findLayerById(oldLayer).opacity = 0;
            // Set next layer to specified opacity
            var newLayer = layers[radarIndex];
            newLayer.opacity = tileAlpha;
            var frameTime = frames[radarIndex];
            var time = _convertFrameTime(frameTime);
            // dom.byId('currentloopingframe').innerHTML = time;
            // time = null;
            var _radarIndex;
            // Advance the frame index
            if (radarIndex + 1 < numFrames) {
                _radarIndex = radarIndex + 1;
            }
            else {
                _radarIndex = 0;
            }
            ;
            if (radarIndex !== 0) {
                setTimeout(function () { setRadarIndex(_radarIndex); }, loopTimeInterval);
            }
            else {
                setTimeout(function () { setRadarIndex(_radarIndex); }, loopEndLagTime);
            }
        };
        layerIds.length === numFrames && updateDisplayLayer();
    }, [layerIds, radarIndex]);
    react_1.useEffect(function () {
        var startUp = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _looping, req, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _looping = looping;
                        _looping && setLooping(false);
                        if (_looping)
                            _looping = false;
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        req = _a.sent();
                        return [4 /*yield*/, req.json()];
                    case 2:
                        data = _a.sent();
                        // todo add fail logic
                        startLooping(data);
                        return [2 /*return*/];
                }
            });
        }); };
        initialized && startUp();
        return function () {
            layers.forEach(function (layer) {
                map === null || map === void 0 ? void 0 : map.layers.remove(layer);
            });
        };
    }, [initialized]);
    return (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.default = AccuweatherRadarLayer;
//# sourceMappingURL=AccuweatherRadarLayer.js.map