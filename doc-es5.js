!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8vPc":function(n,r,o){"use strict";o.r(r),o.d(r,"DashboardModule",function(){return P});var a=o("0S4P"),i=o("Tj54"),s=o("Dxy4"),l=o("Ff2x"),c=o("JAnZ"),u=o("mrSG"),d=o("0xS5"),m=o("cIEA"),p=o("Vgaj"),f=o("vOrQ"),h=o("hHaA"),g=o("sSqP"),v=o("zYTy");function b(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"button",3),f["\u0275\u0275elementStart"](1,"mat-icon"),f["\u0275\u0275text"](2,"info_outline"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](3," En savoir plus "),f["\u0275\u0275elementEnd"]())}var w,x,y,M=[{path:"",component:(w=function(){function n(t,r){e(this,n),this.authService=t,this.introService=r,this.searchBar={placeholder:"Essayez un nom de cours...",complete:function(e){return e},filterer:{run:function(e){return Object(p.of)([])}}}}var r,o,a;return r=n,(o=[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.ready();case 2:this.user=e.sent,setTimeout(function(){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.introService.create();case 2:(t=e.sent).setOptions({scrollToElement:!0,disableInteraction:!0,showButtons:!0,showBullets:!1,showStepNumbers:!1,doneLabel:"Terminer",nextLabel:"Suivant",skipLabel:"Terminer",prevLabel:"Pr\xe9cedent",steps:[{intro:"L'espace de travail est un espace r\xe9serv\xe9 aux enseignants pour cr\xe9er des exercices et activit\xe9s",element:"#nav-link-workspace"},{intro:"Vous pouvez \xe0 tout moment acc\xe9der au forum pour poser des questions aux utilisateurs de la plateforme",element:"#nav-link-forum"},{intro:"La documentation est l'endroit id\xe9al pour comprendre le fonctionnement de la plateforme",element:"#nav-link-doc"},{intro:"Un espace r\xe9serv\xe9 aux utilisateurs admin de la plateforme",element:"#nav-link-admin-panel"},{intro:"La barre de navigation de la page courante",element:"mat-drawer"}]}),t.addHints(),t.start();case 4:case"end":return e.stop()}},e,this)}))});case 4:case"end":return e.stop()}},e,this)}))}}])&&t(r.prototype,o),a&&t(r,a),n}(),w.\u0275fac=function(e){return new(e||w)(f["\u0275\u0275directiveInject"](d.d),f["\u0275\u0275directiveInject"](m.e))},w.\u0275cmp=f["\u0275\u0275defineComponent"]({type:w,selectors:[["app-dashboard"]],decls:7,vars:4,consts:[["app",""],[3,"bannerTitle","bannerImage","bannerSearchBar","bannerActions"],["actions",""],["mat-raised-button","",1,"banner-action"]],template:function(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"app-container",null,0),f["\u0275\u0275elementStart"](2,"app-content"),f["\u0275\u0275elementStart"](3,"app-banner",1),f["\u0275\u0275template"](4,b,4,0,"ng-template",null,2,f["\u0275\u0275templateRefExtractor"]),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](6,"main"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275reference"](5);f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("bannerTitle","Cours")("bannerImage","assets/images/illustrations/laptop2.svg")("bannerSearchBar",t.searchBar)("bannerActions",n)}},directives:[h.a,g.a,v.a,s.b,i.a],styles:["main[_ngcontent-%COMP%]{padding:32px 0}"]}),w)}],S=((y=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[a.CommonModule,c.RouterModule.forChild(M)],c.RouterModule]}),y),P=((x=function t(){e(this,t)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[a.CommonModule,i.b,s.c,l.a,S]]}),x)},wk02:function(t,n,r){"use strict";r.r(n),r.d(n,"DocModule",function(){return f});var o,a,i,s=r("0S4P"),l=r("Dxy4"),c=r("JAnZ"),u=r("+WlD"),d=r("vOrQ"),m=[{path:"home",component:(o=function t(){e(this,t)},o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["app-doc"]],decls:14,vars:0,consts:[["src","assets/logo/platon.svg",1,"logo"],["mat-button","","routerLink","/doc/developers"],["mat-button","","routerLink","/doc/components"],["mat-button","","href","https://github.com/PremierLangage/platon-front","target","_blank"],["src","assets/images/illustrations/doc.png"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"section"),d["\u0275\u0275element"](1,"img",0),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3," Bienvenue sur la documentation de la plateforme PLaTon "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"a",1),d["\u0275\u0275text"](5," PLaTon pour les d\xe9veloppeurs "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"a",1),d["\u0275\u0275text"](7," PLaTon pour les enseignants "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"a",2),d["\u0275\u0275text"](9," Composants PLaTon "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"a",3),d["\u0275\u0275text"](11," Ouvrir sur Github "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"section"),d["\u0275\u0275element"](13,"img",4),d["\u0275\u0275elementEnd"]())},directives:[l.a,c.RouterLinkWithHref],styles:["[_nghost-%COMP%]{width:100vw;height:100vh;padding:4rem;overflow:hidden;color:#fff;background:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1123 258'><path d='M1124,2c0,0 0,256 0,256l-1125,0l0,-48c0,0 16,5 55,5c116,0 197,-92 325,-92c121,0 114,46 254,46c140,0 214,-167 572,-166Z' style='fill: hsla(0, 0%, 100%, 1)' /></svg>\") no-repeat bottom,linear-gradient(180deg,#c55882 1%,#ff9474 99%,#fff 0);display:grid;grid-template-columns:1fr 1fr}[_nghost-%COMP%], section[_ngcontent-%COMP%]{box-sizing:border-box}section[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center}img[_ngcontent-%COMP%]{width:100%;height:auto}.logo[_ngcontent-%COMP%]{width:200px;height:200px}p[_ngcontent-%COMP%]{text-align:center;font-size:1.3em;font-weight:200}a[_ngcontent-%COMP%]{margin:16px}"]}),o)},u.b,{path:"developers",loadChildren:function(){return Promise.resolve().then(r.bind(null,"rI7Q")).then(function(e){return e.NgeDocModule})},data:{meta:{name:"PLaTon pour les d\xe9veloppeurs",root:"/doc/developers/",logo:"assets/logo/platon.svg",url:"https://premierlangage.github.io/platon-front/",backUrl:"/doc",repo:{name:"platon-front",url:"https://github.com/PremierLangage/platon-front"}},pages:[{title:"Pr\xe9sentation",href:"presentation",renderer:"assets/docs/developers/index.md"}]}},{path:"**",redirectTo:"home",pathMatch:"full"}],p=((i=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[s.CommonModule,c.RouterModule.forChild(m)],c.RouterModule]}),i),f=((a=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},providers:[],imports:[[s.CommonModule,l.c,p]]}),a)}}])}();