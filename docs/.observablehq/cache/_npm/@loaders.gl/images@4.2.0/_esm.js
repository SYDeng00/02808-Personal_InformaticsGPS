/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@loaders.gl/images@4.2.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{isBrowser as e,assert as t}from"../loader-utils@4.2.0/_esm.js";const n="4.2.0-beta.2",a=globalThis.loaders?.parseImageNode,i="undefined"!=typeof Image,r="undefined"!=typeof ImageBitmap,o=Boolean(a),A=!!e||o;function g(e){switch(e){case"auto":return r||i||A;case"imagebitmap":return r;case"image":return i;case"data":return A;default:throw new Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}function c(){if(r)return"imagebitmap";if(i)return"image";if(A)return"data";throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js")}function m(e){return Boolean(l(e))}function s(e){const t=l(e);if(!t)throw new Error("Not an image");return t}function u(e){return f(e)}function f(e){switch(s(e)){case"data":return e;case"image":case"imagebitmap":const t=document.createElement("canvas"),n=t.getContext("2d");if(!n)throw new Error("getImageData");return t.width=e.width,t.height=e.height,n.drawImage(e,0,0),n.getImageData(0,0,e.width,e.height);default:throw new Error("getImageData")}}function l(e){return"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?"imagebitmap":"undefined"!=typeof Image&&e instanceof Image?"image":e&&"object"==typeof e&&e.data&&e.width&&e.height?"data":null}const d=/^data:image\/svg\+xml/,p=/\.svg((\?|#).*)?$/;function w(e){return e&&(d.test(e)||p.test(e))}function h(e,t){if(w(t))throw new Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(e)])}async function y(e,t,n){const a=function(e,t){if(w(t)){let t=(new TextDecoder).decode(e);try{"function"==typeof unescape&&"function"==typeof encodeURIComponent&&(t=unescape(encodeURIComponent(t)))}catch(e){throw new Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return h(e,t)}(e,n),i=self.URL||self.webkitURL,r="string"!=typeof a&&i.createObjectURL(a);try{return await async function(e,t){const n=new Image;if(n.src=e,t.image&&t.image.decode&&n.decode)return await n.decode(),n;return await new Promise(((e,t)=>{try{n.onload=()=>e(n),n.onerror=e=>{const n=e instanceof Error?e.message:"error";t(new Error(n))}}catch(e){t(e)}}))}(r||a,t)}finally{r&&i.revokeObjectURL(r)}}const b={};let B=!0;async function I(e,t,n){let a;if(w(n)){a=await y(e,t,n)}else a=h(e,n);const i=t&&t.imagebitmap;return await async function(e,t=null){!function(e){for(const t in e||b)return!1;return!0}(t)&&B||(t=null);if(t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),B=!1}return await createImageBitmap(e)}(a,i)}function v(e){return function(e,t,n=0){const a=(i=t,[...i].map((e=>e.charCodeAt(0))));var i;for(let t=0;t<a.length;++t)if(a[t]!==e[t+n])return!1;return!0}(e,"ftyp",4)?0==(96&e[8])?null:function(e){switch((t=e,n=8,a=12,String.fromCharCode(...t.slice(n,a))).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}var t,n,a}(e):null}const U=!1,E=!0;function x(e){const t=D(e);return function(e){const t=D(e),n=t.byteLength>=24&&2303741511===t.getUint32(0,U);if(!n)return null;return{mimeType:"image/png",width:t.getUint32(16,U),height:t.getUint32(20,U)}}(t)||function(e){const t=D(e),n=t.byteLength>=3&&65496===t.getUint16(0,U)&&255===t.getUint8(2);if(!n)return null;const{tableMarkers:a,sofMarkers:i}=function(){const e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);const t=new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502]);return{tableMarkers:e,sofMarkers:t}}();let r=2;for(;r+9<t.byteLength;){const e=t.getUint16(r,U);if(i.has(e))return{mimeType:"image/jpeg",height:t.getUint16(r+5,U),width:t.getUint16(r+7,U)};if(!a.has(e))return null;r+=2,r+=t.getUint16(r,U)}return null}(t)||function(e){const t=D(e),n=t.byteLength>=10&&1195984440===t.getUint32(0,U);if(!n)return null;return{mimeType:"image/gif",width:t.getUint16(6,E),height:t.getUint16(8,E)}}(t)||function(e){const t=D(e),n=t.byteLength>=14&&16973===t.getUint16(0,U)&&t.getUint32(2,E)===t.byteLength;if(!n)return null;return{mimeType:"image/bmp",width:t.getUint32(18,E),height:t.getUint32(22,E)}}(t)||function(e){const t=new Uint8Array(e instanceof DataView?e.buffer:e),n=v(t);if(!n)return null;return{mimeType:n.mimeType,width:0,height:0}}(t)}function D(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw new Error("toDataView")}const T={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:n,mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:async function(e,n,a){const i=((n=n||{}).image||{}).type||"auto",{url:r}=a||{};let o;switch(function(e){switch(e){case"auto":case"data":return c();default:return g(e),e}}(i)){case"imagebitmap":o=await I(e,n,r);break;case"image":o=await y(e,n,r);break;case"data":o=await async function(e,n){const{mimeType:a}=x(e)||{},i=globalThis.loaders?.parseImageNode;return t(i),await i(e,a)}(e);break;default:t(!1)}return"data"===i&&(o=f(o)),o},tests:[e=>Boolean(x(new DataView(e)))],options:{image:{type:"auto",decode:!0}}},j=globalThis.loaders?.encodeImageNode;let C=!0;const k={name:"Images",id:"image",module:"images",version:n,extensions:["jpeg"],options:{image:{mimeType:"image/png",jpegQuality:null}},encode:async function(e,t){return(t=t||{}).image=t.image||{},j?j(e,{type:t.image.mimeType}):async function(e,t){const{mimeType:n,jpegQuality:a}=t.image,{width:i,height:r}=u(e),o=document.createElement("canvas");o.width=i,o.height=r,function(e,t,n=0,a=0){if(0===n&&0===a&&"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){const n=t.getContext("bitmaprenderer");if(n)return n.transferFromImageBitmap(e),t}const i=t.getContext("2d");if(e.data){const n=new Uint8ClampedArray(e.data),a=new ImageData(n,e.width,e.height);return i.putImageData(a,0,0),t}i.drawImage(e,0,0)}(e,o);const A=await new Promise((e=>{if(a&&C)try{return void o.toBlob(e,n,a)}catch(e){C=!1}o.toBlob(e,n)}));if(!A)throw new Error("image encoding failed");return await A.arrayBuffer()}(e,t)}},L=["image/png","image/jpeg","image/gif","image/webp","image/avif","image/tiff","image/svg","image/svg+xml","image/bmp","image/vnd.microsoft.icon"];async function Q(){const t=new Set;for(const n of L){(e?await W(n):V(n))&&t.add(n)}return t}const G={};function R(t){if(void 0===G[t]){const n=e?function(e){switch(e){case"image/avif":case"image/webp":return function(e){try{const t=document.createElement("canvas");return 0===t.toDataURL(e).indexOf(`data:${e}`)}catch{return!1}}(e);default:return!0}}(t):V(t);G[t]=n}return G[t]}function V(e){const t=globalThis.loaders?.imageFormatsNode||["image/png","image/jpeg","image/gif"],n=globalThis.loaders?.parseImageNode;return Boolean(n)&&t.includes(e)}const N={"image/avif":"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=","image/webp":"data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"};async function W(e){const t=N[e];return!t||await async function(e){return new Promise((t=>{const n=new Image;n.src=e,n.onload=()=>t(n.height>0),n.onerror=()=>t(!1)}))}(t)}function Y(){throw new Error("loadImage has moved to @loaders.gl/textures")}export{T as ImageLoader,k as ImageWriter,x as getBinaryImageMetadata,c as getDefaultImageType,f as getImageData,u as getImageSize,s as getImageType,Q as getSupportedImageFormats,m as isImage,R as isImageFormatSupported,g as isImageTypeSupported,Y as loadImage};export default null;
