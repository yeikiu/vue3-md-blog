(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],u=0,O=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&O.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(O.length)O.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({home:"home",post:"post"}[e]||e)+"."+{home:"7578af61",post:"4a066291"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},6883:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n("a4d3"),n("e01a"),n("99af"),n("4160"),n("a630"),n("3ca3"),n("159b");var r=n("3835"),o={title:"Minimal Vue3 + Markdown blog engine",description:"Simply fork and deploy!",previewUrl:"https://github.com/yeikiu/vue-base-blog/blob/master/src/assets/logo.png?raw=true",shareUrl:"https://yeikiu.github.io/vue-base-blog/#/",siteName:"vue-base-blog"},a=function(e){var t=e.title,n=void 0===t?o.title:t,a=e.description,c=void 0===a?o.description:a,i=e.previewUrl,s=void 0===i?o.previewUrl:i,l=e.shareUrl,u=void 0===l?o.shareUrl:l,b=e.siteName,O=void 0===b?o.siteName:b,_=document.getElementsByTagName("title"),p=Object(r["a"])(_,1),d=p[0];d.textContent="".concat(O," | ").concat(n," - ").concat(c),Array.from(document.getElementsByClassName("APP_META")).forEach((function(e){e.remove()}));var f='<meta class="APP_META" property="og:title" content="'.concat(n,'">\n      <meta class="APP_META" property="og:description" content="').concat(c,'">\n      <meta class="APP_META" property="og:image" content="').concat(s,'">\n      <meta class="APP_META" property="og:url" content="').concat(u||location.href,'">\n      <meta class="APP_META" name="twitter:card" content="summary_large_image">\n      <meta class="APP_META" property="og:site_name" content="').concat(O,'">'),v=document.getElementsByTagName("head"),j=Object(r["a"])(v,1),P=j[0];P&&(P.innerHTML="".concat(P.innerHTML).concat(f))};t["a"]=a},"74fb":function(e,t,n){"use strict";var r=n("5c40");function o(e,t,n,o,a,c){return Object(r["t"])(),Object(r["f"])("span")}n("a4d3"),n("e01a"),n("96cf");var a=n("1da1"),c=n("6883"),i=c["b"].title,s=c["b"].description,l=c["b"].previewUrl,u=c["b"].shareUrl,b=c["b"].siteName,O=Object(r["l"])({props:{title:{type:String,default:i},description:{type:String,default:s},previewUrl:{type:String,default:l},shareUrl:{type:String,default:u},siteName:{type:String,default:b}},setup:function(e){Object(r["r"])(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(c["a"])(e);case 1:case"end":return t.stop()}}),t)}))))}});O.render=o;t["a"]=O},9224:function(e){e.exports=JSON.parse('{"a":"2.1.30"}')},afbc:function(e,t,n){"use strict";n("d3b7");var r=n("8c4f"),o=[{path:"/:section?",component:function(){return n.e("home").then(n.bind(null,"bb51"))},props:!0},{path:"/:section/:id",component:function(){return n.e("post").then(n.bind(null,"37d3"))},props:!0}],a=Object(r["a"])({history:Object(r["b"])(),routes:o});t["a"]=a},cd49:function(e,t,n){"use strict";n.r(t);n("13d5");var r=n("ade3"),o=n("5530"),a=(n("96cf"),n("1da1")),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("830f")),i=n("5c40");function s(e,t,n,r,o,a){var c=Object(i["w"])("PatchMeta"),s=Object(i["w"])("NavBar"),l=Object(i["w"])("router-view"),u=Object(i["w"])("Footer"),b=Object(i["w"])("Loader");return Object(i["t"])(),Object(i["f"])(i["b"],null,[Object(i["k"])(c,{title:"Minimal Vue3 + Markdown blog engine"}),Object(i["k"])(s,{title:"vue-base-blog",sections:e.blogSections},null,8,["sections"]),(Object(i["t"])(),Object(i["f"])(i["c"],null,{default:Object(i["C"])((function(){return[Object(i["k"])(l),Object(i["k"])(u)]})),fallback:Object(i["C"])((function(){return[Object(i["k"])(b)]})),_:1}))],64)}var l=n("74fb"),u={class:"my-5 text-center"},b=Object(i["k"])("div",{class:"my-5 spinner-border",role:"status"},null,-1);function O(e,t,n,r,o,a){return Object(i["t"])(),Object(i["f"])("div",u,[b])}const _={};_.render=O;var p=_,d=(n("99af"),n("9ff4")),f={class:"ml-auto mr-5 pr-5 navbar-nav"};function v(e,t,n,r,o,a){var s=Object(i["w"])("router-link");return Object(i["t"])(),Object(i["f"])("nav",{class:"navbar navbar-expand-md navbar-light mb-0",style:"background-color: ".concat(e.VUE_APP_NAVBAR_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},[Object(i["k"])(s,{class:"navbar-brand",to:"/",style:"color: ".concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},{default:Object(i["C"])((function(){return[Object(i["j"])(Object(d["F"])(e.title),1)]})),_:1},8,["style"]),Object(i["k"])("button",{class:"navbar-toggler ".concat(e.collapseMenu?"collapsed":""),onClick:t[1]||(t[1]=function(t){return e.collapseMenu=!e.collapseMenu}),type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":!e.collapseMenu,"aria-label":"Toggle navigation"},[Object(i["k"])("span",{class:"navbar-toggler-icon",style:"background-color: ".concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},null,4)],10,["aria-expanded"]),Object(i["k"])("div",{class:"navbar-collapse collapse ".concat(e.collapseMenu?"":"show"),id:"navbarNavDropdown"},[Object(i["k"])("ul",f,[Object(i["k"])("li",{class:"nav-item dropleft dropdown ".concat(e.showDropdown?"show":"")},[Object(i["k"])("a",{style:"color: ".concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";"),class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",role:"button",onClick:t[2]||(t[2]=Object(c["b"])((function(t){return e.showDropdown=!e.showDropdown}),["prevent"])),"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":e.showDropdown}," Sections ",12,["aria-expanded"]),Object(i["k"])("div",{class:"dropdown-menu ".concat(e.showDropdown?"show":""),style:{"max-height":"200px",overflow:"scroll"}},[(Object(i["t"])(!0),Object(i["f"])(i["b"],null,Object(i["v"])(e.sections,(function(n,r){return Object(i["t"])(),Object(i["f"])(s,{key:r,class:"dropdown-item text-capitalize",to:"".concat("all"===r?"/":r),onClick:t[3]||(t[3]=function(t){return e.showDropdown=!1})},{default:Object(i["C"])((function(){return[Object(i["j"])(Object(d["F"])(r)+" ("+Object(d["F"])(n)+")",1)]})),_:2},1032,["to"])})),128))],2)],2)])],2)],4)}var j=n("a1e9"),P=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/"}),g=P.VUE_APP_NAVBAR_BG_CSS_COLOR,h=void 0===g?"black":g,m=P.VUE_APP_NAVBAR_TEXT_CSS_COLOR,A=void 0===m?"white":m,S={props:{title:String,sections:Object},setup:function(){var e=Object(j["i"])(!1),t=Object(j["i"])(!0);return{showDropdown:e,collapseMenu:t,VUE_APP_NAVBAR_BG_CSS_COLOR:h,VUE_APP_NAVBAR_TEXT_CSS_COLOR:A}}};S.render=v;var E=S,w=(n("fb6a"),{class:"m-0 p-0"}),C={class:"m-0 p-0"},y=Object(i["j"])("Created with ❤️ by "),R=Object(i["k"])("a",{href:"https://github.com/yeikiu/",target:"_blank",class:"text-reset"},"JQ",-1);function T(e,t,n,r,o,a){var c=Object(i["w"])("router-link");return Object(i["t"])(),Object(i["f"])("div",{class:"text-center mt-5 py-2",style:"background-color: ".concat(e.VUE_APP_FOOTER_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_FOOTER_TEXT_CSS_COLOR,";")},[Object(i["k"])(c,{to:"/",class:"text-reset"},{default:Object(i["C"])((function(){return[Object(i["k"])("p",w,"vue-base-blog v"+Object(d["F"])(e.version),1)]})),_:1}),Object(i["k"])("p",C,[y,R,Object(i["j"])(" © "+Object(d["F"])((new Date).toDateString().slice(-4)),1)])],4)}var k=n("9224"),V=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/"}),U=V.VUE_APP_FOOTER_BG_CSS_COLOR,L=void 0===U?"darkgray":U,N=V.VUE_APP_FOOTER_TEXT_CSS_COLOR,B=void 0===N?"white":N,M={data:function(){return{version:k["a"],VUE_APP_FOOTER_BG_CSS_COLOR:L,VUE_APP_FOOTER_TEXT_CSS_COLOR:B}}};M.render=T;var x=M,F=(n("f9e3"),n("e4cb"),Object(i["l"])({components:{PatchMeta:l["a"],Loader:p,NavBar:E,Footer:x},setup:function(){var e=Object(i["p"])("blogSections",{});return{blogSections:e}}}));F.render=s;var D=F,X=n("afbc"),G=n("e4fd"),I="blog_store/posts_index.json",J=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G["a"].get(I);case 2:t=e.sent,n=t.data,console.log({postsIndex:n}),a=n.reduce((function(e,t){var n=t.section;return e[n]?Object(o["a"])(Object(o["a"])({},e),{},Object(r["a"])({},n,e[n]+1)):Object(o["a"])(Object(o["a"])({},e),{},Object(r["a"])({},n,1))}),{all:n.length}),Object(c["a"])(D).use(X["a"]).provide("postsIndex",n).provide("blogSections",a).mount("#app");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();J()}});
//# sourceMappingURL=app.c8f09116.js.map