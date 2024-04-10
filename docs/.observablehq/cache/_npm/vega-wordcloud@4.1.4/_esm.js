/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/vega-wordcloud@4.1.4/build/vega-wordcloud.module.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{canvas as t}from"../vega-canvas@1.2.7/_esm.js";import{Transform as e}from"../vega-dataflow@5.7.5/_esm.js";import{inherits as n,error as r,isFunction as a,constant as o,extent as i}from"../vega-util@1.17.2/_esm.js";import{scale as f}from"../vega-scale@7.3.1/_esm.js";import{random as s}from"../vega-statistics@1.9.0/_esm.js";var u=Math.PI/180,l=64,y=2048;function x(){var e,n,r,a,o,i,f,s=[256,256],u=c,x=[],v=Math.random,z={};function M(t,e,n){for(var r,a,o,i,f,l=e.x,y=e.y,x=Math.sqrt(s[0]*s[0]+s[1]*s[1]),h=u(s),d=v()<.5?1:-1,c=-d;(r=h(c+=d))&&(a=~~r[0],o=~~r[1],!(Math.min(Math.abs(a),Math.abs(o))>=x));)if(e.x=l+a,e.y=y+o,!(e.x+e.x0<0||e.y+e.y0<0||e.x+e.x1>s[0]||e.y+e.y1>s[1]||n&&m(e,t,s[0])||n&&(f=n,!((i=e).x+i.x1>f[0].x&&i.x+i.x0<f[1].x&&i.y+i.y1>f[0].y&&i.y+i.y0<f[1].y)))){for(var g,p=e.sprite,z=e.width>>5,M=s[0]>>5,b=e.x-(z<<4),S=127&b,w=32-S,W=e.y1-e.y0,T=(e.y+e.y0)*M+(b>>5),k=0;k<W;k++){g=0;for(var D=0;D<=z;D++)t[T+D]|=g<<w|(D<z?(g=p[k*z+D])>>>S:0);T+=M}return e.sprite=null,!0}return!1}return z.layout=function(){for(var u=function(t){t.width=t.height=1;var e=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=(l<<5)/e,t.height=y/e;var n=t.getContext("2d");return n.fillStyle=n.strokeStyle="red",n.textAlign="center",{context:n,ratio:e}}(t()),m=function(t){var e=[],n=-1;for(;++n<t;)e[n]=0;return e}((s[0]>>5)*s[1]),c=null,g=x.length,p=-1,z=[],b=x.map((t=>({text:e(t),font:n(t),style:a(t),weight:o(t),rotate:i(t),size:~~(r(t)+1e-14),padding:f(t),xoff:0,yoff:0,x1:0,y1:0,x0:0,y0:0,hasText:!1,sprite:null,datum:t}))).sort(((t,e)=>e.size-t.size));++p<g;){var S=b[p];S.x=s[0]*(v()+.5)>>1,S.y=s[1]*(v()+.5)>>1,h(u,S,b,p),S.hasText&&M(m,S,c)&&(z.push(S),c?d(c,S):c=[{x:S.x+S.x0,y:S.y+S.y0},{x:S.x+S.x1,y:S.y+S.y1}],S.x-=s[0]>>1,S.y-=s[1]>>1)}return z},z.words=function(t){return arguments.length?(x=t,z):x},z.size=function(t){return arguments.length?(s=[+t[0],+t[1]],z):s},z.font=function(t){return arguments.length?(n=g(t),z):n},z.fontStyle=function(t){return arguments.length?(a=g(t),z):a},z.fontWeight=function(t){return arguments.length?(o=g(t),z):o},z.rotate=function(t){return arguments.length?(i=g(t),z):i},z.text=function(t){return arguments.length?(e=g(t),z):e},z.spiral=function(t){return arguments.length?(u=p[t]||t,z):u},z.fontSize=function(t){return arguments.length?(r=g(t),z):r},z.padding=function(t){return arguments.length?(f=g(t),z):f},z.random=function(t){return arguments.length?(v=t,z):v},z}function h(t,e,n,r){if(!e.sprite){var a=t.context,o=t.ratio;a.clearRect(0,0,(l<<5)/o,y/o);var i,f,s,x,h,m=0,d=0,c=0,g=n.length;for(--r;++r<g;){if(e=n[r],a.save(),a.font=e.style+" "+e.weight+" "+~~((e.size+1)/o)+"px "+e.font,i=a.measureText(e.text+"m").width*o,s=e.size<<1,e.rotate){var p=Math.sin(e.rotate*u),v=Math.cos(e.rotate*u),z=i*v,M=i*p,b=s*v,S=s*p;i=Math.max(Math.abs(z+S),Math.abs(z-S))+31>>5<<5,s=~~Math.max(Math.abs(M+b),Math.abs(M-b))}else i=i+31>>5<<5;if(s>c&&(c=s),m+i>=l<<5&&(m=0,d+=c,c=0),d+s>=y)break;a.translate((m+(i>>1))/o,(d+(s>>1))/o),e.rotate&&a.rotate(e.rotate*u),a.fillText(e.text,0,0),e.padding&&(a.lineWidth=2*e.padding,a.strokeText(e.text,0,0)),a.restore(),e.width=i,e.height=s,e.xoff=m,e.yoff=d,e.x1=i>>1,e.y1=s>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,m+=i}for(var w=a.getImageData(0,0,(l<<5)/o,y/o).data,W=[];--r>=0;)if((e=n[r]).hasText){for(f=(i=e.width)>>5,s=e.y1-e.y0,x=0;x<s*f;x++)W[x]=0;if(null==(m=e.xoff))return;d=e.yoff;var T=0,k=-1;for(h=0;h<s;h++){for(x=0;x<i;x++){var D=f*h+(x>>5),R=w[(d+h)*(l<<5)+(m+x)<<2]?1<<31-x%32:0;W[D]|=R,T|=R}T?k=h:(e.y0++,s--,h--,d++)}e.y1=e.y0+k,e.sprite=W.slice(0,(e.y1-e.y0)*f)}}}function m(t,e,n){n>>=5;for(var r,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),f=127&i,s=32-f,u=t.y1-t.y0,l=(t.y+t.y0)*n+(i>>5),y=0;y<u;y++){r=0;for(var x=0;x<=o;x++)if((r<<s|(x<o?(r=a[y*o+x])>>>f:0))&e[l+x])return!0;l+=n}return!1}function d(t,e){var n=t[0],r=t[1];e.x+e.x0<n.x&&(n.x=e.x+e.x0),e.y+e.y0<n.y&&(n.y=e.y+e.y0),e.x+e.x1>r.x&&(r.x=e.x+e.x1),e.y+e.y1>r.y&&(r.y=e.y+e.y1)}function c(t){var e=t[0]/t[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function g(t){return"function"==typeof t?t:function(){return t}}var p={archimedean:c,rectangular:function(t){var e=4*t[0]/t[1],n=0,r=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:n+=e;break;case 1:r+=4;break;case 2:n-=e;break;default:r-=4}return[n,r]}}};const v=["x","y","font","fontSize","fontStyle","fontWeight","angle"],z=["text","font","rotate","fontSize","fontStyle","fontWeight"];function M(t){e.call(this,x(),t)}M.Definition={type:"Wordcloud",metadata:{modifies:!0},params:[{name:"size",type:"number",array:!0,length:2},{name:"font",type:"string",expr:!0,default:"sans-serif"},{name:"fontStyle",type:"string",expr:!0,default:"normal"},{name:"fontWeight",type:"string",expr:!0,default:"normal"},{name:"fontSize",type:"number",expr:!0,default:14},{name:"fontSizeRange",type:"number",array:"nullable",default:[10,50]},{name:"rotate",type:"number",expr:!0,default:0},{name:"text",type:"field"},{name:"spiral",type:"string",values:["archimedean","rectangular"]},{name:"padding",type:"number",expr:!0},{name:"as",type:"string",array:!0,length:7,default:v}]},n(M,e,{transform(t,e){!t.size||t.size[0]&&t.size[1]||r("Wordcloud size dimensions must be non-zero.");const n=t.modified();if(!(n||e.changed(e.ADD_REM)||z.some((function(n){const r=t[n];return a(r)&&e.modified(r.fields)}))))return;const u=e.materialize(e.SOURCE).source,l=this.value,y=t.as||v;let x,h=t.fontSize||14;if(a(h)?x=t.fontSizeRange:h=o(h),x){const t=h,e=f("sqrt")().domain(i(u,t)).range(x);h=n=>e(t(n))}u.forEach((t=>{t[y[0]]=NaN,t[y[1]]=NaN,t[y[3]]=0}));const m=l.words(u).text(t.text).size(t.size||[500,500]).padding(t.padding||1).spiral(t.spiral||"archimedean").rotate(t.rotate||0).font(t.font||"sans-serif").fontStyle(t.fontStyle||"normal").fontWeight(t.fontWeight||"normal").fontSize(h).random(s).layout(),d=l.size(),c=d[0]>>1,g=d[1]>>1,p=m.length;for(let t,e,n=0;n<p;++n)t=m[n],e=t.datum,e[y[0]]=t.x+c,e[y[1]]=t.y+g,e[y[2]]=t.font,e[y[3]]=t.size,e[y[4]]=t.style,e[y[5]]=t.weight,e[y[6]]=t.rotate;return e.reflow(n).modifies(y)}});export{M as wordcloud};export default null;
