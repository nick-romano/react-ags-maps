(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"5x1K":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return d})),t.d(a,"default",(function(){return l}));var o=t("Fcif"),p=t("+I+c"),n=(t("ERkP"),t("/FXl")),i=t("TjRS"),s=t("ZFoC"),r=t("ueY8"),c=(t("aD51"),["components"]),d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Map Component/Map.mdx"}});var b={_frontmatter:d},m=i.a;function l(e){var a,t,l,u,h,f=e.components,y=Object(p.a)(e,c);return Object(n.b)(m,Object(o.a)({},b,y,{components:f,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"map"},"Map"),Object(n.b)("h2",{id:"basic-usage"},"Basic usage"),Object(n.b)(s.c,{__position:0,__code:"<div style={{ height: '500px', width: '100%' }}>\n  <Map id=\"myMap\" theme=\"light\"></Map>\n</div>",__scope:(a={props:y,DefaultLayout:i.a,Playground:s.c,Props:s.d,Map:r.a},a.DefaultLayout=i.a,a._frontmatter=d,a),mdxType:"Playground"},Object(n.b)("div",{style:{height:"500px",width:"100%"}},Object(n.b)(r.a,{id:"myMap",theme:"light",mdxType:"Map"}))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)(s.d,{of:r.a,mdxType:"Props"}),Object(n.b)("b",null,"viewProps and mapProps accept parameters from that ArcGIS for JavaScript API.")," ",Object(n.b)("br",null),"- ",Object(n.b)("a",{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#properties-summary",target:"_blank"},"viewProps")," ",Object(n.b)("br",null),"- ",Object(n.b)("a",{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#properties-summary",target:"_blank"},"mapProps"),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("h3",{id:"passing-a-webmapid"},"passing a webMapId"),Object(n.b)("p",null,"we can easily load a webmap using the webMapId prop"),Object(n.b)(s.c,{__position:2,__code:'<div style={{ height: \'500px\', width: \'100%\' }}>\n  <Map\n    id="webmap"\n    theme="light"\n    webMapId="f2e9b762544945f390ca4ac3671cfa72"\n  ></Map>\n</div>',__scope:(t={props:y,DefaultLayout:i.a,Playground:s.c,Props:s.d,Map:r.a},t.DefaultLayout=i.a,t._frontmatter=d,t),mdxType:"Playground"},Object(n.b)("div",{style:{height:"500px",width:"100%"}},Object(n.b)(r.a,{id:"webmap",theme:"light",webMapId:"f2e9b762544945f390ca4ac3671cfa72",mdxType:"Map"}))),Object(n.b)("h3",{id:"passing-custom-mapprops"},"Passing Custom mapProps"),Object(n.b)("p",null,"we'll use a different basemap based on passing different mapProps. In this case we'll use the topo basemap"),Object(n.b)(s.c,{__position:3,__code:"<div style={{ height: '500px', width: '100%' }}>\n  <Map\n    id=\"TopoBasemap\"\n    theme=\"light\"\n    mapProps={{ basemap: 'topo' }}\n    webMapId=\"f2e9b762544945f390ca4ac3671cfa72\"\n  ></Map>\n</div>",__scope:(l={props:y,DefaultLayout:i.a,Playground:s.c,Props:s.d,Map:r.a},l.DefaultLayout=i.a,l._frontmatter=d,l),mdxType:"Playground"},Object(n.b)("div",{style:{height:"500px",width:"100%"}},Object(n.b)(r.a,{id:"TopoBasemap",theme:"light",mapProps:{basemap:"topo"},webMapId:"f2e9b762544945f390ca4ac3671cfa72",mdxType:"Map"}))),Object(n.b)("h3",{id:"passing-custom-viewprops"},"Passing Custom viewProps"),Object(n.b)("p",null,"let's disable mouseWheelZoomEnabled and momentumEnabled, and add a zoom and center"),Object(n.b)(s.c,{__position:4,__code:"<div style={{ height: '500px', width: '100%' }}>\n  <Map\n    id=\"viewProps\"\n    viewProps={{\n      center: [176.185, -37.643],\n      zoom: 13,\n      navigation: {\n        gamepad: {\n          enabled: false,\n        },\n        browserTouchPanEnabled: false,\n        momentumEnabled: false,\n        mouseWheelZoomEnabled: false,\n      },\n    }}\n  />\n</div>",__scope:(u={props:y,DefaultLayout:i.a,Playground:s.c,Props:s.d,Map:r.a},u.DefaultLayout=i.a,u._frontmatter=d,u),mdxType:"Playground"},Object(n.b)("div",{style:{height:"500px",width:"100%"}},Object(n.b)(r.a,{id:"viewProps",viewProps:{center:[176.185,-37.643],zoom:13,navigation:{gamepad:{enabled:!1},browserTouchPanEnabled:!1,momentumEnabled:!1,mouseWheelZoomEnabled:!1}},mdxType:"Map"}))),Object(n.b)("h3",{id:"centerx-centery-and-zoom-props"},"centerX, centerY, and zoom Props"),Object(n.b)("p",null,"you can also centerX, centerY, and zoom thru props"),Object(n.b)(s.c,{__position:5,__code:"<div style={{ height: '500px', width: '100%' }}>\n  <Map id=\"zoomProps\" zoom={8} centerX={-76.44} centerY={39.3} />\n</div>",__scope:(h={props:y,DefaultLayout:i.a,Playground:s.c,Props:s.d,Map:r.a},h.DefaultLayout=i.a,h._frontmatter=d,h),mdxType:"Playground"},Object(n.b)("div",{style:{height:"500px",width:"100%"}},Object(n.b)(r.a,{id:"zoomProps",zoom:8,centerX:-76.44,centerY:39.3,mdxType:"Map"}))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Map Component/Map.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-map-component-map-mdx-b55de391e83e14088284.js.map