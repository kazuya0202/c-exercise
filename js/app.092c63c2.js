(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],f=0,s=[];f<c.length;f++)a=c[f],o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3f5b62b4":"18d20ff5","chunk-4213c1a7":"68334acc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3f5b62b4":1,"chunk-4213c1a7":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3f5b62b4":"b5eb2cc3","chunk-4213c1a7":"ecd5b032"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],f=l.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),l=function(t){f.onerror=f.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"7faf":function(e,t,n){"use strict";var r=n("9217"),a=n.n(r);a.a},9217:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),a=n("ce5b"),o=n.n(a),u=n("c0a4"),c=n.n(u),i=(n("da64"),n("0f56")),l=n.n(i);r["default"].use(o.a,{iconfont:"mdi",theme:{primary:c.a.blue.darken2}}),r["default"].use(l.a);var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-toolbar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Clang exercise")])],1),n("v-content",{attrs:{id:"content"}},[n("router-view")],1)],1)},s=[],d=n("d225"),p=n("308d"),b=n("6bb5"),h=n("4e2b"),v=n("cce8"),m=n("82f7"),g=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(p["a"])(this,Object(b["a"])(t).apply(this,arguments)),e.drawer=!1,e}return Object(h["a"])(t,e),t}(m["Vue"]);g=v["__decorate"]([m["Component"]],g);var y=g,w=y,k=(n("7faf"),n("2877")),j=n("6544"),O=n.n(j),x=n("7496"),T=n("549c"),_=n("f774"),P=n("71d9"),S=n("706c"),E=n("2a7f"),C=Object(k["a"])(w,f,s,!1,null,null,null),V=C.exports;O()(C,{VApp:x["a"],VContent:T["a"],VNavigationDrawer:_["a"],VToolbar:P["a"],VToolbarSideIcon:S["a"],VToolbarTitle:E["a"]});var A=n("78f8"),N=n.n(A);r["default"].use(N.a);var M=new N.a({routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-4213c1a7").then(n.bind(null,"bb51"))}},{path:"/standard-exp",name:"standard-exp",component:function(){return n.e("chunk-3f5b62b4").then(n.bind(null,"c7be"))}}]}),B=n("d7a6"),q=n.n(B);r["default"].use(q.a);var J=new q.a.Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:M,store:J,render:function(e){return e(V)}}).$mount("#app")}});