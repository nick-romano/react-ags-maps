exports.ids = [68];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js ***!
  \******************************************************************************************************************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const s=this._scenes.indexOf(e);s>=0&&this._scenes.splice(s,1)}forEachScene(e){this._scenes.forEach(e)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return r; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _bufferview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferview.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this.buffer=i}addBufferView(e,r,t){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new _bufferview_js__WEBPACK_IMPORTED_MODULE_1__["BufferView"](this,this.gltf,e,r,t);return this.bufferViews.push(f),f}getByteOffset(e){let i=0;for(const r of this.bufferViews){if(r===e)return i;i+=r.size}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const r of this.bufferViews){if(e&&r===e)return i;i.push(r.finalized)}return i}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),i=new ArrayBuffer(e);let r=0;for(const t of this.bufferViews)t.writeOutToBuffer(i,r),r+=t.size;return i}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((i=>{i(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["eachAlways"])(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const i of this.bufferViews)e+=i.size;return e}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: BufferView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferView", function() { return i; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i{constructor(e,s,i,r,n){this.buffer=e,this.componentType=i,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:n};const a=this.getElementSize();a>=4&&n!==_types_js__WEBPACK_IMPORTED_MODULE_1__["TargetBuffer"].ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),s.bufferViews.push(this.bufferView)}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType(),i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get size(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}writeOutToBuffer(e,t=this.size){const s=new DataView(e,t),i=this.sizeComponentType();for(let r=0;r<this.data.length;++r)this.writeValue(s,r*i,this.data[r])}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView vlaues asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.byteLength;++s)this.data.push(t[s]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType();this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType(),s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let r=0;r<this.accessorMin.length;++r)"number"!=typeof this.accessorMin[r]&&(this.accessorMin[r]=0),"number"!=typeof this.accessorMax[r]&&(this.accessorMax[r]=0);const i={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const t=this.bufferView;return new Promise((t=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),t(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["eachAlways"])(s))})).then((()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType()}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}numComponentsForDataType(){switch(this.dataType){case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].SCALAR:return 1;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].VEC2:return 2;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].VEC3:return 3;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].VEC4:case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].MAT2:return 4;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].MAT3:return 9;case _types_js__WEBPACK_IMPORTED_MODULE_1__["AttributeType"].MAT4:return 16}}writeValue(e,t,s){switch(this.componentType){case 5120:e.setInt8(t,s);break;case 5121:e.setUint8(t,s);break;case 5122:e.setInt16(t,s,!0);break;case 5123:e.setUint16(t,s,!0);break;case 5125:e.setUint32(t,s,!0);break;case 5126:e.setFloat32(t,s,!0);break;default:throw new Error(`Unsupported data type: ${this.componentType}`)}}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: computeOrigin, smoothNormalsMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeOrigin", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothNormalsMesh", function() { return x; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry.js */ "../../node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "../../node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "../../node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "../../node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function x(t){if(t.components){for(const e of t.components)"smooth"===e.shading&&e.faces&&u(t,e);t.vertexAttributesChanged()}}function u(r,a){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r.vertexAttributes.normal)&&(r.vertexAttributes.normal=new Float32Array(r.vertexAttributes.position.length));const m=a.faces.length/3;for(let e=0;e<m;++e){const n=a.faces[3*e+0],m=a.faces[3*e+1],x=a.faces[3*e+2],u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(b,r.vertexAttributes.position[3*n+0],r.vertexAttributes.position[3*n+1],r.vertexAttributes.position[3*n+2]),v=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(A,r.vertexAttributes.position[3*m+0],r.vertexAttributes.position[3*m+1],r.vertexAttributes.position[3*m+2]),c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(l,r.vertexAttributes.position[3*x+0],r.vertexAttributes.position[3*x+1],r.vertexAttributes.position[3*x+2]),f=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(v,v,u),p=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c,c,u),h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(f,f,p);Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*n+0])&&(r.vertexAttributes.normal[3*n+0]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*n+1])&&(r.vertexAttributes.normal[3*n+1]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*n+2])&&(r.vertexAttributes.normal[3*n+2]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*m+0])&&(r.vertexAttributes.normal[3*m+0]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*m+1])&&(r.vertexAttributes.normal[3*m+1]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*m+2])&&(r.vertexAttributes.normal[3*m+2]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*x+0])&&(r.vertexAttributes.normal[3*x+0]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*x+1])&&(r.vertexAttributes.normal[3*x+1]=0),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(r.vertexAttributes.normal[3*x+2])&&(r.vertexAttributes.normal[3*x+2]=0),r.vertexAttributes.normal[3*n+0]+=h[0],r.vertexAttributes.normal[3*n+1]+=h[1],r.vertexAttributes.normal[3*n+2]+=h[2],r.vertexAttributes.normal[3*m+0]+=h[0],r.vertexAttributes.normal[3*m+1]+=h[1],r.vertexAttributes.normal[3*m+2]+=h[2],r.vertexAttributes.normal[3*x+0]+=h[0],r.vertexAttributes.normal[3*x+1]+=h[1],r.vertexAttributes.normal[3*x+2]+=h[2]}for(let t=0;t<r.vertexAttributes.normal.length;t+=3)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(c,r.vertexAttributes.normal[t],r.vertexAttributes.normal[t+1],r.vertexAttributes.normal[t+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(c,c),r.vertexAttributes.normal[t+0]=c[0],r.vertexAttributes.normal[t+1]=c[1],r.vertexAttributes.normal[t+2]=c[2]}function v(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t.transform))return t.transform.getOriginPoint(t.spatialReference);const e=t.extent.xmax-t.extent.width/2,o=t.extent.ymax-t.extent.height/2,s=t.extent.zmin;return new _Point_js__WEBPACK_IMPORTED_MODULE_5__["default"]({x:e,y:o,z:s,spatialReference:t.extent.spatialReference})}const b=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),A=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),l=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),c=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js ***!
  \****************************************************************************************************************************/
/*! exports provided: GLB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLB", function() { return e; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(t,r){if(!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;const i=this.textToArrayBuffer(t);if(this.length+=this.alignTo(i.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const n=this.writeChunk(i,12,1313821514,32);r&&this.writeChunk(r,n,5130562)}writeHeader(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(t,e,r,i=0){const n=this.alignTo(t.byteLength,4);for(this.outView.setUint32(e,n,!0),this.outView.setUint32(e+=4,r,!0),this.writeArrayBuffer(this.outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)i&&this.outView.setUint8(e,i),e++;return e}writeArrayBuffer(t,e,r,i,n){new Uint8Array(t,r,n).set(new Uint8Array(e,i,n),0)}textToArrayBuffer(e){if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-text-encoder"))return(new TextEncoder).encode(e).buffer;const r=new Uint8Array(e.length);for(let t=0;t<r.length;++t)r[t]=e.charCodeAt(t);return r.buffer}alignTo(t,e){return e*Math.ceil(t/e)}}e.HEADER_SIZE=12,e.CHUNK_HEADER_SIZE=8,e.MAGIC=1179937895,e.VERSION=2;


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: GLTF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTF", function() { return v; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/quat.js */ "../../node_modules/@arcgis/core/chunks/quat.js");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/quatf64.js */ "../../node_modules/@arcgis/core/chunks/quatf64.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "../../node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "../../node_modules/@arcgis/core/chunks/vec3f64.js");
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../MeshMaterialMetallicRoughness.js */ "../../node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js");
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../georeference.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/georeference.js");
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buffer.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geometry.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js");
/* harmony import */ var _imageutils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imageutils.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class v{constructor(t,e,s){this.params={},this.materialMap=new Array,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:e,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(t)}addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras.options.bufferOutputType===_types_js__WEBPACK_IMPORTED_MODULE_9__["BufferOutputType"].GLB||this.gltf.extras.options.imageOutputType===_types_js__WEBPACK_IMPORTED_MODULE_9__["ImageOutputType"].GLB;e&&(this.gltf.extras.binChunkBuffer=new _buffer_js__WEBPACK_IMPORTED_MODULE_7__["Buffer"](this.gltf)),t.forEachScene((t=>{this.addScene(t)})),e&&this.gltf.extras.binChunkBuffer.finalize()}addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode((t=>{e.nodes||(e.nodes=[]);const s=this.addNode(t);e.nodes.push(s)})),this.gltf.scenes.push(e)}addNode(t){this.gltf.nodes||(this.gltf.nodes=[]);const l={};t.name&&(l.name=t.name);const c=t.translation;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["k"])(c,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["Z"])||(l.translation=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(c));const h=t.rotation;Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__["j"])(h,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__["I"])||(l.rotation=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(h));const u=t.scale;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["k"])(u,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["O"])||(l.scale=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(u)),t.mesh&&t.mesh.vertexAttributes.position?l.mesh=this.addMesh(t.mesh):t.forEachNode((t=>{l.children||(l.children=[]);const e=this.addNode(t);l.children.push(e)}));const f=this.gltf.nodes.length;return this.gltf.nodes.push(l),f}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},r=this.gltf.extras.options.bufferOutputType===_types_js__WEBPACK_IMPORTED_MODULE_9__["BufferOutputType"].GLB;let i;i=r?this.gltf.extras.binChunkBuffer:new _buffer_js__WEBPACK_IMPORTED_MODULE_7__["Buffer"](this.gltf);const a=e.clone();this.params.origin||(this.params.origin=Object(_geometry_js__WEBPACK_IMPORTED_MODULE_8__["computeOrigin"])(a)),a.rotate(-90,0,0,{origin:this.params.origin}),Object(_geometry_js__WEBPACK_IMPORTED_MODULE_8__["smoothNormalsMesh"])(a);const o=Object(_georeference_js__WEBPACK_IMPORTED_MODULE_6__["ungeoreferenceByTransform"])(a.vertexAttributes,a.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});a.vertexAttributes.position=o.position,a.vertexAttributes.normal=o.normal,a.vertexAttributes.tangent=o.tangent;const n=i.addBufferView(5126,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].VEC3,_types_js__WEBPACK_IMPORTED_MODULE_9__["TargetBuffer"].ARRAY_BUFFER);let l,m,x,b;a.vertexAttributes.normal&&(l=i.addBufferView(5126,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].VEC3,_types_js__WEBPACK_IMPORTED_MODULE_9__["TargetBuffer"].ARRAY_BUFFER)),a.vertexAttributes.uv&&(m=i.addBufferView(5126,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].VEC2,_types_js__WEBPACK_IMPORTED_MODULE_9__["TargetBuffer"].ARRAY_BUFFER)),a.vertexAttributes.tangent&&(x=i.addBufferView(5126,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].VEC4,_types_js__WEBPACK_IMPORTED_MODULE_9__["TargetBuffer"].ARRAY_BUFFER)),a.vertexAttributes.color&&(b=i.addBufferView(5121,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].VEC4,_types_js__WEBPACK_IMPORTED_MODULE_9__["TargetBuffer"].ARRAY_BUFFER)),n.startAccessor("POSITION"),l&&l.startAccessor("NORMAL"),m&&m.startAccessor("TEXCOORD_0"),x&&x.startAccessor("TANGENT"),b&&b.startAccessor("COLOR_0");const A=a.vertexAttributes.position.length/3;for(let c=0;c<A;++c)n.push(a.vertexAttributes.position[3*c+0]),n.push(a.vertexAttributes.position[3*c+1]),n.push(a.vertexAttributes.position[3*c+2]),l&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a.vertexAttributes.normal)&&(l.push(a.vertexAttributes.normal[3*c+0]),l.push(a.vertexAttributes.normal[3*c+1]),l.push(a.vertexAttributes.normal[3*c+2])),m&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a.vertexAttributes.uv)&&(m.push(a.vertexAttributes.uv[2*c+0]),m.push(a.vertexAttributes.uv[2*c+1])),x&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a.vertexAttributes.tangent)&&(x.push(a.vertexAttributes.tangent[4*c+0]),x.push(a.vertexAttributes.tangent[4*c+1]),x.push(a.vertexAttributes.tangent[4*c+2]),x.push(a.vertexAttributes.tangent[4*c+3])),b&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a.vertexAttributes.color)&&(b.push(a.vertexAttributes.color[4*c+0]),b.push(a.vertexAttributes.color[4*c+1]),b.push(a.vertexAttributes.color[4*c+2]),b.push(a.vertexAttributes.color[4*c+3]));const v=n.endAccessor(),R=this.addAccessor(n.index,v);let T,M,O,C,E;if(l){const t=l.endAccessor();T=this.addAccessor(l.index,t)}if(m){const t=m.endAccessor();M=this.addAccessor(m.index,t)}if(x){const t=x.endAccessor();O=this.addAccessor(x.index,t)}if(b){const t=b.endAccessor();C=this.addAccessor(b.index,t)}a.components&&a.components.length>0&&a.components[0].faces?(E=i.addBufferView(5125,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].SCALAR,_types_js__WEBPACK_IMPORTED_MODULE_9__["TargetBuffer"].ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(E,a.components,s,R,T,M,O,C)):this.addMeshVertexNonIndexed(a.components,s,R,T,M,O,C),n.finalize(),l&&l.finalize(),m&&m.finalize(),x&&x.finalize(),E&&E.finalize(),b&&b.finalize(),r||i.finalize();const w=this.gltf.meshes.length;return this.gltf.meshes.push(s),w}addMaterial(e){if(null===e)return;const s=this.materialMap.indexOf(e);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const r={};switch(e.alphaMode){case"mask":r.alphaMode=_types_js__WEBPACK_IMPORTED_MODULE_9__["AlphaMode"].MASK;break;case"auto":case"blend":r.alphaMode=_types_js__WEBPACK_IMPORTED_MODULE_9__["AlphaMode"].BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};const i=t=>t**2.1,a=t=>{const e=t.toRgba();return e[0]=i(e[0]/255),e[1]=i(e[1]/255),e[2]=i(e[2]/255),e};if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.color)&&(r.pbrMetallicRoughness.baseColorFactor=a(e.color)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.colorTexture)&&(r.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.normalTexture)&&(r.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_5__["default"]){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.emissiveTexture)&&(r.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.emissiveColor)){const t=a(e.emissiveColor);r.emissiveFactor=[t[0],t[1],t[2]]}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.occlusionTexture)&&(r.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.metallicRoughnessTexture)&&(r.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1;const o=this.gltf.materials.length;return this.gltf.materials.push(r),this.materialMap.push(e),o}addTexture(t){this.gltf.textures||(this.gltf.textures=[]);const e={sampler:this.addSampler(t),source:this.addImage(t)},s=this.gltf.textures.length;return this.gltf.textures.push(e),s}addImage(t){this.gltf.images||(this.gltf.images=[]);const e={};if(t.url)e.uri=t.url;else{e.extras=t.data;for(let e=0;e<this.gltf.images.length;++e)if(t.data===this.gltf.images[e].extras)return e;switch(this.gltf.extras.options.imageOutputType){case _types_js__WEBPACK_IMPORTED_MODULE_9__["ImageOutputType"].GLB:{const s=this.gltf.extras.binChunkBuffer.addBufferView(5121,_types_js__WEBPACK_IMPORTED_MODULE_9__["AttributeType"].SCALAR);s.writeAsync(Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_10__["imageToArrayBuffer"])(t.data)).then((()=>{s.finalize()})),e.bufferView=s.index,e.mimeType="image/png";break}case _types_js__WEBPACK_IMPORTED_MODULE_9__["ImageOutputType"].DataURI:e.uri=Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_10__["imageToDataURI"])(t.data);break;default:this.gltf.extras.promises.push(Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_10__["imageToArrayBuffer"])(t.data).then((t=>{e.uri=t})))}}const s=this.gltf.images.length;return this.gltf.images.push(e),s}addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=10497,s=10497;if("string"==typeof t.wrap)switch(t.wrap){case"clamp":e=33071,s=33071;break;case"mirror":e=33648,s=33648}else{switch(t.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(t.wrap.horizontal){case"clamp":e=33071;break;case"mirror":e=33648}}const r={wrapS:e,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}addMeshVertexIndexed(t,e,s,r,i,a,o,n){for(const l of e){t.startAccessor("INDICES");for(let s=0;s<l.faces.length;++s)t.push(l.faces[s]);const e=t.endAccessor(),c={attributes:{POSITION:r},indices:this.addAccessor(t.index,e),material:this.addMaterial(l.material)};i&&"flat"!==l.shading&&(c.attributes.NORMAL=i),a&&(c.attributes.TEXCOORD_0=a),o&&"flat"!==l.shading&&(c.attributes.TANGENT=o),n&&(c.attributes.COLOR_0=n),s.primitives.push(c)}}addMeshVertexNonIndexed(t,e,s,r,i,a,o){const n={attributes:{POSITION:s}};r&&(n.attributes.NORMAL=r),i&&(n.attributes.TEXCOORD_0=i),a&&(n.attributes.TANGENT=a),o&&(n.attributes.COLOR_0=o),t&&(n.material=this.addMaterial(t[0].material)),e.primitives.push(n)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: toBinaryGLTF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBinaryGLTF", function() { return s; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js");
/* harmony import */ var _asset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js");
/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{constructor(e,o){this.file={type:"model/gltf-binary",data:e},this.origin=o}buffer(){return Promise.resolve(this.file)}download(e){return new Promise((()=>{const o=new Blob([this.file.data],{type:this.file.type});let t=e;t||(t="model.glb");if("glb"!==t.split(".").pop()&&(t+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(o,t);else{const e=document.createElement("a"),n=URL.createObjectURL(o);e.href=n,e.download=t,document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e),window.URL.revokeObjectURL(n)}),0)}}))}}function s(s,d){const l=new _asset_js__WEBPACK_IMPORTED_MODULE_2__["Asset"],a=new _scene_js__WEBPACK_IMPORTED_MODULE_3__["Scene"];l.addScene(a);const m=new _node_js__WEBPACK_IMPORTED_MODULE_1__["Node"];return a.addNode(m),m.mesh=s,Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["exportGLB"])(l,d).then((e=>new r(e[_index_js__WEBPACK_IMPORTED_MODULE_0__["MODEL_NAME_GLB"]],e.origin)))}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: encodeBase64DataUri, imageToArrayBuffer, imageToDataURI, isArrayBufferPNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64DataUri", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToArrayBuffer", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToDataURI", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBufferPNG", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "../../node_modules/@arcgis/core/core/maybe.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(e){const n=a(e);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(n)?n.toDataURL():""}async function o(t){const r=a(t);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imageToArrayBuffer","Unsupported image type");const o=async t=>{if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imageToArrayBuffer","Unable to convert image to PNG");const n=new FileReader,r=new Promise((e=>{n.addEventListener("loadend",(()=>{e(n.result)}))}));return n.readAsArrayBuffer(t),r};if(r.toBlob)return new Promise(((e,t)=>{r.toBlob((n=>{o(n).then(e,t)}),"image/png")}));if("msToBlob"in r)return o(r.msToBlob());throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imageToArrayBuffer","Could not convert canvas to blob")}function a(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,e.width,e.height),t}function i(e){const t=[],n=new Uint8Array(e);for(let r=0;r<n.length;r++)t.push(String.fromCharCode(n[r]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function s(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: AlphaMode, AttributeType, BufferOutputType, ColorMode, ImageOutputType, MeshMode, Asset, Scene, Node, MODEL_NAME_GLB, MODEL_NAME_GLTF, exportGLB, exportGLTF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME_GLB", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_NAME_GLTF", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportGLB", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportGLTF", function() { return a; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Point.js */ "../../node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _glb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glb.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js");
/* harmony import */ var _gltf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gltf.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlphaMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["AlphaMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["AttributeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferOutputType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["ColorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageOutputType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["MeshMode"]; });

/* harmony import */ var _imageutils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageutils.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js");
/* harmony import */ var _asset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return _asset_js__WEBPACK_IMPORTED_MODULE_6__["Asset"]; });

/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scene.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene_js__WEBPACK_IMPORTED_MODULE_7__["Scene"]; });

/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node.js */ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node_js__WEBPACK_IMPORTED_MODULE_8__["Node"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const f="model.gltf",p="model.glb";function a(a,m,c){const l=new _gltf_js__WEBPACK_IMPORTED_MODULE_3__["GLTF"](a,m=m||{},c);let g=l.params;g?g.origin||(g.origin=new _Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]({x:-1,y:-1,z:-1})):g={origin:new _Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]({x:-1,y:-1,z:-1})};const y=g.origin,d=l.gltf,j=d.extras.promises;let x=1,b=1,B=null;return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["eachAlways"])(j).then((()=>{const e={origin:y};delete d.extras;const t="number"==typeof m.jsonSpacing?m.jsonSpacing:4,o=JSON.stringify(d,((t,r)=>{if("extras"!==t){if(r instanceof ArrayBuffer){if(Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_5__["isArrayBufferPNG"])(r))switch(m.imageOutputType){case _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].DataURI:case _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].GLB:break;case _types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].External:default:{const t=`img${b}.png`;return b++,e[t]=r,t}}switch(m.bufferOutputType){case _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].DataURI:return Object(_imageutils_js__WEBPACK_IMPORTED_MODULE_5__["encodeBase64DataUri"])(r);case _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].GLB:if(B)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(B=r);case _types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].External:default:{const t=`data${x}.bin`;return x++,e[t]=r,t}}}return r}}),t);return m.bufferOutputType===_types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].GLB||m.imageOutputType===_types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].GLB?e[p]=new _glb_js__WEBPACK_IMPORTED_MODULE_2__["GLB"](o,B).buffer:e[f]=o,e}))}function m(e,t){return a(e,{bufferOutputType:_types_js__WEBPACK_IMPORTED_MODULE_4__["BufferOutputType"].GLB,imageOutputType:_types_js__WEBPACK_IMPORTED_MODULE_4__["ImageOutputType"].GLB,jsonSpacing:0},t)}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return i; });
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/quat.js */ "../../node_modules/@arcgis/core/chunks/quat.js");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/quatf64.js */ "../../node_modules/@arcgis/core/chunks/quatf64.js");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "../../node_modules/@arcgis/core/chunks/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i{constructor(){this.name="",this.mesh=null,this.translation=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.rotation=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),this.scale=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["O"]),this.nodes=[]}addNode(s){if(this.nodes.indexOf(s)>=0)throw new Error("Node already added");this.nodes.push(s)}forEachNode(s){this.nodes.forEach(s)}set rotationAngles(t){Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_0__["k"])(this.rotation,t[0],t[1],t[2])}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js ***!
  \******************************************************************************************************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return d; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class d{constructor(){this.name="",this.nodes=[]}addNode(d){if(this.nodes.indexOf(d)>=0)throw new Error("Node already added");this.nodes.push(d)}forEachNode(d){this.nodes.forEach(d)}}


/***/ }),

/***/ "../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js ***!
  \******************************************************************************************************************************/
/*! exports provided: AlphaMode, AttributeType, BufferOutputType, ColorMode, ImageOutputType, MeshMode, TargetBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaMode", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeType", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferOutputType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMode", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageOutputType", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshMode", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetBuffer", function() { return R; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var E,A,R,L,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(E||(E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4"}(L||(L={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND"}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor"}(N||(N={}));


/***/ })

};;
//# sourceMappingURL=68.render-page.js.map