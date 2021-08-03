exports.ids = [38];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/portal/support/geometryServiceUtils.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \******************************************************************************************************************/
/*! exports provided: create, projectGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectGeometry", function() { return n; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "../../node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "../../node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ "../../node_modules/@arcgis/core/rest/support/ProjectParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(o=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl){return new(0,(await __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ../../tasks/GeometryService.js */ "../../node_modules/@arcgis/core/tasks/GeometryService.js"))).default)({url:_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl})}if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new(0,(await __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ../../tasks/GeometryService.js */ "../../node_modules/@arcgis/core/tasks/GeometryService.js"))).default)({url:n.helperServices.geometry.url})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a){const l=await i(n,a),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"];s.geometries=[e],s.outSpatialReference=t;const c=await l.project(s,{signal:a});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ })

};;
//# sourceMappingURL=38.render-page.js.map