(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manage"],{3241:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageTemplate"}},[e._v(" ManageTemplateManageTemplate ")])},n=[],i={name:"ManageTemplate"},r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports},6366:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageSpecial"}},[e._v(" ManageSpecialManageSpecial ")])},n=[],i={name:"ManageSpecial"},r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports},"99af":function(e,t,a){"use strict";var l=a("23e7"),n=a("d039"),i=a("e8b5"),r=a("861d"),s=a("7b0b"),d=a("50c4"),o=a("8418"),c=a("65f0"),m=a("1dde"),u=a("b622"),f=a("2d00"),b=u("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",h=f>=51||!n((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),g=m("concat"),w=function(e){if(!r(e))return!1;var t=e[b];return void 0!==t?!!t:i(e)},y=!h||!g;l({target:"Array",proto:!0,forced:y},{concat:function(e){var t,a,l,n,i,r=s(this),m=c(r,0),u=0;for(t=-1,l=arguments.length;t<l;t++)if(i=-1===t?r:arguments[t],w(i)){if(n=d(i.length),u+n>p)throw TypeError(v);for(a=0;a<n;a++,u++)a in i&&o(m,u,i[a])}else{if(u>=p)throw TypeError(v);o(m,u++,i)}return m.length=u,m}})},"9d60":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageArticle"}},[a("ve-table",{staticStyle:{"'word-break'":"break-all"},attrs:{columns:e.tableTitle,"table-data":e.article.filter((function(t){return!e.searchText||t.name.includes(e.searchText)})),"max-height":"calc(100vh - 190px)","fixed-header":!0,"border-around":!1,"border-x":!0,"border-y":!1,"cell-style-option":e.cellStyleOption}}),a("md-dialog",{attrs:{"md-active":e.msgModal},on:{"update:mdActive":function(t){e.msgModal=t},"update:md-active":function(t){e.msgModal=t}}},[a("md-dialog-title",[e._v(e._s(e.Msg))]),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(t){e.msgModal=!1}}},[e._v("Close")]),a("md-button",{staticClass:"md-primary",on:{click:function(t){e.msgModal=!1}}},[e._v("SEE")])],1)],1)],1)},n=[],i=a("1da1"),r=(a("96cf"),a("a434"),a("d81d"),a("99af"),{name:"ManageArticle",data:function(){var e=this;this.$createElement;return{cellStyleOption:{bodyCellClass:function(e){e.row,e.column,e.rowIndex;return"table-body-cell-class"}},searchText:"",tableTitle:[{field:"",key:"a",title:"No.",width:"3%",align:"center",renderBodyCell:function(e,t){e.row,e.column;var a=e.rowIndex;return t("span",{style:"color:#7876B3;"},[++a])}},{field:"template",key:"b",title:"temp",width:"5%",align:"center",fixed:"left"},{field:"title",key:"c",title:"title",width:"30%"},{field:"share",key:"d",title:"share",width:"5%",renderBodyCell:function(t,a){var l=t.row,n=t.column;t.rowIndex;return a("md-switch",{class:"md-primary",model:{value:l[n.field],callback:function(t){e.$set(l,n.field,t)}}})}},{field:"image",key:"e",title:"image",width:"15%",renderBodyCell:function(e,t){var a=e.row,l=e.column;e.rowIndex;return t("img",{attrs:{src:a[l.field]}})}},{field:"textarea",key:"f",title:"textarea",width:"20%",ellipsis:{showTitle:!0,lineClamp:2}},{field:"text",key:"g",title:"text",width:"10%"},{field:"select",key:"h",title:"select",width:"5%"},{field:"datepicker",key:"i",title:"datepicker",width:"5%"},{field:"date",key:"j",title:"date",width:"5%"},{field:"",key:"k",title:"Action",width:"10%",align:"center",fixed:"right",renderBodyCell:function(t,a){t.row,t.column;var l=t.rowIndex;return a("div",{class:"md-layout md-alignment-center-center"},[a("md-button",{class:"md-primary h-unset w-unset",on:{click:function(){return e.editRow(l)}}},[a("md-icon",["edit"])]),a("md-button",{class:"md-primary h-unset w-unset",on:{click:function(){return e.deleteRow(l)}}},[a("md-icon",["delete"])])])}}],article:[],search:null,searched:[],msgModal:!1,Msg:""}},methods:{editRow:function(e){alert("eidt row number:".concat(e))},deleteRow:function(e){this.tableData.splice(e,1)},searchInputChange:function(e){this.searchText=e.target.value}},created:function(){this.searched=this.article},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,l,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/article");case 3:a=t.sent,l=a.data,e.article=l.result.map((function(e){return e.image&&(e.image="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API,"/file/").concat(e.image)),e})),t.next=15;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),n="",n=null===t.t0.response.data.message?t.t0:t.t0.response.data.message,e.Msg=n,e.msgModal=!0;case 15:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),s=r,d=a("2877"),o=Object(d["a"])(s,l,n,!1,null,null,null);t["default"]=o.exports},a434:function(e,t,a){"use strict";var l=a("23e7"),n=a("23cb"),i=a("a691"),r=a("50c4"),s=a("7b0b"),d=a("65f0"),o=a("8418"),c=a("1dde"),m=c("splice"),u=Math.max,f=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var a,l,c,m,v,h,g=s(this),w=r(g.length),y=n(e,w),_=arguments.length;if(0===_?a=l=0:1===_?(a=0,l=w-y):(a=_-2,l=f(u(i(t),0),w-y)),w+a-l>b)throw TypeError(p);for(c=d(g,l),m=0;m<l;m++)v=y+m,v in g&&o(c,m,g[v]);if(c.length=l,a<l){for(m=y;m<w-l;m++)v=m+l,h=m+a,v in g?g[h]=g[v]:delete g[h];for(m=w;m>w-l+a;m--)delete g[m-1]}else if(a>l)for(m=w-l;m>y;m--)v=m+l-1,h=m+a-1,v in g?g[h]=g[v]:delete g[h];for(m=0;m<a;m++)g[m+y]=arguments[m+2];return g.length=w-l+a,c}})},a480:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageReply"}},[e._v(" ManageReplyManageReply ")])},n=[],i={name:"ManageReply"},r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports},d81d:function(e,t,a){"use strict";var l=a("23e7"),n=a("b727").map,i=a("1dde"),r=i("map");l({target:"Array",proto:!0,forced:!r},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e513:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageEditApp"}},[a("md-card",[a("md-card-header",{staticClass:"md-secondary"},[a("h4",{staticClass:"title"},[e._v("Edit Profile")]),a("p",{staticClass:"category"},[e._v("Complete your profile")])]),a("md-card-content",[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-33"},[a("md-field",[a("label",[e._v("User Name")]),a("md-input",{attrs:{type:"text"},model:{value:e.edit.username,callback:function(t){e.$set(e.edit,"username",t)},expression:"edit.username"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-33"},[a("md-field",[a("label",[e._v("Email Address")]),a("md-input",{attrs:{type:"email"},model:{value:e.edit.emailadress,callback:function(t){e.$set(e.edit,"emailadress",t)},expression:"edit.emailadress"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[e._v("First Name")]),a("md-input",{attrs:{type:"text"},model:{value:e.edit.firstname,callback:function(t){e.$set(e.edit,"firstname",t)},expression:"edit.firstname"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[e._v("Last Name")]),a("md-input",{attrs:{type:"text"},model:{value:e.edit.lastname,callback:function(t){e.$set(e.edit,"lastname",t)},expression:"edit.lastname"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-100"},[a("md-field",{attrs:{maxlength:"5"}},[a("label",[e._v("About Me")]),a("md-textarea",{model:{value:e.edit.aboutme,callback:function(t){e.$set(e.edit,"aboutme",t)},expression:"edit.aboutme"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-100 text-right"},[a("md-button",{staticClass:"md-raised md-success"},[e._v("Update Profile")])],1)])])],1)],1)},n=[],i={name:"ManageEditApp",data:function(){return{edit:{username:null,disabled:null,emailadress:null,lastname:null,firstname:null,address:null,city:null,country:null,code:null,aboutme:"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."}}}},r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports},ed7c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageMemberData"}},[a("md-table",{attrs:{"md-card":""},on:{"md-selected":e.onSelect},scopedSlots:e._u([{key:"md-table-alternate-header",fn:function(t){var l=t.count;return a("md-table-toolbar",{},[a("div",{staticClass:"md-toolbar-section-start"},[e._v(e._s(e.getAlternateLabel(l)))]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[e._v("delete")])],1)],1)])}},{key:"md-table-row",fn:function(t){var l=t.item;return a("md-table-row",{attrs:{"md-disabled":l.name.includes("Stave"),"md-selectable":"multiple","md-auto-select":""}},[a("md-table-cell",{attrs:{"md-label":"Name","md-sort-by":"name"}},[e._v(e._s(l.name))]),a("md-table-cell",{attrs:{"md-label":"Email","md-sort-by":"email"}},[e._v(e._s(l.email))]),a("md-table-cell",{attrs:{"md-label":"Gender","md-sort-by":"gender"}},[e._v(e._s(l.gender))]),a("md-table-cell",{attrs:{"md-label":"Job Title","md-sort-by":"title"}},[e._v(e._s(l.title))])],1)}}]),model:{value:e.people,callback:function(t){e.people=t},expression:"people"}},[a("md-table-toolbar",[a("h1",{staticClass:"md-title"},[e._v("With auto select and alternate headers")])])],1)],1)},n=[],i=(a("99af"),{name:"ManageMemberData",data:function(){return{selected:{},people:[{name:"Shawna Dubbin",email:"sdubbin0@geocities.com",gender:"Male",title:"Assistant Media Planner"},{name:"Odette Demageard",email:"odemageard1@spotify.com",gender:"Female",title:"Account Coordinator"},{name:"Lonnie Izkovitz",email:"lizkovitz3@youtu.be",gender:"Female",title:"Operator"},{name:"Thatcher Stave",email:"tstave4@reference.com",gender:"Male",title:"Software Test Engineer III"},{name:"Clarinda Marieton",email:"cmarietonh@theatlantic.com",gender:"Female",title:"Paralegal"}]}},methods:{onSelect:function(e){this.selected=e},getAlternateLabel:function(e){var t="";return e>1&&(t="s"),"".concat(e," user").concat(t," selected")}}}),r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports},f74b:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manage"}},[a("md-tabs",{attrs:{"md-sync-route":""},on:{"md-changed":e.checkNewPosts},scopedSlots:e._u([{key:"md-tab",fn:function(t){var l=t.tab;return[e._v(" "+e._s(l.label)+" "),l.data.badge?a("i",{staticClass:"badge"},[e._v(e._s(l.data.badge))]):e._e()]}}])},[a("md-tab",{attrs:{id:"tab-Home","md-label":"Home",to:"/manage",exact:""}},[a("router-view")],1),a("md-tab",{attrs:{id:"tab-memberData","md-label":"memberData",to:"/manage/memberData"}},[a("router-view")],1),a("md-tab",{attrs:{id:"tab-article","md-label":"article",to:"/manage/article"}},[a("router-view")],1),a("md-tab",{attrs:{id:"tab-template","md-label":"template",to:"/manage/template"}},[a("router-view")],1),a("md-tab",{attrs:{id:"tab-reply","md-label":"reply",to:"/manage/reply","md-template-data":{badge:e.newPosts}},on:{click:e.clearNewPosts}},[a("router-view")],1),a("md-tab",{attrs:{id:"tab-special","md-label":"special",to:"/manage/special"}},[a("router-view")],1),a("md-tab",{attrs:{id:"tab-editApp","md-label":"editApp",to:"/manage/editApp"}},[a("router-view")],1)],1)],1)},n=[],i={name:"Manage",data:function(){return{newPosts:0,checkInterval:null}},methods:{clearCheckPosts:function(){window.clearInterval(this.checkInterval),this.checkInterval=null},clearNewPosts:function(){this.clearCheckPosts(),this.newPosts=0},checkNewPosts:function(e){var t=this;"tab-posts"===e||this.checkInterval||(this.checkInterval=window.setInterval((function(){99===t.newPosts?(t.newPosts="99+",t.clearCheckPosts()):t.newPosts++}),1e3))}},mounted:function(){this.checkNewPosts()}},r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports},f761:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"manageHome"}},[e._v(" ManageHomeManageHome ")])},n=[],i={name:"ManageHome"},r=i,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=manage.fec3eb35.js.map