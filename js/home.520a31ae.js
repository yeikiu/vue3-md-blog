(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{bb51:function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a"),c("99af");var n=c("5c40"),a=c("9ff4"),r={key:0},i={key:1,class:"text-center display-4 text-capitalize my-5"},o={class:"text-left m-0 p-0"},s={class:"m-0 p-0 text-right font-weight-bold"},O={class:"font-weight-light mt-1"},b={key:2,class:"pagination justify-content-center mb-5 pb-5",style:{cursor:"pointer"}},l={class:"page-link"},u={class:"page-link"},g={class:"page-link"};function _(e,t,c,_,P,j){var d=Object(n["w"])("PatchMeta"),f=Object(n["w"])("BlogHeader"),p=Object(n["w"])("router-link");return Object(n["t"])(),Object(n["f"])(n["b"],null,[Object(n["k"])(d,{title:e.section?e.section:"Minimal Vue3 + Markdown blog engine"},null,8,["title"]),Object(n["k"])("div",{style:"background-color: ".concat(e.VUE_APP_MAIN_BG_CSS_COLOR,"; color: ").concat(e.VUE_APP_MAIN_TEXT_CSS_COLOR,";")},[Object(n["k"])(f,{class:"mb-5"}),e.section?(Object(n["t"])(),Object(n["f"])("hr",r)):Object(n["g"])("",!0),e.section?(Object(n["t"])(),Object(n["f"])("p",i,Object(a["F"])(e.section),1)):Object(n["g"])("",!0),(Object(n["t"])(!0),Object(n["f"])(n["b"],null,Object(n["v"])(e.visiblePosts,(function(t){return Object(n["t"])(),Object(n["f"])("div",{class:"container markdown-body p-3 p-md-4",key:t.id},[Object(n["k"])(p,{to:"/".concat(t.section,"/").concat(t.id),class:"text-reset"},{default:Object(n["C"])((function(){return[Object(n["k"])("h3",o,Object(a["F"])(t.title),1)]})),_:2},1032,["to"]),Object(n["k"])("p",{class:["font-weight-light font-italic m-0 p-0",e.section?"mb-3":"text-right"]},Object(a["F"])(t.date),3),e.section?Object(n["g"])("",!0):Object(n["k"])(p,{key:0,to:t.section,class:"text-reset"},{default:Object(n["C"])((function(){return[Object(n["k"])("h6",s," #"+Object(a["F"])(t.section),1)]})),_:2},1032,["to"]),Object(n["k"])("p",O,Object(a["F"])(t.description),1)])})),128)),e.endPage>e.startPage?(Object(n["t"])(),Object(n["f"])("ul",b,[Object(n["k"])("li",{class:["page-item",e.currentPage==e.startPage?"active":""],onClick:t[1]||(t[1]=function(t){return e.currentPage=e.startPage})},[Object(n["k"])("a",l,Object(a["F"])(e.startPage),1)],2),(Object(n["t"])(!0),Object(n["f"])(n["b"],null,Object(n["v"])(e.midPages,(function(t,c){return Object(n["t"])(),Object(n["f"])("li",{class:["page-item",e.currentPage==t?"active":""],key:c,onClick:function(c){return e.currentPage=t}},[Object(n["k"])("a",u,Object(a["F"])(t),1)],10,["onClick"])})),128)),Object(n["k"])("li",{class:["page-item",e.currentPage==e.endPage?"active":""],onClick:t[2]||(t[2]=function(t){return e.currentPage=e.endPage})},[Object(n["k"])("a",g,Object(a["F"])(e.endPage),1)],2)])):Object(n["g"])("",!0)],4)],64)}c("4de4"),c("fb6a");var P=c("5530"),j=c("a1e9"),d=c("cf05"),f=c.n(d),p={class:"text-center my-5"},k=Object(n["k"])("p",{class:"text-uppercase display-3"},"vue-base-blog",-1),v=Object(n["k"])("img",{alt:"Vue logo",src:f.a},null,-1);function A(e,t,c,a,r,i){var o=Object(n["w"])("router-link");return Object(n["t"])(),Object(n["f"])("div",p,[Object(n["k"])(o,{to:"/",class:"text-reset"},{default:Object(n["C"])((function(){return[k,v]})),_:1})])}const C={};C.render=A;var S=C,m=c("74fb"),h=(c("a630"),c("d81d"),c("d3b7"),c("3ca3"),c("ddb0"),function(e){var t,c,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i=Math.ceil(e/a);if(n<1?n=1:n>i&&(n=i),i<=r)t=1,c=i;else{var o=Math.floor(r/2),s=Math.ceil(r/2)-1;n<=o?(t=1,c=r):n+s>=i?(t=i-r+1,c=i):(t=n-o,c=n+s)}var O=(n-1)*a,b=Math.min(O+a-1,e-1),l=Array.from(Array(c+1-t).keys()).map((function(e){return t+e}));return{totalItems:e,currentPage:n,pageSize:a,totalPages:i,startPage:t,endPage:c,startIndex:O,endIndex:b,pages:l}}),E=h,w=Object({NODE_ENV:"production",VUE_APP_POSTS_PER_PAGE:"5",VUE_APP_MAIN_BG_CSS_COLOR:"white",VUE_APP_MAIN_TEXT_CSS_COLOR:"black",VUE_APP_NAVBAR_BG_CSS_COLOR:"black",VUE_APP_NAVBAR_TEXT_CSS_COLOR:"white",VUE_APP_FOOTER_BG_CSS_COLOR:"darkgray",VUE_APP_FOOTER_TEXT_CSS_COLOR:"white",BASE_URL:"/vue-base-blog/"}),y=w.VUE_APP_POSTS_PER_PAGE,R=void 0===y?5:y,V=w.VUE_APP_MAIN_BG_CSS_COLOR,x=void 0===V?"white":V,M=w.VUE_APP_MAIN_TEXT_CSS_COLOR,T=void 0===M?"black":M,U=Object(n["l"])({components:{PatchMeta:m["a"],BlogHeader:S},props:{section:String},setup:function(e){var t=Object(n["p"])("postsIndex",[]),c=Object(j["h"])({currentPage:1,startPage:1,endPage:1,midPages:[1]}),a=Object(n["e"])((function(){var n=e.section?t.filter((function(t){var c=t.section;return c===e.section})):t,a=E(n.length,c.currentPage,R),r=a.startPage,i=a.endPage,o=a.startIndex,s=a.endIndex;c.startPage=r;var O=c.currentPage-1>=r?c.currentPage-1:0,b=c.currentPage+1<=i?c.currentPage+1:0;return c.midPages=[O,c.currentPage,b].filter((function(e){return e>r&&e<i})),c.endPage=i,n.slice(o,s+1)}));return Object(P["a"])(Object(P["a"])({},Object(j["o"])(c)),{},{visiblePosts:a,VUE_APP_MAIN_BG_CSS_COLOR:x,VUE_APP_MAIN_TEXT_CSS_COLOR:T})}});U.render=_;t["default"]=U},cf05:function(e,t,c){e.exports=c.p+"img/logo.82b9c7a5.png"},d81d:function(e,t,c){"use strict";var n=c("23e7"),a=c("b727").map,r=c("1dde"),i=c("ae40"),o=r("map"),s=i("map");n({target:"Array",proto:!0,forced:!o||!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=home.520a31ae.js.map