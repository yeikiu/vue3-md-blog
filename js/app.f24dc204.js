(function(e){function t(t){for(var a,o,i=t[0],s=t[1],_=t[2],O=0,b=[];O<i.length;O++)o=i[O],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,_||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-base-blog/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var _=0;_<i.length;_++)t(i[_]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},9224:function(e){e.exports=JSON.parse('{"a":"2.1.25"}')},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("830f"),c=n("5c40");function r(e,t,n,a,r,o){var i=Object(c["w"])("PatchMeta"),s=Object(c["w"])("router-view"),_=Object(c["w"])("Footer"),l=Object(c["w"])("Loader");return Object(c["t"])(),Object(c["f"])(c["b"],null,[Object(c["k"])(i),(Object(c["t"])(),Object(c["f"])(c["c"],null,{default:Object(c["C"])((function(){return[Object(c["k"])(s),Object(c["k"])(_)]})),fallback:Object(c["C"])((function(){return[Object(c["k"])(l)]})),_:1}))],64)}var o={class:"my-5 text-center"},i=Object(c["k"])("div",{class:"my-5 spinner-border",role:"status"},null,-1);function s(e,t,n,a,r,s){return Object(c["t"])(),Object(c["f"])("div",o,[i])}const _={};_.render=s;var l=_,O=(n("99af"),n("fb6a"),n("9ff4")),b={href:"#/",class:"text-reset"},u={class:"m-0 p-0"},d={class:"m-0 p-0"},P=Object(c["j"])("Created with ❤️ by "),p=Object(c["k"])("a",{href:"https://github.com/yeikiu/",target:"_blank",class:"text-reset"},"JQ",-1);function g(e,t,n,a,r,o){return Object(c["t"])(),Object(c["f"])("div",{class:"text-center mt-5 py-2",style:"background-color: ".concat(e.VUE_APP_FOOTER_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_FOOTER_TEXT_CSS_COLOR,";")},[Object(c["k"])("a",b,[Object(c["k"])("p",u,"vue-base-blog v"+Object(O["F"])(e.version),1)]),Object(c["k"])("p",d,[P,p,Object(c["j"])(" © "+Object(O["F"])((new Date).toDateString().slice(-4)),1)])],4)}var j=n("9224"),S=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/vue-base-blog/"}),A=S.VUE_APP_FOOTER_BG_CSS_COLOR,f=void 0===A?"darkgray":A,E=S.VUE_APP_FOOTER_TEXT_CSS_COLOR,v=void 0===E?"white":E,C={data:function(){return{version:j["a"],VUE_APP_FOOTER_BG_CSS_COLOR:f,VUE_APP_FOOTER_TEXT_CSS_COLOR:v}}};C.render=g;var h=C;function R(e,t,n,a,r,o){return Object(c["t"])(),Object(c["f"])("span")}n("a4d3"),n("e01a"),n("96cf");var m=n("1da1"),k=(n("4160"),n("a630"),n("3ca3"),n("159b"),n("3835")),T={title:"Minimal Vue3 + Markdown blog engine",description:"Simply fork and deploy!",previewUrl:"https://github.com/yeikiu/vue-base-blog/blob/master/src/assets/logo.png?raw=true",shareUrl:"https://yeikiu.github.io/vue-base-blog/#/",siteName:"vue-base-blog"},w=function(e){var t=e.title,n=void 0===t?T.title:t,a=e.description,c=void 0===a?T.description:a,r=e.previewUrl,o=void 0===r?T.previewUrl:r,i=e.shareUrl,s=void 0===i?T.shareUrl:i,_=e.siteName,l=void 0===_?T.siteName:_,O=document.getElementsByTagName("title"),b=Object(k["a"])(O,1),u=b[0];u.textContent="".concat(l," | ").concat(n," - ").concat(c),Array.from(document.getElementsByClassName("APP_META")).forEach((function(e){e.remove()}));var d='<meta class="APP_META" property="og:title" content="'.concat(n,'">\n      <meta class="APP_META" property="og:description" content="').concat(c,'">\n      <meta class="APP_META" property="og:image" content="').concat(o,'">\n      <meta class="APP_META" property="og:url" content="').concat(s||location.href,'">\n      <meta class="APP_META" name="twitter:card" content="summary_large_image">\n      <meta class="APP_META" property="og:site_name" content="').concat(l,'">'),P=document.getElementsByTagName("head"),p=Object(k["a"])(P,1),g=p[0];g&&(g.innerHTML="".concat(g.innerHTML).concat(d))},V=w,y=T.title,U=T.description,L=T.previewUrl,N=T.shareUrl,M=T.siteName,B=Object(c["l"])({props:{title:{type:String,default:y},description:{type:String,default:U},previewUrl:{type:String,default:L},shareUrl:{type:String,default:N},siteName:{type:String,default:M}},setup:function(e){Object(c["r"])(Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:V(e);case 1:case"end":return t.stop()}}),t)}))))}});B.render=R;var x=B,G=(n("f9e3"),n("e4cb"),{components:{Loader:l,Footer:h,PatchMeta:x}});G.render=r;var X=G,F=n("8c4f"),I={key:0},D={key:1,class:"text-center display-4 text-capitalize my-5"},H={class:"text-left m-0 p-0"},J={class:"m-0 p-0 text-right font-weight-bold"},z={class:"font-weight-light mt-1"},Q={key:2,class:"pagination justify-content-center mb-5 pb-5",style:{cursor:"pointer"}},q={class:"page-link"},K={class:"page-link"},W={class:"page-link"};function Y(e,t,n,a,r,o){var i=Object(c["w"])("PatchMeta"),s=Object(c["w"])("NavBar"),_=Object(c["w"])("BlogHeader"),l=Object(c["w"])("router-link");return Object(c["t"])(),Object(c["f"])(c["b"],null,[Object(c["k"])(i,{title:e.section?e.section:"Minimal Vue3 + Markdown blog engine"},null,8,["title"]),Object(c["k"])(s,{sections:e.allSections},null,8,["sections"]),Object(c["k"])("div",{style:"background-color: ".concat(e.VUE_APP_MAIN_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_MAIN_TEXT_CSS_COLOR,";")},[Object(c["k"])(_,{class:"mb-5"}),e.section?(Object(c["t"])(),Object(c["f"])("hr",I)):Object(c["g"])("",!0),e.section?(Object(c["t"])(),Object(c["f"])("p",D,Object(O["F"])(e.section),1)):Object(c["g"])("",!0),(Object(c["t"])(!0),Object(c["f"])(c["b"],null,Object(c["v"])(e.activePosts,(function(t){return Object(c["t"])(),Object(c["f"])("div",{class:"container markdown-body p-3 p-md-4",key:t.id},[Object(c["k"])(l,{to:{path:"/".concat(t.section,"/").concat(t.id)},class:"text-reset"},{default:Object(c["C"])((function(){return[Object(c["k"])("h3",H,Object(O["F"])(t.title),1)]})),_:2},1032,["to"]),Object(c["k"])("p",{class:["font-weight-light font-italic m-0 p-0",e.section?"mb-3":"text-right"]},Object(O["F"])(t.date),3),e.section?Object(c["g"])("",!0):Object(c["k"])(l,{key:0,to:{path:"/".concat(t.section)},class:"text-reset"},{default:Object(c["C"])((function(){return[Object(c["k"])("h6",J," #"+Object(O["F"])(t.section),1)]})),_:2},1032,["to"]),Object(c["k"])("p",z,Object(O["F"])(t.description),1)])})),128)),e.endPage>e.startPage?(Object(c["t"])(),Object(c["f"])("ul",Q,[Object(c["k"])("li",{class:["page-item",e.currentPage==e.startPage?"active":""],onClick:t[1]||(t[1]=function(t){return e.currentPage=e.startPage})},[Object(c["k"])("a",q,Object(O["F"])(e.startPage),1)],2),(Object(c["t"])(!0),Object(c["f"])(c["b"],null,Object(c["v"])(e.midPages,(function(t,n){return Object(c["t"])(),Object(c["f"])("li",{class:["page-item",e.currentPage==t?"active":""],key:n,onClick:function(n){return e.currentPage=t}},[Object(c["k"])("a",K,Object(O["F"])(t),1)],10,["onClick"])})),128)),Object(c["k"])("li",{class:["page-item",e.currentPage==e.endPage?"active":""],onClick:t[2]||(t[2]=function(t){return e.currentPage=e.endPage})},[Object(c["k"])("a",W,Object(O["F"])(e.endPage),1)],2)])):Object(c["g"])("",!0)],4)],64)}n("4de4"),n("13d5");var Z=n("ade3"),$=n("5530"),ee=n("a1e9"),te=n("e4fd"),ne=n("cf05"),ae=n.n(ne),ce={class:"text-center my-5"},re=Object(c["k"])("a",{href:"#/",class:"text-reset"},[Object(c["k"])("p",{class:"text-uppercase display-3"},"vue-base-blog"),Object(c["k"])("img",{alt:"Vue logo",src:ae.a})],-1);function oe(e,t,n,a,r,o){return Object(c["t"])(),Object(c["f"])("div",ce,[re])}const ie={};ie.render=oe;var se=ie,_e={class:"pr-3 navbar-nav ml-auto"};function le(e,t,n,r,o,i){return Object(c["t"])(),Object(c["f"])("nav",{class:"navbar navbar-expand-md navbar-light",style:"background-color: ".concat(e.VUE_APP_NAVBAR_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},[Object(c["k"])("a",{class:"navbar-brand",href:"#/",style:"color: ".concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},"🏠 vue-base-blog",4),Object(c["k"])("button",{class:"navbar-toggler ".concat(e.collapseMenu?"collapsed":""),onClick:t[1]||(t[1]=function(t){return e.collapseMenu=!e.collapseMenu}),type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":!e.collapseMenu,"aria-label":"Toggle navigation"},[Object(c["k"])("span",{class:"navbar-toggler-icon",style:"background-color: ".concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";")},null,4)],10,["aria-expanded"]),Object(c["k"])("div",{class:"navbar-collapse collapse ".concat(e.collapseMenu?"":"show"),id:"navbarNavDropdown"},[Object(c["k"])("ul",_e,[Object(c["k"])("li",{class:"nav-item dropdown ".concat(e.showDropdown?"show":"")},[Object(c["k"])("a",{style:"color: ".concat(e.VUE_APP_NAVBAR_TEXT_CSS_COLOR,";"),class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",href:"",onClick:t[2]||(t[2]=Object(a["b"])((function(t){return e.showDropdown=!e.showDropdown}),["prevent"])),"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":e.showDropdown}," Blog Sections ",12,["aria-expanded"]),Object(c["k"])("div",{class:"dropdown-menu ".concat(e.showDropdown?"show":""),"aria-labelledby":"navbarDropdownMenuLink"},[(Object(c["t"])(!0),Object(c["f"])(c["b"],null,Object(c["v"])(e.sections,(function(e,t){return Object(c["t"])(),Object(c["f"])("a",{key:t,class:"dropdown-item text-capitalize",href:"#/".concat("all"===t?"":t)},Object(O["F"])(t)+" ("+Object(O["F"])(e)+")",9,["href"])})),128))],2)],2)])],2)],4)}var Oe=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/vue-base-blog/"}),be=Oe.VUE_APP_NAVBAR_BG_CSS_COLOR,ue=void 0===be?"black":be,de=Oe.VUE_APP_NAVBAR_TEXT_CSS_COLOR,Pe=void 0===de?"white":de,pe={props:{sections:Object},setup:function(){var e=Object(ee["i"])(!1),t=Object(ee["i"])(!0);return{showDropdown:e,collapseMenu:t,VUE_APP_NAVBAR_BG_CSS_COLOR:ue,VUE_APP_NAVBAR_TEXT_CSS_COLOR:Pe}}};pe.render=le;var ge=pe,je=(n("d81d"),n("d3b7"),n("ddb0"),function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,o=Math.ceil(e/c);if(a<1?a=1:a>o&&(a=o),o<=r)t=1,n=o;else{var i=Math.floor(r/2),s=Math.ceil(r/2)-1;a<=i?(t=1,n=r):a+s>=o?(t=o-r+1,n=o):(t=a-i,n=a+s)}var _=(a-1)*c,l=Math.min(_+c-1,e-1),O=Array.from(Array(n+1-t).keys()).map((function(e){return t+e}));return{totalItems:e,currentPage:a,pageSize:c,totalPages:o,startPage:t,endPage:n,startIndex:_,endIndex:l,pages:O}}),Se=je,Ae=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/vue-base-blog/"}),fe=Ae.VUE_APP_POSTS_PER_PAGE,Ee=void 0===fe?5:fe,ve=Ae.VUE_APP_MAIN_BG_CSS_COLOR,Ce=void 0===ve?"white":ve,he=Ae.VUE_APP_MAIN_TEXT_CSS_COLOR,Re=void 0===he?"black":he;console.log({VUE_APP_POSTS_PER_PAGE:Ee,VUE_APP_MAIN_BG_CSS_COLOR:Ce,VUE_APP_MAIN_TEXT_CSS_COLOR:Re});var me=Object(c["l"])({components:{PatchMeta:x,BlogHeader:se,NavBar:ge},props:{section:String},setup:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,te["a"].get("".concat(He,"blog_store/posts_index.json"));case 2:return n=t.sent,a=n.data,r=a,o=Object(ee["h"])({currentPage:1,startPage:1,endPage:1,midPages:[1]}),i=Object(c["e"])((function(){var t=e.section?r.filter((function(t){var n=t.section;return n===e.section})):r,n=Se(t.length,o.currentPage,Ee),a=n.startPage,c=n.endPage,i=n.startIndex,s=n.endIndex;o.startPage=a;var _=o.currentPage-1>=a?o.currentPage-1:0,l=o.currentPage+1<=c?o.currentPage+1:0;return o.midPages=[_,o.currentPage,l].filter((function(e){return e>a&&e<c})),o.endPage=c,t.slice(i,s+1)})),t.abrupt("return",Object($["a"])(Object($["a"])({},Object(ee["o"])(o)),{},{activePosts:i,allSections:r.reduce((function(e,t){var n=t.section;return e[n]?Object($["a"])(Object($["a"])({},e),{},Object(Z["a"])({},n,e[n]+1)):Object($["a"])(Object($["a"])({},e),{},Object(Z["a"])({},n,1))}),{all:r.length}),VUE_APP_MAIN_BG_CSS_COLOR:Ce,VUE_APP_MAIN_TEXT_CSS_COLOR:Re}));case 8:case"end":return t.stop()}}),t)})))()}});me.render=Y;var ke=me,Te={class:"container my-4 my-md-5"};function we(e,t,n,a,r,o){var i=Object(c["w"])("NavBar");return Object(c["t"])(),Object(c["f"])(c["b"],null,[Object(c["k"])(i,{sections:e.allSections},null,8,["sections"]),Object(c["k"])("div",Te,[Object(c["k"])("span",{class:"markdown-body",innerHTML:e.postHtml,style:"background-color: ".concat(e.VUE_APP_MAIN_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_MAIN_TEXT_CSS_COLOR,";")},null,12,["innerHTML"]),Object(c["k"])("button",{type:"button",style:"color: ".concat(e.VUE_APP_MAIN_TEXT_CSS_COLOR,";"),onClick:t[1]||(t[1]=function(t){return e.hasHistory()?e.router.go(-1):e.router.push("/")}),class:"border btn mt-4"},"« Back",4)])],64)}n("7db0"),n("ac1f"),n("1276"),n("498a");var Ve=n("d4cd"),ye=n.n(Ve),Ue=n("362d"),Le=n.n(Ue),Ne=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/vue-base-blog/"}),Me=Ne.VUE_APP_MAIN_BG_CSS_COLOR,Be=void 0===Me?"white":Me,xe=Ne.VUE_APP_MAIN_TEXT_CSS_COLOR,Ge=void 0===xe?"black":xe,Xe=new ye.a({html:!0}).use(Le.a),Fe=Object(c["l"])({components:{NavBar:ge},props:{section:String,id:String},setup:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,a,c,r,o,i,s,_,l,O;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(){var e;return(null===(e=window.history)||void 0===e?void 0:e.length)>2},t.next=3,te["a"].get("".concat(He,"blog_store/posts_index.json"));case 3:return a=t.sent,c=a.data,r=c,o=r.find((function(t){var n=t.id;return n===e.id}))||{url:""},i=o.url,t.next=9,te["a"].get("".concat(He).concat(i));case 9:return s=t.sent,_=s.data,l=Xe.render(_),O=_.split("#"),O[1]&&V({title:O[1].trim()}),t.abrupt("return",{hasHistory:n,postHtml:l,router:ze,allSections:r.reduce((function(e,t){var n=t.section;return e[n]?Object($["a"])(Object($["a"])({},e),{},Object(Z["a"])({},n,e[n]+1)):Object($["a"])(Object($["a"])({},e),{},Object(Z["a"])({},n,1))}),{all:r.length}),VUE_APP_MAIN_BG_CSS_COLOR:Be,VUE_APP_MAIN_TEXT_CSS_COLOR:Ge});case 15:case"end":return t.stop()}}),t)})))()}});Fe.render=we;var Ie=Fe,De=[{path:"/:section?",name:"home",component:ke,props:!0},{path:"/:section/:id",name:"post",component:Ie,props:!0}],He="/vue-base-blog/",Je=Object(F["a"])({history:Object(F["b"])(He),routes:De}),ze=Je;Object(a["a"])(X).use(ze).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f24dc204.js.map