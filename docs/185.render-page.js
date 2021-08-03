exports.ids = [185];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Opacity.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Opacity.js ***!
  \************************************************************************************************************************************/
/*! exports provided: Opacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opacity", function() { return t; });
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
class t{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:l,painter:o}=e,{amount:a}=r,n=l.gl,h=this._layerFBOTexture;l.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),l.setClearColor(0,0,0,0),l.clear(n.COLOR_BUFFER_BIT),o.blitTexture(l,h,9728,a)}_createOrResizeResources(t,r,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}))}}


/***/ })

};;
//# sourceMappingURL=185.render-page.js.map