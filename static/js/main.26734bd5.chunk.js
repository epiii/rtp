(this["webpackJsonpreact-toped-pokemon"]=this["webpackJsonpreact-toped-pokemon"]||[]).push([[0],{167:function(e,t,a){e.exports=a(333)},332:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),l=a(150),i=a(35),s=a(335),m=a(121),u=a(9),p=s.a.Header;s.a.Content,s.a.Footer;var d=function(){return o.a.createElement(p,{style:{position:"fixed",zIndex:1,width:"100%"}},o.a.createElement(m.a,Object(l.a)({theme:"dark",mode:"horizontal",defaultSelectedKeys:["all"],style:{lineHeight:"64px"}},"mode","horizontal"),o.a.createElement(m.a.Item,{key:"all"},o.a.createElement(i.b,{to:"/rtp/wild-pokemon-list"},o.a.createElement(u.a,{type:"appstore"}),"All")),o.a.createElement(m.a.Item,{key:"alipay"},o.a.createElement(i.b,{to:"/rtp/my-pokemon-list"},o.a.createElement(u.a,{type:"mail"}),"My Collection"))))},f=a(91),E=a(15),v=a(37),g=a.n(v);var h=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),l=Object(E.a)(c,2),i=l[0],s=l[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e="https://pokeapi.co/api/v2/pokemon/"+function(){var e=Math.ceil(1),t=Math.floor(151);return Math.floor(Math.random()*(t-e+1))+e}();g.a.get(e).then((function(e){console.log(e.data),s(e.data)}))},u="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/";return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("header",null,o.a.createElement("h1",{className:"title"},"My Pokemon List")),o.a.createElement("section",{className:"wild-pokemon"},o.a.createElement("h2",null,"wild encounter"),o.a.createElement("img",{src:u+i.id+".png",className:"sprite"}),o.a.createElement("h3",null,i.name),o.a.createElement("button",{onClick:function(){return e=i,r((function(t){return t.filter((function(t){return e.id==t.id})).length>0||(t=[].concat(Object(f.a)(t),[e])).sort((function(e,t){return e.id-t.id})),t})),void m();var e},className:"catch-btn"},"catch")),o.a.createElement("section",{className:"pokedex"},o.a.createElement("h2",null,"pokedex"),o.a.createElement("div",{className:"pokedex-list"},a.map((function(e){return o.a.createElement("div",{className:"pokemon",key:e.id},o.a.createElement("img",{src:u+e.id+".png",className:"sprite"}),o.a.createElement("h3",{className:"pokemon-name"},e.name),o.a.createElement("button",{onClick:function(){return t=e.id,void r((function(e){return e.filter((function(e){return e.id!=t}))}));var t},className:"remove"},"x"))})))))},b=a(337),k=a(342),y=b.a.Meta;function j(e){var t=e.pokemon,a=e.loading;console.log(t);return t.map((function(e){var t=e.url.split("/");return a?o.a.createElement(k.a,{loading:a,avatar:"circle",paragraph:!0}):o.a.createElement(i.b,{key:e.name,to:"/rtp/wild-pokemon-detail/".concat(t[6])},o.a.createElement(b.a,{hoverable:!0,style:{width:240},cover:o.a.createElement("img",{alt:"example",src:"https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/"+t[6]+".png"})},o.a.createElement(y,{title:e.name,description:""})))}))}var O=a(42);function w(e){var t=e.goToNextPage,a=e.goToPrevPage;return o.a.createElement("div",null,a&&o.a.createElement(O.a,{type:"primary",onClick:a},"Prev"),"\xa0",t&&o.a.createElement(O.a,{type:"primary",onClick:t},"Next"))}var N=a(58),S=a(343),x="https://pokeapi.co/api/v2/pokemon";var T=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(x),l=Object(E.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)(),u=Object(E.a)(m,2),p=u[0],d=u[1],f=Object(n.useState)(),v=Object(E.a)(f,2),h=v[0],b=v[1],k=Object(n.useState)(!0),y=Object(E.a)(k,2),O=y[0],T=y[1];function P(){s(p)}function C(){s(h)}return(Object(n.useEffect)((function(){var e;return T(!0),g.a.get(x),g.a.get(i,{cancelToken:new g.a.CancelToken((function(t){return e=t}))}).then((function(e){T(!1),d(e.data.next),b(e.data.previous),r(e.data.results.map((function(e){return e})))})),function(){return e()}}),[i]),o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("header",null,o.a.createElement("h1",{className:"title"},"Pokemon List")),o.a.createElement(N.a,{type:"flex",justify:"space-around",align:"middle"},o.a.createElement(w,{goToNextPage:p?P:null,goToPrevPage:h?C:null})),o.a.createElement("br",null),o.a.createElement(N.a,{type:"flex",justify:"space-around",align:"middle"},o.a.createElement(j,{loading:O,pokemon:a})),o.a.createElement("br",null),o.a.createElement(N.a,{type:"flex",justify:"space-around",align:"middle"},o.a.createElement(w,{goToNextPage:p?P:null,goToPrevPage:h?C:null})),o.a.createElement("div",null,o.a.createElement(S.a,null))))};function P(e){var t=e.moves;return o.a.createElement("div",{className:"pokemon-move"},t.map((function(e){return o.a.createElement("div",{key:e.move.name},e.move.name)})))}function C(e){var t=e.types;return o.a.createElement("div",{className:"pokemon-type"},t.map((function(e){return o.a.createElement("div",{key:e.type.name},e.type.name)})))}var A=a(336),I=a(344),M=a(340),W=a(338),L=a(339);var H=function(e){var t=e.match,a=Object(n.useState)([]),r=Object(E.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(!1),s=Object(E.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)([]),v=Object(E.a)(d,2),h=(v[0],v[1]),b=Object(n.useState)([]),k=Object(E.a)(b,2),y=k[0],j=k[1],w=Object(n.useState)([]),N=Object(E.a)(w,2),S=N[0],x=N[1],T=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"),H=Object(E.a)(T,2),U=H[0],z=(H[1],Object(n.useState)()),F=Object(E.a)(z,2),R=(F[0],F[1],Object(n.useState)()),B=Object(E.a)(R,2),J=(B[0],B[1],Object(n.useState)(!0)),_=Object(E.a)(J,2),D=_[0],K=_[1],$=Object(n.useState)(!1),q=Object(E.a)($,2),G=q[0],Q=q[1],V=Object(n.useState)("Confirmation"),X=Object(E.a)(V,2),Y=X[0],Z=X[1],ee=Object(n.useState)(!1),te=Object(E.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)(!1),re=Object(E.a)(oe,2),ce=re[0],le=re[1];Object(n.useEffect)((function(){ie()}),[U]);var ie=function(){var e;return K(!0),g.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.params.id),{cancelToken:new g.a.CancelToken((function(t){return e=t}))}).then((function(e){K(!1),Q(!1),l(e.data),x(e.data.moves),j(e.data.types)})),function(){return e()}};if(D)return"loading...";var se=function(){var e=prompt("you got it ^_^, \ngive your pokemon a name ","");e&&p(!0),console.log(e)};return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(A.a,{spinning:G,delay:500},o.a.createElement("header",null,o.a.createElement("h1",{className:"title"},"Wild Pokemon Detail")),o.a.createElement("section",{className:"wild-pokemon"},o.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/"+t.params.id+".png",className:"sprite"}),o.a.createElement("h3",null,c.name)),o.a.createElement("section",null,o.a.createElement("div",null,!m&&o.a.createElement(O.a,{type:"primary",onClick:function(){return function(e){var t=Math.random();Q(!0),console.log(t),setTimeout((function(){Q(!1),t<.5?(h((function(t){return console.log("before",t),t.filter((function(t){return e.id==t.id})).length>0||(t=[].concat(Object(f.a)(t),[e])).sort((function(e,t){return e.id-t.id})),console.log("after",t),t})),se()):alert("failed :( , try again ")}),1e3)}(c)}},"catch"),o.a.createElement(O.a,{type:"primary",onClick:function(){ne(!0)}},"modal"),o.a.createElement(I.a,{message:"Failed",description:"Try to catch again, until you get the pokemon ^_^ ",type:"warning",showIcon:!0}),o.a.createElement(M.a,{title:"Title",visible:ae,onOk:function(){return Z("The modal will be closed after two seconds"),le(!0),void setTimeout((function(){ne(!1),le(!1)}),2e3)},confirmLoading:ce,onCancel:function(){return console.log("Clicked cancel button"),void ne(!1)}},o.a.createElement("p",null,Y),o.a.createElement(W.a,{onSubmit:function(){return alert("haha")},className:"login-form"},o.a.createElement(W.a.Item,null,o.a.createElement(L.a,{prefix:o.a.createElement(u.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}),",","}"))))),o.a.createElement("section",{className:"detail-info"},o.a.createElement("h3",null,"Types"),o.a.createElement(C,{types:y}),o.a.createElement("h3",null,"Moves"),o.a.createElement(P,{moves:S}))))},U=a(43),z=(a(332),a(341)),F=s.a.Content;s.a.Footer;var R=function(){return o.a.createElement(i.a,null,o.a.createElement(s.a,null,o.a.createElement(d,null),o.a.createElement(F,{style:{padding:"0 50px",marginTop:64}},o.a.createElement(z.a,{style:{margin:"16px 0"}},o.a.createElement(z.a.Item,null,"Home"),o.a.createElement(z.a.Item,null,"List"),o.a.createElement(z.a.Item,null,"App")),o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380}},o.a.createElement(U.c,null,o.a.createElement(U.a,{exact:!0,path:"/rtp",component:T}),o.a.createElement(U.a,{path:"/rtp/my-pokemon-list",component:h}),o.a.createElement(U.a,{path:"/rtp/wild-pokemon-list",component:T}),o.a.createElement(U.a,{path:"/rtp/wild-pokemon-detail/:id",component:H}))))))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rtp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rtp","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[167,1,2]]]);
//# sourceMappingURL=main.26734bd5.chunk.js.map