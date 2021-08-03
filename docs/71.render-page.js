exports.ids = [71];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/layers/VectorTileLayer.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/VectorTileLayer.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/global.js */ "../../node_modules/@arcgis/core/core/global.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "../../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/Extent.js */ "../../node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "../../node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ "../../node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "../../node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "../../node_modules/@arcgis/core/layers/mixins/ArcGISService.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "../../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/imageUtils.js */ "../../node_modules/@arcgis/core/layers/support/imageUtils.js");
/* harmony import */ var _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/SpriteSource.js */ "../../node_modules/@arcgis/core/layers/support/SpriteSource.js");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/TileInfo.js */ "../../node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/TilemapCache.js */ "../../node_modules/@arcgis/core/layers/support/TilemapCache.js");
/* harmony import */ var _support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/vectorTileLayerLoader.js */ "../../node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js");
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../portal/support/jsonContext.js */ "../../node_modules/@arcgis/core/portal/support/jsonContext.js");
/* harmony import */ var _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/SchemaHelper.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js");
/* harmony import */ var _views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/tileInfoUtils.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js");
/* harmony import */ var _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/style/StyleRepository.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js");
/* harmony import */ var _views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../views/webgl/capabilities.js */ "../../node_modules/@arcgis/core/views/webgl/capabilities.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let E=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_20__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_23__["ScaleRangeLayer"])(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_18__["ArcGISCachedService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_17__["default"])))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(_core_global_js__WEBPACK_IMPORTED_MODULE_3__["default"].devicePixelRatio||1,e)}load(e){const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAbortError"]).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r,{...e,query:{f:"json"}})).data&&this.read({url:r},Object(_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_29__["createForItem"])(this.portalItem))})).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["throwIfAbortError"]).then((()=>this._loadStyle(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isProtocolRelative"])(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const o in this.sourceNameToSource)t.push(this.sourceNameToSource[o]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"];if(t.length>1)for(let o=0;o<t.length;o++)Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_31__["areSchemasOverlapping"])(r,t[o].tileInfo)&&(r=Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_31__["unionTileInfos"])(r,t[o].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_30__["default"].create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_30__["default"].create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=Object(_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_33__["default"])(),o=new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_25__["default"](this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await o.load(t),this._spriteSourceMap.set(e,o)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAborted"])(this._abortController))return this._loadingPromise;const o=this._abortController;o&&o.abort();const i=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["createAbortController"])();return this._loadingPromise=new Promise(((e,o)=>{const s={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,s).then(e,o),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["onAbort"])(t,(()=>{i.abort()}))})),this._abortController=i,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||o})}getStyleLayer(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let o=this.tileServers[t%this.tileServers.length];return o=o.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),o}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Object(_support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_28__["loadMetadata"])(e,t);if("webp"===r.spriteFormat){await Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_24__["checkWebPSupport"])("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySourceName",r.primarySourceName),this._set("styleRepository",new _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_32__["default"](r.style,r)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const i=t[1]||"";for(const s of r)if(s.toLowerCase().indexOf(o)>-1)return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalize"])(`//static.arcgis.com/attribution/Vector${i}/${s}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"attributionDataUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:["show","hide"]})],E.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],E.prototype,"capabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"currentStyleInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1},readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]})],E.prototype,"fullExtent",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],E.prototype,"style",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],E.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:["VectorTileLayer"]})],E.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"serviceUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__["default"],readOnly:!0})],E.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"styleRepository",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"sourceNameToSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"primarySourceName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],E.prototype,"styleUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_14__["writer"])(["portal-item","web-document"],"styleUrl")],E.prototype,"writeStyleUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1},readOnly:!0})],E.prototype,"tileIndexType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1},readOnly:!0})],E.prototype,"tileIndexUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"]})],E.prototype,"tileInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1},readOnly:!0,type:_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_27__["TilemapCache"]})],E.prototype,"tilemapCache",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1},readOnly:!0})],E.prototype,"tileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{read:!1},readOnly:!0,value:"vector-tile"})],E.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],E.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__["reader"])("version",["version","currentVersion"])],E.prototype,"readVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"compatibleTileInfo256",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],E.prototype,"compatibleTileInfo512",null),E=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__["subclass"])("esri.layers.VectorTileLayer")],E);var A=E;/* harmony default export */ __webpack_exports__["default"] = (A);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/support/SpriteSource.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/SpriteSource.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.SpriteSource"),h=1.15;class o{constructor(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(i){this._isRetina=this.devicePixelRatio>h;const o=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(this.baseURL),l=o.query?"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["objectToQuery"])(o.query):"",n=this._isRetina?"@2x":"",d=`${o.path}${n}.${this._spriteImageFormat}${l}`,g=`${o.path}${n}.json${l}`;return Promise.all([Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(g,i),Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d,{responseType:"image",...i})]).then((([t,i])=>{const s=Object.keys(t.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=t.data;const a=i.data,h=Math.max(this.maxTextureSize,4096);if(a.width>h||a.height>h){const t=`Sprite resource for style ${o.path} is bigger than the maximum allowed of ${h} pixels}`;throw r.error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource",t)}this.width=a.width,this.height=a.height;const l=document.createElement("canvas"),n=l.getContext("2d");l.width=a.width,l.height=a.height,n.drawImage(a,0,0,a.width,a.height);const d=n.getImageData(0,0,a.width,a.height),g=new Uint8Array(d.data);let m;for(let e=0;e<g.length;e+=4)m=g[e+3]/255,g[e]=g[e]*m,g[e+1]=g[e+1]*m,g[e+2]=g[e+2]*m;this.image=g}))}}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/support/imageUtils.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/imageUtils.js ***!
  \********************************************************************************************************/
