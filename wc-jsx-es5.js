!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{TKFd:function(t,r,i){"use strict";i.d(r,"a",(function(){return f})),i.d(r,"b",(function(){return l})),i.d(r,"c",(function(){return v}));var o=i("5XID"),s=i("vOrQ"),c=i("Vgaj"),u=i("mWib"),a=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"create",value:function(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(s["\u0275\u0275defineInjectable"])({factory:function(){return new t},token:t,providedIn:"root"}),t}(),l=function(){var t=function(){function t(n){e(this,t),this._mutationObserverFactory=n,this._observedElements=new Map}return n(t,[{key:"ngOnDestroy",value:function(){var e=this;this._observedElements.forEach((function(t,n){return e._cleanupObserver(n)}))}},{key:"observe",value:function(e){var t=this,n=Object(o.d)(e);return new c.Observable((function(e){var r=t._observeElement(n).subscribe(e);return function(){r.unsubscribe(),t._unobserveElement(n)}}))}},{key:"_observeElement",value:function(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{var t=new c.Subject,n=this._mutationObserverFactory.create((function(e){return t.next(e)}));n&&n.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:n,stream:t,count:1})}return this._observedElements.get(e).stream}},{key:"_unobserveElement",value:function(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}},{key:"_cleanupObserver",value:function(e){if(this._observedElements.has(e)){var t=this._observedElements.get(e),n=t.observer,r=t.stream;n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](a))},t.\u0275prov=Object(s["\u0275\u0275defineInjectable"])({factory:function(){return new t(Object(s["\u0275\u0275inject"])(a))},token:t,providedIn:"root"}),t}(),f=function(){var t=function(){function t(n,r,i){e(this,t),this._contentObserver=n,this._elementRef=r,this._ngZone=i,this.event=new s.EventEmitter,this._disabled=!1,this._currentSubscription=null}return n(t,[{key:"ngAfterContentInit",value:function(){this._currentSubscription||this.disabled||this._subscribe()}},{key:"ngOnDestroy",value:function(){this._unsubscribe()}},{key:"_subscribe",value:function(){var e=this;this._unsubscribe();var t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular((function(){e._currentSubscription=(e.debounce?t.pipe(Object(u.a)(e.debounce)):t).subscribe(e.event)}))}},{key:"_unsubscribe",value:function(){this._currentSubscription&&this._currentSubscription.unsubscribe()}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(o.b)(e),this._disabled?this._unsubscribe():this._subscribe()}},{key:"debounce",get:function(){return this._debounce},set:function(e){this._debounce=Object(o.e)(e),this._subscribe()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](l),s["\u0275\u0275directiveInject"](s.ElementRef),s["\u0275\u0275directiveInject"](s.NgZone))},t.\u0275dir=s["\u0275\u0275defineDirective"]({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]}),t}(),v=function(){var t=function t(){e(this,t)};return t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},providers:[a]}),t}()},czpK:function(t,r,i){"use strict";i.d(r,"a",(function(){return d}));var o=i("vOrQ"),s=i("2qzO"),c=i("TKFd"),u=i("0S4P"),a=i("/suG"),l=["container"];function f(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275element"](1,"nge-monaco-viewer",3),o["\u0275\u0275pipe"](2,"json"),o["\u0275\u0275elementContainerEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("code",o["\u0275\u0275pipeBind1"](2,1,n.state))}}var v=["*"],d=function(){var t=function(){function t(n,r){e(this,t),this.api=n,this.elementRef=r,this.stateChange=new o.EventEmitter}return n(t,[{key:"ngOnInit",value:function(){var e,t=this,n=this.elementRef.nativeElement,r=null===(e=n.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(r||""),this.observer=new MutationObserver((function(e){e.forEach(t.onChangeAttributes.bind(t))})),this.observer.observe(n.parentElement,{attributes:!0}),this.onChangeAttributes()}},{key:"ngOnDestroy",value:function(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}},{key:"ngAfterViewInit",value:function(){this.onChangeContent()}},{key:"onChangeContent",value:function(){var e=this.container.nativeElement.querySelector("template");if(e){var t=decodeURIComponent(e.innerHTML),n={};new Function("state",t)(n),this.stateChange.emit(n)}else this.loadFromXML()}},{key:"loadFromXML",value:function(){var e,t,n=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{},r=Array.from(this.container.nativeElement.childNodes).filter((function(e){return e.tagName in n}));if(r.length){var i="<xml>";r.forEach((function(e){var t=e.tagName.toLowerCase();i+="<".concat(t,">").concat(e.innerHTML.trim(),"</").concat(t,">")})),i+="</xml>";var o=(new DOMParser).parseFromString(i,"text/xml");this.stateChange.emit(this.xml2json(o.childNodes[0]))}}},{key:"onChangeAttributes",value:function(){for(var e,t,n=this.elementRef.nativeElement.parentElement.attributes,r={},i=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{},o=!1,s=0,c=Array.from(n);s<c.length;s++){var u=c[s];u.name in i&&(o=!0,r[u.name]=this.parseText(u.value))}o&&this.stateChange.emit(r)}},{key:"xml2json",value:function(e){var t=this,n=Array.from(e.children);if(!n.length)return this.parseText(e.innerHTML);for(var r={},i=function(){var e=s[o],i=e.nodeName.toLowerCase();n.filter((function(t){return t.nodeName===e.nodeName})).length>1?void 0===r[i]?r[i]=[t.xml2json(e)]:r[i].push(t.xml2json(e)):r[i]=t.parseText(e.innerHTML)},o=0,s=n;o<s.length;o++)i();return r}},{key:"parseText",value:function(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](o.ElementRef))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["wc-base"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](l,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},ngContentSelectors:v,decls:4,vars:1,consts:[[3,"cdkObserveContent"],["container",""],[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275elementStart"](0,"div",0,1),o["\u0275\u0275listener"]("cdkObserveContent",(function(){return t.onChangeContent()})),o["\u0275\u0275projection"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](3,f,3,3,"ng-container",2)),2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug))},directives:[c.a,u.NgIf,a.e],pipes:[u.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),t}()},hvDT:function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var i=r("0S4P"),o=r("TKFd"),s=r("+OD8"),c=r("/suG"),u=r("vOrQ"),a=function(){var t=function t(){e(this,t)};return t.\u0275mod=u["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.CommonModule,o.c,c.d,s.b],i.CommonModule,s.b]}),t}()},xZwZ:function(t,r,i){"use strict";i.r(r),i.d(r,"JsxModule",(function(){return h}));var o,s,c=i("vOrQ"),u=i("hvDT"),a=i("D57K"),l=i("wgwC"),f=Object(l.d)({type:l.c.form,name:"Jsx",icon:"assets/images/components/forms/jsx/jsx.svg",selector:"wc-jsx",description:"REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT",schema:{$schema:"http://json-schema.org/draft-07/schema",type:"object",properties:{}}}),v=i("czpK"),d=["*"],b=((s=function(){function t(n){e(this,t),this.injector=n}return n(t,[{key:"onGetState",value:function(e){return e}},{key:"onSetState",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||s)(c["\u0275\u0275directiveInject"](c.Injector))},s.\u0275cmp=c["\u0275\u0275defineComponent"]({type:s,selectors:[["wc-jsx"]],inputs:{state:"state"},ngContentSelectors:d,decls:4,vars:1,consts:[[3,"state","stateChange"]],template:function(e,t){1&e&&(c["\u0275\u0275projectionDef"](),c["\u0275\u0275elementStart"](0,"span"),c["\u0275\u0275text"](1,"jsx works"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"wc-base",0),c["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),c["\u0275\u0275projection"](3),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("state",t.state))},directives:[v.a],styles:[""],changeDetection:0}),s=Object(a.b)([Object(l.b)(f)],s)),h=((o=function t(){e(this,t),this.customElementComponent=b}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[u.a]]}),o)}}])}();