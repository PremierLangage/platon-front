(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"3/xl":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",function(){return G});var r=n("0S4P"),i=n("JAnZ"),o=n("3xDq"),a=n("e6WT"),s=n("Dxy4"),c=n("ZFy/"),l=n("Q2Ze"),m=n("66zS"),d=n("1+nf"),u=n("3ZFI"),p=n("N2O2"),h=n("SHEi"),f=n("0xS5"),b=n("yF8b"),g=n("A9uA"),v=n("mrSG"),x=n("vOrQ"),z=n("cIEA"),S=n("pcbr"),C=n("8sFK");function y(e,t){if(1&e){const e=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementContainerStart"](0),x["\u0275\u0275elementStart"](1,"form",1),x["\u0275\u0275listener"]("ngSubmit",function(){return x["\u0275\u0275restoreView"](e),x["\u0275\u0275nextContext"]().saveChanges()}),x["\u0275\u0275elementStart"](2,"mat-form-field",2),x["\u0275\u0275elementStart"](3,"mat-label"),x["\u0275\u0275text"](4,"Nom"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](5,"input",3),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"mat-form-field",2),x["\u0275\u0275elementStart"](7,"mat-label"),x["\u0275\u0275text"](8,"Description"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](9,"textarea",4),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](10,"mat-label",5),x["\u0275\u0275text"](11,"Tags"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](12,"nz-cascader",6),x["\u0275\u0275elementStart"](13,"button",7),x["\u0275\u0275text"](14," Sauvegarder "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("formGroup",e.form),x["\u0275\u0275advance"](11),x["\u0275\u0275property"]("nzOptions",e.tags)("nzNotFoundContent","Aucun tag ne correspond \xe0 votre recherche")("nzPlaceHolder","Choisissez une liste de tags...")("nzSize","large")("nzShowSearch",!0),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("disabled",!e.context.user.isAdmin||!e.form.valid)}}let k=(()=>{class e{constructor(e,t,n){this.tagsService=e,this.detailService=t,this.changeDetector=n,this.subscription=[],this.context={state:"LOADING",events:[],members:[]},this.form=new o.FormGroup({name:new o.FormControl("",[o.Validators.required]),tags:new o.FormControl("",o.Validators.required),description:new o.FormControl("",[o.Validators.required])}),this.tags=[]}ngOnInit(){return Object(v.a)(this,void 0,void 0,function*(){this.subscription.push(this.detailService.context.subscribe(e=>{this.context=e,"READY"===e.state&&(this.form.setValue({name:e.resource.name,tags:e.resource.tags.slice(),description:e.resource.description}),setTimeout(()=>{this.changeDetector.markForCheck()}))})),this.tags=yield this.tagsService.cascader().toPromise(),this.changeDetector.markForCheck()})}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}saveChanges(){const e=Object(z.g)(this.context.resource),{name:t,description:n,tags:r}=this.form.value;e.name=t,e.description=n,e.tags=r,this.detailService.update(e)}}return e.\u0275fac=function(t){return new(t||e)(x["\u0275\u0275directiveInject"](g.c),x["\u0275\u0275directiveInject"](S.a),x["\u0275\u0275directiveInject"](x.ChangeDetectorRef))},e.\u0275cmp=x["\u0275\u0275defineComponent"]({type:e,selectors:[["app-ws-detail-settings-general"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","fill",2,"display","block"],["formControlName","name","matInput",""],["cdkTextareaAutosize","","formControlName","description","matInput",""],["id","label-tags"],["aria-labelledby","label-tags","formControlName","tags",3,"nzOptions","nzNotFoundContent","nzPlaceHolder","nzSize","nzShowSearch"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&x["\u0275\u0275template"](0,y,15,7,"ng-container",0),2&e&&x["\u0275\u0275property"]("ngIf","READY"===t.context.state)},directives:[r.NgIf,o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,l.c,l.g,o.DefaultValueAccessor,a.a,o.NgControlStatus,o.FormControlName,C.b,u.a,s.b],styles:["[_nghost-%COMP%]{display:block;max-width:720px;padding:0 12px}nz-cascader[_ngcontent-%COMP%]{display:block;width:100%;margin:12px 0}"],changeDetection:0}),e})();const E=function(){return["general"]};function O(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"a",3),x["\u0275\u0275text"](1,"G\xe9n\xe9rale"),x["\u0275\u0275elementEnd"]()),2&e&&x["\u0275\u0275property"]("routerLink",x["\u0275\u0275pureFunction0"](1,E))}function w(e,t){1&e&&x["\u0275\u0275element"](0,"router-outlet")}const I=function(){return["members"]};function N(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"a",3),x["\u0275\u0275text"](1,"Membres"),x["\u0275\u0275elementEnd"]()),2&e&&x["\u0275\u0275property"]("routerLink",x["\u0275\u0275pureFunction0"](1,I))}function A(e,t){1&e&&x["\u0275\u0275element"](0,"router-outlet")}let T=(()=>{class e{constructor(e){this.detailService=e,this.subscriptions=[],this.context={state:"LOADING",events:[],members:[]}}ngOnInit(){this.subscriptions.push(this.detailService.context.subscribe(e=>{this.context=e}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(x["\u0275\u0275directiveInject"](S.a))},e.\u0275cmp=x["\u0275\u0275defineComponent"]({type:e,selectors:[["app-ws-detail-settings"]],decls:7,vars:1,consts:[["nzLinkRouter","",3,"nzTabPosition"],["nz-tab-link","",3,"routerLink",4,"nzTabLink"],["nz-tab",""],["nz-tab-link","",3,"routerLink"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"nz-tabset",0),x["\u0275\u0275elementStart"](1,"nz-tab"),x["\u0275\u0275template"](2,O,2,2,"a",1),x["\u0275\u0275template"](3,w,1,0,"ng-template",2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](4,"nz-tab"),x["\u0275\u0275template"](5,N,2,2,"a",1),x["\u0275\u0275template"](6,A,1,0,"ng-template",2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e&&x["\u0275\u0275property"]("nzTabPosition","left")},directives:[d.e,d.a,d.d,d.b,d.c,i.RouterLinkWithHref,i.RouterOutlet],styles:["[_nghost-%COMP%]  .ant-tabs-tabpane{padding:12px}"],changeDetection:0}),e})();var D=n("olp5"),F=n("LAyA"),P=n("oDeN"),L=n("ztHp");function M(e,t){if(1&e){const e=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"button",16),x["\u0275\u0275listener"]("nzOnConfirm",function(){x["\u0275\u0275restoreView"](e);const t=x["\u0275\u0275nextContext"]().item;return x["\u0275\u0275nextContext"]().remove(t)}),x["\u0275\u0275element"](1,"i",17),x["\u0275\u0275elementEnd"]()}if(2&e){const e=x["\u0275\u0275nextContext"]().item;x["\u0275\u0275property"]("nzPopconfirmTitle","Voulez-vous vraiment retirer \u201c"+e.userName+"\u201d des membres du cercle?")}}const R=function(e){return["/profile",e]};function V(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"div",12),x["\u0275\u0275elementStart"](1,"a",13),x["\u0275\u0275element"](2,"auth-avatar",14),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](3,"div",6),x["\u0275\u0275template"](4,M,2,1,"button",15),x["\u0275\u0275elementEnd"]()),2&e){const e=t.item,n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("routerLink",x["\u0275\u0275pureFunction1"](3,R,e.id)),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("user",e),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngIf",n.context.user.isAdmin&&!e.isAdmin)}}const _=function(){return["userName","lastName","firstName"]};let j=(()=>{class e{constructor(e,t){this.detailService=e,this.changeDetector=t,this.subscriptions=[],this.hostClass="mat-elevation-z2",this.context={state:"LOADING",events:[],members:[]},this.loading=!1}ngOnInit(){this.subscriptions.push(this.detailService.context.subscribe(e=>{this.context=e,this.changeDetector.markForCheck()}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}add(e){let t=-1;const n=this.context.resource;switch(n.type){case"CIRCLE":t=n.id;break;default:t=n.circle.id}this.detailService.addMembers(...e.map(e=>({id:e.id,picture:e.picture,userName:e.userName,lastName:e.lastName,firstName:e.firstName,isAdmin:e.isAdmin,circleId:t})))}remove(e){this.detailService.removeMembers(e)}}return e.\u0275fac=function(t){return new(t||e)(x["\u0275\u0275directiveInject"](S.a),x["\u0275\u0275directiveInject"](x.ChangeDetectorRef))},e.\u0275cmp=x["\u0275\u0275defineComponent"]({type:e,selectors:[["app-ws-detail-settings-members"]],hostVars:2,hostBindings:function(e,t){2&e&&x["\u0275\u0275classMap"](t.hostClass)},decls:16,vars:9,consts:[[3,"nzActive","nzLoading"],[1,"members-list-header"],["appearance","fill"],["matPrefix","","nz-icon","","nzType","search","nzTheme","outline"],["matInput",""],["input",""],[1,"spacer"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"items","idField","filterBy","filter"],["slot","row"],["searchTitle","Inscrire un membre","searchOkTitle","Inscrire","searchNoTitle","Annuler","searchRole","Teacher",3,"searchExcludes","didSelect"],["search",""],[1,"members-list-item"],["mat-button","",3,"routerLink"],[3,"user"],["nz-popconfirm","","nzOkText","Retirer","nzCancelText","Annuler","nzOkType","danger","nzPopconfirmPlacement","top","mat-icon-button","",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-popconfirm","","nzOkText","Retirer","nzCancelText","Annuler","nzOkType","danger","nzPopconfirmPlacement","top","mat-icon-button","",3,"nzPopconfirmTitle","nzOnConfirm"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(e,t){if(1&e){const e=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"nz-skeleton",0),x["\u0275\u0275elementStart"](1,"div",1),x["\u0275\u0275elementStart"](2,"mat-form-field",2),x["\u0275\u0275element"](3,"i",3),x["\u0275\u0275elementStart"](4,"mat-label"),x["\u0275\u0275text"](5,"Rechercher des membres"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](6,"input",4,5),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](8,"div",6),x["\u0275\u0275elementStart"](9,"button",7),x["\u0275\u0275listener"]("click",function(){return x["\u0275\u0275restoreView"](e),x["\u0275\u0275reference"](15).open()}),x["\u0275\u0275text"](10," Inscrire un membre "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](11,"ui-list",8),x["\u0275\u0275elementStart"](12,"ui-list-template",9),x["\u0275\u0275template"](13,V,5,5,"ng-template"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](14,"auth-search-modal",10,11),x["\u0275\u0275listener"]("didSelect",function(e){return t.add(e)}),x["\u0275\u0275elementEnd"]()}if(2&e){const e=x["\u0275\u0275reference"](7);x["\u0275\u0275property"]("nzActive",!0)("nzLoading",t.loading),x["\u0275\u0275advance"](9),x["\u0275\u0275property"]("disabled",!t.context.user.isAdmin),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("items",t.context.members)("idField","id")("filterBy",x["\u0275\u0275pureFunction0"](8,_))("filter",e.value),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("searchExcludes",t.context.members)}},directives:[p.a,l.c,l.h,m.a,l.g,a.a,s.b,D.a,F.a,P.a,s.a,i.RouterLinkWithHref,L.a,r.NgIf,h.a],styles:["[_nghost-%COMP%]{display:block;max-width:720px;padding:0 12px}.members-list-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:12px 0}.members-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;border-bottom:1px solid var(--brand-border-color)}.spacer[_ngcontent-%COMP%]{flex:1}"],changeDetection:0}),e})(),G=(()=>{class e{}return e.\u0275mod=x["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[r.CommonModule,o.FormsModule,o.ReactiveFormsModule,a.b,s.c,c.b,l.e,m.b,d.f,u.b,p.b,h.b,f.e,b.a,g.a,i.RouterModule.forChild([{path:"",component:T,children:[{path:"general",component:k},{path:"members",component:j},{path:"",redirectTo:"general"}]}])]]}),e})()}}]);