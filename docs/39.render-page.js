exports.ids = [39];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/core/CircularArray.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/core/CircularArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s{constructor(t=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=t:this._buffer[this._start+this.size++]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const i of this._buffer)if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)&&s(i))return i;return null}clear(s){let i=this.dequeue();for(;Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i);)s&&s(i),i=this.dequeue()}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "../../node_modules/@arcgis/core/support/requestImageUtils.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \********************************************************************************************************/
/*! exports provided: requestImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestImage", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "../../node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "../../node_modules/@arcgis/core/symbols/cim/Rasterizer.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/symbols/cim/Rasterizer.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIMSymbolHelper.js */ "../../node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ "../../node_modules/@arcgis/core/symbols/cim/Rect.js");
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDFHelper.js */ "../../node_modules/@arcgis/core/symbols/cim/SDFHelper.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/@arcgis/core/symbols/cim/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=512;class o{dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(i,s,o){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===i.type||"esriSFS"===i.type){const[r,t,a]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["SymbolHelper"].rasterizeSimpleFill(this._rasterizationCanvas,i.style,s);return{size:[t,a],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===i.type||"esriSLS"===i.type){const[r,t,a]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["SymbolHelper"].rasterizeSimpleLine(i.style,i.cap);return{size:[t,a],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let m,l,f;if("simple-marker"===i.type||"esriSMS"===i.type||"line-marker"===i.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].fromSimpleMarker(i),f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__["getSDFInfo"])(m)):"CIMHatchFill"===i.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].fromCIMHatchFill(i),l=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):i.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===i.markerPlacement.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].fromCIMInsidePolygon(i),l=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):(m=i,f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__["getSDFInfo"])(m)),f&&!o){const[e,r,t]=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__["buildSDF"])(f);return e?{size:[r,t],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,h,p,y,u]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["CIMSymbolHelper"].rasterize(this._rasterizationCanvas,m,l,!o);return c?{size:[h,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:u}:null}rasterizeImageResource(e,r,t,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=r;const n=this._rasterizationCanvas.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):(t.setAttribute("width",`${e}px`),t.setAttribute("height",`${r}px`),n.drawImage(t,0,0,e,r));const o=n.getImageData(0,0,e,r),m=new Uint8Array(o.data);if(a)for(const i of a)if(i&&i.oldColor&&4===i.oldColor.length&&i.newColor&&4===i.newColor.length){const[e,r,t,a]=i.oldColor,[n,s,o,l]=i.newColor;if(e===n&&r===s&&t===o&&a===l)continue;for(let i=0;i<m.length;i+=4)e===m[i]&&r===m[i+1]&&t===m[i+2]&&a===m[i+3]&&(m[i]=n,m[i+1]=s,m[i+2]=o,m[i+3]=l)}let l;for(let i=0;i<m.length;i+=4)l=m[i+3]/255,m[i]=m[i]*l,m[i+1]=m[i+1]*l,m[i+2]=m[i+2]*l;let f=m,c=e,h=r;const p=s;if(c>=p||h>=p){const t=c/h;t>1?(c=p,h=Math.round(p/t)):(h=p,c=Math.round(p*t)),f=new Uint8Array(4*c*h);const a=new Uint8ClampedArray(f.buffer);Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["resampleHermite"])(m,e,r,a,c,h,!1)}return{size:[c,h],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/LabelManager.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/LabelManager.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "../../node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "../../node_modules/@arcgis/core/core/HandleOwner.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_throttle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/throttle.js */ "../../node_modules/@arcgis/core/core/throttle.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine/webgl/collisions/CollisionEngine.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=32,d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.layers.labels.LabelManager");let u=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this._applyVisibilityPassThrottled=Object(_core_throttle_js__WEBPACK_IMPORTED_MODULE_5__["throttle"])(this._applyVisibilityPass,n,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_10__["CollisionEngine"]}destroy(){this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null}get updating(){return this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}_applyVisibilityPass(e){try{const t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(this.view.allLayerViews.items,e,t)}catch(t){d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-labeling","Encountered an error during label decluttering",t))}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],u.prototype,"updateParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],u.prototype,"view",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.2d.layers.labels.LabelManager")],u);var c=u;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/Stage.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/Stage.js ***!
  \****************************************************************************************************/
