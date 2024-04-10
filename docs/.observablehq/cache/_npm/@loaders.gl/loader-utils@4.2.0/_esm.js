/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@loaders.gl/loader-utils@4.2.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{Log as e}from"../../@probe.gl/log/_esm.js";import{WorkerBody as t,WorkerFarm as r,isBrowser as n,getWorkerURL as s}from"../worker-utils@4.2.0/_esm.js";import{Stats as o}from"../../@probe.gl/stats@4.0.9/_esm.js";var i="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};async function a(e,t,r,n){return n._parse(e,t,r,n)}function c(e,t,r,n){if(!n._parseSync)throw new Error("parseSync");return n._parseSync(e,t,r,n)}async function u(e,t,r,n){if(!n._parseInBatches)throw new Error("parseInBatches");return n._parseInBatches(e,t,r,n)}function l(e,t){if(!e)throw new Error(t||"loader assertion failed.")}function f(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}var d=f,w=h;function p(e){if(d===setTimeout)return setTimeout(e,0);if((d===f||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}"function"==typeof i.setTimeout&&(d=setTimeout),"function"==typeof i.clearTimeout&&(w=clearTimeout);var y,g=[],m=!1,b=-1;function v(){m&&y&&(m=!1,y.length?g=y.concat(g):b=-1,g.length&&T())}function T(){if(!m){var e=p(v);m=!0;for(var t=g.length;t;){for(y=g,g=[];++b<t;)y&&y[b].run();b=-1,t=g.length}y=null,m=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===h||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{return w(e)}catch(t){try{return w.call(null,e)}catch(t){return w.call(this,e)}}}(e)}}function A(e,t){this.fun=e,this.array=t}A.prototype.run=function(){this.fun.apply(null,this.array)};function E(){}var R=E,N=E,q=E,_=E,B=E,U=E,x=E;var S=i.performance||{},k=S.now||S.mozNow||S.msNow||S.oNow||S.webkitNow||function(){return(new Date).getTime()};var O=new Date;var L={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];g.push(new A(e,t)),1!==g.length||m||p(T)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:R,addListener:N,once:q,off:_,removeListener:B,removeAllListeners:U,emit:x,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*k.call(S),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-O)/1e3}};const C={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:void 0!==i&&i,document:"undefined"!=typeof document&&document},M=C.self||C.window||C.global||{},z=C.window||C.self||C.global||{},j=C.global||C.self||C.window||{},F=C.document||{},$=Boolean("object"!=typeof L||"[object process]"!==String(L)||L.browser),I="function"==typeof importScripts,D=void 0!==L&&L.version&&/v([0-9]*)/.exec(L.version),P=D&&parseFloat(D[1])||0,W=new e({id:"loaders.gl"});function J(e,t){return Q(e||{},t)}function Q(e,t,r=0){if(r>3)return t;const n={...e};for(const[e,s]of Object.entries(t))s&&"object"==typeof s&&!Array.isArray(s)?n[e]=Q(n[e]||{},t[e],r+1):n[e]=t[e];return n}function H(e){globalThis.loaders||={},globalThis.loaders.modules||={},Object.assign(globalThis.loaders.modules,e)}function V(e,t){const r=globalThis.loaders?.modules?.[e];r||W.warn(`${t}: ${e} library not installed`)()}function G(e,t){const r=globalThis.loaders?.modules?.[e];if(!r)throw new Error(`${t}: ${e} library not installed`);return r}function X(e){const t=globalThis.loaders?.modules?.[e];return t||null}let K=0;async function Y(e){await t.inWorkerThread()&&(t.onmessage=async(r,n)=>{if("process"===r)try{const{input:r,options:s={},context:o={}}=n,i=await async function({loader:e,arrayBuffer:t,options:r,context:n}){let s,o;if(e.parseSync||e.parse)s=t,o=e.parseSync||e.parse;else{if(!e.parseTextSync)throw new Error(`Could not load data with ${e.name} loader`);s=(new TextDecoder).decode(t),o=e.parseTextSync}return r={...r,modules:e&&e.options&&e.options.modules||{},worker:!1},await o(s,{...r},n,e)}({loader:e,arrayBuffer:r,options:s,context:{...o,_parse:Z}});t.postMessage("done",{result:i})}catch(e){const r=e instanceof Error?e.message:"";t.postMessage("error",{error:r})}})}function Z(e,r,n,s){return new Promise(((r,s)=>{const o=K++,i=(e,n)=>{if(n.id===o)switch(e){case"done":t.removeEventListener(i),r(n.result);break;case"error":t.removeEventListener(i),s(n.error)}};t.addEventListener(i);const a={id:o,input:e,options:n};t.postMessage("process",a)}))}function ee(e,t){return!!r.isSupported()&&(!(!n&&!t?._nodeWorkers)&&(e.worker&&t?.worker))}async function te(e,t,n,o,i){const a=e.id,c=s(e,n),u=r.getWorkerFarm(n).getWorkerPool({name:a,url:c});n=JSON.parse(JSON.stringify(n)),o=JSON.parse(JSON.stringify(o||{}));const l=await u.startJob("process-on-worker",re.bind(null,i));l.postMessage("process",{input:t,options:n,context:o});const f=await l.result;return await f.result}async function re(e,t,r,n){switch(r){case"done":t.done(n);break;case"error":t.error(new Error(n.error));break;case"process":const{id:s,input:o,options:i}=n;try{const r=await e(o,i);t.postMessage("done",{id:s,result:r})}catch(e){const r=e instanceof Error?e.message:"unknown error";t.postMessage("error",{id:s,error:r})}break;default:console.warn(`parse-with-worker unknown message ${r}`)}}function ne(e,t){return!!r.isSupported()&&(!(!$&&!t?._nodeWorkers)&&(e.worker&&t?.worker))}function se(e,t=5){if("string"==typeof e)return e.slice(0,t);if(ArrayBuffer.isView(e))return oe(e.buffer,e.byteOffset,t);if(e instanceof ArrayBuffer){return oe(e,0,t)}return""}function oe(e,t,r){if(e.byteLength<=t+r)return"";const n=new DataView(e);let s="";for(let e=0;e<r;e++)s+=String.fromCharCode(n.getUint8(t+e));return s}function ie(e){try{return JSON.parse(e)}catch(t){throw new Error(`Failed to parse JSON from data starting with "${se(e)}"`)}}function ae(e,t,r){if(r=r||e.byteLength,e.byteLength<r||t.byteLength<r)return!1;const n=new Uint8Array(e),s=new Uint8Array(t);for(let e=0;e<n.length;++e)if(n[e]!==s[e])return!1;return!0}function ce(...e){return ue(e)}function ue(e){const t=e.map((e=>e instanceof ArrayBuffer?new Uint8Array(e):e)),r=t.reduce(((e,t)=>e+t.byteLength),0),n=new Uint8Array(r);let s=0;for(const e of t)n.set(e,s),s+=e.byteLength;return n.buffer}function le(...e){const t=e,r=t&&t.length>1&&t[0].constructor||null;if(!r)throw new Error('"concatenateTypedArrays" - incorrect quantity of arguments or arguments have incompatible data types');const n=new r(t.reduce(((e,t)=>e+t.length),0));let s=0;for(const e of t)n.set(e,s),s+=e.length;return n}function fe(e,t,r){const n=void 0!==r?new Uint8Array(e).subarray(t,t+r):new Uint8Array(e).subarray(t);return new Uint8Array(n).buffer}function he(e,t){return l(e>=0),l(t>0),e+(t-1)&~(t-1)}function de(e,t,r,n=t.byteLength){const s=new Uint8Array(e,r,n),o=new Uint8Array(t);return s.set(o),e}function we(e,t,r){let n;if(e instanceof ArrayBuffer)n=new Uint8Array(e);else{const t=e.byteOffset,r=e.byteLength;n=new Uint8Array(e.buffer||e.arrayBuffer,t,r)}return t.set(n,r),r+he(n.byteLength,4)}function pe(e,t){const r=e.length,n=Math.ceil(r/t)*t-r;let s="";for(let e=0;e<n;++e)s+=" ";return e+s}function ye(e,t,r,n){if(e)for(let s=0;s<n;s++)e.setUint8(t+s,r.charCodeAt(s));return t+n}function ge(e,t,r,n){if(e)for(let s=0;s<n;s++)e.setUint8(t+s,r[s]);return t+n}function me(e,t,r,n){const s=he(r.byteLength,n),o=s-r.byteLength;if(e){const n=new Uint8Array(e.buffer,e.byteOffset+t,r.byteLength),s=new Uint8Array(r);n.set(s);for(let n=0;n<o;++n)e.setUint8(t+r.byteLength+n,32)}return t+=s}function be(e,t,r,n){return t=me(e,t,(new TextEncoder).encode(r),n)}async function*ve(e,t={}){const r=new TextDecoder(void 0,t);for await(const t of e)yield"string"==typeof t?t:r.decode(t,{stream:!0})}async function*Te(e){const t=new TextEncoder;for await(const r of e)yield"string"==typeof r?t.encode(r):r}async function*Ae(e){let t="";for await(const r of e){let e;for(t+=r;(e=t.indexOf("\n"))>=0;){const r=t.slice(0,e+1);t=t.slice(e+1),yield r}}t.length>0&&(yield t)}async function*Ee(e){let t=1;for await(const r of e)yield{counter:t,line:r},t++}async function Re(e,t){for(;;){const{done:r,value:n}=await e.next();if(r)return void e.return();if(t(n))return}}async function Ne(e){const t=[];for await(const r of e)t.push(r);return ce(...t)}const qe={id:"request-scheduler",throttleRequests:!0,maxRequests:6,debounceTime:0};class _e{props;stats;activeRequestCount=0;requestQueue=[];requestMap=new Map;updateTimer=null;constructor(e={}){this.props={...qe,...e},this.stats=new o({id:this.props.id}),this.stats.get("Queued Requests"),this.stats.get("Active Requests"),this.stats.get("Cancelled Requests"),this.stats.get("Queued Requests Ever"),this.stats.get("Active Requests Ever")}scheduleRequest(e,t=(()=>0)){if(!this.props.throttleRequests)return Promise.resolve({done:()=>{}});if(this.requestMap.has(e))return this.requestMap.get(e);const r={handle:e,priority:0,getPriority:t},n=new Promise((e=>(r.resolve=e,r)));return this.requestQueue.push(r),this.requestMap.set(e,n),this._issueNewRequests(),n}_issueRequest(e){const{handle:t,resolve:r}=e;let n=!1;const s=()=>{n||(n=!0,this.requestMap.delete(t),this.activeRequestCount--,this._issueNewRequests())};return this.activeRequestCount++,r?r({done:s}):Promise.resolve({done:s})}_issueNewRequests(){null!==this.updateTimer&&clearTimeout(this.updateTimer),this.updateTimer=setTimeout((()=>this._issueNewRequestsAsync()),this.props.debounceTime)}_issueNewRequestsAsync(){null!==this.updateTimer&&clearTimeout(this.updateTimer),this.updateTimer=null;const e=Math.max(this.props.maxRequests-this.activeRequestCount,0);if(0!==e){this._updateAllRequests();for(let t=0;t<e;++t){const e=this.requestQueue.shift();e&&this._issueRequest(e)}}}_updateAllRequests(){const e=this.requestQueue;for(let t=0;t<e.length;++t){const r=e[t];this._updateRequest(r)||(e.splice(t,1),this.requestMap.delete(r.handle),t--)}e.sort(((e,t)=>e.priority-t.priority))}_updateRequest(e){return e.priority=e.getPriority(e.handle),!(e.priority<0)||(e.resolve(null),!1)}}let Be="";const Ue={};function xe(e){Be=e}function Se(){return Be}function ke(e){Object.assign(Ue,e)}function Oe(e){for(const t in Ue)if(e.startsWith(t)){const r=Ue[t];e=e.replace(t,r)}return e.startsWith("http://")||e.startsWith("https://")||(e=`${Be}${e}`),e}const Le={dataType:null,batchType:null,name:"JSON",id:"json",module:"json",version:"4.2.0-beta.2",extensions:["json","geojson"],mimeTypes:["application/json"],category:"json",text:!0,parseTextSync:Ce,parse:async e=>Ce((new TextDecoder).decode(e)),options:{}};function Ce(e){return JSON.parse(e)}function Me(e){throw new Error("Buffer not supported in browser")}function ze(e){return e&&"object"==typeof e&&e.isBuffer}function je(e){return Me?Me():e}function Fe(e){if(ze(e))return e;if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return 0===e.byteOffset&&e.byteLength===e.buffer.byteLength?e.buffer:e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);if("string"==typeof e){const t=e;return(new TextEncoder).encode(t).buffer}if(e&&"object"==typeof e&&e._toArrayBuffer)return e._toArrayBuffer();throw new Error("toArrayBuffer")}function $e(e){return t=>new Promise(((r,n)=>e(t,((e,t)=>e?n(e):r(t)))))}function Ie(e){return(t,r)=>new Promise(((n,s)=>e(t,r,((e,t)=>e?s(e):n(t)))))}function De(){if(void 0!==L&&void 0!==L.cwd)return L.cwd();const e=window.location?.pathname;return e?.slice(0,e.lastIndexOf("/")+1)||""}const Pe=47,We=46;var Je=Object.freeze({__proto__:null,filename:function(e){const t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(t+1):""},dirname:function(e){const t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(0,t):""},join:function(...e){return(e=e.map(((t,r)=>(r&&(t=t.replace(new RegExp("^/"),"")),r!==e.length-1&&(t=t.replace(new RegExp("/$"),"")),t)))).join("/")},resolve:function(...e){const t=[];for(let r=0;r<e.length;r++)t[r]=e[r];let r,n="",s=!1;for(let e=t.length-1;e>=-1&&!s;e--){let o;e>=0?o=t[e]:(void 0===r&&(r=De()),o=r),0!==o.length&&(n=`${o}/${n}`,s=o.charCodeAt(0)===Pe)}return n=function(e,t){let r,n="",s=-1,o=0,i=!1;for(let a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(r===Pe)break;r=Pe}if(r===Pe){if(s===a-1||1===o);else if(s!==a-1&&2===o){if(n.length<2||!i||n.charCodeAt(n.length-1)!==We||n.charCodeAt(n.length-2)!==We)if(n.length>2){const e=n.length-1;let t=e;for(;t>=0&&n.charCodeAt(t)!==Pe;--t);if(t!==e){n=-1===t?"":n.slice(0,t),s=a,o=0,i=!1;continue}}else if(2===n.length||1===n.length){n="",s=a,o=0,i=!1;continue}t&&(n.length>0?n+="/..":n="..",i=!0)}else{const t=e.slice(s+1,a);n.length>0?n+=`/${t}`:n=t,i=!1}s=a,o=0}else r===We&&-1!==o?++o:o=-1}return n}(n,!s),s?`/${n}`:n.length>0?n:"."}});var Qe=Object.freeze({__proto__:null,isSupported:!1});class He{handle;size;bigsize;url;constructor(e){this.handle=e instanceof ArrayBuffer?new Blob([e]):e,this.size=e instanceof ArrayBuffer?e.byteLength:e.size,this.bigsize=BigInt(this.size),this.url=e instanceof File?e.name:""}async close(){}async stat(){return{size:this.handle.size,bigsize:BigInt(this.handle.size),isDirectory:!1}}async read(e,t){return await this.handle.slice(e,e+t).arrayBuffer()}}class Ve{handle;size=0;bigsize=0n;url;constructor(e){this.handle=e,this.url=e}async close(){}async stat(){const e=await fetch(this.handle,{method:"HEAD"});if(!e.ok)throw new Error(`Failed to fetch HEAD ${this.handle}`);const t=parseInt(e.headers.get("Content-Length")||"0");return{size:t,bigsize:BigInt(t),isDirectory:!1}}async read(e,t){const r=await this.fetchRange(e,t);return await r.arrayBuffer()}async fetchRange(e,t,r){const n=Number(e),s=Number(t);let o;r||(o=new AbortController,r=o.signal);const i=this.handle;let a=await fetch(i,{signal:r,headers:{Range:`bytes=${n}-${n+s-1}`}});switch(a.status){case 206:break;case 200:const n=a.headers.get("Content-Length");if(!n||Number(n)>t)throw o&&o.abort(),Error("content-length header missing or exceeding request. Server must support HTTP Byte Serving.");case 416:if(0===e){const e=a.headers.get("Content-Range");if(!e||!e.startsWith("bytes *"))throw Error("Missing content-length on 416 response");const t=Number(e.substr(8));a=await fetch(this.url,{signal:r,headers:{Range:"bytes=0-"+(t-1)}})}break;default:if(a.status>=300)throw Error(`Bad response code: ${a.status}`)}return a}}const Ge=new Error("Not implemented");class Xe{handle;size=0;bigsize=0n;url="";constructor(e,t,r){if(globalThis.loaders?.NodeFile)return new globalThis.loaders.NodeFile(e,t,r);if($)throw new Error("Can't instantiate NodeFile in browser.");throw new Error("Can't instantiate NodeFile. Make sure to import @loaders.gl/polyfills first.")}async read(e,t){throw Ge}async write(e,t,r){throw Ge}async stat(){throw Ge}async truncate(e){throw Ge}async append(e){throw Ge}async close(){}}const Ke=new Error("Not implemented");class Ye{constructor(e){if(globalThis.loaders?.NodeFileSystem)return new globalThis.loaders.NodeFileSystem(e);if($)throw new Error("Can't instantiate NodeFileSystem in browser.");throw new Error("Can't instantiate NodeFileSystem. Make sure to import @loaders.gl/polyfills first.")}readable=!0;writable=!0;async openReadableFile(e,t){throw Ke}async openWritableFile(e,t,r){throw Ke}async readdir(e=".",t){throw Ke}async stat(e,t){throw Ke}async unlink(e){throw Ke}async fetch(e,t){throw Ke}}const Ze=e=>e?.getUint8&&e?.slice&&e?.length;class et{file;constructor(e,t=!1){this.file=new Xe(e,t?"a+":"r")}async truncate(e){await this.file.truncate(e)}async append(e){await this.file.append(e)}async destroy(){await this.file.close()}async getUint8(e){const t=await this.file.read(e,1),r=new Uint8Array(t).at(0);if(void 0===r)throw new Error("something went wrong");return r}async getUint16(e){const t=await this.file.read(e,2),r=new Uint16Array(t).at(0);if(void 0===r)throw new Error("something went wrong");return r}async getUint32(e){const t=await this.file.read(e,4),r=new Uint32Array(t).at(0);if(void 0===r)throw new Error("something went wrong");return r}async getBigUint64(e){const t=await this.file.read(e,8),r=new BigInt64Array(t).at(0);if(void 0===r)throw new Error("something went wrong");return r}async slice(e,t){const r=t-e;if(r>Number.MAX_SAFE_INTEGER)throw new Error("too big slice");const n=Number(r);return await this.file.read(e,n)}get length(){return this.file.bigsize}}const tt=e=>{if(e>Number.MAX_SAFE_INTEGER)throw new Error("Offset is out of bounds");return Number(e)};class rt{file;constructor(e){this.file=e}async destroy(){}async getUint8(e){return this.file.getUint8(tt(e))}async getUint16(e){return this.file.getUint16(tt(e),!0)}async getUint32(e){return this.file.getUint32(tt(e),!0)}async getBigUint64(e){return this.file.getBigUint64(tt(e),!0)}async slice(e,t){return this.file.buffer.slice(tt(e),tt(t))}get length(){return BigInt(this.file.byteLength)}}class nt{fetch;loadOptions;_needsRefresh=!0;props;constructor(e){this.props={...e},this.loadOptions={...e.loadOptions},this.fetch=function(e){const t=e?.fetch;if(t&&"function"==typeof t)return(e,r)=>t(e,r);const r=e?.fetch;if(r&&"function"!=typeof r)return e=>fetch(e,r);return e=>fetch(e)}(this.loadOptions)}setProps(e){this.props=Object.assign(this.props,e),this.setNeedsRefresh()}setNeedsRefresh(){this._needsRefresh=!0}getNeedsRefresh(e=!0){const t=this._needsRefresh;return e&&(this._needsRefresh=!1),t}}class st extends nt{static type="template";static testURL=e=>!1}export{He as BlobFile,nt as DataSource,rt as DataViewFile,et as FileHandleFile,Ve as HttpFile,st as ImageSource,Le as JSONLoader,Xe as NodeFile,Ye as NodeFilesystem,_e as RequestScheduler,ke as _addAliases,l as assert,ne as canEncodeWithWorker,ee as canParseWithWorker,V as checkJSModule,ae as compareArrayBuffers,ce as concatenateArrayBuffers,Ne as concatenateArrayBuffersAsync,ue as concatenateArrayBuffersFromArray,le as concatenateTypedArrays,de as copyArrayBuffer,ge as copyBinaryToDataView,me as copyPaddedArrayBufferToDataView,be as copyPaddedStringToDataView,ye as copyStringToDataView,we as copyToArray,Y as createLoaderWorker,F as document,Re as forEach,se as getFirstCharacters,G as getJSModule,X as getJSModuleOrNull,oe as getMagicString,Se as getPathPrefix,j as global,$ as isBrowser,ze as isBuffer,Ze as isFileProvider,I as isWorker,W as log,Ae as makeLineIterator,Ee as makeNumberedLineIterator,ve as makeTextDecoderIterator,Te as makeTextEncoderIterator,J as mergeLoaderOptions,P as nodeVersion,pe as padStringToByteAlignment,he as padToNBytes,a as parseFromContext,u as parseInBatchesFromContext,ie as parseJSON,c as parseSyncFromContext,te as parseWithWorker,Je as path,$e as promisify1,Ie as promisify2,H as registerJSModules,Oe as resolvePath,M as self,xe as setPathPrefix,fe as sliceArrayBuffer,Qe as stream,Fe as toArrayBuffer,je as toBuffer,z as window};export default null;
