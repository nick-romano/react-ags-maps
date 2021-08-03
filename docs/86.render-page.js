exports.ids = [86];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/core/byteSizeEstimations.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
  \*******************************************************************************************************/
/*! exports provided: estimateAttributesObjectSize, estimateFixedArraySize, estimateNumberByteSize, estimateStringByteSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateAttributesObjectSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateFixedArraySize", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateNumberByteSize", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStringByteSize", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t();break;case"boolean":r+=4}}return r}function r(n,t){return 32+n.length*t}


/***/ }),

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

/***/ "../../node_modules/@arcgis/core/geometry/support/quantizationUtils.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*****************************************************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return y; });
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonUtils.js */ "../../node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i(n){return n&&"upperLeft"===n.originPosition}const o=(n,t,r)=>[t,r],l=(n,t,r)=>[t,r,n[2]],a=(n,t,r)=>[t,r,n[2],n[3]];function m(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}}function c(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;let r,e,u,o,l,a;return i(n)?(r=n.translate[0],e=n.translate[1],u=n.scale[0]):(r=n.extent.xmin,e=n.extent.ymax,u=n.tolerance),i(t)?(o=t.translate[0],l=t.translate[1],a=t.scale[0]):(o=t.extent.xmin,l=t.extent.ymax,a=t.tolerance),r===o&&e===l&&u===a}function s({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function f({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function x(n,t,r){const e=[];let u,i,o,l;for(let a=0;a<r.length;a++){const m=r[a];a>0?(o=s(n,m[0]),l=f(n,m[1]),o===u&&l===i||(e.push(t(m,o-u,l-i)),u=o,i=l)):(u=s(n,m[0]),i=f(n,m[1]),e.push(t(m,u,i)))}return e.length>0?e:null}function h(n,t,r){return t[0]=s(n,r[0]),t[3]=f(n,r[1]),t[2]=s(n,r[2]),t[1]=f(n,r[3]),t}function I(n,t,r,e){return x(n,r?e?a:l:e?l:o,t)}function g(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let o=0;o<t.length;o++){const r=x(n,i,t[o]);r&&r.length>=3&&u.push(r)}return u.length?u:null}function N(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let o=0;o<t.length;o++){const r=x(n,i,t[o]);r&&r.length>=2&&u.push(r)}return u.length?u:null}function p({scale:n,translate:t},r){return r*n[0]+t[0]}function y({scale:n,translate:t},r){return t[1]-r*n[1]}function z(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,i]=n.scale;let o=p(n,r[0][0]),l=y(n,r[0][1]);e[0]=t(r[0],o,l);for(let a=1;a<r.length;a++){const n=r[a];o+=n[0]*u,l-=n[1]*i,e[a]=t(n,o,l)}return e}function T(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=z(n,t,r[u]);return e}function M(n,t,r){return r?(t[0]=p(n,r[0]),t[1]=y(n,r[3]),t[2]=p(n,r[2]),t[3]=y(n,r[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,r,e){return z(n,r?e?a:l:e?l:o,t)}function P(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function b(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function F(n,t,r){let[e,u]=r[0],i=Math.min(e,t[0]),o=Math.min(u,t[1]),l=Math.max(e,t[2]),a=Math.max(u,t[3]);for(let m=1;m<r.length;m++){const[n,t]=r[m];e+=n,u+=t,n<0&&(i=Math.min(i,e)),n>0&&(l=Math.max(l,e)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let r=0;r<t.length;r++)F(n,n,t[r]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,r,e,u){return t.xmin=s(n,r.xmin),t.ymin=f(n,r.ymin),t.xmax=s(n,r.xmax),t.ymax=f(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function G(n,t,r,e,u){return t.points=I(n,r.points,e,u),t}function L(n,t,r,e,u){return t.x=s(n,r.x),t.y=f(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function O(n,t,r,e,u){const i=g(n,r.rings,e,u);return i?(t.rings=i,t):null}function S(n,t,r,e,u){const i=N(n,r.paths,e,u);return i?(t.paths=i,t):null}function d(i,o){return i&&o?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(o)?L(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(o)?S(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(o)?O(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultipoint"])(o)?G(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(o)?w(i,{},o,!1,!1):null:null}function j(n,t,r,e,u){return t.xmin=p(n,r.xmin),t.ymin=y(n,r.ymin),t.xmax=p(n,r.xmax),t.ymax=y(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function U(n,t,r,e,u){return t.points=E(n,r.points,e,u),t}function k(n,t,r,e,u){return t.x=p(n,r.x),t.y=y(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function q(n,t,r,e,u){return t.rings=b(n,r.rings,e,u),t}function v(n,t,r,e,u){return t.paths=P(n,r.paths,e,u),t}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js ***!
  \**************************************************************************************************************************/
/*! exports provided: equals, pointEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointEquals", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function t(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function r(e,n){return!!f(e.spatialReference,n.spatialReference)&&(e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m)}function a(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&t(e.paths,n.paths))}function i(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&t(e.rings,n.rings))}function u(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!f(e.spatialReference,t.spatialReference)&&n(e.points,t.points))}function s(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&(e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax))}function f(e,n){return e===n||e&&n&&e.equals(n)}function l(n,t){if(n===t)return!0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return!1;if(n.type!==t.type)return!1;switch(n.type){case"point":return r(n,t);case"extent":return s(n,t);case"polyline":return a(n,t);case"polygon":return i(n,t);case"multipoint":return u(n,t);case"mesh":return!1;default:return}}function c(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t)if(e[a]!==n[a])return!1;return!0}function o(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!l(e.geometry,n.geometry)&&!!c(e.attributes,n.attributes))}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js ***!
  \*****************************************************************************************************************/
/*! exports provided: equals, DehydratedFeatureClass, DehydratedFeatureSetClass, computeAABB, computeAABR, estimateGeometryObjectSize, estimateSize, expandAABB, expandAABR, fromFeatureSetJSON, fromJSONGeometry, getObjectId, hasGeometry, hasVertices, isFeatureGeometry, makeDehydratedPoint, numVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureClass", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetClass", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABB", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABR", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateGeometryObjectSize", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateSize", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAABB", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAABR", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromFeatureSetJSON", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSONGeometry", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectId", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasGeometry", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVertices", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureGeometry", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDehydratedPoint", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numVertices", function() { return w; });
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/byteSizeEstimations.js */ "../../node_modules/@arcgis/core/core/byteSizeEstimations.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "../../node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/uid.js */ "../../node_modules/@arcgis/core/core/uid.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "../../node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "../../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "../../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/quantizationUtils.js */ "../../node_modules/@arcgis/core/geometry/support/quantizationUtils.js");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/typeUtils.js */ "../../node_modules/@arcgis/core/geometry/support/typeUtils.js");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/Field.js */ "../../node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dehydratedFeatureComparison.js */ "../../node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__["equals"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class j{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function M(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.geometry)}function k(e){return Object(_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_9__["isFeatureGeometryType"])(e.type)}class N{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function z(e){const s=_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_9__["featureGeometryTypeKebabDictionary"].fromJSON(e.geometryType),r=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e.spatialReference),n=e.transform,a=e.features.map((o=>{const a=F(o,s,r,e.objectIdFieldName),i=a.geometry;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(i)&&n)switch(i.type){case"point":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizePoint"])(n,i,i,i.hasZ,i.hasM);break;case"multipoint":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizeMultipoint"])(n,i,i,i.hasZ,i.hasM);break;case"polygon":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizePolygon"])(n,i,i,i.hasZ,i.hasM);break;case"polyline":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizePolyline"])(n,i,i,i.hasZ,i.hasM);break;case"extent":case"mesh":a.geometry=i}return a}));return{geometryType:s,features:a,spatialReference:r,fields:e.fields?e.fields.map((e=>_support_Field_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(e))):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function F(e,t,s,r){return{uid:Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_4__["generateUID"])(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:I(e.geometry,t,s),visible:!0}}function I(e,t,s){if(!e)return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function v(e,t,s,r){return{x:e,y:t,z:s,hasZ:null!=s,hasM:!1,spatialReference:r,type:"point"}}function R(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return 0;let t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":{let s=0;const r=2+(e.hasZ?1:0)+(e.hasM?1:0),n="polyline"===e.type?e.paths:e.rings;for(const e of n)s+=e.length;t+=8*s*r+64,t+=128*s,t+=34,t+=32*(n.length+1);break}case"multipoint":{const s=2+(e.hasZ?1:0)+(e.hasM?1:0),r=e.points.length;t+=8*r*s+64,t+=128*r,t+=34,t+=32;break}case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.position),t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.normal),t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.uv),t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.tangent)}return t}function A(t){let s=32;return s+=Object(_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_0__["estimateAttributesObjectSize"])(t.attributes),s+=3,s+=8+R(t.geometry),s}function w(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function S(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function T(e,t){switch(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["empty"])(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.paths[s],e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.rings[s],e.hasZ);break;case"multipoint":Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function B(e,t){T(e,P),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithAABB"])(t,P)}function J(e,t){switch(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["empty"])(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expandWithNestedArray"])(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expandWithNestedArray"])(t,e.rings[s]);break;case"multipoint":Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expandWithNestedArray"])(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function L(e,t){J(e,U),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expand"])(t,U)}function O(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}const P=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),U=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["create"])();