/*! exports provided: EXTRA_RENDER_TIME, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRA_RENDER_TIME", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return T; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/events.js */ "../../node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/scheduling.js */ "../../node_modules/@arcgis/core/core/scheduling.js");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "../../node_modules/@arcgis/core/core/watchUtils.js");
/* harmony import */ var _chunks_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/common.js */ "../../node_modules/@arcgis/core/chunks/common.js");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/mat2d.js */ "../../node_modules/@arcgis/core/chunks/mat2d.js");
/* harmony import */ var _chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/mat2df64.js */ "../../node_modules/@arcgis/core/chunks/mat2df64.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "../../node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ "../../node_modules/@arcgis/core/chunks/vec2f64.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../webgl/context-util.js */ "../../node_modules/@arcgis/core/views/webgl/context-util.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Container.js */ "../../node_modules/@arcgis/core/views/2d/engine/Container.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./webgl/enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./webgl/Painter.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js");
/* harmony import */ var _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./webgl/Profiler.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js");
/* harmony import */ var _webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./webgl/WebGLDriverTest.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/WebGLDriverTest.js");
/* harmony import */ var _webgl_cpuMapped_BufferDataPool_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./webgl/cpuMapped/BufferDataPool.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferDataPool.js");
/* harmony import */ var _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./webgl/shaders/StencilPrograms.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js");
/* harmony import */ var _support_Timeline_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../support/Timeline.js */ "../../node_modules/@arcgis/core/views/2d/support/Timeline.js");
/* harmony import */ var _support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../support/screenshotUtils.js */ "../../node_modules/@arcgis/core/views/support/screenshotUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const S=2e3;class T extends _Container_js__WEBPACK_IMPORTED_MODULE_19__["Container"]{constructor(r,n){super(),this._trash=new Set,this._clipData=new Float32Array(8),this._upperLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_9__["a"])(),this._upperRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_9__["a"])(),this._lowerLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_9__["a"])(),this._lowerRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_9__["a"])(),this._mat2=Object(_chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),this._clipRendererInitialized=!1,this._supersampleScreenshots=!0,this._pools={bufferData:new _webgl_cpuMapped_BufferDataPool_js__WEBPACK_IMPORTED_MODULE_24__["BufferDataPool"]},this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:a=document.createElement("canvas"),alpha:o=!0,stencil:h=!0,renderContext:d="webgl",supersampleScreenshots:c=!0,contextOptions:u={}}=n;this._canvas=a;const _=Object(_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_18__["createContextOrErrorHTML"])(a,{alpha:o,antialias:!1,depth:!0,stencil:h},d);this.context=new _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_13__["default"](_,u),this.painter=new _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_21__["default"](this.context,this),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),r.appendChild(this._debugOutput)),this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:n.timeline||new _support_Timeline_js__WEBPACK_IMPORTED_MODULE_26__["Timeline"],renderingOptions:n.renderingOptions,requireFBO:!1,driverTestResult:Object(_webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_23__["testWebGLDriver"])(this.context),profiler:new _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_22__["Profiler"](this.context,this._debugOutput),dataUploadCounter:0},this._taskHandle=Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__["addFrameTask"])({render:e=>this.renderFrame(e)}),this._taskHandle.pause(),this._supersampleScreenshots=c,this._lostWebGLContextHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["on"])(a,"webglcontextlost",(()=>{this.emit("webgl-error",{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-context-lost")})})),a.setAttribute("style","width: 100%; height:100%; display:block;"),r.appendChild(a)}destroy(){this.removeAllChildren(),this._emptyTrash(),this._taskHandle.remove(),this._taskHandle=null,this._boundFBO=null,this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null),this._clipVAO&&(this._clipVAO.dispose(),this._clipVAO=null,this._clipVBO=null),this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=null),this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null),this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas),this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput),this.highlightOptions=null,this._pools.bufferData.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null),this._highlightOptions=e,this._highlightOptions&&(this._highlightOptionsHandle=Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(this._highlightOptions,"version",(()=>{this.painter.setHighlightOptions(e),this.requestRender()})))}get pools(){return this._pools}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._lastRenderRequestTime=performance.now(),this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){e.time-this._lastRenderRequestTime>=S&&this._taskHandle.pause(),this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const s=this.context;t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,this._beforeRenderChildren(t),t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].MAP,this.painter.beforeRenderLayers(s,this.background);for(const i of e)i.processRender(t);this.painter.renderLayers(s),t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].HIGHLIGHT,this.painter.beforeRenderLayers(s);for(const i of e)i.processRender(t);this.painter.renderLayers(s);if(this._isLabelDrawPhaseRequired(e)){t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].LABEL,this.painter.beforeRenderLayers(s);for(const i of e)i.processRender(t);this.painter.renderLayers(s)}if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("esri-tiles-debug")){t.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].DEBUG,this.painter.beforeRenderLayers(s);for(const i of e)i.processRender(t);this.painter.renderLayers(s)}t.profiler.recordEnd("drawLayers"),this._afterRenderChildren()}_beforeRenderChildren(e){const{context:t}=this,{state:i,pixelRatio:s}=e;t.enforceState(),t.setClearDepth(1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT);const{size:r,rotation:l}=i,p=Math.round(r[0]*s),u=Math.round(r[1]*s);this._boundFBO=t.getBoundFramebufferObject();if(!(i.spatialReference&&(i.spatialReference._isWrappable?i.spatialReference._isWrappable():i.spatialReference.isWrappable)))return void(this._clipFrame=!1);const m=Object(_chunks_common_js__WEBPACK_IMPORTED_MODULE_5__["t"])(l),g=Math.abs(Math.cos(m)),f=Math.abs(Math.sin(m)),b=Math.round(p*g+u*f),w=Math.round(i.worldScreenWidth);if(b<=w)return void(this._clipFrame=!1);this._clipFBO&&this._clipFBO.width===p&&this._clipFBO.height===u||(this._clipFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_11__["default"](t,{colorTarget:0,depthStencilTarget:3,width:p,height:u}));const R=(this.state.padding.left-this.state.padding.right)/2,O=(this.state.padding.bottom-this.state.padding.top)/2,C=.5*p,x=.5*u,y=1/p,F=1/u,v=w*s*.5,B=.5*(p*f+u*g),P=this._upperLeft,j=this._upperRight,E=this._lowerLeft,S=this._lowerRight;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["s"])(P,-v,-B),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["s"])(j,v,-B),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["s"])(E,-v,B),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["s"])(S,v,B),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_6__["i"])(this._mat2),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_6__["t"])(this._mat2,this._mat2,[C+R,x+O]),0!==l&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_6__["r"])(this._mat2,this._mat2,m),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["t"])(P,P,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["t"])(j,j,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["t"])(E,E,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_8__["t"])(S,S,this._mat2);const T=this._clipData;T.set([2*E[0]*y-1,2*(u-E[1])*F-1,2*S[0]*y-1,2*(u-S[1])*F-1,2*P[0]*y-1,2*(u-P[1])*F-1,2*j[0]*y-1,2*(u-j[1])*F-1]),this._clipRendererInitialized||this._initializeClipRenderer(t),this._clipVBO.setData(T),this._boundFBO=t.getBoundFramebufferObject(),t.bindFramebuffer(this._clipFBO),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.setClearStencil(0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT|t.gl.STENCIL_BUFFER_BIT),t.setDepthWriteEnabled(!1),this._clipFrame=!0}_afterRenderChildren(){const e=this.context;if(e.logIno(),this._clipFrame&&this._clipRendererInitialized){if(e.bindFramebuffer(this._boundFBO),this._boundFBO=null,e.bindVAO(this._clipVAO),e.useProgram(this._clipStencilProgram),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunction(519,1,255),e.drawElements(4,6,5123,0),e.bindVAO(),e.setColorMask(!0,!0,!0,!0),null!=this.background){const{r:t,g:i,b:s,a:r}=this.background.color;e.setClearColor(r*t/255,r*i/255,r*s/255,r)}else e.setClearColor(0,0,0,0);e.clear(e.gl.COLOR_BUFFER_BIT),e.setBlendingEnabled(!0),e.setStencilFunction(514,1,255),this.painter.blitTexture(e,this._clipFBO.colorTexture,9728,1),e.setStencilTestEnabled(!1)}}doRender(e){const t=this.context,{state:i,pixelRatio:s}=e;this._resizeCanvas(e),this.context.enforceState(),t.setViewport(0,0,s*i.size[0],s*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e,t){const i=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__["screenshotSuperSampleSettings"])(e,this._supersampleScreenshots,this._state.padding),{framebufferWidth:s,framebufferHeight:r}=i,n=this.context,a=e.layers;let o=this.children;const h={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:this._renderParameters.state.clone(),pixelRatio:i.pixelRatio,time:Date.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1};if(null!=e.rotation){const t=h.state.viewpoint;t.rotation=e.rotation,h.state.viewpoint=t}a.length>0&&(o=[],a.forEach((e=>{const i=t.find((t=>t.layer.id===e.id));i&&"container"in i&&i.container&&o.push(i.container)})));const l=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_11__["default"](n,{colorTarget:0,depthStencilTarget:3,width:s,height:r}),d=n.getBoundFramebufferObject(),c=n.getViewport();n.bindFramebuffer(l),n.setViewport(0,0,s,r),this._renderChildren(o,h);const p=this._readbackScreenshot(i);n.bindFramebuffer(d),n.setViewport(c.x,c.y,c.width,c.height),this.requestRender();const u=this._ensureScreenshotEncodeCanvas();return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__["encodeResult"])(p,e,u,{flipY:!0,premultipliedAlpha:!0})}_ensureScreenshotEncodeCanvas(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas}_readbackScreenshot(e){const{framebufferWidth:t,framebufferHeight:i,region:s,resample:r}=e,n=this.context.gl;if(r){const e=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__["createEmptyImageData"])(t,i,this._ensureScreenshotEncodeCanvas());n.readPixels(0,0,t,i,6408,5121,new Uint8Array(e.data.buffer));const a=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__["createEmptyImageData"])(s.width,s.height,this._ensureScreenshotEncodeCanvas());return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__["resampleHermite"])(e,a,!0,r.region.x,i-(r.region.y+r.region.height),r.region.width,r.region.height)}{const e=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_27__["createEmptyImageData"])(s.width,s.height,this._ensureScreenshotEncodeCanvas());return n.readPixels(s.x,i-(s.y+s.height),s.width,s.height,6408,5121,new Uint8Array(e.data.buffer)),e}}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:s},pixelRatio:r}=e,n=s[0],a=s[1],o=Math.round(n*r),h=Math.round(a*r);t.width===o&&t.height===h||(t.width=o,t.height=h),i.width=n+"px",i.height=a+"px"}_initializeClipRenderer(e){if(this._clipRendererInitialized)return!0;const t=_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__["stencil"].attributes,i=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_15__["createProgram"])(e,_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__["stencil"]);if(!i)return!1;const s=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_10__["default"].createVertex(e,35040,32),r=new Uint16Array([0,1,2,2,1,3]),n=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_10__["default"].createIndex(e,35044,r),a=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](e,t,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:s},n);return this._clipStencilProgram=i,this._clipVBO=s,this._clipVAO=a,this._clipRendererInitialized=!0,!0}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof _Container_js__WEBPACK_IMPORTED_MODULE_19__["Container"])){t=t||!1;break}if(i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js ***!
  \***************************************************************************************************************************/
/*! exports provided: background, circle, fill, icon, line, outline, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outline", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return b; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id,PATTERN:r.pattern}),a={shaders:e=>({vertexShader:t(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("background/background.vert"),fragmentShader:t(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("background/background.frag")})},i=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id}),d={shaders:e=>({vertexShader:i(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("circle/circle.vert"),fragmentShader:i(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("circle/circle.frag")})},s=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id,PATTERN:r.pattern}),n={shaders:e=>({vertexShader:s(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("fill/fill.vert"),fragmentShader:s(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("fill/fill.frag")})},o=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id}),l={shaders:e=>({vertexShader:o(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("outline/outline.vert"),fragmentShader:o(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("outline/outline.frag")})},g=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id,SDF:r.sdf}),f={shaders:e=>({vertexShader:g(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("icon/icon.vert"),fragmentShader:g(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("icon/icon.frag")})},c=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id,PATTERN:r.pattern,SDF:r.sdf}),h={shaders:e=>({vertexShader:c(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("line/line.vert"),fragmentShader:c(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("line/line.frag")})},m=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["glslifyDefineMap"])({ID:r.id}),b={shaders:e=>({vertexShader:m(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("text/text.vert"),fragmentShader:m(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("text/text.frag")})};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterialManager.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterialManager.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/Program.js */ "../../node_modules/@arcgis/core/views/webgl/Program.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _Programs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Programs.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class c{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach((e=>e.dispose())),this._programByKey.clear()}getMaterialProgram(r,t,a){const s=t.key<<3|this._getMaterialOptionsValue(t.type,a);if(this._programByKey.has(s))return this._programByKey.get(s);const n=this._getProgramTemplate(t.type),{shaders:i}=n,{vertexShader:o,fragmentShader:c}=i(a),g=t.getShaderHeader(),p=t.getShaderMain(),u=o.replace("#pragma header",g).replace("#pragma main",p),m=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__["Program"](r,u,c,t.getAttributeLocations());return this._programByKey.set(s,m),m}_getMaterialOptionsValue(e,r){switch(e){case 0:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 1:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 2:return r.id?1:0;case 3:{const e=r;return(e.sdf?1:0)<<2|(e.pattern?1:0)<<1|(e.id?1:0)}case 4:{const e=r;return(e.sdf?1:0)<<1|(e.id?1:0)}case 5:return r.id?1:0;case 6:return r.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case 0:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["background"];case 5:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["circle"];case 1:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["fill"];case 4:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["icon"];case 3:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["line"];case 2:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["outline"];case 6:return _Programs_js__WEBPACK_IMPORTED_MODULE_7__["text"];default:return null}}}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: resolveIncludes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIncludes", function() { return s; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/ShaderCompiler.js */ "../../node_modules/@arcgis/core/views/webgl/ShaderCompiler.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _shaderRepository_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaderRepository.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(e){let t=_shaderRepository_js__WEBPACK_IMPORTED_MODULE_9__["default"];return e.split("/").forEach((e=>{t&&(t=t[e])})),t}const o=new _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_6__["default"](t);function s(e){return o.resolveIncludes(e)}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var e={background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform lowp sampler2D u_texture;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = u_opacity * color;\n#else\ngl_FragColor = u_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\nuniform mediump vec4 u_tlbr;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\n#endif\nvoid main() {\ngl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\nv_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\nv_tlbr             = u_tlbr / u_mosaicSize.xyxy;\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float dist = length(v_offset);\nmediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\nlowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\ngl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","circle.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_stroke_color = stroke_color * stroke_opacity;\nv_stroke_width = stroke_width;\nv_radius = radius;\nv_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\nmediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\nv_offset = offset;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = v_color[3] * color;\n#else\ngl_FragColor = v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","fill.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\n#include <util/util.glsl>\nuniform mediump vec2 u_mosaicSize;\nuniform mediump float u_patternFactor;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\nfloat patternWidth = nextPOT(tlbr.z - tlbr.x);\nfloat patternHeight = nextPOT(tlbr.w - tlbr.y);\nfloat scaleX = 1.0 / (patternWidth * u_patternFactor);\nfloat scaleY = 1.0 / (patternHeight * u_patternFactor);\nmat3 patterMat = mat3(scaleX, 0.0,    0.0,\n0.0,    -scaleY, 0.0,\n0.0,    0.0,    1.0);\nv_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;\nv_tlbr             = tlbr / u_mosaicSize.xyxy;\n#endif\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\nlowp vec4 fillPixelColor = v_color;\nfloat d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\nconst float softEdgeRatio = 0.248062016;\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * softEdgeRatio * size;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nif (v_halo_width > 0.25) {\nlowp vec4 outlinePixelColor = u_outlineColor;\nconst float outlineLimitRatio = (16.0 / 86.0);\nfloat clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\noutlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\ngl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n}\nelse {\ngl_FragColor = v_opacity * fillPixelColor;\n}\n#else\nlowp vec4 texColor = texture2D(u_texture, v_tex);\ngl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nv_color = color;\nv_opacity = opacity;\n#ifdef SDF\nv_halo_width = halo_width;\n#endif\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_opacity *= interpolatedOpacity;\nmediump float a_angle         = a_levelInfo[1];\nmediump float a_minLevel      = a_levelInfo[2];\nmediump float a_maxLevel      = a_levelInfo[3];\nmediump vec2 a_tex            = a_texAngleRange.xy;\nmediump float delta_z = 0.0;\nmediump float rotated = mod(a_angle + u_mapRotation, 256.0);\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_opacity, 0.0);\nvec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\nv_size = abs(offset);\n#ifdef SDF\noffset = (120.0 / 86.0) * offset;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_tex = a_tex.xy / u_mosaicSize;\n}"},line:{"line.frag":"precision lowp float;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#if defined (PATTERN) || defined(SDF)\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nuniform sampler2D u_texture;\nuniform mediump float u_antialiasing;\n#endif\n#ifdef SDF\n#include <util/encoding.glsl>\nconst mediump float sdfPatternHalfWidth = 15.5;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float fragDist = length(v_normal) * v_lineHalfWidth;\nlowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\nmediump float relativeTexX = mod(v_accumulatedDistance / v_patternSize.x, 1.0);\nmediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / v_patternSize.y);\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\ngl_FragColor = alpha * v_color[3] * color;\n#elif defined(SDF)\nmediump float lineHalfWidth = v_lineHalfWidth - 0.5 * u_antialiasing;\nmediump float lineWidthRatio = lineHalfWidth / sdfPatternHalfWidth;\nmediump float relativeTexX = mod((v_accumulatedDistance * 0.5) / (lineWidthRatio * v_patternSize.x), 1.0);\nmediump float relativeTexY =  0.5 + 0.25 * v_normal.y;\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * lineHalfWidth;\ngl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n#else\ngl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","line.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_extrude_offset;\nattribute vec4 a_dir_normal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump float u_zoomFactor;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\nconst mediump float tileCoordRatio = 8.0;\n#if defined (PATTERN) || defined(SDF)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_blur = blur + u_antialiasing;\nv_normal = a_dir_normal.zw * scale;\n#if defined (PATTERN) || defined(SDF)\nv_tlbr          = tlbr / u_mosaicSize.xyxy;\nv_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);\n#endif\nv_lineHalfWidth = (width + u_antialiasing) * 0.5;\nmediump vec2 dir = a_dir_normal.xy * scale;\nmediump vec2 offset_ = a_extrude_offset.zw * scale * offset;\nmediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n#if defined (PATTERN) || defined(SDF)\nv_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = abs(v_normal.y);\nlowp float alpha = smoothstep(1.0, 0.0, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_normal = a_xnormal;\nmediump vec2 dist = u_outline_width * scale * a_offset;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nif (u_halo > 0.5)\n{\nv_color = halo_color * opacity;\nhalo_width *= sdfPixel;\nhalo_blur *= sdfPixel;\n}\nelse\n{\nv_color = color * opacity;\nhalo_width = 0.0;\nhalo_blur = 0.0;\n}\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_color *= interpolatedOpacity;\nmediump float a_angle       = a_levelInfo[1];\nmediump float a_minLevel    = a_levelInfo[2];\nmediump float a_maxLevel    = a_levelInfo[3];\nmediump vec2 a_tex          = a_texAngleRange.xy;\nmediump float a_visMinAngle    = a_texAngleRange.z;\nmediump float a_visMaxAngle    = a_texAngleRange.w;\nmediump float delta_z = 0.0;\nmediump float angle = mod(a_angle + u_mapRotation, 256.0);\nif (a_visMinAngle < a_visMaxAngle)\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n}\nelse\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n}\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_color[3], 0.0);\nv_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_edgeDistance = edgePos - halo_width / size;\nv_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"},util:{"encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}","util.glsl":"float nextPOT(in float x) {\nreturn pow(2.0, ceil(log2(abs(x))));\n}"}};/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js ***!
  \********************************************************************************************************************/
/*! exports provided: BitBlitRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitBlitRenderer", function() { return s; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/BitBlitPrograms.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s{constructor(){this._initialized=!1}dispose(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)}render(r,t,e,i){r&&(this._initialized||this._initialize(r),r.setBlendFunctionSeparate(1,771,1,771),r.bindVAO(this._vertexArrayObject),r.useProgram(this._program),t.setSamplingMode(e),r.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),r.drawArrays(5,0,4),r.bindTexture(null,0),r.bindVAO())}_initialize(s){if(this._initialized)return!0;const o=_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_9__["bitBlit"].attributes,n=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(s,_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_9__["bitBlit"]);if(!n)return!1;const a={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},m=new Int8Array(16);m[0]=-1,m[1]=-1,m[2]=0,m[3]=0,m[4]=1,m[5]=-1,m[6]=1,m[7]=0,m[8]=-1,m[9]=1,m[10]=0,m[11]=1,m[12]=1,m[13]=1,m[14]=1,m[15]=1;const p=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](s,o,a,{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"].createVertex(s,35044,m)});return this._program=n,this._vertexArrayObject=p,this._initialized=!0,!0}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js ***!
  \***********************************************************************************************************************/
/*! exports provided: FeatureDisplayList, FeatureDisplayListInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDisplayList", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDisplayListInfo", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t,e,i,s,n){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=s,this.indexCount=n}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}draw(t,e,i){this.target.draw(t,e,i,this.indexFrom,this.indexCount)}}class e{constructor(t){this._infos=new Array,this._target=t}static from(t,i){const s=new e(t);for(;i.next();)s.add(i);return s}get _last(){return this._infos[this._infos.length-1]}add(e){const{materialKey:i,indexFrom:s,indexCount:n}=e;if(this._infos.length&&e.materialKey===this._last.materialKey&&e.indexFrom===this._last.indexEnd)this._last.extend(n);else{const e=new t(this._target,this.geometryType,i,s,n);this._infos.push(e)}}forEach(t){for(const e of this._infos)t(e)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Rect.js");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RectangleBinPack.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=256,a=t=>Math.floor(t/256);function n(t){const e=new Set;for(const i of t)e.add(a(i));return e}function c(t,i,h){return t.has(i)||t.set(i,h().then((()=>{t.delete(i)})).catch((h=>{t.delete(i),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfNotAbortError"])(h)}))),t.get(i)}const o=t=>({rect:new _Rect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:t,sdf:!0});class l{constructor(t,e,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=e,this._glyphSource=i,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_3__["default"](t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const t=[117,149,181,207,207,181,149,117],e=[];for(let h=0;h<t.length;h++){const i=t[h];for(let t=0;t<11;t++)e.push(i)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)};this._recordGlyph(i)}async getGlyphItems(t,e,i){const h=this._getGlyphCache(t);return await this._fetchRanges(t,e,i),e.map((e=>this._getMosaicItem(h,t,e)))}bind(t,e,i,h){const s=this._getTexture(t,i);s.setSamplingMode(e),this._dirties[i]&&(s.setData(this._glyphData[i]),this._dirties[i]=!1),t.bindTexture(s,h)}_getGlyphCache(t){return this._glyphCache[t]||(this._glyphCache[t]={}),this._glyphCache[t]}_getTexture(t,e){return this._textures[e]||(this._textures[e]=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["default"](t,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[e]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(t,e,i){const h=n(e),s=[];h.forEach((e=>{s.push(this._fetchRange(t,e,i))})),await Promise.all(s)}async _fetchRange(t,e,i){if(e>r)return null;const h=t+e;return c(this._rangePromises,h,(()=>this._glyphSource.getRange(t,e,i)))}_getMosaicItem(t,e,i){if(!t[i]){const h=this._glyphSource.getGlyph(e,i);if(!h||!h.metrics)return o(i);const s=this._recordGlyph(h),r=this._currentPage,a=h.metrics;t[i]={rect:s,page:r,metrics:a,code:i,sdf:!0},this._invalidate()}return t[i]}_recordGlyph(e){const s=e.metrics;let r;if(0===s.width)r=new _Rect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0,0,0,0);else{const i=3,a=s.width+2*i,n=s.height+2*i;r=this._binPack.allocate(a,n),r.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.width-4,this.height-4),r=this._binPack.allocate(a,n));const c=this._glyphData[this._currentPage],o=e.bitmap;let l,g;if(o)for(let t=0;t<n;t++){l=a*t,g=this.width*(r.y+t)+r.x;for(let t=0;t<a;t++)c[g+t]=o[l+t]}Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-glyph-debug")&&this._showDebugPage(c)}return r}_showDebugPage(t){const e=document.createElement("canvas"),i=e.getContext("2d"),h=new ImageData(this.width,this.height),s=h.data;e.width=this.width,e.height=this.height,e.style.border="1px solid black";for(let r=0;r<t.length;++r)s[4*r+0]=t[r],s[4*r+1]=0,s[4*r+2]=0,s[4*r+3]=255;i.putImageData(h,0,0),document.body.appendChild(e)}}/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ "../../node_modules/@arcgis/core/core/pbf.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s{constructor(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip()}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class a{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}class r{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(a,r,n){const i=this._getFontStack(a);if(i.getRange(r))return Promise.resolve();const c=256*r,g=c+255,o=this._baseURL.replace("{fontstack}",a).replace("{range}",c+"-"+g);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o,{responseType:"array-buffer",...n}).then((t=>{i.addRange(r,new s(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(t.data),new DataView(t.data))))}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new a),e}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/ProgramCache.js */ "../../node_modules/@arcgis/core/views/webgl/ProgramCache.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shaders/MaterialPrograms.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=r=>r===_enums_js__WEBPACK_IMPORTED_MODULE_10__["WGLDrawPhase"].HITTEST||r===_enums_js__WEBPACK_IMPORTED_MODULE_10__["WGLDrawPhase"].LABEL_ALPHA,s=r=>(a(r)?1:0)|(r===_enums_js__WEBPACK_IMPORTED_MODULE_10__["WGLDrawPhase"].HIGHLIGHT?2:0),i=({rendererInfo:e,drawPhase:t},o,a,i)=>`${o.getVariationHash()}-${i.join(".")}-${s(t)}-${e.getVariationHash()}-${Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)&&a.join(".")}`,g=(e,o,s,i)=>{const g=i.reduce(((r,t)=>({...r,[t]:e.driverTestResult[t]})),{}),m={...o.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_10__["WGLDrawPhase"].HIGHLIGHT,id:a(e.drawPhase),...g};if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s))for(const r of s)m[r]=!0;return m};class m{constructor(r){this._programByKey=new Map,this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__["default"](r)}dispose(){this._programCache&&this._programCache.dispose()}getProgram(r,e,t=[],a=[]){const s=e.vsPath+"."+e.fsPath+JSON.stringify(t)+a.join(".");if(this._programByKey.has(s))return this._programByKey.get(s);const i=a.reduce(((e,t)=>({...e,[t]:r.driverTestResult[t]})),{}),g={...t.map((r=>"string"==typeof r?{name:r,value:!0}:r)).reduce(((r,e)=>({...r,[e.name]:e.value})),{}),...i},{vsPath:m,fsPath:n,attributes:h}=e,p=this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_11__["createProgramTemplate"])(m,n,h),g);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,p),p}getMaterialProgram(r,e,t,a,s,m=["ignoresSamplerPrecision"]){const n=i(r,e,s,m);if(this._programByKey.has(n))return this._programByKey.get(n);const h=g(r,e,s,m),p=this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_11__["createProgramTemplate"])(t,t,a),h);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(n,p),p}}/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Renderbuffer.js */ "../../node_modules/@arcgis/core/views/webgl/Renderbuffer.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../brushes.js */ "../../node_modules/@arcgis/core/views/2d/engine/brushes.js");
/* harmony import */ var _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vectorTiles/shaders/VTLMaterialManager.js */ "../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterialManager.js");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BitBlitRenderer.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _MaterialManager_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MaterialManager.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js");
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TextureManager.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js");
/* harmony import */ var _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/AnimationEffect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js");
/* harmony import */ var _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/BlendEffect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js");
/* harmony import */ var _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/FeatureEffect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js");
/* harmony import */ var _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/HighlightEffect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js");
/* harmony import */ var _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/HittestEffect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js");
/* harmony import */ var _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effects/post-processing/EffectManager.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js");
/* harmony import */ var _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./painter/RenderPass.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.context=e,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_12__["BitBlitRenderer"],this._brushCache=new Map,this._vtlMaterialManager=new _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_11__["default"],this._blendEffect=new _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_17__["BlendEffect"],this.effects={highlight:new _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_19__["default"],hittest:new _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_20__["HittestEffect"],integrate:new _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_16__["AnimationEffect"],insideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__["FeatureEffect"]("inside"),outsideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__["FeatureEffect"]("outside")},this.materialManager=new _MaterialManager_js__WEBPACK_IMPORTED_MODULE_14__["default"](e),this.textureManager=new _TextureManager_js__WEBPACK_IMPORTED_MODULE_15__["default"](t),this._effectsManager=new _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_21__["EffectManager"](t)}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,r){if(e!==this._lastWidth||r!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=r,this._fbos){for(const t in this._fbos)this._fbos[t].resize(e,r);return this._fbos}const i={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e,height:r},n={colorTarget:0,depthStencilTarget:3},o=new _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.context,{width:e,height:r,internalFormat:34041});this._stencilBuf=o,this._fbos={output:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context,n,i,o),blend:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context,n,i,o),effect0:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.context,n,i,o)}}return this._fbos}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(t,s=null){const{width:r,height:i}=t.getViewport();this._prevFBO=t.getBoundFramebufferObject();const n=this.getFbos(r,i);if(t.bindFramebuffer(n.output),t.setColorMask(!0,!0,!0,!0),t.setDepthWriteEnabled(!0),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)){const{r:e,g:r,b:i,a:n}=s.color;t.setClearColor(n*e/255,n*r/255,n*i/255,n)}else t.setClearColor(0,0,0,0);t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,s){const{context:r,blendMode:i,effects:n,requireFBO:o}=e;if(o||m(i,n,s))r.bindFramebuffer(this._fbos.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const e=this._getOutputFBO();r.bindFramebuffer(e)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(t,s){const{context:r,blendMode:i,effects:n,requireFBO:a}=t;if(a||m(i,n,s)){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)&&n.length>0&&t.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_13__["WGLDrawPhase"].MAP&&this._applyEffects(t,n);const a=this._getOutputFBO();r.bindFramebuffer(a),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(1,771,1,771),r.setColorMask(!0,!0,!0,!0);const h=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)?i:"normal";this._blendEffect.draw(t,this._fbos.blend.colorTexture,9728,h,s)}}renderLayers(e){if(e.bindFramebuffer(this._prevFBO),!this._fbos)return;const t=this._getOutputFBO();e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),this.blitTexture(e,t.colorTexture,9728)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();if(this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._vtlMaterialManager&&(this._vtlMaterialManager.dispose(),this._vtlMaterialManager=null),this._prevFBO=null}getGeometryBrush(e){const t={[_enums_js__WEBPACK_IMPORTED_MODULE_13__["WGLGeometryType"].FILL]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__["brushes"].fill,[_enums_js__WEBPACK_IMPORTED_MODULE_13__["WGLGeometryType"].LINE]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__["brushes"].line,[_enums_js__WEBPACK_IMPORTED_MODULE_13__["WGLGeometryType"].MARKER]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__["brushes"].marker,[_enums_js__WEBPACK_IMPORTED_MODULE_13__["WGLGeometryType"].TEXT]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__["brushes"].text}[e];let s=this._brushCache.get(t);return void 0===s&&(s=new t,this._brushCache.set(t,s)),this._brushCache.get(t)}renderObject(e,t,s,i){const n=_brushes_js__WEBPACK_IMPORTED_MODULE_10__["brushes"][s];if(!n)return null;let o=this._brushCache.get(n);void 0===o&&(o=new n,this._brushCache.set(n,o)),o.prepareState(e,t,i),o.draw(e,t,i)}renderObjects(e,t,s,i){const n=_brushes_js__WEBPACK_IMPORTED_MODULE_10__["brushes"][s];if(!n)return null;let o=this._brushCache.get(n);void 0===o&&(o=new n,this._brushCache.set(n,o)),o.drawMany(e,t,i)}registerRenderPass(e){const t=e.brushes.map((e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e))));return new _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_22__["default"](t,e)}setHighlightOptions(e){this.effects.highlight.setHighlightOptions(e)}blitTexture(e,t,s,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,s,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){return null!=this._renderTarget?this._renderTarget:this._fbos.output}_applyEffects(e,t){const{context:s}=e,r=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:i,effect:n}of r)s.bindFramebuffer(this._fbos.blend),i.draw(e,this._fbos.blend,n)}}function m(t,s,r){return 1!==r||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&"normal"!==t||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&s.length>0}/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js ***!
  \*************************************************************************************************************/
