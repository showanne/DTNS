(function(e){function t(t){for(var a,i,o=t[0],c=t[1],m=t[2],d=0,l=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,m||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},s={app:0},r=[];function o(e){return c.p+"js/"+({collection:"collection",contact:"contact",edit:"edit",manage:"manage",member:"member",news:"news",setting:"setting"}[e]||e)+"."+{collection:"0b5a6ec6",contact:"0734f5b9",edit:"af4b4d23",manage:"766e160d",member:"496641d3",news:"b6029106",setting:"ae2d9eb6"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={contact:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({collection:"collection",contact:"contact",edit:"edit",manage:"manage",member:"member",news:"news",setting:"setting"}[e]||e)+"."+{collection:"31d6cfe0",contact:"cb349bc0",edit:"31d6cfe0",manage:"31d6cfe0",member:"31d6cfe0",news:"31d6cfe0",setting:"31d6cfe0"}[e]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var m=r[o],d=m.getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(d===a||d===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){m=l[o],d=m.getAttribute("data-href");if(d===a||d===s)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var a=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],u.parentNode.removeChild(u),n(r)},u.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(u)})).then((function(){i[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=r);var m,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var l=new Error;m=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}s[e]=void 0}};var u=setTimeout((function(){m({type:"timeout",target:d})}),12e4);d.onerror=d.onload=m,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],d=m.push.bind(m);m.push=t,m=m.slice();for(var l=0;l<m.length;l++)t(m[l]);var u=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cba":function(e,t,n){e.exports=n.p+"img/menu-Setting.d7a3d7b2.svg"},1690:function(e,t,n){e.exports=n.p+"img/menu-Collection.79fc2173.svg"},"230c":function(e,t,n){e.exports=n.p+"img/signOut.e09f99f1.svg"},"37e6":function(e,t,n){e.exports=n.p+"img/line-logo.ee0f3f44.svg"},"443d":function(e,t,n){e.exports=n.p+"img/signIn.8077c954.svg"},4550:function(e,t,n){e.exports=n.p+"img/menu-Edit.4185a9c0.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("43f9"),s=n.n(i),r=(n("51de"),n("7046"),n("bc3a")),o=n.n(r),c=n("2106"),m=n.n(c),d=n("3f9b"),l=n("657c"),u=(n("2bd9"),n("a0f0"),n("9145")),f=n.n(u),g=n("a584"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"page-container",attrs:{id:"nav","nav-pills-icons":""}},[a("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[a("md-app-toolbar",{staticClass:"md-accent md-layout md-alignment-center-space-between"},[a("div",{staticClass:"md-layout-item md-large-size-15 md-medium-size-25 md-small-50"},[e.menuVisible?e._e():a("md-button",{staticClass:"md-menu-button btn-menu w-unset",on:{click:e.toggleMenu}},[a("md-icon",{attrs:{"md-src":n("b778")}})],1)],1),a("div",{staticClass:"md-layout-item md-large-size-25 md-medium-size-30 md-small-size-50"},[a("div",{staticClass:"md-layout md-alignment-center-right"},[a("md-field",{staticClass:"md-layout-item md-size-50 md-xsmall-hide"},[a("label",[e._v("Search...")]),a("md-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("div",{staticClass:"md-layout-item md-size-50",attrs:{id:"modeToggle"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleDark,expression:"toggleDark"}],attrs:{type:"checkbox",id:"toggleDark"},domProps:{checked:Array.isArray(e.toggleDark)?e._i(e.toggleDark,null)>-1:e.toggleDark},on:{click:e.toggleMode,change:function(t){var n=e.toggleDark,a=t.target,i=!!a.checked;if(Array.isArray(n)){var s=null,r=e._i(n,s);a.checked?r<0&&(e.toggleDark=n.concat([s])):r>-1&&(e.toggleDark=n.slice(0,r).concat(n.slice(r+1)))}else e.toggleDark=i}}}),a("label",{attrs:{for:"toggleDark"}})])],1)])]),a("md-app-drawer",{staticClass:"md-layout",attrs:{"md-active":e.menuVisible,"md-permanent":"full"},on:{"update:mdActive":function(t){e.menuVisible=t},"update:md-active":function(t){e.menuVisible=t}}},[a("md-list",{staticClass:"mb-auto"},[a("md-list-item",{attrs:{to:"/"}},[a("h1",{staticClass:"text-dtns"},[e._v("DTNS")])]),e.menuVisible?a("md-button",{staticClass:"btn-toggleMenu md-menu-button md-dense w-unset h-unset",on:{click:e.toggleMenu}},[a("md-icon",[e._v("keyboard_arrow_left")])],1):e._e(),e._l(e.menuList,(function(t,i){return a("md-list-item",{key:i,attrs:{to:"/"+t.subhead}},[a("md-icon",{attrs:{"md-src":n("f0fa")("./menu-"+t.subhead+".svg")}}),a("span",{staticClass:"md-list-item-text"},[e._v(e._s(t.name))])],1)})),e.user.isSignIn&&!e.user.isAdmin?a("md-list-item",{attrs:{to:"/member"}},[a("md-icon",{attrs:{"md-src":n("c06f")}}),a("span",{staticClass:"md-list-item-text"},[e._v("會員中心")])],1):e._e(),e.user.isSignIn&&e.user.isAdmin?a("md-list-item",{attrs:{to:"/manage"}},[a("md-icon",{attrs:{"md-src":n("c680")}}),a("span",{staticClass:"md-list-item-text"},[e._v("管理中心")])],1):e._e(),e.user.isSignIn?e._e():a("md-list-item",{on:{click:function(t){e.signUpBtn=!0}}},[a("md-icon",{attrs:{"md-src":n("8f4a")}}),a("span",{staticClass:"md-list-item-text"},[e._v("註冊")]),a("md-dialog",{attrs:{"md-active":e.signUpBtn},on:{"update:mdActive":function(t){e.signUpBtn=t},"update:md-active":function(t){e.signUpBtn=t}}},[a("md-dialog-content",{staticClass:"md-layout md-alignment-center-center"},[a("md-button",{staticClass:"h-unset",on:{click:e.signForLine}},[a("md-icon",{staticClass:"md-size-5x",attrs:{"md-src":n("37e6")}}),a("span",[e._v(" 快速註冊 ")])],1)],1)],1)],1),e.user.isSignIn?e._e():a("md-list-item",{on:{click:function(t){e.signInBtn=!0}}},[a("md-icon",{attrs:{"md-src":n("443d")}}),a("span",{staticClass:"md-list-item-text"},[e._v("登入")]),e.signInBtn?a("SignModal",{attrs:{signBtn:e.signInBtn},on:{closeModal:function(t){e.signInBtn=!1}}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("Sign In")])]):e._e()],1),e.user.isSignIn?a("md-list-item",{on:{click:e.signOutBtn}},[a("md-icon",{attrs:{"md-src":n("230c")}}),a("span",{staticClass:"md-list-item-text"},[e._v("登出")])],1):e._e()],2),a("div",{staticClass:"mt-auto mx-auto mb-3"},[a("a",{staticClass:"td-none lh-5",attrs:{href:"https://showanne.github.io/"}},[a("md-icon",{staticClass:"d-inline-block",attrs:{"md-src":n("5cbb")}}),e._v(" Anne. ")],1)])],1),a("md-dialog-alert",{attrs:{"md-active":e.signOutMsg,"md-title":"ERROR","md-content":"發生錯誤"},on:{"update:mdActive":function(t){e.signOutMsg=t},"update:md-active":function(t){e.signOutMsg=t}}}),a("md-app-content",{staticClass:"h-content"},[a("router-view")],1)],1)],1)])},h=[],v=n("1da1"),b=(n("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-dialog",{attrs:{"md-active":e.signBtn,"md-close-on-esc":!1,"md-click-outside-to-close":!1},on:{"update:mdActive":function(t){e.signBtn=t},"update:md-active":function(t){e.signBtn=t}}},[a("md-dialog-title",[a("div",{staticClass:"md-layout md-alignment-center-space-between"},[e._t("title"),a("md-button",{staticClass:"md-primary",on:{click:e.closeModal}},[e._v(" close × ")])],2)]),a("md-dialog-content",{staticClass:"md-scrollbar"},[a("md-tabs",{attrs:{"md-alignment":"fixed"}},[a("md-tab",{attrs:{exact:"",id:"tab-line","md-label":"line","md-icon":n("37e6")}},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("md-button",{staticClass:"h-unset",on:{click:e.signForLine}},[a("md-icon",{staticClass:"md-size-5x",attrs:{"md-src":n("37e6")}}),a("span",[e._v(" 快速登入 ")])],1)],1)]),a("md-tab",{attrs:{id:"tab-manage","md-label":"manage","md-icon":"person"}},[a("form",{staticClass:"md-layout md-small-hide",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateUser.apply(null,arguments)},reset:e.clearForm}},[a("md-card",{staticClass:"md-layout-item"},[a("md-card-content",[a("md-field",{class:e.getValidationClass("account")},[a("label",{attrs:{for:"account"}},[e._v("Account")]),a("md-input",{attrs:{name:"account",autocomplete:"account",placeholder:"You Nick Name...",disabled:e.sending},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}}),e.$v.form.account.required?e.$v.form.account.minlength?e._e():a("span",{staticClass:"md-error"},[e._v("帳號最少須 5 個字，最多 20 個字")]):a("span",{staticClass:"md-error"},[e._v("帳號是必填欄位")])],1),a("md-field",{class:e.getValidationClass("password")},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("md-input",{attrs:{type:"password",name:"password",autocomplete:"password",placeholder:"password...",disabled:e.sending},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.$v.form.password.required?e.$v.form.password.minlength?e._e():a("span",{staticClass:"md-error"},[e._v("密碼最少須 4 個字，最多 20 個字")]):a("span",{staticClass:"md-error"},[e._v("密碼是必填欄位")])],1)],1),e.sending?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):e._e(),a("md-card-actions",[a("md-button",{staticClass:"md-primary",attrs:{type:"reset"}},[e._v(" Reset")]),a("md-button",{staticClass:"md-primary",attrs:{type:"submit",disabled:e.sending}},[e._v(" Sign In")])],1)],1),a("md-snackbar",{attrs:{"md-active":e.messageShow},on:{"update:mdActive":function(t){e.messageShow=t},"update:md-active":function(t){e.messageShow=t}}},[e._v(e._s(e.message))])],1),a("md-empty-state",{staticClass:"md-small-show",attrs:{"md-icon":"no_accounts","md-label":"為了您的管理體驗","md-description":"螢幕尺寸小於 960px 禁止管理者登入後台！"}})],1)],1)],1)],1),a("md-dialog-alert",{attrs:{"md-active":e.messageShow,"md-title":"ERROR","md-content":e.message},on:{"update:mdActive":function(t){e.messageShow=t},"update:md-active":function(t){e.messageShow=t}}})],1)}),w=[],x=n("1dce"),y=n("b5ae"),C={name:"SignModal",components:{},mixins:[x["validationMixin"]],props:{signBtn:{type:Boolean,required:!0}},data:function(){return{form:{account:"",password:""},sending:!1,messageShow:!1,message:""}},validations:{form:{account:{required:y["required"],minLength:Object(y["minLength"])(5),maxLength:Object(y["maxLength"])(20)},password:{required:y["required"],minLength:Object(y["minLength"])(4),maxLength:Object(y["maxLength"])(20)}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},clearForm:function(){this.$v.$reset(),this.sending=!1,this.form.account="",this.form.password=""},signIn:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post("/users/signIn",e.form);case 3:n=t.sent,a=n.data,e.sending=!0,window.setTimeout((function(){e.sending=!1,e.$store.commit("signIn",a),e.$emit("closeModal"),e.user.isSignIn&&e.user.isAdmin?e.$router.push("/manage").catch((function(e){console.log(e)})):e.$router.push("/member").catch((function(e){console.log(e)}))}),1500),t.next=17;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),e.messageShow=!0,i="",i=null===t.t0.response.data.message?t.t0:t.t0.response.data.message,e.message="".concat(e.form.account," ")+i,e.sending=!0;case 17:case"end":return t.stop()}}),t,null,[[0,9]])})))()},validateUser:function(){this.$v.$touch(),this.$v.$invalid||this.signIn()},closeModal:function(){this.$emit("closeModal")}}},k=C,_=n("2877"),S=Object(_["a"])(k,b,w,!1,null,null,null),M=S.exports,I=(n("d3b7"),n("b363")),O=n.n(I),D="theme_creator_cli_style_id",N=O()({themeList:[{themeName:"theme-dark",themePath:"https://unpkg.com/vue-easytable/libs/theme-dark/index.css"},{themeName:"theme-default",themePath:"https://unpkg.com/vue-easytable/libs/theme-default/index.css"}],styleLinkId:D,useStorage:!1,storageKey:"theme_switcher_tool_theme"}),j={methods:{switchThemeMix:function(e){return new Promise((function(t,n){N.switcher({themeName:e}).then((function(){t()})).catch(n)}))}},mounted:function(){}},$={mixins:[j],data:function(){return{search:"",menuVisible:!1,toggleDark:!1,permanent:"",persistent:"",settingTooltip:!1,signUpBtn:!1,signInBtn:!1,signOutMsg:!1}},components:{SignModal:M},methods:{signOutBtn:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.delete("/users/signOut",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.$store.commit("signOut"),"/"!==e.$route.path&&e.$router.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.signOutMsg=!0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},toggleMenu:function(){this.menuVisible=!this.menuVisible},screenWidth:function(){var e=this;addEventListener("resize",(function(){var t=document.body.clientWidth;console.log(t),t>900?(e.menuVisible=!0,e.permanent="full",e.persistent=null):t>600&&t<900?(e.menuVisible=!e.menuVisible,e.permanent="full",e.persistent="mini"):(e.menuVisible=!e.menuVisible,e.permanent=null,e.persistent="full")}))},toggleMode:function(){this.toggleDark?(this.$material.theming.theme="default",this.switchThemeMix("theme-default")):(this.$material.theming.theme="dark",this.switchThemeMix("theme-dark"))}},created:function(){var e=this,t=this.$route.query.jwt;t&&this.axios.get("/users/signInLineData",{headers:{authorization:"Bearer "+t}}).then((function(t){e.$store.commit("signIn",t.data),e.$router.push("/member")})).catch((function(t){console.log(t),e.$store.commit("signOut")}))},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,a,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.$store.state.jwt.token.length){t.next=2;break}return t.abrupt("return");case 2:if(n=Date.now()-e.$store.state.jwt.received,t.prev=3,!(n>5184e5)){t.next=10;break}return t.next=7,e.axios.post("/users/extend",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 7:a=t.sent,i=a.data,e.$store.commit("extend",i.result);case 10:return t.next=12,e.axios.get("/users/",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 12:s=t.sent,r=s.data,e.$store.commit("getInfo",r.result),t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](3),console.log(t.t0),e.$store.commit("signOut");case 21:case"end":return t.stop()}}),t,null,[[3,17]])})))()}},A=$,T=Object(_["a"])(A,p,h,!1,null,null,null),z=T.exports,E=n("9483");Object(E["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("3ca3"),n("ddb0");var B=n("8c4f"),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"text-title"},[e._v("文字的溫度")]),a("div",{staticClass:"text-subhead"},[e._v("每字美句每個你喜歡的瞬間")]),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-33 md-small-size-100"},[a("md-card",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-100 md-small-size-30"},[a("md-card-media",[a("md-icon",{staticClass:"md-home-icon",attrs:{"md-src":n("9e88")}})],1)],1),a("div",{staticClass:"md-layout-item md-size-100 md-small-size-70"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("隨時記錄")]),a("div",{staticClass:"md-subhead"},[e._v("來自一本書、一句詞、一個讓你感動的瞬間。")]),a("md-button",{staticClass:"md-raised md-accent",attrs:{to:"/edit"}},[e._v("馬上開始...")])],1)],1)])],1),a("div",{staticClass:"md-layout-item md-size-33 md-small-size-100"},[a("md-card",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-100 md-small-size-30"},[a("md-card-media",[a("md-icon",{staticClass:"md-home-icon",attrs:{"md-src":n("9e9c")}})],1)],1),a("div",{staticClass:"md-layout-item md-size-100 md-small-size-70"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("方便儲存")]),a("div",{staticClass:"md-subhead"},[e._v("紀錄讓你心動的剎那，隨時回味翻找查詢。")]),a("md-button",{staticClass:"md-raised md-accent",attrs:{to:"/member"}},[e._v("立即註冊...")])],1)],1)])],1),a("div",{staticClass:"md-layout-item md-size-33 md-small-size-100"},[a("md-card",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-100 md-small-size-30"},[a("md-card-media",[a("md-icon",{staticClass:"md-home-icon",attrs:{"md-src":n("97a2")}})],1)],1),a("div",{staticClass:"md-layout-item md-size-100 md-small-size-70"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("便捷分享")]),a("div",{staticClass:"md-subhead"},[e._v("立即跟親朋好友分享，創造更好的文字風景。")]),a("md-button",{staticClass:"md-raised md-accent",attrs:{to:"/collection"}},[e._v("來去看看...")])],1)],1)])],1)])])},R=[],P={name:"Home",components:{},data:function(){return{}},mounted:function(){}},V=P,U=Object(_["a"])(V,L,R,!1,null,null,null),q=U.exports,F=n("5530"),H=(n("b0c0"),n("2f62")),G=n("0e44");a["default"].use(H["a"]);var J=new H["a"].Store({state:{jwt:{token:"",received:0},user:{role:-1,account:"",name:"",avatar:""},tempCardShow:0},mutations:{signIn:function(e,t){e.jwt.token=t.token,e.jwt.received=(new Date).getTime(),e.user.account=t.account,e.user.role=t.role,e.user.name=t.name,e.user.avatar=t.avatar},signOut:function(e){e.jwt.token="",e.jwt.received=0,e.user.account="",e.user.role=0,e.user.name="",e.user.avatar=""},extend:function(e,t){e.jwt.token=t,e.jwt.received=(new Date).getTime()},getInfo:function(e,t){e.user.account=t.account,e.user.role=t.role,e.user.name=t.name,e.user.avatar=t.avatar},tempShow:function(e,t){e.tempCardShow=t}},actions:{},modules:{},getters:{user:function(e){return Object(F["a"])({isSignIn:e.jwt.token.length>0,isAdmin:1===e.user.role},e.user)}},plugins:[Object(G["a"])({key:"DTNS"})]});a["default"].use(B["a"]);var K=[{path:"/",name:"Home",component:q,meta:{title:"DTNS"}},{path:"/edit",name:"Edit",component:function(){return n.e("edit").then(n.bind(null,"1071"))},meta:{title:"DTNS - Edit"}},{path:"/collection",name:"Collection",component:function(){return n.e("collection").then(n.bind(null,"13a0"))},meta:{title:"DTNS - Collection"}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))},meta:{title:"DTNS - Contact"}},{path:"/news",name:"News",component:function(){return n.e("news").then(n.bind(null,"a2f9"))},meta:{title:"DTNS - News"}},{path:"/setting",name:"Setting",component:function(){return n.e("setting").then(n.bind(null,"4ef5"))},meta:{title:"DTNS - Setting"}},{path:"/member",component:function(){return n.e("member").then(n.bind(null,"80d2"))},children:[{path:"",name:"MemberProfile",component:function(){return n.e("member").then(n.bind(null,"5b44"))},meta:{signIn:!0,title:"DTNS - MemberProfile"}},{path:"memberArticle",name:"MemberArticle",component:function(){return n.e("member").then(n.bind(null,"fe12"))},meta:{signIn:!0,title:"DTNS - MemberArticle"}},{path:"memberAnalytics",name:"MemberAnalytics",component:function(){return n.e("member").then(n.bind(null,"bfb5"))},meta:{signIn:!0,title:"DTNS - MemberAnalytics"}},{path:"memberReply",name:"MemberReply",component:function(){return n.e("member").then(n.bind(null,"37cf"))},meta:{signIn:!0,title:"DTNS - MemberReply"}}]},{path:"/manage",component:function(){return n.e("manage").then(n.bind(null,"f74b"))},children:[{path:"",name:"ManageHome",component:function(){return n.e("manage").then(n.bind(null,"f761"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageHome"}},{path:"memberData",name:"ManageMemberData",component:function(){return n.e("manage").then(n.bind(null,"ed7c"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageMemberData"}},{path:"article",name:"ManageArticle",component:function(){return n.e("manage").then(n.bind(null,"9d60"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageArticle"}},{path:"template",name:"ManageTemplate",component:function(){return n.e("manage").then(n.bind(null,"3241"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageTemplate"}},{path:"reply",name:"ManageReply",component:function(){return n.e("manage").then(n.bind(null,"a480"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageReply"}},{path:"special",name:"ManageSpecial",component:function(){return n.e("manage").then(n.bind(null,"6366"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageSpecial"}},{path:"editApp",name:"ManageEditApp",component:function(){return n.e("manage").then(n.bind(null,"e513"))},meta:{signIn:!0,admin:!0,title:"DTNS - ManageEditApp"}}]}],W=new B["a"]({routes:K});W.beforeEach((function(e,t,n){e.meta.signIn&&0===J.state.jwt.token.length||e.meta.admin&&1!==J.state.user.role?n("/"):n()})),W.afterEach((function(e,t){document.title=e.meta.title}));var Z=W,Q=(n("a1ec"),n("c2f0"),n("99af"),{data:function(){return{share:[{field:"share",name:"分享",value:!0},{field:"title",name:"分享的佳句"},{field:"author",name:"作者"},{field:"image",name:"分享的圖片"},{field:"text",name:"來自(引用)"}],postIt:[{field:"share",name:"分享",value:!1},{field:"title",name:"本次發想主題"},{field:"author",name:"作者"},{field:"textarea",name:"寫點什麼..."}],todo:[{field:"share",name:"分享",value:!1},{field:"title",name:"待辦事項主題"},{field:"author",name:"作者"},{field:"datepicker",name:"期限"},{field:"textarea",name:"寫點什麼..."}],diary:[{field:"share",name:"分享",value:!1},{field:"title",name:"隨筆..."},{field:"author",name:"作者"},{field:"datepicker",name:"日期"},{field:"textarea",name:"紀錄"},{field:"select",name:"心情",selectList:["開心","不好","傷心"]}],notes:[{field:"share",name:"分享",value:!0},{field:"title",name:"筆記標題"},{field:"author",name:"作者"},{field:"textarea",name:"筆記內容"}],novel:[{field:"share",name:"分享",value:!0},{field:"title",name:"書名"},{field:"author",name:"投稿人"},{field:"text",name:"作者"},{field:"image",name:"書籍封面"},{field:"textarea",name:"書籍內容"},{field:"select",name:"是否已完結",selectList:["完結","正文完結，番外待續","未完結"]},{field:"datepicker",name:"完結日期"}],storage:[{field:"share",name:"分享",value:!1},{field:"title",name:"物品名稱"},{field:"image",name:"物品圖片"},{field:"textarea",name:"物品狀況描述"},{field:"text",name:"存放地點"},{field:"datepicker",name:"購買日期"}]}},computed:{user:function(){return this.$store.getters.user},tempList:function(){return[{index:0,show:!0,name:"美字美句",subhead:"share",input:this.share},{index:1,show:!0,name:"便利貼",subhead:"postIt",input:this.postIt},{index:2,show:this.user.isSignIn,name:"待辦事項",subhead:"todo",input:this.todo},{index:3,show:this.user.isSignIn,name:"心情隨筆",subhead:"diary",input:this.diary},{index:4,show:this.user.isSignIn,name:"筆記",subhead:"notes",input:this.notes},{index:5,show:this.user.isSignIn,name:"小說",subhead:"novel",input:this.novel},{index:6,show:this.user.isSignIn,name:"儲物清單",subhead:"storage",input:this.storage}]},menuList:function(){return[{index:0,name:"編輯",subhead:"Edit",show:!0},{index:1,name:"分享牆",subhead:"Collection",show:!0},{index:2,name:"聯絡我們",subhead:"Contact",show:!0},{index:3,name:"最新消息",subhead:"News",show:!0}]},userName:function(){var e="";if(""!==this.user.name&&""===this.user.account)e=this.user.name;else if(""!==this.user.account)e=this.user.account;else{var t=["水獺","烏龜","玫瑰","貓咪","犀牛","小鹿","大魚","獵豹","老虎","海豚","熊貓","鴿子","刺蝟","黑狗","小兔","天鵝","烏鴉","小雞","海鷗"];e="匿名"+t[Math.floor(19*Math.random())]}return e},avatarImg:function(){var e="";if(""===this.user.avatar||void 0===this.user.avatar){var t=["3B4058","2A6E78","7A907C","C9B180","3E6B48","B5B479","F7E6A6"];e="https://source.boringavatars.com/beam/80/?colors=".concat(t[Math.floor(7*Math.random())],",").concat(t[Math.floor(7*Math.random())])}else e=this.user.avatar;return e},randomState:function(){return"DTNSLOGIN"}},methods:{random:function(e){return Math.floor(Math.random()*e)},signForLine:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="https://access.line.me/oauth2/v2.1/authorize?",n+="response_type=code",n+="&client_id=1656271137",n+="&redirect_uri=https://dtns-web.herokuapp.com/users/signInLine",n+="&state="+e.randomState,n+="&bot_prompt=normal",n+="&scope=openid%20profile",window.location.href=n;case 8:case"end":return t.stop()}}),t)})))()}}});o.a.defaults.baseURL="https://dtns-web.herokuapp.com",a["default"].use(s.a),a["default"].use(m.a,o.a),a["default"].use(d["a"]),a["default"].component("ImgInputer",l["a"]),a["default"].use(f.a),a["default"].mixin(Q),a["default"].use(g["a"],{config:{id:"G-LZVEQGZREJ"}}),a["default"].config.productionTip=!1,a["default"].config.errorHandler=function(e,t,n){0},new a["default"]({router:Z,store:J,render:function(e){return e(z)}}).$mount("#app")},"59ff":function(e,t,n){e.exports=n.p+"img/menu-Contact.24dabc4d.svg"},"5cbb":function(e,t,n){e.exports=n.p+"img/icon-github.c99d90cf.svg"},7046:function(e,t,n){},7060:function(e,t,n){e.exports=n.p+"img/menu-News.7c4d21bc.svg"},"8f4a":function(e,t,n){e.exports=n.p+"img/signUp.2e2327f6.svg"},"97a2":function(e,t,n){e.exports=n.p+"img/action-share.c1101c35.svg"},"9e88":function(e,t,n){e.exports=n.p+"img/action-record.554430e4.svg"},"9e9c":function(e,t,n){e.exports=n.p+"img/action-save.0c8ae3d5.svg"},a1ec:function(e,t,n){},b778:function(e,t,n){e.exports=n.p+"img/menu.c60445de.svg"},c06f:function(e,t,n){e.exports=n.p+"img/menu-Member.1bac2c8c.svg"},c2f0:function(e,t,n){},c680:function(e,t,n){e.exports=n.p+"img/menu-Manage.bf975310.svg"},f0fa:function(e,t,n){var a={"./menu-Collection.svg":"1690","./menu-Contact.svg":"59ff","./menu-Edit.svg":"4550","./menu-Manage.svg":"c680","./menu-Member.svg":"c06f","./menu-News.svg":"7060","./menu-Setting.svg":"0cba"};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id="f0fa"}});
//# sourceMappingURL=app.64072e47.js.map