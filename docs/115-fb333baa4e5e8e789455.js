(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{wfRM:function(n,r,e){"use strict";e.r(r),e.d(r,"buffer",(function(){return J})),e.d(r,"clip",(function(){return a})),e.d(r,"contains",(function(){return c})),e.d(r,"convexHull",(function(){return m})),e.d(r,"crosses",(function(){return f})),e.d(r,"cut",(function(){return o})),e.d(r,"densify",(function(){return j})),e.d(r,"difference",(function(){return x})),e.d(r,"disjoint",(function(){return y})),e.d(r,"distance",(function(){return l})),e.d(r,"equals",(function(){return p})),e.d(r,"extendedSpatialReferenceInfo",(function(){return d})),e.d(r,"flipHorizontal",(function(){return k})),e.d(r,"flipVertical",(function(){return N})),e.d(r,"generalize",(function(){return O})),e.d(r,"geodesicArea",(function(){return M})),e.d(r,"geodesicBuffer",(function(){return V})),e.d(r,"geodesicDensify",(function(){return q})),e.d(r,"geodesicLength",(function(){return W})),e.d(r,"intersect",(function(){return R})),e.d(r,"intersects",(function(){return s})),e.d(r,"isSimple",(function(){return v})),e.d(r,"nearestCoordinate",(function(){return b})),e.d(r,"nearestVertex",(function(){return z})),e.d(r,"nearestVertices",(function(){return D})),e.d(r,"offset",(function(){return S})),e.d(r,"overlaps",(function(){return G})),e.d(r,"planarArea",(function(){return B})),e.d(r,"planarLength",(function(){return C})),e.d(r,"relate",(function(){return g})),e.d(r,"rotate",(function(){return L})),e.d(r,"simplify",(function(){return w})),e.d(r,"symmetricDifference",(function(){return E})),e.d(r,"touches",(function(){return h})),e.d(r,"union",(function(){return I})),e.d(r,"within",(function(){return A}));var t=e("MJAk"),u=e("cW/n");function i(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function d(n){return t.G.extendedSpatialReferenceInfo(n)}function a(n,r){return t.G.clip(u.hydratedAdapter,i(n),n,r)}function o(n,r){return t.G.cut(u.hydratedAdapter,i(n),n,r)}function c(n,r){return t.G.contains(u.hydratedAdapter,i(n),n,r)}function f(n,r){return t.G.crosses(u.hydratedAdapter,i(n),n,r)}function l(n,r,e){return t.G.distance(u.hydratedAdapter,i(n),n,r,e)}function p(n,r){return t.G.equals(u.hydratedAdapter,i(n),n,r)}function s(n,r){return t.G.intersects(u.hydratedAdapter,i(n),n,r)}function h(n,r){return t.G.touches(u.hydratedAdapter,i(n),n,r)}function A(n,r){return t.G.within(u.hydratedAdapter,i(n),n,r)}function y(n,r){return t.G.disjoint(u.hydratedAdapter,i(n),n,r)}function G(n,r){return t.G.overlaps(u.hydratedAdapter,i(n),n,r)}function g(n,r,e){return t.G.relate(u.hydratedAdapter,i(n),n,r,e)}function v(n){return t.G.isSimple(u.hydratedAdapter,i(n),n)}function w(n){return t.G.simplify(u.hydratedAdapter,i(n),n)}function m(n){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.G.convexHull(u.hydratedAdapter,i(n),n,r)}function x(n,r){return t.G.difference(u.hydratedAdapter,i(n),n,r)}function E(n,r){return t.G.symmetricDifference(u.hydratedAdapter,i(n),n,r)}function R(n,r){return t.G.intersect(u.hydratedAdapter,i(n),n,r)}function I(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.G.union(u.hydratedAdapter,i(n),n,r)}function S(n,r,e,d,a,o){return t.G.offset(u.hydratedAdapter,i(n),n,r,e,d,a,o)}function J(n,r,e){var d=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.G.buffer(u.hydratedAdapter,i(n),n,r,e,d)}function V(n,r,e,d,a,o){return t.G.geodesicBuffer(u.hydratedAdapter,i(n),n,r,e,d,a,o)}function b(n,r){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.G.nearestCoordinate(u.hydratedAdapter,i(n),n,r,e)}function z(n,r){return t.G.nearestVertex(u.hydratedAdapter,i(n),n,r)}function D(n,r,e,d){return t.G.nearestVertices(u.hydratedAdapter,i(n),n,r,e,d)}function H(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function L(n,r,e){var u;if(null==n)throw new Error("Illegal Argument Exception");var i=n.spatialReference;if(null==(e=null!=(u=e)?u:H(n)))throw new Error("Illegal Argument Exception");var d=n.constructor.fromJSON(t.G.rotate(n,r,e));return d.spatialReference=i,d}function k(n,r){var e;if(null==n)throw new Error("Illegal Argument Exception");var u=n.spatialReference;if(null==(r=null!=(e=r)?e:H(n)))throw new Error("Illegal Argument Exception");var i=n.constructor.fromJSON(t.G.flipHorizontal(n,r));return i.spatialReference=u,i}function N(n,r){var e;if(null==n)throw new Error("Illegal Argument Exception");var u=n.spatialReference;if(null==(r=null!=(e=r)?e:H(n)))throw new Error("Illegal Argument Exception");var i=n.constructor.fromJSON(t.G.flipVertical(n,r));return i.spatialReference=u,i}function O(n,r,e,d){return t.G.generalize(u.hydratedAdapter,i(n),n,r,e,d)}function j(n,r,e){return t.G.densify(u.hydratedAdapter,i(n),n,r,e)}function q(n,r,e){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.G.geodesicDensify(u.hydratedAdapter,i(n),n,r,e,d)}function B(n,r){return t.G.planarArea(u.hydratedAdapter,i(n),n,r)}function C(n,r){return t.G.planarLength(u.hydratedAdapter,i(n),n,r)}function M(n,r,e){return t.G.geodesicArea(u.hydratedAdapter,i(n),n,r,e)}function W(n,r,e){return t.G.geodesicLength(u.hydratedAdapter,i(n),n,r,e)}}}]);
//# sourceMappingURL=115-fb333baa4e5e8e789455.js.map