/*! exports provided: Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return o; });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "../../node_modules/@arcgis/core/core/CircularArray.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Evented.js */ "../../node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/capabilities/DisjointTimerQuery.js */ "../../node_modules/@arcgis/core/views/webgl/capabilities/DisjointTimerQuery.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("esri-2d-profiler");class o{constructor(t,r){if(this._events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"],this._entries=new Map,this._timings=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__["default"](10),!i)return;this._ext=Object(_webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__["createDisjointTimerQuery"])(t.gl,{}),this._debugOutput=r;const o=t.gl;if(this.enableCommandLogging)for(const e in o)if("function"==typeof o[e]){const s=o[e],t=-1!==e.indexOf("draw");o[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:t}),this._currentSummary&&(this._currentSummary.commands++,t&&this._currentSummary.drawCommands++),s.apply(o,r))}}get enableCommandLogging(){return!("object"==typeof i&&i.disableCommands)}recordContainerStart(e){i&&(this._currentContainer=e)}recordContainerEnd(){i&&(this._currentContainer=null)}recordPassStart(e){i&&(this._currentPass=e,this._initSummary())}recordPassEnd(){i&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){i&&(this._currentBrush=e)}recordBrushEnd(){i&&(this._currentBrush=null)}recordStart(e){if(i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._ext)){if(this._entries.has(e)){const s=this._entries.get(e),t=this._ext.resultAvailable(s.query),n=this._ext.disjoint();if(t&&!n){const t=this._ext.getResult(s.query)/1e6;let n=0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._timings.enqueue(t))){const e=this._timings.entries,s=e.length;let t=0;for(const r of e)t+=r;n=t/s}const i=t.toFixed(2),o=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${i} ms (${o} last 10 avg)\n${s.commandsLen} Commands (${s.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(s.summaries),console.log("Commands: ",s.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${i} ms (${o} last 10 avg)`),this._debugOutput.innerHTML=`${i} (${o})`}for(const e of s.handles)e.remove();this._entries.delete(e)}const s={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(s.handles.push(this._events.on("command",(e=>{s.commandsLen++,s.commands.push(e),e.isDrawCommand&&s.drawCommands++}))),s.handles.push(this._events.on("summary",(e=>{s.summaries.push(e)})))),this._ext.beginTimeElapsed(s.query),this._entries.set(e,s)}}recordEnd(e){i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Rect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"];let i=null,s=-1;for(let h=0;h<this._free.length;++h){const r=this._free[h];t<=r.width&&e<=r.height&&(null===i||r.y<=i.y&&r.x<=i.x)&&(i=r,s=h)}return null===i?new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]:(this._free.splice(s,1),i.width<i.height?(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,e)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,i.width,i.height-e))):(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,i.height)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,t,i.height-e))),new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y,t,e))}release(h){for(let t=0;t<this._free.length;++t){const e=this._free[t];if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)e.width+=h.width;else if(e.x===h.x&&e.width===h.width&&e.y+e.height===h.y)e.height+=h.height;else if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)e.x=h.x,e.width+=h.width;else{if(h.x!==e.x||h.width!==e.width||h.y+h.height!==e.y)continue;e.y=h.y,e.height+=h.height}this._free.splice(t,1),this.release(h)}this._free.push(h)}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _packingUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packingUtils.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/packingUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=1e20;class r{constructor(t){this.size=t;const s=document.createElement("canvas");s.width=s.height=t,this._context=s.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(r,h,n=31){this._initSVG();const o=this._createSVGString(r);return new Promise(((r,d)=>{const a=new Image;a.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(o),a.onload=()=>{a.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(a,0,0,this.size,this.size);const t=this._context.getImageData(0,0,this.size,this.size),s=new Uint8Array(this.size*this.size*4);for(let e=0;e<this.size*this.size;e++){const s=t.data[4*e+3]/255;this._gridOuter[e]=1===s?0:0===s?i:Math.max(0,.5-s)**2,this._gridInner[e]=1===s?i:0===s?0:Math.max(0,s-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let i=0;i<this.size*this.size;i++){const t=this._gridOuter[i]-this._gridInner[i];Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(.5-t/(2*n),s,4*i)}r(s)};const l=h&&h.signal;l&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["onAbort"])(l,(()=>d(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createAbortError"])())))}))}_initSVG(){if(!this._svg){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}}_createSVGString(t){const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t),this._svg.appendChild(s);const e=s.getBBox(),i=e.width/e.height,r=this.size/2;let h,n,o,d;if(i>1){n=h=r/e.width;const t=r*(1/i);o=this.size/4,d=r-t/2}else{h=n=r/e.height;o=r-r*i/2,d=this.size/4}const a=-e.x*h+o,l=-e.y*n+d;s.setAttribute("style",`transform: matrix(${h}, 0, 0, ${n}, ${a}, ${l})`);const _=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;return this._svg.removeChild(s),_}_edt(t,s,e){const i=this._f,r=this._d,h=this._v,n=this._z;for(let o=0;o<s;o++){for(let r=0;r<e;r++)i[r]=t[r*s+o];this._edt1d(i,r,h,n,e);for(let i=0;i<e;i++)t[i*s+o]=r[i]}for(let o=0;o<e;o++){for(let e=0;e<s;e++)i[e]=t[o*s+e];this._edt1d(i,r,h,n,s);for(let e=0;e<s;e++)t[o*s+e]=Math.sqrt(r[e])}}_edt1d(t,s,e,r,h){e[0]=0,r[0]=-i,r[1]=+i;for(let n=1,o=0;n<h;n++){let s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);for(;s<=r[o];)o--,s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);o++,e[o]=n,r[o]=s,r[o+1]=+i}for(let i=0,n=0;i<h;i++){for(;r[n+1]<i;)n++;s[i]=(i-e[n])*(i-e[n])+t[e[n]]}}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GeometryUtils.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Rect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/Rect.js");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RectangleBinPack.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function h(t){return t&&"static"===t.type}class c{constructor(t,e,i,s=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,this._requestRender=t,s>0&&(this._maxItemSize=s),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_13__["default"](this._pageWidth,this._pageHeight);const a=Math.floor(this._pageWidth),r=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(a*r)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[0]}getHeight(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[1]}getPageTexture(t){return t<this._mosaicPages.length?this._mosaicPages[t].texture:null}has(t){return this._mosaicRects.has(t)}get itemCount(){return this._mosaicRects.size}getSpriteItem(t){return this._mosaicRects.get(t)}addSpriteItem(t,e,i,s,a,o){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);let c,n,g;if(h(i))[c,n,g]=this._allocateImage(e[0],e[1]);else{c=new _Rect_js__WEBPACK_IMPORTED_MODULE_12__["default"](0,0,e[0],e[1]),n=this._mosaicPages.length;const t=void 0;this._mosaicPages.push({mosaicsData:i,size:e,dirty:!0,texture:t})}if(c.width<=0||c.height<=0)return null;const m={rect:c,width:e[0],height:e[1],sdf:a,simplePattern:o,pixelRatio:1,page:n};return this._mosaicRects.set(t,m),h(i)&&this._copy({rect:c,spriteSize:e,spriteData:i.data,page:n,pageSize:g,repeat:s,sdf:a}),m}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const t=this._spriteCopyQueue.pop();t&&this._copy(t)}getSpriteItems(t){const e={};for(const i of t)e[i]=this.getSpriteItem(i);return e}getMosaicItemPosition(t){const e=this.getSpriteItem(t),i=e&&e.rect;if(!i)return null;i.width=e.width,i.height=e.height;const a=e.width,r=e.height,o=_definitions_js__WEBPACK_IMPORTED_MODULE_10__["SPRITE_PADDING"],h=this._mosaicPages[e.page];return{size:[e.width,e.height],tl:[(i.x+o)/h[0],(i.y+o)/h[1]],br:[(i.x+o+a)/h[0],(i.y+o+r)/h[1]],page:e.page}}bind(t,i,s=0,a=0){const r=this._mosaicPages[s],o=r.mosaicsData;let c=r.texture;if(c||(c=n(t,o,r.size),r.texture=c),c.setSamplingMode(i),h(o))t.bindTexture(c,a),r.dirty&&(c.setData(new Uint8Array(o.data.buffer)),c.generateMipmap());else{const i=o.data,s=i.bindFrame(t,c,a);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._requestRender)&&s&&i.frameCount>0&&this._requestRender.requestRender(),i.bindFrame(t,c,a)}r.dirty=!1}static _copyBits(t,e,i,s,a,r,o,h,c,n,g){let m=s*e+i,p=h*r+o;if(g){p-=r;for(let o=-1;o<=n;o++,m=((o+n)%n+s)*e+i,p+=r)for(let e=-1;e<=c;e++)a[p+e]=t[m+(e+c)%c]}else for(let u=0;u<n;u++){for(let e=0;e<c;e++)a[p+e]=t[m+e];m+=e,p+=r}}_copy(e){if(e.page>=this._mosaicPages.length)return;const i=this._mosaicPages[e.page],a=i.mosaicsData;if(!h(i.mosaicsData))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-invalid-resource","unsuitable data type!");const r=e.spriteData,o=a.data;o&&r||console.error("Source or target images are uninitialized!"),c._copyBits(r,e.spriteSize[0],0,0,o,e.pageSize[0],e.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_10__["SPRITE_PADDING"],e.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_10__["SPRITE_PADDING"],e.spriteSize[0],e.spriteSize[1],e.repeat),i.dirty=!0}_allocateImage(t,e){t+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_10__["SPRITE_PADDING"],e+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_10__["SPRITE_PADDING"];const i=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<i){const i=2**Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_11__["log2"])(t)),s=2**Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_11__["log2"])(e)),o=new _Rect_js__WEBPACK_IMPORTED_MODULE_12__["default"](0,0,t,e);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*s)},size:[i,s],dirty:!0,texture:void 0}),[o,this._mosaicPages.length-1,[i,s]]}const c=this._binPack.allocate(t,e);if(c.width<=0){const i=this._mosaicPages[this._currentPage];return!i.dirty&&h(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_13__["default"](this._pageWidth,this._pageHeight),this._allocateImage(t,e)}return[c,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null;for(const t of this._mosaicPages){const e=t.texture;e&&e.dispose();const i=t.mosaicsData;if(!h(i)){i.data.pause()}}this._mosaicPages=null,this._mosaicRects.clear()}}function n(t,e,s){return h(e)?new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__["default"](t,{pixelFormat:6408,dataType:5121,width:s[0],height:s[1]},new Uint8Array(e.data.buffer)):new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__["default"](t,{pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:s[0],height:s[1]},null)}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.js */ "../../node_modules/@arcgis/core/config.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "../../node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "../../node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "../../node_modules/@arcgis/core/chunks/vec2f32.js");
/* harmony import */ var _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../symbols/cim/Rasterizer.js */ "../../node_modules/@arcgis/core/symbols/cim/Rasterizer.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _fontUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fontUtils.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js");
/* harmony import */ var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GlyphMosaic.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js");
/* harmony import */ var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GlyphSource.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js");
/* harmony import */ var _SDFConverter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SDFConverter.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js");
/* harmony import */ var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SpriteMosaic.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js");
/* harmony import */ var _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animatedFormats/apng.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js");
/* harmony import */ var _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./animatedFormats/gif.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js");
/* harmony import */ var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./util/BidiText.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/util/BidiText.js");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/Result.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/util/Result.js");
/* harmony import */ var _util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/symbolUtils.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js");
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../support/QueueProcessor.js */ "../../node_modules/@arcgis/core/views/support/QueueProcessor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const j=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_8__["c"])(),C="arial-unicode-ms-regular",F=126,U=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.engine.webgl.TextureManager"),P=e=>"esriSMS"===e.type&&e.path,B=e=>e.url||e.imageData,G=e=>e.url&&-1!==e.url.indexOf(".gif")||e.contentType&&"image/gif"===e.contentType||e.imageData&&-1!==e.imageData.indexOf("data:image/gif"),L=e=>e.url&&-1!==e.url.indexOf(".png")||e.contentType&&"image/png"===e.contentType||e.imageData&&-1!==e.imageData.indexOf("data:image/png"),O=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function $(e){switch(e.type){case"CIMSolidStroke":case"CIMSolidFill":return!0;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const k=e=>-1!==e.indexOf("data:image/svg+xml");function q(e){switch(e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function D(e){const t=[];for(let i=0;i<e.length;i++)t.push(e.charCodeAt(i));return t}async function A(e,s){const r=e.imageData?`data:${e.contentType};base64,${e.imageData}`:e.url;let a;const o=";base64,";if(-1!==r.indexOf(o)){const e=r.indexOf(o)+o.length,t=r.substring(e),i=atob(t),s=new Uint8Array(i.length);for(let r=0;r<i.length;r++)s[r]=i.charCodeAt(r);a=s.buffer}else try{const{data:e}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r,{responseType:"array-buffer",...s});a=e}catch(c){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(c))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${r}`)}return a}function N(e,t){const i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(t)*window.devicePixelRatio),s=i>=128?2:4;return Math.min(e,i*s)}const Q=(e,t,s)=>U.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,t,s));class E{constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}static fromMosaic(e,t){return new E(e,t.page,t.sdf)}}class H{constructor(s){this._invalidFontsMap=new Map,this._sdfConverter=new _SDFConverter_js__WEBPACK_IMPORTED_MODULE_15__["default"](F),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._rasterizer=new _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_9__["default"],this._ongoingRasterizations=new Map,this._imageRequestQueue=new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_22__["QueueProcessor"]({concurrency:10,process:async(e,s)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAborted"])(s);try{return await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e,{responseType:"image",signal:s})}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${e}`,r);throw r}}}),this._spriteMosaic=new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_16__["default"](s,2048,2048,500),this._glyphSource=new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_14__["default"](`${_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_13__["default"](1024,1024,this._glyphSource)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._rasterizer=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,t,i,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(e))return Q("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"CIMTextSymbol":case"esriTS":{const t=await this._rasterizeText(e,i,s);return t.forEach((e=>this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_11__["MosaicType"].GLYPH,e))),{glyphMosaicItems:t}}case"esriSMS":case"esriPMS":case"esriSFS":case"esriPFS":case"esriSLS":default:{if(O(e))return Q("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const i=await this._rasterizeSpriteSymbol(e,t,s);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(i)&&i&&this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_11__["MosaicType"].SPRITE,i),{spriteMosaicItem:i}}}}bindTextures(e,t,i,s=!1){if(0===i.textureBinding)return;const r=this._bindingInfos[i.textureBinding-1],a=r.page,n=s?9987:9729;switch(r.mosaicType){case _enums_js__WEBPACK_IMPORTED_MODULE_11__["MosaicType"].SPRITE:{const i=this.sprites.getWidth(a),s=this.sprites.getHeight(a),r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(j,i,s);return this._spriteMosaic.bind(e,n,a,_definitions_js__WEBPACK_IMPORTED_MODULE_10__["TEXTURE_BINDING_SPRITE_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_10__["TEXTURE_BINDING_SPRITE_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}case _enums_js__WEBPACK_IMPORTED_MODULE_11__["MosaicType"].GLYPH:{const i=this.glyphs.width,s=this.glyphs.height,r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(j,i,s);return this._glyphMosaic.bind(e,n,a,_definitions_js__WEBPACK_IMPORTED_MODULE_10__["TEXTURE_BINDING_GLYPH_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_10__["TEXTURE_BINDING_GLYPH_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}default:U.error("mapview-texture-manager",`Cannot handle unknown type ${r.mosaicType}`)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const s=E.fromMosaic(e,t),r=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,r),this._bindingInfos.push(s)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,i){const s=Object(_fontUtils_js__WEBPACK_IMPORTED_MODULE_12__["getFullyQualifiedFontName"])(e.font),r=this._invalidFontsMap.has(s),a=t||D(Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_19__["bidiText"])(e.text)[0]);try{return await this._glyphMosaic.getGlyphItems(r?C:s,a,i)}catch(n){return Q("mapview-invalid-resource",`Couldn't find font ${s}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(s,!0),this._glyphMosaic.getGlyphItems(C,a,i)}}async _rasterizeSpriteSymbol(e,t,s){if($(e))return null;const r=Object(_util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_21__["keyFromSymbol"])(e);if(this._spriteMosaic.has(r))return this._spriteMosaic.getSpriteItem(r);if(P(e)||B(e))return this._handleAsyncResource(r,e,s);const a=this._rasterizer.rasterizeJSONResource(e,t);if(a){const{size:t,image:i,sdf:s,simplePattern:n}=a;return this._addItemToMosaic(r,t,{type:"static",data:i},q(e),s,n)}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let s;s=P(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,s);try{await s,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return s}async _handleSVG(e,t,i){const s=[F,F],r=await this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,s,{type:"static",data:new Uint32Array(r.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,s){const r=await A(e,s);if(Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(r)){const o=Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_18__["isGIF"])(r),c=Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_17__["isPNG"])(r);if(!o&&!c)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource","Image data is neither GIF nor PNG!");let h;try{o&&Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_18__["isAnimatedGIF"])(r)?h=await _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_18__["default"].create(r,s):c&&Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_17__["isAnimatedPNG"])(r)&&(h=await _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_17__["default"].create(r,s))}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource","Could not fetch requested resource!")}if(h&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(h))return this._addItemToMosaic(t,[h.width,h.height],{type:"animated",data:h},q(e),!1,!1);const u=new Blob([r],{type:o?"image/gif":"image/png"}),d=await this._imageFromBlob(u);if(d&&d instanceof HTMLImageElement){let i=d.width,s=d.height;"esriPMS"===e.type&&(i=Math.round(N(d.width,e.width)),s=Math.round(d.height*(i/d.width)));const{size:r,sdf:a,image:n}=this._rasterizer.rasterizeImageResource(i,s,d,e.colorSubstitutions);return this._addItemToMosaic(t,r,{type:"static",data:n},q(e),a,!1)}}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource","Could not handle resource!")}async _handleImage(e,t,s){if(G(e)||L(e))return this._handleGIFOrPNG(e,t,s);const r=e.imageData?`data:${e.contentType};base64,${e.imageData}`:e.url;try{const{data:i}=await this._imageRequestQueue.push(r,{...s});k(r)&&(i.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(e.width),i.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__["pt2px"])(e.height));let a=i.width,n=i.height;"esriPMS"===e.type&&(a=Math.round(N(i.width,e.width)),n=Math.round(i.height*(a/i.width)));const{size:c,sdf:h,image:u}=this._rasterizer.rasterizeImageResource(a,n,i,e.colorSubstitutions);return this._addItemToMosaic(t,c,{type:"static",data:u},q(e),h,!1)}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${r}. ${a.message}`)}}async _imageFromBlob(e){const t=window.URL.createObjectURL(e);try{const{data:e}=await this._imageRequestQueue.push(t);return window.URL.revokeObjectURL(t),e}catch(s){if(window.URL.revokeObjectURL(t),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(s))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${t}`);throw s}}_addItemToMosaic(e,t,i,s,r,a){return this._spriteMosaic.addSpriteItem(e,t,i,s,r,a)}}/* harmony default export */ __webpack_exports__["default"] = (H);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/WebGLDriverTest.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/WebGLDriverTest.js ***!
  \********************************************************************************************************************/
/*! exports provided: testSamplerPrecision, testWebGLDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSamplerPrecision", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testWebGLDriver", function() { return p; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Program.js */ "../../node_modules/@arcgis/core/views/webgl/Program.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VertexStream.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js");
/* harmony import */ var _webgl_testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webgl/testSVGPremultipliedAlpha.js */ "../../node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WebGLDriverTest");class l{constructor(e){this.svgAlwaysPremultipliesAlpha=!1,this._ignoresSamplerPrecision=null,this._context=e,Object(_webgl_testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_10__["testSVGPremultipliedAlpha"])(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e}))}get ignoresSamplerPrecision(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=m(this._context)),this._ignoresSamplerPrecision}}const p=e=>new l(e),m=e=>{const r=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),s="\nprecision highp float;\n\nattribute vec2 a_pos;\n\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n",l="\nprecision highp float;\n\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",p=new Uint8Array(4),m=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_9__["default"](e,[0,0,1,0,0,1,1,1]),g=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_4__["Program"](e,s,l,new Map([["a_pos",0]])),c=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](e,{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([2,255,0,0]));g.setUniform1i("u_texture",0),e.bindTexture(c,0);const d=e.getBoundFramebufferObject();e.bindFramebuffer(r),e.useProgram(g);const{x:u,y:h,width:w,height:b}=e.getViewport();e.setViewport(0,0,1,1),m.draw(),e.setViewport(u,h,w,b),r.readPixels(0,0,1,1,6408,5121,p),g.dispose(),m.dispose(),r.dispose();const f=255!==p[0]||255!==p[1]||255!==p[2]||255!==p[3];return f&&a.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${p[0]}.${p[1]}.${p[2]}.${p[3]}]`),e.bindFramebuffer(d),f};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default, getPNGSize, isAnimatedPNG, isPNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPNGSize", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedPNG", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPNG", function() { return h; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=new Uint32Array(256);for(let b=0;b<256;b++){let t=b;for(let e=0;e<8;e++)t=0!=(1&t)?3988292384^t>>>1:t>>>1;r[b]=t}function a(t,e=0,a=t.length-e){let i=-1;for(let n=e,s=e+a;n<s;n++)i=i>>>8^r[255&(i^t[n])];return-1^i}const i=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not a PNG"),n=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not an animated PNG"),s=new Uint8Array([137,80,78,71,13,10,26,10]);function h(t){const e=t.constructor===Uint8Array?t:new Uint8Array(t);return!s.some(((t,r)=>t!==e[r]))}function u(t){let e,r;return p(new Uint8Array(t),((t,a,i)=>{const n=new DataView(a.buffer);"IHDR"===t&&(e=n.getUint32(i+8),r=n.getUint32(i+12))})),[e,r]}function l(t){const e=new Uint8Array(t);if(!h(e))return!1;let r=!1;return p(e,(t=>!(r="acTL"===t))),r}class o{constructor(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.paused=!1,this.playing=!1,this.playSpeed=1,this.currentFrameNumber=0,this._lastUsedFrame=-1}static async create(r,a){const i=new o;try{await i._load(r,a)}catch(n){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(n))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${n.message}`)}return i}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,r){t.bindTexture(e,r);const a=this.frameChanged();if(!a)return!1;const i=this.currentFrame,n=i.frameData,s=e.descriptor;return(i.left||i.top||i.width!==s.width||i.height!==s.height)&&e.setData(null),e.updateData(0,i.left,i.top,i.width,i.height,n),this.updateUsedFrame(),a}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(r,a){try{const t=d(this,r);if(t!==this)return t;this._resizeCanvas=document.createElement("canvas"),this._resizeCanvas.width=this.width,this._resizeCanvas.height=this.height,await Promise.all(this.frames.map((t=>t.createImage(this._resizeCanvas))))}catch(i){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(i))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse PNG")}this.play()}_play(){let t,e;if(0===this.playSpeed)return void this.pause();this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed);const r=this.frames[this.currentFrameNumber];this.currentFrame={frameData:r.imageData,top:r.top,left:r.left,width:r.width,height:r.height},this.timerID=window.setTimeout((()=>this._play()),t)}}class c{constructor(){this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.data=null,this.imageData=null}async createImage(t){if(null===this.imageData)return new Promise(((e,r)=>{const a=URL.createObjectURL(this.data),i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(a),this.imageData=m(i,t),e()},i.onerror=()=>{URL.revokeObjectURL(a),this.imageData=null,r(new Error("Image creation error"))},i.src=a}))}}function m(t,e){e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),i=new Uint8Array(a.data);let n;for(let s=0;s<i.length;s+=4)n=i[s+3]/255,i[s]=i[s]*n,i[s+1]=i[s+1]*n,i[s+2]=i[s+2]*n;return new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height)}function d(t,e){const r=new Uint8Array(e);if(s.some(((t,e)=>t!==r[e])))return i;let a=!1;if(p(r,(t=>!(a="acTL"===t))),!a)return n;const h=[],u=[];let l=null,o=null,m=0;if(p(r,((e,r,a,i)=>{const n=new DataView(r.buffer);switch(e){case"IHDR":l=r.subarray(a+8,a+8+i),t.width=n.getUint32(a+8),t.height=n.getUint32(a+12);break;case"acTL":t.numPlays=n.getUint32(a+8+4);break;case"fcTL":{o&&(t.frames.push(o),m++),o=new c,o.width=n.getUint32(a+8+4),o.height=n.getUint32(a+8+8),o.left=n.getUint32(a+8+12),o.top=n.getUint32(a+8+16);const e=n.getUint16(a+8+20);let r=n.getUint16(a+8+22);0===r&&(r=100),o.delay=1e3*e/r,o.delay<=10&&(o.delay=100),t.playTime+=o.delay,o.disposeOp=n.getUint8(a+8+24),o.blendOp=n.getUint8(a+8+25),o.dataParts=[],0===m&&2===o.disposeOp&&(o.disposeOp=1);break}case"fdAT":o&&o.dataParts.push(r.subarray(a+8+4,a+8+i));break;case"IDAT":o&&o.dataParts.push(r.subarray(a+8,a+8+i));break;case"IEND":u.push(w(r,a,12+i));break;default:h.push(w(r,a,12+i))}})),0===t.frames.length)return n;t.frameCount=t.frames.length;const d=new Blob(h),g=new Blob(u);return t.frames.forEach((t=>{let e=[];e.push(s),l.set(U(t.width),0),l.set(U(t.height),4),e.push(y("IHDR",l)),e.push(d),t.dataParts.forEach((t=>e.push(y("IDAT",t)))),e.push(g),t.data=new Blob(e,{type:"image/png"}),delete t.dataParts,e=null})),t}function p(t,e){const r=new DataView(t.buffer);let a,i,n,s=8;do{i=r.getUint32(s),a=g(t,s+4,4),n=e(a,t,s,i),s+=12+i}while(!1!==n&&"IEND"!==a&&s<t.length)}function g(t,e,r){const a=Array.prototype.slice.call(t.subarray(e,e+r));return String.fromCharCode.apply(String,a)}function f(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function w(t,e,r){const a=new Uint8Array(r);return a.set(t.subarray(e,e+r)),a}function y(t,e){const r=t.length+e.length,i=new Uint8Array(r+8),n=new DataView(i.buffer);n.setUint32(0,e.length),i.set(f(t),4),i.set(e,8);const s=a(i,4,r);return n.setUint32(r+4,s),i}function U(t){return new Uint8Array([t>>>24&255,t>>>16&255,t>>>8&255,255&t])}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js ***!
  \************************************************************************************************************************/
/*! exports provided: default, getGIFSize, isAnimatedGIF, isGIF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFSize", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedGIF", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGIF", function() { return r; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a={GCExt:249,COMMENT:254,APPExt:255,UNKNOWN:1,IMAGE:44,EOF:59,EXT:33};function r(t){if(!t||0===t.byteLength)return!1;const e=t.constructor===Uint8Array?t:new Uint8Array(t);return 71===e[0]&&73===e[1]&&70===e[2]&&56===e[3]}function h(t){const e=new Uint8ClampedArray(t);let s=6;return[e[s++]+(e[s++]<<8),e[s++]+(e[s++]<<8)]}function o(t){if(!t||0===t.byteLength)return!1;const e=new Uint8Array(t);if(!r(e))return!1;let s=0;for(let i=0,a=e.length-9;i<a&&(0!==e[i]||33!==e[i+1]||249!==e[i+2]||4!==e[i+3]||0!==e[i+8]||44!==e[i+9]&&33!==e[i+9]||(s++,!(s>1)));++i);return s>1}class n{constructor(){this.paused=!1,this.playing=!1,this.waitTillDone=!0,this.loading=!1,this.firstFrameOnly=!1,this.frames=[],this.comment="",this.length=0,this.currentFrameNumber=0,this.frameCount=0,this.playSpeed=1,this.lastFrame=null,this.playOnLoad=!0,this.complete=!1,this.interlaceOffsets=[0,4,2,1],this.interlaceSteps=[8,8,4,2],this._lastUsedFrame=-1}static async create(s,i){const a=new n;try{await a._load(s,i)}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(r))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${r.message}`)}return a}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,s){t.bindTexture(e,s);const i=this.frameChanged();if(i){const t=this.currentFrame,s=t.frameData;e.updateData(0,0,0,t.width,t.height,s),this.updateUsedFrame()}return i}seekFrame(t){clearTimeout(this.timerID),this.currentFrameNumber=t%this.frames.length,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}seek(t){clearTimeout(this.timerID),t<0&&(t=0),t*=1e3,t%=this.length;let e=0;for(;t>this.frames[e].time+this.frames[e].delay&&e<this.frames.length;)e+=1;this.currentFrameNumber=e,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(s,i){try{this.loading=!0,await this._parse(s,i),this.loading=!1,this.play()}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse gif!")}}_parse(t,e){const s=new l(t);s.pos+=6,this.width=s.data[s.pos++]+(s.data[s.pos++]<<8),this.height=s.data[s.pos++]+(s.data[s.pos++]<<8);const i=s.data[s.pos++];return this.globalColourCount=1<<1+(7&i),s.pos++,s.pos++,128&i&&(this.globalColourTable=this._parseColourTable(this.globalColourCount,s)),new Promise(((t,i)=>{setTimeout((()=>this._parseBlock(s,t,i,e)),0)}))}async _parseBlock(t,e,r,h){if(h&&h.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(h.signal))return void r(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])());const o=t.data[t.pos++];if(o===a.IMAGE){if(this._parseImg(t),this.firstFrameOnly)return this._finishedLoading(),void e()}else{if(o===a.EOF)return this._finishedLoading(),void e();this._parseExt(t)}"function"==typeof this.onprogress&&this.onprogress({bytesRead:t.pos,totalBytes:t.data.length,frame:this.frames.length}),setTimeout((()=>this._parseBlock(t,e,r,h)),0)}_parseColourTable(t,e){const s=[];for(let i=0;i<t;i++)s.push([e.data[e.pos++],e.data[e.pos++],e.data[e.pos++]]);return s}_parseImg(t){const e=t=>{const e=this.pixelBufSize/t;this.interlacedBufSize!==this.pixelBufSize&&(this.deinterlaceBuf=new Uint8Array(this.pixelBufSize),this.interlacedBufSize=this.pixelBufSize);let s=0;for(let i=0;i<4;i++)for(let a=this.interlaceOffsets[i];a<e;a+=this.interlaceSteps[i])this.deinterlaceBuf.set(this.pixelBuf.subarray(s,s+t),a*t),s+=t},s={};this.frames.push(s),s.disposalMethod=this.disposalMethod,s.time=this.length,s.delay=10*this.delayTime,this.length+=s.delay,this.transparencyGiven?s.transparencyIndex=this.transparencyIndex:s.transparencyIndex=void 0,s.leftPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.topPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.width=t.data[t.pos++]+(t.data[t.pos++]<<8),s.height=t.data[t.pos++]+(t.data[t.pos++]<<8);const i=t.data[t.pos++];s.localColourTableFlag=!!(128&i),s.localColourTableFlag&&(s.localColourTable=this._parseColourTable(1<<1+(7&i),t)),this.pixelBufSize!==s.width*s.height&&(this.pixelBuf=new Uint8Array(s.width*s.height),this.pixelBufSize=s.width*s.height),this._lzwDecode(t.data[t.pos++],t.readSubBlocksB()),64&i?(s.interlaced=!0,e(s.width)):s.interlaced=!1,this._processFrame(s)}_lzwDecode(t,e){let s,i,a,r,h,o,n,l,d;a=i=0;let p=[];const u=1<<t,m=u+1;for(r=t+1,d=!1;!d;){for(o=h,h=0,s=0;s<r;s++)e[a>>3]&1<<(7&a)&&(h|=1<<s),a++;if(h===u){for(p=[],r=t+1,s=0;s<u;s++)p[s]=[s];p[u]=[],p[m]=null}else{if(h===m)return void(d=!0);for(h>=p.length?p.push(p[o].concat(p[o][0])):o!==u&&p.push(p[o].concat(p[h][0])),n=p[h],l=n.length,s=0;s<l;s++)this.pixelBuf[i++]=n[s];p.length===1<<r&&r<12&&r++}}}_processFrame(t){t.image=document.createElement("canvas"),t.image.width=this.width,t.image.height=this.height,t.ctx=t.image.getContext("2d");const e=t.localColourTableFlag?t.localColourTable:this.globalColourTable;null===this.lastFrame&&(this.lastFrame=t);const s=2===this.lastFrame.disposalMethod||3===this.lastFrame.disposalMethod;s||t.ctx.drawImage(this.lastFrame.image,0,0,this.width,this.height);const i=t.ctx.getImageData(t.leftPos,t.topPos,t.width,t.height),a=t.transparencyIndex,r=i.data,h=t.interlaced?this.deinterlaceBuf:this.pixelBuf,o=h.length;let n,l,d=0;for(let p=0;p<o;p++)n=h[p],l=e[n],a!==n?(r[d++]=l[0],r[d++]=l[1],r[d++]=l[2],r[d++]=255):s?(r[d+3]=0,d+=4):d+=4;t.ctx.putImageData(i,t.leftPos,t.topPos),this.lastFrame=t}_parseExt(t){const e=t.data[t.pos++];e===a.GCExt?this._parseGCExt(t):e===a.COMMENT?this.comment+=t.readSubBlocks():e===a.APPExt?this._parseAppExt(t):(e===a.UNKNOWN&&(t.pos+=13),t.readSubBlocks())}_parseAppExt(t){t.pos+=1,"NETSCAPE"===t.getString(8)?t.pos+=8:(t.pos+=3,t.readSubBlocks())}_parseGCExt(t){t.pos++;const e=t.data[t.pos++];this.disposalMethod=(28&e)>>2,this.transparencyGiven=!!(1&e),this.delayTime=t.data[t.pos++]+(t.data[t.pos++]<<8),this.transparencyIndex=t.data[t.pos++],t.pos++}_finishedLoading(){this.loading=!1,this.frameCount=this.frames.length,this.lastFrame=null,this.complete=!0,this.disposalMethod=void 0,this.transparencyGiven=void 0,this.delayTime=void 0,this.transparencyIndex=void 0,this.waitTillDone=void 0,this.pixelBuf=void 0,this.deinterlaceBuf=void 0,this.pixelBufSize=void 0,this.deinterlaceBuf=void 0,this.currentFrameNumber=0,this.frames.length>0&&this._setCurrentFrame(0),this.playOnLoad&&this.play()}_play(){let t,e;0!==this.playSpeed?(this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed),this._setCurrentFrame(this.currentFrameNumber),this.timerID=window.setTimeout((()=>this._play()),t)):this.pause()}_setCurrentFrame(t){const e=this.frames[t];this.currentFrame={frameData:e.image,top:0,left:0,width:this.width,height:this.height}}}class l{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t),this.len=this.data.length}getString(t){let e="";for(;t--;)e+=String.fromCharCode(this.data[this.pos++]);return e}readSubBlocks(){let t,e,s="";do{for(e=t=this.data[this.pos++];e--;)s+=String.fromCharCode(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}readSubBlocksB(){let t,e;const s=[];do{for(e=t=this.data[this.pos++];e--;)s.push(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: CollisionEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionEngine", function() { return V; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "../../node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollisionGrid.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js");
/* harmony import */ var _visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualVariableSimpleUtils.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const d=254,u=255,f=0;function b(t,i){const o=[];t.forEachTile((e=>o.push(e))),o.sort(((e,t)=>e.instanceId-t.instanceId)),o.forEach((t=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.labelMetrics)&&t.isReady&&i(t,t.labelMetrics.getCursor())}))}function y(e){return"feature"===e.layer.type||"csv"===e.layer.type||"geojson"===e.layer.type||"ogc-feature"===e.layer.type||"stream"===e.layer.type||"subtype-group"===e.layer.type||"wfs"===e.layer.type}function p(e){return t=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(Object(_visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_4__["getSizeForValueSimple"])(t,e))}function m(e){const t="visualVariables"in e&&e.visualVariables;if(!t)return null;for(const i of t)if("size"===i.type)return p(i);return null}function h(e){for(const t of e){const e=t.labelingInfo||[];if(!t.labelsVisible||!e.length)continue;if(e.some((e=>"none"===e.deconflictionStrategy)))return!0}return!1}function M(e,i){if(!y(i))return;const o="subtype-group"===i.layer.type?i.layer.sublayers.items:[i.layer],r=i.layer.geometryType,n=!h(o),s={};if("subtype-group"!==i.layer.type){if("heatmap"===i.layer.renderer.type)return;const e=m(i.layer.renderer);s[0]=e}const a=i.tileRenderer;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)||e.push({tileRenderer:a,vvEvaluators:s,deconflictionEnabled:n,geometryType:r})}class V{run(e,t,i){const o=[];for(const r of e)M(o,r);this._transformMetrics(o,t),this._runCollision(o,t,i)}_runCollision(e,t,i){const[o,r]=t.state.size,s=new _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["CollisionBitsetGrid"](o,r);for(const{tileRenderer:n,deconflictionEnabled:a}of e){const e=n.featuresView.attributeView;if(!a)return void b(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,f)}));this._prepare(n),this._collideVisible(s,n,i),this._collideInvisible(s,n)}}_isFiltered(e,t,i){const n=t.getFilterFlags(e),s=!i.hasFilter||!!(n&_definitions_js__WEBPACK_IMPORTED_MODULE_2__["FILTER_FLAG_0"]),a=!i.effect||i.effect.excludedLabelsVisible||!!(n&_definitions_js__WEBPACK_IMPORTED_MODULE_2__["EFFECT_FLAG_0"]);return!(s&&a)}_prepare(e){const t=e.featuresView.attributeView,i=new Set;b(e,((o,r)=>{for(;r.nextId();){if(i.has(r.id))continue;if(i.add(r.id),this._isFiltered(r.id,t,e.layerView)){t.setLabelMinZoom(r.id,d);continue}t.getLabelMinZoom(r.id)!==f?t.setLabelMinZoom(r.id,u):t.setLabelMinZoom(r.id,f)}}))}_collideVisible(e,t,i){const o=t.featuresView.attributeView,r=new Set;b(t,((t,n)=>{for(;n.nextId();)if(!r.has(n.id))if(t.key.level===i){if(0===o.getLabelMinZoom(n.id)){switch(e.insertMetrics(n)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["OUTSIDE_EXTENT"]:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["HAS_COLLISION"]:o.setLabelMinZoom(n.id,d),r.add(n.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["NONE"]:o.setLabelMinZoom(n.id,f),r.add(n.id)}}}else o.setLabelMinZoom(n.id,d)}))}_collideInvisible(e,t){const i=t.featuresView.attributeView,o=new Set;b(t,((t,r)=>{for(;r.nextId();)if(!o.has(r.id)&&i.getLabelMinZoom(r.id)===u){switch(e.insertMetrics(r)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["OUTSIDE_EXTENT"]:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["HAS_COLLISION"]:i.setLabelMinZoom(r.id,u),o.add(r.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__["NONE"]:i.setLabelMinZoom(r.id,f),o.add(r.id)}}}))}_transformMetrics(t,i){for(const{tileRenderer:o,geometryType:r,vvEvaluators:n}of t)b(o,((t,s)=>{const a=o.featuresView.attributeView,l=t.transforms.labelMat2d;l[4]=Math.round(l[4]),l[5]=Math.round(l[5]);const c=l[4],d=l[5],u="polyline"===r;for(;s.next();){const t=s.boundsCount,o=s.anchorX,r=s.anchorY;let f=0,b=0;const y=n[0];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(y)){const e=y(a.getVVSize(s.id)),t=isNaN(e)||null==e||e===1/0?s.size:e;f=s.directionX*(t/2),b=s.directionY*(t/2)}for(let e=0;e<t;e++){let t=o,n=s.anchorY;if(u){let o=t+s.boundsCenterX(e)+f,r=n+s.boundsCenterY(e)+b;i.state.rotation?(o=l[0]*o+l[2]*r+l[4],r=l[1]*o+l[3]*r+l[5]):(o+=c,r+=d),s.setBoundsComputedAnchorX(e,Math.floor(o)),s.setBoundsComputedAnchorY(e,Math.floor(r))}else{i.state.rotation?(t=l[0]*o+l[2]*r+l[4],n=l[1]*o+l[3]*r+l[5]):(t+=c,n+=d);const a=t+s.boundsCenterX(e)+f,u=n+s.boundsCenterY(e)+b;s.setBoundsComputedAnchorX(e,a),s.setBoundsComputedAnchorY(e,u)}}}}))}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: CollisionBitsetGrid, CollisionGrid, HAS_COLLISION, NONE, OUTSIDE_EXTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionBitsetGrid", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionGrid", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_COLLISION", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NONE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTSIDE_EXTENT", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "../../node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/features/support/StaticBitSet.js */ "../../node_modules/@arcgis/core/views/2d/layers/features/support/StaticBitSet.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=2,o=1,h=0,r=1,n=2;class c{constructor(t,s){this.width=t,this.height=s;const i=Math.ceil(t/o),h=Math.ceil(s/o);this._cols=i,this._rows=h,this._cells=_layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__["StaticBitSet"].create(i*h)}insertMetrics(t){const s=this._hasCollision(t);return s===h&&this._markMetrics(t),s}getCellId(t,s){return t+s*this._cols}has(t){return this._cells.has(t)}hasRange(t,s){return this._cells.hasRange(t,s)}set(t){this._cells.set(t)}setRange(t,s){this._cells.setRange(t,s)}_hasCollision(t){const s=t.id;let e=0,o=0;t.save();do{const s=t.boundsCount;e+=s;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),h=t.boundsComputedAnchorY(e),c=t.boundsWidth(e)+i,l=t.boundsHeight(e)+i;switch(this._collide(s,h,c,l)){case n:return n;case r:o++}}}while(t.peekId()===s&&t.next());return t.restore(),e===o?r:h}_collide(s,e,i,c){const l=s-i/2,_=s+i/2,a=e-c/2,u=e+c/2;if(_<0||u<0||l>this.width||a>this.height)return r;const d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(l/o),0,this._cols),g=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(a/o),0,this._rows),f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(_/o),0,this._cols),m=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(u/o),0,this._rows);for(let t=g;t<=m;t++)for(let s=d;s<=f;s++){const e=this.getCellId(s,t);if(this.has(e))return n}return h}_mark(s,e,i,h){const r=s-i/2,n=s+i/2,c=e-h/2,l=e+h/2,_=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(r/o),0,this._cols),a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(c/o),0,this._rows),u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(n/o),0,this._cols),d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(l/o),0,this._rows);for(let t=a;t<=d;t++)for(let s=_;s<=u;s++){const e=this.getCellId(s,t);this.set(e)}return!1}_markMetrics(t){const s=t.id;do{const s=t.boundsCount;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),o=t.boundsComputedAnchorY(e),h=t.boundsWidth(e)+i,r=t.boundsHeight(e)+i;this._mark(s,o,h,r)}}while(t.peekId()===s&&t.next())}}class l{constructor(t,e=2){this._bucketSize=t,this._rowsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]/t,this._colsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]/t,this._elementsPerBucket=e,this._grid=this._initGrid()}checkOverlap(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);return e<0||e>=this._rowsLength||i<0||i>=this._colsLength||this._grid[i*this._colsLength+e]>=this._elementsPerBucket}markUsed(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);this._grid[i*this._colsLength+e]+=1}reset(){this._grid=this._initGrid()}_initGrid(){return new Uint8Array(this._rowsLength*this._colsLength)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: getSizeForValueSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeForValueSimple", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "../../node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../renderers/support/lengthUtils.js */ "../../node_modules/@arcgis/core/renderers/support/lengthUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e=Math.PI;function r(t,n){switch(n.transformationType){case"additive":return i(t,n);case"constant":return s(n,t);case"clamped-linear":return u(t,n);case"proportional":return o(t,n);case"stops":return c(t,n);case"real-world-size":return l(t,n);case"identity":return t;case"unknown":return null}}function a(t,n){return"number"==typeof t?t:r(n,t)}function i(t,n){return t+(a(n.minSize,t)||n.minDataValue)}function s(t,n){const e=t.stops;let r=e&&e.length&&e[0].size;return null==r&&(r=t.minSize),a(r,n)}function u(t,n){const e=(t-n.minDataValue)/(n.maxDataValue-n.minDataValue),r=a(n.minSize,t),i=a(n.maxSize,t);return t<=n.minDataValue?r:t>=n.maxDataValue?i:r+e*(i-r)}function o(n,e){const r=n/e.minDataValue,i=a(e.minSize,n),s=a(e.maxSize,n);let u=null;return u=r*i,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(u,i,s)}function c(t,n){const[e,r,i]=m(t,n.cache.ipData);if(e===r)return a(n.stops[e].size,t);{const s=a(n.stops[e].size,t);return s+(a(n.stops[r].size,t)-s)*i}}function l(r,i){const s=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__["meterIn"][i.valueUnit],u=a(i.minSize,r),o=a(i.maxSize,r),{valueRepresentation:c}=i;let l=null;return l="area"===c?2*Math.sqrt(r/e)/s:"radius"===c||"distance"===c?2*r/s:r/s,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(l,u,o)}function m(t,n){if(!n)return;let e=0,r=n.length-1;return n.some(((n,a)=>t<n?(r=a,!0):(e=a,!1))),[e,r,(t-n[e])/(n[r]-n[e])]}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js ***!
  \*********************************************************************************************************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _FreeList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FreeList.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const h=32767,n=h<<16|h;class d{constructor(t,i,e){const r=new Uint32Array(i*e);this.strideInt=e,this.bufferType=t,this.dirty={start:1/0,end:0},this.cpu=r,this.gpu=null,this.clear()}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["andThen"])(this.gpu,(t=>t.dispose()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_9__["FreeList"]({start:0,end:this.cpu.length/this.strideInt}),this.fillPointer=0}get bufferSize(){return this.cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,r,s){const h=r*this.strideInt,n=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,d=new Uint32Array(t,n,h),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOrThrow"])(this.freeList.firstFit(r),"First fit region must be defined"),f=a*this.strideInt,o=h*this.strideInt,u=a-e;if(0!==s)for(let i=0;i<d.length;i++)d[i]+=s;return this.cpu.set(d,f),this.dirty.start=Math.min(this.dirty.start,f),this.dirty.end=Math.max(this.dirty.end,f+o),this.fillPointer=Math.max(this.fillPointer,f+o),u}free(t,i,e){const r=t*this.strideInt,s=(t+i)*this.strideInt;if(!0===e)for(let h=t;h!==t+i;h++)this.cpu[h*this.strideInt]=n;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,s),this.freeList.free(t,i)}upload(t){if(this.dirty.end){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubData(this.cpu,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const i=35048;return"index"===this.bufferType?_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(t,i,this.cpu):_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(t,i,this.cpu)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferData.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferData.js ***!
  \*************************************************************************************************************************/
/*! exports provided: BufferData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferData", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _FeatureDisplayList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FeatureDisplayList.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js");
/* harmony import */ var _Buffer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Buffer.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js");
/* harmony import */ var _DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DisplayRecordReader.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/DisplayRecordReader.js");
/* harmony import */ var _mesh_heuristics_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mesh/heuristics.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/heuristics.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class u{constructor(e,r,t,s,i){this._vaoInvalidated=!0;const o=Object(_mesh_heuristics_js__WEBPACK_IMPORTED_MODULE_13__["getMeshHeuristic"])(r),d=Math.max(o.indicesPerRecord*o.multiplier*t,i+1),u=Math.max(o.verticesPerRecord*o.multiplier*t,s+1),a=e/Uint32Array.BYTES_PER_ELEMENT,l=new _Buffer_js__WEBPACK_IMPORTED_MODULE_11__["Buffer"]("index",d,1),h={geometry:new _Buffer_js__WEBPACK_IMPORTED_MODULE_11__["Buffer"]("vertex",u,a)};this.stride=e,this.strideInt=a,this.geometryType=r,this._buffers={index:l,vertex:h}}static createPooled(r,t,s,o,n,d,f){const a=Math.max(_definitions_js__WEBPACK_IMPORTED_MODULE_9__["BUFFER_DATA_MINIMUM_SIZE"],Math.round(1.5*d)),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(r,(()=>new u(t.stride,s,a,o,n)));return l._buffers.index.clear(),l._buffers.vertex.geometry.clear(),l._records=null,l._displayList=null,l._vaoInvalidated=!0,l._pool=f,l._released=!1,l}release(){this.isReleased||(this._pool.release(this),this._released=!0)}destroy(){this._buffers.index.destroy(),this._buffers.vertex.geometry.destroy(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._vao,(e=>e.dispose(!1)))}get isReleased(){return this._released}get indexBufferSize(){return this._buffers.index.bufferSize}get vertexBufferSize(){return this._buffers.vertex.geometry.bufferSize}get displayList(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._displayList)&&(this._displayList=_FeatureDisplayList_js__WEBPACK_IMPORTED_MODULE_10__["FeatureDisplayList"].from(this,this._records.getCursor())),this._displayList}draw(e,r,t,s,i){this.upload(e);const o=this._getVAO(e,r,t),n=Uint32Array.BYTES_PER_ELEMENT*s;e.bindVAO(o),e.drawElements(4,i,5125,n),e.bindVAO(null)}insert(e){if(e.done)return;const{vertexData:r,offset:t}=e,{records:s,indices:i,vertices:o}=r,n=this._getInsertionInfo(_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_12__["DisplayRecordReader"].from(s,t)),{vertFrom:f,vertCount:u,indexFrom:a,indexCount:l,recordCount:h,done:m}=n;if(e.done=m,e.offset=h+t,0===h)return;const{index:_,vertex:c}=this._buffers,x=c.geometry.insert(o,f,u,0),v=_.insert(i,a,l,x);this._addRecords(_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_12__["DisplayRecordReader"].from(s,t,h),v,x)}free(e){const r=_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_12__["DisplayRecordReader"].from(e.records).getCursor();for(;r.next();)this._freeId(r.id)}freeIds(e){for(const r of e)this._freeId(r)}upload(e){const{index:r,vertex:t}=this._buffers;r.upload(e),t.geometry.upload(e)}has(e){if(!this._records)return!1;const r=this._records.getCursor();for(;r.next();)if(r.id===e)return!0;return!1}getViewOf(e){if(!this._records)return null;const r=this._records.getCursor();for(;r.next();)if(r.id===e)return r;return null}_getInsertionInfo(e){const r=e.getCursor(),{index:t,vertex:s}=this._buffers,i=t.maxAvailableSpace(),o=s.geometry.maxAvailableSpace();let n=0,d=null,f=0,u=null,a=0,l=!0;for(;r.next();){null===u&&(u=r.vertexFrom,d=r.indexFrom);const e=a+r.vertexCount,t=f+r.indexCount;if(e>=o||t>=i){l=!1;break}n+=1,f=t,a=e}return{done:l,vertFrom:u,vertCount:a,indexFrom:d,indexCount:f,recordCount:n}}_addRecords(e,r,t){const s=e.getCursor();for(;s.next();)s.indexFrom+=r,s.vertexFrom+=t;this._records?(this._records.link(e),this._displayList=null):this._records=e}_freeId(e){const r=this._records.getCursor(),t=this._buffers.index,s=this._buffers.vertex.geometry;if(!r.lookup(e))return;const i=r.indexFrom;let o=r.indexCount;const n=r.vertexFrom;let d=r.vertexCount;for(;r.next()&&r.id===e;)o+=r.indexCount,d+=r.vertexCount;t.free(i,o),s.free(n,d,!0),this._records.delete(e)}_getVAO(e,i,o){if(this._vaoInvalidated){const e=JSON.stringify(i)+JSON.stringify([...o]);e!==this._vaoHash&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._vao,(e=>{e.dispose(!1)})),this._vao=null,this._vaoHash=e),this._vaoInvalidated=!1}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._vao)){const{index:r,vertex:n}=this._buffers;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n.geometry.gpu)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r.gpu))throw new Error("bad news");this._vao=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,o,i,{geometry:n.geometry.gpu},r.gpu)}return this._vao}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferDataPool.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferDataPool.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: BufferDataPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferDataPool", function() { return s; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _BufferData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BufferData.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferData.js");
/* harmony import */ var _DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayRecordReader.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/DisplayRecordReader.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s{constructor(){this._pools=new Map}acquire(e,r,s=0){const i=_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_3__["DisplayRecordReader"].from(e.records,s),c=i.size();i.next();const n=i.vertexCount,u=i.indexCount,a=this._tryAcquire(e.stride,r,n,u);return _BufferData_js__WEBPACK_IMPORTED_MODULE_2__["BufferData"].createPooled(a,e,r,n,u,c,this)}release(e){e.isReleased||e.destroy()}destroy(){this._pools.forEach((r=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.clear((e=>e.destroy()))}))}_tryAcquire(o,t,s,i){const c=o<<3|t,n=this._pools.get(c);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(n))return null;const u=n.dequeue();return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u)&&u.vertexBufferSize>=s&&u.indexBufferSize>=i?u:null}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js ***!
  \***********************************************************************************************************************/
