(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{QXAp:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("0S4P"),s=n("/suG"),i=n("vOrQ");let o=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,s.g],r.CommonModule]}),e})()},hPIy:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("vOrQ"),s=n("5HSb"),i=n("0S4P"),o=n("/suG");const a=["container"];function c(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275element"](1,"nge-monaco-viewer",1),r["\u0275\u0275pipe"](2,"json"),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("code",r["\u0275\u0275pipeBind1"](2,1,e.state))}}let l=(()=>{class e{constructor(e,t){this.api=e,this.elementRef=t,this.stateChange=new r.EventEmitter}ngOnInit(){var e;const t=this.elementRef.nativeElement,n=null===(e=t.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(n||""),this.observer=new MutationObserver(e=>{e.forEach(this.createStateFromAttributes.bind(this))}),this.observer.observe(t.parentElement,{attributes:!0}),this.createStateFromAttributes()}ngOnDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}parse(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}createStateFromAttributes(){var e,t;const n=this.elementRef.nativeElement.parentElement.attributes,r={},s=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{};let i=!1;for(const o of Array.from(n))o.name in s&&(i=!0,r[o.name]=this.parse(o.value));i&&this.stateChange.emit(r)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](r.ElementRef))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-base"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275viewQuery"](a,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&r["\u0275\u0275template"](0,c,3,3,"ng-container",0),2&e&&r["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug)},directives:[i.NgIf,o.h],pipes:[i.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),e})()},kUWU:function(e,t,n){"use strict";n.r(t),n.d(t,"CodeViewerModule",(function(){return d}));var r=n("vOrQ"),s=n("/suG"),i=n("QXAp"),o=n("D57K"),a=n("hlYy"),c=n("Ou+X"),l=n("hPIy");let u=(()=>{let e=class{constructor(e){this.injector=e}};return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.Injector))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-code-viewer"]],inputs:{state:"state"},decls:2,vars:5,consts:[[3,"code","lines","language","highlights"],[3,"state","stateChange"]],template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"nge-monaco-viewer",0),r["\u0275\u0275elementStart"](1,"wc-base",1),r["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("code",t.state.code)("lines",t.state.lines)("language",t.state.language)("highlights",t.state.highlights),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("state",t.state))},directives:[s.h,l.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e=Object(o.b)([Object(a.b)(c.a)],e),e})(),d=(()=>{class e{constructor(){this.customElementComponent=u}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.a,s.g]]}),e})()}}]);