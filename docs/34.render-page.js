exports.ids = [34];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e)}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r=null){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this.trim(),this.updateTimer()}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r)}updateMaxSize(t){this._size=t,this.trim()}empty(){this._cachedBlocks.clear(),this.clearTimer()}getCurrentSize(){return this._cachedBlocks.size}updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this.clearTimer()}),this._interval)}trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0])}clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js ***!
  \**************************************************************************************************************************/
/*! exports provided: decreaseRefCount, deleteBlock, deleteRaster, getBlock, getRasterId, putBlock, register, unregister, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseRefCount", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlock", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRaster", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlock", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRasterId", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putBlock", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return g; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EphemeralBlockCache.js */ "../../node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js");
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rasterFunctions/rasterProjectionHelper.js */ "../../node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=new Map,a=new _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__["default"];function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function s(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(c.has(e)){const t=c.get(e);return t.push(n),t.length-1}return c.set(e,[n]),0}function u(e,t){if(c.has(e)){const n=c.get(e);n[t]=null,n.some((e=>null!=e))||c.delete(e)}}function f(e){c.delete(e)}function h(e,t,n){if(!c.has(e))return null==t?a.decreaseRefCount(e,n):0;const o=c.get(e);if(null==o[t])return a.decreaseRefCount(e,n);const r=o[t].cache;if(r.has(n)){const e=r.get(n);if(e.refCount--,0===e.refCount){r.delete(n);for(let e=0;e<o.length;e++)o[e]&&o[e].cache.has(n)&&o[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function m(e,t,n){if(!c.has(e))return null==t?a.getBlock(e,n):null;const o=c.get(e);if(null==o[t]){for(let e=0;e<o.length;e++)if(o[e]&&o[e].cache.has(n)){const t=o[e].cache.get(n);return t.refCount++,t.block}return a.getBlock(e,n)}const r=o[t].cache;if(r.has(n)){const e=r.get(n);return e.refCount++,e.block}for(let l=0;l<o.length;l++)if(l!==t&&o[l]&&o[l]&&o[l].cache.has(n)){const e=o[l].cache.get(n);return e.refCount++,r.set(n,e),e.block}return null}function x(e,t,n,o,r=null){if(!c.has(e))return void(null==t&&a.putBlock(e,n,o,r));const l=c.get(e);if(null==l[t])return void a.putBlock(e,n,o,r);const i={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:r};o.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),l[t].cache.set(n,i)}function d(e,t,n){if(!c.has(e))return void(null==t&&a.deleteBlock(e,n));const o=c.get(e);null!=o[t]?o[t].cache.delete(n):a.deleteBlock(e,n)}function y(e,t){if(!c.has(e))return null;const n=c.get(e);return null==n[t]?null:n[t]}function g(t,c,a,i,s,u,f=null){const h=y(t,c),m=h.extent,{cache:x,rasterInfo:d}=h;if(m&&m.xmin===a.xmin&&m.xmax===a.xmax&&m.ymin===a.ymin&&m.ymax===a.ymax)return;const g=a.clone().normalize(),{spatialReference:p,transform:k}=d,M=new Set;for(let y=0;y<g.length;y++){const t=g[y];if(t.xmax-t.xmin<=i||t.ymax-t.ymin<=i)continue;let c=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["projectExtent"])(t,p,f);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(k)&&(c=k.inverseTransform(c));const a=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__["default"]({x:i,y:i,spatialReference:t.spatialReference});if(null==s&&!(s=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["projectResolution"])(a,p,t,f)))return;const{pyramidLevel:h,pyramidResolution:m,excessiveReading:x}=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["snapPyramid"])(s,d,u||"closest");if(x)return;const{storageInfo:R}=d,{origin:C}=R,j={x:Math.max(0,Math.floor((c.xmin-C.x)/m.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/m.y))},v=Math.ceil((c.xmax-c.xmin)/m.x-.1),B=Math.ceil((c.ymax-c.ymin)/m.y-.1),b=h>0?R.pyramidBlockWidth:R.blockWidth,w=h>0?R.pyramidBlockHeight:R.blockHeight,$=1,I=Math.max(0,Math.floor(j.x/b)-$),H=Math.max(0,Math.floor(j.y/w)-$),E=Math.floor((j.x+v-1)/b)+$,P=Math.floor((j.y+B-1)/w)+$;for(let e=H;e<=P;e++)for(let t=I;t<=E;t++)M.add(`${h}/${e}/${t}`)}x.forEach(((e,t)=>{if(!M.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),h.extent={xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js ***!
  \************************************************************************************************************************************/