/*! exports provided: FreeList, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeList", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return e; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let a=this;for(let n=1;n<t.length;n++)a.next=new e([t[n]]),a=a.next}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const a=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,a):a}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class a{constructor(a){this._head=null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)||(this._head=new e(a))}get head(){return this._head}maxAvailableSpace(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head))return 0;const e=this._head.max((t=>t.end-t.start));return e.data.end-e.data.start}firstFit(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head))return null;let a=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===e)return a?a.next=n.next:this._head=n.next,n.data.start;if(t>e){const t=n.data.start;return n.data.start+=e,t}a=n,n=n.next}return null}free(a,n){const r=a+n;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head)){const t=new e({start:a,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new e({start:a,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,i=s.next;for(;i;){if(i.data.start>=r){if(s.data.end===a)return void(s.data.end+=n);if(i.data.start===r)return void(i.data.start-=n);const t=new e({start:a,end:r});return t.next=s.next,void(s.next=t)}s=i,i=i.next}if(a===s.data.end)return void(s.data.end+=n);const d=new e({start:a,end:r});s.next=d}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js ***!
  \****************************************************************************************************************************/
/*! exports provided: AnimationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEffect", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexStream.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Effect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_3__["Effect"]{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(r,i){if(!i.size)return;const{context:a,renderingOptions:o}=r;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](a,[0,0,1,0,0,1,1,1]));const n=a.getBoundFramebufferObject(),{x:u,y:m,width:d,height:f}=a.getViewport();i.bindTextures(a);const c=i.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_ANIMATION"]);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c))return;const _=c.getFBO(a),l=c.getFBO(a,1);a.setViewport(0,0,i.size,i.size),this._computeDelta(r,l,o.labelsAnimationTime),this._updateAnimationState(r,l,_),a.bindFramebuffer(n),a.setViewport(u,m,d,f)}_computeDelta(e,t,s){const{context:a,painter:o,displayLevel:n}=e,u=o.materialManager.getProgram(e,this._desc,["delta"]);a.bindFramebuffer(t),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),a.useProgram(u),u.setUniform1i("u_maskTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),u.setUniform1i("u_sourceTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),u.setUniform1f("u_timeDelta",e.deltaTime),u.setUniform1f("u_animationTime",s),u.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(e,t,r){const{context:i,painter:s}=e,a=s.materialManager.getProgram(e,this._desc,["update"]);i.bindTexture(t.colorTexture,1),i.useProgram(a),a.setUniform1i("u_sourceTexture",1),i.bindFramebuffer(r),i.setClearColor(0,0,0,0),i.clear(i.gl.COLOR_BUFFER_BIT),this._quad.draw()}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js ***!
  \************************************************************************************************************************/
