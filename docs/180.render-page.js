exports.ids = [180];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js ***!
  \********************************************************************************************************************/
/*! exports provided: previewWebStyleSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewWebStyleSymbol", function() { return i; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "../../node_modules/@arcgis/core/core/screenUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,{responseType:"image"}).then((t=>{const e=n(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):e.fetchSymbol().then((t=>i(t,h)))}function n(t,i){const n=!/\\.svg$/i.test(t.src)&&i&&i.disableUpsampling,h=Math.max(t.width,t.height);let s=i&&null!=i.maxSize?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,i&&null!=i.size?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.size):h);if(o!==h){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=o,t.height=o/e):(t.width=o*e,t.height=o)}return t}


/***/ })

};;
//# sourceMappingURL=180.render-page.js.map