(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["collection"],{"0328":function(t,e,a){t.exports=a.p+"img/dateS.1dcfda2d.svg"},"0a31":function(t,e,a){var s={"./temp-diary.svg":"b427","./temp-notes.svg":"dc1a","./temp-novel.svg":"ef77","./temp-postIt.svg":"b1ce","./temp-share.svg":"6059","./temp-storage.svg":"83e2","./temp-todo.svg":"bfb4"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="0a31"},1276:function(t,e,a){"use strict";var s=a("d784"),i=a("44e7"),r=a("825a"),n=a("1d80"),d=a("4840"),c=a("8aa5"),o=a("50c4"),m=a("14c3"),l=a("9263"),u=a("9f7f"),p=a("d039"),v=u.UNSUPPORTED_Y,h=[].push,g=Math.min,_=4294967295,f=!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));s("split",(function(t,e,a){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var s=String(n(this)),r=void 0===a?_:a>>>0;if(0===r)return[];if(void 0===t)return[s];if(!i(t))return e.call(s,t,r);var d,c,o,m=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,u+"g");while(d=l.call(v,s)){if(c=v.lastIndex,c>p&&(m.push(s.slice(p,d.index)),d.length>1&&d.index<s.length&&h.apply(m,d.slice(1)),o=d[0].length,p=c,m.length>=r))break;v.lastIndex===d.index&&v.lastIndex++}return p===s.length?!o&&v.test("")||m.push(""):m.push(s.slice(p)),m.length>r?m.slice(0,r):m}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=n(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,a):s.call(String(i),e,a)},function(t,i){var n=a(s,this,t,i,s!==e);if(n.done)return n.value;var l=r(this),u=String(t),p=d(l,RegExp),h=l.unicode,f=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"g":"y"),C=new p(v?"^(?:"+l.source+")":l,f),b=void 0===i?_:i>>>0;if(0===b)return[];if(0===u.length)return null===m(C,u)?[u]:[];var x=0,w=0,y=[];while(w<u.length){C.lastIndex=v?0:w;var k,I=m(C,v?u.slice(w):u);if(null===I||(k=g(o(C.lastIndex+(v?w:0)),u.length))===x)w=c(u,w,h);else{if(y.push(u.slice(x,w)),y.length===b)return y;for(var N=1;N<=I.length-1;N++)if(y.push(I[N]),y.length===b)return y;w=x=k}}return y.push(u.slice(x)),y}]}),!f,v)},"13a0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md-layout md-alignment-center",attrs:{id:"collection"}},[s("div",{staticClass:"md-layout-item md-size-100"},[s("md-tabs",{attrs:{"md-elevation":"1","md-alignment":"fixed"}},t._l(t.tempList,(function(e,i){return s("md-tab",{key:i,attrs:{id:"tab-"+e.subhead,"md-label":e.name,"md-icon":a("0a31")("./temp-"+e.subhead+".svg"),"md-dynamic-height":"","md-scrollbar":""},on:{click:function(e){return t.tempShow(i)}}},[t.loading?s("md-empty-state",{attrs:{"md-icon":"submit","md-label":"Loading..."}},[s("md-progress-spinner",{staticClass:"md-accent loading",attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1):s("div",{staticClass:"md-layout md-alignment-center"},[s("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry-container",attrs:{"transition-duration":"0.3s","item-selector":".tempCard","fit-width":"true"}},t._l(t.article,(function(t){return s("TempCardShare",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t._id,staticClass:"tempCard",attrs:{item:t,tempIcon:e.subhead}})})),1)])],1)})),1)],1)])},i=[],r=a("1da1"),n=(a("96cf"),a("d81d"),a("99af"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{attrs:{"md-with-hover":""}},[s("md-card-header",{staticClass:"md-layout"},[s("md-avatar",{staticClass:"md-large md-elevation-5"},[s("img",{attrs:{src:t.item.avatar,alt:"Avatar"}})]),s("div",{staticClass:"md-layout-item md-subhead"},[t._v(t._s(t.item.author))]),s("div",{staticClass:"md-layout-item md-subhead"},[s("md-icon",{attrs:{"md-src":a("0328")}}),s("span",[t._v(t._s(t.item.date))])],1)],1),0===t.item.template?s("md-card-content",[t.item.image?s("md-card-media",[s("img",{attrs:{src:t.item.image,alt:""}})]):t._e(),s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.text)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])],1):t._e(),1===t.item.template?s("md-card-content",[s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.textarea)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])]):t._e(),2===t.item.template?s("md-card-content",[s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-subhead"},[t._v("期限："+t._s(t.item.datepicker))]),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.textarea)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])]):t._e(),3===t.item.template?s("md-card-content",[s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-subhead"},[t._v("期限："+t._s(t.item.datepicker))]),s("div",{staticClass:"md-subhead"},[t._v("心情："+t._s(t.item.select))]),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.textarea)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])]):t._e(),4===t.item.template?s("md-card-content",[s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.textarea)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])]):t._e(),5===t.item.template?s("md-card-content",[t.item.image?s("md-card-media",[s("img",{attrs:{src:t.item.image,alt:""}})]):t._e(),s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-subhead"},[t._v("作者："+t._s(t.item.text))]),s("div",{staticClass:"md-subhead"},[t._v("是否已完結："+t._s(t.item.select))]),s("div",{staticClass:"md-subhead"},[t._v("完結日期："+t._s(t.item.datepicker))]),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.textarea)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])],1):t._e(),6===t.item.template?s("md-card-content",[t.item.image?s("md-card-media",[s("img",{attrs:{src:t.item.image,alt:""}})]):t._e(),s("div",{staticClass:"md-title text-truncate"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"md-subhead"},[t._v("購買日期："+t._s(t.item.datepicker))]),s("div",{staticClass:"md-subhead"},[s("md-icon",[t._v("share_location")]),t._v(" 存放地點："+t._s(t.item.text)+" ")],1),s("div",{staticClass:"md-body-1 text-truncate word-break-all",domProps:{innerHTML:t._s(t.item.textarea)}}),s("span",{staticClass:"md-caption",on:{click:function(e){t.showCardById=!0}}},[t._v("more...")])],1):t._e(),s("md-card-actions",{attrs:{"md-alignment":"space-between"}},[s("md-button",{staticClass:"md-icon-button"},[s("md-icon",{attrs:{"md-src":a("0a31")("./temp-"+t.tempIcon+".svg")}})],1),s("md-speed-dial",{staticClass:"md-bottom-right",attrs:{"md-direction":"top","md-event":"click"}},[s("md-speed-dial-target",{staticClass:"md-dense"},[s("md-icon",{staticClass:"md-morph-initial"},[t._v("add")]),s("md-icon",{staticClass:"md-morph-final"},[t._v("more")])],1),s("md-speed-dial-content",[s("md-button",{staticClass:"md-icon-button md-dense"},[s("md-icon",{attrs:{"md-src":a("9e9c")}}),s("md-tooltip",{attrs:{"md-direction":"right","md-delay":"300"}},[t._v("儲存")])],1),s("md-button",{staticClass:"md-icon-button md-dense"},[s("md-icon",{attrs:{"md-src":a("ae3d")}}),s("md-tooltip",{attrs:{"md-direction":"right","md-delay":"300"}},[t._v("檢舉")])],1),s("md-button",{staticClass:"md-icon-button md-dense",on:{click:t.likeArticle}},[s("md-icon",{attrs:{"md-src":a("fc26")}}),s("md-tooltip",{attrs:{"md-direction":"right","md-delay":"300"}},[t._v("按讚")])],1),s("md-button",{staticClass:"md-icon-button md-dense"},[s("a",{attrs:{href:"http://line.naver.jp/R/msg/text/?DTNS分享吧！–&nbsp;"+t.item.title+"%0D%0Ahttps://showanne.github.io/DTNS"}},[s("md-icon",{attrs:{"md-src":a("97a2")}})],1),s("md-tooltip",{attrs:{"md-direction":"right","md-delay":"300"}},[t._v("分享")])],1)],1)],1)],1),t.showCardById?s("TempCardShowById",{attrs:{showCardById:t.showCardById,tempCardId:t.item._id,tempIcon:t.tempIcon,tempNum:t.item.template},on:{closeModal:function(e){t.showCardById=!1}}}):t._e()],1)}),d=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-dialog",{staticClass:"showCardModal",attrs:{"md-active":t.showCardById,"md-click-outside-to-close":!1,"md-close-on-esc":!1},on:{"update:mdActive":function(e){t.showCardById=e},"update:md-active":function(e){t.showCardById=e}}},[s("md-dialog-content",{staticClass:"md-scrollbar"},[s("md-card",{staticClass:"pt-4"},[s("md-button",{staticClass:"closeBtn w-unset h-unset md-primary",on:{click:t.closeModal}},[s("md-icon",[t._v("close")])],1),s("div",{staticClass:"md-icon-dateL"},[t._v(t._s(t.date))]),0===t.tempNum?s("md-card-content",{staticClass:"card-share"},[t.image?s("md-card-media",[s("img",{attrs:{src:t.image,alt:t.title}})]):t._e(),s("figure",[s("blockquote",[s("p",{staticClass:"text-v-html"},[t._v(t._s(t.title))]),s("figcaption",[s("cite",[t._v(" –– "),s("span",{staticClass:"text-v-html",domProps:{innerHTML:t._s(t.text)}})])])])])],1):t._e(),1===t.tempNum?s("md-card-content",[s("div",{staticClass:"md-title text-v-html"},[t._v(t._s(t.title))]),s("div",{staticClass:"ulListBox"},t._l(t.ulList,(function(e,a){return s("div",{key:a,staticClass:"ulList card-postit text-v-html"},[t._v(t._s(e))])})),0)]):t._e(),2===t.tempNum?s("md-card-content",[s("div",{staticClass:"md-title text-v-html"},[t._v(t._s(t.title))]),s("div",{staticClass:"md-caption text-right"},[t._v("期限："+t._s(t.datepicker))]),s("div",{staticClass:"ulListBox"},t._l(t.ulList,(function(e,a){return s("div",{key:a,staticClass:"ulList card-todo text-v-html"},[t._v(t._s(e))])})),0)]):t._e(),3===t.tempNum?s("md-card-content",[s("div",{staticClass:"md-title text-v-html"},[t._v(t._s(t.title))]),s("div",{staticClass:"md-caption text-right"},[t._v("日期："+t._s(t.datepicker))]),s("div",{staticClass:"md-caption text-right"},[t._v("心情："+t._s(t.select))]),s("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.textarea)}})]):t._e(),4===t.tempNum?s("md-card-content",[s("div",{staticClass:"md-title text-v-html"},[t._v(t._s(t.title))]),s("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.textarea)}})]):t._e(),5===t.tempNum?s("md-card-content",[s("div",{staticClass:"md-title text-v-html"},[t._v(t._s(t.title))]),s("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s("作者："+t.text)}}),s("div",{staticClass:"md-caption text-right"},[t._v("完結日期："+t._s(t.datepicker))]),s("div",{staticClass:"md-caption text-right"},[t._v("是否已完結："+t._s(t.select))]),t.image?s("md-card-media",[s("img",{staticClass:"w-50",attrs:{src:t.image,alt:t.title}})]):t._e(),s("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.textarea)}})],1):t._e(),6===t.tempNum?s("md-card-content",[s("div",{staticClass:"md-title text-v-html"},[t._v(t._s(t.title))]),s("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s("存放地點："+t.text)}}),s("div",{staticClass:"md-caption text-right"},[t._v("購買日期："+t._s(t.datepicker))]),t.image?s("md-card-media",[s("img",{attrs:{src:t.image,alt:t.title}})]):t._e(),s("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s("物品狀況描述："+t.textarea)}})],1):t._e()],1)],1),s("md-dialog-actions",{staticClass:"md-layout md-alignment-space-around-center"},[s("md-button",{staticClass:"md-layout-item md-size-33 md-layout-nowrap w-unset"},[s("md-avatar",{staticClass:"md-small md-elevation-3 mr-2"},[s("img",{attrs:{src:t.avatar,alt:t.author}})]),s("span",{staticClass:"md-subhead"},[t._v(t._s(t.author))])],1),s("md-button",{staticClass:"md-layout-item md-layout-nowrap w-unset min-w-unset"},[s("md-icon",{attrs:{"md-src":a("9e9c")}})],1),s("md-button",{staticClass:"md-layout-item md-layout-nowrap w-unset min-w-unset"},[s("md-icon",{attrs:{"md-src":a("ae3d")}})],1),s("md-button",{staticClass:"md-layout-item md-layout-nowrap w-unset min-w-unset"},[s("md-icon",{attrs:{"md-src":a("fc26")}})],1),s("md-button",{staticClass:"md-layout-item md-layout-nowrap w-unset min-w-unset"},[s("a",{attrs:{href:"http://line.naver.jp/R/msg/text/?DTNS分享吧！–&nbsp;"+t.title+"%0D%0Ahttps://showanne.github.io/DTNS"}},[s("md-icon",{attrs:{"md-src":a("97a2")}})],1)])],1)],1)},o=[],m=(a("a9e3"),a("ac1f"),a("1276"),{name:"TempCardShowById",data:function(){return{id:"",template:0,title:"",author:"",image:"",textarea:"",text:"",select:"",datepicker:"",date:"",ulList:[]}},components:{},props:{showCardById:{type:Boolean,required:!0},tempCardId:{type:String,required:!0},tempIcon:{type:String,required:!0},tempNum:{type:Number,required:!0}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/article/"+t.tempCardId);case 3:a=e.sent,s=a.data,t.id=t.tempCardId,t.template=s.result.template,t.title=s.result.title,t.author=s.result.author,t.avatar=s.result.avatar,s.result.image&&(t.image="".concat("https://dtns-web.herokuapp.com","/file/").concat(s.result.image)),t.textarea=s.result.textarea,t.text=s.result.text,t.select=s.result.select,t.datepicker=new Date(s.result.datepicker).toLocaleDateString(),t.date=new Date(s.result.date).toLocaleDateString(),1!==s.result.template&&2!==s.result.template||(t.ulList=s.result.textarea.split("\n").map((function(t){return t}))),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](0),t.$router.push("/collection");case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()},methods:{closeModal:function(){this.$emit("closeModal")}}}),l=m,u=a("2877"),p=Object(u["a"])(l,c,o,!1,null,null,null),v=p.exports,h={name:"TempCardShare",data:function(){return{showCardById:!1}},components:{TempCardShowById:v},props:{item:{type:Object,required:!0},tempIcon:{type:String,required:!0}},methods:{}},g=h,_=Object(u["a"])(g,n,d,!1,null,null,null),f=_.exports,C={name:"Collection",components:{TempCardShare:f},data:function(){return{tempCardShow:0,article:[],loading:!1}},methods:{tempShow:function(t){console.log("Collection "+t),this.tempCardShow=t}},watch:{tempCardShow:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.axios.get("/article/template/"+this.tempCardShow);case 4:e=t.sent,a=e.data,this.article=a.result.map((function(t){return t.image&&(t.image="".concat("https://dtns-web.herokuapp.com","/file/").concat(t.image)),(t.datepicker||t.date)&&(t.datepicker=new Date(t.datepicker).toLocaleDateString(),t.date=new Date(t.date).toLocaleDateString()),t})),this.$redrawVueMasonry(),this.loading=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,this,[[1,11]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.axios.get("/article/template/"+t.tempCardShow);case 4:a=e.sent,s=a.data,t.article=s.result.map((function(t){return t.image&&(t.image="".concat("https://dtns-web.herokuapp.com","/file/").concat(t.image)),(t.datepicker||t.date)&&(t.datepicker=new Date(t.datepicker).toLocaleDateString(),t.date=new Date(t.date).toLocaleDateString()),t})),t.$redrawVueMasonry(),t.loading=!1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()}},b=C,x=Object(u["a"])(b,s,i,!1,null,null,null);e["default"]=x.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),i=a("5899"),r="["+i+"]",n=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),c=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(d,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},6059:function(t,e,a){t.exports=a.p+"img/temp-share.5f34bd92.svg"},7156:function(t,e,a){var s=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,n;return i&&"function"==typeof(r=e.constructor)&&r!==a&&s(n=r.prototype)&&n!==a.prototype&&i(t,n),t}},"83e2":function(t,e,a){t.exports=a.p+"img/temp-storage.0cc1010c.svg"},a9e3:function(t,e,a){"use strict";var s=a("83ab"),i=a("da84"),r=a("94ca"),n=a("6eeb"),d=a("5135"),c=a("c6b6"),o=a("7156"),m=a("c04e"),l=a("d039"),u=a("7c73"),p=a("241c").f,v=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,_="Number",f=i[_],C=f.prototype,b=c(u(C))==_,x=function(t){var e,a,s,i,r,n,d,c,o=m(t,!1);if("string"==typeof o&&o.length>2)if(o=g(o),e=o.charCodeAt(0),43===e||45===e){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+o}for(r=o.slice(2),n=r.length,d=0;d<n;d++)if(c=r.charCodeAt(d),c<48||c>i)return NaN;return parseInt(r,s)}return+o};if(r(_,!f(" 0o1")||!f("0b1")||f("+0x1"))){for(var w,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(b?l((function(){C.valueOf.call(a)})):c(a)!=_)?o(new f(x(e)),a,y):x(e)},k=s?p(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)d(f,w=k[I])&&!d(y,w)&&h(y,w,v(f,w));y.prototype=C,C.constructor=y,n(i,_,y)}},ae3d:function(t,e,a){t.exports=a.p+"img/action-report.6be8afee.svg"},b1ce:function(t,e,a){t.exports=a.p+"img/temp-postIt.7a1b4200.svg"},b427:function(t,e,a){t.exports=a.p+"img/temp-diary.12c365bd.svg"},bfb4:function(t,e,a){t.exports=a.p+"img/temp-todo.624bae4f.svg"},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,r=a("1dde"),n=r("map");s({target:"Array",proto:!0,forced:!n},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dc1a:function(t,e,a){t.exports=a.p+"img/temp-notes.449b4d69.svg"},ef77:function(t,e,a){t.exports=a.p+"img/temp-novel.08e150f8.svg"},fc26:function(t,e,a){t.exports=a.p+"img/action-good.3bb245ab.svg"}}]);
//# sourceMappingURL=collection.d9d9d39b.js.map