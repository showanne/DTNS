(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),s=n("825a"),r=n("1d80"),c=n("4840"),o=n("8aa5"),l=n("50c4"),d=n("14c3"),u=n("9263"),m=n("9f7f"),p=n("d039"),v=m.UNSUPPORTED_Y,f=[].push,g=Math.min,h=4294967295,b=!p((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(r(this)),s=void 0===n?h:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,s);var c,o,l,d=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,m+"g");while(c=u.call(v,a)){if(o=v.lastIndex,o>p&&(d.push(a.slice(p,c.index)),c.length>1&&c.index<a.length&&f.apply(d,c.slice(1)),l=c[0].length,p=o,d.length>=s))break;v.lastIndex===c.index&&v.lastIndex++}return p===a.length?!l&&v.test("")||d.push(""):d.push(a.slice(p)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,n):a.call(String(i),e,n)},function(t,i){var r=n(a,this,t,i,a!==e);if(r.done)return r.value;var u=s(this),m=String(t),p=c(u,RegExp),f=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"g":"y"),_=new p(v?"^(?:"+u.source+")":u,b),C=void 0===i?h:i>>>0;if(0===C)return[];if(0===m.length)return null===d(_,m)?[m]:[];var x=0,y=0,I=[];while(y<m.length){_.lastIndex=v?0:y;var A,F=d(_,v?m.slice(y):m);if(null===F||(A=g(l(_.lastIndex+(v?y:0)),m.length))===x)y=o(m,y,f);else{if(I.push(m.slice(x,y)),I.length===C)return I;for(var k=1;k<=F.length-1;k++)if(I.push(F[k]),I.length===C)return I;y=x=A}}return I.push(m.slice(x)),I}]}),!b,v)},"397a":function(t,e,n){t.exports=n.p+"img/action-addContact.a6a668f1.svg"},"52fe":function(t,e,n){"use strict";n("aa72")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),i=n("5899"),s="["+i+"]",r=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5b14":function(t,e,n){},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var s,r;return i&&"function"==typeof(s=e.constructor)&&s!==n&&a(r=s.prototype)&&r!==n.prototype&&i(t,r),t}},"7d62":function(t,e,n){t.exports=n.p+"img/question.5168cfcf.svg"},8402:function(t,e,n){"use strict";n("5b14")},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),s=n("94ca"),r=n("6eeb"),c=n("5135"),o=n("c6b6"),l=n("7156"),d=n("c04e"),u=n("d039"),m=n("7c73"),p=n("241c").f,v=n("06cf").f,f=n("9bf2").f,g=n("58a8").trim,h="Number",b=i[h],_=b.prototype,C=o(m(_))==h,x=function(t){var e,n,a,i,s,r,c,o,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(s=l.slice(2),r=s.length,c=0;c<r;c++)if(o=s.charCodeAt(c),o<48||o>i)return NaN;return parseInt(s,a)}return+l};if(s(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(C?u((function(){_.valueOf.call(n)})):o(n)!=h)?l(new b(x(e)),n,I):x(e)},A=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;A.length>F;F++)c(b,y=A[F])&&!c(I,y)&&f(I,y,v(b,y));I.prototype=_,_.constructor=I,r(i,h,I)}},aa72:function(t,e,n){},b8fa:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("md-button",{staticClass:"md-raised md-fab md-fab-bottom-right",on:{click:function(e){t.contactBtn=!0}}},[a("md-icon",{staticClass:"md-size-2x",attrs:{"md-src":n("397a")}})],1),a("md-dialog",{attrs:{"md-active":t.contactBtn},on:{"update:mdActive":function(e){t.contactBtn=e},"update:md-active":function(e){t.contactBtn=e}}},[t.sending?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),a("md-button",{staticClass:"closeBtn w-unset h-unset md-primary",on:{click:function(e){t.contactBtn=!1}}},[a("md-icon",[t._v("close")])],1),a("md-dialog-title",{staticClass:"text-center"},[t._v("聯絡我們")]),a("md-dialog-content",{staticClass:"md-scrollbar"},[a("form",{staticClass:"w-contact-modal",on:{submit:function(e){return e.preventDefault(),t.submitIssue.apply(null,arguments)},reset:t.clearForm}},[a("md-field",{staticClass:"md-form-group"},[a("label",[a("md-icon",[t._v("help_outline")]),t._v(" 主要問題... ")],1),a("md-select",{attrs:{name:"majorIssue",required:""},model:{value:t.contactForm.majorIssue,callback:function(e){t.$set(t.contactForm,"majorIssue",e)},expression:"contactForm.majorIssue"}},[a("md-option"),a("md-option",{attrs:{value:"編輯權限"}},[t._v("編輯權限")]),a("md-option",{attrs:{value:"網頁功能"}},[t._v("網頁功能")]),a("md-option",{attrs:{value:"文章編輯"}},[t._v("文章編輯")]),a("md-option",{attrs:{value:"其他"}},[t._v("其他")])],1)],1),a("md-field",{staticClass:"md-form-group"},[a("md-icon",[t._v("face")]),a("label",[t._v("您的暱稱...")]),a("md-input",{attrs:{required:""},model:{value:t.contactForm.nickname,callback:function(e){t.$set(t.contactForm,"nickname",e)},expression:"contactForm.nickname"}})],1),a("md-field",{staticClass:"md-form-group"},[a("label",[t._v("問題描述 ...")]),a("md-textarea",{attrs:{"md-counter":"40",required:""},model:{value:t.contactForm.issueDescription,callback:function(e){t.$set(t.contactForm,"issueDescription",e)},expression:"contactForm.issueDescription"}}),t.$v.contactForm.issueDescription.required?t.$v.contactForm.issueDescription.maxlength?t._e():a("span",{staticClass:"md-error"},[t._v("最少須 1 個字，至多 40 個字")]):a("span",{staticClass:"md-error"},[t._v("必填欄位")])],1),a("div",{staticClass:"md-layout md-alignment-center-space-between"},[a("md-button",{staticClass:"md-layout-item md-size-45 md-raised md-primary",attrs:{type:"reset",disabled:t.sending}},[t._v(" 重設 ")]),a("md-button",{staticClass:"md-layout-item md-size-45 md-raised md-accent",attrs:{type:"submit",disabled:t.sending}},[t._v(" 送出 ")])],1)],1)])],1),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100  md-xsmall-size-100",attrs:{id:"question"}},[a("div",{staticClass:"md-headline"},[t._v(" 常見問題 ")]),a("accordion",[a("accordion-item",[a("template",{slot:"accordion-trigger"},[a("div",{staticClass:"md-subheading"},[a("md-icon",{attrs:{"md-src":n("7d62")}}),t._v(" 為什麼我只能編輯2個模板？ ")],1)]),a("template",{slot:"accordion-content"},[a("span",[t._v("需登入解鎖更多模板唷 ^^")])])],2),a("accordion-item",[a("template",{slot:"accordion-trigger"},[a("div",{staticClass:"md-subheading"},[a("md-icon",{attrs:{"md-src":n("7d62")}}),t._v(" 我該如何看到我剛新增的文章？ ")],1)]),a("template",{slot:"accordion-content"},[a("span",[a("ol",[a("li",[t._v("最新編輯會在 "),a("router-link",{attrs:{to:"/collection"}},[t._v("分享牆")]),t._v(" 隨機出現唷 ^^")],1),a("li",[t._v("或是可以到會員中心的文章管理去檢視文章唷 ^^")])])])])],2),a("accordion-item",[a("template",{slot:"accordion-trigger"},[a("div",{staticClass:"md-subheading"},[a("md-icon",{attrs:{"md-src":n("7d62")}}),t._v(" 還沒打完不小心按到送出，該如何修改？ ")],1)]),a("template",{slot:"accordion-content"},[a("span",[a("ul",[a("li",[t._v("如果您是會員，可以到會員中心的文章管理去編輯文章")]),a("li",[t._v("如果您不是會員，目前不支援對已送出的文章進行再編輯的唷！")])])])])],2)],1)],1),a("div",{staticClass:"md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100",attrs:{id:"questionCard"}},[a("div",{staticClass:"md-headline"},[t._v(" 問題討論 ")]),t.loading?a("md-empty-state",{attrs:{"md-icon":"submit","md-label":"Loading..."}},[a("md-progress-spinner",{staticClass:"md-accent loading",attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1):a("div",{staticClass:"md-layout md-alignment-space-around-left"},t._l(t.questionCardReply,(function(e,n){return a("div",{key:n,staticClass:"md-layout-item md-large-size-50 md-medium-size-50 md-small-size-95 md-xsmall-size-100"},[a("md-card",{staticClass:"md-accent"},[a("md-card-content",{staticClass:"md-layout md-alignment-center"},[a("div",{staticClass:"md-layout-item md-size-15"},[a("Avatar",{staticClass:"md-large md-elevation-5"})],1),a("div",{staticClass:"md-layout-item md-size-85"},[a("div",{staticClass:"md-layout md-alignment-center-space-between"},[a("div",{staticClass:"md-title lh-4"},[t._v(" "+t._s(e.nickname)+" "),a("span",{staticClass:"md-caption"},[t._v("#"+t._s(n+1))])]),a("div",{staticClass:"md-subhead"},[t._v(" "+t._s(e.date)+" ")])]),a("div",{staticClass:"md-subheading text-v-html",domProps:{innerHTML:t._s(e.issueDescription)}}),a("div",{staticClass:"text-support"},[a("md-icon",{staticClass:"mr-2"},[t._v("support_agent")]),e.replyIssue?a("span",[t._v(t._s(e.replyIssue))]):a("span",[t._v("...工程師正在處理中")])],1)])])],1)],1)})),0)],1)])],1)},i=[],s=n("1da1"),r=(n("d81d"),n("ac1f"),n("1276"),n("96cf"),n("1dce")),c=n("b5ae"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-avatar",[n("img",{staticClass:"avatar",attrs:{src:"https://source.boringavatars.com/"+t.variant+"/"+t.size+"/?colors="+t.colors[t.random()]+","+t.colors[t.random()],alt:"Avatar"}})])},l=[],d=(n("a9e3"),{name:"Avatar",props:{size:{type:Number,default:80},variant:{type:String,default:"beam"},address:{type:String,require:!0},colors:{type:Array,default:function(){return["3B4058","2A6E78","7A907C","C9B180","3E6B48","B5B479","F7E6A6"]}}},computed:{user:function(){return this.$store.state.user}},methods:{random:function(){return Math.floor(7*Math.random())}}}),u=d,m=(n("52fe"),n("2877")),p=Object(m["a"])(u,o,l,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"accordion"},[t._t("default")],2)},g=[],h={name:"Accordion",props:{},data:function(){return{Accordion:{count:0,active:null}}},provide:function(){return{Accordion:this.Accordion}}},b=h,_=Object(m["a"])(b,f,g,!1,null,null,null),C=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"accordion__item"},[n("div",{staticClass:"accordion__trigger",class:{accordion__trigger_active:t.visible},on:{click:t.open}},[t._t("accordion-trigger")],2),n("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start,"after-leave":t.end}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"accordion__content"},[n("ul",[t._t("accordion-content")],2)])])],1)},y=[],I={name:"AccordionItem",props:{},inject:["Accordion"],data:function(){return{index:null}},computed:{visible:function(){return this.index===this.Accordion.active}},methods:{open:function(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start:function(t){t.style.height=t.scrollHeight+"px"},end:function(t){t.style.height=""}},created:function(){this.index=this.Accordion.count++}},A=I,F=(n("8402"),Object(m["a"])(A,x,y,!1,null,"3d6a2ca1",null)),k=F.exports,w={name:"Contact",mixins:[r["validationMixin"]],data:function(){return{contactBtn:!1,contactForm:{majorIssue:"",nickname:"",issueDescription:"",date:Date.now()},questionCardReply:{majorIssue:"",nickname:"",issueDescription:"",replyIssue:"",date:""},sending:!1,loading:!1}},validations:{contactForm:{issueDescription:{required:c["required"],maxLength:Object(c["maxLength"])(40),minLength:Object(c["minLength"])(1)}}},components:{Avatar:v,Accordion:C,AccordionItem:k},methods:{submitIssue:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.sending=!0,e.next=3,t.axios.post("/issue",t.contactForm);case 3:t.questionCardReply.push({majorIssue:t.contactForm.majorIssue,nickname:t.contactForm.nickname,issueDescription:t.contactForm.issueDescription,replyIssue:"",date:t.contactForm.date}),t.sending=!1,t.contactBtn=!1,t.clearForm();case 7:case"end":return e.stop()}}),e)})))()},clearForm:function(){this.contactForm={majorIssue:"",nickname:"",issueDescription:""}}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.axios.get("/issue");case 4:n=e.sent,a=n.data,t.questionCardReply=a.result.map((function(t){return t.date&&(t.date=new Date(t.date).toISOString().split("T")[0]),t})),t.loading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},E=w,N=Object(m["a"])(E,a,i,!1,null,null,null);e["default"]=N.exports},d81d:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").map,s=n("1dde"),r=s("map");a({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=contact.9ab9c08a.js.map