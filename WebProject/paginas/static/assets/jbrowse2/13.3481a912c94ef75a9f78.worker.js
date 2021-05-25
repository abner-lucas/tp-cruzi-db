this.webpackChunk([13,14,15],{1011:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},1012:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},1027:function(e,t,n){"use strict";var r=n(1100),a=n(1038),u=a.unzip,i=a.unzipChunk,o=a.unzipChunkSlice;e.exports={BgzfFilehandle:r,unzip:u,unzipChunk:i,unzipChunkSlice:o}},1038:function(e,t,n){"use strict";(function(t){var r=n(997),a=r(n(998)),u=r(n(999)),i=n(683),o=(0,n(682).promisify)(i.gunzip),s=n(375),c=s.Z_SYNC_FLUSH,f=s.Inflate;function l(e){return p.apply(this,arguments)}function p(){return(p=(0,u.default)(a.default.mark((function e(n){var r,u,i,o,s,l,p;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,u=0,i=0,o=[];case 4:if(l=n.slice(u),s=new f,r=s.strm,s.push(l,c),!s.err){e.next=11;break}throw new Error(s.msg);case 11:u+=r.next_in,o[i]=t.from(s.result),i+=1;case 14:if(r.avail_in){e.next=4;break}case 15:return p=t.concat(o),e.abrupt("return",p);case 19:if(e.prev=19,e.t0=e.catch(0),!e.t0.message.match(/incorrect header check/)){e.next=23;break}throw new Error("problem decompressing block: incorrect gzip header check");case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function d(){return(d=(0,u.default)(a.default.mark((function e(n){var r,u,i,o,s,l,p,d,h,v;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,u=0,i=0,o=[],s=[],l=[];case 6:if(p=n.slice(u),d=new f,r=d.strm,d.push(p,c),!d.err){e.next=12;break}throw new Error(d.msg);case 12:h=t.from(d.result),o.push(h),s.push(u),l.push(i),u+=r.next_in,i+=h.length;case 18:if(r.avail_in){e.next=6;break}case 19:return v=t.concat(o),e.abrupt("return",{buffer:v,cpositions:s,dpositions:l});case 23:if(e.prev=23,e.t0=e.catch(0),!e.t0.message.match(/incorrect header check/)){e.next=27;break}throw new Error("problem decompressing block: incorrect gzip header check");case 27:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}function h(){return(h=(0,u.default)(a.default.mark((function e(n,r){var u,i,o,s,l,p,d,h,v,b,y,m;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,i=r.minv.blockPosition,o=r.minv.dataPosition,s=[],l=[],p=[];case 6:if(d=n.slice(i-r.minv.blockPosition),h=new f,u=h.strm,h.push(d,c),!h.err){e.next=12;break}throw new Error(h.msg);case 12:if(v=t.from(h.result),s.push(v),b=v.length,l.push(i),p.push(o),1===s.length&&r.minv.dataPosition&&(s[0]=s[0].slice(r.minv.dataPosition),b=s[0].length),y=i,i+=u.next_in,o+=b,!(y>=r.maxv.blockPosition)){e.next=26;break}return s[s.length-1]=s[s.length-1].slice(0,r.maxv.blockPosition===r.minv.blockPosition?r.maxv.dataPosition-r.minv.dataPosition+1:r.maxv.dataPosition+1),l.push(i),p.push(o),e.abrupt("break",27);case 26:if(u.avail_in){e.next=6;break}case 27:return m=t.concat(s),e.abrupt("return",{buffer:m,cpositions:l,dpositions:p});case 31:if(e.prev=31,e.t0=e.catch(0),!e.t0.message.match(/incorrect header check/)){e.next=35;break}throw new Error("problem decompressing block: incorrect gzip header check");case 35:case"end":return e.stop()}}),e,null,[[0,31]])})))).apply(this,arguments)}e.exports={unzip:l,unzipChunk:function(e){return d.apply(this,arguments)},unzipChunkSlice:function(e,t){return h.apply(this,arguments)},nodeUnzip:function(e){return o(e,{finishFlush:(i.constants||i).Z_SYNC_FLUSH})},pakoUnzip:l}}).call(this,n(74).Buffer)},1039:function(e,t,n){"use strict";var r=n(997),a=r(n(998)),u=r(n(999)),i=r(n(1011)),o=r(n(1012)),s=void 0,c=function(){function e(t){(0,i.default)(this,e),this.fdPromise=s.open(t,"r"),this.path=t}return(0,o.default)(e,[{key:"read",value:function(){var e=(0,u.default)(a.default.mark((function e(t,n,r,u){var i,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fdPromise;case 2:return i=e.sent,e.next=5,s.read(i,t,n,r,u);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"stat",value:function(){var e=(0,u.default)(a.default.mark((function e(){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fdPromise;case 2:return t=e.sent,e.abrupt("return",s.fstat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();e.exports=c},1100:function(e,t,n){"use strict";(function(t){var r=n(997),a=r(n(1101)),u=r(n(998)),i=r(n(999)),o=r(n(1011)),s=r(n(1012)),c=n(1038).unzip,f=n(1039),l=n(1107),p=function(){function e(t){var n=t.filehandle,r=t.path,a=t.gziFilehandle,u=t.gziPath;if((0,o.default)(this,e),n)this.filehandle=n;else{if(!r)throw new TypeError("either filehandle or path must be defined");this.filehandle=new f(r)}if(!a&&!u&&!r)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new l({filehandle:a,path:a||u||!r?"".concat(r,".gzi"):u})}return(0,s.default)(e,[{key:"stat",value:function(){var e=(0,i.default)(u.default.mark((function e(){var t;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.stat();case 2:return t=e.sent,e.t0=Object,e.t1=t,e.next=7,this.getUncompressedFileSize();case 7:return e.t2=e.sent,e.t3=void 0,e.t4=void 0,e.t5={size:e.t2,blocks:e.t3,blksize:e.t4},e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t5));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUncompressedFileSize",value:function(){var e=(0,i.default)(u.default.mark((function e(){var n,r,i,o,s,c,f,l;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gzi.getLastBlock();case 2:return n=e.sent,r=(0,a.default)(n,2),i=r[1],e.next=7,this.filehandle.stat();case 7:return o=e.sent,s=o.size,c=t.allocUnsafe(4),e.next=12,this.filehandle.read(c,0,4,s-28-4);case 12:if(f=e.sent,4===f.bytesRead){e.next=16;break}throw new Error("read error");case 16:return l=c.readUInt32LE(0),e.abrupt("return",i+l);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_readAndUncompressBlock",value:function(){var e=(0,i.default)(u.default.mark((function e(t,n,r){var i,o,s,f,l,p,d;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(0,a.default)(n,1),o=i[0],s=(0,a.default)(r,1),f=s[0],l=f){e.next=7;break}return e.next=6,this.filehandle.stat();case 6:l=e.sent.size;case 7:return p=l-o,e.next=10,this.filehandle.read(t,0,p,o);case 10:return e.next=12,c(t.slice(0,p));case 12:return d=e.sent,e.abrupt("return",d);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"read",value:function(){var e=(0,i.default)(u.default.mark((function e(n,r,i,o){var s,c,f,l,p,d,h,v,b,y;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gzi.getRelevantBlocksForRead(i,o);case 2:s=e.sent,c=t.allocUnsafe(65536),f=r,l=0,p=0;case 7:if(!(p<s.length-1)){e.next=18;break}return e.next=10,this._readAndUncompressBlock(c,s[p],s[p+1]);case 10:d=e.sent,h=(0,a.default)(s[p],2),v=h[1],b=v>=o?0:o-v,y=Math.min(o+i,v+d.length)-v,b>=0&&b<d.length&&(d.copy(n,f,b,y),f+=y-b,l+=y-b);case 15:p+=1,e.next=7;break;case 18:return e.abrupt("return",{bytesRead:l,buffer:n});case 19:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()}]),e}();e.exports=p}).call(this,n(74).Buffer)},1101:function(e,t,n){var r=n(1102),a=n(1103),u=n(1104),i=n(1106);e.exports=function(e,t){return r(e)||a(e,t)||u(e,t)||i()}},1102:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},1103:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,u=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,u=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw u}}return n}}},1104:function(e,t,n){var r=n(1105);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},1105:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},1106:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1107:function(e,t,n){"use strict";(function(t){var r=n(997),a=r(n(998)),u=r(n(999)),i=r(n(1011)),o=r(n(1012)),s=n(680),c=n(1039),f=function(){function e(t){var n=t.filehandle,r=t.path;if((0,i.default)(this,e),n)this.filehandle=n;else{if(!r)throw new TypeError("either filehandle or path must be defined");this.filehandle=new c(r)}}return(0,o.default)(e,[{key:"_readLongWithOverflow",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=s.fromBytesLE(e.slice(t,t+8),n);if(r.greaterThan(Number.MAX_SAFE_INTEGER)||r.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return r.toNumber()}},{key:"_getIndex",value:function(){return this.index||(this.index=this._readIndex()),this.index}},{key:"_readIndex",value:function(){var e=(0,u.default)(a.default.mark((function e(){var n,r,u,i,o,s,c;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.allocUnsafe(8),e.next=3,this.filehandle.read(n,0,8,0);case 3:if(r=this._readLongWithOverflow(n,0,!0)){e.next=6;break}return e.abrupt("return",[[0,0]]);case 6:if((u=new Array(r+1))[0]=[0,0],!((i=16*r)>Number.MAX_SAFE_INTEGER)){e.next=11;break}throw new TypeError("integer overflow");case 11:return n=t.allocUnsafe(i),e.next=14,this.filehandle.read(n,0,i,8);case 14:for(o=0;o<r;o+=1)s=this._readLongWithOverflow(n,16*o),c=this._readLongWithOverflow(n,16*o+8),u[o+1]=[s,c];return e.abrupt("return",u);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getLastBlock",value:function(){var e=(0,u.default)(a.default.mark((function e(){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndex();case 2:if((t=e.sent).length){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.abrupt("return",t[t.length-1]);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRelevantBlocksForRead",value:function(){var e=(0,u.default)(a.default.mark((function e(t,n){var r,u,i,o,s,c,f,l,p;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n+t,0!==t){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,this._getIndex();case 5:for(u=e.sent,i=[],o=function(e,t){var r=e[1],a=t?t[1]:1/0;return r<=n&&a>n?0:r<n?-1:1},s=0,c=u.length-1,f=Math.floor(u.length/2),l=o(u[f],u[f+1]);0!==l;)l>0?c=f-1:l<0&&(s=f+1),f=Math.ceil((c-s)/2)+s,l=o(u[f],u[f+1]);i.push(u[f]),p=f+1;case 15:if(!(p<u.length)){e.next=22;break}if(i.push(u[p]),!(u[p][1]>=r)){e.next=19;break}return e.abrupt("break",22);case 19:p+=1,e.next=15;break;case 22:return i[i.length-1][1]<r&&i.push([]),e.abrupt("return",i);case 24:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();e.exports=f}).call(this,n(74).Buffer)},1227:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1228:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},1328:function(e,t,n){e.exports=n(374)},1329:function(e,t){function n(e,t,n,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,u){var i=e.apply(t,r);function o(e){n(i,a,u,o,s,"next",e)}function s(e){n(i,a,u,o,s,"throw",e)}o(void 0)}))}}},1330:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},1590:function(e,t,n){"use strict";var r,a,u,i,o=n(1227),s=o(n(1328)),c=o(n(1591)),f=o(n(1329)),l=o(n(1228)),p=o(n(1330)),d=n(682).promisify;if(n(1828).isNode){var h=n(1592);r=h&&d(h.open),a=h&&d(h.read),u=h&&d(h.fstat),i=h&&d(h.readFile)}var v=function(){function e(t){(0,l.default)(this,e),this.position=0,this.filename=t,this.fd=r(this.filename,"r")}return(0,p.default)(e,[{key:"read",value:function(){var e=(0,f.default)(s.default.mark((function e(t){var n,r,u,i,o=arguments;return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:0,r=o.length>2?o[2]:void 0,u=o.length>3?o[3]:void 0,null===u&&(this.position,this.position+=r),e.t0=a,e.next=8,this.fd;case 8:return e.t1=e.sent,e.t2=t,e.t3=n,e.t4=r,e.t5=u,e.next=15,(0,e.t0)(e.t1,e.t2,e.t3,e.t4,e.t5);case 15:if(i=e.sent,"object"!==(0,c.default)(i)){e.next=18;break}return e.abrupt("return",i.bytesRead);case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"readFile",value:function(){var e=(0,f.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i(this.filename));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stat",value:function(){var e=(0,f.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._stat){e.next=8;break}return e.t0=u,e.next=4,this.fd;case 4:return e.t1=e.sent,e.next=7,(0,e.t0)(e.t1);case 7:this._stat=e.sent;case 8:return e.abrupt("return",this._stat);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();e.exports=v},1591:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},1592:function(e,t){},1593:function(e,t,n){"use strict";(function(t){var r=n(1227),a=r(n(1328)),u=r(n(1329)),i=r(n(1228)),o=r(n(1330)),s=r(n(1590));function c(e,t){return e.offset+e.lineBytes*Math.floor(t/e.lineLength)+t%e.lineLength}var f=function(){function e(t){var n=t.fasta,r=t.fai,a=t.path,u=t.faiPath,o=t.chunkSizeLimit,c=void 0===o?1e6:o;(0,i.default)(this,e),n?this.fasta=n:a&&(this.fasta=new s.default(a)),r?this.fai=r:u?this.fai=new s.default(u):a&&(this.fai=new s.default("".concat(a,".fai"))),this.chunkSizeLimit=c}return(0,o.default)(e,[{key:"_getIndexes",value:function(){var e=(0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.indexes){e.next=4;break}return e.next=3,this._readFAI();case 3:this.indexes=e.sent;case 4:return e.abrupt("return",this.indexes);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_readFAI",value:function(){var e=(0,u.default)(a.default.mark((function e(){var t,n,r,u,i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n={},e.next=4,this.fai.readFile();case 4:if((r=e.sent)&&r.length){e.next=7;break}throw new Error("No data read from FASTA index (FAI) file");case 7:return u=0,r.toString("utf8").split(/\r?\n/).filter((function(e){return/\S/.test(e)})).forEach((function(e){var r=e.split("\t");if(""!==r[0]){i&&i.name===r[0]||(i={name:r[0],id:u},u+=1);var a={id:i.id,name:r[0],length:+r[1],start:0,end:+r[1],offset:+r[2],lineLength:+r[3],lineBytes:+r[4]};t[a.name]=a,n[a.id]=a}})),e.abrupt("return",{name:t,id:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSequenceNames",value:function(){var e=(0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.next=3,this._getIndexes();case 3:return e.t1=e.sent.name,e.abrupt("return",e.t0.keys.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSequenceSizes",value:function(){var e=(0,u.default)(a.default.mark((function e(){var t,n,r,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,this._getIndexes();case 3:for(n=e.sent,r=Object.values(n.id),u=0;u<r.length;u+=1)t[r[u].name]=r[u].length;return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSequenceSize",value:function(){var e=(0,u.default)(a.default.mark((function e(t){var n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes();case 2:return n=e.sent,e.abrupt("return",(n.name[t]||{}).length);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasReferenceSequence",value:function(){var e=(0,u.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes();case 2:return e.t0=t,e.abrupt("return",!!e.sent.name[e.t0]);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getResiduesById",value:function(){var e=(0,u.default)(a.default.mark((function e(t,n,r){var u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes();case 2:if(e.t0=t,u=e.sent.id[e.t0]){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",this._fetchFromIndexEntry(u,n,r));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getResiduesByName",value:function(){var e=(0,u.default)(a.default.mark((function e(t,n,r){var u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes();case 2:if(e.t0=t,u=e.sent.name[e.t0]){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",this._fetchFromIndexEntry(u,n,r));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getSequence",value:function(){var e=(0,u.default)(a.default.mark((function e(){var t=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getResiduesByName.apply(this,t));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchFromIndexEntry",value:function(){var e=(0,u.default)(a.default.mark((function e(n){var r,u,i,o,s,f,l=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.length>1&&void 0!==l[1]?l[1]:0,u=l.length>2?l[2]:void 0,i=u,!(r<0)){e.next=5;break}throw new TypeError("regionStart cannot be less than 0");case 5:if((void 0===i||i>n.length)&&(i=n.length),!(r>=i)){e.next=8;break}return e.abrupt("return","");case 8:if(o=c(n,r),!((s=c(n,i)-o)>this.chunkSizeLimit)){e.next=12;break}throw new Error("data size of ".concat(s.toLocaleString()," bytes exceeded chunk size limit of ").concat(this.chunkSizeLimit.toLocaleString()," bytes"));case 12:return f=t.allocUnsafe(s),e.next=15,this.fasta.read(f,0,s,o);case 15:return f=f.toString("utf8").replace(/\s+/g,""),e.abrupt("return",f);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();e.exports=f}).call(this,n(74).Buffer)},1605:function(e,t,n){"use strict";var r=n(1227);Object.defineProperty(t,"__esModule",{value:!0}),t.parseSmallFasta=p,Object.defineProperty(t,"BgzipIndexedFasta",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"IndexedFasta",{enumerable:!0,get:function(){return l.default}}),t.FetchableSmallFasta=void 0;var a=r(n(1328)),u=r(n(1329)),i=r(n(1228)),o=r(n(1330)),s=r(n(1822)),c=r(n(1590)),f=r(n(1829)),l=r(n(1593));function p(e){return e.split(">").filter((function(e){return/\S/.test(e)})).map((function(e){var t=e.split("\n"),n=(0,s.default)(t),r=n[0],a=n.slice(1),u=r.split(" "),i=(0,s.default)(u),o=i[0],c=i.slice(1),f=a.join("").replace(/\s/g,"");return{id:o,description:c.join(" "),sequence:f}}))}var d=function(){function e(t){var n=t.fasta,r=t.path;(0,i.default)(this,e),n?this.fasta=n:r&&(this.fasta=new c.default(r)),this.data=this.fasta.readFile().then((function(e){return p(e.toString("utf8"))}))}return(0,o.default)(e,[{key:"fetch",value:function(){var e=(0,u.default)(a.default.mark((function e(t,n,r){var u,i,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.data;case 2:if(u=e.sent,i=u.find((function(e){return e.id===t})),o=r-n,i){e.next=7;break}throw new Error("no sequence with id ".concat(t," exists"));case 7:return e.abrupt("return",i.sequence.substr(n,o));case 8:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getSequenceNames",value:function(){var e=(0,u.default)(a.default.mark((function e(){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.data;case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return e.id})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();t.FetchableSmallFasta=d},1822:function(e,t,n){var r=n(1823),a=n(1824),u=n(1825),i=n(1827);e.exports=function(e){return r(e)||a(e)||u(e)||i()}},1823:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},1824:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},1825:function(e,t,n){var r=n(1826);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},1826:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},1827:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1828:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="undefined"!==typeof window&&"undefined"!==typeof window.document,a="object"===("undefined"===typeof self?"undefined":n(self))&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,u="undefined"!==typeof e&&null!=e.versions&&null!=e.versions.node;t.isBrowser=r,t.isWebWorker=a,t.isNode=u,t.isJsDom=function(){return"undefined"!==typeof window&&"nodejs"===window.name||navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")}}).call(this,n(109))},1829:function(e,t,n){"use strict";var r=n(1227),a=r(n(1228)),u=r(n(1830)),i=r(n(1832)),o=r(n(1834)),s=n(1027);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.default)(e);if(t){var a=(0,o.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var f=function(e){(0,u.default)(n,e);var t=c(n);function n(e){var r,u=e.fasta,i=e.path,o=e.fai,c=e.faiPath,f=e.gzi,l=e.gziPath,p=e.chunkSizeLimit;return(0,a.default)(this,n),r=t.call(this,{fasta:u,path:i,fai:o,faiPath:c,chunkSizeLimit:p}),u&&f?r.fasta=new s.BgzfFilehandle({filehandle:u,gziFilehandle:f}):i&&l&&(r.fasta=new s.BgzfFilehandle({path:i,gziPath:l})),r}return n}(r(n(1593)).default);e.exports=f},1830:function(e,t,n){var r=n(1831);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},1831:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},1832:function(e,t,n){var r=n(1591),a=n(1833);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},1833:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},1834:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},1882:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(5),a=n.n(r),u=n(12),i=n(13),o=n(15),s=n(16),c=n(17),f=n(1605),l=n(53),p=n(80),d=n(75),h=n(55),v=n(4),b=n(173),y=n.n(b),m=n(317),x=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;Object(i.a)(this,n),(r=t.call(this,e)).fasta=void 0,r.seqCache=new y.a({cache:new m.a({maxSize:200}),fill:function(){var e=Object(u.a)(a.a.mark((function e(t){var n,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.refName,u=t.start,i=t.end,e.abrupt("return",r.fasta.getSequence(n,u,i));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});var o=Object(v.readConfObject)(e,"fastaLocation"),s=Object(v.readConfObject)(e,"faiLocation");if(!o)throw new Error("must provide fastaLocation");if(!s)throw new Error("must provide faiLocation");var c={fasta:Object(p.openLocation)(o),fai:Object(p.openLocation)(s)};return r.fasta=new f.IndexedFasta(c),r}return Object(o.a)(n,[{key:"getRefNames",value:function(){return this.fasta.getSequenceNames()}},{key:"getRegions",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fasta.getSequenceSizes();case 2:return t=e.sent,e.abrupt("return",Object.keys(t).map((function(e){return{refName:e,start:0,end:t[e]}})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=e.refName,r=e.start,i=e.end;return Object(d.ObservableCreate)(function(){var e=Object(u.a)(a.a.mark((function e(u){var o,s,c,f,l,p,d,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fasta.getSequenceSize(n);case 2:for(o=e.sent,s=void 0!==o?Math.min(o,i):i,c=[],128e3,l=i+(128e3-i%128e3),p=f=r-r%128e3;p<l;p+=128e3)d={refName:n,start:p,end:p+128e3},c.push(t.seqCache.get(JSON.stringify(d),d));return e.next=11,Promise.all(c);case 11:(v=e.sent.join("").slice(r-f).slice(0,i-r))&&u.next(new h.a({id:"".concat(n," ").concat(r,"-").concat(s),data:{refName:n,start:r,end:s,seq:v}})),u.complete();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(l.BaseFeatureDataAdapter)},2131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(13),a=n(16),u=n(17),i=n(1605),o=n(80),s=n(4),c=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(r.a)(this,n),a=t.call(this,e);var u=Object(s.readConfObject)(e,"fastaLocation"),c=Object(s.readConfObject)(e,"faiLocation"),f=Object(s.readConfObject)(e,"gziLocation");if(!u)throw new Error("must provide fastaLocation");if(!c)throw new Error("must provide faiLocation");if(!f)throw new Error("must provide gziLocation");var l={fasta:Object(o.openLocation)(u),fai:Object(o.openLocation)(c),gzi:Object(o.openLocation)(f)};return a.fasta=new i.BgzipIndexedFasta(l),a}return n}(n(1882).default)},997:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},998:function(e,t,n){e.exports=n(374)},999:function(e,t){function n(e,t,n,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,u){var i=e.apply(t,r);function o(e){n(i,a,u,o,s,"next",e)}function s(e){n(i,a,u,o,s,"throw",e)}o(void 0)}))}}}});
//# sourceMappingURL=13.3481a912c94ef75a9f78.worker.js.map