/*! exports provided: computeProjectedScales, defaultGridSpacing, getDefaultDatumTransformationForDataset, getProjectionOffsetGrid, getRasterDatasetAlignmentInfo, getWorldWrapCount, load, projectExtent, projectPoint, projectResolution, snapExtent, snapPyramid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeProjectedScales", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridSpacing", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultDatumTransformationForDataset", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionOffsetGrid", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRasterDatasetAlignmentInfo", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorldWrapCount", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectResolution", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapExtent", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapPyramid", function() { return C; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "../../node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/projection.js */ "../../node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ "../../node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "../../node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m=5e-4,u=function(e,n){const t=(e.isWGS84||e.isWebMercator)&&(n.isWGS84||n.isWebMercator);return!(e.equals(n)||t)},f=function(e,n){const t=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,o=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4;return[Math.abs(t-e[2*n.rows+2]),Math.abs(o-e[2*n.rows+3])]},p={3395:20037508.342789244,3410:17334193.943686873,3832:3339584.723798206,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,8858:7396237.374497803,8859:2465412.4581659334,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53025:7276828.3848298555,53031:10384677.558821043,53034:20015086.79602057,53036:7389443.187332862,53037:2463147.729110953,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54025:7311399.09166516,54031:10396310.810074743,54034:20037508.342789244,54050:808820.9223376509,54053:1920897.3915568967,54079:20037508.342789244,54080:20037508.342789244,54099:13524439.768288724,54100:20037508.342789244,54101:20037508.342789244,102038:4297258.582585486,102299:5013965.117483125},h=32;async function y(){if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])()||!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isSupported"])())return null;await Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["load"])()}function M(n,t,r){if(!u(n.spatialReference,t))return null;if(!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");return r?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["getTransformation"])(t,n.spatialReference,n):Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["getTransformation"])(n.spatialReference,t,n)}function g(n,t,r,i=null){if(n.spatialReference.equals(t))return n;const a=u(n.spatialReference,t);if(a&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");const x=r.center,m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({xmin:x.x-n.x/2,xmax:x.x+n.x/2,ymin:x.y-n.y/2,ymax:x.y+n.y/2,spatialReference:n.spatialReference}),f=a?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(m,t,i):Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__["project"])(m,t);if(null==f)return null;return{x:f.xmax-f.xmin,y:f.ymax-f.ymin}}function d(e,n=.01){return Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(e)?n/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(e):0}function w(n,t,r=null,i=!0){const a=n.spatialReference;if(a.equals(t))return n;const c=u(a,t);if(c&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");const x=c?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(n,t,r):Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__["project"])(n,t);if(x&&i&&t.isGeographic){const[e,t]=v(a,!0),o=d(a);o&&null!=e&&null!=t&&(Math.abs(n.x-e)<o&&Math.abs(180-x.x)<m?x.x-=360:Math.abs(n.x-t)<o&&Math.abs(180+x.x)<m&&(x.x+=360))}return x}function R(e){const t=S(e[0].spatialReference);if(e.length<2||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t))return e[0];let{xmin:o,xmax:r,ymin:i,ymax:a}=e[0];for(let n=1;n<e.length;n++){const o=e[n];r=o.xmax+t*n,i=Math.min(i,o.ymin),a=Math.max(a,o.ymax)}return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({xmin:o,xmax:r,ymin:i,ymax:a,spatialReference:e[0].spatialReference})}function j(e,t,o=null,r=!0){if(e.spatialReference.equals(t))return e;const i=W(e),a=S(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a)||0===i)return b(e,t,o,r);return R(e.clone().normalize().map((e=>b(e,t,o,r))))}function b(n,t,r=null,i=!0){const a=n.spatialReference;if(a.equals(t))return n;const c=u(a,t);if(c&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectExtent","projection engine is not loaded");const f=c?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(n,t,r):Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__["project"])(n,t);let[p,h]=v(a,!0);if(f&&i&&a.isWebMercator&&t.isGeographic&&null!=p&&null!=h){const e=.001,o=1e3;if(Math.abs(n.xmin-p)<e&&Math.abs(h-n.xmax)>o&&Math.abs(180-f.xmax)<m){f.xmin=-180;const e=[];e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmax,n.ymin,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmax,(n.ymin+n.ymax)/2,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmax,n.ymax,a));const o=e.map((e=>w(e,t,r))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));f.xmax=Math.max.apply(null,o)}if(Math.abs(n.xmax-h)<e&&Math.abs(p-n.xmin)>o&&Math.abs(180+f.xmin)<m){f.xmax=180;const e=[];e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmin,n.ymin,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmin,(n.ymin+n.ymax)/2,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmin,n.ymax,a));const o=e.map((e=>w(e,t,r))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));f.xmin=Math.min.apply(null,o)}}[p,h]=v(t,!0);const y=d(t);return y&&null!=p&&null!=h&&(Math.abs(f.xmin-p)<y&&(f.xmin=p),Math.abs(f.xmax-h)<y&&(f.xmax=h)),f}function S(e,n=!1){const t=n?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*p[e.wkid]||null}function v(e,t=!1){const o=[],r=S(e,t);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)&&(o.push(-r/2),o.push(r/2)),o}function N(e,n,t,o){let r=(e-n)/t;return r-Math.floor(r)!=0?r=Math.floor(r):o&&(r-=1),r}function W(e,t=!1){const o=S(e.spatialReference);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o))return 0;const r=t?0:-(o/2);return N(e.xmax,r,o,!0)-N(e.xmin,r,o,!1)}function z(e){const t=e.storageInfo.origin.x,o=S(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=o/2,{nativePixelSize:i,storageInfo:a,extent:s}=e,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:x}=a;let m=i.x;const u=[],f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.transform)&&"gcs-shift"===e.transform.type,p=t+r,h=f?o-t:r-t;for(let n=0;n<=l;n++){const e=(s.xmax-t)/m/c,n=e-Math.floor(e)==0?e:Math.ceil(e),r=(o/2-t)/m/c,i=r-Math.floor(r)==0?r:Math.ceil(r),a=Math.floor(p/m/c),l=Math.round(p/m)%c,f=(c-Math.round(h/m)%c)%c;u.push({resolutionX:m,blockWidth:c,datsetColumnCount:n,worldColumnCountFromOrigin:i,leftMargin:l,rightPadding:f,originColumnOffset:a}),m*=x}return{originX:t,halfWorldWidth:r,pyramidsInfo:u,hasGCSSShiftTransform:f}}function G(t,r,i,a=null,s=null,l=!1,c=[h,h]){if(u(t.spatialReference,r.spatialReference)&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(t&&r&&i))return null;const{xmin:m,ymin:p,xmax:y,ymax:M}=t,g=t.spatialReference,d=r.spatialReference,R=S(d);l=l||"gcs-shift"===(null==s?void 0:s.type);const j={x:c[0]*i.x,y:c[1]*i.y},b={cols:Math.ceil((y-m)/j.x-.1)+1,rows:Math.ceil((M-p)/j.y-.1)+1},v=j.x,N=j.y,W=[];let z,G=!1;for(let e=0;e<b.cols;e++){const t=[];for(let o=0;o<b.rows;o++){let i=w(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:m+v*e,y:M-N*o,spatialReference:g}),d,a);s&&(i=s.inverseTransform(i)),t.push(i),e>0&&l&&i&&z[o]&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(R)&&i.x<z[o].x&&(i.x+=R),i?(W.push((i.x-r.xmin)/(r.xmax-r.xmin)),W.push((r.ymax-i.y)/(r.ymax-r.ymin))):(W.push(NaN),W.push(NaN),G=!0)}z=t}const P=f(W,b),C=new Float32Array((b.cols-1)*(b.rows-1)*2*6),L=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),k=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<b.cols-1;e++){for(let n=0;n<b.rows-1;n++){let t=e*b.rows*2+2*n;const o=W[t],r=W[t+1],i=W[t+2],a=W[t+3];t+=2*b.rows;const s=W[t],l=W[t+1],c=W[t+2],x=W[t+3];let m=0,u=12*(n*(b.cols-1)+e);for(let e=0;e<3;e++)C[u++]=L[m++]*o+L[m++]*i+L[m++]*c;m=0;for(let e=0;e<3;e++)C[u++]=L[m++]*r+L[m++]*a+L[m++]*x;m=0;for(let e=0;e<3;e++)C[u++]=k[m++]*o+k[m++]*s+k[m++]*c;m=0;for(let e=0;e<3;e++)C[u++]=k[m++]*r+k[m++]*l+k[m++]*x}if(G)for(let e=0;e<C.length;e++)isNaN(C[e])&&(C[e]=-1)}return{offsets:W,error:P,coefficients:C,spacing:c,size:[b.cols-1,b.rows-1]}}function P(e){const n=e.clone().normalize();return 1===n.length?n[0]:R(n)}function C(e,t,o){const{storageInfo:r,pixelSize:i}=t;let a,s=!1;const{pyramidResolutions:l}=r;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l)&&l.length){const n=(e.x+e.y)/2,r=l[l.length-1],c=(r.x+r.y)/2,m=(i.x+i.y)/2;if(n<=m)a=0;else if(n>=c)a=l.length,s=n/c>8;else{let e,t=m;for(let r=1;r<=l.length;r++){if(e=(l[r-1].x+l[r-1].y)/2,n<=e){n===e?a=r:"down"===o?(a=r-1,s=n/t>8):a="up"===o||n-t>e-n||n/t>2?r:r-1;break}t=e}}const u=0===a?i:l[a-1];return{pyramidLevel:a,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:s}}const c=Math.log(e.x/i.x)/Math.LN2,m=Math.log(e.y/i.y)/Math.LN2,u=t.storageInfo.maximumPyramidLevel||0;a="down"===o?Math.floor(Math.min(c,m)):"up"===o?Math.ceil(Math.max(c,m)):Math.round((c+m)/2),a<0?a=0:a>u&&(s=a>u+3,a=u);const f=2**a;return{pyramidLevel:a,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:f*t.nativePixelSize.x,y:f*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function L(e,n,o=512,r=!0){const{extent:i,spatialReference:a,pixelSize:s}=e,l=g(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:s.x,y:s.y,spatialReference:a}),n,i);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(l.x+l.y)/2,m=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(n),u=c*m*96*39.37,f=n.isGeographic?256/o*295828763.7958547:256/o*591657527.591555;let p=!1;const h=j(i,n);r&&(n.isGeographic||n.isWebMercator)&&(p=h.xmin*h.xmax<0);let y,M=u;const d=1.001;if(p){M=f;const e=n.isGeographic?1341104507446289e-21:.29858214164761665,t=e*(96*m*39.37),o=n.isGeographic?4326:3857;y=g(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:e,y:e,spatialReference:{wkid:o}}),a,h),y.x*=M/t,y.y*=M/t}else{y={x:s.x,y:s.y};const n=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let t=0;for(;M<f*(d/2)&&t<n;)t++,M*=2,y.x*=2,y.y*=2;Math.max(M,f)/Math.min(M,f)<=d&&(M=f)}const w=[M],R=[{x:y.x,y:y.y}],b=70.5310735,S=Math.min(b,u)/d;for(;M>=S;)M/=2,y.x/=2,y.y/=2,w.push(M),R.push({x:y.x,y:y.y});return{projectedPixelSize:l,scales:w,srcResolutions:R,isCustomTilingScheme:!p}}


/***/ })

};;
//# sourceMappingURL=34.render-page.js.map