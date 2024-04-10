/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/boolean-clockwise@5.1.5/main.es.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{getCoords as r}from"../invariant@5.2.0/_esm.js";function e(e){if(!e)throw new Error("line is required");var t=e.geometry?e.geometry.type:e.type;if(!Array.isArray(e)&&"LineString"!==t)throw new Error("geometry must be a LineString");for(var i,n,o=r(e),a=0,m=1;m<o.length;)i=n||o[0],a+=((n=o[m])[0]-i[0])*(n[1]+i[1]),m++;return a>0}export{e as default};
