exports.ids = [17];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/aaBoundingBox.js ***!
  \*************************************************************************************************************/
/*! exports provided: NEGATIVE_INFINITY, POSITIVE_INFINITY, ZERO, allFinite, center, contains, containsPoint, containsPointWithMargin, create, depth, diameter, empty, equals, expandWithAABB, expandWithBuffer, expandWithNestedArray, expandWithOffset, expandWithRect, expandWithVec3, fromExtent, fromMinMax, fromRect, fromValues, getMax, getMin, height, intersects, intersectsClippingArea, is, isPoint, maximumDimension, offset, scale, set, setMax, setMin, size, toExtent, toRect, width, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEGATIVE_INFINITY", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITIVE_INFINITY", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allFinite", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsPoint", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsPointWithMargin", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depth", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diameter", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithAABB", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithBuffer", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithNestedArray", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithOffset", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithRect", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithVec3", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromExtent", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMinMax", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRect", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMax", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMin", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersects", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsClippingArea", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumDimension", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMax", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMin", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExtent", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRect", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return v; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Extent.js */ "../../node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aaBoundingRect.js */ "../../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(n){return n}function a(n=H){return i([n[0],n[1],n[2],n[3],n[4],n[5]])}function u(n,t,r,i,u,e,m=a()){return m[0]=n,m[1]=t,m[2]=r,m[3]=i,m[4]=u,m[5]=e,m}function e(n,t=a()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.zmin,t[3]=n.xmax,t[4]=n.ymax,t[5]=n.zmax,t}function m(n,r){const i=isFinite(n[2])||isFinite(n[5]);return new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"](i?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:r}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:r})}function o(n,t,r=a()){return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r}function f(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function c(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[3]=Math.max(n[3],t[2]),n[4]=Math.max(n[4],t[3])}function h(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function M(n,t,r=0,i=t.length/3){let a=n[0],u=n[1],e=n[2],m=n[3],o=n[4],f=n[5];for(let c=0;c<i;c++)a=Math.min(a,t[r+3*c]),u=Math.min(u,t[r+3*c+1]),e=Math.min(e,t[r+3*c+2]),m=Math.max(m,t[r+3*c]),o=Math.max(o,t[r+3*c+1]),f=Math.max(f,t[r+3*c+2]);n[0]=a,n[1]=u,n[2]=e,n[3]=m,n[4]=o,n[5]=f}function x(n,t,r,i){n[0]=Math.min(n[0],n[0]+t),n[3]=Math.max(n[3],n[3]+t),n[1]=Math.min(n[1],n[1]+r),n[4]=Math.max(n[4],n[4]+r),n[2]=Math.min(n[2],n[2]+i),n[5]=Math.max(n[5],n[5]+i)}function s(n,t,r){const i=t.length;let a=n[0],u=n[1],e=n[2],m=n[3],o=n[4],f=n[5];if(r)for(let c=0;c<i;c++){const n=t[c];a=Math.min(a,n[0]),u=Math.min(u,n[1]),e=Math.min(e,n[2]),m=Math.max(m,n[0]),o=Math.max(o,n[1]),f=Math.max(f,n[2])}else for(let c=0;c<i;c++){const n=t[c];a=Math.min(a,n[0]),u=Math.min(u,n[1]),m=Math.max(m,n[0]),o=Math.max(o,n[1])}n[0]=a,n[1]=u,n[2]=e,n[3]=m,n[4]=o,n[5]=f}function l(n){for(let t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0}function I(n){return n[0]>=n[3]?0:n[3]-n[0]}function y(n){return n[1]>=n[4]?0:n[4]-n[1]}function N(n){return n[2]>=n[5]?0:n[5]-n[2]}function g(n){const t=I(n),r=N(n),i=y(n);return Math.sqrt(t*t+r*r+i*i)}function p(n,t=[0,0,0]){return t[0]=n[0]+I(n)/2,t[1]=n[1]+y(n)/2,t[2]=n[2]+N(n)/2,t}function F(n,t=[0,0,0]){return t[0]=I(n),t[1]=y(n),t[2]=N(n),t}function z(n){return Math.max(I(n),N(n),y(n))}function E(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function T(n,t,r){return t[0]>=n[0]-r&&t[1]>=n[1]-r&&t[2]>=n[2]-r&&t[0]<=n[3]+r&&t[1]<=n[4]+r&&t[2]<=n[5]+r}function b(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function j(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function R(t,r){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||j(t,r)}function V(n,t,r,i,a=n){return a[0]=n[0]+t,a[1]=n[1]+r,a[2]=n[2]+i,a[3]=n[3]+t,a[4]=n[4]+r,a[5]=n[5]+i,a}function Y(n,t,r=n){const i=n[0]+I(n)/2,a=n[1]+y(n)/2,u=n[2]+N(n)/2;return r[0]=i+(n[0]-i)*t,r[1]=a+(n[1]-a)*t,r[2]=u+(n[2]-u)*t,r[3]=i+(n[3]-i)*t,r[4]=a+(n[4]-a)*t,r[5]=u+(n[5]-u)*t,r}function _(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function d(n,t){return t[0]=n[3],t[1]=n[4],t[2]=n[5],t}function q(n,t,r=n){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==n&&(r[3]=n[3],r[4]=n[4],r[5]=n[5]),r}function w(n,t,r=n){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==n&&(r[0]=n[0],r[1]=n[1],r[2]=n[2]),n}function A(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function B(n){return n?A(n,D):a(D)}function G(n,t){return t||(t=Object(_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function O(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function P(n){return 6===n.length}function S(n){return 0===I(n)&&0===y(n)&&0===N(n)}function k(t,r,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r))return t===r;if(!P(t)||!P(r))return!1;if(i){for(let n=0;n<t.length;n++)if(!i(t[n],r[n]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return!1;return!0}function v(n,t,r,i,a,e){return u(n,t,r,i,a,e,J)}const C=i([-1/0,-1/0,-1/0,1/0,1/0,1/0]),D=i([1/0,1/0,1/0,-1/0,-1/0,-1/0]),H=i([0,0,0,0,0,0]),J=a();


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/intersects.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/intersects.js ***!
  \**********************************************************************************************************/
/*! exports provided: extentIntersectsExtent, extentIntersectsMultipoint, extentIntersectsPoint, extentIntersectsPolygon, extentIntersectsPolyline, getFeatureExtentIntersector, isSelfIntersecting, segmentIntersects, getExtentIntersector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtentIntersector", function() { return n; });
/* harmony import */ var _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersectsBase.js */ "../../node_modules/@arcgis/core/geometry/support/intersectsBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsExtent", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsExtent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsMultipoint", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsMultipoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsPoint", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsPolygon", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extentIntersectsPolyline", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatureExtentIntersector", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["getFeatureExtentIntersector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelfIntersecting", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["isSelfIntersecting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "segmentIntersects", function() { return _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["segmentIntersects"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n){return"mesh"===n?_intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["extentIntersectsExtent"]:Object(_intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__["getFeatureExtentIntersector"])(n)}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/graphics/contains.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/graphics/contains.js ***!
  \*******************************************************************************************************/
/*! exports provided: polygonContainsCoords, polygonContainsMultipoint, polygonContainsPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsCoords", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsMultipoint", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsPoint", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f)}return f}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js ***!
  \***********************************************************************************************************************/
/*! exports provided: canQueryWithRBush, checkSpatialQuerySupport, getSpatialQueryOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canQueryWithRBush", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpatialQuerySupport", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpatialQueryOperator", function() { return v; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/contains.js */ "../../node_modules/@arcgis/core/geometry/support/contains.js");
/* harmony import */ var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/intersects.js */ "../../node_modules/@arcgis/core/geometry/support/intersects.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "../../node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "../../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contains.js */ "../../node_modules/@arcgis/core/layers/graphics/contains.js");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../featureConversionUtils.js */ "../../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "../../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectionSupport.js */ "../../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/@arcgis/core/layers/graphics/data/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return!0===S.spatialRelationship[e]}function g(e){return!0===S.queryGeometry[Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(e)]}function j(e){return!0===S.layerGeometry[e]}function h(){return Promise.all(/*! import() */[__webpack_require__.e(20), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ../../../geometry/geometryEngineJSON.js */ "../../node_modules/@arcgis/core/geometry/geometryEngineJSON.js"))}function v(e,n,l,y,c){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromPolygon"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__["default"],n,!1,!1);return Promise.resolve((r=>Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["polygonContainsPoint"])(e,!1,!1,r)))}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(n)&&"esriGeometryMultipoint"===l){const r=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromPolygon"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__["default"],n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["polygonContainsMultipoint"])(r,!1,!1,e,y,c)))}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["extentContainsPoint"])(n,Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,e))));if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["extentContainsMultipoint"])(n,Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,e))));if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(n)&&"esriSpatialRelIntersects"===e){const e=Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_2__["getExtentIntersector"])(l);return Promise.resolve((r=>e(n,Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t(Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getGeometry"])(l,y,c,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,"Unsupported query spatial relationship",{query:r});if(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(o.spatialReference)&&Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(i)){if(!g(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,"Unsupported query geometry type",{query:r});if(!j(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](c,"Unsupported layer geometry type",{query:r});if(r.outSR)return Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["checkProjectionSupport"])(r.geometry&&r.geometry.spatialReference,r.outSR)}}}function I(e){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(e))return!0;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(e)){for(const r of e.rings){if(5!==r.length)return!1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1}return!0}return!1}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/graphics/data/timeSupport.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/graphics/data/timeSupport.js ***!
  \***************************************************************************************************************/
/*! exports provided: getTimeExtent, getTimeOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeExtent", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOperator", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o))}));else{const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u))}))}return{start:r,end:i}}function n(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e(r,i,o,s,a):u(r,i||o,s,a)}function e(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return(null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return()=>!1}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/graphics/data/utils.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/graphics/data/utils.js ***!
  \*********************************************************************************************************/
/*! exports provided: QUERY_ENGINE_EMPTY_RESULT, cleanFromGeometryEngine, getCentroid, getGeometry, normalizeFilter, normalizeQuery, normalizeQueryLike, transformCentroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ENGINE_EMPTY_RESULT", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFromGeometryEngine", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentroid", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeometry", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeFilter", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQuery", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQueryLike", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformCentroid", function() { return N; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/jsonMap.js */ "../../node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "../../node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/extentUtils.js */ "../../node_modules/@arcgis/core/geometry/support/extentUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "../../node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "../../node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "../../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../centroid.js */ "../../node_modules/@arcgis/core/layers/graphics/centroid.js");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../featureConversionUtils.js */ "../../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "../../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectionSupport.js */ "../../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const w=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),j=Object.freeze({}),U=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],M=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],F=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],G={esriGeometryPoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPoint"],esriGeometryPolyline:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPolyline"],esriGeometryPolygon:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPolygon"],esriGeometryMultipoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToMultipoint"]};function N(e,t,r,i=e.hasZ,o=e.hasM){const n=e.hasZ&&i,s=e.hasM&&o;if(r){const a=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["quantizeOptimizedGeometry"])(F,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,o);return Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPoint"])(a,n,s)}return Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToPoint"])(t,n,s)}function O(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=Object(_centroid_js__WEBPACK_IMPORTED_MODULE_7__["getCentroidOptimizedGeometry"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],t.geometry,e.hasZ,e.hasM)),N(e,t.centroid,r)):null}function _(e,t,r,i,o,n,s=t,a=r){const l=t&&s,m=r&&a,u=i?"coords"in i?i:i.geometry:null;if(!u)return null;if(o){let i=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["generalizeOptimizedGeometry"])(M,u,t,r,e,o,s,a);return n&&(i=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["quantizeOptimizedGeometry"])(F,i,l,m,e,n)),G[e](i,l,m)}if(n){const i=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["quantizeOptimizedGeometry"])(F,u,t,r,e,n,s,a);return G[e](i,l,m)}return Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["removeZMValues"])(U,u,t,r,s,a),G[e](U,l,m)}async function J(e,t,r){const{outFields:i,orderByFields:o,groupByFieldsForStatistics:n,outStatistics:s}=e;if(i)for(let a=0;a<i.length;a++)i[a]=i[a].trim();if(o)for(let a=0;a<o.length;a++)o[a]=o[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(s)for(let a=0;a<s.length;a++)s[a].onStatisticField&&(s[a].onStatisticField=s[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),v(e,t,r)}async function P(e,t,r){return v(e,t,r)}async function v(e,r,s){if(!e)return null;let{where:a}=e;if(e.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||r&&r===a)&&(e.where=null),!e.geometry)return e;let l=await Z(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;l=Object(_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__["getGeometryExtent"])(l),l.spatialReference=t}e.geometry=l,await Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["checkProjectionSupport"])(l.spatialReference,s);const m=(await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__["normalizeCentralMeridian"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__["fromJSON"])(l)))[0];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(m))throw j;const c=m.toJSON(),u=await Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["project"])(c,c.spatialReference,s);if(!u)throw j;return u.spatialReference=s,e.geometry=u,e}async function Z(e){const{geometry:t,distance:i,units:o}=e;if(null==i||"vertexAttributes"in t)return t;const n=t.spatialReference,m=o?w.fromJSON(o):Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getUnitString"])(n),c=n&&(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["isGeographic"])(n)||Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["isWebMercator"])(n))?t:await Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["checkProjectionSupport"])(n,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["WGS84"]).then((()=>Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["project"])(t,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__["WGS84"])));return(await b())(c.spatialReference,c,i,m)}async function b(){return(await Promise.all(/*! import() */[__webpack_require__.e(20), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, /*! ../../../geometry/geometryEngineJSON.js */ "../../node_modules/@arcgis/core/geometry/geometryEngineJSON.js"))).geodesicBuffer}function x(e){return e&&z in e?JSON.parse(JSON.stringify(e,B)):e}const z="_geVersion",B=(e,t)=>e!==z?t:void 0;


/***/ })

};;
//# sourceMappingURL=17.render-page.js.map