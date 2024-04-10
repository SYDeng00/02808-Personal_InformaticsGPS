/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/strnum@1.0.5/strnum.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const e=/^[-+]?0x[a-fA-F0-9]+$/,t=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const r={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};var n=function(n,i={}){if(i=Object.assign({},r,i),!n||"string"!=typeof n)return n;let s=n.trim();if(void 0!==i.skipLike&&i.skipLike.test(s))return n;if(i.hex&&e.test(s))return Number.parseInt(s,16);{const e=t.exec(s);if(e){const t=e[1],r=e[2];let o=function(e){if(e&&-1!==e.indexOf("."))return"."===(e=e.replace(/0+$/,""))?e="0":"."===e[0]?e="0"+e:"."===e[e.length-1]&&(e=e.substr(0,e.length-1)),e;return e}(e[3]);const a=e[4]||e[6];if(!i.leadingZeros&&r.length>0&&t&&"."!==s[2])return n;if(!i.leadingZeros&&r.length>0&&!t&&"."!==s[1])return n;{const e=Number(s),u=""+e;return-1!==u.search(/[eE]/)||a?i.eNotation?e:n:-1!==s.indexOf(".")?"0"===u&&""===o||u===o||t&&u==="-"+o?e:n:r?o===u||t+o===u?e:n:s===u||s===t+u?e:n}}return n}};export{n as default};
