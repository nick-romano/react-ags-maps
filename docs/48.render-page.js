exports.ids = [48];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/views/webgl.js":
/*!******************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/webgl.js ***!
  \******************************************************************************************/
/*! exports provided: BufferObject, FramebufferObject, Program, ProgramCache, Renderbuffer, RenderingContext, ShaderCompiler, Texture, VertexArrayObject, createProgram, glslifyDefineMap, createContextOrErrorHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/BufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferObject", function() { return _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/FramebufferObject.js */ "../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramebufferObject", function() { return _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/Program.js */ "../../node_modules/@arcgis/core/views/webgl/Program.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__["Program"]; });

/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/ProgramCache.js */ "../../node_modules/@arcgis/core/views/webgl/ProgramCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramCache", function() { return _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/Renderbuffer.js */ "../../node_modules/@arcgis/core/views/webgl/Renderbuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderbuffer", function() { return _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/RenderingContext.js */ "../../node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderingContext", function() { return _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl/ShaderCompiler.js */ "../../node_modules/@arcgis/core/views/webgl/ShaderCompiler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShaderCompiler", function() { return _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl/Texture.js */ "../../node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webgl/VertexArrayObject.js */ "../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VertexArrayObject", function() { return _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webgl/programUtils.js */ "../../node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_9__["createProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glslifyDefineMap", function() { return _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_9__["glslifyDefineMap"]; });

/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webgl/context-util.js */ "../../node_modules/@arcgis/core/views/webgl/context-util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContextOrErrorHTML", function() { return _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__["createContextOrErrorHTML"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/



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

/***/ "../../node_modules/@arcgis/core/views/webgl/ShaderCompiler.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/webgl/ShaderCompiler.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this.read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this.resolve(e.path,t),a=e.start+e.length})),h+=r.slice(a),t.set(e,h),h}read(e){return this.readFile(e)}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "../../node_modules/@arcgis/core/views/webgl/programUtils.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/views/webgl/programUtils.js ***!
  \*******************************************************************************************************/
/*! exports provided: createProgram, glslifyDefineMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glslifyDefineMap", function() { return n; });
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program.js */ "../../node_modules/@arcgis/core/views/webgl/Program.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(e){let n="";for(const t in e){const o=e[t];if("boolean"==typeof o)o&&(n+=`#define ${t}\n`);else if("number"==typeof o)n+=`#define ${t} ${o.toFixed()}\n`;else if("object"==typeof o){const e=o.options;let r=0;for(const t in e)n+=`#define ${e[t]} ${(r++).toFixed()}\n`;n+=`#define ${t} ${e[o.value]}\n`}}return n}function t(n,t,o,r){o=o||{},r=r||"";const f="function"==typeof t.shaders?t.shaders(o):t.shaders;return new _Program_js__WEBPACK_IMPORTED_MODULE_0__["Program"](n,r+f.vertexShader,r+f.fragmentShader,t.attributes)}


/***/ })

};;
//# sourceMappingURL=48.render-page.js.map