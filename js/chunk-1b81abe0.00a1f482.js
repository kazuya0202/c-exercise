(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b81abe0"],{"07b9":function(t,e,n){},1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"24c5":function(t,e,n){"use strict";var r,i,o,c,a=n("b8e3"),s=n("e53d"),v=n("d864"),l=n("40c3"),u=n("63b6"),d=n("f772"),f=n("79aa"),_=n("1173"),h=n("a22a"),p=n("f201"),m=n("4178").set,y=n("aba2")(),b=n("656e"),g=n("4439"),w=n("bc13"),x=n("cd78"),C="Promise",j=s.TypeError,O=s.process,E=O&&O.versions,L=E&&E.v8||"",P=s[C],k="process"==l(O),S=function(){},B=i=b.f,T=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(S,S)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e&&0!==L.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(r){}}(),A=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},N=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){var r=t._v,i=1==t._s,o=0,c=function(e){var n,o,c,a=i?e.ok:e.fail,s=e.resolve,v=e.reject,l=e.domain;try{a?(i||(2==t._h&&R(t),t._h=1),!0===a?n=r:(l&&l.enter(),n=a(r),l&&(l.exit(),c=!0)),n===e.promise?v(j("Promise-chain cycle")):(o=A(n))?o.call(n,s,v):s(n)):v(r)}catch(u){l&&!c&&l.exit(),v(u)}};while(n.length>o)c(n[o++]);t._c=[],t._n=!1,e&&!t._h&&$(t)})}},$=function(t){m.call(s,function(){var e,n,r,i=t._v,o=F(t);if(o&&(e=g(function(){k?O.emit("unhandledRejection",i,t):(n=s.onunhandledrejection)?n({promise:t,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=k||F(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){m.call(s,function(){var e;k?O.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),N(e,!0))},G=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw j("Promise can't be resolved itself");(e=A(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,v(G,r,1),v(I,r,1))}catch(i){I.call(r,i)}}):(n._v=t,n._s=1,N(n,!1))}catch(r){I.call({_w:n,_d:!1},r)}}};T||(P=function(t){_(this,P,C,"_h"),f(t),r.call(this);try{t(v(G,this,1),v(I,this,1))}catch(e){I.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("5c95")(P.prototype,{then:function(t,e){var n=B(p(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&N(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=v(G,t,1),this.reject=v(I,t,1)},b.f=B=function(t){return t===P||t===c?new o(t):i(t)}),u(u.G+u.W+u.F*!T,{Promise:P}),n("45f2")(P,C),n("4c95")(C),c=n("584a")[C],u(u.S+u.F*!T,C,{reject:function(t){var e=B(this),n=e.reject;return n(t),e.promise}}),u(u.S+u.F*(a||!T),C,{resolve:function(t){return x(a&&this===c?P:this,t)}}),u(u.S+u.F*!(T&&n("4ee1")(function(t){P.all(t)["catch"](S)})),C,{all:function(t){var e=this,n=B(e),r=n.resolve,i=n.reject,o=g(function(){var n=[],o=0,c=1;h(t,!1,function(t){var a=o++,s=!1;n.push(void 0),c++,e.resolve(t).then(function(t){s||(s=!0,n[a]=t,--c||r(n))},i)}),--c||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=B(e),r=n.reject,i=g(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},3702:function(t,e,n){var r=n("481b"),i=n("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},"3c11":function(t,e,n){"use strict";var r=n("63b6"),i=n("584a"),o=n("e53d"),c=n("f201"),a=n("cd78");r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},"40c3":function(t,e,n){var r=n("6b4c"),i=n("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},4178:function(t,e,n){var r,i,o,c=n("d864"),a=n("3024"),s=n("32fc"),v=n("1ec9"),l=n("e53d"),u=l.process,d=l.setImmediate,f=l.clearImmediate,_=l.MessageChannel,h=l.Dispatch,p=0,m={},y="onreadystatechange",b=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){b.call(t.data)};d&&f||(d=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return m[++p]=function(){a("function"==typeof t?t:Function(t),e)},r(p),p},f=function(t){delete m[t]},"process"==n("6b4c")(u)?r=function(t){u.nextTick(c(b,t,1))}:h&&h.now?r=function(t){h.now(c(b,t,1))}:_?(i=new _,o=i.port2,i.port1.onmessage=g,r=c(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",g,!1)):r=y in v("script")?function(t){s.appendChild(v("script"))[y]=function(){s.removeChild(this),b.call(t)}}:function(t){setTimeout(c(b,t,1),0)}),t.exports={set:d,clear:f}},"43fc":function(t,e,n){"use strict";var r=n("63b6"),i=n("656e"),o=n("4439");r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4c95":function(t,e,n){"use strict";var r=n("e53d"),i=n("584a"),o=n("d9f6"),c=n("8e60"),a=n("5168")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];c&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},"4e40":function(t,e,n){"use strict";var r=n("7af9"),i=n.n(r);i.a},"4ee1":function(t,e,n){var r=n("5168")("iterator"),i=!1;try{var o=[7][r]();o["return"]=function(){i=!0},Array.from(o,function(){throw 2})}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(c){}return n}},"58db":function(t,e,n){},"5c95":function(t,e,n){var r=n("35e8");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},"656e":function(t,e,n){"use strict";var r=n("79aa");function i(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},6697:function(t,e,n){},"671a":function(t,e,n){"use strict";var r=n("6921"),i=n.n(r);i.a},6921:function(t,e,n){},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"795b":function(t,e,n){t.exports=n("696e")},"7af9":function(t,e,n){},"7cd6":function(t,e,n){var r=n("40c3"),i=n("5168")("iterator"),o=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"85f2":function(t,e,n){t.exports=n("454f")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),c=new P(r||[]);return o._invoke=j(t,n,c),o}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var l="suspendedStart",u="suspendedYield",d="executing",f="completed",_={};function h(){}function p(){}function m(){}var y={};y[o]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(k([])));g&&g!==n&&r.call(g,o)&&(y=g);var w=m.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){function e(n,i,o,c){var a=v(t[n],t,i);if("throw"!==a.type){var s=a.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,c)},function(t){e("throw",t,o,c)}):Promise.resolve(l).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,c)})}c(a.arg)}var n;function i(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=i}function j(t,e,n){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return S()}n.method=i,n.arg=o;while(1){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===_)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=v(t,e,n);if("normal"===s.type){if(r=n.done?f:u,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return _;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var i=v(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,_;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,_):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,_)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:S}}function S(){return{value:e,done:!0}}return p.prototype=w.constructor=m,m.constructor=p,m[a]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(C.prototype),C.prototype[c]=function(){return this},t.AsyncIterator=C,t.async=function(e,n,r,i){var o=new C(s(e,n,r,i));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(w),w[a]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),v=r.call(c,"finallyLoc");if(s&&v){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!v)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),_}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a22a:function(t,e,n){var r=n("d864"),i=n("b0dc"),o=n("3702"),c=n("e4ae"),a=n("b447"),s=n("7cd6"),v={},l={};e=t.exports=function(t,e,n,u,d){var f,_,h,p,m=d?function(){return t}:s(t),y=r(n,u,e?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(f=a(t.length);f>b;b++)if(p=e?y(c(_=t[b])[0],_[1]):y(t[b]),p===v||p===l)return p}else for(h=m.call(t);!(_=h.next()).done;)if(p=i(h,y,_.value,e),p===v||p===l)return p};e.BREAK=v,e.RETURN=l},aba2:function(t,e,n){var r=n("e53d"),i=n("4178").set,o=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,s="process"==n("6b4c")(c);t.exports=function(){var t,e,n,v=function(){var r,i;s&&(r=c.domain)&&r.exit();while(t){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,r&&r.enter()};if(s)n=function(){c.nextTick(v)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var l=a.resolve(void 0);n=function(){l.then(v)}}else n=function(){i.call(r,v)};else{var u=!0,d=document.createTextNode("");new o(v).observe(d,{characterData:!0}),n=function(){d.data=u=!u}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(c){var o=t["return"];throw void 0!==o&&r(o.call(t)),c}}},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"grey lighten-4",attrs:{id:"Home","fill-height":"",column:""}},[n("div",{staticClass:"main-pane white elevation-3"},[n("standard"),n("br"),n("v-divider"),n("std-exp")],1)])},i=[],o=n("d225"),c=n("308d"),a=n("6bb5"),s=n("4e2b"),v=n("cce8"),l=n("82f7"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"standard"},[n("div",{staticClass:"container"},[n("h1",[t._v("C言語 練習問題集 <きほんのきほん>")]),n("v-chip",{staticClass:"title",attrs:{dark:"",color:"#BA68C8","text-color":"black"}},[t._v("標準入出力 (stdio)")])],1),n("div",{staticClass:"contents"},[n("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),n("h2",{staticClass:"prompt"},[t._v("Hello, World!")]),n("h4",[t._v(t._s(t.desc))]),n("details",[n("summary",[t._v("answer example 1")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    printf("Hello, World\\n");\n    return 0;\n}')])]),n("details",[n("summary",[t._v("answer example 2")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    puts("Hello, World");\n    return 0;\n}')])])]),n("v-divider"),n("div",{staticClass:"contents"},[n("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),t._m(0),n("h4",[t._v(t._s(t.desc)),n("br"),t._v("（ただし、文章の間は1行あけること）")]),n("details",[n("summary",[t._v("answer example 1")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    printf("こんにちは\\n");\n    printf("\\n");\n    printf("今日はいい天気ですね\\n");\n    return 0;\n}')])]),n("details",[n("summary",[t._v("answer example 2")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    printf("こんにちは\\n\\n今日はいい天気ですね\\n");\n    return 0;\n}')])])]),n("v-divider"),n("div",{staticClass:"contents"},[n("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),n("h2",{staticClass:"prompt"},[t._v("100 + 50 = 150")]),n("h4",[t._v(t._s(t.desc)),n("br"),t._v("（変数を用いること）")]),n("details",[n("summary",[t._v("answer example")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+"\nint main() {\n    int x = 100;\n    int y = 50; "),n("br"),t._v('\n    printf("%d + %d = %d\\n", x, y, x + y);\n    return 0;\n}')])])]),n("v-divider"),n("div",{staticClass:"contents"},[n("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),n("h2",{staticClass:"prompt"},[t._v("PI = 3.14")]),n("h4",[t._v(t._s(t.desc)),n("br"),t._v("（変数を用いること. また、3.14の後に0が続いていてもよい）")]),n("details",[n("summary",[t._v("answer example")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+"\nint main() {\n    float pi = 3.14;\n    // double pi = 3.14 でもよい "),n("br"),t._v('\n    printf("PI = %f\\n", pi);\n    return 0;\n}')])])]),n("v-divider"),n("div",{staticClass:"contents"},[n("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),t._m(1),n("h4",[t._v(t._s(t.desc)),n("br"),t._v("（scanf関数を用いてプロンプトから値を入力する）")]),n("details",[n("summary",[t._v("answer example")]),n("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    int m, n;\n    printf("整数を入力してください\\n"); '),n("br"),t._v('\n    scanf("%d", &m);\n    scanf("%d", &n); '),n("br"),t._v('\n    printf("m + n = %d\\n", m + n);\n    return 0;\n}')])])])],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"prompt"},[t._v("こんにちは"),n("br"),n("br"),t._v("今日はいい天気ですね")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"prompt"},[t._v("整数を入力してください"),n("br"),t._v("m = 10↲"),n("br"),t._v("n = 15↲"),n("br"),n("br"),t._v("m + n = 25")])}],f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.desc="と表示するプログラムを作成せよ",t.includeStr="#include <stdio.h>",t.count=0,t.counter=function(){return++t.count},t}return Object(s["a"])(e,t),e}(l["Vue"]);f=v["__decorate"]([l["Component"]],f);var _=f,h=_,p=(n("4e40"),n("2877")),m=n("6544"),y=n.n(m),b=(n("bf5a"),n("58df")),g=n("9d26"),w=n("b64a"),x=n("6a18"),C=n("98a1"),j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},O=Object(b["a"])(w["a"],x["a"],C["a"]).extend({name:"v-chip",props:{close:Boolean,disabled:Boolean,label:Boolean,outline:Boolean,selected:Boolean,small:Boolean,textColor:String,value:{type:Boolean,default:!0}},computed:{classes:function(){return j({"v-chip--disabled":this.disabled,"v-chip--selected":this.selected&&!this.disabled,"v-chip--label":this.label,"v-chip--outline":this.outline,"v-chip--small":this.small,"v-chip--removable":this.close},this.themeClasses)}},methods:{genClose:function(t){var e=this,n={staticClass:"v-chip__close",on:{click:function(t){t.stopPropagation(),e.$emit("input",!1)}}};return t("div",n,[t(g["a"],"$vuetify.icons.delete")])},genContent:function(t){return t("span",{staticClass:"v-chip__content"},[this.$slots.default,this.close&&this.genClose(t)])}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-chip",class:this.classes,attrs:{tabindex:this.disabled?-1:0},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),n=this.textColor||this.outline&&this.color;return t("span",this.setTextColor(n,e),[this.genContent(t)])}}),E=(n("58db"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),L=x["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:E({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}}),P=Object(p["a"])(h,u,d,!1,null,"9c7ce4aa",null),k=P.exports;y()(P,{VChip:O,VDivider:L});var S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"std-exp"},[n("h1",{staticStyle:{"text-align":"center","border-bottom":"solid 3px #0277BD",width:"250px",margin:"auto"}},[t._v("解説ページ")]),n("br"),n("p",{staticClass:"title"},[t._v("#include <stdio.h>")]),n("ul",[n("li",[t._v("標準入出力（＝ 表示、入力）をできるようにするために必要なもの")]),n("li",[n("code",[t._v("printf")]),t._v("関数や"),n("code",[t._v("scanf")]),t._v("関数などが定義されている")]),n("li",[n("code",[t._v("stdio")]),t._v("＝"),n("code",[t._v("Standard Input Output")]),t._v("の略")])]),n("p",{staticClass:"title"},[t._v("int main(void)")]),n("ul",[n("li",[n("code",[t._v("main")]),t._v("関数と呼ばれ、プログラム実行時に呼ばれる関数")]),n("li",[n("code",[t._v("int")]),t._v("：返り値の型を表す / "),n("code",[t._v("main")]),t._v("関数の最後に"),n("code",[t._v("int")]),t._v("型の値を返すという意味")]),n("li",[n("code",[t._v("void")]),t._v("：英語で空という意味で引数がないということを表している"),n("br"),t._v(" また、"),n("code",[t._v("void")]),t._v("は省略でき、"),n("code",[t._v("int main()")]),t._v("とも書ける")])]),n("p",{staticClass:"title"},[t._v("{ }")]),n("ul",[n("li",[n("code",[t._v("{ }")]),t._v("で囲まれた部分はブロックと呼ばれる")]),n("li",[n("code",[t._v("if")]),t._v("や"),n("code",[t._v("for")]),t._v("などの処理が複数行にわたるときに用いられる")])]),n("p",{staticClass:"title"},[t._v(";")]),n("ul",[n("li",[t._v("セミコロンと呼ばれる")]),n("li",[t._v("基本的に処理の終わりにつける（"),n("code",[t._v("if")]),t._v("や"),n("code",[t._v("for")]),t._v("の後にはつけてはいけない）")])]),n("p",{staticClass:"title"},[t._v("return 0;")]),n("ul",[n("li",[t._v("一般的に関数の終わりにある処理で、この関数が呼ばれたときに返すという意味")]),n("li",[n("code",[t._v("main")]),t._v("関数の型が"),n("code",[t._v("int")]),t._v("であるため、整数型の"),n("code",[t._v("0")]),t._v("が返される")]),n("li",[n("code",[t._v("main")]),t._v("関数の型が"),n("code",[t._v("void")]),t._v("である場合は省略可能")])]),n("p",{staticClass:"title"},[t._v("変数")]),n("ul",[n("li",[t._v("一時的にメモリ上に領域が確保され、数値や文字などを記憶しておくことができる")]),n("li",[t._v("変数名の先頭に数字を使うことはできない")])]),n("p",{staticClass:"title"},[t._v("コメント")]),n("ul",[n("li",[t._v("プログラム内に処理の説明やメモなどを書くことができる")]),n("li",[t._v("コンパイル時に削除される")]),n("br"),n("li",[t._v("1行コメント："),n("code",[t._v("//")]),t._v("の後がすべてコメントとみなされる（ただし、1行のみ）")]),n("code",{staticClass:"code"},[t._v("// 変数の宣言"),n("br"),t._v("int hoge;")]),n("li",[t._v("複数行コメント："),n("code",[t._v("/*")]),t._v("と"),n("code",[t._v("*/")]),t._v("で囲まれた部分がコメントとみなされ、複数行書くことができる")]),n("code",{staticClass:"code"},[t._v("/*"),n("br"),t._v("　変数の宣言"),n("br"),t._v("　max: 最大値を記憶する変数"),n("br"),t._v("*/"),n("br"),t._v("int max;")])]),n("p",{staticClass:"title"},[t._v("型 | "),n("code",[t._v("int")]),t._v(", "),n("code",[t._v("float")]),t._v(", "),n("code",[t._v("double")]),t._v(", "),n("code",[t._v("char")]),t._v(", "),n("code",[t._v("bool")])]),n("ul",[n("li",[n("code",[t._v("int")]),t._v("：整数型")]),n("li",[n("code",[t._v("float")]),t._v("：浮動小数点型（単精度）")]),n("li",[n("code",[t._v("double")]),t._v("：浮動小数点型（倍精度）")]),n("li",[n("code",[t._v("char")]),t._v("：文字型")]),n("li",[n("code",[t._v("bool")]),t._v("：論理型")]),n("br"),n("li",[t._v("浮動小数点型はコンピュータの特性上誤差が生じることがある")])]),n("p",{staticClass:"title"},[t._v("変数の宣言 / 初期化")]),n("ul",[n("li",[n("span",{staticClass:"keyword"},[t._v("宣言")]),t._v("：変数は、"),n("code",[t._v("<型>␣<変数名>;")]),t._v("で宣言する")]),n("code",{staticClass:"code"},[t._v("int hoge;")]),n("br"),n("br"),n("li",[n("code",[t._v("=")]),t._v("：代入演算子"),n("br"),t._v("数学の"),n("code",[t._v("=")]),t._v("（等しい）とは異なり、右辺のデータを左辺に代入するという意味")]),n("li",[n("span",{staticClass:"keyword"},[t._v("初期化")]),t._v("：変数宣言時に初期値を設定すること（代入演算子を用いる）")]),n("code",{staticClass:"code"},[t._v("int fuga = 100;")]),n("br"),n("br"),n("li",[n("code",[t._v("<型>")]),t._v("の前に"),n("code",[t._v("const")]),t._v("をつけることで"),n("span",{staticClass:"keyword"},[t._v("定数")]),t._v("（変更不可能な変数）を宣言できる"),n("br"),t._v(" また、定数を宣言するときは初期値を必ず設定する")]),n("code",{staticClass:"code"},[t._v("const float PI = 3.141592653;")])]),n("p",{staticClass:"title"},[t._v("キャスト")]),n("ul",[n("li",[n("span",{staticClass:"keyword"},[t._v("キャスト")]),t._v("：明示的に変数の型を変換すること（明示的型変換とも呼ばれる）")]),n("li",[t._v("代入や式中では暗黙的に変換することも可能")]),n("div",{staticClass:"frame"},[t._v("暗黙型変換の優先順序 → "),n("code",[t._v("double")]),t._v(" > "),n("code",[t._v("float")]),t._v(" > "),n("code",[t._v("int")]),t._v(" > "),n("code",[t._v("char")])]),n("li",[t._v("明示的型変換は"),n("code",{staticClass:"code"},[t._v("// (型名)式\ndouble pi = 3.14;\nint num = (int)pi;")]),t._v("のように使われる")])]),n("p",{staticClass:"title"},[t._v("演算子 | "),n("code",[t._v("+")]),t._v(", "),n("code",[t._v("-")]),t._v(", "),n("code",[t._v("*")]),t._v(", "),n("code",[t._v("/")]),t._v(", "),n("code",[t._v("%")]),t._v(", "),n("code",[t._v("=")])]),n("ul",[n("li",[n("code",[t._v("+")]),t._v("：加算演算子")]),n("li",[n("code",[t._v("-")]),t._v("：減算演算子")]),n("li",[n("code",[t._v("*")]),t._v("：乗算演算子（数学記号の"),n("code",[t._v("×")]),t._v("）")]),n("li",[n("code",[t._v("/")]),t._v("：除算演算子（数学記号の"),n("code",[t._v("÷")]),t._v("）")]),n("li",[n("code",[t._v("%")]),t._v("：剰余演算子（余りを求める）")])]),n("p",{staticClass:"title"},[t._v("単項演算子 | "),n("code",[t._v("++")]),t._v(", "),n("code",[t._v("--")])]),n("ul",[n("span",{staticClass:"keyword"},[t._v("単項演算子")]),t._v("： インクリメント（1増やすこと）/ デクリメント（1減らすこと） "),n("br"),n("br"),n("li",[n("code",[t._v("x++")]),t._v("：演算してからxに1加算　（後置型）")]),n("li",[n("code",[t._v("++x")]),t._v("：xに1加算してから演算　（前置型）")]),n("li",[n("code",[t._v("x--")]),t._v("：演算してからxを1減算　（後置型）")]),n("li",[n("code",[t._v("--x")]),t._v("：xを1減算してから演算　（前置型）")])]),n("p",{staticClass:"title"},[t._v("論理演算子")]),n("ul",[t._v("A = 0, B = 1 とする"),n("li",[n("code",[t._v("AND (&&)")]),t._v("：論理和 （A && B → 0）")]),n("li",[n("code",[t._v("OR (||)")]),t._v("：論理積 （A || B → 1）")]),n("li",[n("code",[t._v("NOT (!)")]),t._v("：論理否定 （!A → 1）")])]),n("p",{staticClass:"title"},[t._v("printf()")]),n("ul",[n("li",[t._v("標準出力関数（読み方は「プリントエフ」）")]),n("li",[t._v("主な形は"),n("code",[t._v('printf("XXX\\n");')])]),t._v("この場合はコンソール（黒い）画面に"),n("span",{staticClass:"prompt"},[t._v("XXX")]),t._v("と出力される"),n("li",[n("code",[t._v("\\n")]),t._v("については次項に記載")])]),n("p",{staticClass:"title"},[t._v("エスケープシーケンス（特殊文字）")]),n("ul",[t._v("￥と \\ は環境によって表示が異なるが同意（Macでは必ず \\ ） "),n("br"),n("br"),n("li",[n("code",[t._v("\\n")]),t._v("：改行")]),n("li",[n("code",[t._v("\\0")]),t._v("：NULL（数字の「0」と同意）（読み方はナル文字 or ヌル文字）")]),n("li",[n("code",[t._v("\\'")]),t._v("：シングルクォーテーション「'」を表示")]),n("li",[n("code",[t._v('\\"')]),t._v('：ダブルクォーテーション「"」を表示')])]),n("p",{staticClass:"title"},[t._v("scanf()")]),n("ul",[n("li",[t._v("標準入力関数（読み方は「スキャンエフ」）")]),n("li",[t._v("主な形は"),n("code",[t._v('scanf("%d", &x);')])]),t._v("この場合はコンソールが入力待ち状態になり、入力することができる"),n("li",[n("code",[t._v("%d")]),t._v("については次項に記載")])]),n("p",{staticClass:"title"},[t._v("変換指定子 | "),n("code",[t._v("%d")]),t._v(", "),n("code",[t._v("%f")]),t._v(", "),n("code",[t._v("%lf")]),t._v(", "),n("code",[t._v("%c")]),t._v(", "),n("code",[t._v("%s")]),t._v(", "),n("code",[t._v("%o")]),t._v(", "),n("code",[t._v("%x")])]),n("ul",[n("li",[n("code",[t._v("printf")]),t._v("や"),n("code",[t._v("scanf")]),t._v("に用いる")]),n("br"),t._v(" よく使われるもの"),n("li",[n("code",[t._v("%d")]),t._v(" = "),n("code",[t._v("int")])]),n("li",[n("code",[t._v("%f")]),t._v(" = "),n("code",[t._v("float")])]),n("li",[n("code",[t._v("%lf")]),t._v(" = "),n("code",[t._v("double")])]),n("li",[n("code",[t._v("%c")]),t._v(" = "),n("code",[t._v("char")])]),n("li",[n("code",[t._v("%s")]),t._v(" = "),n("code",[t._v("char[]")]),t._v("：文字列（文字配列）")]),n("br"),n("li",[t._v("それぞれ様々なオプションがある（詳しくは「変換指定子 オプション」で検索）")])])])}],T=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(l["Vue"]);T=v["__decorate"]([l["Component"]],T);var A=T,N=A,$=(n("f792"),Object(p["a"])(N,S,B,!1,null,"39676780",null)),F=$.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello-world"})},I=[],G=(n("96cf"),n("795b")),M=n.n(G);function V(t,e,n,r,i,o,c){try{var a=t[o](c),s=a.value}catch(v){return void n(v)}a.done?e(s):M.a.resolve(s).then(r,i)}function W(t){return function(){var e=this,n=arguments;return new M.a(function(r,i){var o=t.apply(e,n);function c(t){V(o,r,i,c,a,"next",t)}function a(t){V(o,r,i,c,a,"throw",t)}c(void 0)})}}var H=n("85f2"),D=n.n(H);function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),D()(t,r.key,r)}}function q(t,e,n){return e&&X(t.prototype,e),n&&X(t,n),t}var Q=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),q(e,[{key:"mounted",value:function(){var t=W(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$vdialog.alert("HelloWorld");case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(l["Vue"]);Q=v["__decorate"]([l["Component"]],Q);var U=Q,J=U,K=(n("671a"),Object(p["a"])(J,R,I,!1,null,"71e54224",null)),Y=K.exports,z=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(l["Vue"]);z=v["__decorate"]([Object(l["Component"])({components:{Standard:k,StdExp:F,HelloWorld:Y}})],z);var Z=z,tt=Z;n("c219"),n("db6d");function et(t){return{name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,i=n.data,o=n.children;i.staticClass=(t+" "+(i.staticClass||"")).trim();var c=i.attrs;if(c){i.attrs={};var a=Object.keys(c).filter(function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});a.length&&(i.staticClass+=" "+a.join(" "))}return r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),e(r.tag,i,o)}}}var nt=et("layout"),rt=Object(p["a"])(tt,r,i,!1,null,null,null);e["default"]=rt.exports;y()(rt,{VDivider:L,VLayout:nt})},bc13:function(t,e,n){var r=n("e53d"),i=r.navigator;t.exports=i&&i.userAgent||""},bf5a:function(t,e,n){},c219:function(t,e,n){"use strict";var r=n("07b9"),i=n.n(r);i.a},cd78:function(t,e,n){var r=n("e4ae"),i=n("f772"),o=n("656e");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),c=n.resolve;return c(e),n.promise}},db6d:function(t,e,n){},f201:function(t,e,n){var r=n("e4ae"),i=n("79aa"),o=n("5168")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[o])?e:i(n)}},f792:function(t,e,n){"use strict";var r=n("6697"),i=n.n(r);i.a}}]);