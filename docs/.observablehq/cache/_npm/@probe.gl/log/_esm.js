/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@probe.gl/log@4.0.9/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{isBrowser as t,window as e,process as o,VERSION as n}from"../env@4.0.9/_esm.js";class s{constructor(t,e,o="sessionStorage"){this.storage=function(t){try{const e=window[t],o="__storage_test__";return e.setItem(o,o),e.removeItem(o),e}catch(t){return null}}(o),this.id=t,this.config=e,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(t){if(Object.assign(this.config,t),this.storage){const t=JSON.stringify(this.config);this.storage.setItem(this.id,t)}}_loadConfiguration(){let t={};if(this.storage){const e=this.storage.getItem(this.id);t=e?JSON.parse(e):{}}return Object.assign(this.config,t),this}}function r(t,e=8){const o=Math.max(e-t.length,0);return`${" ".repeat(o)}${t}`}function i(t,e=8){const o=Math.max(e-t.length,0);return`${t}${" ".repeat(o)}`}var g;!function(t){t[t.BLACK=30]="BLACK",t[t.RED=31]="RED",t[t.GREEN=32]="GREEN",t[t.YELLOW=33]="YELLOW",t[t.BLUE=34]="BLUE",t[t.MAGENTA=35]="MAGENTA",t[t.CYAN=36]="CYAN",t[t.WHITE=37]="WHITE",t[t.BRIGHT_BLACK=90]="BRIGHT_BLACK",t[t.BRIGHT_RED=91]="BRIGHT_RED",t[t.BRIGHT_GREEN=92]="BRIGHT_GREEN",t[t.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",t[t.BRIGHT_BLUE=94]="BRIGHT_BLUE",t[t.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",t[t.BRIGHT_CYAN=96]="BRIGHT_CYAN",t[t.BRIGHT_WHITE=97]="BRIGHT_WHITE"}(g||(g={}));const a=10;function c(t){return"string"!=typeof t?t:(t=t.toUpperCase(),g[t]||g.WHITE)}function l(e,o,n){if(!t&&"string"==typeof e){if(o){e=`[${c(o)}m${e}[39m`}if(n){e=`[${c(n)+a}m${e}[49m`}}return e}function u(t,e=["constructor"]){const o=Object.getPrototypeOf(t),n=Object.getOwnPropertyNames(o),s=t;for(const o of n){const n=s[o];"function"==typeof n&&(e.find((t=>o===t))||(s[o]=n.bind(t)))}}function h(t,e){if(!t)throw new Error(e||"Assertion failed")}function f(){let n;if(t()&&e.performance)n=e?.performance?.now?.();else if("hrtime"in o){const t=o?.hrtime?.();n=1e3*t[0]+t[1]/1e6}else n=Date.now();return n}const d={debug:t()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},m={enabled:!0,level:0};function _(){}const p={},b={once:!0};class E{constructor({id:t}={id:""}){this.VERSION=n,this._startTs=f(),this._deltaTs=f(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=t,this.userData={},this._storage=new s(`__probe-${this.id}__`,m),this.timeStamp(`${this.id} started`),u(this),Object.seal(this)}set level(t){this.setLevel(t)}get level(){return this.getLevel()}isEnabled(){return this._storage.config.enabled}getLevel(){return this._storage.config.level}getTotal(){return Number((f()-this._startTs).toPrecision(10))}getDelta(){return Number((f()-this._deltaTs).toPrecision(10))}set priority(t){this.level=t}get priority(){return this.level}getPriority(){return this.level}enable(t=!0){return this._storage.setConfiguration({enabled:t}),this}setLevel(t){return this._storage.setConfiguration({level:t}),this}get(t){return this._storage.config[t]}set(t,e){this._storage.setConfiguration({[t]:e})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(t,e){if(!t)throw new Error(e||"Assertion failed")}warn(t){return this._getLogFunction(0,t,d.warn,arguments,b)}error(t){return this._getLogFunction(0,t,d.error,arguments)}deprecated(t,e){return this.warn(`\`${t}\` is deprecated and will be removed in a later version. Use \`${e}\` instead`)}removed(t,e){return this.error(`\`${t}\` has been removed. Use \`${e}\` instead`)}probe(t,e){return this._getLogFunction(t,e,d.log,arguments,{time:!0,once:!0})}log(t,e){return this._getLogFunction(t,e,d.debug,arguments)}info(t,e){return this._getLogFunction(t,e,console.info,arguments)}once(t,e){return this._getLogFunction(t,e,d.debug||d.info,arguments,b)}table(t,e,o){return e?this._getLogFunction(t,e,console.table||_,o&&[o],{tag:I(e)}):_}time(t,e){return this._getLogFunction(t,e,console.time?console.time:console.info)}timeEnd(t,e){return this._getLogFunction(t,e,console.timeEnd?console.timeEnd:console.info)}timeStamp(t,e){return this._getLogFunction(t,e,console.timeStamp||_)}group(t,e,o={collapsed:!1}){const n=T({logLevel:t,message:e,opts:o}),{collapsed:s}=o;return n.method=(s?console.groupCollapsed:console.group)||console.info,this._getLogFunction(n)}groupCollapsed(t,e,o={}){return this.group(t,e,Object.assign({},o,{collapsed:!0}))}groupEnd(t){return this._getLogFunction(t,"",console.groupEnd||_)}withGroup(t,e,o){this.group(t,e)();try{o()}finally{this.groupEnd(t)()}}trace(){console.trace&&console.trace()}_shouldLog(t){return this.isEnabled()&&this.getLevel()>=L(t)}_getLogFunction(t,e,o,n,s){if(this._shouldLog(t)){s=T({logLevel:t,message:e,args:n,opts:s}),h(o=o||s.method),s.total=this.getTotal(),s.delta=this.getDelta(),this._deltaTs=f();const i=s.tag||s.message;if(s.once&&i){if(p[i])return _;p[i]=f()}return e=function(t,e,o){if("string"==typeof e){const n=o.time?r(function(t){let e;return e=t<10?`${t.toFixed(2)}ms`:t<100?`${t.toFixed(1)}ms`:t<1e3?`${t.toFixed(0)}ms`:`${(t/1e3).toFixed(2)}s`,e}(o.total)):"";e=l(e=o.time?`${t}: ${n}  ${e}`:`${t}: ${e}`,o.color,o.background)}return e}(this.id,s.message,s),o.bind(console,e,...s.args)}return _}}function L(t){if(!t)return 0;let e;switch(typeof t){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return h(Number.isFinite(e)&&e>=0),e}function T(t){const{logLevel:e,message:o}=t;t.logLevel=L(e);const n=t.args?Array.from(t.args):[];for(;n.length&&n.shift()!==o;);switch(typeof e){case"string":case"function":void 0!==o&&n.unshift(o),t.message=e;break;case"object":Object.assign(t,e)}"function"==typeof t.message&&(t.message=t.message());const s=typeof t.message;return h("string"===s||"object"===s),Object.assign(t,{args:n},t.opts)}function I(t){for(const e in t)for(const o in t[e])return o||"untitled";return"empty"}E.VERSION=n,globalThis.probe={};var v=new E({id:"@probe.gl/log"});export{g as COLOR,s as LocalStorage,E as Log,l as addColor,u as autobind,v as default,f as getHiResTimestamp,r as leftPad,i as rightPad};