/***/ }),

/***/ "../../node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js ***!
  \****************************************************************************************************************************/
/*! exports provided: DehydratedFeatureSetParserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetParserContext", function() { return m; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/compilerUtils.js */ "../../node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/uid.js */ "../../node_modules/@arcgis/core/core/uid.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "../../node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/graphics/dehydratedFeatures.js */ "../../node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layers/graphics/featureConversionUtils.js */ "../../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layers/support/Field.js */ "../../node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _zscale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zscale.js */ "../../node_modules/@arcgis/core/rest/query/operations/zscale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u(t,e){return e}function l(t,e,r,s){switch(r){case 0:return f(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?f(t,e+s,1):y(t,e+s,1)}}function c(t,e,r,s){switch(r){case 2:return f(t,e,2);default:return l(t,e,r,s)}}function d(t,e,r,s){switch(r){case 2:return f(t,e,3);default:return l(t,e,r,s)}}function p(t,e,r,s){switch(r){case 3:return f(t,e,3);default:return c(t,e,r,s)}}function f({translate:t,scale:e},r,s){return t[s]+r*e[s]}function y({translate:t,scale:e},r,s){return t[s]-r*e[s]}class m{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_3__["DehydratedFeatureSetClass"]}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=Object(_zscale_js__WEBPACK_IMPORTED_MODULE_6__["getGeometryZScaler"])(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"]}addField(t,e){t.fields.push(_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e));const r=t.fields.map((t=>t.name));this.AttributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const s in e.attributes){const t=e.attributes[s];"string"==typeof t&&t.length>r&&(e.attributes[s]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,o=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["unquantizeOptimizedGeometry"])(r.clone(),r,!1,!1,this.transform),a=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertToGeometry"])(o,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint"}a.type=h,t.queryGeometryType=s,t.queryGeometry=a}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;case"mesh":case"extent":break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_3__["DehydratedFeatureClass"](Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_1__["generateUID"])(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(e,r),o=t[t.length-1];0===r&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?p:e?c:r?d:l}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rest_query_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rest/query/operations/pbfDehydratedFeatureSet.js */ "../../node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js");
/* harmony import */ var _rest_query_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rest/query/operations/pbfQueryUtils.js */ "../../node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{_parseFeatureQuery(t){const s=Object(_rest_query_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__["parsePBFFeatureQuery"])(t.buffer,new _rest_query_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_0__["DehydratedFeatureSetParserContext"](t.options)),o={...s,spatialReference:s.spatialReference.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function s(){return new t}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ })

};;
//# sourceMappingURL=86.render-page.js.map