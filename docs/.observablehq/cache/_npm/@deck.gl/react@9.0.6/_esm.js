/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@deck.gl/react@9.0.6/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import*as e from"../../react@18.2.0/_esm.js";import{useLayoutEffect as t,useEffect as n,cloneElement as r,createElement as i,useState as o,useRef as c,useMemo as s,useImperativeHandle as a}from"../../react@18.2.0/_esm.js";import{View as d,Layer as l,Deck as p}from"../core@9.0.6/_esm.js";const u="undefined"!=typeof window?t:n;function f(e,t){for(;e;){if(e===t)return!0;e=Object.getPrototypeOf(e)}return!1}const h={position:"absolute",zIndex:-1};function w(e,t){if("function"==typeof e)return e(t);if(Array.isArray(e))return e.map((e=>w(e,t)));if(y(e)){if(n=e,n.props?.mapStyle)return t.style=h,r(e,t);if(function(e){const t=e.type;return t&&t.deckGLViewProps}(e))return r(e,t)}var n;return e}function y(e){return e&&"object"==typeof e&&"type"in e||!1}function v(t){if("function"==typeof t)return i(d,{},t);if(Array.isArray(t))return t.map(v);if(y(t)){if(t.type===e.Fragment)return v(t.props.children);if(f(t.type,d))return t}return t}const g={mixBlendMode:null};function k(e){e.redrawReason&&(e.deck._drawLayers(e.redrawReason),e.redrawReason=null)}const S=e.forwardRef((function(t,r){const[h,S]=o(0),m=c({control:null,version:h,forceUpdate:()=>S((e=>e+1))}).current,R=c(null),b=c(null),V=s((()=>function({children:t,layers:n=[],views:r=null}){const i=[],o=[],c={};return e.Children.forEach(v(t),(e=>{if(y(e)){const t=e.type;if(f(t,l)){const n=function(e,t){const n={},r=e.defaultProps||{};for(const e in t)r[e]!==t[e]&&(n[e]=t[e]);return new e(n)}(t,e.props);o.push(n)}else i.push(e);if(f(t,d)&&t!==d&&e.props.id){const n=new t(e.props);c[n.id]=n}}else e&&i.push(e)})),Object.keys(c).length>0&&(Array.isArray(r)?r.forEach((e=>{c[e.id]=e})):r&&(c[r.id]=r),r=Object.values(c)),{layers:n=o.length>0?[...o,...n]:n,children:i,views:r}}(t)),[t.layers,t.views,t.children]);let j=!0;const O=e=>j&&t.viewState?(m.viewStateUpdateRequested=e,null):(m.viewStateUpdateRequested=null,t.onViewStateChange?.(e)),x=e=>{j?m.interactionStateUpdateRequested=e:(m.interactionStateUpdateRequested=null,t.onInteractionStateChange?.(e))},C=s((()=>{const e={...t,style:null,width:"100%",height:"100%",parent:R.current,canvas:b.current,layers:V.layers,views:V.views,onViewStateChange:O,onInteractionStateChange:x};return delete e._customRender,m.deck&&m.deck.setProps(e),e}),[t]);n((()=>{const e=t.Deck||p;return m.deck=function(e,t,n){const r=new t({...n,_customRender:t=>{e.redrawReason=t;const n=r.getViewports();e.lastRenderedViewports!==n?e.forceUpdate():k(e)}});return r}(m,e,{...C,parent:R.current,canvas:b.current}),()=>m.deck?.finalize()}),[]),u((()=>{k(m);const{viewStateUpdateRequested:e,interactionStateUpdateRequested:t}=m;e&&O(e),t&&x(t)})),a(r,(()=>function(e){return{get deck(){return e.deck},pickObject:t=>e.deck.pickObject(t),pickMultipleObjects:t=>e.deck.pickMultipleObjects(t),pickObjects:t=>e.deck.pickObjects(t)}}(m)),[]);const U=m.deck&&m.deck.isInitialized?m.deck.getViewports():void 0,{ContextProvider:P,width:q="100%",height:A="100%",id:I,style:M}=t,{containerStyle:z,canvasStyle:_}=s((()=>function({width:e,height:t,style:n}){const r={position:"absolute",zIndex:0,left:0,top:0,width:e,height:t},i={left:0,top:0};if(n)for(const e in n)e in g?i[e]=n[e]:r[e]=n[e];return{containerStyle:r,canvasStyle:i}}({width:q,height:A,style:M})),[q,A,M]);if(!m.viewStateUpdateRequested&&m.lastRenderedViewports===U||m.version!==h){m.lastRenderedViewports=U,m.version=h;const e=function({children:e,deck:t,ContextProvider:n}){const{viewManager:r}=t||{};if(!r||!r.views.length)return[];const o={},c=r.views[0].id;for(const t of e){let e=c,n=t;y(t)&&f(t.type,d)&&(e=t.props.id||c,n=t.props.children);const i=r.getViewport(e),s=r.getViewState(e);if(i){s.padding=i.padding;const{x:t,y:r,width:c,height:a}=i;n=w(n,{x:t,y:r,width:c,height:a,viewport:i,viewState:s}),o[e]||(o[e]={viewport:i,children:[]}),o[e].children.push(n)}}return Object.keys(o).map((e=>{const{viewport:r,children:c}=o[e],{x:s,y:a,width:d,height:l}=r,p=`view-${e}`,u=i("div",{key:p,id:p,style:{position:"absolute",left:s,top:a,width:d,height:l}},...c);if(n){const o={viewport:r,container:t.canvas.offsetParent,eventManager:t.eventManager,onViewStateChange:n=>{n.viewId=e,t._onViewStateChange(n)}};return i(n,{key:p,value:o},u)}return u}))}({children:V.children,deck:m.deck,ContextProvider:P}),t=i("canvas",{key:"canvas",id:I||"deckgl-overlay",ref:b,style:_});m.control=i("div",{id:`${I||"deckgl"}-wrapper`,ref:R,style:z},[t,e])}return j=!1,m.control}));export{S as DeckGL,S as default};