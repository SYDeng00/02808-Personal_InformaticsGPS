/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/clone@5.1.5/main.es.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function e(e){if(!e)throw new Error("geojson is required");switch(e.type){case"Feature":return t(e);case"FeatureCollection":return function(e){var r={type:"FeatureCollection"};return Object.keys(e).forEach((function(t){switch(t){case"type":case"features":return;default:r[t]=e[t]}})),r.features=e.features.map((function(e){return t(e)})),r}(e);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return n(e);default:throw new Error("unknown GeoJSON type")}}function t(e){var t={type:"Feature"};return Object.keys(e).forEach((function(r){switch(r){case"type":case"properties":case"geometry":return;default:t[r]=e[r]}})),t.properties=r(e.properties),t.geometry=n(e.geometry),t}function r(e){var t={};return e?(Object.keys(e).forEach((function(n){var o=e[n];"object"==typeof o?null===o?t[n]=null:o.length?t[n]=o.map((function(e){return e})):t[n]=r(o):t[n]=o})),t):t}function n(e){var t={type:e.type};return e.bbox&&(t.bbox=e.bbox),"GeometryCollection"===e.type?(t.geometries=e.geometries.map((function(e){return n(e)})),t):(t.coordinates=o(e.coordinates),t)}function o(e){return"object"!=typeof e[0]?e.slice():e.map((function(e){return o(e)}))}export{e as default};
