(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},o=[];function a(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d25268c9"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=c[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3de4":function(t,e,n){},"43c8":function(t,e,n){},"6acc":function(t,e,n){},7014:function(t,e,n){"use strict";n("3de4")},"9e22":function(t,e,n){"use strict";n("6acc")},c971:function(t,e,n){"use strict";n("43c8")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["g"])("Home"),a=Object(r["g"])(" | "),u=Object(r["g"])("About");function i(t,e){var n=Object(r["y"])("router-link"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("div",c,[Object(r["h"])(n,{to:"/"},{default:Object(r["F"])((function(){return[o]})),_:1}),a,Object(r["h"])(n,{to:"/about"},{default:Object(r["F"])((function(){return[u]})),_:1})]),Object(r["h"])(i)],64)}n("9e22");const s={};s.render=i;var l=s,p=(n("d3b7"),n("6c02")),f=n("cf05"),b=n.n(f),d=Object(r["H"])("data-v-572c7d76");Object(r["u"])("data-v-572c7d76");var O={class:"home"},j=Object(r["h"])("img",{alt:"Vue logo",src:b.a},null,-1),h=Object(r["h"])("div",null,"Loading...",-1);Object(r["s"])();var m=d((function(t,e,n,c,o,a){var u=Object(r["y"])("PostComponent");return Object(r["r"])(),Object(r["e"])("div",O,[j,t.error?(Object(r["r"])(),Object(r["e"])("pre",{key:0,class:"danger",textContent:Object(r["A"])(t.error)},null,8,["textContent"])):(Object(r["r"])(),Object(r["e"])(r["b"],{key:1},{default:d((function(){return[Object(r["h"])(u,{key:t.routerPath})]})),fallback:d((function(){return[h]})),_:1}))])})),v=Object(r["H"])("data-v-310ba40e");Object(r["u"])("data-v-310ba40e");var g={class:"container"},P=Object(r["h"])("h1",null,"Latest Posts",-1),y={class:"create-text"},w=Object(r["h"])("label",{for:"create-post"},"Say something",-1),x={key:0},k=Object(r["h"])("hr",null,null,-1),_={class:"posts-container"};Object(r["s"])();var S=v((function(t,e,n,c,o,a){return Object(r["r"])(),Object(r["e"])("div",g,[P,Object(r["h"])("div",y,[w,Object(r["G"])(Object(r["h"])("input",{type:"text",id:"create-post","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.text=e}),placeholder:"Create a post"},null,512),[[r["D"],t.text]]),Object(r["h"])("button",{onClick:e[2]||(e[2]=function(){return t.createPost&&t.createPost.apply(t,arguments)})},"Post!")]),t.posting?(Object(r["r"])(),Object(r["e"])("div",x,"Posting...")):Object(r["f"])("",!0),k,Object(r["h"])("div",_,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(t.allPosts,(function(e,n){return Object(r["r"])(),Object(r["e"])("div",{class:"post",key:e._id,index:n,item:e},[Object(r["g"])(Object(r["A"])("".concat(t.formattedTimeString(e.createdAt)))+" ",1),Object(r["h"])("p",{class:"text",textContent:Object(r["A"])(e.text)},null,8,["textContent"]),Object(r["h"])("i",{onClick:function(n){return t.deletePost(e._id)},class:"fas fa-trash-alt"},null,8,["onClick"])],8,["index","item"])})),128))])])})),C=n("5530"),R=(n("96cf"),n("1da1")),T=n("5502"),A=Object(r["i"])({name:"PostComponent",setup:function(){return Object(R["a"])(regeneratorRuntime.mark((function t(){var e,n,c,o,a,u,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=function(){return s=Object(R["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.dispatch("Posts/deletePost",e);case 2:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)},i=function(t){return s.apply(this,arguments)},u=function(){return u=Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.posting=!0,t.next=3,c.dispatch("Posts/addPost",n.value);case 3:n.value="",e.posting=!1;case 5:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)},a=function(){return u.apply(this,arguments)},e=Object(r["v"])({posting:!1}),n=Object(r["w"])(""),c=Object(T["b"])(),o=Object(r["c"])((function(){return c.state.Posts.posts})),t.next=10,c.dispatch("Posts/fetchPosts");case 10:return l=function(t){return"".concat(t.toUTCString())},t.abrupt("return",Object(C["a"])(Object(C["a"])({allPosts:o,text:n,createPost:a,formattedTimeString:l},Object(r["B"])(e)),{},{deletePost:i}));case 12:case"end":return t.stop()}}),t)})))()}});n("c971");A.render=S,A.__scopeId="data-v-310ba40e";var E=A,H=Object(r["i"])({name:"Home",components:{PostComponent:E},setup:function(){var t=Object(p["c"])(),e=Object(r["c"])((function(){return t.fullPath})),n=Object(r["w"])("");return Object(r["p"])((function(t){var e;console.log("Error Occured!!!");var r=null!==(e=null===t||void 0===t?void 0:t.message)&&void 0!==e?e:t;return n.value=JSON.stringify(r,null,2),!1})),{error:n,routerPath:e}}});n("7014");H.render=m,H.__scopeId="data-v-572c7d76";var L=H,M=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],J=Object(p["a"])({history:Object(p["b"])("/"),routes:M}),D=J,F=(n("d81d"),n("bc3a")),I=n.n(F),U="/api/posts";function V(){return new Promise((function(t,e){I.a.get(U).then((function(e){var n=e.data;t(n.map((function(t){return Object(C["a"])(Object(C["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))}),(function(t){return e(t)}))}))}function q(t){return I.a.post(U,{text:t})}function B(t){return I.a.delete("".concat(U,"/").concat(t))}var G={posts:[]},N={SET_POSTS:function(t,e){return t.posts=e}},z={},K={fetchPosts:function(t){return Object(R["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,V();case 3:r=e.sent,n("SET_POSTS",r);case 5:case"end":return e.stop()}}),e)})))()},addPost:function(t,e){return Object(R["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.commit,r=t.dispatch,n.next=3,q(e);case 3:n.sent,r("fetchPosts");case 5:case"end":return n.stop()}}),n)})))()},deletePost:function(t,e){return Object(R["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.commit,r=t.dispatch,n.next=3,B(e);case 3:n.sent,r("fetchPosts");case 5:case"end":return n.stop()}}),n)})))()}},Q={namespaced:!0,state:G,mutations:N,getters:z,actions:K},W=Object(T["a"])({state:{},mutations:{},actions:{},modules:{Posts:Q}});Object(r["d"])(l).use(W).use(D).mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.cd1f2532.js.map