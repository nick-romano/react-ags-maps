(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{eWDn:function(e,t,i){"use strict";i.r(t);var a=i("aNYv"),n=i("eijD"),r=i("hisu"),u=i("yBJb"),l=i("4Mpa"),s=i("CHlC"),c=i("kMo5"),o=i("P+uj"),f=(i("QDHd"),i("NthX")),h=i.n(f),p=i("dQW7"),d=i("UfAV"),y=i("IH5m"),v=i("xAIp"),b=(i("J4Pc"),i("wckI"),i("TM+E"),i("iaHD")),_=i("3p7a"),w=i("5j12"),j=i("55C+"),k=i("xTsm"),O=i("0s/2"),m=i("ajvB"),S=i("bPf0"),g=i("TRFF");function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,a=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;i=Reflect.construct(a,arguments,n)}else i=a.apply(this,arguments);return Object(c.a)(this,i)}}var R=[102113,102100,3857,3785,900913],I=function(e){Object(s.a)(f,e);var t,i,c=x(f);function f(){var e;return Object(r.a)(this,f),(e=c.apply(this,arguments))._handles=new d.a,e._tileStrategy=null,e._fetchQueue=null,e._tileRequests=new Map,e.layer=null,e}return Object(u.a)(f,[{key:"tileMatrixSet",get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}},{key:"attach",value:function(){var e=this,t=this.layer.activeLayer,i=this.tileMatrixSet;if(i){var a=i.tileInfo.spatialReference,n=t.fullExtent&&t.fullExtent.clone();a.isWebMercator?n=Object(_.b)(n):a.isWGS84||(n=i.fullExtent),this._tileInfoView=new k.a(i.tileInfo,n),this._fetchQueue=new O.a({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new m.a({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(function(){return e._refresh()}))),Object(l.a)(Object(o.a)(f.prototype),"attach",this).call(this)}}},{key:"detach",value:function(){Object(l.a)(Object(o.a)(f.prototype),"detach",this).call(this),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"doRefresh",value:(i=Object(n.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||this._refresh();case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"isUpdating",value:function(){return this._fetchQueue.length>0}},{key:"acquireTile",value:function(e){var t,i,n,r,u=this,l=this._bitmapView.createTile(e),s=l.bitmap;t=this._tileInfoView.getTileCoords([0,0],l.key),i=Object(a.a)(t,2),s.x=i[0],s.y=i[1],s.resolution=this._tileInfoView.getTileResolution(l.key),n=this._tileInfoView.tileInfo.size,r=Object(a.a)(n,2),s.width=r[0],s.height=r[1],this._tileInfoView.getTileCoords(s,l.key);var c={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(l.key).then((function(e){l.bitmap.source=e,l.once("attach",(function(){return u.requestUpdate()})),u._bitmapView.addChild(l)})).catch((function(e){Object(y.m)(e)||(l.bitmap.source=null,l.once("attach",(function(){return u.requestUpdate()})),u._bitmapView.addChild(l))}))};return c.promise.finally((function(){return c.fulfilled=!0})),this._tileRequests.set(l,c),this.requestUpdate(),l}},{key:"releaseTile",value:function(e){var t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:(t=Object(n.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"canResume",value:function(){var e=Object(l.a)(Object(o.a)(f.prototype),"canResume",this).call(this);return e?null!==this.tileMatrixSet:e}},{key:"_refresh",value:function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){if(t.bitmap.source){var i={id:t.key.id,fulfilled:!1,promise:e._fetchQueue.push(t.key).then((function(e){t.bitmap.source=e})).catch((function(e){Object(y.m)(e)||(t.bitmap.source=null)})).finally((function(){t.requestRender(),e.notifyChange("updating"),i.fulfilled=!0}))};e._tileRequests.set(t,i)}})),this.notifyChange("updating")}},{key:"_getTileMatrixSetBySpatialReference",value:function(e){var t=this.view.spatialReference;if(!e.tileMatrixSets)return null;var i=e.tileMatrixSets.find((function(e){return e.tileInfo.spatialReference.wkid===t.wkid}));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((function(e){return R.indexOf(e.tileInfo.spatialReference.wkid)>-1}))),i}}]),f}(Object(g.a)(Object(w.a)(Object(j.a)(S.a))));Object(p.a)([Object(v.b)()],I.prototype,"suspended",void 0),Object(p.a)([Object(v.b)({readOnly:!0})],I.prototype,"tileMatrixSet",null);var M=I=Object(p.a)([Object(b.a)("esri.views.2d.layers.WMTSLayerView2D")],I);t.default=M}}]);
//# sourceMappingURL=168-6aa6b97f232938c1360c.js.map