/*! exports provided: BlendEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendEffect", function() { return u; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../webgl/ProgramCache.js */ "../../node_modules/@arcgis/core/views/webgl/ProgramCache.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../VertexStream.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js");
/* harmony import */ var _shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shaders/BlendPrograms.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");class u{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)}draw(r,t,s,i,a){const{context:u,drawPhase:m}=r;if(this._setupShader(u),i&&"normal"!==i&&m!==_enums_js__WEBPACK_IMPORTED_MODULE_12__["WGLDrawPhase"].LABEL)return void this._drawBlended(r,t,s,i,a);const c=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_14__["blend"],"normal");if(!c)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));u.useProgram(c),t.setSamplingMode(s),u.bindTexture(t,0),c.setUniform1i("u_layerTexture",0),c.setUniform1f("u_opacity",a),u.setBlendingEnabled(!0),u.setBlendFunction(1,771);const f=this._quad;f.draw(),f.unbind()}_drawBlended(r,s,i,o,a){const{context:u,state:m,pixelRatio:c,inFadeTransition:f}=r,{size:h}=m,l=u.getBoundFramebufferObject();let p,g;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l)){const e=l.descriptor;p=e.width,g=e.height}else p=Math.round(c*h[0]),g=Math.round(c*h[1]);this._createOrResizeTexture(r,p,g);const b=this._backBufferTexture;l.copyToTexture(0,0,p,g,0,0,b),u.setStencilTestEnabled(!1),u.setStencilWriteMask(0),u.setBlendingEnabled(!0),u.setDepthTestEnabled(!1),u.setDepthWriteEnabled(!1);const _=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_14__["blend"],o);if(!_)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-BlendEffect",`Error creating shader program for blend mode ${o}`));u.useProgram(_),b.setSamplingMode(i),u.bindTexture(b,0),_.setUniform1i("u_backbufferTexture",0),s.setSamplingMode(i),u.bindTexture(s,1),_.setUniform1i("u_layerTexture",1),_.setUniform1f("u_opacity",a),_.setUniform1f("u_inFadeOpacity",f?1:0),u.setBlendFunction(1,0);const x=this._quad;x.draw(),x.unbind(),u.setBlendFunction(1,771)}_setupShader(e){this._programCache||(this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__["default"](e),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_13__["default"](e,[-1,-1,1,-1,-1,1,1,1])))}_createOrResizeTexture(e,r,t){const{context:s}=e;null!==this._backBufferTexture&&r===this._size[0]&&t===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(r,t):this._backBufferTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__["default"](s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:t}),this._size[0]=r,this._size[1]=t)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(){this.name=this.constructor.name}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js ***!
  \**************************************************************************************************************************/
