exports.ids = [75];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/identity/IdentityForm.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/IdentityForm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intl/substitute.js */ "../../node_modules/@arcgis/core/intl/substitute.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "../../node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widgetUtils.js */ "../../node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "../../node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "../../node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},p="ArcGIS Online";let a=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n,messages:a}=this,d=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:l.group},Object(_intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__["substitute"])(n?a.oAuthInfo:a.info,{server:/\.arcgis\.com/i.test(e)?p:e,resource:`(${t||a.lblItem})`})),c=n?null:Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:l.group,key:"username"},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("label",{class:l.label},a.lblUser,Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__["storeNode"],"data-node-ref":"_usernameInputNode",class:l.esriInput}))),m=n?null:Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:l.group,key:"password"},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("label",{class:l.label},a.lblPwd,Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{value:"",required:!0,type:"password",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__["storeNode"],"data-node-ref":"_passwordInputNode",class:l.esriInput}))),h=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:this.classes(l.group,l.footer)},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{type:"submit",disabled:!!o,value:o?a.lblSigning:a.lblOk,class:l.esriButton}),Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{type:"button",value:a.lblCancel,bind:this,onclick:this._cancel,class:this.classes(l.esriButton,l.esriButtonSecondary)})),g=s?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",null,s.details&&s.details.httpStatus?a.invalidUser:a.noAuthService):null;return Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("form",{class:l.base,bind:this,onsubmit:this._submit},d,g,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])(),Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__["messageBundle"])("esri/identity/t9n/identity")],a.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"signingIn",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"resource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"error",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"oAuthPrompt",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.IdentityForm")],a);var d=a;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "../../node_modules/@arcgis/core/identity/IdentityManager.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/IdentityManager.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel.js */ "../../node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityManagerBase.js */ "../../node_modules/@arcgis/core/identity/IdentityManagerBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__["IdentityManagerBase"]{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;Object(_kernel_js__WEBPACK_IMPORTED_MODULE_0__["setId"])(s);/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "../../node_modules/@arcgis/core/identity/IdentityManagerBase.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/IdentityManagerBase.js ***!
  \***********************************************************************************************************/
