(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{ricB:function(e,t,r){"use strict";r.r(t);var i,a=r("eijD"),n=r("mK0O"),o=r("hisu"),s=r("yBJb"),l=r("0942"),c=r("CHlC"),u=r("kMo5"),p=r("P+uj"),f=r("NthX"),d=r.n(f),y=r("dQW7"),m=r("DGz/"),h=r("kDog"),v=r("Mp7X"),b=r("UfAV"),O=r("0fJP"),g=r("d4jZ"),j=r("67w/"),w=r("IH5m"),x=r("z9dv"),M=r("xAIp"),S=(r("wckI"),r("J4Pc"),r("TM+E"),r("mp5+")),I=r("iaHD"),P=r("jr4m"),T=r("nd5+"),L=r("QZQ7"),E=r("3bUX"),k=r("9P7x"),R=r("oTsO"),C=r("44so"),F=r("2eXi"),_=r("wJzb"),V=r("eDEE"),A=r("EYBZ"),U=r("0n+b");function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Object(u.a)(this,r)}}var N=i=function(e){Object(c.a)(r,e);var t=D(r);function r(e){var i;return Object(o.a)(this,r),(i=t.call(this,e)).fullExtent=null,i.id=null,i.tileInfo=null,i}return Object(s.a)(r,[{key:"clone",value:function(){var e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}}]),r}(U.a);Object(y.a)([Object(M.b)({type:T.a,json:{read:{source:"fullExtent"}}})],N.prototype,"fullExtent",void 0),Object(y.a)([Object(M.b)({type:String,json:{read:{source:"id"}}})],N.prototype,"id",void 0),Object(y.a)([Object(M.b)({type:V.a,json:{read:{source:"tileInfo"}}})],N.prototype,"tileInfo",void 0);var B,W=N=i=Object(y.a)([Object(I.a)("esri.layer.support.TileMatrixSet")],N);function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Object(u.a)(this,r)}}var H=B=function(e){Object(c.a)(r,e);var t=K(r);function r(e){var i;return Object(o.a)(this,r),(i=t.call(this,e)).id=null,i.title=null,i.description=null,i.legendUrl=null,i}return Object(s.a)(r,[{key:"clone",value:function(){var e=new B;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(U.a);Object(y.a)([Object(M.b)({json:{read:{source:"id"}}})],H.prototype,"id",void 0),Object(y.a)([Object(M.b)({json:{read:{source:"title"}}})],H.prototype,"title",void 0),Object(y.a)([Object(M.b)({json:{read:{source:"abstract"}}})],H.prototype,"description",void 0),Object(y.a)([Object(M.b)({json:{read:{source:"legendUrl"}}})],H.prototype,"legendUrl",void 0),Object(y.a)([Object(M.b)({json:{read:{source:"isDefault"}}})],H.prototype,"isDefault",void 0),Object(y.a)([Object(M.b)({json:{read:{source:"keywords"}}})],H.prototype,"keywords",void 0);var J,X=H=B=Object(y.a)([Object(I.a)("esri.layer.support.WMTSStyle")],H);function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Object(u.a)(this,r)}}var z=J=function(e){Object(c.a)(r,e);var t=G(r);function r(e){var i;return Object(o.a)(this,r),(i=t.call(this,e)).fullExtent=null,i.imageFormats=null,i.id=null,i.layer=null,i.styles=null,i.tileMatrixSetId=null,i.tileMatrixSets=null,i}return Object(s.a)(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"readFullExtent",value:function(e,t){return(e=t.fullExtent)?T.a.fromJSON(e):null}},{key:"imageFormat",get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null}},{key:"clone",value:function(){var e=new J;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(U.a);Object(y.a)([Object(M.b)()],z.prototype,"description",null),Object(y.a)([Object(M.b)()],z.prototype,"fullExtent",void 0),Object(y.a)([Object(S.a)("fullExtent",["fullExtent"])],z.prototype,"readFullExtent",null),Object(y.a)([Object(M.b)()],z.prototype,"imageFormat",null),Object(y.a)([Object(M.b)({json:{read:{source:"formats"}}})],z.prototype,"imageFormats",void 0),Object(y.a)([Object(M.b)()],z.prototype,"id",void 0),Object(y.a)([Object(M.b)()],z.prototype,"layer",void 0),Object(y.a)([Object(M.b)()],z.prototype,"styleId",null),Object(y.a)([Object(M.b)({type:h.a.ofType(X),json:{read:{source:"styles"}}})],z.prototype,"styles",void 0),Object(y.a)([Object(M.b)({value:null,json:{write:{ignoreOrigin:!0}}})],z.prototype,"title",null),Object(y.a)([Object(M.b)()],z.prototype,"tileMatrixSetId",void 0),Object(y.a)([Object(M.b)({readOnly:!0})],z.prototype,"tileMatrixSet",null),Object(y.a)([Object(M.b)({type:h.a.ofType(W),json:{read:{source:"tileMatrixSets"}}})],z.prototype,"tileMatrixSets",void 0);var Y=z=J=Object(y.a)([Object(I.a)("esri.layers.support.WMTSSublayer")],z),q=r("aNYv"),Q=r("7im+"),Z=r("OTJA"),$=r("mHKk"),ee=r("YHXj"),te=r("tv5O"),re=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function ie(e,t){var r,i;e=e.replace(/ows:/gi,"");var a=(new DOMParser).parseFromString(e,"text/xml").documentElement,n=new Map,o=new Map,s=oe("Contents",a);if(!s)throw new v.a("wmtslayer:wmts-capabilities-xml-is-not-valid");var l,c,u=oe("OperationsMetadata",a),p=null==u?void 0:u.querySelector("[name='GetTile']"),f=null==p?void 0:p.getElementsByTagName("Get"),d=f&&Array.prototype.slice.call(f),y=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r,m=t.serviceMode,h=t&&t.url;if(d&&d.length&&d.some((function(e){var t=oe("Constraint",e);return!t||ue("AllowedValues","Value",m,t)?(h=e.attributes[0].nodeValue,!0):(!t||ue("AllowedValues","Value","RESTful",t)||ue("AllowedValues","Value","REST",t)?c=e.attributes[0].nodeValue:t&&!ue("AllowedValues","Value","KVP",t)||(l=e.attributes[0].nodeValue),!1)})),!h)if(c)h=c,m="RESTful";else if(l)h=l,m="KVP";else{var b=oe("ServiceMetadataURL",a);h=b&&b.getAttribute("xlink:href")}var O=h.indexOf("1.0.0/");-1===O&&"RESTful"===m?h+="/":O>-1&&(h=h.substring(0,O)),"KVP"===m&&(h+=O>-1?"":"?"),y&&(h=h.replace(/^http:/i,"https:"));var g=ce("ServiceIdentification>ServiceTypeVersion",a),j=ce("ServiceIdentification>AccessConstraints",a),w=se("Layer",s),x=se("TileMatrixSet",s);return{copyright:j,layers:w.map((function(e){var t=ce("Identifier",e);return n.set(t,e),function(e,t,r,i,a){var n=ce("Abstract",t),o=le("Format",t);return{id:e,fullExtent:fe(t),description:n,formats:o,styles:de(t,i),title:ce("Title",t),tileMatrixSets:ye(a,t,r)}}(t,e,x,y,g)})),tileUrl:h,serviceMode:m,layerMap:n,dimensionMap:o}}function ae(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=ve(t.spatialReference.wkid,90.71428571428571*r.scale/96,e.id)})),t.dpi=96)}))})),e}function ne(e){return e.nodeType===Node.ELEMENT_NODE}function oe(e,t){for(var r=0;r<t.childNodes.length;r++){var i=t.childNodes[r];if(ne(i)&&i.nodeName===e)return i}return null}function se(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var a=t.childNodes[i];ne(a)&&a.nodeName===e&&r.push(a)}return r}function le(e,t){for(var r=[],i=0;i<t.childNodes.length;i++){var a=t.childNodes[i];ne(a)&&a.nodeName===e&&r.push(a)}return r.map((function(e){return e.textContent}))}function ce(e,t){return e.split(">").forEach((function(e){t&&(t=oe(e,t))})),t&&t.textContent}function ue(e,t,r,i){var a;return Array.prototype.slice.call(i.childNodes).some((function(i){if(i.nodeName.indexOf(e)>-1){var n=oe(t,i),o=n&&n.textContent;if(o===r||r.split(":")&&r.split(":")[1]===o)return a=i,!0}return!1})),a}function pe(e,t){var r,i=[],a=null==(r=e.layerMap)?void 0:r.get(t);if(a){var n,o,s,l,c=se("ResourceURL",a),u=se("Dimension",a);return u.length&&(n=ce("Identifier",u[0]),o=le("Default",u[0])||le("Value",u[0])),u.length>1&&(s=ce("Identifier",u[1]),l=le("Default",u[1])||le("Value",u[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:l}),c.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&o.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue}");else{var r=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");r>-1&&(t=t.substring(0,r)+"{dimensionValue}"+t.substring(r+n.length+2))}if(s&&l.length)if(t.indexOf("{"+s+"}")>-1)t=t.replace("{"+s+"}","{dimensionValue2}");else{var a=t.toLowerCase().indexOf("{"+s.toLowerCase()+"}");a>-1&&(t=t.substring(0,a)+"{dimensionValue2}"+t.substring(a+s.length+2))}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),i}}function fe(e){var t=oe("WGS84BoundingBox",e),r=t?ce("LowerCorner",t).split(" "):["-180","-90"],i=t?ce("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function de(e,t){return se("Style",e).map((function(e){var r=oe("LegendURL",e),i=oe("Keywords",e),a=i&&le("Keyword",i),n=r&&r.getAttribute("xlink:href");return t&&(n=n&&n.replace(/^http:/i,"https:")),{abstract:ce("Abstract",e),id:ce("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:a,legendUrl:n,title:ce("Title",e)}}))}function ye(e,t,r){return se("TileMatrixSetLink",t).map((function(e){return oe("TileMatrixSet",e).textContent})).map((function(i){return function(e,t,r,i){var a=le("TileMatrix",ue("TileMatrixSetLink","TileMatrixSet",t,r)),n=i.find((function(e){var r=oe("Identifier",e),i=r&&r.textContent;return!!(i===t||t.split(":")&&t.split(":")[1]===i)})),o=function(e){var t=ce("SupportedCRS",e);t&&(t=t.toLowerCase());var r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);var i=function(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}(t);Object(Q.i)(i)&&(r=i);var a=new ee.a({wkid:r}),n=ce("TopLeftCorner",oe("TileMatrix",e)).split(" "),o=n[0].split("E").map((function(e){return Number(e)})),s=n[1].split("E").map((function(e){return Number(e)})),l=o.length>1?o[0]*Math.pow(10,o[1]):o[0],c=s.length>1?s[0]*Math.pow(10,s[1]):s[0];return t.includes("epsg")&&me(r)?new Z.a(c,l,a):new Z.a(l,c,a)}(n),s=o.spatialReference,l=s.wkid,c=oe("TileMatrix",n),u=[parseInt(ce("TileWidth",c),10),parseInt(ce("TileHeight",c),10)],p=[];a.length?a.forEach((function(e,r){var i=ue("TileMatrix","Identifier",e,n);p.push(he(i,l,r,t))})):se("TileMatrix",n).forEach((function(e,r){p.push(he(e,l,r,t))}));var f=function(e,t,r,i,a){var n,o,s,l,c,u,p=oe("BoundingBox",t);if(p&&(n=ce("LowerCorner",p).split(" "),o=ce("UpperCorner",p).split(" ")),n&&n.length>1&&o&&o.length>1)s=parseFloat(n[0]),c=parseFloat(n[1]),l=parseFloat(o[0]),u=parseFloat(o[1]);else{var f=oe("TileMatrix",t),d=parseFloat(ce("MatrixWidth",f)),y=parseFloat(ce("MatrixHeight",f));s=r.x,u=r.y,l=s+d*i[0]*a.resolution,c=u-y*i[1]*a.resolution}return function(e,t){return"1.0.0"===e&&me(t.wkid)}(e,r.spatialReference)?new T.a(c,s,u,l,r.spatialReference):new T.a(s,c,l,u,r.spatialReference)}(e,n,o,u,p[0]);return{id:t,fullExtent:f.toJSON(),tileInfo:new V.a({dpi:96,spatialReference:s,size:u,origin:o,lods:p}).toJSON()}}(e,i,t,r)}))}function me(e){return re.some((function(t){var r=Object(q.a)(t,2),i=r[0],a=r[1];return e>=i&&e<=a}))}function he(e,t,r,i){var a,n=ce("Identifier",e),o=ce("ScaleDenominator",e).split("E").map((function(e){return Number(e)})),s=ve(t,a=o.length>1?o[0]*Math.pow(10,o[1]):o[0],i);return{level:r,levelValue:n,scale:a*=1.058267716535433,resolution:s}}function ve(e,t,r){return 7*t/25e3/(te.a.hasOwnProperty(String(e))?te.a.values[te.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object($.f)(e).metersPerDegree)}function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ge(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Object(u.a)(this,r)}}var je={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},we=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]),xe=function(e){Object(c.a)(n,e);var t,r,i=ge(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=i.call.apply(i,[this].concat(r)))._sublayersHandles=new b.a,e.copyright="",e.customParameters=null,e.customLayerParameters=null,e.fullExtent=null,e.operationalLayerType="WebTiledLayer",e.resourceInfo=null,e.serviceMode="RESTful",e.sublayers=null,e.type="wmts",e.version="1.0.0",e.watch("activeLayer",(function(t,r){r&&(r.layer=null),t&&(t.layer=Object(l.a)(e))}),!0),e.watch("sublayers",(function(t,r){r&&(r.forEach((function(e){e.layer=null})),e._sublayersHandles.removeAll(),e._sublayersHandles=null),t&&(t.forEach((function(t){t.layer=Object(l.a)(e)})),e._sublayersHandles||(e._sublayersHandles=new b.a),e._sublayersHandles.add([t.on("after-add",(function(t){t.item.layer=Object(l.a)(e)})),t.on("after-remove",(function(e){e.item.layer=null}))]))}),!0),e}return Object(s.a)(n,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Oe({url:e},t):e}},{key:"load",value:function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(w.u).then((function(){return t._fetchService(e)})).catch((function(e){throw Object(w.u)(e),new v.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}},{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"readActiveLayerFromService",value:function(e,t,r){var i,a=this;return this.activeLayer?t.layers.some((function(e){return e.id===a.activeLayer.id&&(i=e,!0)})):(this.activeLayer=new Y,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}},{key:"readActiveLayerFromItemOrWebDoc",value:function(e,t){var r=t.templateUrl,i=t.wmtsInfo,a=r?this._getLowerCasedUrlParams(r):null,n=i&&i.layerIdentifier,o=null,s=i&&i.tileMatrixSet;s&&(Array.isArray(s)?s.length&&(o=s[0]):o=s);var l=a&&a.format,c=a&&a.style;return new Y({id:n,imageFormat:l,styleId:c,tileMatrixSetId:o})}},{key:"writeActiveLayer",value:function(e,t,r,i){var a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);var n=Object(j.b)("tileMatrixSet.tileInfo",a);t.tileInfo=n?n.toJSON(i):null,t.wmtsInfo=Oe(Oe({},t.wmtsInfo),{},{layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId})}},{key:"readCustomParameters",value:function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}},{key:"fullExtents",get:function(){var e=[];return this.activeLayer.tileMatrixSets.forEach((function(t){t.fullExtent&&e.push(t.fullExtent)})),e}},{key:"readServiceMode",value:function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}},{key:"readSublayersFromService",value:function(e,t,r){return function(e,t){return e.map((function(e){var r=new Y;return r.read(e,t),r}))}(t.layers,r)}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()}},{key:"title",get:function(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"},set:function(e){e?this._override("title",e):this._clearOverride("title")}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}},{key:"createWebTileLayer",value:function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,a=new A.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new E.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:a})}},{key:"fetchTile",value:function(e,t,r){var i=this.getTileUrl(e,t,r);return Object(m.default)(i,{responseType:"image"}).then((function(e){return e.data}))}},{key:"findSublayerById",value:function(e){return this.sublayers.find((function(t){return t.id===e}))}},{key:"getTileUrl",value:function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],a=i?i.levelValue?i.levelValue:"".concat(i.level):"".concat(e),n=this.resourceInfo?"":function(e,t,r,i,a,n,o,s){var l=e.dimensionMap,c=pe(e,t),u=l.get(t).dimensions&&l.get(t).dimensions[0],p=l.get(t).dimensions2&&l.get(t).dimensions2[0],f="";if(c&&c.length>0){var d=null;c.some((function(e){return e.format===i&&(d=e,!0)})),d||(d=c[o%c.length]),f=d.template.replace(/\{Style\}/gi,a).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,n).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return f}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,a,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,a).replace(/\{row\}/gi,"".concat(t)).replace(/\{col\}/gi,"".concat(r))),n=this._appendCustomLayerParameters(n)}},{key:"getUrlTemplate",value:function(e,t,r,i){if(!this.resourceInfo){var a=function(e,t,r,i){var a=e.dimensionMap,n=pe(e,t),o="";if(n&&n.length>0){var s=a.get(t).dimensions&&a.get(t).dimensions[0],l=a.get(t).dimensions2&&a.get(t).dimensions2[0];(o=n[0].template).indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=(o=(o=(o=(o=(o=(o=o.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,s)).replace(/\{dimensionValue2\}/gi,l)}return o}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(a)return a}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var n="";return je[r.toLowerCase()]&&(n=je[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+n}return""}},{key:"_fetchService",value:(r=Object(a.a)(d.a.mark((function e(t){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.resourceInfo){e.next=4;break}"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),r={ssl:!1,data:this.resourceInfo},e.next=23;break;case 4:return e.prev=4,e.next=7,this._getCapabilities(this.serviceMode,t);case 7:r=e.sent,e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(4),i="KVP"===this.serviceMode?"RESTful":"KVP",e.prev=13,e.next=16,this._getCapabilities(i,t);case 16:r=e.sent,this.serviceMode=i,e.next=23;break;case 20:throw e.prev=20,e.t1=e.catch(13),new v.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e.t1});case 23:this.resourceInfo?r.data=ae(r.data):r.data=ie(r.data,{serviceMode:this.serviceMode,url:this.url}),r.data&&this.read(r.data,{origin:"service"});case 24:case"end":return e.stop()}}),e,this,[[4,10],[13,20]])}))),function(e){return r.apply(this,arguments)})},{key:"_getCapabilities",value:(t=Object(a.a)(d.a.mark((function e(t,r){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this._getCapabilitiesUrl(t),e.next=3,Object(m.default)(i,Oe(Oe({},r),{},{responseType:"text"}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"_getTileMatrixSetById",value:function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))}},{key:"_appendCustomParameters",value:function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}},{key:"_appendCustomLayerParameters",value:function(e){if(this.customLayerParameters||this.customParameters){var t=Oe(Oe({},Object(O.a)(this.customParameters)),this.customLayerParameters);for(var r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}},{key:"_getCapabilitiesUrl",value:function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t)}},{key:"_getLowerCasedUrlParams",value:function(e){if(!e)return null;var t=Object(x.K)(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r}},{key:"_mergeParams",value:function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?Object(O.a)(e):{},i.forEach((function(t){e.hasOwnProperty(t)||we.has(t)||(e[t]=r[t])})))}return e}}]),n}(Object(k.a)(Object(F.a)(Object(_.a)(Object(R.a)(Object(C.a)(Object(g.a)(L.a)))))));Object(y.a)([Object(M.b)()],xe.prototype,"dimensionMap",void 0),Object(y.a)([Object(M.b)()],xe.prototype,"layerMap",void 0),Object(y.a)([Object(M.b)({type:Y,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],xe.prototype,"activeLayer",null),Object(y.a)([Object(S.a)("service","activeLayer",["layers"])],xe.prototype,"readActiveLayerFromService",null),Object(y.a)([Object(S.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],xe.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(y.a)([Object(P.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:V.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],xe.prototype,"writeActiveLayer",null),Object(y.a)([Object(M.b)({type:String,value:"",json:{write:!0}})],xe.prototype,"copyright",void 0),Object(y.a)([Object(M.b)({type:["show","hide"]})],xe.prototype,"listMode",void 0),Object(y.a)([Object(M.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],xe.prototype,"customParameters",void 0),Object(y.a)([Object(S.a)("web-document","customParameters"),Object(S.a)("portal-item","customParameters")],xe.prototype,"readCustomParameters",null),Object(y.a)([Object(M.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],xe.prototype,"customLayerParameters",void 0),Object(y.a)([Object(M.b)({type:T.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],xe.prototype,"fullExtent",void 0),Object(y.a)([Object(M.b)({readOnly:!0})],xe.prototype,"fullExtents",null),Object(y.a)([Object(M.b)({type:["WebTiledLayer"]})],xe.prototype,"operationalLayerType",void 0),Object(y.a)([Object(M.b)()],xe.prototype,"resourceInfo",void 0),Object(y.a)([Object(M.b)()],xe.prototype,"serviceMode",void 0),Object(y.a)([Object(S.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],xe.prototype,"readServiceMode",null),Object(y.a)([Object(M.b)({type:h.a.ofType(Y)})],xe.prototype,"sublayers",void 0),Object(y.a)([Object(S.a)("service","sublayers",["layers"])],xe.prototype,"readSublayersFromService",null),Object(y.a)([Object(M.b)({readOnly:!0})],xe.prototype,"supportedSpatialReferences",null),Object(y.a)([Object(M.b)({json:{read:{source:"title"}}})],xe.prototype,"title",null),Object(y.a)([Object(M.b)({json:{read:!1},readOnly:!0,value:"wmts"})],xe.prototype,"type",void 0),Object(y.a)([Object(M.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],xe.prototype,"url",null),Object(y.a)([Object(M.b)()],xe.prototype,"version",void 0);var Me=xe=Object(y.a)([Object(I.a)("esri.layers.WMTSLayer")],xe);t.default=Me}}]);
//# sourceMappingURL=139-4406a7f51266ed0dd538.js.map