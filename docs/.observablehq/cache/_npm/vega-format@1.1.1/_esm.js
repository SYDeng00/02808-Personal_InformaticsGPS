/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/vega-format@1.1.1/build/vega-format.module.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{tickStep as t}from"../d3-array@3.2.4/_esm.js";import{formatSpecifier as r,precisionFixed as e,precisionRound as n,precisionPrefix as o,format as i,formatPrefix as a,formatLocale as c}from"../d3-format@3.1.0/_esm.js";import{SECONDS as s,MINUTES as f,HOURS as u,DATE as m,WEEK as p,MONTH as l,QUARTER as h,YEAR as d,MILLISECONDS as g,DAY as x,timeInterval as P,utcInterval as b}from"../vega-time@2.1.1/_esm.js";import{isString as F,error as N,isObject as y,extend as v}from"../vega-util@1.17.2/_esm.js";import{timeFormat as I,timeParse as M,utcFormat as k,utcParse as w,timeFormatLocale as L}from"../d3-time-format@4.1.0/_esm.js";function B(t){const r={};return e=>r[e]||(r[e]=t(e))}function O(i){const a=B(i.format),c=i.formatPrefix;return{format:a,formatPrefix:c,formatFloat(t){const e=r(t||",");if(null==e.precision){switch(e.precision=12,e.type){case"%":e.precision-=2;break;case"e":e.precision-=1}return n=a(e),o=a(".1f")(1)[1],t=>{const r=n(t),e=r.indexOf(o);if(e<0)return r;let i=function(t,r){let e,n=t.lastIndexOf("e");if(n>0)return n;for(n=t.length;--n>r;)if(e=t.charCodeAt(n),e>=48&&e<=57)return n+1}(r,e);const a=i<r.length?r.slice(i):"";for(;--i>e;)if("0"!==r[i]){++i;break}return r.slice(0,i)+a}}return a(e);var n,o},formatSpan(i,s,f,u){u=r(null==u?",f":u);const m=t(i,s,f),p=Math.max(Math.abs(i),Math.abs(s));let l;if(null==u.precision)switch(u.type){case"s":return isNaN(l=o(m,p))||(u.precision=l),c(u,p);case"":case"e":case"g":case"p":case"r":isNaN(l=n(m,p))||(u.precision=l-("e"===u.type));break;case"f":case"%":isNaN(l=e(m))||(u.precision=l-2*("%"===u.type))}return a(u)}}}let S,z;function A(){return S=O({format:i,formatPrefix:a})}function C(t){return O(c(t))}function Y(t){return arguments.length?S=C(t):S}function $(t,r,e){y(e=e||{})||N(`Invalid time multi-format specifier: ${e}`);const n=r(s),o=r(f),i=r(u),a=r(m),c=r(p),P=r(l),b=r(h),F=r(d),v=t(e[g]||".%L"),I=t(e[s]||":%S"),M=t(e[f]||"%I:%M"),k=t(e[u]||"%I %p"),w=t(e[m]||e[x]||"%a %d"),L=t(e[p]||"%b %d"),B=t(e[l]||"%B"),O=t(e[h]||"%B"),S=t(e[d]||"%Y");return t=>(n(t)<t?v:o(t)<t?I:i(t)<t?M:a(t)<t?k:P(t)<t?c(t)<t?w:L:F(t)<t?b(t)<t?B:O:S)(t)}function j(t){const r=B(t.format),e=B(t.utcFormat);return{timeFormat:t=>F(t)?r(t):$(r,P,t),utcFormat:t=>F(t)?e(t):$(e,b,t),timeParse:B(t.parse),utcParse:B(t.utcParse)}}function q(){return z=j({format:I,parse:M,utcFormat:k,utcParse:w})}function D(t){return j(L(t))}function E(t){return arguments.length?z=D(t):z}A(),q();const G=(t,r)=>v({},t,r);function H(t,r){const e=t?C(t):Y(),n=r?D(r):E();return G(e,n)}function J(t,r){const e=arguments.length;return e&&2!==e&&N("defaultLocale expects either zero or two arguments."),e?G(Y(t),E(r)):G(Y(),E())}function K(){return A(),q(),J()}export{J as defaultLocale,H as locale,Y as numberFormatDefaultLocale,C as numberFormatLocale,K as resetDefaultLocale,A as resetNumberFormatDefaultLocale,q as resetTimeFormatDefaultLocale,E as timeFormatDefaultLocale,D as timeFormatLocale};export default null;