/*! exports provided: FeatureEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureEffect", function() { return t; });
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t extends _Effect_js__WEBPACK_IMPORTED_MODULE_0__["Effect"]{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:s,height:r}=e.getViewport(),o=t.getFbos(s,r).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:s,painter:r,state:o,deltaTime:n}=e,c=r.getPostProcessingEffects(t.effects),i=s.getBoundFramebufferObject();c.length&&t.transitionStep(n,o.scale);for(const{postProcessingEffect:f,effect:a}of c)f.draw(e,i,a);s.bindFramebuffer(this._prev),s.setStencilTestEnabled(!1),r.blitTexture(s,i.colorTexture,9728),s.setStencilTestEnabled(!0)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BitBlitRenderer.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js");
/* harmony import */ var _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/HighlightGradient.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js");
/* harmony import */ var _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight/HighlightRenderer.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js");
/* harmony import */ var _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight/HighlightSurfaces.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=4,l=4/r;class d extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],this._hlGradient=new _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._width=void 0,this._height=void 0,this._hlSurfaces=new _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__["default"],this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__["BitBlitRenderer"]}dispose(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:s,height:h}=t.getViewport(),r=i.getFbos(s,h).effect0;this.setup(e,s,h),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const s=t%r,h=i%r;t+=s<r/2?-s:r-s,i+=h<r/2?-h:r-h,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const d=Math.round(t*l),n=Math.round(i*l);this._hlRenderer.setup(e,d,n),this._hlSurfaces.setup(e,d,n)}draw({context:e}){const t=e.getBoundFramebufferObject();e.setViewport(0,0,this._adjustedWidth*l,this._adjustedHeight*l),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,9728,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!0),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null}setHighlightOptions(e){this._hlGradient.setHighlightOptions(e)}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js ***!
  \**************************************************************************************************************************/
