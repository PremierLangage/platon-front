(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6Jna":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return w}));var a=n("0S4P"),o=n("3xDq"),i=n("HYj3"),s=n("PBFl"),r=n("OZ4H"),c=n("W1gw"),l=n("29Wa"),d=n("VikW"),p=n("vOrQ");let u=(()=>{class t{}return t.\u0275mod=p["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.CommonModule,i.f,s.c,r.f,c.b,d.NgeMarkdownModule,l.e,o.FormsModule]]}),t})();var g=n("Sv/w"),f=n("Vgaj"),h=n("xVbo"),m=n("J+dc");function _(t,e){if(1&t&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275element"](1,"nge-markdown",6),p["\u0275\u0275elementContainerEnd"]()),2&t){const t=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("data",null==t.data?null:t.data.message)}}function b(t,e){if(1&t&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275elementStart"](1,"button",8),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("mat-dialog-close",t.id),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](t.title)}}function v(t,e){if(1&t&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,b,3,2,"ng-container",7),p["\u0275\u0275elementContainerEnd"]()),2&t){const t=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.data.buttons)}}let y=(()=>{class t{constructor(t,e,n){this.dialog=t,this.data=e,this.changes=n,e.okTitle=e.okTitle||"OK",e.noTitle=e.noTitle||"CANCEL"}ngOnInit(){this.changes.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](r.g),p["\u0275\u0275directiveInject"](r.a),p["\u0275\u0275directiveInject"](p.ChangeDetectorRef))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["lib-confirm"]],decls:10,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","",1,"ok",3,"mat-dialog-close"],["mat-button","",1,"cancel",3,"mat-dialog-close"],[3,"data"],[4,"ngFor","ngForOf"],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"h4",0),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275template"](3,_,2,1,"ng-container",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"div",3),p["\u0275\u0275elementStart"](5,"button",4),p["\u0275\u0275text"](6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"button",5),p["\u0275\u0275text"](8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](9,v,2,1,"ng-container",2),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](null==e.data?null:e.data.title),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",e.data.message),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("mat-dialog-close",!0),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](null==e.data?null:e.data.okTitle),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("mat-dialog-close",!1),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](null==e.data?null:e.data.noTitle),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",e.data.buttons))},directives:[r.h,r.e,a.NgIf,r.c,s.b,r.d,d.NgeMarkdownComponent,a.NgForOf],styles:[""]}),t})();function C(t,e){if(1&t&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275element"](1,"nge-markdown",6),p["\u0275\u0275elementContainerEnd"]()),2&t){const t=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("data",null==t.data?null:t.data.message)}}function S(t,e){if(1&t){const t=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"mat-form-field"),p["\u0275\u0275elementStart"](1,"input",7),p["\u0275\u0275listener"]("ngModelChange",(function(n){return p["\u0275\u0275restoreView"](t),e.$implicit.value=n})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("type",t.type)("placeholder",null==t?null:t.placeholder)("ngModel",t.value)}}let $=(()=>{class t{constructor(t,e){this.dialog=t,this.data=e,e.okTitle=e.okTitle||"OK",e.noTitle=e.noTitle||"CANCEL"}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](r.g),p["\u0275\u0275directiveInject"](r.a))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["lib-prompt"]],decls:11,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"],[3,"data"],["matInput","","name","field.value","autocomplete","on",3,"type","placeholder","ngModel","ngModelChange"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"h4",0),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275template"](3,C,2,1,"ng-container",2),p["\u0275\u0275elementStart"](4,"form"),p["\u0275\u0275template"](5,S,2,3,"mat-form-field",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",4),p["\u0275\u0275elementStart"](7,"button",5),p["\u0275\u0275text"](8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"button",5),p["\u0275\u0275text"](10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](null==e.data?null:e.data.title),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",e.data.message),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",e.data.fields),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("mat-dialog-close",e.data),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](e.data.okTitle),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("mat-dialog-close",!1),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](e.data.noTitle))},directives:[r.h,r.e,a.NgIf,o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.NgForm,a.NgForOf,r.c,s.b,r.d,d.NgeMarkdownComponent,l.c,o.DefaultValueAccessor,o.NgControlStatus,o.NgModel],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:300px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})(),w=(()=>{class t{constructor(t,e,n,a){this.zone=t,this.dialog=e,this.overlay=n,this.snackbar=a}promptAsync(t){const e=this.dialog.open($,{hasBackdrop:!0,disableClose:!0,data:t});return new Promise(t=>{this.zone.run(()=>{let n;n=e.afterClosed().subscribe(e=>{n.unsubscribe(),t(e)})})})}confirmAsync(t){const e=this.dialog.open(y,{hasBackdrop:!0,disableClose:!0,data:t,autoFocus:!1,minWidth:"400px",minHeight:"100px"});return new Promise(t=>{this.zone.run(()=>{let n;n=e.afterClosed().subscribe(e=>{n.unsubscribe(),t(e)})})})}contextMenu(t){const{event:e,templateRef:n,containerRef:a,data:o}=t;this.closeContextMenu();const{x:i,y:s}=e,r=this.overlay.position().flexibleConnectedTo({x:i,y:s}).withPositions([{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}]);this.overlayRef=this.overlay.create({positionStrategy:r,scrollStrategy:this.overlay.scrollStrategies.close()}),this.overlayRef.attach(new g.g(n,a,{$implicit:o||{}})),this.subscription=Object(f.fromEvent)(document,"click").pipe(Object(h.a)(t=>!!this.overlayRef&&!this.overlayRef.overlayElement.contains(t.target)),Object(m.a)(1)).subscribe(this.closeContextMenu.bind(this))}closeContextMenu(){this.subscription&&this.subscription.unsubscribe(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=void 0)}snack(t,e){this.zone.run(()=>{this.snackbar.open(t,"",Object.assign({duration:3e3},e||{}))})}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275inject"](p.NgZone),p["\u0275\u0275inject"](r.b),p["\u0275\u0275inject"](i.c),p["\u0275\u0275inject"](c.a))},t.\u0275prov=p["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();n("JAnZ")},PSvM:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("vOrQ"),o=n("+OD8");let i=(()=>{class t{batch(t,e){const n=t.$__suspendChanges__$;t.$__suspendChanges__$=!0,e(),t.onChangeState&&t.onChangeState(),t.$__changeDetector__$||(t.$__changeDetector__$=t.injector.get(a.ChangeDetectorRef)),t.$__changeDetector__$.detectChanges(),t.$__suspendChanges__$=n}ignore(t,e){const n=t.$__suspendChanges__$;t.$__suspendChanges__$=!0,e(),t.$__changeDetector__$||(t.$__changeDetector__$=t.injector.get(a.ChangeDetectorRef)),t.$__changeDetector__$.detectChanges(),t.$__suspendChanges__$=n}changes(t){if(!t.$__stateCopy__$)return t.$__stateCopy__$=Object(o.d)(t.$__state__$),[];const e=[];return new Set(Object.keys(t.$__state__$).concat(Object.keys(t.$__stateCopy__$))).forEach(n=>{Object(o.e)(t.$__state__$[n],t.$__stateCopy__$[n])||e.push(n)}),t.$__stateCopy__$=Object(o.d)(t.$__state__$),e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},iVbZ:function(t,e,n){"use strict";function a(){return{alphabet:[],initialStates:[],acceptingStates:[],states:[],transitions:[],position:{}}}function o(t){const e=t.split(/\r?\n/);let n=[],a=[],o=[],i=[];const s=[];let r=null;const c={states:0,initials:0,accepting:0,alphabet:0,transitions:0};for(let d=0;d<e.length;d++){const t=e[d].replace(/\s/g,"");if(0!==t.length)if("#"===t[0]){if(r=t.substr(1),void 0===c[r])throw new Error("Line "+(d+1).toString()+": invalid section name "+r+". Must be one of: states, initials,                                 accepting, alphabet, transitions.");if(c[r]+=1,c[r]>1)throw new Error(`Line ${d+1}: duplicate section name ${r}.`)}else{if(null==r)throw new Error("Line "+(d+1).toString()+": no #section declared.                                 Add one section: states, initial, accepting,                                 alphabet, transitions.");if("states"===r)n=n.concat(t.split(";"));else if("initials"===r)a=a.concat(t.split(";"));else if("accepting"===r)o=o.concat(t.split(";"));else if("alphabet"===r)i=i.concat(t.split(";"));else if("transitions"===r){const e=t.split(";");for(const t of e){const e=t.split(":"),n=e[0],a=e[1].split(">"),o=a[0].split(",");s.push({fromState:n,toState:a[1],symbols:o})}}}}for(const d in c)if(1!==c[d])throw new Error("Specification missing #"+c[d]+" section.");const l={alphabet:[],initialStates:[],acceptingStates:[],states:[],transitions:[],position:{}};return l.states=n,l.initialStates=a,l.alphabet=i,l.acceptingStates=o,l.transitions=s,l}function i(t){const e=["digraph finite_state_machine {","  rankdir=LR;"],n=["  node [shape = doublecircle];"];let a=0,o=[];for(a=0;a<t.acceptingStates.length;a++)n.push(t.acceptingStates[a].toString());return n.push(";"),n.length>2&&e.push(n.join(" ")),e.push("  node [shape = circle];"),a=0,t.initialStates.forEach(t=>{e.push(`  secret_node${a} [style=invis, shape=point]`);const n=[`  secret_node${a} ->`];n.push(t),n.push("[style=bold];"),e.push(n.join(" ")),a++}),t.transitions.forEach(n=>{let a=!1;t.initialStates.forEach(t=>{if(t===n.toState)return o=[" "],o.push(n.toState),o.push("->"),o.push(n.fromState),o.push("["),o.push("label ="),o.push('"'+n.symbols.join(",")+'"'),o.push(" dir = back];"),e.push(o.join(" ")),a=!0,!0}),a||(o=[" "],o.push(n.fromState.toString()),o.push("->"),o.push(n.toState.toString()),o.push("["),o.push("label ="),o.push('"'+n.symbols.join(",")+'"'),o.push(" ];"),e.push(o.join(" ")))}),e.push("}"),e.join("\n").replace(/\$/g,"$")}function s(t){return"string"==typeof t?o(t):t}n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return s}))}}]);