(this["webpackJsonpreact-toped-pokemon"]=this["webpackJsonpreact-toped-pokemon"]||[]).push([[0],{181:function(e,t,a){e.exports=a(363)},362:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=a(90),i=a(38),m=a(365),s=a(136),u=a(8),p=m.a.Header;m.a.Content,m.a.Footer;var d=function(){return r.a.createElement(p,{style:{backgroundColor:"#91d5ff",position:"fixed",zIndex:1,width:"100%"}},r.a.createElement(s.a,Object(l.a)({mode:"horizontal",defaultSelectedKeys:["all"],style:{lineHeight:"64px",backgroundColor:"#91d5ff"}},"mode","horizontal"),r.a.createElement(s.a.Item,{key:"all"},r.a.createElement(i.b,{to:"/rtp/wild-pokemon-list"},r.a.createElement(u.a,{type:"appstore"}),"All")),r.a.createElement(s.a.Item,{key:"alipay"},r.a.createElement(i.b,{to:"/rtp/my-pokemon-list"},r.a.createElement(u.a,{type:"mail"}),"My Collection"))))},f=a(98),E=a(16),g=a(40),b=a.n(g);var h=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({}),l=Object(E.a)(c,2),i=l[0],m=l[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){var e="https://pokeapi.co/api/v2/pokemon/"+function(){var e=Math.ceil(1),t=Math.floor(151);return Math.floor(Math.random()*(t-e+1))+e}();b.a.get(e).then((function(e){console.log(e.data),m(e.data)}))},u="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/";return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"My Pokemon List")),r.a.createElement("section",{className:"wild-pokemon"},r.a.createElement("h2",null,"wild encounter"),r.a.createElement("img",{src:u+i.id+".png",className:"sprite"}),r.a.createElement("h3",null,i.name),r.a.createElement("button",{onClick:function(){return e=i,o((function(t){return t.filter((function(t){return e.id==t.id})).length>0||(t=[].concat(Object(f.a)(t),[e])).sort((function(e,t){return e.id-t.id})),t})),void s();var e},className:"catch-btn"},"catch")),r.a.createElement("section",{className:"pokedex"},r.a.createElement("h2",null,"pokedex"),r.a.createElement("div",{className:"pokedex-list"},a.map((function(e){return r.a.createElement("div",{className:"pokemon",key:e.id},r.a.createElement("img",{src:u+e.id+".png",className:"sprite"}),r.a.createElement("h3",{className:"pokemon-name"},e.name),r.a.createElement("button",{onClick:function(){return t=e.id,void o((function(e){return e.filter((function(e){return e.id!=t}))}));var t},className:"remove"},"x"))})))))},v=a(374),k=a(372),y=v.a.Meta;function j(e){var t=e.pokemon,a=e.loading;console.log(t);return t.map((function(e){var t=e.url.split("/");return a?r.a.createElement(k.a,{loading:a,avatar:"circle",paragraph:!0}):r.a.createElement(i.b,{key:e.name,to:"/rtp/wild-pokemon-detail/".concat(t[6])},r.a.createElement(v.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:"https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/"+t[6]+".png"})},r.a.createElement(y,{title:e.name,description:""})))}))}var O=a(45);function w(e){var t=e.goToNextPage,a=e.goToPrevPage;return r.a.createElement("div",null,a&&r.a.createElement(O.a,{type:"primary",onClick:a},"Prev"),"\xa0",t&&r.a.createElement(O.a,{type:"primary",onClick:t},"Next"))}var x=a(63),S=a(373),N="https://pokeapi.co/api/v2/pokemon";var P=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(N),l=Object(E.a)(c,2),i=l[0],m=l[1],s=Object(n.useState)(),u=Object(E.a)(s,2),p=u[0],d=u[1],f=Object(n.useState)(),g=Object(E.a)(f,2),h=g[0],v=g[1],k=Object(n.useState)(!0),y=Object(E.a)(k,2),O=y[0],P=y[1];function C(){m(p)}function T(){m(h)}return(Object(n.useEffect)((function(){var e;return P(!0),b.a.get(N),b.a.get(i,{cancelToken:new b.a.CancelToken((function(t){return e=t}))}).then((function(e){P(!1),d(e.data.next),v(e.data.previous),o(e.data.results.map((function(e){return e})))})),function(){return e()}}),[i]),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Pokemon List")),r.a.createElement(x.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(w,{goToNextPage:p?C:null,goToPrevPage:h?T:null})),r.a.createElement("br",null),r.a.createElement(x.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(j,{loading:O,pokemon:a})),r.a.createElement("br",null),r.a.createElement(x.a,{type:"flex",justify:"space-around",align:"middle"},r.a.createElement(w,{goToNextPage:p?C:null,goToPrevPage:h?T:null})),r.a.createElement("div",null,r.a.createElement(S.a,null))))},C=a(170),T=a(367);function I(e){var t=e.moves;return r.a.createElement(T.a,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(T.a.Item,null,e.move.name)}})}function A(e){var t=e.types;return(r.a.createElement(T.a,{size:"small",bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(T.a.Item,null,e.type.name)}}))}var M=a(134),W=a(370),z=a(135),L=a(171),B=a(32),F=a(366),H=a(375),R=a(376),U=a(368),J=a(369);var K=function(e){var t=e.match,a=Object(n.useState)([]),o=Object(E.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(!1),m=Object(E.a)(i,2),s=m[0],p=(m[1],Object(n.useState)([])),d=Object(E.a)(p,2),g=(d[0],d[1]),h=Object(n.useState)([]),k=Object(E.a)(h,2),y=k[0],j=k[1],w=Object(n.useState)([]),S=Object(E.a)(w,2),N=S[0],P=S[1],T=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"),K=Object(E.a)(T,2),D=K[0],G=(K[1],Object(n.useState)(!0)),$=Object(E.a)(G,2),q=$[0],Q=$[1],V=Object(n.useState)(!1),X=Object(E.a)(V,2),Y=X[0],Z=X[1],_=Object(n.useState)(),ee=Object(E.a)(_,2),te=(ee[0],ee[1]),ae=Object(n.useState)(!1),ne=Object(E.a)(ae,2),re=ne[0],oe=ne[1],ce=Object(n.useState)(!1),le=Object(E.a)(ce,2),ie=le[0],me=le[1];Object(n.useEffect)((function(){se()}),[D]);var se=function(){var e;return Q(!0),Z(!0),b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.params.id),{cancelToken:new b.a.CancelToken((function(t){return e=t}))}).then((function(e){console.log(e),Q(!1),Z(!1),l(e.data),P(e.data.moves),j(e.data.types)})),function(){return e()}};if(q)return"loading...";var ue="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/",pe=function(){oe(!0)},de=function(){W.a.error({title:"Confirmation",content:"Failed, try again to catch it "})},fe=z.a.TabPane,Ee=v.a.Meta,ge=c.sprites;return console.log(ge),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(L.a,{spinning:Y,delay:500},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Wild Pokemon Detail")),r.a.createElement("section",null,r.a.createElement(x.a,{type:"flex",justify:"space-around",align:"top"},r.a.createElement(B.a,{xs:24,sm:4,md:6,lg:8,xl:4},r.a.createElement(F.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement(v.a,{cover:r.a.createElement("img",{alt:"example",src:ue+t.params.id+".png"})},r.a.createElement(Ee,{title:"",description:"Front Side"}))),r.a.createElement("div",null,r.a.createElement(v.a,{cover:r.a.createElement("img",{alt:"example",src:ue+"back/"+t.params.id+".png"})},r.a.createElement(Ee,{title:"",description:"Back Side"}))))),r.a.createElement(B.a,{style:{flex:.5},xs:24,sm:4,md:12,lg:8,xl:10},r.a.createElement(H.a,{title:"Pokemon Profile"},r.a.createElement(H.a.Item,{label:"name"},c.name),r.a.createElement(H.a.Item,{label:"height"},c.height),r.a.createElement(H.a.Item,{label:"weigth"},c.weight))),r.a.createElement(B.a,{style:{flex:.5},xs:24,sm:16,md:6,lg:8,xl:10}))),r.a.createElement("section",null,r.a.createElement("div",null,!s&&r.a.createElement(O.a,{type:"primary",onClick:function(){return function(e){Z(!0),setTimeout((function(){var t=Math.random();console.log("masuk itung"),t<.5?(g((function(t){return console.log("before",t),t.filter((function(t){return e.id==t.id})).length>0||(t=[].concat(Object(f.a)(t),[e])).sort((function(e,t){return e.id-t.id})),console.log("after",t),t})),pe()):(de(),Z(!1))}),1e3)}(c)}},"catch"),r.a.createElement(W.a,{title:"Gotcha",visible:re,confirmLoading:ie,onOk:function(){return me(!0),void setTimeout((function(){te(c.name),Z(!1),oe(!1),me(!1)}),2e3)},onCancel:function(){return console.log("Clicked cancel button"),Z(!1),void oe(!1)}},r.a.createElement(R.a,{message:"Congratulation, you got a new pokemon",type:"success",showIcon:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"rename (alias name)"),r.a.createElement(U.a,{onSubmit:function(){return alert("haha")},className:"login-form"},r.a.createElement(U.a.Item,null,r.a.createElement(J.a,{prefix:r.a.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"name"})))))),r.a.createElement("section",{className:"detail-info"},r.a.createElement(M.StickyContainer,null,r.a.createElement(z.a,{defaultActiveKey:"1",renderTabBar:function(e,t){return r.a.createElement(M.Sticky,{bottomOffset:80},(function(a){var n=a.style;return r.a.createElement(t,Object.assign({},e,{style:Object(C.a)({},n,{zIndex:1,background:"#fff"})}))}))}},r.a.createElement(fe,{tab:"Moves",key:"1",style:{height:200}},r.a.createElement(I,{moves:N})),r.a.createElement(fe,{tab:"Types",key:"2"},r.a.createElement(A,{types:y})))))))},D=a(46),G=(a(362),a(371)),$=m.a.Content;m.a.Footer;var q=function(){return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(d,null),r.a.createElement($,{style:{padding:"0 50px",marginTop:64}},r.a.createElement(G.a,{style:{margin:"16px 0"}},r.a.createElement(G.a.Item,null,"Home"),r.a.createElement(G.a.Item,null,"List"),r.a.createElement(G.a.Item,null,"App")),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380}},r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/rtp",component:P}),r.a.createElement(D.a,{path:"/rtp/my-pokemon-list",component:h}),r.a.createElement(D.a,{path:"/rtp/wild-pokemon-list",component:P}),r.a.createElement(D.a,{path:"/rtp/wild-pokemon-detail/:id",component:K}))))))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rtp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rtp","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}},[[181,1,2]]]);
//# sourceMappingURL=main.a4eabc8c.chunk.js.map