/*! exports provided: Credential, IdentityManagerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityManagerBase", function() { return q; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "../../node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel.js */ "../../node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ "../../node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ "../../node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Evented.js */ "../../node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/events.js */ "../../node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/global.js */ "../../node_modules/@arcgis/core/core/global.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/lang.js */ "../../node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/object.js */ "../../node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ "../../node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _IdentityForm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IdentityForm.js */ "../../node_modules/@arcgis/core/identity/IdentityForm.js");
/* harmony import */ var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IdentityModal.js */ "../../node_modules/@arcgis/core/identity/IdentityModal.js");
/* harmony import */ var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./OAuthCredential.js */ "../../node_modules/@arcgis/core/identity/OAuthCredential.js");
/* harmony import */ var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./OAuthInfo.js */ "../../node_modules/@arcgis/core/identity/OAuthInfo.js");
/* harmony import */ var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServerInfo.js */ "../../node_modules/@arcgis/core/identity/ServerInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const R={},b=e=>{const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e.owningSystemUrl).host,s=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e.server).host,r=/.+\.arcgis\.com$/i;return r.test(t)&&r.test(s)},P=(e,t)=>!!(b(e)&&t&&t.some((t=>t.test(e.server))));let C=null,D=null;try{C=window.localStorage,D=window.sessionStorage}catch{}class q extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(){super(),this._portalConfig=_core_global_js__WEBPACK_IMPORTED_MODULE_7__["default"].esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=_IdentityForm_js__WEBPACK_IMPORTED_MODULE_17__["default"],this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthHash=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthHash(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const s of e){const e=this.findOAuthInfo(s.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),s=this._isServerRsrc(t);let r,i=this.findServerInfo(t),n=!0;i||(i=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],i.server=this._getServerInstanceRoot(t),s?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),r=this._findCredential(t),r?(delete e.server,Object.assign(r,e),n=!1):(r=new j({userId:e.userId,server:i.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:s?"server":"portal"}),r.resources=[t],this.credentials.push(r)),r.emitTokenChange(!1),n||r.refreshServerTokens()}toJSON(){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_8__["fixJson"])({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,s=e.oAuthInfos,r=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"](t))})),e.length&&this.registerServers(e)}if(s){const e=[];s.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"](t))})),e.length&&this.registerOAuthInfos(e)}r&&r.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new j(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.serverInfos)if(this._hasSameServerInstance(s.server,e)){t=s;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.oAuthInfos)if(this._hasSameServerInstance(s.portalUrl,e)){t=s;break}return t}findCredential(e,t){let s;e=this._sanitizeUrl(e);const r=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===r){s=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===r){s=i;break}return s}getCredential(e,t){let s,r,n=!0;t&&(s=!!t.token,r=t.error,n=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const o=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortController"])(),a=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])();if(t.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(t.signal,(()=>{o.abort()})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(o,(()=>{a.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAborted"])(o))return a.promise;t.signal=o.signal;const h=this._isAdminResource(e),l=s?this.findCredential(e):null;let _;if(l&&r&&r.details&&498===r.details.httpStatus)l.destroy();else if(l)return _=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized","You are currently signed in as: '"+l.userId+"'. You do not have access to this resource: "+e,{error:r}),a.reject(_),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let m=this.findServerInfo(e);if(m)!m.hasServer&&this._isServerRsrc(e)&&(m._restInfoPms=this._getTokenSvcUrl(e),m.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return _=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(_),a.promise;m=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],m.server=this._getServerInstanceRoot(e),"string"==typeof t?(m.tokenServiceUrl=t,m.hasPortal=!0):(m._restInfoPms=t,m.hasServer=!0),this.registerServers([m])}return m.hasPortal&&void 0===m._selfReq&&(n||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(m.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===m.tokenServiceUrl)))&&(m._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(m.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,m,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,s){const n=this._rePortalTokenSvc.test(e.tokenServiceUrl),o=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,p,_,m;t&&(m=this.tokenValidity||a||this.defaultTokenValidity,m>a&&a>0&&(m=a)),s&&(h=s.isAdmin,l=s.serverUrl,c=s.token,p=s.signal,_=s.ssl,e.customParameters=s.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](d.toLowerCase()),e.webTierAuth&&null!=s&&s.serverUrl&&!_&&"http"===o.scheme&&(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(o.uri,d,!0)||"https"===u.scheme&&o.host===u.host&&"7080"===o.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:l,token:c,expiration:m,referer:h||n?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,s),signal:p,...null==s?void 0:s.ioArgs};n||(v.withCredentials=!1);return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d,v).then((s=>{const r=s.data;if(!r||!r.token)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:authentication-failed","Unable to generate token");const n=e.server;return R[n]||(R[n]={}),t&&(R[n][t.username]=t.password),r.validity=m,r}))}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,s){let n=!1;return this.getCredential(e,{prompt:!1}).then((o=>{let a;const h={f:"json"};if("portal"===o.scope)if(t&&(this._doPortalSignIn(e)||s&&s.force))a=o.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!o.token)return{credential:o};a=o.server+"/sharing/rest"}else{if(!o.token)return{credential:o};a=o.server+"/rest/services"}return o.token&&(h.token=o.token),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized",`You are currently signed in as: '${o.userId}'.`,e.data);return n=!!e.data.viewOnlyUserTypeApp,{credential:o}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw o.destroy(),new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:invalid-request");return{credential:o}}))})).then((e=>({credential:e.credential,viewOnly:n})))}setOAuthResponseHash(e){var t;const s=this._oAuthDfd;if(this._oAuthDfd=null,!s||!e)return;clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnHashHandle)||t.remove(),"#"===e.charAt(0)&&(e=e.substring(1));const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["queryToObject"])(e);if(r.error){const e="access_denied"===r.error,t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"](e?"identity-manager:user-aborted":"identity-manager:authentication-failed",e?"ABORTED":"OAuth: "+r.error+" - "+r.error_description);s.reject(t)}else{const e=s.sinfo_,t=s.oinfo_,i=t._oAuthCred,n=new j({userId:r.username,server:e.server,token:r.access_token,expires:Date.now()+1e3*Number(r.expires_in),ssl:"true"===r.ssl,_oAuthCred:i});t.userId=n.userId,i.storage=r.persist?C:D,i.token=n.token,i.expires=n.expires,i.userId=n.userId,i.ssl=n.ssl,i.save(),s.resolve(n)}}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,s={}){const r=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])(),n=()=>{var e,t,s,r,i;null==(e=h)||e.remove(),null==(t=l)||t.remove(),null==(s=c)||s.remove(),null==(r=a)||r.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=a=h=l=c=null},o=()=>{n(),this._oAuthDfd=null,r.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))};s.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(s.signal,(()=>{o()}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_18__["default"],this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h=a.on("cancel",o),l=this.dialog.watch("open",o),c=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:s.isAdmin,signal:s.signal}).then((i=>{n();const o=new j({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:s.isAdmin,validity:i.validity});r.resolve(o)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return r.promise}oAuthSignIn(e,t,s,r){this._oAuthDfd=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])();const n=this._oAuthDfd;null!=r&&r.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(r.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&h()})),n.resUrl_=e,n.sinfo_=t,n.oinfo_=s;const o=!r||!1!==r.oAuthPopupConfirmation;if(!s.popup||!o)return this._doOAuthSignIn(e,t,s),n.promise;const a=new this.formConstructor;a.oAuthPrompt=!0,a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_18__["default"],this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");const h=()=>{_(),this._oAuthDfd=null,n.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))},l=a.on("cancel",h),c=this.dialog.watch("open",h),p=a.on("submit",(()=>{_(),this._doOAuthSignIn(e,t,s)})),_=()=>{l.remove(),c.remove(),p.remove(),a.destroy(),this.dialog.destroy(),this.dialog=null};return n.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,"message",(t=>{var s;if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(s=t.data)?void 0:s.type)){const s=t.source;this.getCredential(e).then((e=>{s.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{s.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthHash(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["queryToObject"])(e);let s=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),"object"==typeof t.state&&t.state.portalUrl&&(this._oAuthHash=t,s=!0)}catch{}else t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(s=!0));s&&(window.location.hash="object"==typeof t.state&&t.state.hash||"")}}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let s,r,i,n,o=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(s=c[0],n=this.findServerInfo(s.server),r=n&&n.owningSystemUrl,i=r&&this.findCredential(r,s.userId),o=this._getIdenticalSvcIdx(e,s),!a)return-1===o&&s.resources.push(e),this._addResource(e,i),s;-1!==o&&(s.resources.splice(o,1),this._removeResource(e,i))}else{let t,s;if(c.some((a=>(s=this._getIdenticalSvcIdx(e,a),-1!==s&&(t=a,n=this.findServerInfo(t.server),r=n&&n.owningSystemUrl,i=r&&this.findCredential(r,t.userId),o=s,!0)))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const s of this.oAuthInfos)if(this._isIdProvider(s.portalUrl,e)){t=s;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let s=-1;t&&(s=this._getIdenticalSvcIdx(e,t),s>-1&&t.resources.splice(s,1))}_useProxy(e,t){return t&&t.isAdmin&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let s=t.indexOf(this._agsRest);return-1===s&&this._isAdminResource(e)&&(s=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===s&&(s=t.indexOf("/sharing")),-1===s&&"/"===t.substr(-1)&&(s=t.length-1),s>-1?e.substring(0,s):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,s=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,r=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):s.test(e)?e=e.replace(s,"https://devext.arcgis.com"):r.test(e)&&(e=e.replace(r,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const s=(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.proxyUrl||"").toLowerCase(),r=s?e.toLowerCase().indexOf(s+"?"):-1;return-1!==r&&(e=e.substring(r+s.length+1)),e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalize"])(e),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let s;if(this._isRESTService(e)&&this._isRESTService(t)){const r=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(s=r===i,!s){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;s=r.replace(e,"$1")===i.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?s=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(s=!0);return s}_isPortalDomain(e){const s=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e.toLowerCase()),r=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(s.uri)));return!i&&r&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),s.uri)),i||_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl&&(i=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(s,_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,s.uri)))),i=i||this._agsPortal.test(s.path),i}_isIdProvider(e,t){let s=-1,r=-1;this._gwDomains.forEach(((i,n)=>{-1===s&&i.regex.test(e)&&(s=n),-1===r&&i.regex.test(t)&&(r=n)}));let i=!1;if(s>-1&&r>-1&&(0===s||4===s?0!==r&&4!==r||(i=!0):1===s?1!==r&&2!==r||(i=!0):2===s?2===r&&(i=!0):3===s&&3===r&&(i=!0)),!i){const s=this.findServerInfo(t),r=s&&s.owningSystemUrl;r&&b(s)&&this._isPortalDomain(r)&&this._isIdProvider(e,r)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let s=-1;for(let r=0;r<t.resources.length;r++){const i=t.resources[r];if(this._isIdenticalService(e,i)){s=r;break}}return s}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,s,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",s=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:s}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((s=>(s.regex.test(e)&&(t=s.tokenServiceUrl),!!t))),t||this._portals.some((s=>(this._hasSameServerInstance(s,e)&&(t=s+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const s=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e).port;/^http:\/\//i.test(e)&&"7080"===s&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_exchangeToken(e,t,s){return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:s}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json"},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let s;if(this._gwDomains.some((t=>(t.regex.test(e)&&(s=t.customBaseUrl),!!s))),s)return Promise.resolve({allSSL:!0,currentVersion:"4.4",customBaseUrl:s,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,s=window.location.href,r=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(s)||!(r?r.hasPortal||r.owningSystemUrl&&this._isPortalDomain(r.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(s,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(s,e,!0)))}_checkProtocol(e,t,s,r){let n=!0;const o=r?t.adminTokenServiceUrl:t.tokenServiceUrl;if(o.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["getProxyRule"])(o)&&(n=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!n)){s(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return n}_enqueue(e,t,s,r,i,n){return r||(r=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])()),r.resUrl_=e,r.sinfo_=t,r.options_=s,r.admin_=i,r.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(r)):this._xoReqs.push(r):this._doSignIn(r),r.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const s=e.options_&&e.options_.resource,r=e.resUrl_,i=e.refresh_;let n=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,n=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.push(s||r),t.scope=this._isServerRsrc(r)?"server":"portal",t.emitTokenChange();const o=this._soReqs,a={};this._soReqs=[],o.forEach((e=>{if(!this._isIdenticalService(r,e.resUrl_)){const s=this._getSuffix(e.resUrl_);a[s]||(a[s]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),o.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(r),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,n||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=(r,n,a,h)=>{var l,c;const d=e.sinfo_,p=!e.options_||!1!==e.options_.prompt,_=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let f,m;if(r)t(new j({userId:r,server:d.server,token:a||null,expires:null!=h?Number(h):null,ssl:!!n}));else if(window!==window.parent&&null!=(l=this._appUrlObj.query)&&l["arcgis-auth-origin"]&&null!=(c=this._appUrlObj.query)&&c["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var v;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const r=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(r.remove(),t(new j(e.data.credential))):"arcgis:auth:error"===e.data.type&&(r.remove(),s(_core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e.data.error))))}));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(null==(v=e.options_)?void 0:v.signal,(()=>{r.remove()}))}else if(_){let r=_._oAuthCred;if(!r){const e=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_19__["default"](_,C),t=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_19__["default"](_,D);e.isValid()&&t.isValid()?e.expires>t.expires?(r=e,t.destroy()):(r=t,e.destroy()):r=e.isValid()?e:t,_._oAuthCred=r}if(r.isValid())f=new j({userId:r.userId,server:d.server,token:r.token,expires:r.expires,ssl:r.ssl,_oAuthCred:r}),_.appId!==r.appId&&this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._exchangeToken(f.server,_.appId,f.token).then((e=>{f.token=e,r.token=e,r.save(),t(f)})).catch((()=>{t(f)})):t(f);else if(this._oAuthHash&&this._hasSameServerInstance(_.portalUrl,this._oAuthHash.state.portalUrl)){const e=this._oAuthHash;f=new j({userId:e.username,server:d.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:r}),_.userId=f.userId,r.storage=e.persist?C:D,r.token=f.token,r.expires=f.expires,r.userId=f.userId,r.ssl=f.ssl,r.save(),this._oAuthHash=null,t(f)}else{const r=()=>{p?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,_,e.options_).then(t,s):(m=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),s(m))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,_.appId).then((({portalUrl:e,token:s,username:i})=>{!e||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(e,this._appOrigin,!0)?(f=new j({server:d.server,userId:i,token:s}),t(f)):r()})).catch(r):r()}}else if(p){if(this._checkProtocol(e.resUrl_,d,s,e.admin_)){let r=e.options_;e.admin_&&(r=r||{},r.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,r).then(t,s)}}else m=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),s(m)},n=()=>{const r=e.sinfo_,i=r.owningSystemUrl,n=e.options_;let o,a,h,l;if(n&&(o=n.token,a=n.error,h=n.prompt),l=this._findCredential(i,{token:o,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(P(r,this._legacyFed)){const e=l.toJSON();e.server=r.server,e.resources=null,t(new j(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((s=>{t(new j({userId:l.userId,server:r.server,token:s.token,expires:null!=s.expires?Number(s.expires):null,ssl:!!s.ssl,isAdmin:e.admin_,validity:s.validity}))}),s)}}else{this._busy=null,o&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:r.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(e=>{s(e)}))}};this._errbackFunc=s;const a=e.sinfo_.owningSystemUrl,h=this._isServerRsrc(e.resUrl_),c=e.sinfo_._restInfoPms;c?c.promise.then((t=>{const s=e.sinfo_;if(s._restInfoPms){s.adminTokenServiceUrl=s._restInfoPms.adminUrl,s._restInfoPms=null,s.tokenServiceUrl=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("authInfo.tokenServicesUrl",t)||Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("authInfo.tokenServiceUrl",t)||Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("tokenServiceUrl",t),s.shortLivedTokenValidity=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("authInfo.shortLivedTokenValidity",t),s.currentVersion=t.currentVersion,s.owningTenant=t.owningTenant;const e=s.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}h&&s.owningSystemUrl?n():r()}),(()=>{e.sinfo_._restInfoPms=null;const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");s(t)})):h&&a?n():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const s={};let r,i,n,o;return t&&(r=t.user&&t.user.username,s.username=r,s.allSSL=t.allSSL,i=t.supportsOAuth,n=t.currentVersion,"multitenant"===t.portalMode&&(o=t.customBaseUrl)),e.sinfo_.webTierAuth=!!r,r&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:s.allSSL}).catch((()=>null)).then((e=>(s.portalToken=e&&e.token,s.tokenExpiration=e&&e.expires,s))):!r&&i&&parseFloat(n)>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>s)):s})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?r(t.username,t.allSSL,t.portalToken,t.tokenExpiration):r()})):r()}_generateOAuthInfo(e){let t,s,i=e.portalUrl;const n=e.customBaseUrl,o=e.owningTenant,a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){s=window.location.href;let e=s.indexOf("?");e>-1&&(s=s.slice(0,e)),e=s.search(/\/(apps|home)\//),s=e>-1?s.slice(0,e):null}return a&&s?(this._hasTestedIfAppIsOnPortal=!0,t=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(s+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"]({appId:"arcgisonline",popupCallbackUrl:s+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this.defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:o,client_id:this.defaultOAuthInfo.appId,redirect_uri:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["makeAbsolute"])(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&n?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+n:t.portalUrl=i,t.popup=window!==window.top||!(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,s){const r={portalUrl:s.portalUrl};!s.popup&&s.preserveUrlHash&&window.location.hash&&(r.hash=window.location.hash);const n={client_id:s.appId,response_type:"token",state:JSON.stringify(r),expiration:s.expiration,locale:s.locale,redirect_uri:s.popup?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["makeAbsolute"])(s.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};s.forceLogin&&(n.force_login=!0),s.forceUserId&&s.userId&&(n.prepopulatedusername=s.userId),!s.popup&&this._doPortalSignIn(e)&&(n.redirectToUserOrgUrl=!0);const h=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",l=h+"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["objectToQuery"])(n);if(s.popup){const e=window.open(l,"esriJSAPIOAuth",s.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnHashHandle.remove();const e=this._oAuthDfd;if(e){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnHashHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(_core_global_js__WEBPACK_IMPORTED_MODULE_7__["default"],"arcgis:auth:hash",(e=>{this.setOAuthResponseHash(e.detail)}));else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:n,authorizeUrl:h,resourceUrl:e,serverInfo:t,oAuthInfo:s}):window.location.href=l}}q.prototype.declaredClass="esri.identity.IdentityManagerBase";let j=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"].EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,i=r&&P(e,_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._legacyFed),n=e.webTierAuth,o=n&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].normalizeWebTierAuth,a=R[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=r&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(t),u={username:this.userId,password:h};if(n&&!o)return;r&&!d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].serverInfos.some((e=>(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findCredential(d.server,this.userId);if(!r||p){if(!i){if(r)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(o)u=null,l={ssl:this.ssl};else{if(!h){let t;return c&&(c=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._sanitizeUrl(c),this._enqueued=1,t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),t}this.isAdmin&&(l={isAdmin:!0})}return _kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].generateToken(r?d:e,r?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}p.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.forEach((e=>{const t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(e.server),r=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._hasSameServerInstance(this.server,r)||_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._isIdProvider(r,this.server))&&(P(t,_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())}))}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(this.server),r=t&&t.owningSystemUrl,i=r&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(r);!1===e||r&&"portal"!==this.scope&&(!i||!i.webTierAuth||_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.indexOf(this);e>-1&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_8__["fixJson"])({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let s=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();s<0?s=0:s>t&&(s=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),s>e?s-e:s)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"creationTime",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"expires",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"isAdmin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"oAuthState",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"resources",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"scope",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"ssl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"token",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"tokenRefreshBuffer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"userId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"validity",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__["subclass"])("esri.identity.Credential")],j);


/***/ }),

/***/ "../../node_modules/@arcgis/core/identity/IdentityModal.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/IdentityModal.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/handleUtils.js */ "../../node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "../../node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widget.js */ "../../node_modules/@arcgis/core/widgets/support/widget.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! focus-trap */ "../../node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "../../node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "../../node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const d={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let l=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.own(this.watch("open",(()=>this._toggleFocusTrap())))}destroy(){this._destroyFocusTrap()}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n={[d.open]:r,[d.closed]:!r},c=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("button",{class:d.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("span",{"aria-hidden":"true",class:d.iconClose})),l=`${t}_title`,p=`${t}_content`,u=s?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("h1",{id:l,class:d.title},s):null,m=r?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{bind:this,class:d.dialog,role:"dialog","aria-labelledby":l,"aria-describedby":p,afterCreate:this._createFocusTrap},c,u,this._renderContent(p)):null;return Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{tabIndex:-1,class:this.classes(d.base,n)},m)}_destroyFocusTrap(){var t;null==(t=this._focusTrap)||t.deactivate({onDeactivate:null}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate())}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=Object(focus_trap__WEBPACK_IMPORTED_MODULE_9__["createFocusTrap"])(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.own(Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeHandle"])((()=>cancelAnimationFrame(o))))}_renderContent(t){const e=this.content;return"string"==typeof e?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:d.content,id:t,innerHTML:e}):Object(_widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_8__["isWidget"])(e)?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:d.content,id:t},e.render()):e instanceof HTMLElement?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:d.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],l.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"content",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"open",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])(),Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__["messageBundle"])("esri/t9n/common")],l.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({aliasOf:"messages.auth.signIn"})],l.prototype,"title",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.IdentityModal")],l);var p=l;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "../../node_modules/@arcgis/core/identity/OAuthCredential.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/OAuthCredential.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class s{constructor(t,s){this.oAuthInfo=null,this.storage=null,this.appId=null,this.expires=null,this.ssl=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=s,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.token&&this.userId){const s=Date.now();if(this.expires>s){(this.expires-s)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return;const s=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let o=s[e.authNamespace];o||(o=s[e.authNamespace]={}),o[e.portalUrl]={appId:this.appId=e.appId,expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(s))}catch(i){console.log(i)}}}destroy(){const s=this._load(),e=this.oAuthInfo;if(e&&e.appId&&e.portalUrl&&this.token&&this.expires>Date.now()){const t=e.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",s=new FormData;if(s.append("f","json"),s.append("auth_token",this.token),s.append("client_id",e.appId),s.append("token_type_hint","access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,s);else{const e=new XMLHttpRequest;e.open("POST",t),e.send(s)}}if(e&&e.authNamespace&&e.portalUrl&&this.storage){const o=s[e.authNamespace];if(o){delete o[e.portalUrl];try{this.storage.setItem(t,JSON.stringify(s))}catch(i){console.log(i)}}}e&&(e._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let e=t[s.authNamespace];e&&(e=e[s.portalUrl],e&&(this.appId=e.appId,this.expires=e.expires,this.ssl=e.ssl,this.token=e.token,this.userId=e.userId))}}_load(){let s={};if(this.storage){const i=this.storage.getItem(t);if(i)try{s=JSON.parse(i)}catch(e){console.log(e)}}return s}}s.prototype.declaredClass="esri.identity.OAuthCredential";/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "../../node_modules/@arcgis/core/identity/OAuthInfo.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/OAuthInfo.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "../../node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let s=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return p.fromJSON(this.toJSON())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"appId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"authNamespace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"expiration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"forceLogin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"forceUserId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"locale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popup",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"portalUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"userId",void 0),s=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.OAuthInfo")],s);var i=s;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "../../node_modules/@arcgis/core/identity/ServerInfo.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/identity/ServerInfo.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "../../node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "../../node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "../../node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "../../node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "../../node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "../../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"adminTokenServiceUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"currentVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"hasPortal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"hasServer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"owningSystemUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"owningTenant",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"shortLivedTokenValidity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"tokenServiceUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"webTierAuth",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.ServerInfo")],s);var i=s;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "../../node_modules/focus-trap/dist/focus-trap.esm.js":
/*!************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \************************************************************************************************/
/*! exports provided: createFocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "../../node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 6.5.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs


var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });
  return idx;
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */


