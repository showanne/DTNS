(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member"],{"0328":function(t,e,a){t.exports=a.p+"img/dateS.1dcfda2d.svg"},"0a31":function(t,e,a){var i={"./temp-diary.svg":"b427","./temp-notes.svg":"dc1a","./temp-novel.svg":"ef77","./temp-postIt.svg":"b1ce","./temp-share.svg":"6059","./temp-storage.svg":"83e2","./temp-todo.svg":"bfb4"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="0a31"},1031:function(t,e,a){t.exports=a.p+"img/action-delete.3dbfa11b.svg"},"37cf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"memberReply"}},[t._v(" memberReplymemberReply "),a("div",{staticClass:"md-layout md-alignment-centered"},[a("div",{staticClass:"md-md-layout-item"},[a("md-card",[a("md-field",[a("label",[t._v("send")]),a("md-input",{model:{value:t.send,callback:function(e){t.send=e},expression:"send"}}),a("md-icon",[t._v("send")])],1)],1)],1)])])},r=[],s={name:"MemberReply",data:function(){return{send:""}}},n=s,m=a("2877"),c=Object(m["a"])(n,i,r,!1,null,null,null);e["default"]=c.exports},"436e":function(t,e,a){t.exports=a.p+"img/action-addEdit.bc71d465.svg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),r=a("5899"),s="["+r+"]",n=RegExp("^"+s+s+"*"),m=RegExp(s+s+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(m,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5b44":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"memberProfile"}},[t._v(" memberProfilememberProfile ")])},r=[],s={name:"MemberProfile"},n=s,m=a("2877"),c=Object(m["a"])(n,i,r,!1,null,null,null);e["default"]=c.exports},6059:function(t,e,a){t.exports=a.p+"img/temp-share.5f34bd92.svg"},7156:function(t,e,a){var i=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var s,n;return r&&"function"==typeof(s=e.constructor)&&s!==a&&i(n=s.prototype)&&n!==a.prototype&&r(t,n),t}},"80d2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"member"}},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-80"},[t._v(" member DATA TEMP ARTICLE "),a("transition",[a("keep-alive",[a("router-view")],1)],1)],1),a("div",{staticClass:"md-layout-item md-size-20"},[a("div",{staticClass:"full-control",staticStyle:{border:"dashed 2.5px #B3AB88",padding:"16px"}},[a("md-avatar",{staticClass:"md-large md-elevation-5"},[a("img",{attrs:{src:t.avatarImg,alt:""}})]),a("h2",[t._v(t._s(t.userName))]),a("div",{staticClass:"list"},[a("md-list",{attrs:{"md-expand-single":t.expandSingle}},[a("md-list-item",{attrs:{to:"/member/memberAnalytics"}},[a("md-icon",[t._v("analytics")]),a("span",{staticClass:"md-list-item-text"},[t._v("Analytics")])],1),a("md-list-item",{attrs:{to:"/member/memberArticle"}},[a("md-icon",[t._v("feed")]),a("span",{staticClass:"md-list-item-text"},[t._v("Article")])],1),a("md-list-item",{attrs:{to:"/member"}},[a("md-icon",[t._v("perm_contact_calendar")]),a("span",{staticClass:"md-list-item-text"},[t._v("Profile")])],1),a("md-list-item",{attrs:{to:"/member/memberReply"}},[a("md-icon",[t._v("3p")]),a("span",{staticClass:"md-list-item-text"},[t._v("Reply")])],1)],1)],1)],1)])])])},r=[],s={name:"Member",data:function(){return{expandArticle:!1,expandSingle:!1}},components:{},computed:{user:function(){return this.$store.state.user},tempCardShow:function(){return this.$store.state.tempCardShow}},methods:{tempShow:function(t){this.$store.commit("tempShow",t)}}},n=s,m=a("2877"),c=Object(m["a"])(n,i,r,!1,null,null,null);e["default"]=c.exports},"83e2":function(t,e,a){t.exports=a.p+"img/temp-storage.0cc1010c.svg"},a9e3:function(t,e,a){"use strict";var i=a("83ab"),r=a("da84"),s=a("94ca"),n=a("6eeb"),m=a("5135"),c=a("c6b6"),d=a("7156"),o=a("c04e"),l=a("d039"),p=a("7c73"),u=a("241c").f,v=a("06cf").f,f=a("9bf2").f,b=a("58a8").trim,h="Number",_=r[h],g=_.prototype,x=c(p(g))==h,C=function(t){var e,a,i,r,s,n,m,c,d=o(t,!1);if("string"==typeof d&&d.length>2)if(d=b(d),e=d.charCodeAt(0),43===e||45===e){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+d}for(s=d.slice(2),n=s.length,m=0;m<n;m++)if(c=s.charCodeAt(m),c<48||c>r)return NaN;return parseInt(s,i)}return+d};if(s(h,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var y,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(x?l((function(){g.valueOf.call(a)})):c(a)!=h)?d(new _(C(e)),a,w):C(e)},M=i?u(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;M.length>k;k++)m(_,y=M[k])&&!m(w,y)&&f(w,y,v(_,y));w.prototype=g,g.constructor=w,n(r,h,w)}},b1ce:function(t,e,a){t.exports=a.p+"img/temp-postIt.7a1b4200.svg"},b427:function(t,e,a){t.exports=a.p+"img/temp-diary.12c365bd.svg"},bfb4:function(t,e,a){t.exports=a.p+"img/temp-todo.624bae4f.svg"},bfb5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"memberAnalytics"}},[a("md-empty-state",{staticClass:"md-primary",attrs:{"md-icon":"query_stats","md-label":"Nothing in Done","md-description":"Anything you mark done will be safely stored here."}})],1)},r=[],s={name:"MemberAnalytics"},n=s,m=a("2877"),c=Object(m["a"])(n,i,r,!1,null,null,null);e["default"]=c.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").map,s=a("1dde"),n=s("map");i({target:"Array",proto:!0,forced:!n},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dc1a:function(t,e,a){t.exports=a.p+"img/temp-notes.449b4d69.svg"},ef77:function(t,e,a){t.exports=a.p+"img/temp-novel.08e150f8.svg"},fc26:function(t,e,a){t.exports=a.p+"img/action-good.3bb245ab.svg"},fe12:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"memberArticle"}},[t.loading?a("md-empty-state",{attrs:{"md-icon":"submit","md-label":"Loading..."}},[a("md-progress-spinner",{staticClass:"md-accent loading",attrs:{"md-diameter":100,"md-stroke":10,"md-mode":"indeterminate"}})],1):""==t.articleM?a("md-empty-state",{staticClass:"md-primary",attrs:{"md-icon":"travel_explore","md-label":"快來開始吧！"}},[a("md-button",{staticClass:"md-accent md-raised h-unset p-3 fz-5 ls-2",attrs:{to:"/edit"}},[t._v("紀錄讓你感動的瞬間")]),a("md-button",{staticClass:"md-primary md-raised h-unset p-3 fz-5 ls-2",attrs:{to:"/collection"}},[t._v("在文字的世界裡遨遊")])],1):a("div",{staticClass:"md-layout md-alignment-center"},[a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry-container",attrs:{"transition-duration":"0.3s","item-selector":".tempCardForMember","fit-width":"true"}},t._l(t.articleM,(function(t){return a("TempCardForMember",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t._id,staticClass:"tempCardForMember",attrs:{item:t}})})),1)])],1)},r=[],s=a("1da1"),n=(a("96cf"),a("a9e3"),a("99af"),a("d81d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("md-card",{attrs:{"md-with-hover":""}},[i("md-card-header",{staticClass:"md-layout"},[i("div",{staticClass:"md-layout-item"},[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",{attrs:{"md-src":a("0a31")("./temp-"+t.tempList[t.item.article.template].subhead+".svg")}})],1)],1),i("div",{staticClass:"md-layout-item md-subhead"},[i("md-icon",{attrs:{"md-src":a("0328")}}),i("span",[t._v(t._s(t.item.article.date))])],1)]),0===t.item.article.template?i("md-card-content",[t.item.article.image?i("md-card-media",[i("img",{attrs:{src:t.item.article.image,alt:""}})]):t._e(),i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.text)}})],1):t._e(),1===t.item.article.template?i("md-card-content",[i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.text)}})]):t._e(),2===t.item.article.template?i("md-card-content",[i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-subhead"},[t._v("期限："+t._s(t.item.article.datepicker))]),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.text)}})]):t._e(),3===t.item.article.template?i("md-card-content",[i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-subhead"},[t._v("期限："+t._s(t.item.article.datepicker))]),i("div",{staticClass:"md-subhead"},[t._v("心情："+t._s(t.item.article.select))]),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.textarea)}})]):t._e(),4===t.item.article.template?i("md-card-content",[i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.textarea)}})]):t._e(),5===t.item.article.template?i("md-card-content",[t.item.article.image?i("md-card-media",[i("img",{attrs:{src:t.item.article.image,alt:""}})]):t._e(),i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-subhead"},[t._v("作者："+t._s(t.item.article.text))]),i("div",{staticClass:"md-subhead"},[t._v("是否已完結："+t._s(t.item.article.select))]),i("div",{staticClass:"md-subhead"},[t._v("完結日期："+t._s(t.item.article.datepicker))]),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.textarea)}})],1):t._e(),6===t.item.article.template?i("md-card-content",[t.item.article.image?i("md-card-media",[i("img",{attrs:{src:t.item.article.image,alt:""}})]):t._e(),i("div",{staticClass:"md-title"},[t._v(t._s(t.item.article.title))]),i("div",{staticClass:"md-subhead"},[t._v("購買日期："+t._s(t.item.article.datepicker))]),i("div",{staticClass:"md-subhead"},[i("md-icon",[t._v("share_location")]),t._v(" 存放地點："+t._s(t.item.article.text)+" ")],1),i("div",{staticClass:"md-body-1 text-v-html",domProps:{innerHTML:t._s(t.item.article.textarea)}})],1):t._e(),i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("md-button",{staticClass:"md-icon-button md-dense",on:{click:function(e){return t.editArticle(t.index)}}},[i("md-icon",{attrs:{"md-src":a("436e")}})],1),i("md-button",{staticClass:"md-icon-button md-dense",on:{click:function(e){return t.deleteArticle(t.index)}}},[i("md-icon",{attrs:{"md-src":a("1031")}})],1),i("md-button",{staticClass:"md-icon-button"},[i("div",{staticClass:"md-layout md-alignment-center-space-around"},[i("md-icon",{attrs:{"md-src":a("9e9c")}}),i("span",[t._v("19")])],1)]),i("md-button",{staticClass:"md-icon-button"},[i("div",{staticClass:"md-layout md-alignment-center-space-around"},[i("md-icon",{attrs:{"md-src":a("fc26")}}),i("span",[t._v("19")])],1)]),i("md-button",{staticClass:"md-icon-button md-dense"},[i("a",{attrs:{href:"http://line.naver.jp/R/msg/text/?DTNS分享吧！–"+t.item.article.title+"&nbsp;%0D%0Ahttps://showanne.github.io/DTNS"}},[i("md-icon",{attrs:{"md-src":a("97a2")}})],1)])],1)],1)}),m=[],c={name:"TempCardForMember",data:function(){return{}},props:{item:{type:Object,required:!0}},methods:{editArticle:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(r in alert("editArticle",t),e.tempForm={_id:e.articleM[t]._id,title:e.articleM[t].title,share:e.articleM[t].share,image:e.articleM[t].image,textarea:e.articleM[t].textarea,text:e.articleM[t].text,select:e.articleM[t].select,datepicker:e.articleM[t].datepicker,date:e.articleM[t].date,index:t},e.editArticleModal=!0,i=new FormData,e.tempForm)i.append(r,e.tempForm[r]);return a.next=7,e.axios.patch("/article/member"+e.tempForm._id,i,{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 7:s=a.sent,n=s.data,e.articleM[e.tempForm.index]={title:e.tempForm.title,share:e.tempForm.share,image:"".concat("https://dtns-web.herokuapp.com","/file/").concat(n.result.image),textarea:e.tempForm.textarea,text:e.tempForm.text,select:e.tempForm.select,datepicker:new Date(e.tempForm.datepicker).toLocaleDateString(),date:new Date(e.tempForm.datepicker).toLocaleDateString(),_id:e.tempForm._id};case 10:case"end":return a.stop()}}),a)})))()},deleteArticle:function(t){alert("deleteArticle",t)}},mounted:function(){this.item.article.image&&(this.item.article.image="".concat("https://dtns-web.herokuapp.com","/file/").concat(this.item.article.image)),(this.item.article.datepicker||this.item.article.date)&&(this.item.article.datepicker=new Date(this.item.article.datepicker).toLocaleDateString(),this.item.article.date=new Date(this.item.article.date).toLocaleDateString()),console.log(this.item.article)}},d=c,o=a("2877"),l=Object(o["a"])(d,n,m,!1,null,null,null),p=l.exports,u={name:"MemberArticle",components:{TempCardForMember:p},data:function(){return{articleM:[],tempForm:{_id:"",template:0,title:"",author:"",avatar:"",share:!0,image:null,textarea:"",text:"",select:"",datepicker:Number(new Date),date:Number(new Date)},editArticleModal:!1,loading:!1}},computed:{tempCardShow:function(){return this.$store.state.tempCardShow}},methods:{tempShow:function(t){this.$store.commit("tempShow",t)},editArticle:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(r in e.tempForm={_id:e.articleM[t]._id,title:e.articleM[t].title,share:e.articleM[t].share,image:e.articleM[t].image,textarea:e.articleM[t].textarea,text:e.articleM[t].text,select:e.articleM[t].select,datepicker:e.articleM[t].datepicker,date:e.articleM[t].date,index:t},e.editArticleModal=!0,i=new FormData,e.tempForm)i.append(r,e.tempForm[r]);return a.next=6,e.axios.patch("/article/member"+e.tempForm._id,i,{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 6:s=a.sent,n=s.data,e.articleM[e.tempForm.index]={title:e.tempForm.title,share:e.tempForm.share,image:"".concat("https://dtns-web.herokuapp.com","/file/").concat(n.result.image),textarea:e.tempForm.textarea,text:e.tempForm.text,select:e.tempForm.select,datepicker:new Date(e.tempForm.datepicker).toLocaleDateString(),date:new Date(e.tempForm.datepicker).toLocaleDateString(),_id:e.tempForm._id};case 9:case"end":return a.stop()}}),a)})))()},deleteArticle:function(t){},submitArticle:function(t){}},watch:{},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.axios.get("/article/member/template/",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 4:a=e.sent,i=a.data,t.articleM=i.result.map((function(t){return t})),t.loading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},v=u,f=Object(o["a"])(v,i,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=member.8ae22c33.js.map