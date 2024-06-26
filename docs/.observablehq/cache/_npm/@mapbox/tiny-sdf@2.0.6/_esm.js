/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@mapbox/tiny-sdf@2.0.6/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const t=1e20;class e{constructor({fontSize:t=24,buffer:e=3,radius:i=8,cutoff:a=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:r="normal"}={}){this.buffer=e,this.cutoff=a,this.radius=i;const h=this.size=t+4*e,o=this._createCanvas(h),l=this.ctx=o.getContext("2d",{willReadFrequently:!0});l.font=`${r} ${s} ${t}px ${n}`,l.textBaseline="alphabetic",l.textAlign="left",l.fillStyle="black",this.gridOuter=new Float64Array(h*h),this.gridInner=new Float64Array(h*h),this.f=new Float64Array(h),this.z=new Float64Array(h+1),this.v=new Uint16Array(h)}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(e){const{width:a,actualBoundingBoxAscent:n,actualBoundingBoxDescent:s,actualBoundingBoxLeft:r,actualBoundingBoxRight:h}=this.ctx.measureText(e),o=Math.ceil(n),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(h-r))),f=Math.min(this.size-this.buffer,o+Math.ceil(s)),c=l+2*this.buffer,u=f+2*this.buffer,d=Math.max(c*u,0),g=new Uint8ClampedArray(d),x={data:g,width:c,height:u,glyphWidth:l,glyphHeight:f,glyphTop:o,glyphLeft:0,glyphAdvance:a};if(0===l||0===f)return x;const{ctx:y,buffer:m,gridInner:w,gridOuter:p}=this;y.clearRect(m,m,l,f),y.fillText(e,m,m+o);const M=y.getImageData(m,m,l,f);p.fill(t,0,d),w.fill(0,0,d);for(let e=0;e<f;e++)for(let i=0;i<l;i++){const a=M.data[4*(e*l+i)+3]/255;if(0===a)continue;const n=(e+m)*c+i+m;if(1===a)p[n]=0,w[n]=t;else{const t=.5-a;p[n]=t>0?t*t:0,w[n]=t<0?t*t:0}}i(p,0,0,c,u,c,this.f,this.v,this.z),i(w,m,m,l,f,c,this.f,this.v,this.z);for(let t=0;t<d;t++){const e=Math.sqrt(p[t])-Math.sqrt(w[t]);g[t]=Math.round(255-255*(e/this.radius+this.cutoff))}return x}}function i(t,e,i,n,s,r,h,o,l){for(let f=e;f<e+n;f++)a(t,i*r+f,r,s,h,o,l);for(let f=i;f<i+s;f++)a(t,f*r+e,1,n,h,o,l)}function a(e,i,a,n,s,r,h){r[0]=0,h[0]=-t,h[1]=t,s[0]=e[i];for(let o=1,l=0,f=0;o<n;o++){s[o]=e[i+o*a];const n=o*o;do{const t=r[l];f=(s[o]-s[t]+n-t*t)/(o-t)/2}while(f<=h[l]&&--l>-1);l++,r[l]=o,h[l]=f,h[l+1]=t}for(let t=0,o=0;t<n;t++){for(;h[o+1]<t;)o++;const n=r[o],l=t-n;e[i+t*a]=s[n]+l*l}}export{e as default};
