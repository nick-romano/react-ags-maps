(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{jOoW:function(e,r,n){"use strict";n.d(r,"a",(function(){return w})),n.d(r,"b",(function(){return u})),n.d(r,"c",(function(){return b})),n.d(r,"d",(function(){return x})),n.d(r,"e",(function(){return a})),n.d(r,"f",(function(){return c})),n.d(r,"g",(function(){return o})),n.d(r,"h",(function(){return v})),n.d(r,"i",(function(){return i})),n.d(r,"j",(function(){return d})),n.d(r,"k",(function(){return m})),n.d(r,"l",(function(){return p})),n.d(r,"m",(function(){return l}));var t=n("7im+");n("nd5+"),n("+MdM");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return[e[0],e[1],e[2],e[3],e[4],e[5]]}function i(e,r,n,t,i,a){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:u();return o[0]=e,o[1]=r,o[2]=n,o[3]=t,o[4]=i,o[5]=a,o}function a(e,r){e[0]=Math.min(e[0],r[0]),e[1]=Math.min(e[1],r[1]),e[2]=Math.min(e[2],r[2]),e[3]=Math.max(e[3],r[3]),e[4]=Math.max(e[4],r[4]),e[5]=Math.max(e[5],r[5])}function o(e,r){e[0]=Math.min(e[0],r[0]),e[1]=Math.min(e[1],r[1]),e[2]=Math.min(e[2],r[2]),e[3]=Math.max(e[3],r[0]),e[4]=Math.max(e[4],r[1]),e[5]=Math.max(e[5],r[2])}function c(e,r,n){var t=r.length,u=e[0],i=e[1],a=e[2],o=e[3],c=e[4],s=e[5];if(n)for(var f=0;f<t;f++){var h=r[f];u=Math.min(u,h[0]),i=Math.min(i,h[1]),a=Math.min(a,h[2]),o=Math.max(o,h[0]),c=Math.max(c,h[1]),s=Math.max(s,h[2])}else for(var l=0;l<t;l++){var p=r[l];u=Math.min(u,p[0]),i=Math.min(i,p[1]),o=Math.max(o,p[0]),c=Math.max(c,p[1])}e[0]=u,e[1]=i,e[2]=a,e[3]=o,e[4]=c,e[5]=s}function s(e){return e[0]>=e[3]?0:e[3]-e[0]}function f(e){return e[1]>=e[4]?0:e[4]-e[1]}function h(e){return e[2]>=e[5]?0:e[5]-e[2]}function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];return r[0]=s(e),r[1]=f(e),r[2]=h(e),r}function p(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n!==e&&(n[3]=e[3],n[4]=e[4],n[5]=e[5]),n}function m(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return n[3]=r[0],n[4]=r[1],n[5]=r[2],n!==e&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),e}function d(e,r){return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e}function b(e){return e?d(e,w):u(w)}function v(e,r){return e[0]=r[0],e[1]=r[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=r[2],e[4]=r[3],e[5]=Number.POSITIVE_INFINITY,e}function y(e){return 6===e.length}function x(e,r,n){if(Object(t.h)(e)||Object(t.h)(r))return e===r;if(!y(e)||!y(r))return!1;if(n){for(var u=0;u<e.length;u++)if(!n(e[u],r[u]))return!1}else for(var i=0;i<e.length;i++)if(e[i]!==r[i])return!1;return!0}var w=[1/0,1/0,1/0,-1/0,-1/0,-1/0],j=[0,0,0,0,0,0];u()},"yF5+":function(e,r,n){"use strict";n.r(r),n.d(r,"clearBoundingBoxCache",(function(){return x})),n.d(r,"computeIconLayerResourceSize",(function(){return O})),n.d(r,"computeLayerResourceSize",(function(){return w})),n.d(r,"computeLayerSize",(function(){return j})),n.d(r,"computeObjectLayerResourceSize",(function(){return z}));var t=n("eijD"),u=n("NthX"),i=n.n(u),a=n("DGz/"),o=n("Mp7X"),c=n("5iHx"),s=n("7im+"),f=n("jOoW"),h=(n("J4Pc"),n("4vgF"));function l(e,r){var n=r.isPrimitive,t=r.width,u=r.depth,i=r.height,a=n?10:1;if(null==t&&null==i&&null==u)return[a*e[0],a*e[1],a*e[2]];for(var o,c=Object(h.g)(t,u,i),s=0;s<3;s++){var f=c[s];if(null!=f){o=f/e[s];break}}for(var l=0;l<3;l++)null==c[l]&&(c[l]=e[l]*o);return c}var p=Object(f.i)(-.5,-.5,-.5,.5,.5,.5),m=Object(f.i)(-.5,-.5,0,.5,.5,1),d=Object(f.i)(-.5,-.5,0,.5,.5,.5);function b(e){switch(e){case"sphere":case"cube":case"diamond":return p;case"cylinder":case"cone":case"inverted-cone":return m;case"tetrahedron":return d;default:return}}var v=y();function y(){return new c.a(50)}function x(){v=y()}function w(e,r){if("icon"===e.type)return O(e,r);if("object"===e.type)return z(e,r);throw new o.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function j(e,r){return M.apply(this,arguments)}function M(){return(M=Object(t.a)(i.a.mark((function e(r,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("icon"!==r.type){e.next=2;break}return e.abrupt("return",k(r,n));case 2:if("object"!==r.type){e.next=4;break}return e.abrupt("return",N(r,n));case 4:throw new o.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,r){return g.apply(this,arguments)}function g(){return(g=Object(t.a)(i.a.mark((function e(r,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.resource.href){e.next=2;break}return e.abrupt("return",I(r.resource.href).then((function(e){return[e.width,e.height]})));case 2:if(!r.resource.primitive){e.next=4;break}return e.abrupt("return",Object(s.i)(n)?[n,n]:[256,256]);case 4:throw new o.a("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r){return O(e,r).then((function(r){if(null==e.size)return r;var n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]}))}function I(e){return Object(a.default)(e,{responseType:"image"}).then((function(e){return e.data}))}function z(e,r){return function(e,r){return S.apply(this,arguments)}(e,r).then((function(e){return Object(f.m)(e)}))}function N(e,r){return P.apply(this,arguments)}function P(){return(P=Object(t.a)(i.a.mark((function e(r,n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(r,n);case 2:return t=e.sent,e.abrupt("return",l(t,r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(t.a)(i.a.mark((function e(r,t){var u,a,c,h,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.isPrimitive){e.next=11;break}if(u=r.resource.href,void 0===(a=v.get(u))){e.next=4;break}return e.abrupt("return",Promise.resolve(a));case 4:return e.next=6,Promise.all([n.e(0),n.e(1),n.e(47)]).then(n.bind(null,"xv/a"));case 6:return c=e.sent,e.next=9,c.fetch(u,{disableTextures:!0});case 9:return h=e.sent,e.abrupt("return",(v.put(u,h.referenceBoundingBox),h.referenceBoundingBox));case 11:if(l=null,r.resource&&r.resource.primitive&&(l=Object(f.b)(b(r.resource.primitive)),Object(s.i)(t)))for(p=0;p<l.length;p++)l[p]*=t;return e.abrupt("return",l?Promise.resolve(l):Promise.reject(new o.a("symbol:invalid-resource","The symbol does not have a valid resource")));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=66-0caf5c64e8b7913cdc4e.js.map