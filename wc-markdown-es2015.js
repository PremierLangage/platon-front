(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"9LOt":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("0S4P"),o=n("FvuC"),i=n("vOrQ");let s=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,o.g],r.CommonModule]}),e})()},eFZk:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("vOrQ"),o=n("t5Kd"),i=n("0S4P"),s=n("FvuC");const a=["container"];function c(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275element"](1,"nge-monaco-viewer",1),r["\u0275\u0275pipe"](2,"json"),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("code",r["\u0275\u0275pipeBind1"](2,1,e.state))}}let u=(()=>{class e{constructor(e,t){this.api=e,this.elementRef=t,this.stateChange=new r.EventEmitter}ngOnInit(){var e;const t=this.elementRef.nativeElement,n=null===(e=t.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(n||""),this.observer=new MutationObserver(e=>{e.forEach(this.createStateFromAttributes.bind(this))}),this.observer.observe(t.parentElement,{attributes:!0}),this.createStateFromAttributes()}ngOnDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}parse(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}createStateFromAttributes(){var e,t;const n=this.elementRef.nativeElement.parentElement.attributes,r={},o=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{};let i=!1;for(const s of Array.from(n))s.name in o&&(i=!0,r[s.name]=this.parse(s.value));i&&this.stateChange.emit(r)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](r.ElementRef))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-base"]],viewQuery:function(e,t){if(1&e&&r["\u0275\u0275viewQuery"](a,1),2&e){let e;r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t.container=e.first)}},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&r["\u0275\u0275template"](0,c,3,3,"ng-container",0),2&e&&r["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug)},directives:[i.NgIf,s.h],pipes:[i.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),e})()},ysWD:function(e,t,n){"use strict";n.r(t),n.d(t,"MarkdownModule",function(){return m});var r=n("vOrQ"),o=n("wuay"),i=n("9LOt"),s=n("mrSG"),a=n("NLDi"),c=n("DHnB"),u=n("eFZk");const l=["*"];let d=(()=>{let e=class{constructor(e){this.injector=e}};return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.Injector))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-markdown"]],inputs:{state:"state"},ngContentSelectors:l,decls:3,vars:3,consts:[[3,"data","file"],[3,"state","stateChange"]],template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275elementStart"](0,"nge-markdown",0),r["\u0275\u0275projection"](1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"wc-base",1),r["\u0275\u0275listener"]("stateChange",function(e){return t.state=e}),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("data",t.state.data)("file",t.state.file),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("state",t.state))},directives:[o.NgeMarkdownComponent,u.a],styles:[""],changeDetection:0}),e=Object(s.b)([Object(a.b)(c.a),Object(s.c)("design:paramtypes",[r.Injector])],e),e})(),m=(()=>{class e{constructor(){this.customElementComponent=d}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.a,o.NgeMarkdownModule]]}),e})()}}]);