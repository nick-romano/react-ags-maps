(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{"6+06":function(e,t,r){"use strict";r.r(t);var i=r("aNYv"),a=r("eijD"),n=r("hisu"),u=r("yBJb"),s=r("4Mpa"),c=r("CHlC"),l=r("kMo5"),o=r("P+uj"),h=r("NthX"),f=r.n(h),p=r("dQW7"),y=r("Mp7X"),v=r("TM+E"),b=r("7im+"),m=r("IH5m"),w=r("xAIp"),d=(r("J4Pc"),r("wckI"),r("iaHD")),g=r("5j12"),j=r("55C+"),k=r("xTsm"),O=r("60x+"),_=r("0s/2"),I=r("ajvB"),x=r("bPf0"),T=r("TRFF"),V=r("6CzD"),R=r("aIyS");function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Object(l.a)(this,r)}}var F=function(e){var t=function(e){Object(c.a)(i,e);var t,r=q(i);function i(){return Object(n.a)(this,i),r.apply(this,arguments)}return Object(u.a)(i,[{key:"fetchPopupFeatures",value:(t=Object(a.a)(f.a.mark((function e(t,r){var i,n,u,s=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layer,t){e.next=3;break}return e.abrupt("return",Promise.reject(new y.a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i})));case 3:if("tile"===i.type){e.next=5;break}return e.abrupt("return",Promise.reject(new y.a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type})));case 5:return n=this.get("view.scale"),u=i.allSublayers.toArray().filter((function(e){var t=0===e.minScale||n<=e.minScale,r=0===e.maxScale||n>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&r})),e.abrupt("return",Object(m.j)(u.map(function(){var e=Object(a.a)(f.a.mark((function e(i){var a,n,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.createQuery(),n=Object(b.i)(r)?r.event:null,u=Object(R.a)({renderer:i.renderer,event:n}),a.geometry=s.createFetchPopupFeaturesQueryGeometry(t,u),e.next=4,i.popupTemplate.getRequiredFields();case 4:return a.outFields=e.sent,e.next=7,i.queryFeatures(a);case 7:return e.abrupt("return",e.sent.features);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t;return(t=[]).concat.apply(t,Object(V.a)(e.map((function(e){return e.value})).filter(Boolean)))})));case 7:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),i}(e);return Object(p.a)([Object(w.b)()],t.prototype,"layer",void 0),t=Object(p.a)([Object(d.a)("esri.layers.mixins.TileLayerView")],t)},C=r("VLTM");function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Object(l.a)(this,r)}}var P=v.a.getLogger("esri.views.2d.layers.TileLayerView2D"),S=[0,0],B=function(e){Object(c.a)(v,e);var t,r,l,h,p=Q(v);function v(){var e;return Object(n.a)(this,v),(e=p.apply(this,arguments))._tileStrategy=null,e._fetchQueue=null,e.layer=null,e}return Object(u.a)(v,[{key:"initialize",value:function(){var e,t=this,r=this.layer.tileInfo,i=r&&r.spatialReference;i||(e=new y.a("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(e=new y.a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(function(){t.refresh()})),e&&this.addResolvingPromise(Promise.reject(e))}},{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new k.a(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new _.a({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,r){return e.fetchTile(t,r)}}),this._tileStrategy=new I.a({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),Object(s.a)(Object(o.a)(v.prototype),"attach",this).call(this)}},{key:"detach",value:function(){Object(s.a)(Object(o.a)(v.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQueryGeometry",value:function(e,t){return Object(C.a)(e,t,this.view)}},{key:"doRefresh",value:(h=Object(a.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){return t._enqueueTileFetch(e)})),this.notifyChange("updating"));case 1:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"isUpdating",value:function(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}},{key:"acquireTile",value:function(e){var t,r,a,n,u=this._bitmapView.createTile(e),s=u.bitmap;return t=this._tileInfoView.getTileCoords(S,u.key),r=Object(i.a)(t,2),s.x=r[0],s.y=r[1],s.resolution=this._tileInfoView.getTileResolution(u.key),a=this._tileInfoView.tileInfo.size,n=Object(i.a)(a,2),s.width=n[0],s.height=n[1],this._enqueueTileFetch(u),this._bitmapView.addChild(u),this.requestUpdate(),u}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:(l=Object(a.a)(f.a.mark((function e(t,r){var i,a,n,u,s,c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="tilemapCache"in this.layer?this.layer.tilemapCache:null,a=!Object(b.h)(r)&&r.signal,i){e.next=13;break}return e.prev=2,e.next=5,this._fetchImage(t,a);case 5:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),Object(m.m)(e.t0)||this.resampling){e.next=12;break}return e.abrupt("return",this._createBlankImage());case 12:throw e.t0;case 13:return n=new O.a(0,0,0,0),e.prev=14,e.next=17,i.fetchAvailabilityUpsample(t.level,t.row,t.col,n,{signal:a});case 17:if(n.level===t.level||this.resampling){e.next=19;break}return e.abrupt("return",this._createBlankImage());case 19:return e.next=21,this._fetchImage(n,a);case 21:u=e.sent,e.next=31;break;case 24:if(e.prev=24,e.t1=e.catch(14),!Object(m.m)(e.t1)){e.next=28;break}throw e.t1;case 28:return e.next=30,this._fetchImage(t,a);case 30:u=e.sent;case 31:return s=n.level,c=n.row,l=n.col,e.abrupt("return",this.resampling&&s!==t.level?this._resampleImage(u,s,c,l,t.level,t.row,t.col):u);case 33:case"end":return e.stop()}}),e,this,[[2,8],[14,24]])}))),function(e,t){return l.apply(this,arguments)})},{key:"_enqueueTileFetch",value:(r=Object(a.a)(f.a.mark((function e(t){var r,i=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:r=e.sent,t.bitmap.source=r,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return i.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(m.m)(e.t0)||P.error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(e){return r.apply(this,arguments)})},{key:"_fetchImage",value:(t=Object(a.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col,{timestamp:this.refreshTimestamp,signal:r}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"_resampleImage",value:function(e,t,r,i,a,n,u){var s=this._tileInfoView.tileInfo.size,c=this._tileInfoView.getTileResolution(t),l=this._tileInfoView.getTileResolution(a),o=this._tileInfoView.getLODInfoAt(a),h=o.getXForColumn(u),f=o.getYForRow(n),p=(o=this._tileInfoView.getLODInfoAt(t)).getXForColumn(i),y=o.getYForRow(r),v=Math.round((h-p)/c),b=Math.round(-(f-y)/c),m=Math.round(s[0]*(l/c)),w=Math.round(s[1]*(l/c)),d=this._createBlankImage();return d.getContext("2d").drawImage(e,v,b,m,w,0,0,s[0],s[1]),d}},{key:"_createBlankImage",value:function(){var e,t,r=this._tileInfoView.tileInfo.size,a=document.createElement("canvas");return e=r,t=Object(i.a)(e,2),a.width=t[0],a.height=t[1],a}}]),v}(F(Object(T.a)(Object(g.a)(Object(j.a)(x.a)))));Object(p.a)([Object(w.b)()],B.prototype,"resampling",null);var U=B=Object(p.a)([Object(d.a)("esri.views.2d.layers.TileLayerView2D")],B);t.default=U}}]);
//# sourceMappingURL=165-e9e929da6655f5fe2b51.js.map