(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member"],{"52fe":function(t,r,e){"use strict";e("aa72")},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,e){var n=e("1d80"),a=e("5899"),o="["+a+"]",s=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,r,e){var n=e("861d"),a=e("d2bb");t.exports=function(t,r,e){var o,s;return a&&"function"==typeof(o=r.constructor)&&o!==e&&n(s=o.prototype)&&s!==e.prototype&&a(t,s),t}},"80d2":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"member"}},[e("h1",[t._v("This is an member page")]),e("Avatar"),e("Anonymous")],1)},a=[],o=e("df3a"),s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("h2",[t._v("匿名"+t._s(t.anonymous[t.random()]))])},u=[],c={name:"Anonymous",props:{anonymous:{type:Array,default:function(){return["水獺","烏龜","玫瑰","貓咪","犀牛","小鹿","大魚","獵豹","老虎","海豚","熊貓","鴿子","刺蝟","黑狗","小兔","天鵝","烏鴉","小雞","海鷗"]}}},methods:{random:function(){return Math.floor(19*Math.random())}}},i=c,f=e("2877"),l=Object(f["a"])(i,s,u,!1,null,null,null),p=l.exports,m={name:"Member",data:function(){return{variant:"beam",size:80,colors:["3B4058","2A6E78","7A907C","C9B180","3E6B48","B5B479","F7E6A6"]}},components:{Avatar:o["a"],Anonymous:p}},d=m,v=Object(f["a"])(d,n,a,!1,null,null,null);r["default"]=v.exports},a9e3:function(t,r,e){"use strict";var n=e("83ab"),a=e("da84"),o=e("94ca"),s=e("6eeb"),u=e("5135"),c=e("c6b6"),i=e("7156"),f=e("c04e"),l=e("d039"),p=e("7c73"),m=e("241c").f,d=e("06cf").f,v=e("9bf2").f,A=e("58a8").trim,h="Number",b=a[h],E=b.prototype,N=c(p(E))==h,I=function(t){var r,e,n,a,o,s,u,c,i=f(t,!1);if("string"==typeof i&&i.length>2)if(i=A(i),r=i.charCodeAt(0),43===r||45===r){if(e=i.charCodeAt(2),88===e||120===e)return NaN}else if(48===r){switch(i.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+i}for(o=i.slice(2),s=o.length,u=0;u<s;u++)if(c=o.charCodeAt(u),c<48||c>a)return NaN;return parseInt(o,n)}return+i};if(o(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var g,y=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof y&&(N?l((function(){E.valueOf.call(e)})):c(e)!=h)?i(new b(I(r)),e,y):I(r)},_=n?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;_.length>B;B++)u(b,g=_[B])&&!u(y,g)&&v(y,g,d(b,g));y.prototype=E,E.constructor=y,s(a,h,y)}},aa72:function(t,r,e){},df3a:function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("img",{staticClass:"avatar",attrs:{src:"https://source.boringavatars.com/"+t.variant+"/"+t.size+"/?colors="+t.colors[t.random()]+","+t.colors[t.random()],alt:"Avatar"}})},a=[],o=(e("a9e3"),{name:"Avatar",props:{size:{type:Number,default:80},variant:{type:String,default:"beam"},address:{type:String,require:!0},colors:{type:Array,default:function(){return["3B4058","2A6E78","7A907C","C9B180","3E6B48","B5B479","F7E6A6"]}}},methods:{random:function(){return Math.floor(7*Math.random())}}}),s=o,u=(e("52fe"),e("2877")),c=Object(u["a"])(s,n,a,!1,null,null,null);r["a"]=c.exports}}]);
//# sourceMappingURL=member.a29f502d.js.map