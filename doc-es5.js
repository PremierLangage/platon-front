!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/2RN":function(n,r,o){"use strict";o.r(r),o.d(r,"DashboardModule",(function(){return k}));var a=o("PCNd"),i=o("JAnZ"),s=o("0S4P"),l=o("D57K"),c=o("wCJS"),u=o("+OD8"),d=o("Vgaj"),m=o("vOrQ"),p=o("fpST"),f=o("4NIw"),h=o("3Awf"),g=o("NAIt"),v=o("Uez/"),b=o("hME1"),w=o("hCLc"),x=o("ydE+");function S(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",6),m["\u0275\u0275elementStart"](1,"mat-icon"),m["\u0275\u0275text"](2,"info_outline"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3," En savoir plus "),m["\u0275\u0275elementEnd"]())}function y(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h2"),m["\u0275\u0275text"](1,"Aucun cours"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275text"](3," Vous n'\xeates inscrit \xe0 aucun cours pour le moment ! "),m["\u0275\u0275elementEnd"]())}var M,C,E,P=[{path:"",component:(M=function(){function n(t,r){e(this,n),this.authService=t,this.introService=r,this.searchBar={placeholder:"Essayez un nom de cours...",filterer:{filter:function(e){return Promise.resolve({completions:[],queryMatches:[]})}},trigger:new d.Subject,onChange:function(e){},onEmpty:function(){}}}var r,o,a;return r=n,(o=[{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.ready();case 2:this.user=e.sent,setTimeout((function(){return Object(l.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.introService.create();case 2:(t=e.sent).setOptions({scrollToElement:!0,disableInteraction:!0,showButtons:!0,showBullets:!1,showStepNumbers:!1,doneLabel:"Terminer",nextLabel:"Suivant",skipLabel:"Terminer",prevLabel:"Pr\xe9cedent",steps:[{intro:"L'espace de travail est un espace r\xe9serv\xe9 aux enseignants pour cr\xe9er des exercices et activit\xe9s",element:"#nav-link-workspace"},{intro:"Vous pouvez \xe0 tout moment acc\xe9der au forum pour poser des questions aux utilisateurs de la plateforme",element:"#nav-link-forum"},{intro:"La documentation est l'endroit id\xe9al pour comprendre le fonctionnement de la plateforme",element:"#nav-link-doc"},{intro:"Un espace r\xe9serv\xe9 aux utilisateurs admin de la plateforme",element:"#nav-link-admin-panel"},{intro:"La barre de navigation de la page courante",element:"mat-drawer"}]}),t.addHints(),t.start();case 4:case"end":return e.stop()}}),e,this)})))}));case 4:case"end":return e.stop()}}),e,this)})))}}])&&t(r.prototype,o),a&&t(r,a),n}(),M.\u0275fac=function(e){return new(e||M)(m["\u0275\u0275directiveInject"](c.c),m["\u0275\u0275directiveInject"](u.e))},M.\u0275cmp=m["\u0275\u0275defineComponent"]({type:M,selectors:[["app-dashboard"]],decls:12,vars:5,consts:[["app",""],["drawerTitle","PLaTon"],[3,"bannerTitle","bannerImage","bannerSearchBar","bannerActions"],["actions",""],[3,"nzNotFoundContent"],["content",""],["mat-raised-button","",1,"banner-action"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"app-container",null,0),m["\u0275\u0275elementStart"](2,"app-drawer",1),m["\u0275\u0275element"](3,"app-nav"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"app-content"),m["\u0275\u0275elementStart"](5,"app-banner",2),m["\u0275\u0275template"](6,S,4,0,"ng-template",null,3,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"main"),m["\u0275\u0275elementStart"](9,"nz-empty",4),m["\u0275\u0275template"](10,y,4,0,"ng-template",null,5,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275reference"](7),r=m["\u0275\u0275reference"](11);m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("bannerTitle","Cours")("bannerImage","assets/images/illustrations/laptop2.svg")("bannerSearchBar",t.searchBar)("bannerActions",n),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("nzNotFoundContent",r)}},directives:[p.a,f.a,h.a,g.a,v.a,b.a,w.b,x.a],styles:["main[_ngcontent-%COMP%]{padding:32px 0}"]}),M)}],L=((E=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[s.CommonModule,i.RouterModule.forChild(P)],i.RouterModule]}),E),k=((C=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[a.a,L]]}),C)},INc0:function(t,n,r){"use strict";r.r(n),r.d(n,"DocModule",(function(){return f}));var o,a,i,s=r("0S4P"),l=r("hCLc"),c=r("JAnZ"),u=r("Rsg1"),d=r("vOrQ"),m=[{path:"home",component:(o=function t(){e(this,t)},o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["app-doc"]],decls:14,vars:0,consts:[["src","assets/logo/platon.svg",1,"logo"],["mat-button","","routerLink","/doc/developers"],["mat-button","","routerLink","/doc/components"],["mat-button","","href","https://github.com/PremierLangage/platon-front","target","_blank"],["src","assets/images/illustrations/doc.png"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"section"),d["\u0275\u0275element"](1,"img",0),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3," Bienvenue sur la documentation de la plateforme PLaTon "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"a",1),d["\u0275\u0275text"](5," PLaTon pour les d\xe9veloppeurs "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"a",1),d["\u0275\u0275text"](7," PLaTon pour les enseignants "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"a",2),d["\u0275\u0275text"](9," Composants PLaTon "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"a",3),d["\u0275\u0275text"](11," Ouvrir sur Github "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"section"),d["\u0275\u0275element"](13,"img",4),d["\u0275\u0275elementEnd"]())},directives:[l.a,c.RouterLinkWithHref],styles:["[_nghost-%COMP%]{width:100vw;height:100vh;padding:4rem;overflow:hidden;color:#fff;background:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: hsla(0, 0%, 100%, 1)' /></svg>\") no-repeat bottom,linear-gradient(180deg,#c55882 1%,#ff9474 99%,#fff 0);display:grid;grid-template-columns:1fr 1fr}[_nghost-%COMP%], section[_ngcontent-%COMP%]{box-sizing:border-box}section[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center}img[_ngcontent-%COMP%]{width:100%;height:auto}.logo[_ngcontent-%COMP%]{width:200px;height:200px}p[_ngcontent-%COMP%]{text-align:center;font-size:1.3em;font-weight:200}a[_ngcontent-%COMP%]{margin:16px}"]}),o)},u.b,{path:"developers",loadChildren:function(){return Promise.resolve().then(r.bind(null,"xk6M")).then((function(e){return e.NgeDocModule}))},data:{meta:{name:"PLaTon pour les d\xe9veloppeurs",root:"/doc/developers/",logo:"assets/logo/platon.svg",url:"https://premierlangage.github.io/platon-front/",backUrl:"/doc",repo:{name:"platon-front",url:"https://github.com/PremierLangage/platon-front"}},pages:[{title:"Pr\xe9sentation",href:"presentation",renderer:"assets/docs/developers/index.md"}]}},{path:"**",redirectTo:"home",pathMatch:"full"}],p=((i=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[s.CommonModule,c.RouterModule.forChild(m)],c.RouterModule]}),i),f=((a=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},providers:[],imports:[[s.CommonModule,l.c,p]]}),a)}}])}();