exports.ids = [25];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*************************************************************************************************************/
/*! exports provided: layerLookupMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerLookupMap", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/*! import() */ 149).then(__webpack_require__.bind(null, /*! ../BingMapsLayer.js */ "../../node_modules/@arcgis/core/layers/BingMapsLayer.js"))).default,BuildingSceneLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(61)]).then(__webpack_require__.bind(null, /*! ../BuildingSceneLayer.js */ "../../node_modules/@arcgis/core/layers/BuildingSceneLayer.js"))).default,CSVLayer:async()=>(await __webpack_require__.e(/*! import() */ 150).then(__webpack_require__.bind(null, /*! ../CSVLayer.js */ "../../node_modules/@arcgis/core/layers/CSVLayer.js"))).default,ElevationLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, /*! ../ElevationLayer.js */ "../../node_modules/@arcgis/core/layers/ElevationLayer.js"))).default,FeatureLayer:async()=>(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../FeatureLayer.js */ "../../node_modules/@arcgis/core/layers/FeatureLayer.js"))).default,GroupLayer:async()=>(await __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ../GroupLayer.js */ "../../node_modules/@arcgis/core/layers/GroupLayer.js"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/*! import() */ 171).then(__webpack_require__.bind(null, /*! ../GeoRSSLayer.js */ "../../node_modules/@arcgis/core/layers/GeoRSSLayer.js"))).default,ImageryLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e(31), __webpack_require__.e(41), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, /*! ../ImageryLayer.js */ "../../node_modules/@arcgis/core/layers/ImageryLayer.js"))).default,ImageryTileLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e(31), __webpack_require__.e(41), __webpack_require__.e(34), __webpack_require__.e(58)]).then(__webpack_require__.bind(null, /*! ../ImageryTileLayer.js */ "../../node_modules/@arcgis/core/layers/ImageryTileLayer.js"))).default,IntegratedMeshLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(89)]).then(__webpack_require__.bind(null, /*! ../IntegratedMeshLayer.js */ "../../node_modules/@arcgis/core/layers/IntegratedMeshLayer.js"))).default,KMLLayer:async()=>(await __webpack_require__.e(/*! import() */ 92).then(__webpack_require__.bind(null, /*! ../KMLLayer.js */ "../../node_modules/@arcgis/core/layers/KMLLayer.js"))).default,MapImageLayer:async()=>(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../MapImageLayer.js */ "../../node_modules/@arcgis/core/layers/MapImageLayer.js"))).default,MapNotesLayer:async()=>(await __webpack_require__.e(/*! import() */ 151).then(__webpack_require__.bind(null, /*! ../MapNotesLayer.js */ "../../node_modules/@arcgis/core/layers/MapNotesLayer.js"))).default,OGCFeatureLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(49), __webpack_require__.e(152)]).then(__webpack_require__.bind(null, /*! ../OGCFeatureLayer.js */ "../../node_modules/@arcgis/core/layers/OGCFeatureLayer.js"))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(/*! import() */ 100).then(__webpack_require__.bind(null, /*! ../OpenStreetMapLayer.js */ "../../node_modules/@arcgis/core/layers/OpenStreetMapLayer.js"))).default,PointCloudLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(44), __webpack_require__.e(79)]).then(__webpack_require__.bind(null, /*! ../PointCloudLayer.js */ "../../node_modules/@arcgis/core/layers/PointCloudLayer.js"))).default,RouteLayer:async()=>(await __webpack_require__.e(/*! import() */ 172).then(__webpack_require__.bind(null, /*! ../RouteLayer.js */ "../../node_modules/@arcgis/core/layers/RouteLayer.js"))).default,SceneLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(27), __webpack_require__.e(91)]).then(__webpack_require__.bind(null, /*! ../SceneLayer.js */ "../../node_modules/@arcgis/core/layers/SceneLayer.js"))).default,StreamLayer:async()=>(await __webpack_require__.e(/*! import() */ 153).then(__webpack_require__.bind(null, /*! ../StreamLayer.js */ "../../node_modules/@arcgis/core/layers/StreamLayer.js"))).default,TileLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(26), __webpack_require__.e(173)]).then(__webpack_require__.bind(null, /*! ../TileLayer.js */ "../../node_modules/@arcgis/core/layers/TileLayer.js"))).default,UnknownLayer:async()=>(await __webpack_require__.e(/*! import() */ 174).then(__webpack_require__.bind(null, /*! ../UnknownLayer.js */ "../../node_modules/@arcgis/core/layers/UnknownLayer.js"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/*! import() */ 175).then(__webpack_require__.bind(null, /*! ../UnsupportedLayer.js */ "../../node_modules/@arcgis/core/layers/UnsupportedLayer.js"))).default,VectorTileLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(32), __webpack_require__.e(26), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, /*! ../VectorTileLayer.js */ "../../node_modules/@arcgis/core/layers/VectorTileLayer.js"))).default,WebTileLayer:async()=>(await __webpack_require__.e(/*! import() */ 155).then(__webpack_require__.bind(null, /*! ../WebTileLayer.js */ "../../node_modules/@arcgis/core/layers/WebTileLayer.js"))).default,WFSLayer:async()=>(await Promise.all(/*! import() */[__webpack_require__.e(46), __webpack_require__.e(154)]).then(__webpack_require__.bind(null, /*! ../WFSLayer.js */ "../../node_modules/@arcgis/core/layers/WFSLayer.js"))).default,WMSLayer:async()=>(await __webpack_require__.e(/*! import() */ 93).then(__webpack_require__.bind(null, /*! ../WMSLayer.js */ "../../node_modules/@arcgis/core/layers/WMSLayer.js"))).default,WMTSLayer:async()=>(await __webpack_require__.e(/*! import() */ 87).then(__webpack_require__.bind(null, /*! ../WMTSLayer.js */ "../../node_modules/@arcgis/core/layers/WMTSLayer.js"))).default};