var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, params) : value;
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{ container: HTMLElement, firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  var containersContain = function containersContain(element) {
    return state.containers.some(function (container) {
      return container.contains(element);
    });
  };

  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (!optionValue) {
      return null;
    }

    var node = optionValue;

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container);

      if (tabbableNodes.length > 0) {
        return {
          container: container,
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }

      return undefined;
    }).filter(function (group) {
      return !!group;
    }); // remove groups with no tabbable nodes
    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus')) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    if (containersContain(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var targetContained = containersContain(e.target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || e.target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = e.target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's tabbable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
        var container = _ref.container;
        return container.contains(e.target);
      });

      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back in to...
        if (e.shiftKey) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        // REVERSE
        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return e.target === firstTabbableNode;
        });

        if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
          // an exception case where the target is the container itself, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }

        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        // FORWARD
        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return e.target === lastTabbableNode;
        });

        if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
          // an exception case where the target is the container itself, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }

        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    } // else, let the browser take care of [shift+]tab and move the focus

  };

  var checkKey = function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }

      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;

      if (onActivate) {
        onActivate();
      }

      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }

        addListeners();

        if (onPostActivate) {
          onPostActivate();
        }
      };

      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }

      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(deactivateOptions, 'onDeactivate');
      var onPostDeactivate = getOption(deactivateOptions, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(deactivateOptions, 'checkCanReturnFocus');

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = getOption(deactivateOptions, 'returnFocus', 'returnFocusOnDeactivate');

      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }

          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };

      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }

      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "../../node_modules/tabbable/dist/index.esm.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/tabbable/dist/index.esm.js ***!
  \*****************************************************************************************/
/*! exports provided: focusable, isFocusable, isTabbable, tabbable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusable", function() { return focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabbable", function() { return isTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbable", function() { return tabbable; });
/*!
* tabbable 5.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node, displayCheck) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  if (!displayCheck || displayCheck === 'full') {
    while (node) {
      if (getComputedStyle(node).display === 'none') {
        return true;
      }

      node = node.parentElement;
    }
  } else if (displayCheck === 'non-zero-area') {
    var _node$getBoundingClie = node.getBoundingClientRect(),
        width = _node$getBoundingClie.width,
        height = _node$getBoundingClie.height;

    return width === 0 && height === 0;
  }

  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) ||
  /* For a details element with a summary, the summary element gets the focused  */
  isDetailsWithSummary(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  return candidates;
};

var isTabbable = function isTabbable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(options, node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ })

};;
//# sourceMappingURL=75.render-page.js.map