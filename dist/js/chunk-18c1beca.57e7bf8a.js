(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c1beca"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return C}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("9b76"),i=r("8690"),l=r("365c"),u=r("d82f"),s=r("cf75"),f=r("d580"),d=r("6197"),O=r("b885"),j=r("670f"),p=r("4918");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=Object(s["d"])(Object(u["m"])(h(h({},Object(u["k"])(p["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(s["c"])(o["g"],!1),end:Object(s["c"])(o["g"],!1),start:Object(s["c"])(o["g"],!1),top:Object(s["c"])(o["g"],!1)})),a["m"]),v=c["default"].extend({name:a["m"],functional:!0,props:y,render:function(t,e){var r=e.props,c=e.data,a=r.src,o=r.alt,b=r.width,i=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),t("img",Object(n["a"])(c,{class:l,attrs:{src:a,alt:o,width:b,height:i}}))}});function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=Object(s["a"])(y,s["f"].bind(null,"img"));T.imgSrc.required=!1;var D=Object(s["d"])(Object(u["m"])(P(P(P(P(P(P({},d["b"]),O["b"]),j["b"]),T),f["a"]),{},{align:Object(s["c"])(o["t"]),noBody:Object(s["c"])(o["g"],!1)})),a["i"]),C=c["default"].extend({name:a["i"],functional:!0,props:D,render:function(t,e){var r,c=e.props,a=e.data,o=e.slots,u=e.scopedSlots,f=c.imgSrc,p=c.imgLeft,g=c.imgRight,h=c.imgStart,m=c.imgEnd,y=c.imgBottom,w=c.header,P=c.headerHtml,D=c.footer,C=c.footerHtml,k=c.align,S=c.textVariant,V=c.bgVariant,B=c.borderVariant,E=u||{},J=o(),W={},H=t(),_=t();if(f){var q=t(v,{props:Object(s["e"])(T,c,s["h"].bind(null,"img"))});y?_=q:H=q}var z=t(),I=Object(l["a"])(b["r"],E,J);(I||w||P)&&(z=t(O["a"],{props:Object(s["e"])(O["b"],c),domProps:I?{}:Object(i["a"])(P,w)},Object(l["b"])(b["r"],W,E,J)));var M=Object(l["b"])(b["i"],W,E,J);c.noBody||(M=t(d["a"],{props:Object(s["e"])(d["b"],c)},M),c.overlay&&f&&(M=t("div",{staticClass:"position-relative"},[H,M,_]),H=t(),_=t()));var R=t(),A=Object(l["a"])(b["q"],E,J);return(A||D||C)&&(R=t(j["a"],{props:Object(s["e"])(j["b"],c),domProps:I?{}:Object(i["a"])(C,D)},Object(l["b"])(b["q"],W,E,J))),t(c.tag,Object(n["a"])(a,{staticClass:"card",class:(r={"flex-row":p||h,"flex-row-reverse":(g||m)&&!(p||h)},x(r,"text-".concat(k),k),x(r,"bg-".concat(V),V),x(r,"border-".concat(B),B),x(r,"text-".concat(S),S),r)}),[H,z,M,R,_])}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return g}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("2326"),i=r("6c06"),l=r("7b1e"),u=r("3a58"),s=r("cf75"),f=r("fa73");function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',j=function(t,e,r){var c=encodeURIComponent(O.replace("%{w}",Object(f["g"])(t)).replace("%{h}",Object(f["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(c)},p=Object(s["d"])({alt:Object(s["c"])(o["t"]),blank:Object(s["c"])(o["g"],!1),blankColor:Object(s["c"])(o["t"],"transparent"),block:Object(s["c"])(o["g"],!1),center:Object(s["c"])(o["g"],!1),fluid:Object(s["c"])(o["g"],!1),fluidGrow:Object(s["c"])(o["g"],!1),height:Object(s["c"])(o["o"]),left:Object(s["c"])(o["g"],!1),right:Object(s["c"])(o["g"],!1),rounded:Object(s["c"])(o["j"],!1),sizes:Object(s["c"])(o["f"]),src:Object(s["c"])(o["t"]),srcset:Object(s["c"])(o["f"]),thumbnail:Object(s["c"])(o["g"],!1),width:Object(s["c"])(o["o"])},a["M"]),g=c["default"].extend({name:a["M"],functional:!0,props:p,render:function(t,e){var r,c=e.props,a=e.data,o=c.alt,s=c.src,O=c.block,p=c.fluidGrow,g=c.rounded,h=Object(u["b"])(c.width)||null,m=Object(u["b"])(c.height)||null,y=null,v=Object(b["b"])(c.srcset).filter(i["a"]).join(","),w=Object(b["b"])(c.sizes).filter(i["a"]).join(",");return c.blank&&(!m&&h?m=h:!h&&m&&(h=m),h||m||(h=1,m=1),s=j(h,m,c.blankColor||"transparent"),v=null,w=null),c.left?y="float-left":c.right?y="float-right":c.center&&(y="mx-auto",O=!0),t("img",Object(n["a"])(a,{attrs:{src:s,alt:o,width:h?Object(f["g"])(h):null,height:m?Object(f["g"])(m):null,srcset:v||null,sizes:w||null},class:(r={"img-thumbnail":c.thumbnail,"img-fluid":c.fluid||p,"w-100":p,rounded:""===g||!0===g},d(r,"rounded-".concat(g),Object(l["m"])(g)&&""!==g),d(r,y,y),d(r,"d-block",O),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("cf75"),i=r("fa73"),l=Object(b["d"])({title:Object(b["c"])(o["t"]),titleTag:Object(b["c"])(o["t"],"h4")},a["p"]),u=c["default"].extend({name:a["p"],functional:!0,props:l,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.titleTag,Object(n["a"])(c,{staticClass:"card-title"}),a||Object(i["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return p}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("d82f"),i=r("cf75"),l=r("d580"),u=r("4968"),s=r("ba06");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=Object(i["d"])(Object(b["m"])(d(d(d(d({},u["b"]),s["b"]),Object(i["a"])(l["a"],i["f"].bind(null,"body"))),{},{bodyClass:Object(i["c"])(o["e"]),overlay:Object(i["c"])(o["g"],!1)})),a["j"]),p=c["default"].extend({name:a["j"],functional:!0,props:j,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,b=c.bodyBgVariant,l=c.bodyBorderVariant,f=c.bodyTextVariant,d=t();c.title&&(d=t(u["a"],{props:Object(i["e"])(u["b"],c)}));var j=t();return c.subTitle&&(j=t(s["a"],{props:Object(i["e"])(s["b"],c),class:["mb-2"]})),t(c.bodyTag,Object(n["a"])(a,{staticClass:"card-body",class:[(r={"card-img-overlay":c.overlay},O(r,"bg-".concat(b),b),O(r,"border-".concat(l),l),O(r,"text-".concat(f),f),r),c.bodyClass]}),[d,j,o])}})},"670f":function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return j}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("8690"),i=r("d82f"),l=r("cf75"),u=r("d580");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(l["d"])(Object(i["m"])(f(f({},Object(l["a"])(u["a"],l["f"].bind(null,"footer"))),{},{footer:Object(l["c"])(o["t"]),footerClass:Object(l["c"])(o["e"]),footerHtml:Object(l["c"])(o["t"])})),a["k"]),j=c["default"].extend({name:a["k"],functional:!0,props:O,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,i=c.footerBgVariant,l=c.footerBorderVariant,u=c.footerTextVariant;return t(c.footerTag,Object(n["a"])(a,{staticClass:"card-footer",class:[c.footerClass,(r={},d(r,"bg-".concat(i),i),d(r,"border-".concat(l),l),d(r,"text-".concat(u),u),r)],domProps:o?{}:Object(b["a"])(c.footerHtml,c.footer)}),o)}})},b390:function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{attrs:{title:"Apply for a New Sender ID 🚀"}},[r("b-card-text",[t._v("Brand your SMS by getting a Sender ID for your Organisation.")])],1),r("b-card",{attrs:{title:"Want to integrate JWT? 🔒"}},[r("b-card-text",[t._v("We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.")]),r("b-card-text",[t._v("Please read our JWT Documentation to get more out of JWT authentication.")])],1)],1)},n=[],a=r("205f"),o=r("d6e4"),b={components:{BCard:a["a"],BCardText:o["a"]}},i=b,l=r("2877"),u=Object(l["a"])(i,c,n,!1,null,null,null);e["default"]=u.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return j}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("8690"),i=r("d82f"),l=r("cf75"),u=r("d580");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(l["d"])(Object(i["m"])(f(f({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(o["t"]),headerClass:Object(l["c"])(o["e"]),headerHtml:Object(l["c"])(o["t"])})),a["l"]),j=c["default"].extend({name:a["l"],functional:!0,props:O,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,i=c.headerBgVariant,l=c.headerBorderVariant,u=c.headerTextVariant;return t(c.headerTag,Object(n["a"])(a,{staticClass:"card-header",class:[c.headerClass,(r={},d(r,"bg-".concat(i),i),d(r,"border-".concat(l),l),d(r,"text-".concat(u),u),r)],domProps:o?{}:Object(b["a"])(c.headerHtml,c.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("cf75"),i=r("fa73"),l=Object(b["d"])({subTitle:Object(b["c"])(o["t"]),subTitleTag:Object(b["c"])(o["t"],"h6"),subTitleTextVariant:Object(b["c"])(o["t"],"muted")},a["n"]),u=c["default"].extend({name:a["n"],functional:!0,props:l,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.subTitleTag,Object(n["a"])(c,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),a||Object(i["g"])(r.subTitle))}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var c=r("2b0e"),n=r("c637"),a=r("a723"),o=r("cf75"),b=Object(o["d"])({bgVariant:Object(o["c"])(a["t"]),borderVariant:Object(o["c"])(a["t"]),tag:Object(o["c"])(a["t"],"div"),textVariant:Object(o["c"])(a["t"])},n["i"]);c["default"].extend({props:b})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),b=r("cf75"),i=Object(b["d"])({textTag:Object(b["c"])(o["t"],"p")},a["o"]),l=c["default"].extend({name:a["o"],functional:!0,props:i,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.textTag,Object(n["a"])(c,{staticClass:"card-text"}),a)}})}}]);
//# sourceMappingURL=chunk-18c1beca.57e7bf8a.js.map