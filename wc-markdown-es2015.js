(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+t5H":function(e,t,n){"use strict";n.r(t),n.d(t,"MarkdownModule",(function(){return b}));var s=n("vOrQ"),r=n("VikW"),i=n("hvDT"),o=n("D57K"),c=n("wgwC"),a=n("7be/"),u=n("czpK");const d=["*"];let l=(()=>{let e=class{constructor(e){this.injector=e}};return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](s.Injector))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-markdown"]],inputs:{state:"state"},ngContentSelectors:d,decls:3,vars:3,consts:[[3,"data","file"],[3,"state","stateChange"]],template:function(e,t){1&e&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275element"](0,"nge-markdown",0),s["\u0275\u0275elementStart"](1,"wc-base",1),s["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),s["\u0275\u0275projection"](2),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("data",t.state.data)("file",t.state.file),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("state",t.state))},directives:[r.NgeMarkdownComponent,u.a],styles:[""],changeDetection:0}),e=Object(o.b)([Object(c.b)(a.a)],e),e})(),b=(()=>{class e{constructor(){this.customElementComponent=l}}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.a,r.NgeMarkdownModule]]}),e})()},TKFd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return d}));var s=n("5XID"),r=n("vOrQ"),i=n("Vgaj"),o=n("mWib");let c=(()=>{class e{create(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e},token:e,providedIn:"root"}),e})(),a=(()=>{class e{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){const t=Object(s.d)(e);return new i.Observable(e=>{const n=this._observeElement(t).subscribe(e);return()=>{n.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const t=new i.Subject,n=this._mutationObserverFactory.create(e=>t.next(e));n&&n.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:n,stream:t,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:t,stream:n}=this._observedElements.get(e);t&&t.disconnect(),n.complete(),this._observedElements.delete(e)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](c))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(c))},token:e,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e,t,n){this._contentObserver=e,this._elementRef=t,this._ngZone=n,this.event=new r.EventEmitter,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(s.b)(e),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=Object(s.e)(e),this._subscribe()}ngAfterContentInit(){this._currentSubscription||this.disabled||this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(Object(o.a)(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription&&this._currentSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a),r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.NgZone))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]}),e})(),d=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[c]}),e})()},czpK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("vOrQ"),r=n("2qzO"),i=n("TKFd"),o=n("0S4P"),c=n("/suG");const a=["container"];function u(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275element"](1,"nge-monaco-viewer",3),s["\u0275\u0275pipe"](2,"json"),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("code",s["\u0275\u0275pipeBind1"](2,1,e.state))}}const d=["*"];let l=(()=>{class e{constructor(e,t){this.api=e,this.elementRef=t,this.stateChange=new s.EventEmitter}ngOnInit(){var e;const t=this.elementRef.nativeElement,n=null===(e=t.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(n||""),this.observer=new MutationObserver(e=>{e.forEach(this.onChangeAttributes.bind(this))}),this.observer.observe(t.parentElement,{attributes:!0}),this.onChangeAttributes()}ngOnDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}ngAfterViewInit(){this.onChangeContent()}onChangeContent(){const e=this.container.nativeElement.querySelector("template");if(e){const t=decodeURIComponent(e.innerHTML),n={};new Function("state",t)(n),this.stateChange.emit(n)}else this.loadFromXML()}loadFromXML(){var e,t;const n=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{},s=Array.from(this.container.nativeElement.childNodes).filter(e=>e.tagName in n);if(s.length){let e="<xml>";s.forEach(t=>{const n=t.tagName.toLowerCase();e+=`<${n}>${t.innerHTML.trim()}</${n}>`}),e+="</xml>";const t=(new DOMParser).parseFromString(e,"text/xml");this.stateChange.emit(this.xml2json(t.childNodes[0]))}}onChangeAttributes(){var e,t;const n=this.elementRef.nativeElement.parentElement.attributes,s={},r=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{};let i=!1;for(const o of Array.from(n))o.name in r&&(i=!0,s[o.name]=this.parseText(o.value));i&&this.stateChange.emit(s)}xml2json(e){const t=Array.from(e.children);if(!t.length)return this.parseText(e.innerHTML);const n={};for(const s of t){const e=s.nodeName.toLowerCase();t.filter(e=>e.nodeName===s.nodeName).length>1?void 0===n[e]?n[e]=[this.xml2json(s)]:n[e].push(this.xml2json(s)):n[e]=this.parseText(s.innerHTML)}return n}parseText(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](s.ElementRef))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-base"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](a,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},ngContentSelectors:d,decls:4,vars:1,consts:[[3,"cdkObserveContent"],["container",""],[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275elementStart"](0,"div",0,1),s["\u0275\u0275listener"]("cdkObserveContent",(function(){return t.onChangeContent()})),s["\u0275\u0275projection"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,u,3,3,"ng-container",2)),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug))},directives:[i.a,o.NgIf,c.e],pipes:[o.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),e})()},hvDT:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n("0S4P"),r=n("TKFd"),i=n("+OD8"),o=n("/suG"),c=n("vOrQ");let a=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.CommonModule,r.c,o.d,i.b],s.CommonModule,i.b]}),e})()}}]);