/***/ }),

/***/ "../../node_modules/@arcgis/core/portal/support/jsonContext.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*********************************************************************************************************/
/*! exports provided: createForItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForItem", function() { return o; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ "../../node_modules/@arcgis/core/portal/Portal.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/portal/support/layersLoader.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/portal/support/layersLoader.js ***!
  \**********************************************************************************************************/
/*! exports provided: getFirstLayerOrTableId, getNumLayersAndTables, load, preprocessFSItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstLayerOrTableId", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumLayersAndTables", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preprocessFSItemData", function() { return m; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "../../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "../../node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonContext.js */ "../../node_modules/@arcgis/core/portal/support/jsonContext.js");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "../../node_modules/@arcgis/core/renderers/support/styleUtils.js");
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/requestPresets.js */ "../../node_modules/@arcgis/core/support/requestPresets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o(e,t){const r=e.instance.portalItem;return r&&r.id?(await r.load(t),s(e),i(e,t)):Promise.resolve()}function s(t){const r=t.instance.portalItem;if(-1===t.supportedTypes.indexOf(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}async function i(e,t){const r=e.instance,a=r.portalItem,{url:o,title:s}=a,i=Object(_jsonContext_js__WEBPACK_IMPORTED_MODULE_3__["createForItem"])(a);if("group"===r.type)return r.read({title:s},i),u(r,e);o&&r.read({url:o},i);const c=await y(e,t);return c&&r.read(c,i),r.resourceReferences={portalItem:a,paths:i.readResourcePaths},r.read({title:s},i),Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__["loadStyleRenderer"])(r,i)}function u(r,n){let l;const a=r.portalItem.type;switch(a){case"Feature Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__["layerLookupMap"].FeatureLayer;break;case"Stream Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__["layerLookupMap"].StreamLayer;break;case"Scene Service":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__["layerLookupMap"].SceneLayer;break;case"Feature Collection":l=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__["layerLookupMap"].FeatureLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unsupported-item-type-as-group",`The item type '${a}' is not supported as a 'IGroupLayer'`)}let o;return l().then((e=>(o=e,y(n)))).then((async e=>"Feature Service"===a?(e=await m(e,r.portalItem.url),p(r,o,e)):h(e)>0?p(r,o,e):c(r,o)))}function c(e,t){return e.portalItem.url?Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__["requestArcGISServiceJSON"])(e.portalItem.url).then((r=>{var n,l;function a(e){return{id:e.id,name:e.name}}r&&p(e,t,{layers:null==(n=r.layers)?void 0:n.map(a),tables:null==(l=r.tables)?void 0:l.map(a)})})):Promise.resolve()}function p(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=d(e,t,r,n);e.add(l)})),l.reverse().forEach((n=>{const l=d(e,t,r,n);e.tables.add(l)}))}function d(e,t,n,l){const a=new t({portalItem:e.portalItem.clone(),layerId:l.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault()};a.read(l,t);const o=n.showLegend;null!=o&&a.read({showLegend:o},t)}return a}function y(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(I(r)){let t,n=!0;return e&&h(e)>0&&(null==r.layerId&&(r.layerId=f(e)),t=v(e,r.layerId),t&&(1===h(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function m(e,t){var r,n;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n=e)?void 0:n.tables)){const r=await Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__["requestArcGISServiceJSON"])(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function v(e,t){const r=e.layers;if(r)for(let l=0;l<r.length;l++)if(r[l].id===t)return r[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}function h(e){var t,r,n,l;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}function I(e){return"stream"!==e.type&&"layerId"in e}


/***/ }),

/***/ "../../node_modules/@arcgis/core/portal/support/portalLayers.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/portal/support/portalLayers.js ***!
  \**********************************************************************************************************/
/*! exports provided: fromItem, selectLayerClassPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromItem", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLayerClassPath", function() { return l; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "../../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PortalItem.js */ "../../node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _layersLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layersLoader.js */ "../../node_modules/@arcgis/core/portal/support/layersLoader.js");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portalItemUtils.js */ "../../node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/requestPresets.js */ "../../node_modules/@arcgis/core/support/requestPresets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(e){return!e.portalItem||e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"]||(e={...e,portalItem:new _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.portalItem)}),u(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function u(e){return e.load().then(l).then(y)}function l(r){switch(r.type){case"Map Service":return m(r);case"Feature Service":return p(r);case"Feature Collection":return L(r);case"Scene Service":return f(r);case"Image Service":return d(r);case"Stream Service":return S();case"Vector Tile Service":return I();case"KML":return N();case"WFS":return h();case"WMTS":return w();case"WMS":return g();case"Feed":return v();default:return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type}))}}function y(e){return(0,_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_1__["layerLookupMap"][e.className])().then((r=>({constructor:r,properties:e.properties})))}function m(e){return M(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function p(e){return T(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}function f(e){return T(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return{className:r[t]}}return Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__["requestArcGISServiceJSON"])(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}async function L(e){await e.load();if(Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasTypeKeyword"])(e,"Map Notes"))return{className:"MapNotesLayer"};if(Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasTypeKeyword"])(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===Object(_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__["getNumLayersAndTables"])(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),s=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};return"map"===(null==(a=(await Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__["requestArcGISServiceJSON"])(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function S(){return{className:"StreamLayer"}}function I(){return{className:"VectorTileLayer"}}function N(){return{className:"KMLLayer"}}function h(){return{className:"WFSLayer"}}function g(){return{className:"WMSLayer"}}function w(){return{className:"WMTSLayer"}}function v(){return{className:"StreamLayer"}}function M(e){return Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__["requestArcGISServiceJSON"])(e.url).then((e=>e.tileInfo))}function T(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>{if("Feature Service"===e.type)return j(r=await Object(_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__["preprocessFSItemData"])(r,e.url));return Object(_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__["getNumLayersAndTables"])(r)>0?j(r):Object(_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_5__["requestArcGISServiceJSON"])(e.url).then(j)}))}function j(e){return 1===Object(_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__["getNumLayersAndTables"])(e)&&{id:Object(_layersLoader_js__WEBPACK_IMPORTED_MODULE_3__["getFirstLayerOrTableId"])(e)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/support/requestPresets.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/support/requestPresets.js ***!
  \*****************************************************************************************************/
/*! exports provided: requestArcGISServiceJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestArcGISServiceJSON", function() { return n; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "../../node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(n){const{data:o}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n,{responseType:"json",query:{f:"json"}});return o}


/***/ })

};;
//# sourceMappingURL=25.render-page.js.map