/*! exports provided: HittestEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HittestEffect", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0}dispose(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fbo)&&this._fbo.dispose()}bind({context:t,painter:e}){const{width:s,height:o}=t.getViewport(),r=e.getFbos(s,o).effect0;t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}draw({context:t,state:s,pixelRatio:o},r,i=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["HITTEST_SEARCH_SIZE"]){const f=t.getBoundFramebufferObject(),n=s.size[1]*o,a=Math.round(i*o),h=a/2,c=a/2;this._ensureBuffer(a),r.forEach(((t,e)=>{const s=new Map,i=Math.floor(e[0]*o-a/2),u=Math.floor(n-e[1]*o-a/2);f.readPixels(i,u,a,a,6408,5121,this._buf);for(let o=0;o<this._buf32.length;o++){const t=this._buf32[o];if(4294967295!==t&&0!==t){const e=o%a,r=a-Math.floor(o/a),i=(h-e)*(h-e)+(c-r)*(c-r),f=s.has(t)?s.get(t):4294967295;s.set(t,Math.min(i,f))}}const l=Array.from(s).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]));t.resolve(l),r.delete(e)}))}_ensureBuffer(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parameters.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function h(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].outlineWidth,i.outerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].outerHaloWidth,i.innerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].innerHaloWidth,i.outlinePosition=_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].outlinePosition}const s=[0,0,0,0];class a{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].outlinePosition,outlineWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].outlineWidth,innerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].innerHaloWidth,outerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_SIZING"].outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SHADE_TEXTURE_SIZE"]),this.minMaxDistance=[0,0]}setHighlightOptions(o){const i=this._convertedHighlightOptions;h(o,i);const t=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,e=i.outlinePosition-i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2,u=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,d=Math.sqrt(Math.PI/2)*_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SIGMA"],g=Math.abs(t)>d?Math.round(10*(Math.abs(t)-d))/10:0,f=Math.abs(u)>d?Math.round(10*(Math.abs(u)-d))/10:0;let C;g&&!f?n.error("The outer rim of the highlight is "+g+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!g&&f?n.error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):g&&f&&n.error("The highlight is "+Math.max(g,f)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];function m(o,i,t){c[0]=(1-t)*o[0]+t*i[0],c[1]=(1-t)*o[1]+t*i[1],c[2]=(1-t)*o[2]+t*i[2],c[3]=(1-t)*o[3]+t*i[3]}const{texelData:p}=this;for(let r=0;r<_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SHADE_TEXTURE_SIZE"];++r)C=t+r/(_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SHADE_TEXTURE_SIZE"]-1)*(u-t),C<t?(c[4*r+0]=0,c[4*r+1]=0,c[4*r+2]=0,c[4*r+3]=0):C<e?m(s,i.outlineColor,(C-t)/(e-t)):C<a?[c[0],c[1],c[2],c[3]]=i.outlineColor:C<u?m(i.outlineColor,i.fillColor,(C-a)/(u-a)):[c[4*r+0],c[4*r+1],c[4*r+2],c[4*r+3]]=i.fillColor,p[4*r+0]=255*c[0],p[4*r+1]=255*c[1],p[4*r+2]=255*c[2],p[4*r+3]=255*c[3];this.minMaxDistance[0]=t,this.minMaxDistance[1]=u,this.shadeTexChanged=!0}applyHighlightOptions(o,e){this.shadeTex||(this.shadeTex=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](o,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SHADE_TEXTURE_SIZE"],height:1,samplingMode:9729})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SHADE_TEXTURE_SIZE"],1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_1"]),e.setUniform2fv("u_minMaxDistance",this.minMaxDistance)}destroy(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)}}/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../definitions.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parameters.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js");
/* harmony import */ var _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shaders/HighlightPrograms.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class m{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(r,e){r.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_0"]),r.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_10__["ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),r.bindVAO(this._resources.quadVAO),r.drawArrays(5,0,4),r.bindVAO()}finalBlur(r,e){r.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_0"]),r.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_10__["RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),r.bindVAO(this._resources.quadVAO),r.drawArrays(5,0,4),r.bindVAO()}renderHighlight(r,e,s){r.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_0"]),r.useProgram(this._resources.highlightProgram),s.applyHighlightOptions(r,this._resources.highlightProgram),r.bindVAO(this._resources.quadVAO),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.drawArrays(5,0,4),r.bindVAO()}_initialize(o,u,m){this._width=u,this._height=m;const g=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"].createVertex(o,35044,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),d=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](o,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!1},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!1}]},{geometry:g}),l=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_11__["highlight"]),_=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blur"]);l.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_0"]),l.setUniform1i("u_shade",_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_1"]),l.setUniform1f("u_sigma",_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SIGMA"]),_.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_9__["TEXTURE_BINDING_HIGHLIGHT_0"]),_.setUniform1f("u_sigma",_parameters_js__WEBPACK_IMPORTED_MODULE_10__["SIGMA"]),this._resources={quadGeometry:g,quadVAO:d,highlightProgram:l,blurProgram:_}}setup(r,e,s){this._resources?(this._width=e,this._height=s):this._initialize(r,e,s)}}/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s(s,t,i){const h=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](s,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:t,height:i,samplingMode:9729});return[h,new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"](s,{colorTarget:0,depthStencilTarget:2},h)]}class t{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,r,t){this._width=r,this._height=t;const[i,h]=s(e,r,t),[o,u]=s(e,r,t);this._resources={sharedBlur1Tex:i,sharedBlur1Fbo:h,sharedBlur2Tex:o,sharedBlur2Fbo:u}}setup(e,r,s){!this._resources||this._width===r&&this._height===s||this.dispose(),this._resources||this._initialize(e,r,s)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, HIGHLIGHT_SIZING, RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, SHADE_TEXTURE_SIZE, SIGMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_SIZING", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADE_TEXTURE_SIZE", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGMA", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o=1,t=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n=256,e={outlineWidth:.7,outerHaloWidth:.7,innerHaloWidth:.7,outlinePosition:0};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: EffectManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectManager", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const t={colorize:async()=>new((await __webpack_require__.e(/*! import() */ 183).then(__webpack_require__.bind(null, /*! ./Colorize.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Colorize.js"))).Colorize),blur:async()=>new((await __webpack_require__.e(/*! import() */ 182).then(__webpack_require__.bind(null, /*! ./Blur.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Blur.js"))).Blur),bloom:async()=>new((await __webpack_require__.e(/*! import() */ 181).then(__webpack_require__.bind(null, /*! ./Bloom.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Bloom.js"))).Bloom),opacity:async()=>new((await __webpack_require__.e(/*! import() */ 185).then(__webpack_require__.bind(null, /*! ./Opacity.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Opacity.js"))).Opacity),"drop-shadow":async()=>new((await __webpack_require__.e(/*! import() */ 184).then(__webpack_require__.bind(null, /*! ./DropShadow.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/DropShadow.js"))).DropShadow)};class s{constructor(e){this._requestRender=e,this._effectMap=new Map,this._effectPromiseMap=new Map}dispose(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear(),this._effectPromiseMap.clear()}getPostProcessingEffects(t){if(!t||0===t.length)return[];const s=[];for(const o of t){const t=e(o.type),r=this._effectMap.get(t);r?s.push({postProcessingEffect:r,effect:o}):this._enablePostProcessingEffect(t)}return s}async _enablePostProcessingEffect(e){const t=await this._loadPostProcessingEffect(e);this._requestRender&&(this._effectMap.set(e,t),this._requestRender.requestRender())}async _loadPostProcessingEffect(e){return this._effectPromiseMap.has(e)||this._effectPromiseMap.set(e,t[e]()),this._effectPromiseMap.get(e)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js ***!
  \**************************************************************************************************************/
/*! exports provided: getFontDecorationTop, getFullyQualifiedFontName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontDecorationTop", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullyQualifiedFontName", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e=-26,r=-18;function t(e){const r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}function n(e){const r=c(e)+i(e);return t(e.family)+(r.length>0?r:"-regular")}function s(t){switch(t){case"underline":return e;case"line-through":return r}return NaN}function c(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function i(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblic":return"-italic"}return""}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/packingUtils.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/packingUtils.js ***!
  \*****************************************************************************************************************/
/*! exports provided: packFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],o=e(new Uint8ClampedArray([255,255,255,255]));function r(n,r,e=0){const c=f(n,0,o);for(let o=0;o<4;o++)r[e+o]=Math.floor(256*u(c*t[o]))}function e(t,o=0){let r=0;for(let e=0;e<4;e++)r+=t[o+e]*n[e];return r}function f(t,n,o){return t<n?n:t>o?o:t}function u(t){return t-Math.floor(t)}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "../../node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s{constructor(r,e){var s;this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].MAP,this._targetFn=e.target,this.effects=e.effects||[],this.enableDefaultDraw=null!=(s=e.enableDefaultDraw)?s:()=>!0}render(r){const{context:e,profiler:t}=r,s=this._targetFn(),a=this.drawPhase&r.drawPhase;if(t.recordPassStart(this.name),a){this.enableDefaultDraw()&&this._doRender(r,s),t.recordPassEnd();for(const a of this.effects){if(!a.enable())continue;const o=a.apply;t.recordPassStart(this.name+"."+o.name),t.recordBrushStart(o.name);const n=a.args&&a.args(),{x:i,y:d,width:f,height:h}=e.getViewport(),c=e.getBoundFramebufferObject();o.bind(r,n),this._doRender(r,s,o.defines),o.draw(r,n),o.unbind(r,n),e.bindFramebuffer(c),e.setViewport(i,d,f,h),t.recordBrushEnd(),t.recordPassEnd()}}}_doRender(t,s,a){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s))if(Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["isArrayLike"])(s)){for(const r of s)if(r.visible)for(const e of this.brushes)t.profiler.recordBrushStart(e.name),e.prepareState(t,r,a),e.draw(t,r,a),t.profiler.recordBrushEnd()}else for(const r of this.brushes)t.profiler.recordBrushStart(r.name),r.prepareState(t,s,a),r.draw(t,s,a),t.profiler.recordBrushEnd()}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js ***!
  \****************************************************************************************************************************/
/*! exports provided: bitBlit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitBlit", function() { return e; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js ***!
  \**************************************************************************************************************************/
/*! exports provided: blend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blend", function() { return t; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=e=>e.replace("-","_").toUpperCase(),a=e=>`#define ${r(e)}\n`,t={attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:r=>({vertexShader:a(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.vert"),fragmentShader:a(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.frag")})};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js ***!
  \******************************************************************************************************************************/
/*! exports provided: blur, highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return t; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js ***!
  \******************************************************************************************************************************/
/*! exports provided: createMagnifierProgram, magnifierProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMagnifierProgram", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnifierProgramTemplate", function() { return t; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("magnifier/magnifier.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__["resolveIncludes"])("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function i(e){return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(e,t)}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: createProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramTemplate", function() { return o; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},s=r=>{const s={};for(const t in r){s[e(t)]=r[t]}return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__["glslifyDefineMap"])(s)},o=(t,e,o)=>{const n=t+t.substring(t.lastIndexOf("/")),a=e+e.substring(e.lastIndexOf("/"));return{attributes:o,shaders:t=>({vertexShader:s(t)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])(`${n}.vert`),fragmentShader:s(t)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])(`${a}.frag`)})}};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js ***!
  \****************************************************************************************************************************/
/*! exports provided: stencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencil", function() { return r; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js ***!
  \*********************************************************************************************************************/
/*! exports provided: keyFromSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFromSymbol", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return e.mosaicHash?e.mosaicHash:JSON.stringify(e)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "../../node_modules/@arcgis/core/views/2d/layers/graphics/BaseGraphicContainer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{renderChildren(r){this.attributeView.bindTextures(r.context),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP&&this._renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT&&this._renderHighlight(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Handles.js */ "../../node_modules/@arcgis/core/core/Handles.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "../../node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "../../node_modules/@arcgis/core/core/watchUtils.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/enums.js */ "../../node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "../../node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../engine/DisplayObject.js */ "../../node_modules/@arcgis/core/views/2d/engine/DisplayObject.js");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/webgl/enums.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../engine/webgl/shaders/MagnifierPrograms.js */ "../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js");
/* harmony import */ var _magnifier_resources_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../magnifier/resources.js */ "../../node_modules/@arcgis/core/views/magnifier/resources.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class f extends _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_15__["DisplayObject"]{constructor(){super(),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_1__["default"],this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles.destroy(),this._handles=null,this._disposeRenderResources(),this._resourcesTask&&(this._resourcesTask.abort(),this._resourcesTask=null)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(e,"version",(()=>{this.visible=e.visible&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.position)&&e.size>0,this.requestRender()})),e.watch(["mask","overlay"],(()=>this._reloadResources())),e.watch("size",(()=>{this._disposeRenderResources(),this.requestRender()}))])}doRender(e){var r;const i=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__["WGLDrawPhase"].MAP||!this._canRender())return;this._updateResources(e);const a=this._magnifier;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(a.position))return;const o=e.pixelRatio,n=a.size*o,l=1/a.factor,h=Math.ceil(l*n);this._readbackTexture.resize(h,h);const{size:m}=e.state,u=o*m[0],d=o*m[1],p=.5*h,_=.5*h,g=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(o*a.position.x,p,u-p-1),f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(d-o*a.position.y,_,d-_-1);i.setBlendingEnabled(!0);const b=g-p,x=f-_,y=this._readbackTexture;i.bindTexture(y,0),i.gl.copyTexImage2D(y.descriptor.target,0,y.descriptor.pixelFormat,b,x,h,h,0);const k=null==(r=this.background)?void 0:r.color,T=k?[k.a*k.r/255,k.a*k.g/255,k.a*k.b/255,k.a]:[1,1,1,1],v=(g+a.offset.x*o)/u*2-1,R=(f-a.offset.y*o)/d*2-1,w=n/u*2,j=n/d*2,A=this._program;i.bindVAO(this._vertexArrayObject),i.bindTexture(this._overlayTexture,6),i.bindTexture(this._maskTexture,7),i.useProgram(A),A.setUniform4fv("u_background",T),A.setUniform1i("u_readbackTexture",0),A.setUniform1i("u_overlayTexture",6),A.setUniform1i("u_maskTexture",7),A.setUniform4f("u_drawPos",v,R,w,j),A.setUniform1i("u_maskEnabled",a.maskEnabled?1:0),A.setUniform1i("u_overlayEnabled",a.overlayEnabled?1:0),i.setStencilTestEnabled(!1),i.setColorMask(!0,!0,!0,!0),i.drawArrays(5,0,4),i.bindVAO()}_canRender(){return this.mask&&this.overlay&&null!=this._magnifier}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._magnifier)?this._magnifier.maskUrl:null,s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._magnifier)?this._magnifier.overlayUrl:null;this._resourcesTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createTask"])((async a=>{const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(r)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s)?Object(_magnifier_resources_js__WEBPACK_IMPORTED_MODULE_18__["loadMagnifierResources"])(a):null,n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(r)?Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,{responseType:"image",signal:a}).then((e=>e.data)):o.then((e=>e.mask)),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(s)?Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,{responseType:"image",signal:a}).then((e=>e.data)):o.then((e=>e.overlay)),[h,m]=await Promise.all([n,l]);this.mask=h,this.overlay=m,this._disposeRenderResources(),this.requestRender()}))}_disposeRenderResources(){this._readbackTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._readbackTexture),this._overlayTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._overlayTexture),this._maskTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._maskTexture),this._vertexArrayObject=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._vertexArrayObject),this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["disposeMaybe"])(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const r=e.context;this._resourcePixelRatio=e.pixelRatio;const s=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=Object(_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_17__["createMagnifierProgram"])(r);const t={geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},i=new Uint16Array([0,1,0,0,1,1,1,0]),a=_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_17__["magnifierProgramTemplate"].attributes;this._vertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_14__["default"](r,a,t,{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_7__["default"].createVertex(r,35044,i)}),this.overlay.width=s,this.overlay.height=s,this._overlayTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_13__["default"](r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0,preMultiplyAlpha:!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["isSVG"])(this.overlay.src)||!e.driverTestResult.svgAlwaysPremultipliesAlpha},this.overlay),this.mask.width=s,this.mask.height=s,this._maskTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_13__["default"](r,{target:3553,pixelFormat:6406,internalFormat:6406,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask);const o=1/this._magnifier.factor;this._readbackTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_13__["default"](r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:Math.ceil(o*s),height:Math.ceil(o*s)})}}/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/mapViewDeps.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/mapViewDeps.js ***!
  \***************************************************************************************************/
