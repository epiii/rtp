(this["webpackJsonpreact-toped-pokemon"]=this["webpackJsonpreact-toped-pokemon"]||[]).push([[0],{180:function(e,t,a){e.exports=a(362)},361:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(90),i=a(35),m=a(364),s=a(367),u=a(9),p=m.a.Header;m.a.Content,m.a.Footer;var d=function(){return r.a.createElement(p,{style:{backgroundColor:"#91d5ff",position:"fixed",zIndex:1,width:"100%"}},r.a.createElement(s.a,Object(c.a)({mode:"horizontal",defaultSelectedKeys:["all"],style:{lineHeight:"64px",backgroundColor:"#91d5ff"}},"mode","horizontal"),r.a.createElement(s.a.Item,{key:"all"},r.a.createElement(i.b,{to:"/rtp/wild-pokemon-list"},r.a.createElement(u.a,{type:"appstore"}),"All")),r.a.createElement(s.a.Item,{key:"alipay"},r.a.createElement(i.b,{to:"/rtp/my-pokemon-list"},r.a.createElement(u.a,{type:"mail"}),"My Collection"))))},f=a(15),E=a(374),g=a(371),b=a(372),v=a(46),h=E.a.Meta;function y(e){var t=e.pokemon,a=e.loading;console.log(t);return t?t.map((function(e){var t=e.url.split("/");return a?r.a.createElement(g.a,{loading:a,avatar:"circle",paragraph:!0}):r.a.createElement(i.b,{key:e.name,to:"/rtp/wild-pokemon-detail/".concat(t[6])},r.a.createElement(E.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:"https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/"+t[6]+".png"})},r.a.createElement(h,{title:e.name,description:""})))})):r.a.createElement(b.a,{status:"warning",title:"You don't have any pokemon",extra:r.a.createElement(i.b,{to:"/rtp/wild-pokemon-list"},r.a.createElement(v.a,{type:"primary",key:"console"},"find pokemon"))})}var k=a(45),j=a.n(k);function O(e){var t=e.goToNextPage,a=e.goToPrevPage;return r.a.createElement("div",null,a&&r.a.createElement(v.a,{type:"primary",onClick:a},"Prev"),"\xa0",t&&r.a.createElement(v.a,{type:"primary",onClick:t},"Next"))}var w=a(62),S=a(373);function x(e){var t=Object(n.useState)(localStorage.getItem(e)),a=Object(f.a)(t,2),r=a[0],o=a[1];return[r,function(t){localStorage.setItem(e,t),o(t)}]}var P="https://pokeapi.co/api/v2/pokemon";var T=function(){var e=x("caughtPokemon"),t=Object(f.a)(e,2),a=t[0],o=(t[1],Object(n.useState)([])),l=Object(f.a)(o,2),c=l[0],i=l[1],m=Object(n.useState)(P),s=Object(f.a)(m,2),u=(s[0],s[1],Object(n.useState)()),p=Object(f.a)(u,2),d=(p[0],p[1],Object(n.useState)()),E=Object(f.a)(d,2),g=(E[0],E[1],Object(n.useState)(!0)),b=Object(f.a)(g,2),v=b[0],h=b[1];return console.log(c),Object(n.useEffect)((function(){i(a),h(!0)}),[]),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Pokemon List")),r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"middle"}),r.a.createElement("br",null),r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(y,{loading:v,pokemon:c})),r.a.createElement("br",null),r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"middle"}),r.a.createElement("div",null,r.a.createElement(S.a,null)))},C="https://pokeapi.co/api/v2/pokemon";var I=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(C),c=Object(f.a)(l,2),i=c[0],m=c[1],s=Object(n.useState)(),u=Object(f.a)(s,2),p=u[0],d=u[1],E=Object(n.useState)(),g=Object(f.a)(E,2),b=g[0],v=g[1],h=Object(n.useState)(!0),k=Object(f.a)(h,2),x=k[0],P=k[1];function T(){m(p)}function I(){m(b)}return(Object(n.useEffect)((function(){var e;return P(!0),j.a.get(C),j.a.get(i,{cancelToken:new j.a.CancelToken((function(t){return e=t}))}).then((function(e){P(!1),d(e.data.next),v(e.data.previous),o(e.data.results.map((function(e){return e})))})),function(){return e()}}),[i]),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"My Pokemon List")),r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(O,{goToNextPage:p?T:null,goToPrevPage:b?I:null})),r.a.createElement("br",null),r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(y,{loading:x,pokemon:a})),r.a.createElement("br",null),r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(O,{goToNextPage:p?T:null,goToPrevPage:b?I:null})),r.a.createElement("div",null,r.a.createElement(S.a,null))))},N=a(167),A=a(176),W=a(366);function z(e){var t=e.moves;return r.a.createElement(W.a,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(W.a.Item,null,e.move.name)}})}function M(e){var t=e.types;return(r.a.createElement(W.a,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(W.a.Item,null,e.type.name)}}))}var L=a(132),B=a(370),F=a(133),H=a(168),J=a(32),R=a(365),U=a(375),K=a(376),D=a(368),G=a(369);var Y=function(e){var t=e.match,a=Object(n.useState)([]),o=Object(f.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(!1),m=Object(f.a)(i,2),s=m[0],p=(m[1],Object(n.useState)([])),d=Object(f.a)(p,2),g=(d[0],d[1]),b=Object(n.useState)([]),h=Object(f.a)(b,2),y=h[0],k=h[1],O=Object(n.useState)([]),S=Object(f.a)(O,2),P=S[0],T=S[1],C=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"),I=Object(f.a)(C,2),W=I[0],Y=(I[1],Object(n.useState)(!0)),$=Object(f.a)(Y,2),q=$[0],Q=$[1],V=Object(n.useState)(!1),X=Object(f.a)(V,2),Z=X[0],_=X[1],ee=Object(n.useState)(),te=Object(f.a)(ee,2),ae=(te[0],te[1]),ne=Object(n.useState)(!1),re=Object(f.a)(ne,2),oe=re[0],le=re[1],ce=Object(n.useState)(!1),ie=Object(f.a)(ce,2),me=ie[0],se=ie[1],ue=x("caughtPokemon"),pe=Object(f.a)(ue,2),de=pe[0],fe=pe[1];console.log("caughtPokemon",de),Object(n.useEffect)((function(){Ee()}),[W]);var Ee=function(){var e;return Q(!0),_(!0),j.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.params.id),{cancelToken:new j.a.CancelToken((function(t){return e=t}))}).then((function(e){console.log(e),Q(!1),_(!1),c(e.data),T(e.data.moves),k(e.data.types)})),function(){return e()}};if(q)return"loading...";var ge="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/",be=function(){le(!0)},ve=function(){B.a.error({title:"Failed ",content:"Sorry failed to catch pokemon, try again"})},he=F.a.TabPane,ye=E.a.Meta;return l.sprites,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(H.a,{spinning:Z},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Wild Pokemon Detail")),r.a.createElement("section",null,r.a.createElement(w.a,{type:"flex",justify:"space-around",align:"top"},r.a.createElement(J.a,{xs:24,sm:4,md:6,lg:8,xl:4},r.a.createElement(R.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement(E.a,{cover:r.a.createElement("img",{alt:"example",src:ge+t.params.id+".png"})},r.a.createElement(ye,{title:"",description:"Front Side"}))),r.a.createElement("div",null,r.a.createElement(E.a,{cover:r.a.createElement("img",{alt:"example",src:ge+"back/"+t.params.id+".png"})},r.a.createElement(ye,{title:"",description:"Back Side"}))))),r.a.createElement(J.a,{style:{flex:.5},xs:24,sm:4,md:12,lg:8,xl:10},r.a.createElement(U.a,{title:"Profile"},r.a.createElement(U.a.Item,{label:"name"},l.name),r.a.createElement(U.a.Item,{label:"height"},l.height),r.a.createElement(U.a.Item,{label:"weigth"},l.weight))),r.a.createElement(J.a,{style:{flex:.5},xs:24,sm:16,md:6,lg:8,xl:10}))),r.a.createElement("section",null,r.a.createElement("div",null,!s&&r.a.createElement(v.a,{type:"primary",onClick:function(){return function(e){_(!0),setTimeout((function(){var t=Math.random();console.log("masuk itung"),t<.5?(g((function(t){return console.log("before",t),t.filter((function(t){return e.id==t.id})).length>0||(t=[].concat(Object(A.a)(t),[e])).sort((function(e,t){return e.id-t.id})),console.log("after",t),t})),be()):(ve(),_(!1))}),1e3)}(l)}},"catch"),r.a.createElement(B.a,{title:"Gotcha",visible:oe,confirmLoading:me,onOk:function(){return se(!0),void setTimeout((function(){ae(l.name),fe(JSON.stringify(l)),_(!1),le(!1),se(!1)}),2e3)},onCancel:function(){return console.log("Clicked cancel button"),_(!1),void le(!1)}},r.a.createElement(K.a,{message:"Congratulation, you got a new pokemon",type:"success",showIcon:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"rename (alias name)"),r.a.createElement(D.a,{onSubmit:function(){return alert("haha")},className:"login-form"},r.a.createElement(D.a.Item,null,r.a.createElement(G.a,{prefix:r.a.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"name"})))))),r.a.createElement("section",{className:"detail-info"},r.a.createElement(L.StickyContainer,null,r.a.createElement(F.a,{defaultActiveKey:"1",renderTabBar:function(e,t){return r.a.createElement(L.Sticky,{bottomOffset:80},(function(a){var n=a.style;return r.a.createElement(t,Object.assign({},e,{style:Object(N.a)({},n,{zIndex:1,background:"#fff"})}))}))}},r.a.createElement(he,{tab:"Moves",key:"1",style:{}},r.a.createElement(z,{moves:P})),r.a.createElement(he,{tab:"Types",key:"2"},r.a.createElement(M,{types:y})))))))},$=a(47),q=(a(361),m.a.Content);m.a.Footer;var Q=function(){return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(d,null),r.a.createElement(q,{style:{padding:"0 50px",marginTop:64}},r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380}},r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/rtp",component:I}),r.a.createElement($.a,{path:"/rtp/my-pokemon-list",component:T}),r.a.createElement($.a,{path:"/rtp/wild-pokemon-list",component:I}),r.a.createElement($.a,{path:"/rtp/wild-pokemon-detail/:id",component:Y}))))))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(Q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rtp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rtp","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()}},[[180,1,2]]]);
//# sourceMappingURL=main.355d98cb.chunk.js.map