/*! exports provided: checkWebPSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWebPSupport", function() { return A; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function A(A){const o={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((l=>{const Q=new Image;Q.onload=()=>{Q.onload=Q.onerror=null,l(Q.width>0&&Q.height>0)},Q.onerror=()=>{Q.onload=Q.onerror=null,l(!1)},Q.src="data:image/webp;base64,"+o[A]}))}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js ***!
  \*******************************************************************************************************************/
/*! exports provided: loadMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMetadata", function() { return y; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "../../node_modules/@arcgis/core/config.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/2d/engine/vectorTiles/style/VectorTileSource.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m=_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults&&_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.io.corsEnabledServers;async function y(e,r){const s={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[o,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],n=o?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(o):null;await h(s,"esri",e,l,r);const i={layerDefinition:s.validatedSource,url:o,parsedUrl:n,serviceUrl:s.sourceUrl,style:s.style,styleUrl:s.styleUrl,spriteUrl:s.style.sprite&&S(s.styleBase,s.style.sprite),spriteFormat:s.spriteFormat,glyphsUrl:s.style.glyphs&&S(s.styleBase,s.style.glyphs),sourceNameToSource:s.sourceNameToSource,primarySourceName:s.primarySourceName};return d(i.spriteUrl),d(i.glyphsUrl),i}function d(e){if(!e)return;const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["getOrigin"])(e);m&&-1===m.indexOf(r)&&m.push(r)}function S(...e){let r;for(let s=0;s<e.length;++s)if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["isProtocolRelative"])(e[s])){if(r){const t=r.split("://")[0];r=t+":"+e[s].trim()}}else r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["isAbsolute"])(e[s])?e[s]:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(r,e[s]);return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeTrailingSlash"])(r)}async function h(e,o,l,n,i){let u,a,f;if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(i),"string"==typeof l){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["normalize"])(l);d(e);const s=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(e);f=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s.path,{query:{f:"json"},responseType:"json",...i}),u=e,a=e}else f={data:l},u=l.jsonUrl||null,a=n;const p=f.data;return f.ssl&&(u&&(u=u.replace(/^http:/i,"https:")),a&&(a=a.replace(/^http:/i,"https:"))),U(p)?(e.styleUrl=u||null,w(e,p,a,i)):x(p)?e.sourceUrl?g(e,p,a,!1,o,i):(e.sourceUrl=u||null,g(e,p,a,!0,o,i)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function U(e){return!!e.sources}function x(e){return!U(e)}async function w(e,r,s,t){const o=s?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeFile"])(s):_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["appBaseUrl"];e.styleBase=o,e.style=r,e.styleUrl&&d(e.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(r.sources&&r.sources.esri){const s=r.sources.esri;s.url?await h(e,"esri",S(o,s.url),void 0,t):l.push(h(e,"esri",s,o,t))}for(const n of Object.keys(r.sources))"esri"!==n&&"vector"===r.sources[n].type&&(r.sources[n].url?l.push(h(e,n,S(o,r.sources[n].url),void 0,t)):r.sources[n].tiles&&l.push(h(e,n,r.sources[n],o,t)));await Promise.all(l)}async function g(e,r,s,t,l,n){const i=s?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeTrailingSlash"])(s)+"/":_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["appBaseUrl"],u=j(r,i),c=new _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__["default"](l,i,u);if(!t&&e.primarySourceName in e.sourceNameToSource){const r=e.sourceNameToSource[e.primarySourceName];if(!r.isCompatibleWith(c))return Promise.resolve();null!=c.fullExtent&&(null!=r.fullExtent?r.fullExtent.union(c.fullExtent):r.fullExtent=c.fullExtent.clone()),r.tileInfo.lods.length<c.tileInfo.lods.length&&(r.tileInfo=c.tileInfo)}if(t?(e.sourceBase=i,e.source=r,e.validatedSource=u,e.primarySourceName=l,e.sourceUrl&&d(e.sourceUrl)):d(i),e.sourceNameToSource[l]=c,!e.style)return null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?h(e,"",S(i,r.defaultStyles,"root.json"),void 0,n):h(e,"",r.defaultStyles,S(i,"root.json"),n)}function j(e,r){if(e.hasOwnProperty("tileInfo"))return e;const s={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=512;let o=78271.51696400007,l=295828763.7957775;const n=[],i=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,u=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let c=0;c<=u;c++)c>=i&&n.push({level:c,scale:l,resolution:o}),o/=2,l/=2;for(const c of e.tiles)d(S(r,c));return{capabilities:"TilesOnly",initialExtent:s,fullExtent:s,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:t,cols:t,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:n,spatialReference:{wkid:102100}}}}


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

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/LOD.js */ "../../node_modules/@arcgis/core/layers/support/LOD.js");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "../../node_modules/@arcgis/core/layers/support/TileInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let t=0,s=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(s=i)),[t,s]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]&&256===t.size[1])return t;const s=256,l=t.spatialReference.isGeographic,r=[],o=t.lods.length;for(let i=0;i<o;i++){const s=t.lods[i],o=l?s.resolution:2*s.resolution;r.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({level:s.level,scale:s.scale,resolution:o}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({size:[s,s],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:r})}static create512x512CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]||256===t.size[1])return null;const s=512,l=[],r=t.lods.length;for(let i=0;i<r;i++){const s=t.lods[i],r=.5*s.resolution;l.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({level:s.level,scale:s.scale,resolution:r}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({size:[s,s],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:l})}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileIndex.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileIndex.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TilemapCache.js */ "../../node_modules/@arcgis/core/layers/support/TilemapCache.js");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "../../node_modules/@arcgis/core/views/2d/tiling/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{constructor(e){if(e instanceof _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__["TilemapCache"])this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(t,r){if(this._tilemapCache){const{level:i,row:o,col:a}=t,s=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t);return this._tilemapCache.fetchAvailabilityUpsample(i,o,a,s,r).then((()=>(s.world=t.world,s))).catch((t=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(t))throw t;return null}))}return this._getIndexedDataKey(t)}forEach(e,t,l,r,i){this._callback=i,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,r)}_forEach(e,t,l,r){0!==e&&(this._callback(t,l,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*r),this._forEach(e[1],t+1,2*l,2*r+1),this._forEach(e[2],t+1,2*l+1,2*r),this._forEach(e[3],t+1,2*l+1,2*r+1)))}_getIndexedDataKey(e){const t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Promise.resolve(null);let r=e;for(;0!==r.level;)r=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](r.level-1,r.row>>1,r.col>>1,r.world),t.push(r);let i,o,a=this._tilemap,s=t.pop();if(1===a)return Promise.resolve(s);for(;t.length;)if(i=t.pop(),o=(1&i.col)+((1&i.row)<<1),a){if(0===a[o]){s=null;break}if(1===a[o]){s=i;break}s=i,a=a[o]}return Promise.resolve(s)}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../geometry/Extent.js */ "../../node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../layers/support/serviceTileInfoProperty.js */ "../../node_modules/@arcgis/core/layers/support/serviceTileInfoProperty.js");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/support/TilemapCache.js */ "../../node_modules/@arcgis/core/layers/support/TilemapCache.js");
/* harmony import */ var _TileIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TileIndex.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileIndex.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class p{constructor(p,h,u){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=p,this.sourceUrl=h,h&&(this.parsedUrl=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(this.sourceUrl));const c=this.parsedUrl.path,m=this.parsedUrl.query?"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["objectToQuery"])(this.parsedUrl.query):"",f=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u),d=f.tiles;h&&d.forEach(((e,t)=>{Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbsolute"])(e)||(d[t]=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(c,e)+m)})),this.tileServers=d,u.tileMap&&(this.tileMapURL=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(h,u.tileMap));const x=u.capabilities&&u.capabilities.split(",").map((e=>e.toLowerCase().trim())),g=!!u.exportTilesAllowed,y=!!x&&-1!==x.indexOf("tilemap"),M=g&&u.hasOwnProperty("maxExportTilesCount")?u.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:g,supportsTileMap:y},exportTiles:g?{maxExportTilesCount:+M}:null},this.tileInfo=Object(_layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_3__["readServiceTileInfo"])(f.tileInfo,f,null,{ignoreMinMaxLOD:!0}),y&&(this.type="vector-tile",this.tilemapCache=new _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_4__["TilemapCache"]({layer:this}),this.tilemapCache&&(this.tileIndex=new _TileIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.tilemapCache))),this.fullExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(u.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,i){let l=this.tileServers[t%this.tileServers.length];return l=l.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),l}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const l=t.lods,r=i.lods,s=Math.min(l.length,r.length);for(let o=0;o<s;o++){const e=l[o],t=r[o];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return!1}return!0}}/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
  \************************************************************************************************************************/
