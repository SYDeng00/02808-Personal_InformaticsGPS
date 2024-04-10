/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@loaders.gl/textures@4.2.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{registerJSModules as _,getJSModuleOrNull as t,assert as e,resolvePath as r}from"../loader-utils@4.2.0/_esm.js";import{loadLibrary as E,ChildProcessProxy as S}from"../worker-utils@4.2.0/_esm.js";import{read as n}from"../../ktx-parse@0.0.4/_esm.js";import{ImageLoader as a,getImageSize as R}from"../images@4.2.0/_esm.js";const s="4.2.0-beta.2",o={TRANSCODER:"basis_transcoder.js",TRANSCODER_WASM:"basis_transcoder.wasm",ENCODER:"basis_encoder.js",ENCODER_WASM:"basis_encoder.wasm"};let i,A;async function C(e){_(e.modules);const r=t("basis");return r||(i||=async function(_){let t=null,e=null;return[t,e]=await Promise.all([await E(o.TRANSCODER,"textures",_),await E(o.TRANSCODER_WASM,"textures",_)]),t=t||globalThis.BASIS,await function(_,t){const e={};t&&(e.wasmBinary=t);return new Promise((t=>{_(e).then((_=>{const{BasisFile:e,initializeBasis:r}=_;r(),t({BasisFile:e})}))}))}(t,e)}(e),await i)}async function c(_){const t=_.modules||{};return t.basisEncoder?t.basisEncoder:(A=A||async function(_){let t=null,e=null;return[t,e]=await Promise.all([await E(o.ENCODER,"textures",_),await E(o.ENCODER_WASM,"textures",_)]),t=t||globalThis.BASIS,await function(_,t){const e={};t&&(e.wasmBinary=t);return new Promise((t=>{_(e).then((_=>{const{BasisFile:e,KTX2File:r,initializeBasis:E,BasisEncoder:S}=_;E(),t({BasisFile:e,KTX2File:r,BasisEncoder:S})}))}))}(t,e)}(_),await A)}const T={COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_RGBA8_ETC2_EAC:37493,COMPRESSED_SRGB8_ETC2:37494,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37495,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37496,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37497,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGB_ATC_WEBGL:35986,COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL:35987,COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL:34798,COMPRESSED_RGBA_ASTC_4X4_KHR:37808,COMPRESSED_RGBA_ASTC_5X4_KHR:37809,COMPRESSED_RGBA_ASTC_5X5_KHR:37810,COMPRESSED_RGBA_ASTC_6X5_KHR:37811,COMPRESSED_RGBA_ASTC_6X6_KHR:37812,COMPRESSED_RGBA_ASTC_8X5_KHR:37813,COMPRESSED_RGBA_ASTC_8X6_KHR:37814,COMPRESSED_RGBA_ASTC_8X8_KHR:37815,COMPRESSED_RGBA_ASTC_10X5_KHR:37816,COMPRESSED_RGBA_ASTC_10X6_KHR:37817,COMPRESSED_RGBA_ASTC_10X8_KHR:37818,COMPRESSED_RGBA_ASTC_10X10_KHR:37819,COMPRESSED_RGBA_ASTC_12X10_KHR:37820,COMPRESSED_RGBA_ASTC_12X12_KHR:37821,COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR:37840,COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR:37841,COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR:37842,COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR:37843,COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR:37844,COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR:37845,COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR:37846,COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR:37847,COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR:37848,COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR:37849,COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR:37850,COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR:37851,COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR:37852,COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR:37853,COMPRESSED_RED_RGTC1_EXT:36283,COMPRESSED_SIGNED_RED_RGTC1_EXT:36284,COMPRESSED_RED_GREEN_RGTC2_EXT:36285,COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT:36286,COMPRESSED_SRGB_S3TC_DXT1_EXT:35916,COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT:35917,COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT:35918,COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT:35919},P=["","WEBKIT_","MOZ_"],D={WEBGL_compressed_texture_s3tc:"dxt",WEBGL_compressed_texture_s3tc_srgb:"dxt-srgb",WEBGL_compressed_texture_etc1:"etc1",WEBGL_compressed_texture_etc:"etc2",WEBGL_compressed_texture_pvrtc:"pvrtc",WEBGL_compressed_texture_atc:"atc",WEBGL_compressed_texture_astc:"astc",EXT_texture_compression_rgtc:"rgtc"};let M=null;function u(_){if(!M){_=_||function(){try{return document.createElement("canvas").getContext("webgl")}catch(_){return null}}()||void 0,M=new Set;for(const t of P)for(const e in D)if(_&&_.getExtension(`${t}${e}`)){const _=D[e];M.add(_)}}return M}function G(_,t){const e=new Array(t.mipMapLevels);let r=t.width,E=t.height,S=0;for(let n=0;n<t.mipMapLevels;++n){const a=B(t,r,E,_,n),R=l(_,n,S,a);e[n]={compressed:!0,format:t.internalFormat,data:R,width:r,height:E,levelSize:a},r=Math.max(1,r>>1),E=Math.max(1,E>>1),S+=a}return e}function l(_,t,e,r){return Array.isArray(_)?_[t].levelData:new Uint8Array(_.buffer,_.byteOffset+e,r)}function B(_,t,e,r,E){return Array.isArray(r)?_.sizeFunction(r[E]):_.sizeFunction(t,e)}const O={131:T.COMPRESSED_RGB_S3TC_DXT1_EXT,132:T.COMPRESSED_SRGB_S3TC_DXT1_EXT,133:T.COMPRESSED_RGBA_S3TC_DXT1_EXT,134:T.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,135:T.COMPRESSED_RGBA_S3TC_DXT3_EXT,136:T.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,137:T.COMPRESSED_RGBA_S3TC_DXT5_EXT,138:T.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,139:T.COMPRESSED_RED_RGTC1_EXT,140:T.COMPRESSED_SIGNED_RED_RGTC1_EXT,141:T.COMPRESSED_RED_GREEN_RGTC2_EXT,142:T.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT,147:T.COMPRESSED_RGB8_ETC2,148:T.COMPRESSED_SRGB8_ETC2,149:T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,150:T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,151:T.COMPRESSED_RGBA8_ETC2_EAC,152:T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,153:T.COMPRESSED_R11_EAC,154:T.COMPRESSED_SIGNED_R11_EAC,155:T.COMPRESSED_RG11_EAC,156:T.COMPRESSED_SIGNED_RG11_EAC,157:T.COMPRESSED_RGBA_ASTC_4x4_KHR,158:T.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,159:T.COMPRESSED_RGBA_ASTC_5x4_KHR,160:T.COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR,161:T.COMPRESSED_RGBA_ASTC_5x5_KHR,162:T.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,163:T.COMPRESSED_RGBA_ASTC_6x5_KHR,164:T.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,165:T.COMPRESSED_RGBA_ASTC_6x6_KHR,166:T.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,167:T.COMPRESSED_RGBA_ASTC_8x5_KHR,168:T.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,169:T.COMPRESSED_RGBA_ASTC_8x6_KHR,170:T.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,171:T.COMPRESSED_RGBA_ASTC_8x8_KHR,172:T.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,173:T.COMPRESSED_RGBA_ASTC_10x5_KHR,174:T.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,175:T.COMPRESSED_RGBA_ASTC_10x6_KHR,176:T.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,177:T.COMPRESSED_RGBA_ASTC_10x8_KHR,178:T.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,179:T.COMPRESSED_RGBA_ASTC_10x10_KHR,180:T.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,181:T.COMPRESSED_RGBA_ASTC_12x10_KHR,182:T.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,183:T.COMPRESSED_RGBA_ASTC_12x12_KHR,184:T.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR,1000054e3:T.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,1000054001:T.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,1000066e3:T.COMPRESSED_RGBA_ASTC_4x4_KHR,1000066001:T.COMPRESSED_RGBA_ASTC_5x4_KHR,1000066002:T.COMPRESSED_RGBA_ASTC_5x5_KHR,1000066003:T.COMPRESSED_RGBA_ASTC_6x5_KHR,1000066004:T.COMPRESSED_RGBA_ASTC_6x6_KHR,1000066005:T.COMPRESSED_RGBA_ASTC_8x5_KHR,1000066006:T.COMPRESSED_RGBA_ASTC_8x6_KHR,1000066007:T.COMPRESSED_RGBA_ASTC_8x8_KHR,1000066008:T.COMPRESSED_RGBA_ASTC_10x5_KHR,1000066009:T.COMPRESSED_RGBA_ASTC_10x6_KHR,1000066010:T.COMPRESSED_RGBA_ASTC_10x8_KHR,1000066011:T.COMPRESSED_RGBA_ASTC_10x10_KHR,1000066012:T.COMPRESSED_RGBA_ASTC_12x10_KHR,1000066013:T.COMPRESSED_RGBA_ASTC_12x12_KHR};const H=[171,75,84,88,32,50,48,187,13,10,26,10];function m(_){const t=new Uint8Array(_);return!(t.byteLength<H.length||t[0]!==H[0]||t[1]!==H[1]||t[2]!==H[2]||t[3]!==H[3]||t[4]!==H[4]||t[5]!==H[5]||t[6]!==H[6]||t[7]!==H[7]||t[8]!==H[8]||t[9]!==H[9]||t[10]!==H[10]||t[11]!==H[11])}function f(_){const t=new Uint8Array(_),e=n(t),r=Math.max(1,e.levels.length),E=e.pixelWidth,S=e.pixelHeight,a=(R=e.vkFormat,O[R]);var R;return G(e.levels,{mipMapLevels:r,width:E,height:S,sizeFunction:_=>_.uncompressedByteLength,internalFormat:a})}const d={etc1:{basisFormat:0,compressed:!0,format:T.COMPRESSED_RGB_ETC1_WEBGL},etc2:{basisFormat:1,compressed:!0},bc1:{basisFormat:2,compressed:!0,format:T.COMPRESSED_RGB_S3TC_DXT1_EXT},bc3:{basisFormat:3,compressed:!0,format:T.COMPRESSED_RGBA_S3TC_DXT5_EXT},bc4:{basisFormat:4,compressed:!0},bc5:{basisFormat:5,compressed:!0},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0},"bc7-m5":{basisFormat:7,compressed:!0},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0,format:T.COMPRESSED_RGB_PVRTC_4BPPV1_IMG},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0,format:T.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG},"astc-4x4":{basisFormat:10,compressed:!0,format:T.COMPRESSED_RGBA_ASTC_4X4_KHR},"atc-rgb":{basisFormat:11,compressed:!0},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0},rgba32:{basisFormat:13,compressed:!1},rgb565:{basisFormat:14,compressed:!1},bgr565:{basisFormat:15,compressed:!1},rgba4444:{basisFormat:16,compressed:!1}};async function p(_,t){if("auto"===t.basis.containerFormat){if(m(_)){return x((await c(t)).KTX2File,_,t)}const{BasisFile:e}=await C(t);return X(e,_,t)}if("encoder"===t.basis.module){const e=await c(t);return"ktx2"===t.basis.containerFormat?x(e.KTX2File,_,t):X(e.BasisFile,_,t)}{const{BasisFile:e}=await C(t);return X(e,_,t)}}function X(_,t,e){const r=new _(new Uint8Array(t));try{if(!r.startTranscoding())throw new Error("Failed to start basis transcoding");const _=r.getNumImages(),t=[];for(let E=0;E<_;E++){const _=r.getNumLevels(E),S=[];for(let t=0;t<_;t++)S.push(h(r,E,t,e));t.push(S)}return t}finally{r.close(),r.delete()}}function h(_,t,e,r){const E=_.getImageWidth(t,e),S=_.getImageHeight(t,e),n=_.getHasAlpha(),{compressed:a,format:R,basisFormat:s}=L(r,n),o=_.getImageTranscodedSizeInBytes(t,e,s),i=new Uint8Array(o);if(!_.transcodeImage(i,t,e,s,0,0))throw new Error("failed to start Basis transcoding");return{width:E,height:S,data:i,compressed:a,format:R,hasAlpha:n}}function x(_,t,e){const r=new _(new Uint8Array(t));try{if(!r.startTranscoding())throw new Error("failed to start KTX2 transcoding");const _=r.getLevels(),t=[];for(let E=0;E<_;E++){t.push(w(r,E,e));break}return[t]}finally{r.close(),r.delete()}}function w(_,t,e){const{alphaFlag:r,height:E,width:S}=_.getImageLevelInfo(t,0,0),{compressed:n,format:a,basisFormat:R}=L(e,r),s=_.getImageTranscodedSizeInBytes(t,0,0,R),o=new Uint8Array(s);if(!_.transcodeImage(o,t,0,0,R,0,-1,-1))throw new Error("Failed to transcode KTX2 image");return{width:S,height:E,data:o,compressed:n,levelSize:s,hasAlpha:r,format:a}}function L(_,t){let e=_&&_.basis&&_.basis.format;return"auto"===e&&(e=y()),"object"==typeof e&&(e=t?e.alpha:e.noAlpha),e=e.toLowerCase(),d[e]}function y(){const _=u();return _.has("astc")?"astc-4x4":_.has("dxt")?{alpha:"bc3",noAlpha:"bc1"}:_.has("pvrtc")?{alpha:"pvrtc1-4-rgba",noAlpha:"pvrtc1-4-rgb"}:_.has("etc1")?"etc1":_.has("etc2")?"etc2":"rgb565"}const I={dataType:null,batchType:null,name:"Basis",id:"basis",module:"textures",version:s,worker:!0,extensions:["basis","ktx2"],mimeTypes:["application/octet-stream","image/ktx2"],tests:["sB"],binary:!0,options:{basis:{format:"auto",libraryPath:"libs/",containerFormat:"auto",module:"transcoder"}}},K={...I,parse:p},g={MAGIC_NUMBER:542327876,HEADER_LENGTH:31,MAGIC_NUMBER_INDEX:0,HEADER_SIZE_INDEX:1,HEADER_FLAGS_INDEX:2,HEADER_HEIGHT_INDEX:3,HEADER_WIDTH_INDEX:4,MIPMAPCOUNT_INDEX:7,HEADER_PF_FLAGS_INDEX:20,HEADER_PF_FOURCC_INDEX:21,DDSD_MIPMAPCOUNT:131072,DDPF_FOURCC:4},b={DXT1:T.COMPRESSED_RGB_S3TC_DXT1_EXT,DXT3:T.COMPRESSED_RGBA_S3TC_DXT3_EXT,DXT5:T.COMPRESSED_RGBA_S3TC_DXT5_EXT,"ATC ":T.COMPRESSED_RGB_ATC_WEBGL,ATCA:T.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL,ATCI:T.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL},N={DXT1:F,DXT3:v,DXT5:v,"ATC ":F,ATCA:v,ATCI:v};function U(_){const t=new Int32Array(_,0,g.HEADER_LENGTH),r=t[g.HEADER_PF_FOURCC_INDEX];e(Boolean(t[g.HEADER_PF_FLAGS_INDEX]&g.DDPF_FOURCC),"DDS: Unsupported format, must contain a FourCC code");const E=(S=r,String.fromCharCode(255&S,S>>8&255,S>>16&255,S>>24&255));var S;const n=b[E],a=N[E];e(n&&a,`DDS: Unknown pixel format ${r}`);let R=1;t[g.HEADER_FLAGS_INDEX]&g.DDSD_MIPMAPCOUNT&&(R=Math.max(1,t[g.MIPMAPCOUNT_INDEX]));const s=t[g.HEADER_WIDTH_INDEX],o=t[g.HEADER_HEIGHT_INDEX],i=t[g.HEADER_SIZE_INDEX]+4;return G(new Uint8Array(_,i),{mipMapLevels:R,width:s,height:o,sizeFunction:a,internalFormat:n})}function F(_,t){return(_+3>>2)*(t+3>>2)*8}function v(_,t){return(_+3>>2)*(t+3>>2)*16}const W={MAGIC_NUMBER:55727696,MAGIC_NUMBER_EXTRA:1347834371,HEADER_LENGTH:13,HEADER_SIZE:52,MAGIC_NUMBER_INDEX:0,PIXEL_FORMAT_INDEX:2,COLOUR_SPACE_INDEX:4,HEIGHT_INDEX:6,WIDTH_INDEX:7,MIPMAPCOUNT_INDEX:11,METADATA_SIZE_INDEX:12},k={0:[T.COMPRESSED_RGB_PVRTC_2BPPV1_IMG],1:[T.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG],2:[T.COMPRESSED_RGB_PVRTC_4BPPV1_IMG],3:[T.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG],6:[T.COMPRESSED_RGB_ETC1_WEBGL],7:[T.COMPRESSED_RGB_S3TC_DXT1_EXT],9:[T.COMPRESSED_RGBA_S3TC_DXT3_EXT],11:[T.COMPRESSED_RGBA_S3TC_DXT5_EXT],22:[T.COMPRESSED_RGB8_ETC2],23:[T.COMPRESSED_RGBA8_ETC2_EAC],24:[T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2],25:[T.COMPRESSED_R11_EAC],26:[T.COMPRESSED_RG11_EAC],27:[T.COMPRESSED_RGBA_ASTC_4X4_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR],28:[T.COMPRESSED_RGBA_ASTC_5X4_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR],29:[T.COMPRESSED_RGBA_ASTC_5X5_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR],30:[T.COMPRESSED_RGBA_ASTC_6X5_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR],31:[T.COMPRESSED_RGBA_ASTC_6X6_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR],32:[T.COMPRESSED_RGBA_ASTC_8X5_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR],33:[T.COMPRESSED_RGBA_ASTC_8X6_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR],34:[T.COMPRESSED_RGBA_ASTC_8X8_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR],35:[T.COMPRESSED_RGBA_ASTC_10X5_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR],36:[T.COMPRESSED_RGBA_ASTC_10X6_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR],37:[T.COMPRESSED_RGBA_ASTC_10X8_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR],38:[T.COMPRESSED_RGBA_ASTC_10X10_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR],39:[T.COMPRESSED_RGBA_ASTC_12X10_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR],40:[T.COMPRESSED_RGBA_ASTC_12X12_KHR,T.COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR]},V={0:z,1:z,2:$,3:$,6:Z,7:Z,9:q,11:q,22:Z,23:q,24:Z,25:Z,26:q,27:q,28:function(_,t){return Math.floor((_+4)/5)*Math.floor((t+3)/4)*16},29:function(_,t){return Math.floor((_+4)/5)*Math.floor((t+4)/5)*16},30:function(_,t){return Math.floor((_+5)/6)*Math.floor((t+4)/5)*16},31:function(_,t){return Math.floor((_+5)/6)*Math.floor((t+5)/6)*16},32:function(_,t){return Math.floor((_+7)/8)*Math.floor((t+4)/5)*16},33:function(_,t){return Math.floor((_+7)/8)*Math.floor((t+5)/6)*16},34:function(_,t){return Math.floor((_+7)/8)*Math.floor((t+7)/8)*16},35:function(_,t){return Math.floor((_+9)/10)*Math.floor((t+4)/5)*16},36:function(_,t){return Math.floor((_+9)/10)*Math.floor((t+5)/6)*16},37:function(_,t){return Math.floor((_+9)/10)*Math.floor((t+7)/8)*16},38:function(_,t){return Math.floor((_+9)/10)*Math.floor((t+9)/10)*16},39:function(_,t){return Math.floor((_+11)/12)*Math.floor((t+9)/10)*16},40:function(_,t){return Math.floor((_+11)/12)*Math.floor((t+11)/12)*16}};function z(_,t){return(_=Math.max(_,16))*(t=Math.max(t,8))/4}function $(_,t){return(_=Math.max(_,8))*(t=Math.max(t,8))/2}function Z(_,t){return Math.floor((_+3)/4)*Math.floor((t+3)/4)*8}function q(_,t){return Math.floor((_+3)/4)*Math.floor((t+3)/4)*16}function j(_){if(m(_))return f(_);if(function(_){return new Uint32Array(_,0,g.HEADER_LENGTH)[g.MAGIC_NUMBER_INDEX]===g.MAGIC_NUMBER}(_))return U(_);if(function(_){const t=new Uint32Array(_,0,W.HEADER_LENGTH)[W.MAGIC_NUMBER_INDEX];return t===W.MAGIC_NUMBER||t===W.MAGIC_NUMBER_EXTRA}(_))return function(_){const t=new Uint32Array(_,0,W.HEADER_LENGTH),e=t[W.PIXEL_FORMAT_INDEX],r=t[W.COLOUR_SPACE_INDEX],E=k[e]||[],S=E.length>1&&r?E[1]:E[0],n=V[e],a=t[W.MIPMAPCOUNT_INDEX],R=t[W.WIDTH_INDEX],s=t[W.HEIGHT_INDEX],o=W.HEADER_SIZE+t[W.METADATA_SIZE_INDEX];return G(new Uint8Array(_,o),{mipMapLevels:a,width:R,height:s,sizeFunction:n,internalFormat:S})}(_);throw new Error("Texture container format not recognized")}const Y={dataType:null,batchType:null,name:"Texture Containers",id:"compressed-texture",module:"textures",version:s,worker:!0,extensions:["ktx","ktx2","dds","pvr"],mimeTypes:["image/ktx2","image/ktx","image/vnd-ms.dds","image/x-dds","application/octet-stream"],binary:!0,options:{"compressed-texture":{libraryPath:"libs/",useBasis:!1}}},J={...Y,parse:async(_,t)=>{if(t?.["compressed-texture"]?.useBasis){t.basis={format:{alpha:"BC3",noAlpha:"BC1"},...t.basis,containerFormat:"ktx2",module:"encoder"};return(await p(_,t))[0]}return j(_)}},Q={dataType:null,batchType:null,id:"crunch",name:"Crunch",module:"textures",version:s,worker:!0,extensions:["crn"],mimeTypes:["image/crn","image/x-crn","application/octet-stream"],binary:!0,options:{crunch:{libraryPath:"libs/"}}},__=new Uint32Array([305419896]),t_=!(18===new Uint8Array(__.buffer,__.byteOffset,__.byteLength)[0]),e_={u1:Uint8Array,i1:Int8Array,u2:Uint16Array,i2:Int16Array,u4:Uint32Array,i4:Int32Array,f4:Float32Array,f8:Float64Array};function r_(_,t){const e=new DataView(_),{header:r,headerEndOffset:E}=function(_){const t=_.getUint8(6);let e,r=8;t>=2?(e=_.getUint32(r,!0),r+=4):(e=_.getUint16(r,!0),r+=2);const E=new TextDecoder(t<=2?"latin1":"utf-8"),S=new Uint8Array(_.buffer,r,e),n=E.decode(S);r+=e;const a=JSON.parse(n.replace(/'/g,'"').replace("False","false").replace("(","[").replace(/,*\),*/g,"]"));return{header:a,headerEndOffset:r}}(e),S=r.descr,n=e_[S.slice(1,3)];if(!n)throw new Error(`Unimplemented type ${S}`);const a=r.shape?.reduce(((_,t)=>_*t)),R=a*n.BYTES_PER_ELEMENT;if(_.byteLength<E+R)throw new Error("Buffer overflow");const s=new n(_.slice(E,E+R));if(">"===S[0]&&t_||"<"===S[0]&&!t_)throw new Error("Incorrect endianness");return{data:s,header:r}}const E_={dataType:null,batchType:null,name:"NPY",id:"npy",module:"textures",version:s,worker:!0,extensions:["npy"],mimeTypes:[],tests:[new Uint8Array([147,78,85,77,80,89]).buffer],options:{npy:{}}},S_={...E_,parseSync:r_,parse:async(_,t)=>r_(_)},n_={DECODER:"crunch.js"};const a_={name:"DDS Texture Container",id:"dds",module:"textures",version:s,extensions:["dds"],options:{texture:{format:"auto",compression:"auto",quality:"auto",mipmap:!1,flipY:!1,toolFlags:""}},encodeURLtoURL:async function(_,t,e){const r=["texture-compressor","--type","s3tc","--compression","DXT1","--quality","normal","--input",_,"--output",t],E=new S;return await E.start({command:"npx",arguments:r,spawn:e}),t},encode(){throw new Error("Not implemented")}};const R_={name:"Basis Universal Supercompressed GPU Texture",id:"ktx2-basis-writer",module:"textures",version:s,extensions:["ktx2"],options:{"ktx2-basis-writer":{useSRGB:!1,qualityLevel:10,encodeUASTC:!1,mipmaps:!1}},encode:async function(_,t={}){const{useSRGB:e=!1,qualityLevel:r=10,encodeUASTC:E=!1,mipmaps:S=!1}=t?.["ktx2-basis-writer"]||{},{BasisEncoder:n}=await c(t),a=new n;try{const t=new Uint8Array(_.width*_.height*4);a.setCreateKTX2File(!0),a.setKTX2UASTCSupercompression(!0),a.setKTX2SRGBTransferFunc(!0),a.setSliceSourceImage(0,_.data,_.width,_.height,!1),a.setPerceptual(e),a.setMipSRGB(e),a.setQualityLevel(r),a.setUASTC(E),a.setMipGen(S);const n=a.encode(t);return t.subarray(0,n).buffer}catch(_){throw console.error("Basis Universal Supercompressed GPU Texture encoder Error: ",_),_}finally{a.delete()}}};function s_(_,t,e){let E="function"==typeof _?_({...t,...e}):_;const S=t.baseUrl;return S&&(E="/"===S[S.length-1]?`${S}${E}`:`${S}/${E}`),r(E)}const o_=_=>_&&"object"==typeof _;async function i_(_,t,e){if(Array.isArray(_))return await async function(_,t,e={}){const r=_.map((_=>i_(_,t,e)));return await Promise.all(r)}(_,t,e);if(o_(_))return await async function(_,t,e){const r=[],E={};for(const S in _){const n=i_(_[S],t,e).then((_=>{E[S]=_}));r.push(n)}return await Promise.all(r),E}(_,t,e);const r=_;return await t(r,e)}async function A_(_,t,e){return await async function(_,t,e={}){return await i_(_,t,e)}(_,(_=>C_(_,t,e)))}async function C_(_,t,e){const r=await fetch(_,e.fetch),E=await r.arrayBuffer();return await t(E,e)}async function c_(_,t={}){const e=await T_(_,t);return await A_(e,a.parse,t)}async function T_(_,t,r={}){const E=t&&t.image&&t.image.mipLevels||0;return 0!==E?await async function(_,t,r,E){const S=[];if("auto"===t){const e=s_(_,r,{...E,lod:0}),s=await C_(e,a.parse,r),{width:o,height:i}=R(s);n={width:o,height:i},t=1+Math.floor(Math.log2(Math.max(n.width,n.height))),S.push(e)}var n;e(t>0);for(let e=S.length;e<t;++e){const t=s_(_,r,{...E,lod:e});S.push(t)}return S}(_,E,t,r):s_(_,t,r)}async function P_(_,t,e={}){const r=await async function(_,t,e={}){const r=[];for(let E=0;E<_;E++){const _=T_(t,e,{index:E});r.push(_)}return await Promise.all(r)}(_,t,e);return await A_(r,a.parse,e)}const D_=[{face:34069,direction:"right",axis:"x",sign:"positive"},{face:34070,direction:"left",axis:"x",sign:"negative"},{face:34071,direction:"top",axis:"y",sign:"positive"},{face:34072,direction:"bottom",axis:"y",sign:"negative"},{face:34073,direction:"front",axis:"z",sign:"positive"},{face:34074,direction:"back",axis:"z",sign:"negative"}];async function M_(_,t={}){const e=await async function(_,t){const e={},r=[];let E=0;for(let S=0;S<D_.length;++S){const S=D_[E],n=T_(_,t,{...S,index:E++}).then((_=>{e[S.face]=_}));r.push(n)}return await Promise.all(r),e}(_,t);return await A_(e,a.parse,t)}const u_={name:"Basis Universal Supercompressed GPU Texture",id:"ktx2-basis-writer",module:"textures",version:s,extensions:["ktx2"],worker:!0,options:{useSRGB:!1,qualityLevel:10,encodeUASTC:!1,mipmaps:!1}};export{o as BASIS_EXTERNAL_LIBRARIES,K as BasisLoader,I as BasisWorkerLoader,n_ as CRUNCH_EXTERNAL_LIBRARIES,J as CompressedTextureLoader,Y as CompressedTextureWorkerLoader,a_ as CompressedTextureWriter,Q as CrunchLoader,Q as CrunchWorkerLoader,T as GL_EXTENSIONS_CONSTANTS,R_ as KTX2BasisWriter,u_ as KTX2BasisWriterWorker,S_ as NPYLoader,E_ as NPYWorkerLoader,u as getSupportedGPUTextureFormats,c_ as loadImageTexture,P_ as loadImageTextureArray,M_ as loadImageTextureCube,y as selectSupportedBasisFormat};export default null;
