/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@turf/invariant@5.2.0/main.es.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{isNumber as r}from"../helpers@5.1.5/_esm.js";function e(r){if(!r)throw new Error("coord is required");if("Feature"===r.type&&null!==r.geometry&&"Point"===r.geometry.type)return r.geometry.coordinates;if("Point"===r.type)return r.coordinates;if(Array.isArray(r)&&r.length>=2&&void 0===r[0].length&&void 0===r[1].length)return r;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function t(r){if(!r)throw new Error("coords is required");if("Feature"===r.type&&null!==r.geometry)return r.geometry.coordinates;if(r.coordinates)return r.coordinates;if(Array.isArray(r))return r;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function o(e){if(e.length>1&&r(e[0])&&r(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return o(e[0]);throw new Error("coordinates must only contain numbers")}function n(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)}function i(r,e,t){if(!r)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!r||"Feature"!==r.type||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)}function u(r,e,t){if(!r)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!r||"FeatureCollection"!==r.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<r.features.length;o++){var n=r.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+n.geometry.type)}}function a(r){if(!r)throw new Error("geojson is required");if(void 0!==r.geometry)return r.geometry;if(r.coordinates||r.geometries)return r;throw new Error("geojson must be a valid Feature or Geometry Object")}function y(){throw new Error("invariant.getGeomType has been deprecated in v5.0 in favor of invariant.getType")}function f(r,e){if(!r)throw new Error((e||"geojson")+" is required");if(r.geometry&&r.geometry.type)return r.geometry.type;if(r.type)return r.type;throw new Error((e||"geojson")+" is invalid")}export{u as collectionOf,o as containsNumber,i as featureOf,n as geojsonType,e as getCoord,t as getCoords,a as getGeom,y as getGeomType,f as getType};export default null;