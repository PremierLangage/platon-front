(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4cXV":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=n("vOrQ"),o=n("2qzO"),r=n("0S4P"),i=n("Eb9S");const a=["container"];function c(t,e){if(1&t&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275element"](1,"nge-monaco-viewer",1),s["\u0275\u0275pipe"](2,"json"),s["\u0275\u0275elementContainerEnd"]()),2&t){const t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("code",s["\u0275\u0275pipeBind1"](2,1,t.state))}}let d=(()=>{class t{constructor(t,e){this.api=t,this.elementRef=e,this.stateChange=new s.EventEmitter}ngOnInit(){var t;const e=this.elementRef.nativeElement,n=null===(t=e.parentElement)||void 0===t?void 0:t.tagName.toLowerCase();this.definition=this.api.findBySelector(n||""),this.observer=new MutationObserver(t=>{t.forEach(this.createStateFromAttributes.bind(this))}),this.observer.observe(e.parentElement,{attributes:!0}),this.createStateFromAttributes()}ngOnDestroy(){var t;null===(t=this.observer)||void 0===t||t.disconnect()}parse(t){return t.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(t):t}createStateFromAttributes(){var t,e;const n=this.elementRef.nativeElement.parentElement.attributes,s={},o=(null===(e=null===(t=this.definition)||void 0===t?void 0:t.schema)||void 0===e?void 0:e.properties)||{};let r=!1;for(const i of Array.from(n))i.name in o&&(r=!0,s[i.name]=this.parse(i.value));r&&this.stateChange.emit(s)}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](s.ElementRef))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["wc-base"]],viewQuery:function(t,e){var n;1&t&&s["\u0275\u0275viewQuery"](a,!0),2&t&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(e.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(t,e){1&t&&s["\u0275\u0275template"](0,c,3,3,"ng-container",0),2&t&&s["\u0275\u0275property"]("ngIf",null==e.state?null:e.state.debug)},directives:[r.NgIf,i.h],pipes:[r.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),t})()},Yf6g:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("0S4P"),o=n("Eb9S"),r=n("vOrQ");let i=(()=>{class t{}return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[s.CommonModule,o.g],s.CommonModule]}),t})()},xZwZ:function(t,e,n){"use strict";n.r(e),n.d(e,"JsxModule",(function(){return _}));var s,o=n("vOrQ"),r=n("Yf6g"),i=n("D57K"),a=n("+OD8"),c=n("wgwC"),d=n("z2DM"),h=n("RuVo"),u=n("4cXV");let p=(()=>{let t=s=class{constructor(t,e){this.injector=t,this.changeDetector=e,this.boardId="jsx_graph"+ ++s.NEXT_ID}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.injector.get(a.a);yield t.loadAllSync([["script","assets/vendors/jsxgraph/jsxgraphcore.js"],["style","assets/vendors/jsxgraph/jsxgraph.css"]]).toPromise(),JXG.Options=JXG.merge(JXG.Options,{board:{showCopyright:!1,keepAspectRatio:!0},elements:{highlight:!1,showInfobox:!1},point:{showInfobox:!1}}),this.createBoard()}))}ngOnDestroy(){this.destroyBoard()}onChangeState(){const t=this.changeDetector.changes(this);(t.includes("script")||t.includes("attributes"))&&this.createBoard(),t.includes("points")&&this.writePoints(),this.state.disabled?this.board.removeEventHandlers():this.board.hasPointerHandlers||this.board.addEventHandlers()}createBoard(){this.destroyBoard(),this.board=JXG.JSXGraph.initBoard(this.boardId,Object.assign({axis:!0},this.state.attributes||{})),this.board.on("update",()=>{this.changeDetector.batch(this,()=>{this.readPoints()})});const t=decodeURIComponent(this.state.script);new Function("board",t)(this.board),this.readPoints()}destroyBoard(){this.board&&JXG.JSXGraph.freeBoard(this.board)}readPoints(){if(this.state.points={},this.board.objectsList)for(const t of this.board.objectsList)JXG.isPoint(t)&&t.name&&(this.state.points[t.name]={x:t.X(),y:t.Y()})}writePoints(){let t=!1;const e=Object.keys(this.state.points);for(const n of e){const e=this.board.objectsList.find(t=>JXG.isPoint(t)&&t.name===n);if(e){const s=this.state.points[n];e.setPosition(JXG.COORDS_BY_USER,[s.x,s.y]),t=!0}}t&&this.board.fullUpdate()}};return t.NEXT_ID=0,t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](o.Injector),o["\u0275\u0275directiveInject"](d.a))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["wc-jsx"]],inputs:{state:"state"},decls:2,vars:2,consts:[[1,"jsxgraph-component",3,"id"],[3,"state","stateChange"]],template:function(t,e){1&t&&(o["\u0275\u0275element"](0,"div",0),o["\u0275\u0275elementStart"](1,"wc-base",1),o["\u0275\u0275listener"]("stateChange",(function(t){return e.state=t})),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275property"]("id",e.boardId),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("state",e.state))},directives:[u.a],styles:[".jsxgraph-component[_ngcontent-%COMP%]{max-width:400px;width:90vw;max-height:400px;height:90vw;margin:0 auto}"],changeDetection:0}),t=s=Object(i.b)([Object(c.b)(h.a)],t),t})(),_=(()=>{class t{constructor(){this.customElementComponent=p}}return t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[r.a]]}),t})()},z2DM:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("D57K"),o=n("vOrQ"),r=n("+OD8");let i=(()=>{class t{batch(t,e){const n=t.$__suspendChanges__$;t.$__suspendChanges__$=!0,e(),t.onChangeState&&t.onChangeState(),t.$__changeDetector__$||(t.$__changeDetector__$=t.injector.get(o.ChangeDetectorRef)),t.$__changeDetector__$.detectChanges(),t.$__suspendChanges__$=n}ignore(t,e){return Object(s.a)(this,void 0,void 0,(function*(){const n=t.$__suspendChanges__$;t.$__suspendChanges__$=!0;const s=yield e();return t.$__changeDetector__$||(t.$__changeDetector__$=t.injector.get(o.ChangeDetectorRef)),t.$__changeDetector__$.detectChanges(),t.$__suspendChanges__$=n,s}))}changes(t){if(!t.$__stateCopy__$)return t.$__stateCopy__$=Object(r.d)(t.$__state__$),[];const e=[];return new Set(Object.keys(t.$__state__$).concat(Object.keys(t.$__stateCopy__$))).forEach(n=>{Object(r.e)(t.$__state__$[n],t.$__stateCopy__$[n])||e.push(n)}),t.$__stateCopy__$=Object(r.d)(t.$__state__$),e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);