/*! exports provided: Stage, LabelManager, GraphicsView2D, GraphicContainer, MapViewNavigation, MagnifierView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_Stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Stage.js */ "../../node_modules/@arcgis/core/views/2d/engine/Stage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _engine_Stage_js__WEBPACK_IMPORTED_MODULE_0__["Stage"]; });

/* harmony import */ var _LabelManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelManager.js */ "../../node_modules/@arcgis/core/views/2d/LabelManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelManager", function() { return _LabelManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/graphics/GraphicsView2D.js */ "../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsView2D", function() { return _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/graphics/GraphicContainer.js */ "../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicContainer", function() { return _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/MapViewNavigation.js */ "../../node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapViewNavigation", function() { return _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magnifier/MagnifierView2D.js */ "../../node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagnifierView2D", function() { return _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/



/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Viewpoint.js */ "../../node_modules/@arcgis/core/Viewpoint.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Accessor.js */ "../../node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geometry/Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../viewpointUtils.js */ "../../node_modules/@arcgis/core/views/2d/viewpointUtils.js");
/* harmony import */ var _ZoomBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ZoomBox.js */ "../../node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js");
/* harmony import */ var _actions_Pan_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/Pan.js */ "../../node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js");
/* harmony import */ var _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/Pinch.js */ "../../node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js");
/* harmony import */ var _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/Rotate.js */ "../../node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=10,v=1,w=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]}),g=[0,0],d=250;let _=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(t){super(t),this._endTimer=null,this.animationManager=null}initialize(){this.pan=new _actions_Pan_js__WEBPACK_IMPORTED_MODULE_11__["default"]({navigation:this}),this.rotate=new _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_13__["default"]({navigation:this}),this.pinch=new _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_12__["default"]({navigation:this}),this.zoomBox=new _ZoomBox_js__WEBPACK_IMPORTED_MODULE_10__["default"]({view:this.view,navigation:this})}destroy(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(d)}async zoom(t,i=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(i):this.zoomOut(i);this.setViewpoint(i,t,0,[0,0])}async zoomIn(t){const i=this.view,o=i.constraints.snapToNextScale(i.scale);return this._zoomToScale(o,t)}async zoomOut(t){const i=this.view,o=i.constraints.snapToPreviousScale(i.scale);return this._zoomToScale(o,t)}setViewpoint(t,i,o,n){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,i,o,n),this.end()}setViewpointImmediate(t,i=0,o=[0,0],n=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,i,o)}continousRotateClockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["rotateBy"])(t,t,-v)}))}continousRotateCounterclockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["rotateBy"])(t,t,v)}))}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-l,0])}continousPanRight(){this._continuousPan([l,0])}continousPanUp(){this._continuousPan([0,l])}continousPanDown(){this._continuousPan([0,-l])}stop(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const i=this.get("view.viewpoint");this.animationManager.animateContinous(i,(i=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["translateBy"])(i,i,t),this.view.constraints.constrainByGeometry(i)}))}_startTimer(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-this._lastEventTimestamp;t<d?this._endTimer=this._startTimer(t):this._set("interacting",!1)}),t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:i,right:o,top:n,bottom:e}}=this.view;return g[0]=.5*(t[0]-o+i),g[1]=.5*(t[1]-e+n),g}async _zoomToScale(t,i=this._getDefaultAnchor()){const{view:o}=this,{constraints:n,scale:e,viewpoint:s,size:a,padding:r}=o,m=n.canZoomInTo(t),h=n.canZoomOutTo(t);if(!(t<e&&!m||t>e&&!h))return Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["padAndScaleAndRotateBy"])(w,s,t/e,0,i,a,r),n.constrainByGeometry(w),o.goTo(w,{animate:!0})}_scaleRotateTranslateViewpoint(t,i,o,n,e){const{view:s}=this,{size:a,padding:m,constraints:h,scale:p,viewpoint:u}=s,l=p*o,v=h.canZoomInTo(l),w=h.canZoomOutTo(l);return(o<1&&!v||o>1&&!w)&&(o=1),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["translateBy"])(u,u,e),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_9__["padAndScaleAndRotateBy"])(t,u,o,n,i,a,m),h.constrainByGeometry(t)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"animationManager",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Boolean,readOnly:!0})],_.prototype,"interacting",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"pan",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"pinch",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"rotate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],_.prototype,"zoomBox",void 0),_=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.navigation.MapViewNavigation")],_);var T=_;/* harmony default export */ __webpack_exports__["default"] = (T);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "../../node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "../../node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../input/InputManager.js */ "../../node_modules/@arcgis/core/views/input/InputManager.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a={container:"esri-zoom-box__container",overlay:"esri-zoom-box__overlay",background:"esri-zoom-box__overlay-background",box:"esri-zoom-box__outline"},n={zoom:"Shift",counter:"Ctrl"};let h=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this._handles&&this._handles.forEach((t=>{t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[n.zoom],(t=>this._handleDrag(t,1)),_input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__["ViewEventPriorities"].INTERNAL),t.on("drag",[n.zoom,n.counter],(t=>this._handleDrag(t,-1)),_input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__["ViewEventPriorities"].INTERNAL))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,r,i){this._box.x=t,this._box.y=e,this._box.width=r,this._box.height=i,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,o,s){const a=this.view,n=a.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createScreenPoint"])(t+.5*i,e+.5*o));let h=Math.max(i/a.width,o/a.height);-1===s&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:n,scale:a.scale*h})}_updateBox(t,e,r,i){const o=this._boxShape;o.setAttributeNS(null,"x",""+t),o.setAttributeNS(null,"y",""+e),o.setAttributeNS(null,"width",""+r),o.setAttributeNS(null,"height",""+i),o.setAttributeNS(null,"class",a.box)}_updateBackground(t,e,r,i){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,r,i,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=a.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),r.setAttributeNS(null,"class",a.background);const i=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttributeNS(null,"class",a.overlay),o.appendChild(r),o.appendChild(i),this._container.appendChild(o),this._backgroundShape=r,this._boxShape=i,this._overlay=o}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,r,i,o,s){const a=t+r,n=e+i;return"M 0 0 L "+o+" 0 L "+o+" "+s+" L 0 "+s+" ZM "+t+" "+e+" L "+t+" "+n+" L "+a+" "+n+" L "+a+" "+e+" Z"}_handleDrag(t,e){const r=t.x,i=t.y,o=t.origin.x,s=t.origin.y;let a,n,h,l;switch(r>o?(a=o,h=r-o):(a=r,h=o-r),i>s?(n=s,l=i-s):(n=i,l=s-i),t.action){case"start":this._start();break;case"update":this._update(a,n,h,l);break;case"end":this._end(a,n,h,l,e)}t.stopPropagation()}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:r,height:i}=this._box;this._updateBox(t,e,r,i),this._updateBackground(t,e,r,i),this._rafId=requestAnimationFrame(this._redraw)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],h.prototype,"navigation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],h.prototype,"view",null),h=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.navigation.ZoomBox")],h);var l=h;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "../../node_modules/@arcgis/core/Viewpoint.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "../../node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "../../node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "../../node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "../../node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../viewpointUtils.js */ "../../node_modules/@arcgis/core/views/2d/viewpointUtils.js");
/* harmony import */ var _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../navigation/PanPlanarMomentumEstimator.js */ "../../node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__["PanPlanarMomentumEstimator"](500,6,.92),this.momentum=null,this.tmpMomentum=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),this.momentumFinished=!1,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"],scale:0,rotation:0}),this.watch("momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this.previousDrag=i}update(t,i){this.addToEstimator(i);let o=i.center.x,m=i.center.y;const e=this.previousDrag;o=e?e.center.x-o:-o,m=e?m-e.center.y:m,t.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(this.viewpoint,t.viewpoint,[o||0,m||0]),this.previousDrag=i}end(t,i){this.addToEstimator(i);const o=t.navigation.momentumEnabled;this.momentum=o?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()}addToEstimator(t){const i=t.center.x,o=t.center.y,e=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["createScreenPointArray"])(-i,o),s=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__["f"])(-i,o,0);this.momentumEstimator.add(e,s,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((i,o)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime);const m=.001*o;if(!this.momentumFinished){const o=this.momentum.valueDelta(this.animationTime,m);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__["a"])(this.tmpMomentum,this.momentum.direction,o),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(i,i,this.tmpMomentum),t.constraints.constrainByGeometry(i)}this.animationTime+=m}))}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],c.prototype,"momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],c.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],c.prototype,"navigation",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.2d.navigation.actions.Pan")],c);var d=c;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "../../node_modules/@arcgis/core/Viewpoint.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "../../node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "../../node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "../../node_modules/@arcgis/core/chunks/vec2f64.js");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewpointUtils.js */ "../../node_modules/@arcgis/core/views/2d/viewpointUtils.js");
/* harmony import */ var _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../navigation/RotationMomentumEstimator.js */ "../../node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js");
/* harmony import */ var _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../navigation/ZoomMomentumEstimator.js */ "../../node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._rotationMomentumEstimator=new _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_12__["RotationMomentumEstimator"](.6,.15,.95),this._rotationDirection=1,this._zoomDirection=1,this._zoomMomentumEstimator=new _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__["ZoomMomentumEstimator"],this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"],scale:0,rotation:0}),this.watch("_momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)}update(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);const i=o.angle,s=o.radius,e=o.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),m=Math.abs(s-this._startRadius),a=this._startRadius/s;if(this._previousRadius){const r=s/this._previousRadius;let h=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=m-n>0),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):h=0,this.addToZoomEstimator(o,a),this.navigation.setViewpoint([e.x,e.y],1/r,h,[this._previousCenter.x-e.x,e.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=e}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,o){this._rotationMomentumEstimator.add(t,.001*o)}addToZoomEstimator(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)}canZoomIn(t){const o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i}canZoomOut(t){const o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((o,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),u=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),p=.001*i;if(this._momentumFinished=e&&u,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,p))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,p)):1;const e=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])(),u=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])();if(this._previousCenter){Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(e,this._previousCenter.x,this._previousCenter.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["getPaddingScreenTranslation"])(u,t.size,t.padding),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["i"])(e,e,u);const{constraints:a,scale:p}=t,c=p*s;s<1&&!a.canZoomInTo(c)?(s=p/a.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!a.canZoomOutTo(c)&&(s=p/a.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["scaleAndRotateBy"])(o,t.viewpoint,s,i,e,t.size),t.constraints.constrainByGeometry(o)}}this._animationTime+=p}))}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"_momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"navigation",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.navigation.actions.Pinch")],l);var _=l;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "../../node_modules/@arcgis/core/Viewpoint.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "../../node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "../../node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "../../node_modules/@arcgis/core/chunks/vec2f64.js");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewpointUtils.js */ "../../node_modules/@arcgis/core/views/2d/viewpointUtils.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])(),d=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])();let j=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(e){super(e),this._previousCenter=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__["a"])(),this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"],scale:0,rotation:0})}begin(e,t){this.navigation.begin(),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(this._previousCenter,t.center.x,t.center.y)}update(e,t){const{state:{size:o,padding:r}}=e;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(u,t.center.x,t.center.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["getAnchor"])(d,o,r),e.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["rotateBy"])(this.viewpoint,e.state.paddedViewState.viewpoint,Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__["angleBetween"])(d,this._previousCenter,u)),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["c"])(this._previousCenter,u)}end(){this.navigation.end()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"navigation",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.actions.Rotate")],j);var h=j;/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/magnifier/resources.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/magnifier/resources.js ***!
  \********************************************************************************************************/
/*! exports provided: loadMagnifierResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMagnifierResources", function() { return s; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../support/requestImageUtils.js */ "../../node_modules/@arcgis/core/support/requestImageUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s(s){const r=__webpack_require__.e(/*! import() */ 190).then(__webpack_require__.bind(null, /*! ./mask-svg.js */ "../../node_modules/@arcgis/core/views/magnifier/mask-svg.js")),i=__webpack_require__.e(/*! import() */ 191).then(__webpack_require__.bind(null, /*! ./overlay-svg.js */ "../../node_modules/@arcgis/core/views/magnifier/overlay-svg.js")),o=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await r).default,{signal:s}),e=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await i).default,{signal:s}),m={mask:await o,overlay:await e};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["throwIfAborted"])(s),m}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js ***!
  \************************************************************************************************************************/
/*! exports provided: FilteredFiniteDifference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredFiniteDifference", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t){this.gain=t}update(t){if(this.hasLastValue){const e=this.computeDelta(t);this.updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return t-this.lastValue}updateDelta(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/navigation/Momentum.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/navigation/Momentum.js ***!
  \********************************************************************************************************/
/*! exports provided: Momentum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Momentum", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(o**i-1)/Math.log(o)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/navigation/MomentumEstimator.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/navigation/MomentumEstimator.js ***!
  \*****************************************************************************************************************/
/*! exports provided: MomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentumEstimator", function() { return s; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "../../node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "../../node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Momentum.js */ "../../node_modules/@arcgis/core/views/navigation/Momentum.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s{constructor(t=2.5,i=.01,s=.95,l=12){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.maxVelocity=l,this.enabled=!0,this.value=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.8),this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.3)}add(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(t,e,s){return new _Momentum_js__WEBPACK_IMPORTED_MODULE_2__["Momentum"](t,e,s)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js ***!
  \**************************************************************************************************************************/
/*! exports provided: PanPlanarMomentum, PanPlanarMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentum", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentumEstimator", function() { return h; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec3.js */ "../../node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "../../node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "../../node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Momentum.js */ "../../node_modules/@arcgis/core/views/navigation/Momentum.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class c extends _Momentum_js__WEBPACK_IMPORTED_MODULE_3__["Momentum"]{constructor(e,t,i,s,n){super(e,t,i),this.sceneVelocity=s,this.direction=n}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class h{constructor(e=300,t=12,i=.84){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),this.screen=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4)],this.scene=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6)],this.tmpDirection=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}add(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(s,n,r){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["l"])(this.tmpDirection);h>0&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this.tmpDirection,this.tmpDirection,1/h);const a=h/this.time.filteredDelta;return new c(s,n,r,a,this.tmpDirection)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js ***!
  \*************************************************************************************************************************/
/*! exports provided: RotationMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationMomentumEstimator", function() { return a; });
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MomentumEstimator.js */ "../../node_modules/@arcgis/core/views/navigation/MomentumEstimator.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__["MomentumEstimator"]{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e)}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s}super.add(t,a)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js ***!
  \*********************************************************************************************************************/
/*! exports provided: ZoomMomentum, ZoomMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentum", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentumEstimator", function() { return s; });
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Momentum.js */ "../../node_modules/@arcgis/core/views/navigation/Momentum.js");
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentumEstimator.js */ "../../node_modules/@arcgis/core/views/navigation/MomentumEstimator.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends _Momentum_js__WEBPACK_IMPORTED_MODULE_0__["Momentum"]{constructor(e,t,r){super(e,t,r)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__["MomentumEstimator"]{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,s){return new r(e,t,s)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/webgl/ProgramCache.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>Object(_programUtils_js__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e)}return a.programs.get(r)}return null}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js ***!
  \********************************************************************************************************************/
/*! exports provided: testSVGPremultipliedAlpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSVGPremultipliedAlpha", function() { return n; });
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Program.js */ "../../node_modules/@arcgis/core/views/webgl/Program.js");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n(n){const a=new Image;if(a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,await a.decode(),!n.gl)return!0;const s=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"](n,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),p=_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"].createVertex(n,35044,new Uint16Array([0,0,1,0,0,1,1,1])),m=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](n,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:p}),d=new _Program_js__WEBPACK_IMPORTED_MODULE_2__["Program"](n,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));n.useProgram(d);const g=new _Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](n,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},a);n.bindTexture(g,0),d.setUniform1i("u_texture",0);const c=n.getBoundFramebufferObject(),{x:u,y:f,width:w,height:l}=n.getViewport();n.bindFramebuffer(s),n.setViewport(0,0,1,1),n.bindVAO(m),n.drawArrays(5,0,4);const v=new Uint8Array(4);return s.readPixels(0,0,1,1,6408,5121,v),d.dispose(),m.dispose(!1),p.dispose(),s.dispose(),g.dispose(),n.setViewport(u,f,w,l),n.bindFramebuffer(c),a.src="",255===v[0]}


/***/ })

};;
//# sourceMappingURL=39.render-page.js.map