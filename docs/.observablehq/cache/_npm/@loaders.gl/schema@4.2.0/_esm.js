/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@loaders.gl/schema@4.2.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{getTableLength as t}from"./_esm.js";class e{schema;options;shape;length=0;rows=null;cursor=0;_headers=[];constructor(t,e){if(this.options=e,this.schema=t,!Array.isArray(t)){this._headers=[];for(const e in t)this._headers[t[e].index]=t[e].name}}rowCount(){return this.length}addArrayRow(t,e){Number.isFinite(e)&&(this.cursor=e),this.shape="array-row-table",this.rows=this.rows||new Array(100),this.rows[this.length]=t,this.length++}addObjectRow(t,e){Number.isFinite(e)&&(this.cursor=e),this.shape="object-row-table",this.rows=this.rows||new Array(100),this.rows[this.length]=t,this.length++}getBatch(){let t=this.rows;if(!t)return null;t=t.slice(0,this.length),this.rows=null;return{shape:this.shape||"array-row-table",batchType:"data",data:t,length:this.length,schema:this.schema,cursor:this.cursor}}}function r(t,e){if(!t)throw new Error("null row");const r={};if(e)for(let s=0;s<e.length;s++)r[e[s]]=t[s];else for(let e=0;e<t.length;e++){r[`column-${e}`]=t[e]}return r}function s(t,e){if(!t)throw new Error("null row");if(e){const r=new Array(e.length);for(let s=0;s<e.length;s++)r[s]=t[e[s]];return r}return Object.values(t)}class a{schema;options;length=0;objectRows=null;arrayRows=null;cursor=0;_headers=null;constructor(t,e){if(this.options=e,this.schema=t,t){this._headers=[];for(const e in t)this._headers[t[e].index]=t[e].name}}rowCount(){return this.length}addArrayRow(t,e){switch(Number.isFinite(e)&&(this.cursor=e),this._headers||=function(t){const e=[];for(let r=0;r<t.length;r++){const t=`column-${r}`;e.push(t)}return e}(t),this.options.shape){case"object-row-table":const s=r(t,this._headers);this.addObjectRow(s,e);break;case"array-row-table":this.arrayRows=this.arrayRows||new Array(100),this.arrayRows[this.length]=t,this.length++}}addObjectRow(t,e){switch(Number.isFinite(e)&&(this.cursor=e),this._headers||=function(t){return Object.keys(t)}(t),this.options.shape){case"array-row-table":const r=s(t,this._headers);this.addArrayRow(r,e);break;case"object-row-table":this.objectRows=this.objectRows||new Array(100),this.objectRows[this.length]=t,this.length++}}getBatch(){let t=this.arrayRows||this.objectRows;return t?(t=t.slice(0,this.length),this.arrayRows=null,this.objectRows=null,{shape:this.options.shape,batchType:"data",data:t,length:this.length,schema:this.schema,cursor:this.cursor}):null}}class n{schema;length=0;allocated=0;columns={};constructor(t,e){this.schema=t,this._reallocateColumns()}rowCount(){return this.length}addArrayRow(t){this._reallocateColumns();let e=0;for(const r in this.columns)this.columns[r][this.length]=t[e++];this.length++}addObjectRow(t){this._reallocateColumns();for(const e in t)this.columns[e][this.length]=t[e];this.length++}getBatch(){this._pruneColumns();const t=Array.isArray(this.schema)?this.columns:{};if(!Array.isArray(this.schema))for(const e in this.schema){const r=this.schema[e];t[r.name]=this.columns[r.index]}this.columns={};return{shape:"columnar-table",batchType:"data",data:t,schema:this.schema,length:this.length}}_reallocateColumns(){if(!(this.length<this.allocated)){this.allocated=this.allocated>0?this.allocated*=2:100,this.columns={};for(const t in this.schema){const e=this.schema[t],r=e.type||Float32Array,s=this.columns[e.index];if(s&&ArrayBuffer.isView(s)){const t=new r(this.allocated);t.set(s),this.columns[e.index]=t}else s?(s.length=this.allocated,this.columns[e.index]=s):this.columns[e.index]=new r(this.allocated)}}}_pruneColumns(){for(const[t,e]of Object.entries(this.columns))this.columns[t]=e.slice(0,this.length)}}const o={shape:void 0,batchSize:"auto",batchDebounceMs:0,limit:0,_limitMB:0};class i{schema;options;aggregator=null;batchCount=0;bytesUsed=0;isChunkComplete=!1;lastBatchEmittedMs=Date.now();totalLength=0;totalBytes=0;rowBytes=0;static ArrowBatch;constructor(t,e){this.schema=t,this.options={...o,...e}}limitReached(){return!!(Boolean(this.options?.limit)&&this.totalLength>=this.options.limit)||!!(Boolean(this.options?._limitMB)&&this.totalBytes/1e6>=this.options._limitMB)}addRow(t){this.limitReached()||(this.totalLength++,this.rowBytes=this.rowBytes||this._estimateRowMB(t),this.totalBytes+=this.rowBytes,Array.isArray(t)?this.addArrayRow(t):this.addObjectRow(t))}addArrayRow(t){if(!this.aggregator){const t=this._getTableBatchType();this.aggregator=new t(this.schema,this.options)}this.aggregator.addArrayRow(t)}addObjectRow(t){if(!this.aggregator){const t=this._getTableBatchType();this.aggregator=new t(this.schema,this.options)}this.aggregator.addObjectRow(t)}chunkComplete(t){t instanceof ArrayBuffer&&(this.bytesUsed+=t.byteLength),"string"==typeof t&&(this.bytesUsed+=t.length),this.isChunkComplete=!0}getFullBatch(t){return this._isFull()?this._getBatch(t):null}getFinalBatch(t){return this._getBatch(t)}_estimateRowMB(t){return Array.isArray(t)?8*t.length:8*Object.keys(t).length}_isFull(){if(!this.aggregator||0===this.aggregator.rowCount())return!1;if("auto"===this.options.batchSize){if(!this.isChunkComplete)return!1}else if(this.options.batchSize>this.aggregator.rowCount())return!1;return!(this.options.batchDebounceMs>Date.now()-this.lastBatchEmittedMs)&&(this.isChunkComplete=!1,this.lastBatchEmittedMs=Date.now(),!0)}_getBatch(t){if(!this.aggregator)return null;t?.bytesUsed&&(this.bytesUsed=t.bytesUsed);const e=this.aggregator.getBatch();return e.count=this.batchCount,e.bytesUsed=this.bytesUsed,Object.assign(e,t),this.batchCount++,this.aggregator=null,e}_getTableBatchType(){switch(this.options.shape){case"array-row-table":case"object-row-table":return a;case"columnar-table":return n;case"arrow-table":if(!i.ArrowBatch)throw new Error("TableBatchBuilder");return i.ArrowBatch;default:return e}}}function l(t){switch("object"==typeof t&&t?.shape){case"array-row-table":case"object-row-table":return Array.isArray(t.data);case"geojson-table":return Array.isArray(t.features);case"columnar-table":return t.data&&"object"==typeof t.data;case"arrow-table":return Boolean(void 0!==t?.data?.numRows);default:return!1}}function c(t){switch(t.shape){case"array-row-table":case"object-row-table":return t.data.length;case"geojson-table":return t.features.length;case"arrow-table":return t.data.numRows;case"columnar-table":for(const e of Object.values(t.data))return e.length||0;return 0;default:throw new Error("table")}}function u(t){if(t.schema)return t.schema.fields.length;if(0===c(t))throw new Error("empty table");switch(t.shape){case"array-row-table":return t.data[0].length;case"object-row-table":return Object.keys(t.data[0]).length;case"geojson-table":return Object.keys(t.features[0]).length;case"columnar-table":return Object.keys(t.data).length;case"arrow-table":return t.data.numCols;default:throw new Error("table")}}function h(t,e,r){switch(t.shape){case"array-row-table":const s=m(t,r);return t.data[e][s];case"object-row-table":return t.data[e][r];case"geojson-table":return t.features[e][r];case"columnar-table":return t.data[r][e];case"arrow-table":const a=t.data,n=a.schema.fields.findIndex((t=>t.name===r));return a.getChildAt(n)?.get(e);default:throw new Error("todo")}}function d(t){switch(t.shape){case"array-row-table":case"object-row-table":return t.shape;case"geojson-table":return"object-row-table";default:throw new Error("Not a row table")}}function m(t,e){const r=t.schema?.fields.findIndex((t=>t.name===e));if(void 0===r)throw new Error(e);return r}function f(t,e){const r=t.schema?.fields[e]?.name;if(!r)throw new Error(`${e}`);return r}function b(t,e,r,s){switch(t.shape){case"object-row-table":return s?Object.fromEntries(Object.entries(t.data[e])):t.data[e];case"array-row-table":if(t.schema){const s=r||{};for(let r=0;r<t.schema.fields.length;r++)s[t.schema.fields[r].name]=t.data[e][r];return s}throw new Error("no schema");case"geojson-table":if(t.schema){const s=r||{};for(let r=0;r<t.schema.fields.length;r++)s[t.schema.fields[r].name]=t.features[e][r];return s}throw new Error("no schema");case"columnar-table":if(t.schema){const s=r||{};for(let r=0;r<t.schema.fields.length;r++)s[t.schema.fields[r].name]=t.data[t.schema.fields[r].name][e];return s}{const s=r||{};for(const[r,a]of Object.entries(t.data))s[r]=a[e];return s}case"arrow-table":const a=t.data,n=r||{},o=a.get(e),i=a.schema;for(let t=0;t<i.fields.length;t++)n[i.fields[t].name]=o?.[i.fields[t].name];return n;default:throw new Error("shape")}}function y(t,e,r,s){switch(t.shape){case"array-row-table":return s?Array.from(t.data[e]):t.data[e];case"object-row-table":if(t.schema){const s=r||[];for(let r=0;r<t.schema.fields.length;r++)s[r]=t.data[e][t.schema.fields[r].name];return s}return Object.values(t.data[e]);case"geojson-table":if(t.schema){const s=r||[];for(let r=0;r<t.schema.fields.length;r++)s[r]=t.features[e][t.schema.fields[r].name];return s}return Object.values(t.features[e]);case"columnar-table":if(t.schema){const s=r||[];for(let r=0;r<t.schema.fields.length;r++)s[r]=t.data[t.schema.fields[r].name][e];return s}{const s=r||[];let a=0;for(const r of Object.values(t.data))s[a]=r[e],a++;return s}case"arrow-table":const a=t.data,n=r||[],o=a.get(e),i=a.schema;for(let t=0;t<i.fields.length;t++)n[t]=o?.[i.fields[t].name];return n;default:throw new Error("shape")}}function*p(t,e){switch(e){case"array-row-table":yield*g(t);break;case"object-row-table":yield*w(t);break;default:throw new Error(`Unknown row type ${e}`)}}function*g(t,e=[]){const r=c(t);for(let s=0;s<r;s++)yield y(t,s,e)}function*w(t,e={}){const r=c(t);for(let s=0;s<r;s++)yield b(t,s,e)}class S{name;type;nullable;metadata;constructor(t,e,r=!1,s=new Map){this.name=t,this.type=e,this.nullable=r,this.metadata=s}get typeId(){return this.type&&this.type.typeId}clone(){return new S(this.name,this.type,this.nullable,this.metadata)}compareTo(t){return this.name===t.name&&this.type===t.type&&this.nullable===t.nullable&&this.metadata===t.metadata}toString(){return`${JSON.stringify(this.type)}${this.nullable?", nullable":""}${this.metadata?`, metadata: ${JSON.stringify(this.metadata)}`:""}`}}class I{fields;metadata;constructor(t,e=new Map){this.fields=t.map((t=>new S(t.name,t.type,t.nullable,t.metadata))),this.metadata=e instanceof Map?e:new Map(Object.entries(e))}compareTo(t){if(this.metadata!==t.metadata)return!1;if(this.fields.length!==t.fields.length)return!1;for(let e=0;e<this.fields.length;++e)if(!this.fields[e].compareTo(t.fields[e]))return!1;return!0}select(...t){const e=Object.create(null);for(const r of t)e[r]=!0;const r=this.fields.filter((t=>e[t.name]));return new I(r,this.metadata)}selectAt(...t){const e=t.map((t=>this.fields[t])).filter(Boolean);return new I(e,this.metadata)}assign(t){let e,r=this.metadata;if(t instanceof I){const s=t;e=s.fields,r=A(A(new Map,this.metadata),s.metadata)}else e=t;const s=Object.create(null);for(const t of this.fields)s[t.name]=t;for(const t of e)s[t.name]=t;const a=Object.values(s);return new I(a,r)}}function A(t,e){return new Map([...t||new Map,...e||new Map])}function j(t,e="float32"){return t instanceof Date?"date-millisecond":t instanceof Number?e:"string"==typeof t?"utf8":"null"}function T(t){let e=O(t);return"null"!==e?{type:e,nullable:!1}:t.length>0?(e=j(t[0]),{type:e,nullable:!0}):{type:"null",nullable:!0}}function O(t){switch(t.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function B(t){switch(t.shape){case"array-row-table":case"object-row-table":return function(t){if(!t.length)throw new Error("deduce from empty table");const e=[],r=t[0];for(const[t,s]of Object.entries(r))e.push(x(s,t));return{fields:e,metadata:{}}}(t.data);case"columnar-table":return function(t){const e=[];for(const[r,s]of Object.entries(t)){const t=E(s,r);e.push(t)}return{fields:e,metadata:{}}}(t.data);default:throw new Error("Deduce schema")}}function E(t,e){if(ArrayBuffer.isView(t)){const r=T(t);return{name:e,type:r.type||"null",nullable:r.nullable}}if(Array.isArray(t)&&t.length>0){return{name:e,type:j(t[0]),nullable:!0}}throw new Error("empty table")}function x(t,e){return{name:e,type:j(t),nullable:!0}}class _{table;columnName;constructor(t,e){this.table=t,this.columnName=e}get(t){return h(this.table,t,this.columnName)}toArray(){switch(this.table.shape){case"arrow-table":const t=this.table.data;return t.getChild(this.columnName)?.toArray();case"columnar-table":return this.table.data[this.columnName];default:throw new Error(this.table.shape)}}}class N{schema;table;constructor(t){const e=t.schema||B(t);this.schema=new I(e.fields,e.metadata),this.table={...t,schema:e}}get data(){return"geojson-table"===this.table.shape?this.table.features:this.table.data}get numCols(){return u(this.table)}get length(){return c(this.table)}getChild(t){return new _(this.table,t)}}function D(t){let e;switch(function(t){if(Array.isArray(t)){if(0===t.length)throw new Error("cannot deduce type of empty table");const e=t[0];if(Array.isArray(e))return"array-row-table";if(e&&"object"==typeof e)return"object-row-table"}if(t&&"object"==typeof t)return"columnar-table";throw new Error("invalid table")}(t)){case"array-row-table":e={shape:"array-row-table",data:t};break;case"object-row-table":e={shape:"object-row-table",data:t};break;case"columnar-table":e={shape:"columnar-table",data:t};break;default:throw new Error("table")}const r=B(e);return{...e,schema:r}}function M(e){return{...e,length:t(e),batchType:"data"}}async function C(e){let r,s,a,n,o=null;for await(const i of e)switch(o=o||i.shape,n=n||i.schema,i.shape){case"array-row-table":r=r||[];for(let e=0;e<t(i);e++){const t=i.data[e];r.push(t)}break;case"object-row-table":s=s||[];for(let e=0;e<t(i);e++){const t=i.data[e];s.push(t)}break;case"geojson-table":a=a||[];for(let e=0;e<t(i);e++){const t=i.features[e];a.push(t)}break;default:throw new Error("shape")}if(!o)return null;switch(o){case"array-row-table":return{shape:"array-row-table",data:r,schema:n};case"object-row-table":return{shape:"object-row-table",data:s,schema:n};case"geojson-table":return{shape:"geojson-table",type:"FeatureCollection",features:a,schema:n};default:return null}}function v(t,e){return new(function(t,e){if(!e)switch(t){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array}return Array}(t.type,t.nullable))(e)}function U(t,e){switch(e){case"object-row-table":return function(t){if("object-row-table"===t.shape)return t;const e=c(t),r=new Array(e);for(let s=0;s<e;s++)r[s]=b(t,s);return{shape:"object-row-table",schema:t.schema,data:r}}(t);case"array-row-table":return function(t){if("array-row-table"===t.shape)return t;const e=c(t),r=new Array(e);for(let s=0;s<e;s++)r[s]=y(t,s);return{shape:"array-row-table",schema:t.schema,data:r}}(t);case"columnar-table":return function(t){const e=t.schema||B(t),r=t.schema?.fields||[];if("columnar-table"===t.shape)return{...t,schema:e};const s=c(t),a={};for(const e of r){const r=v(e,s);a[e.name]=r;for(let a=0;a<s;a++)r[a]=h(t,a,e.name)}return{shape:"columnar-table",schema:e,data:a}}(t);case"arrow-table":return function(t){const e=globalThis.__loaders?._makeArrowTable;if(!e)throw new Error("");return e(t)}(t);default:throw new Error(e)}}function F(t){let e=0;for(const r in t){const s=t[r];ArrayBuffer.isView(s)&&(e+=s.byteLength*s.BYTES_PER_ELEMENT)}return e}function R(t){let e=1/0,r=1/0,s=1/0,a=-1/0,n=-1/0,o=-1/0;const i=t.POSITION?t.POSITION.value:[],l=i&&i.length;for(let t=0;t<l;t+=3){const l=i[t],c=i[t+1],u=i[t+2];e=l<e?l:e,r=c<r?c:r,s=u<s?u:s,a=l>a?l:a,n=c>n?c:n,o=u>o?u:o}return[[e,r,s],[a,n,o]]}function L(t,e={}){const r=function(t){const e=[];for(const r in t){const s=t[r];e.push(z(r,s))}return e}(t);return{fields:r,metadata:e}}function z(t,e,r){const s=O(e.value),a=r||$(e);return{name:t,type:{type:"fixed-size-list",listSize:e.size,children:[{name:"value",type:s}]},nullable:!1,metadata:a}}function $(t){const e={};return"byteOffset"in t&&(e.byteOffset=t.byteOffset.toString(10)),"byteStride"in t&&(e.byteStride=t.byteStride.toString(10)),"normalized"in t&&(e.normalized=t.normalized.toString()),e}var k;!function(t){t[t.NONE=0]="NONE",t[t.Null=1]="Null",t[t.Int=2]="Int",t[t.Float=3]="Float",t[t.Binary=4]="Binary",t[t.Utf8=5]="Utf8",t[t.Bool=6]="Bool",t[t.Decimal=7]="Decimal",t[t.Date=8]="Date",t[t.Time=9]="Time",t[t.Timestamp=10]="Timestamp",t[t.Interval=11]="Interval",t[t.List=12]="List",t[t.Struct=13]="Struct",t[t.Union=14]="Union",t[t.FixedSizeBinary=15]="FixedSizeBinary",t[t.FixedSizeList=16]="FixedSizeList",t[t.Map=17]="Map",t[t.Dictionary=-1]="Dictionary",t[t.Int8=-2]="Int8",t[t.Int16=-3]="Int16",t[t.Int32=-4]="Int32",t[t.Int64=-5]="Int64",t[t.Uint8=-6]="Uint8",t[t.Uint16=-7]="Uint16",t[t.Uint32=-8]="Uint32",t[t.Uint64=-9]="Uint64",t[t.Float16=-10]="Float16",t[t.Float32=-11]="Float32",t[t.Float64=-12]="Float64",t[t.DateDay=-13]="DateDay",t[t.DateMillisecond=-14]="DateMillisecond",t[t.TimestampSecond=-15]="TimestampSecond",t[t.TimestampMillisecond=-16]="TimestampMillisecond",t[t.TimestampMicrosecond=-17]="TimestampMicrosecond",t[t.TimestampNanosecond=-18]="TimestampNanosecond",t[t.TimeSecond=-19]="TimeSecond",t[t.TimeMillisecond=-20]="TimeMillisecond",t[t.TimeMicrosecond=-21]="TimeMicrosecond",t[t.TimeNanosecond=-22]="TimeNanosecond",t[t.DenseUnion=-23]="DenseUnion",t[t.SparseUnion=-24]="SparseUnion",t[t.IntervalDayTime=-25]="IntervalDayTime",t[t.IntervalYearMonth=-26]="IntervalYearMonth"}(k||(k={}));class Y{static isNull(t){return t&&t.typeId===k.Null}static isInt(t){return t&&t.typeId===k.Int}static isFloat(t){return t&&t.typeId===k.Float}static isBinary(t){return t&&t.typeId===k.Binary}static isUtf8(t){return t&&t.typeId===k.Utf8}static isBool(t){return t&&t.typeId===k.Bool}static isDecimal(t){return t&&t.typeId===k.Decimal}static isDate(t){return t&&t.typeId===k.Date}static isTime(t){return t&&t.typeId===k.Time}static isTimestamp(t){return t&&t.typeId===k.Timestamp}static isInterval(t){return t&&t.typeId===k.Interval}static isList(t){return t&&t.typeId===k.List}static isStruct(t){return t&&t.typeId===k.Struct}static isUnion(t){return t&&t.typeId===k.Union}static isFixedSizeBinary(t){return t&&t.typeId===k.FixedSizeBinary}static isFixedSizeList(t){return t&&t.typeId===k.FixedSizeList}static isMap(t){return t&&t.typeId===k.Map}static isDictionary(t){return t&&t.typeId===k.Dictionary}get typeId(){return k.NONE}compareTo(t){return this===t}}class q extends Y{get typeId(){return k.Null}get[Symbol.toStringTag](){return"Null"}toString(){return"Null"}}class P extends Y{get typeId(){return k.Bool}get[Symbol.toStringTag](){return"Bool"}toString(){return"Bool"}}class W extends Y{isSigned;bitWidth;constructor(t,e){super(),this.isSigned=t,this.bitWidth=e}get typeId(){return k.Int}get[Symbol.toStringTag](){return"Int"}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}class J extends W{constructor(){super(!0,8)}}class V extends W{constructor(){super(!0,16)}}class H extends W{constructor(){super(!0,32)}}class G extends W{constructor(){super(!0,64)}}class K extends W{constructor(){super(!1,8)}}class Q extends W{constructor(){super(!1,16)}}class X extends W{constructor(){super(!1,32)}}class Z extends W{constructor(){super(!1,64)}}const tt=16,et=32,rt=64;class st extends Y{precision;constructor(t){super(),this.precision=t}get typeId(){return k.Float}get[Symbol.toStringTag](){return"Float"}toString(){return`Float${this.precision}`}}class at extends st{constructor(){super(tt)}}class nt extends st{constructor(){super(et)}}class ot extends st{constructor(){super(rt)}}class it extends Y{constructor(){super()}get typeId(){return k.Binary}toString(){return"Binary"}get[Symbol.toStringTag](){return"Binary"}}class lt extends Y{get typeId(){return k.Utf8}get[Symbol.toStringTag](){return"Utf8"}toString(){return"Utf8"}}const ct={DAY:0,MILLISECOND:1};class ut extends Y{unit;constructor(t){super(),this.unit=t}get typeId(){return k.Date}get[Symbol.toStringTag](){return"Date"}toString(){return`Date${32*(this.unit+1)}<${ct[this.unit]}>`}}class ht extends ut{constructor(){super(ct.DAY)}}class dt extends ut{constructor(){super(ct.MILLISECOND)}}const mt={SECOND:1,MILLISECOND:1e3,MICROSECOND:1e6,NANOSECOND:1e9};class ft extends Y{unit;bitWidth;constructor(t,e){super(),this.unit=t,this.bitWidth=e}get typeId(){return k.Time}toString(){return`Time${this.bitWidth}<${mt[this.unit]}>`}get[Symbol.toStringTag](){return"Time"}}class bt extends ft{constructor(){super(mt.SECOND,32)}}class yt extends ft{constructor(){super(mt.MILLISECOND,32)}}class pt extends Y{unit;timezone;constructor(t,e=null){super(),this.unit=t,this.timezone=e}get typeId(){return k.Timestamp}get[Symbol.toStringTag](){return"Timestamp"}toString(){return`Timestamp<${mt[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}class gt extends pt{constructor(t=null){super(mt.SECOND,t)}}class wt extends pt{constructor(t=null){super(mt.MILLISECOND,t)}}class St extends pt{constructor(t=null){super(mt.MICROSECOND,t)}}class It extends pt{constructor(t=null){super(mt.NANOSECOND,t)}}const At={DAY_TIME:0,YEAR_MONTH:1};class jt extends Y{unit;constructor(t){super(),this.unit=t}get typeId(){return k.Interval}get[Symbol.toStringTag](){return"Interval"}toString(){return`Interval<${At[this.unit]}>`}}class Tt extends jt{constructor(){super(At.DAY_TIME)}}class Ot extends jt{constructor(){super(At.YEAR_MONTH)}}class Bt extends Y{listSize;children;constructor(t,e){super(),this.listSize=t,this.children=[e]}get typeId(){return k.FixedSizeList}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get[Symbol.toStringTag](){return"FixedSizeList"}toString(){return`FixedSizeList[${this.listSize}]<${JSON.stringify(this.valueType)}>`}}class Et extends Y{children;constructor(t){super(),this.children=t}get typeId(){return k.Struct}toString(){return`Struct<{${this.children.map((t=>`${t.name}:${JSON.stringify(t.type)}`)).join(", ")}}>`}get[Symbol.toStringTag](){return"Struct"}}function xt(t){return{typeId:t.typeId,ArrayType:t.ArrayType,typeName:t.toString(),typeEnumName:Nt(t.typeId),precision:t.precision}}let _t=null;function Nt(t){if(!_t){_t={};for(const t in k)_t[k[t]]=t}return _t[t]}class Dt extends Array{enqueue(t){return this.push(t)}dequeue(){return this.shift()}}class Mt{_values;_settlers;_closed;constructor(){this._values=new Dt,this._settlers=new Dt,this._closed=!1}close(){for(;this._settlers.length>0;)this._settlers.dequeue().resolve({done:!0});this._closed=!0}[Symbol.asyncIterator](){return this}enqueue(t){if(this._closed)throw new Error("Closed");if(this._settlers.length>0){if(this._values.length>0)throw new Error("Illegal internal state");const e=this._settlers.dequeue();t instanceof Error?e.reject(t):e.resolve({value:t})}else this._values.enqueue(t)}next(){if(this._values.length>0){const t=this._values.dequeue();return t instanceof Error?Promise.reject(t):Promise.resolve({value:t})}if(this._closed){if(this._settlers.length>0)throw new Error("Illegal internal state");return Promise.resolve({done:!0})}return new Promise(((t,e)=>{this._settlers.enqueue({resolve:t,reject:e})}))}}export{Y as ArrowLikeDataType,S as ArrowLikeField,I as ArrowLikeSchema,N as ArrowLikeTable,Mt as AsyncQueue,it as Binary,P as Bool,n as ColumnarTableBatchAggregator,ut as Date,ht as DateDay,dt as DateMillisecond,Bt as FixedSizeList,st as Float,at as Float16,nt as Float32,ot as Float64,W as Int,V as Int16,H as Int32,G as Int64,J as Int8,jt as Interval,Tt as IntervalDayTime,Ot as IntervalYearMonth,q as Null,a as RowTableBatchAggregator,Et as Struct,i as TableBatchBuilder,ft as Time,yt as TimeMillisecond,bt as TimeSecond,pt as Timestamp,St as TimestampMicrosecond,wt as TimestampMillisecond,It as TimestampNanosecond,gt as TimestampSecond,Q as Uint16,X as Uint32,Z as Uint64,K as Uint8,lt as Utf8,U as convertTable,s as convertToArrayRow,r as convertToObjectRow,z as deduceMeshField,L as deduceMeshSchema,B as deduceTableSchema,T as getDataTypeFromArray,R as getMeshBoundingBox,F as getMeshSize,h as getTableCell,m as getTableColumnIndex,f as getTableColumnName,c as getTableLength,u as getTableNumCols,y as getTableRowAsArray,b as getTableRowAsObject,d as getTableRowShape,xt as getTypeInfo,l as isTable,g as makeArrayRowIterator,M as makeBatchFromTable,$ as makeMeshAttributeMetadata,w as makeObjectRowIterator,p as makeRowIterator,C as makeTableFromBatches,D as makeTableFromData};export default null;