(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"397a":function(t,e,a){t.exports=a.p+"img/action-addContact.a6a668f1.svg"},"52fe":function(t,e,a){"use strict";a("aa72")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),s="["+i+"]",r=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5b14":function(t,e,a){},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var s,r;return i&&"function"==typeof(s=e.constructor)&&s!==a&&n(r=s.prototype)&&r!==a.prototype&&i(t,r),t}},"7d62":function(t,e,a){t.exports=a.p+"img/question.5168cfcf.svg"},8402:function(t,e,a){"use strict";a("5b14")},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),s=a("94ca"),r=a("6eeb"),o=a("5135"),c=a("c6b6"),d=a("7156"),l=a("c04e"),m=a("d039"),u=a("7c73"),p=a("241c").f,v=a("06cf").f,f=a("9bf2").f,g=a("58a8").trim,_="Number",b=i[_],h=b.prototype,C=c(u(h))==_,x=function(t){var e,a,n,i,s,r,o,c,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=g(d),e=d.charCodeAt(0),43===e||45===e){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+d}for(s=d.slice(2),r=s.length,o=0;o<r;o++)if(c=s.charCodeAt(o),c<48||c>i)return NaN;return parseInt(s,n)}return+d};if(s(_,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,A=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof A&&(C?m((function(){h.valueOf.call(a)})):c(a)!=_)?d(new b(x(e)),a,A):x(e)},I=n?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;I.length>k;k++)o(b,y=I[k])&&!o(A,y)&&f(A,y,v(b,y));A.prototype=h,h.constructor=A,r(i,_,A)}},aa72:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact"}},[n("md-button",{staticClass:"md-raised md-fab md-fab-bottom-right",on:{click:function(e){t.contactBtn=!0}}},[n("md-icon",{staticClass:"md-size-2x",attrs:{"md-src":a("397a")}})],1),n("md-dialog",{attrs:{"md-active":t.contactBtn},on:{"update:mdActive":function(e){t.contactBtn=e},"update:md-active":function(e){t.contactBtn=e}}},[t.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),n("md-dialog-title",{staticClass:"text-center"},[t._v("聯絡我們")]),n("md-dialog-content",{staticClass:"md-scrollbar"},[n("form",{staticClass:"w-contact-modal",on:{submit:function(e){return e.preventDefault(),t.submitIssue.apply(null,arguments)},reset:t.clearForm}},[n("md-field",{staticClass:"md-form-group"},[n("label",[n("md-icon",[t._v("help_outline")]),t._v(" 主要問題... ")],1),n("md-select",{attrs:{name:"majorIssue",required:""},model:{value:t.contactForm.majorIssue,callback:function(e){t.$set(t.contactForm,"majorIssue",e)},expression:"contactForm.majorIssue"}},[n("md-option"),n("md-option",{attrs:{value:"編輯權限"}},[t._v("編輯權限")]),n("md-option",{attrs:{value:"網頁功能"}},[t._v("網頁功能")]),n("md-option",{attrs:{value:"文章編輯"}},[t._v("文章編輯")]),n("md-option",{attrs:{value:"其他"}},[t._v("其他")])],1)],1),n("md-field",{staticClass:"md-form-group"},[n("md-icon",[t._v("face")]),n("label",[t._v("您的暱稱...")]),n("md-input",{attrs:{required:""},model:{value:t.contactForm.nickname,callback:function(e){t.$set(t.contactForm,"nickname",e)},expression:"contactForm.nickname"}})],1),n("md-field",{staticClass:"md-form-group"},[n("label",[t._v("問題描述 ...")]),n("md-textarea",{attrs:{"md-counter":"40",required:""},model:{value:t.contactForm.issueDescription,callback:function(e){t.$set(t.contactForm,"issueDescription",e)},expression:"contactForm.issueDescription"}}),t.$v.contactForm.issueDescription.required?t.$v.contactForm.issueDescription.maxlength?t._e():n("span",{staticClass:"md-error"},[t._v("最少須 1 個字，至多 40 個字")]):n("span",{staticClass:"md-error"},[t._v("必填欄位")])],1),n("div",{staticClass:"md-layout md-alignment-center-space-between"},[n("md-button",{staticClass:"md-layout-item md-size-45 md-raised md-primary",attrs:{type:"reset",disabled:t.sending}},[t._v(" 重設 ")]),n("md-button",{staticClass:"md-layout-item md-size-45 md-raised md-accent",attrs:{type:"submit",disabled:t.sending}},[t._v(" 送出 ")])],1)],1)])],1),n("div",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100  md-xsmall-size-100",attrs:{id:"question"}},[n("div",{staticClass:"md-headline"},[t._v(" 常見問題 ")]),n("accordion",[n("accordion-item",[n("template",{slot:"accordion-trigger"},[n("div",{staticClass:"md-subheading"},[n("md-icon",{attrs:{"md-src":a("7d62")}}),t._v(" 為什麼我只能編輯2個模板？ ")],1)]),n("template",{slot:"accordion-content"},[n("span",[t._v("需登入解鎖更多模板唷 ^^")])])],2),n("accordion-item",[n("template",{slot:"accordion-trigger"},[n("div",{staticClass:"md-subheading"},[n("md-icon",{attrs:{"md-src":a("7d62")}}),t._v(" 我該如何看到我剛新增的文章？ ")],1)]),n("template",{slot:"accordion-content"},[n("span",[n("ol",[n("li",[t._v("最新編輯會在 "),n("router-link",{attrs:{to:"/collection"}},[t._v("分享牆")]),t._v(" 隨機出現唷 ^^")],1),n("li",[t._v("或是可以到會員中心的文章管理去檢視文章唷 ^^")])])])])],2),n("accordion-item",[n("template",{slot:"accordion-trigger"},[n("div",{staticClass:"md-subheading"},[n("md-icon",{attrs:{"md-src":a("7d62")}}),t._v(" 還沒打完不小心按到送出，該如何修改？ ")],1)]),n("template",{slot:"accordion-content"},[n("span",[n("ul",[n("li",[t._v("如果您是會員，可以到會員中心的文章管理去編輯文章")]),n("li",[t._v("如果您不是會員，目前不支援對已送出的文章進行再編輯的唷！")])])])])],2)],1)],1),n("div",{staticClass:"md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100",attrs:{id:"questionCard"}},[n("div",{staticClass:"md-headline"},[t._v(" 問題討論 ")]),t.loading?n("md-empty-state",{attrs:{"md-icon":"submit","md-label":"Loading..."}},[n("md-progress-spinner",{staticClass:"md-accent loading",attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1):n("div",{staticClass:"md-layout md-alignment-space-around-left"},t._l(t.questionCardReply,(function(e,a){return n("div",{key:a,staticClass:"md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100"},[n("md-card",{staticClass:"md-accent"},[n("md-card-content",{staticClass:"md-layout md-alignment-center"},[n("div",{staticClass:"md-layout-item md-size-15"},[n("Avatar",{staticClass:"md-large md-elevation-5"})],1),n("div",{staticClass:"md-layout-item md-size-85"},[n("div",{staticClass:"md-layout md-alignment-center-space-between"},[n("div",{staticClass:"md-title"},[t._v(" "+t._s(e.nickname)+" "),n("span",{staticClass:"md-caption"},[t._v("#"+t._s(a+1))])]),n("div",{staticClass:"md-subhead"},[t._v(" "+t._s(e.date)+" ")])]),n("div",{staticClass:"md-subheading text-v-html",domProps:{innerHTML:t._s(e.issueDescription)}}),e.replyIssue?n("div",{staticClass:"md-body-2 mt-large-3",staticStyle:{"margin-top":"0.8rem",color:"darkkhaki"}},[n("md-icon",[t._v("support_agent")]),t._v(" "+t._s(e.replyIssue)+" ")],1):t._e()])])],1)],1)})),0)],1)])],1)},i=[],s=a("1da1"),r=(a("d81d"),a("96cf"),a("1dce")),o=a("b5ae"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-avatar",[a("img",{staticClass:"avatar",attrs:{src:"https://source.boringavatars.com/"+t.variant+"/"+t.size+"/?colors="+t.colors[t.random()]+","+t.colors[t.random()],alt:"Avatar"}})])},d=[],l=(a("a9e3"),{name:"Avatar",props:{size:{type:Number,default:80},variant:{type:String,default:"beam"},address:{type:String,require:!0},colors:{type:Array,default:function(){return["3B4058","2A6E78","7A907C","C9B180","3E6B48","B5B479","F7E6A6"]}}},computed:{user:function(){return this.$store.state.user}},methods:{random:function(){return Math.floor(7*Math.random())}}}),m=l,u=(a("52fe"),a("2877")),p=Object(u["a"])(m,c,d,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"accordion"},[t._t("default")],2)},g=[],_={name:"Accordion",props:{},data:function(){return{Accordion:{count:0,active:null}}},provide:function(){return{Accordion:this.Accordion}}},b=_,h=Object(u["a"])(b,f,g,!1,null,null,null),C=h.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"accordion__item"},[a("div",{staticClass:"accordion__trigger",class:{accordion__trigger_active:t.visible},on:{click:t.open}},[t._t("accordion-trigger")],2),a("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start,"after-leave":t.end}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"accordion__content"},[a("ul",[t._t("accordion-content")],2)])])],1)},y=[],A={name:"AccordionItem",props:{},inject:["Accordion"],data:function(){return{index:null}},computed:{visible:function(){return this.index===this.Accordion.active}},methods:{open:function(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start:function(t){t.style.height=t.scrollHeight+"px"},end:function(t){t.style.height=""}},created:function(){this.index=this.Accordion.count++}},I=A,k=(a("8402"),Object(u["a"])(I,x,y,!1,null,"3d6a2ca1",null)),F=k.exports,w={name:"Contact",mixins:[r["validationMixin"]],data:function(){return{contactBtn:!1,contactForm:{majorIssue:"",nickname:"",issueDescription:"",date:Date.now()},questionCardReply:{majorIssue:"",nickname:"",issueDescription:"",replyIssue:"",date:""},sending:!1,loading:!1}},validations:{contactForm:{issueDescription:{required:o["required"],maxLength:Object(o["maxLength"])(40),minLength:Object(o["minLength"])(1)}}},components:{Avatar:v,Accordion:C,AccordionItem:F},methods:{submitIssue:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.sending=!0,e.next=3,t.axios.post("/issue",t.contactForm);case 3:t.sending=!1,t.contactBtn=!1,t.clearForm(),t.$router.go();case 7:case"end":return e.stop()}}),e)})))()},clearForm:function(){this.contactForm={majorIssue:"",nickname:"",issueDescription:""}}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.axios.get("/issue");case 4:a=e.sent,n=a.data,t.questionCardReply=n.result.map((function(t){return t.date&&(t.datepicker=new Date(t.datepicker).toLocaleDateString(),t.date=new Date(t.date).toLocaleDateString()),t})),t.loading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},E=w,N=Object(u["a"])(E,n,i,!1,null,null,null);e["default"]=N.exports},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,s=a("1dde"),r=s("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=contact.0734f5b9.js.map