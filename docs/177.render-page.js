exports.ids = [177];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/layers/support/RasterWorker.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/RasterWorker.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PixelBlock.js */ "../../node_modules/@arcgis/core/layers/support/PixelBlock.js");
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rasterFormats/RasterCodec.js */ "../../node_modules/@arcgis/core/layers/support/rasterFormats/RasterCodec.js");
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rasterFunctions/pixelUtils.js */ "../../node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js");
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ "../../node_modules/@arcgis/core/renderers/support/RasterSymbolizer.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/Extent.js */ "../../node_modules/@arcgis/core/geometry/Extent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n{async decode(e){const o=await Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_2__["decode"])(e.data,e.options);return o&&o.toJSON()}symbolize(r){r.pixelBlock=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(r.pixelBlock),r.extent=r.extent?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(r.extent):null;const o=this.symbolizer.symbolize(r);return Promise.resolve(o&&o.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=_renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(r){const o=this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(o&&o.toJSON())}estimateStatisticsHistograms(r){const s=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__["estimateStatisticsHistograms"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(r.srcPixelBlock));return Promise.resolve(s)}split(r){const o=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__["split"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return o&&o.forEach(((e,r)=>{o.set(r,null==e?void 0:e.toJSON())})),Promise.resolve(o)}async mosaicAndTransform(r){const o=r.srcPixelBlocks.map((r=>r?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"](r):null)),s=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__["mosaic"])(o,r.srcMosaicSize,null,null,r.alignmentInfo);if(!r.coefs)return s&&s.toJSON();const l=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__["approximateTransform"])(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return l&&l.toJSON()}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

};;
//# sourceMappingURL=177.render-page.js.map