/*! exports provided: areSchemasOverlapping, unionTileInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areSchemasOverlapping", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionTileInfos", function() { return o; });
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "../../node_modules/@arcgis/core/layers/support/TileInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=1e-6;function s(e,s){if(e===s)return!0;if(!e&&null!=s)return!1;if(null!=e&&!s)return!1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return!1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=l||Math.abs(o.y-r.y)>=l)return!1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-l;i/=2)if(Math.abs(i-t.lods[0].scale)<l)return!0;return!1}function o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \****************************************************************************************************************/
/*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DISPLAY_RECORD_INT_PER_ELEMENT, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, MIN_MAX_ZOOM_PRECISION_FACTOR, NAN_MAGIC_NUMBER, PATCH_PIXEL_BUFFER_ALLOC_SIZE, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_HALF_WIDTH_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_MINIMUM_SIZE", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_POOL_SIZE", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_RECORD_INT_PER_ELEMENT", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_EARLY_LABEL_DISCARD", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MAX_ZOOM_PRECISION_FACTOR", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH_PIXEL_BUFFER_ALLOC_SIZE", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THIN_LINE_HALF_WIDTH_THRESHOLD", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=!1,S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=7,$=500,_=4,tt=128,et=10;


/***/ })

};;
//# sourceMappingURL=71.render-page.js.map