(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"397a":function(t,a,e){t.exports=e.p+"img/action-addContact.a6a668f1.svg"},"52fe":function(t,a,e){"use strict";e("aa72")},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,e){var s=e("1d80"),i=e("5899"),c="["+i+"]",n=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),r=function(t){return function(a){var e=String(s(a));return 1&t&&(e=e.replace(n,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:r(1),end:r(2),trim:r(3)}},"5b14":function(t,a,e){},7156:function(t,a,e){var s=e("861d"),i=e("d2bb");t.exports=function(t,a,e){var c,n;return i&&"function"==typeof(c=a.constructor)&&c!==e&&s(n=c.prototype)&&n!==e.prototype&&i(t,n),t}},"7d62":function(t,a,e){t.exports=e.p+"img/question.5168cfcf.svg"},8402:function(t,a,e){"use strict";e("5b14")},a9e3:function(t,a,e){"use strict";var s=e("83ab"),i=e("da84"),c=e("94ca"),n=e("6eeb"),o=e("5135"),r=e("c6b6"),d=e("7156"),l=e("c04e"),m=e("d039"),u=e("7c73"),v=e("241c").f,p=e("06cf").f,f=e("9bf2").f,g=e("58a8").trim,C="Number",_=i[C],b=_.prototype,h=r(u(b))==C,y=function(t){var a,e,s,i,c,n,o,r,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=g(d),a=d.charCodeAt(0),43===a||45===a){if(e=d.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(d.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+d}for(c=d.slice(2),n=c.length,o=0;o<n;o++)if(r=c.charCodeAt(o),r<48||r>i)return NaN;return parseInt(c,s)}return+d};if(c(C,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var A,x=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof x&&(h?m((function(){b.valueOf.call(e)})):r(e)!=C)?d(new _(y(a)),e,x):y(a)},z=s?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;z.length>I;I++)o(_,A=z[I])&&!o(x,A)&&f(x,A,p(_,A));x.prototype=b,b.constructor=x,n(i,C,x)}},aa72:function(t,a,e){},b8fa:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"contact"}},[s("md-button",{staticClass:"md-raised md-fab md-fab-bottom-right",on:{click:function(a){t.contactBtn=!0}}},[s("md-icon",{staticClass:"md-size-2x",attrs:{"md-src":e("397a")}})],1),s("md-dialog",{attrs:{"md-active":t.contactBtn},on:{"update:mdActive":function(a){t.contactBtn=a},"update:md-active":function(a){t.contactBtn=a}}},[s("md-dialog-title",{staticStyle:{"text-align":"center"}},[t._v("contact us")]),s("md-dialog-content",{staticClass:"md-scrollbar"},[s("form",{staticClass:"w-contact-modal"},[s("md-field",{staticClass:"md-form-group"},[s("label",[t._v("Major Issue...")]),s("md-select",{attrs:{name:"majorIssue",placeholder:"MajorIssue"},model:{value:t.contactForm.majorIssue,callback:function(a){t.$set(t.contactForm,"majorIssue",a)},expression:"contactForm.majorIssue"}},[s("md-option",{attrs:{value:"1"}},[t._v("1")]),s("md-option",{attrs:{value:"2"}},[t._v("2")]),s("md-option",{attrs:{value:"3"}},[t._v("3")])],1)],1),s("md-field",{staticClass:"md-form-group"},[s("md-icon",[t._v("face")]),s("label",[t._v("Your Account...")]),s("md-input",{model:{value:t.contactForm.account,callback:function(a){t.$set(t.contactForm,"account",a)},expression:"contactForm.account"}})],1),s("md-field",{staticClass:"md-form-group"},[s("md-icon",[t._v("phone")]),s("label",[t._v("Contact Data...")]),s("md-input",{attrs:{type:"contactData"},model:{value:t.contactForm.contactData,callback:function(a){t.$set(t.contactForm,"contactData",a)},expression:"contactForm.contactData"}})],1),s("md-field",{staticClass:"md-form-group"},[s("label",[t._v("Issue description ...")]),s("md-textarea",{model:{value:t.contactForm.issueDescription,callback:function(a){t.$set(t.contactForm,"issueDescription",a)},expression:"contactForm.issueDescription"}})],1),s("div",{staticClass:"md-layout md-alignment-center-space-between"},[s("md-button",{staticClass:" md-layout-item md-size-45 md-raised md-primary",attrs:{type:"reset"}},[t._v(" reset ")]),s("md-button",{staticClass:" md-layout-item md-size-45 md-raised md-accent",attrs:{type:"submit"}},[t._v(" submit ")])],1)],1)])],1),s("div",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item md-large-size-33 md-medium-size-33 md-small-size-100  md-xsmall-size-100"},[s("div",{staticClass:"md-headline"},[t._v("常見問題")]),s("accordion",[s("accordion-item",[s("template",{slot:"accordion-trigger"},[s("div",{staticClass:"md-subheading"},[s("md-icon",{attrs:{"md-src":e("7d62")}}),t._v(" 為什麼我只能編輯2個模板？ ")],1)]),s("template",{slot:"accordion-content"},[s("span",[t._v("需登入解鎖更多模板唷 ^^")])])],2),s("accordion-item",[s("template",{slot:"accordion-trigger"},[s("div",{staticClass:"md-subheading"},[s("md-icon",{attrs:{"md-src":e("7d62")}}),t._v(" 我該如何看到我剛新增的文章？ ")],1)]),s("template",{slot:"accordion-content"},[s("span",[s("ol",[s("li",[t._v("最新編輯會在 "),s("router-link",{attrs:{to:"/collection"}},[t._v("分享牆")]),t._v(" 隨機出現唷 ^^")],1),s("li",[t._v("或是可以到會員中心的文章管理去檢視文章唷 ^^")])])])])],2),s("accordion-item",[s("template",{slot:"accordion-trigger"},[s("div",{staticClass:"md-subheading"},[s("md-icon",{attrs:{"md-src":e("7d62")}}),t._v(" 還沒打完不小心按到送出，該如何修改？ ")],1)]),s("template",{slot:"accordion-content"},[s("span",[s("ul",[s("li",[t._v("如果您是會員，可以到會員中心的文章管理去編輯文章")]),s("li",[t._v("如果您不是會員，目前不支援對已送出的文章進行再編輯的唷！")])])])])],2)],1)],1),s("div",{staticClass:"md-layout-item md-large-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100"},[s("div",{staticClass:"md-layout md-alignment-center",staticStyle:{"flex-direction":"column"}},[s("div",{staticClass:"md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100"},[s("md-card",{staticClass:"md-accent",attrs:{"md-with-hover":""}},[s("md-card-content",{staticClass:"md-layout md-alignment-center"},[s("div",{staticClass:"md-layout-item md-size-15"},[s("md-avatar",{staticClass:"md-large md-elevation-5"},[s("Avatar")],1)],1),s("div",{staticClass:"md-layout-item md-size-85"},[s("div",{staticClass:"md-layout md-alignment-center-space-between"},[s("div",{staticClass:"md-title"},[s("Anonymous")],1),s("div",{staticClass:"md-subhead"},[t._v("110.08.08")])]),s("div",{staticClass:"md-subheading"},[t._v(" 輸入的欄位好像怪怪的... ")]),s("div",{staticClass:"md-body-2 mt-large-3",staticStyle:{"margin-top":"0.8rem",color:"darkkhaki"}},[s("md-icon",[t._v("support_agent")]),t._v(" 已做調整，再請您試試唷！ ")],1)])])],1)],1),s("div",{staticClass:"md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100"},[s("md-card",{staticClass:"md-accent",attrs:{"md-with-hover":""}},[s("md-card-content",{staticClass:"md-layout md-alignment-center"},[s("div",{staticClass:"md-layout-item md-size-15"},[s("md-avatar",{staticClass:"md-large md-elevation-5"},[s("Avatar")],1)],1),s("div",{staticClass:"md-layout-item md-size-85"},[s("div",{staticClass:"md-layout md-alignment-center-space-between"},[s("div",{staticClass:"md-title"},[s("Anonymous")],1),s("div",{staticClass:"md-subhead"},[t._v("110.07.29")])]),s("span",[t._v(" Lorem adipisci aspernatur saepe quo possimus deserunt accusantium cum explicabo, vero cumque fugiat praesentium enim hic dolorem. Excepturi fuga mollitia alias? ")])])])],1)],1),s("div",{staticClass:"md-layout-item md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100"},[s("md-card",{staticClass:"md-accent",attrs:{"md-with-hover":""}},[s("md-card-content",{staticClass:"md-layout md-alignment-center"},[s("div",{staticClass:"md-layout-item md-size-15"},[s("md-avatar",{staticClass:"md-large md-elevation-5"},[s("Avatar")],1)],1),s("div",{staticClass:"md-layout-item md-size-85"},[s("div",{staticClass:"md-layout md-alignment-center-space-between"},[s("div",{staticClass:"md-title"},[t._v("Nick name")]),s("div",{staticClass:"md-subhead"},[t._v("110.07.29")])]),s("span",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod neque optio et delectus obcaecati laudantium! ")])])])],1)],1)])])])],1)},i=[],c=e("df3a"),n=e("7dfc"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"accordion"},[t._t("default")],2)},r=[],d={name:"Accordion",props:{},data:function(){return{Accordion:{count:0,active:null}}},provide:function(){return{Accordion:this.Accordion}}},l=d,m=e("2877"),u=Object(m["a"])(l,o,r,!1,null,null,null),v=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"accordion__item"},[e("div",{staticClass:"accordion__trigger",class:{accordion__trigger_active:t.visible},on:{click:t.open}},[t._t("accordion-trigger")],2),e("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start,"after-leave":t.end}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"accordion__content"},[e("ul",[t._t("accordion-content")],2)])])],1)},f=[],g={name:"AccordionItem",props:{},inject:["Accordion"],data:function(){return{index:null}},computed:{visible:function(){return this.index===this.Accordion.active}},methods:{open:function(){this.visible?this.Accordion.active=null:this.Accordion.active=this.index},start:function(t){t.style.height=t.scrollHeight+"px"},end:function(t){t.style.height=""}},created:function(){this.index=this.Accordion.count++}},C=g,_=(e("8402"),Object(m["a"])(C,p,f,!1,null,"3d6a2ca1",null)),b=_.exports,h={name:"Contact",data:function(){return{contactBtn:!1,contactForm:{majorIssue:"",account:"",contactData:"",issueDescription:""}}},components:{Avatar:c["a"],Anonymous:n["a"],Accordion:v,AccordionItem:b}},y=h,A=Object(m["a"])(y,s,i,!1,null,null,null);a["default"]=A.exports},df3a:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("img",{staticClass:"avatar",attrs:{src:"https://source.boringavatars.com/"+t.variant+"/"+t.size+"/?colors="+t.colors[t.random()]+","+t.colors[t.random()],alt:"Avatar"}})},i=[],c=(e("a9e3"),{name:"Avatar",props:{size:{type:Number,default:80},variant:{type:String,default:"beam"},address:{type:String,require:!0},colors:{type:Array,default:function(){return["3B4058","2A6E78","7A907C","C9B180","3E6B48","B5B479","F7E6A6"]}}},methods:{random:function(){return Math.floor(7*Math.random())}}}),n=c,o=(e("52fe"),e("2877")),r=Object(o["a"])(n,s,i,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=contact.d60ff7e7.js.map