(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{c52N:function(e,t,n){"use strict";n.r(t),n.d(t,"ExercisesModule",(function(){return O}));var r=n("JAnZ"),a=n("Cap6"),i=n("vOrQ"),l=n("mcff"),o=n("hCLc"),c=n("ydE+"),m=n("h0Ch"),s=n("sq1e"),p=n("0S4P"),d=n("F6wS");function u(e,t){1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275elementStart"](1,"mat-card"),i["\u0275\u0275element"](2,"img",10),i["\u0275\u0275element"](3,"mat-card-content"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementContainerEnd"]())}let g=(()=>{class e{constructor(e){this.dialog=e,this.templates=["Texte \xe0 trous","Mots \xe0 placer","Mots \xe0 surligner","QCM","AMC","Gift","Dict\xe9e","Automate","Former des pairs","Images \xe0 ordonner","Liste \xe0 ordonner","Code \xe0 ordonner"]}ngOnInit(){}dismiss(){this.dialog.close()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.g))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-create-exercise-form"]],decls:17,vars:1,consts:[[1,"spacer"],["mat-icon-button","",3,"click"],["label","Template"],["label","Templates PLaTon"],[1,"grid"],[4,"ngFor","ngForOf"],["label","Templates de la communaut\xe9"],["label","\xc9dition"],["label","Pr\xe9visualisation"],["label","M\xe9tadata"],["mat-card-image","","src","assets/images/components/widgets/markdown/markdown.svg","alt","Template image"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"header"),i["\u0275\u0275elementStart"](1,"h1"),i["\u0275\u0275text"](2,"S\xe9lectionnez un template pour d\xe9marrer"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"div",0),i["\u0275\u0275elementStart"](4,"button",1),i["\u0275\u0275listener"]("click",(function(){return t.dismiss()})),i["\u0275\u0275elementStart"](5,"mat-icon"),i["\u0275\u0275text"](6,"close"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"mat-horizontal-stepper"),i["\u0275\u0275elementStart"](8,"mat-step",2),i["\u0275\u0275elementStart"](9,"mat-tab-group"),i["\u0275\u0275elementStart"](10,"mat-tab",3),i["\u0275\u0275elementStart"](11,"section",4),i["\u0275\u0275template"](12,u,4,0,"ng-container",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](13,"mat-tab",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](14,"mat-step",7),i["\u0275\u0275element"](15,"mat-step",8),i["\u0275\u0275element"](16,"mat-step",9),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("ngForOf",t.templates))},directives:[o.b,c.a,m.a,m.b,s.c,s.a,p.NgForOf,d.a,d.e,d.c],styles:["[_nghost-%COMP%]{display:block;width:100vw;height:100vh;background-color:#fff;padding:24px}[_nghost-%COMP%]  .mat-tab-label{padding:0;justify-content:start}[_nghost-%COMP%]  .mat-tab-body-content{padding:12px 0}header[_ngcontent-%COMP%]{display:flex;align-items:center}.spacer[_ngcontent-%COMP%]{flex:1}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));row-gap:24px;-moz-column-gap:24px;column-gap:24px;padding:0 8px}.grid[_ngcontent-%COMP%]  .mat-card-header-text{margin:0}.grid[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{margin-top:16px}.grid[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:4px}.grid[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0;padding:0}"]}),e})();var f=n("rrpc"),x=n("B9l2"),b=n("tPWi");function E(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"mat-icon"),i["\u0275\u0275text"](1,"article"),i["\u0275\u0275elementEnd"]())}const h=function(e){return["/workspace/exercises",e]};let C=(()=>{class e{constructor(){this.didFilterByTag=new i.EventEmitter}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ws-exercise-list-item"]],inputs:{item:"item"},outputs:{didFilterByTag:"didFilterByTag"},decls:4,vars:8,consts:[[3,"nzText"],[3,"articleTitle","articleTags","articleIconTemplate","articleDescription","articleUrl","didClickTag"],["image",""]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nz-ribbon",0),i["\u0275\u0275elementStart"](1,"ui-list-item-article",1),i["\u0275\u0275listener"]("didClickTag",(function(e){return t.didFilterByTag.emit(e)})),i["\u0275\u0275template"](2,E,2,0,"ng-template",null,2,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](3);i["\u0275\u0275property"]("nzText",t.item.status),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("articleTitle",t.item.name)("articleTags",t.item.tags)("articleIconTemplate",e)("articleDescription",t.item.description)("articleUrl",i["\u0275\u0275pureFunction1"](6,h,t.item.id))}},directives:[x.b,b.a,c.a],styles:[""]}),e})();var w=n("hME1");function y(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"button",5),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().create()})),i["\u0275\u0275elementStart"](1,"mat-icon"),i["\u0275\u0275text"](2,"add"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](3," Cr\xe9er "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"button",6),i["\u0275\u0275elementStart"](5,"mat-icon"),i["\u0275\u0275text"](6,"info_outline"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](7," En savoir plus "),i["\u0275\u0275elementEnd"]()}}function T(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"ws-exercise-list-item",7),i["\u0275\u0275listener"]("didFilterByTag",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"](),i["\u0275\u0275reference"](1).triggerSearch(t)})),i["\u0275\u0275elementEnd"]()}2&e&&i["\u0275\u0275property"]("item",t.$implicit)}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"h2"),i["\u0275\u0275text"](1,"Cr\xe9ez votre premier exercice"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275text"](3," Vous avez la possibilit\xe9 de cr\xe9er un exercice \xe0 partir d'un template ou bien de A \xe0 Z. "),i["\u0275\u0275elementEnd"]())}function S(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"button",11),i["\u0275\u0275text"](1,"Cr\xe9er"),i["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nz-empty",8),i["\u0275\u0275template"](1,v,4,0,"ng-template",null,9,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275template"](3,S,2,0,"ng-template",null,10,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](2),t=i["\u0275\u0275reference"](4);i["\u0275\u0275property"]("nzNotFoundContent",e)("nzNotFoundFooter",t)}}let F=(()=>{class e{constructor(e){this.dialog=e}ngOnInit(){}create(){this.dialog.open(g,{panelClass:"create-exercice-dialog-container"})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.b))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-workspace-exercises"]],decls:8,vars:8,consts:[[3,"type","bannerTitle","bannerImage","bannerActionsTemplate","bannerDescription","searchBarPlaceholder","listRowTemplate","listEmptyTemplate"],["searchView",""],["bannerActionsTemplate",""],["listRowTemplate",""],["listEmptyTemplate",""],["mat-raised-button","","color","primary",1,"banner-action",3,"click"],["mat-raised-button","",1,"banner-action"],[3,"item","didFilterByTag"],[3,"nzNotFoundContent","nzNotFoundFooter"],["content",""],["footer",""],["mat-raised-button","","color","primary"]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"app-ws-search-view",0,1),i["\u0275\u0275template"](2,y,8,0,"ng-template",null,2,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275template"](4,T,1,1,"ng-template",null,3,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275template"](6,M,5,2,"ng-template",null,4,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](3),t=i["\u0275\u0275reference"](5),n=i["\u0275\u0275reference"](7);i["\u0275\u0275property"]("type","EXERCISE")("bannerTitle","Exercises")("bannerImage","/assets/images/illustrations/desk.svg")("bannerActionsTemplate",e)("bannerDescription","Cr\xe9ez des exercices \xe0 partir de templates ou de A \xe0 Z")("searchBarPlaceholder","Essayez une mati\xe8re, une notion, un titre, un auteur...")("listRowTemplate",t)("listEmptyTemplate",n)}},directives:[f.a,o.b,c.a,C,w.a],styles:[".create-exercice-dialog-container{width:100vw;height:100vh;max-width:100vw!important;overflow:hidden;padding:0}  .create-exercice-dialog-container .mat-dialog-container{padding:0}"]}),e})(),O=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.a,r.RouterModule.forChild([{path:"",component:F}])]]}),e})()}}]);