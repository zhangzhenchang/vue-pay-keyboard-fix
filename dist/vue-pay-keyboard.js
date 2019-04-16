!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PayKeyboard",[],e):"object"==typeof exports?exports.PayKeyboard=e():t.PayKeyboard=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=27)}([function(t,e,n){"use strict";function r(t){return"[object Array]"===_.call(t)}function o(t){return"[object ArrayBuffer]"===_.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function d(t){return"[object Date]"===_.call(t)}function l(t){return"[object File]"===_.call(t)}function p(t){return"[object Blob]"===_.call(t)}function h(t){return"[object Function]"===_.call(t)}function v(t){return f(t)&&h(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function m(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function x(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function w(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=w(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)x(arguments[n],t);return e}function b(t,e,n){return x(e,function(e,r){t[r]=n&&"function"==typeof e?C(e,n):e}),t}var C=n(6),S=n(30),_=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:S,isFormData:i,isArrayBufferView:a,isString:s,isNumber:c,isObject:f,isUndefined:u,isDate:d,isFile:l,isBlob:p,isFunction:h,isStream:v,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:x,merge:w,extend:b,trim:m}},function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(0),i=n(23),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(2):void 0!==e&&(t=n(2)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){s.headers[t]={}}),o.forEach(["post","put","patch"],function(t){s.headers[t]=o.merge(a)}),t.exports=s}).call(e,n(31))},function(t,e,n){"use strict";var r=n(0),o=n(15),i=n(18),a=n(24),s=n(22),c=n(5),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(17);t.exports=function(t){return new Promise(function(e,f){var d=t.data,l=t.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(t.url)||(p=new window.XDomainRequest,h="onload",v=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var g=t.auth.username||"",m=t.auth.password||"";l.Authorization="Basic "+u(g+":"+m)}if(p.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||v)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,i),p=null}},p.onerror=function(){f(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n(20),x=(t.withCredentials||s(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;x&&(l[t.xsrfHeaderName]=x)}if("setRequestHeader"in p&&r.forEach(l,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete l[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(14);t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){function r(t){n(37)}var o=n(35)(n(26),n(36),r,"data-v-87a1cd84",null);t.exports=o.exports},function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";function r(t){var e=new a(t),n=i(a.prototype.request,e);return o.extend(n,a.prototype,e),o.extend(n,e),n}var o=n(0),i=n(6),a=n(11),s=n(1),c=r(s);c.Axios=a,c.create=function(t){return r(o.merge(s,t))},c.Cancel=n(3),c.CancelToken=n(10),c.isCancel=n(4),c.all=function(t){return Promise.all(t)},c.spread=n(25),t.exports=c,t.exports.default=c},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(3);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=n(1),i=n(0),a=n(12),s=n(13);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(0),i=n(16),a=n(4),s=n(1),c=n(21),u=n(19);t.exports=function(t){return r(t),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),a="",s=0,c=i;o.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&e>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;e=e<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n.n(r),i=n(34),a=null;e.default={name:"vue-pay-keyboard",props:{payTitle:{type:String,default:"请输入支付密码"},highlightColor:{type:String,default:"#ccc"},pasDigits:{type:Number,default:6},isPay:{type:Boolean,default:!1},phone:{type:String,default:""}},data:function(){return{keyShow:!0,lodingShow:!1,paySuc:!1,val:[],keyList:[[1,2,3],[4,5,6],[7,8,9]],payStatus:!1,isNoticeBox:!0,isPassword:!0,codeValue:!0,second:60}},mounted:function(){},computed:{payStatusText:function(){return this.payStatus?"支付成功!":"支付失败,请重输密码!"}},methods:{inputEnd:function(t,e){this.unhighLight(t.currentTarget,e)},unhighLight:function(t,e){t.style.backgroundColor=e?"#e8e8e8":"#fff"},highlight:function(t){t.style.backgroundColor=this.highlightColor},inputStart:function(t,e){this.val.length<this.pasDigits?(this.val.push(t),this.val.length===this.pasDigits&&(this.$emit("pas-end",this.val.join("")),this.keyShow=!1,this.lodingShow=!0,this.$refs.loading.classList.add("loading-ani"),this.val=[],this.isNoticeBox=!1)):this.$emit("pas-end",this.val.join("")),this.highlight(e.currentTarget)},del:function(){this.val.length>0&&this.val.pop()},close:function(){this.$emit("close"),this.codeValue=!0,this.second=60,window.clearInterval(this.interval)},$payStatus:function(t){var e=this;"boolean"==typeof t&&(this.payStatus=t,this.lodingShow=!1,this.paySuc=!0,this.isNoticeBox=!1,a=t?setTimeout(function(){clearTimeout(a),e.$emit("close"),e.keyShow=!0,e.paySuc=!1,e.$refs.loading.classList.remove("loading-ani")},800):setTimeout(function(){clearTimeout(a),e.keyShow=!0,e.paySuc=!1,e.isNoticeBox=!0,e.$refs.loading.classList.remove("loading-ani")},800))},tabChange:function(){this.isPassword=!this.isPassword,this.isPassword?this.pasDigits=6:this.pasDigits=4},getPhoneCode:function(){var t=this;t.codeValue=!1,t.interval=window.setInterval(function(){t.second--<=0&&(t.second=60,t.codeValue=!0,window.clearInterval(t.interval))},1e3),o()({method:"post",url:"https://wallet-api-test.launchain.org/v1/sms/code",data:i.stringify({phone:"+86"+this.phone,type:3})}).then(function(t){}).catch(function(t){console.log(t)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=n.n(r),i={install:function(t,e){t.component(o.a.name,o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),e.default=i},function(t,e,n){e=t.exports=n(29)(),e.push([t.i,'div[data-v-87a1cd84],input[data-v-87a1cd84],span[data-v-87a1cd84]{-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}input[data-v-87a1cd84]{background:none;outline:none;border:none;background-color:transparent;border-color:transparent;-webkit-appearance:none}@keyframes loadingRotate-data-v-87a1cd84{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.title[data-v-87a1cd84]{text-align:center;height:50px;line-height:50px;margin-bottom:25px;position:relative}.tab-change[data-v-87a1cd84]{float:right;margin-right:40px;margin-bottom:15px;color:#5226f3}.code-send[data-v-87a1cd84]{margin-left:40px;height:40px;line-height:40px}.code-send p[data-v-87a1cd84]{float:left}.code-send div[data-v-87a1cd84]{float:left;width:60px;height:30px;line-height:30px;text-align:center;border-radius:20px;border:1px solid #5226f3;color:#5226f3;margin:10px 0 0 16px}.code-send .count_down[data-v-87a1cd84]{background-color:#7d7d7d;color:#fff;border:none}.pa[data-v-87a1cd84]{position:absolute;right:15px;top:50%;transform:translateY(-50%);display:flex;align-content:center;justify-content:center}.loading[data-v-87a1cd84]{display:flex;align-items:center;justify-content:center}.loading-ani[data-v-87a1cd84]{animation:loadingRotate-data-v-87a1cd84 .8s infinite}.pay-box[data-v-87a1cd84]{z-index:111;position:fixed;left:0;top:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;background-color:rgba(0,0,0,.5);z-index:999}.pay-box>div[data-v-87a1cd84]{position:absolute;width:100%;height:68%;left:0;bottom:0;color:#363636;background-color:#fff}.v-1px-b[data-v-87a1cd84],.v-1px-l[data-v-87a1cd84],.v-1px-t[data-v-87a1cd84],.v-1px[data-v-87a1cd84]{position:relative}.v-1px-b[data-v-87a1cd84]:after{content:" ";bottom:0;border-bottom:1px solid #c7c7c7;transform-origin:0 100%}.v-1px-b[data-v-87a1cd84]:after,.v-1px-t[data-v-87a1cd84]:before{position:absolute;left:0;right:0;height:1px;color:#c7c7c7;transform:scaleY(.5)}.v-1px-t[data-v-87a1cd84]:before{z-index:112;top:0;content:"";border-top:1px solid #c7c7c7;transform-origin:0 0}.v-1px-l[data-v-87a1cd84]:before{position:absolute;left:0;top:0;bottom:0;width:1px;content:"";border-left:1px solid #c7c7c7;transform:scaleX(.5);color:#c7c7c7;transform-origin:0 0}.v-1px[data-v-87a1cd84]:before{position:absolute;left:0;top:0;width:200%;height:200%;content:"";border:1px solid #c7c7c7;transform:scale(.5);color:#c7c7c7;transform-origin:left top;z-index:1000}.key-box[data-v-87a1cd84]{position:absolute;left:0;bottom:0;width:100%;font-size:16px;color:#363636}.key-box .item[data-v-87a1cd84]{display:flex;text-align:center;line-height:50px;height:50px}.key-box .key[data-v-87a1cd84]{cursor:pointer;width:100%;height:100%;flex:1}.pas-box[data-v-87a1cd84]{width:80%;height:45px;display:flex;margin:0 auto;line-height:45px;text-align:center}.pas-box>div[data-v-87a1cd84]{flex:1;display:flex;align-items:center;justify-content:center}.pas-box>div>input[data-v-87a1cd84]{width:100%;font-size:18px;text-align:center;height:100%;display:block}.slide-enter-active[data-v-87a1cd84]{transition:all 10s ease}.slide-enter[data-v-87a1cd84]{transform:translateY(500px)}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(d===clearTimeout)return clearTimeout(t);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):g=-1,h.length&&s())}function s(){if(!v){var t=o(a);v=!0;for(var e=h.length;e;){for(p=h,h=[];++g<e;)p&&p[g].run();g=-1,e=h.length}p=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var f,d,l=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(t){d=r}}();var p,h=[],v=!1,g=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new c(t,e)),1!==h.length||v||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=u,l.addListener=u,l.once=u,l.off=u,l.removeListener=u,l.removeAllListeners=u,l.emit=u,l.prependListener=u,l.prependOnceListener=u,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,i){e=e||"&",n=n||"=";var a={};if("string"!=typeof t||0===t.length)return a;var s=/\+/g;t=t.split(e);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var f=0;f<u;++f){var d,l,p,h,v=t[f].replace(s,"%20"),g=v.indexOf(n);g>=0?(d=v.substr(0,g),l=v.substr(g+1)):(d=v,l=""),p=decodeURIComponent(d),h=decodeURIComponent(l),r(a,p)?o(a[p])?a[p].push(h):a[p]=[a[p],h]:a[p]=h}return a};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";function r(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?r(a(t),function(a){var s=encodeURIComponent(o(a))+n;return i(t[a])?r(t[a],function(t){return s+encodeURIComponent(o(t))}).join(e):s+encodeURIComponent(o(t[a]))}).join(e):s?encodeURIComponent(o(s))+n+encodeURIComponent(o(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},a=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},function(t,e,n){"use strict";e.decode=e.parse=n(32),e.encode=e.stringify=n(33)},function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var u;if(o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):n&&(u=n),u){var f=c.functional,d=f?c.render:c.beforeCreate;f?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:a,options:c}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isPay?n("div",{staticClass:"pay-box"},[t.isPay?n("div",[n("div",{staticClass:"title v-1px-b pr"},[n("span",[t._v(t._s(t.payTitle))]),t._v(" "),n("span",{staticClass:"pa",on:{click:t.close}},[n("svg",{staticClass:"icon",attrs:{t:"1501505446265",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1904","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"18",height:"18"}},[n("path",{attrs:{d:"M550.659 490.565l324.395-324.386c10.945-10.945 10.945-28.699 0-39.644-10.948-10.95-28.704-10.95-39.648-0.004L511.01 450.916 186.625 126.53c-10.946-10.947-28.703-10.947-39.648 0-10.946 10.95-10.946 28.703 0 39.648l324.385 324.386-324.385 324.401c-10.946 10.944-10.946 28.703 0 39.65 10.945 10.943 28.702 10.943 39.648 0L511.01 530.213l324.396 324.401c10.944 10.944 28.7 10.944 39.648 0 10.945-10.946 10.945-28.705 0-39.649L550.66 490.565z","p-id":"1905"}})])])]),t._v(" "),t.isNoticeBox?n("div",{staticClass:"notice-box"},[t.isPassword?n("span",{staticClass:"tab-change",staticStyle:{"margin-bottom":"30px"},on:{click:t.tabChange}},[t._v("短信验证码验证>>")]):n("span",{staticClass:"tab-change",on:{click:t.tabChange}},[t._v("交易密码验证>>")]),t._v(" "),n("div",{staticStyle:{clear:"both"}}),t._v(" "),t.isPassword?t._e():n("div",{staticClass:"code-send"},[n("p",[t._v("请输入尾号为"+t._s(t.phone?t.phone.substring(7,11):t.phone)+"的短信验证码")]),t._v(" "),t.codeValue?n("div",{staticClass:"get_code",on:{click:t.getPhoneCode}},[t._v("发送")]):n("div",{staticClass:"count_down"},[t._v(t._s(t.second))])])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.keyShow,expression:"keyShow"}],staticClass:"pas-box v-1px"},t._l(t.pasDigits,function(e,r){return n("div",{key:r,class:{"v-1px-l":r>0}},[n("input",{attrs:{type:"password",disabled:""},domProps:{value:t.val[r]}})])}),0),t._v(" "),t.keyShow?n("div",{staticClass:"key-box"},[t._l(t.keyList,function(e,r){return n("div",{key:r,staticClass:"item v-1px-t"},t._l(e,function(e,r){return n("div",{key:r,staticClass:"key",class:{"v-1px-l":0!=r},on:{touchstart:function(n){return t.inputStart(e,n)},touchend:function(e){return t.inputEnd(e)}}},[t._v("\n                    "+t._s(e)+"\n                ")])}),0)}),t._v(" "),n("div",{staticClass:"item v-1px-t"},[n("div",{staticClass:"key  ",staticStyle:{background:"#e8e8e8"}}),t._v(" "),n("div",{staticClass:"key v-1px-l",on:{touchstart:function(e){return t.inputStart(0,e)},touchend:function(e){return t.inputEnd(e)}}},[t._v("0\n                ")]),t._v(" "),n("div",{staticClass:"key v-1px-l",staticStyle:{background:"#e8e8e8"},on:{touchstart:function(e){return t.del(e)},touchend:function(e){return t.inputEnd(e,"del")}}},[t._v("-\n                ")])])],2):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.paySuc,expression:"paySuc"}],staticStyle:{"text-align":"center"}},[t._t("pay-status",[t._v("\n                "+t._s(t.payStatusText)+"\n            ")])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.lodingShow,expression:"lodingShow"}],ref:"loading",staticClass:"loading"},[t._t("loading-ani",[n("svg",{staticClass:"icon",attrs:{t:"1501508156392",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1936","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100",height:"100"}},[n("path",{attrs:{d:"M914.9 682.1c-22 52.1-53.5 98.8-93.7 139s-86.9 71.7-139 93.7c-53.9 22.8-111.1 34.3-170.2 34.3s-116.3-11.5-170.1-34.3c-52.1-22-98.8-53.5-139-93.7s-71.7-86.9-93.7-139C86.4 628.3 74.8 571.1 74.8 512s11.5-116.3 34.3-170.2c22-52.1 53.5-98.8 93.7-139s86.9-71.7 139-93.7c43.3-18.3 88.8-29.4 135.7-33C497 74.6 512 58.4 512 38.9l0 0c0-21.8-18.6-39-40.3-37.3C207.8 22.1 0 242.8 0 512c0 282.8 229.2 512 512 512 269.2 0 489.9-207.8 510.4-471.7 1.7-21.7-15.5-40.3-37.3-40.3l0 0c-19.5 0-35.8 15-37.3 34.4C944.2 593.3 933.2 638.8 914.9 682.1z","p-id":"1937",fill:"#6A8FE5"}})])])],2)]):t._e()]):t._e()},staticRenderFns:[]}},function(t,e,n){var r=n(28);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(38)("6ac1f038",r,!0,{})},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var i=p++;r=l||(l=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),g.ssrId&&t.setAttribute(m,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(39),f={},d=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,v=function(){},g=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){h=n,g=o||{};var i=u(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=f[a.id];s.refs--,n.push(s)}e?(i=u(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],u=i[3],f={id:t+":"+o,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}}])});
//# sourceMappingURL=vue-pay-keyboard.js.map