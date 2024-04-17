/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/topojson-client@3.1.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function r(r){return r}function t(t){if(null==t)return r;var n,e,o=t.scale[0],a=t.scale[1],c=t.translate[0],i=t.translate[1];return function(r,t){t||(n=e=0);var u=2,f=r.length,s=new Array(f);for(s[0]=(n+=r[0])*o+c,s[1]=(e+=r[1])*a+i;u<f;)s[u]=r[u],++u;return s}}function n(r){var n,e=t(r.transform),o=1/0,a=o,c=-o,i=-o;function u(r){(r=e(r))[0]<o&&(o=r[0]),r[0]>c&&(c=r[0]),r[1]<a&&(a=r[1]),r[1]>i&&(i=r[1])}function f(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(f);break;case"Point":u(r.coordinates);break;case"MultiPoint":r.coordinates.forEach(u)}}for(n in r.arcs.forEach((function(r){for(var t,n=-1,u=r.length;++n<u;)(t=e(r[n],n))[0]<o&&(o=t[0]),t[0]>c&&(c=t[0]),t[1]<a&&(a=t[1]),t[1]>i&&(i=t[1])})),r.objects)f(r.objects[n]);return[o,a,c,i]}function e(r,t){return"string"==typeof t&&(t=r.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return o(r,t)}))}:o(r,t)}function o(r,t){var n=t.id,e=t.bbox,o=null==t.properties?{}:t.properties,c=a(r,t);return null==n&&null==e?{type:"Feature",properties:o,geometry:c}:null==e?{type:"Feature",id:n,properties:o,geometry:c}:{type:"Feature",id:n,bbox:e,properties:o,geometry:c}}function a(r,n){var e=t(r.transform),o=r.arcs;function a(r,t){t.length&&t.pop();for(var n=o[r<0?~r:r],a=0,c=n.length;a<c;++a)t.push(e(n[a],a));r<0&&function(r,t){for(var n,e=r.length,o=e-t;o<--e;)n=r[o],r[o++]=r[e],r[e]=n}(t,c)}function c(r){return e(r)}function i(r){for(var t=[],n=0,e=r.length;n<e;++n)a(r[n],t);return t.length<2&&t.push(t[0]),t}function u(r){for(var t=i(r);t.length<4;)t.push(t[0]);return t}function f(r){return r.map(u)}return function r(t){var n,e=t.type;switch(e){case"GeometryCollection":return{type:e,geometries:t.geometries.map(r)};case"Point":n=c(t.coordinates);break;case"MultiPoint":n=t.coordinates.map(c);break;case"LineString":n=i(t.arcs);break;case"MultiLineString":n=t.arcs.map(i);break;case"Polygon":n=f(t.arcs);break;case"MultiPolygon":n=t.arcs.map(f);break;default:return null}return{type:e,coordinates:n}}(n)}function c(r,t){var n={},e={},o={},a=[],c=-1;function i(r,t){for(var e in r){var o=r[e];delete t[o.start],delete o.start,delete o.end,o.forEach((function(r){n[r<0?~r:r]=1})),a.push(o)}}return t.forEach((function(n,e){var o,a=r.arcs[n<0?~n:n];a.length<3&&!a[1][0]&&!a[1][1]&&(o=t[++c],t[c]=n,t[e]=o)})),t.forEach((function(t){var n,a,c=function(t){var n,e=r.arcs[t<0?~t:t],o=e[0];r.transform?(n=[0,0],e.forEach((function(r){n[0]+=r[0],n[1]+=r[1]}))):n=e[e.length-1];return t<0?[n,o]:[o,n]}(t),i=c[0],u=c[1];if(n=o[i])if(delete o[n.end],n.push(t),n.end=u,a=e[u]){delete e[a.start];var f=a===n?n:n.concat(a);e[f.start=n.start]=o[f.end=a.end]=f}else e[n.start]=o[n.end]=n;else if(n=e[u])if(delete e[n.start],n.unshift(t),n.start=i,a=o[i]){delete o[a.end];var s=a===n?n:a.concat(n);e[s.start=a.start]=o[s.end=n.end]=s}else e[n.start]=o[n.end]=n;else e[(n=[t]).start=i]=o[n.end=u]=n})),i(o,e),i(e,o),t.forEach((function(r){n[r<0?~r:r]||a.push([r])})),a}function i(r){return a(r,u.apply(this,arguments))}function u(r,t,n){var e,o,a;if(arguments.length>1)e=function(r,t,n){var e,o=[],a=[];function c(r){var t=r<0?~r:r;(a[t]||(a[t]=[])).push({i:r,g:e})}function i(r){r.forEach(c)}function u(r){r.forEach(i)}function f(r){r.forEach(u)}function s(r){switch(e=r,r.type){case"GeometryCollection":r.geometries.forEach(s);break;case"LineString":i(r.arcs);break;case"MultiLineString":case"Polygon":u(r.arcs);break;case"MultiPolygon":f(r.arcs)}}return s(t),a.forEach(null==n?function(r){o.push(r[0].i)}:function(r){n(r[0].g,r[r.length-1].g)&&o.push(r[0].i)}),o}(0,t,n);else for(o=0,e=new Array(a=r.arcs.length);o<a;++o)e[o]=o;return{type:"MultiLineString",arcs:c(r,e)}}function f(r){return a(r,s.apply(this,arguments))}function s(r,t){var n={},e=[],o=[];function i(r){r.forEach((function(t){t.forEach((function(t){(n[t=t<0?~t:t]||(n[t]=[])).push(r)}))})),e.push(r)}function u(t){return function(r){for(var t,n=-1,e=r.length,o=r[e-1],a=0;++n<e;)t=o,o=r[n],a+=t[0]*o[1]-t[1]*o[0];return Math.abs(a)}(a(r,{type:"Polygon",arcs:[t]}).coordinates[0])}return t.forEach((function r(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(r);break;case"Polygon":i(t.arcs);break;case"MultiPolygon":t.arcs.forEach(i)}})),e.forEach((function(r){if(!r._){var t=[],e=[r];for(r._=1,o.push(t);r=e.pop();)t.push(r),r.forEach((function(r){r.forEach((function(r){n[r<0?~r:r].forEach((function(r){r._||(r._=1,e.push(r))}))}))}))}})),e.forEach((function(r){delete r._})),{type:"MultiPolygon",arcs:o.map((function(t){var e,o=[];if(t.forEach((function(r){r.forEach((function(r){r.forEach((function(r){n[r<0?~r:r].length<2&&o.push(r)}))}))})),(e=(o=c(r,o)).length)>1)for(var a,i,f=1,s=u(o[0]);f<e;++f)(a=u(o[f]))>s&&(i=o[0],o[0]=o[f],o[f]=i,s=a);return o})).filter((function(r){return r.length>0}))}}function l(r,t){for(var n=0,e=r.length;n<e;){var o=n+e>>>1;r[o]<t?n=o+1:e=o}return n}function h(r){var t={},n=r.map((function(){return[]}));function e(r,n){r.forEach((function(r){r<0&&(r=~r);var e=t[r];e?e.push(n):t[r]=[n]}))}function o(r,t){r.forEach((function(r){e(r,t)}))}var a={LineString:e,MultiLineString:o,Polygon:o,MultiPolygon:function(r,t){r.forEach((function(r){o(r,t)}))}};for(var c in r.forEach((function r(t,n){"GeometryCollection"===t.type?t.geometries.forEach((function(t){r(t,n)})):t.type in a&&a[t.type](t.arcs,n)})),t)for(var i=t[c],u=i.length,f=0;f<u;++f)for(var s=f+1;s<u;++s){var h,p=i[f],g=i[s];(h=n[p])[c=l(h,g)]!==g&&h.splice(c,0,g),(h=n[g])[c=l(h,p)]!==p&&h.splice(c,0,p)}return n}function p(t){if(null==t)return r;var n,e,o=t.scale[0],a=t.scale[1],c=t.translate[0],i=t.translate[1];return function(r,t){t||(n=e=0);var u=2,f=r.length,s=new Array(f),l=Math.round((r[0]-c)/o),h=Math.round((r[1]-i)/a);for(s[0]=l-n,n=l,s[1]=h-e,e=h;u<f;)s[u]=r[u],++u;return s}}function g(r,t){if(r.transform)throw new Error("already quantized");if(t&&t.scale)u=r.bbox;else{if(!((e=Math.floor(t))>=2))throw new Error("n must be ≥2");var e,o=(u=r.bbox||n(r))[0],a=u[1],c=u[2],i=u[3];t={scale:[c-o?(c-o)/(e-1):1,i-a?(i-a)/(e-1):1],translate:[o,a]}}var u,f,s=p(t),l=r.objects,h={};function g(r){return s(r)}function y(r){var t;switch(r.type){case"GeometryCollection":t={type:"GeometryCollection",geometries:r.geometries.map(y)};break;case"Point":t={type:"Point",coordinates:g(r.coordinates)};break;case"MultiPoint":t={type:"MultiPoint",coordinates:r.coordinates.map(g)};break;default:return r}return null!=r.id&&(t.id=r.id),null!=r.bbox&&(t.bbox=r.bbox),null!=r.properties&&(t.properties=r.properties),t}for(f in l)h[f]=y(l[f]);return{type:"Topology",bbox:u,transform:t,objects:h,arcs:r.arcs.map((function(r){var t,n=0,e=1,o=r.length,a=new Array(o);for(a[0]=s(r[0],0);++n<o;)((t=s(r[n],n))[0]||t[1])&&(a[e++]=t);return 1===e&&(a[e++]=[0,0]),a.length=e,a}))}}export{n as bbox,e as feature,f as merge,s as mergeArcs,i as mesh,u as meshArcs,h as neighbors,g as quantize,t as transform,p as untransform};export default null;