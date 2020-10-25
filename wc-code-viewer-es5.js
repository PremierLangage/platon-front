!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4cXV":function(n,i,r){"use strict";r.d(i,"a",(function(){return f}));var a=r("vOrQ"),o=r("2qzO"),s=r("0S4P"),c=r("/suG"),u=["container"];function l(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275element"](1,"nge-monaco-viewer",1),a["\u0275\u0275pipe"](2,"json"),a["\u0275\u0275elementContainerEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("code",a["\u0275\u0275pipeBind1"](2,1,n.state))}}var f=function(){var n=function(){function n(t,i){e(this,n),this.api=t,this.elementRef=i,this.stateChange=new a.EventEmitter}var i,r,o;return i=n,(r=[{key:"ngOnInit",value:function(){var e,t=this,n=this.elementRef.nativeElement,i=null===(e=n.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(i||""),this.observer=new MutationObserver((function(e){e.forEach(t.createStateFromAttributes.bind(t))})),this.observer.observe(n.parentElement,{attributes:!0}),this.createStateFromAttributes()}},{key:"ngOnDestroy",value:function(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}},{key:"parse",value:function(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}},{key:"createStateFromAttributes",value:function(){for(var e,t,n=this.elementRef.nativeElement.parentElement.attributes,i={},r=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{},a=!1,o=0,s=Array.from(n);o<s.length;o++){var c=s[o];c.name in r&&(a=!0,i[c.name]=this.parse(c.value))}a&&this.stateChange.emit(i)}}])&&t(i.prototype,r),o&&t(i,o),n}();return n.\u0275fac=function(e){return new(e||n)(a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](a.ElementRef))},n.\u0275cmp=a["\u0275\u0275defineComponent"]({type:n,selectors:[["wc-base"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](u,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&a["\u0275\u0275template"](0,l,3,3,"ng-container",0),2&e&&a["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug)},directives:[s.NgIf,c.f],pipes:[s.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),n}()},Yf6g:function(t,n,i){"use strict";i.d(n,"a",(function(){return s}));var r=i("0S4P"),a=i("/suG"),o=i("vOrQ"),s=function(){var t=function t(){e(this,t)};return t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[r.CommonModule,a.e],r.CommonModule]}),t}()},lBNl:function(t,n,i){"use strict";i.r(n),i.d(n,"CodeViewerModule",(function(){return v}));var r,a,o=i("vOrQ"),s=i("/suG"),c=i("Yf6g"),u=i("D57K"),l=i("wgwC"),f=i("bizq"),d=i("4cXV"),p=((a=function t(n){e(this,t),this.injector=n}).\u0275fac=function(e){return new(e||a)(o["\u0275\u0275directiveInject"](o.Injector))},a.\u0275cmp=o["\u0275\u0275defineComponent"]({type:a,selectors:[["wc-code-viewer"]],inputs:{state:"state"},decls:2,vars:5,consts:[[3,"code","lines","language","highlights"],[3,"state","stateChange"]],template:function(e,t){1&e&&(o["\u0275\u0275element"](0,"nge-monaco-viewer",0),o["\u0275\u0275elementStart"](1,"wc-base",1),o["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("code",t.state.code)("lines",t.state.lines)("language",t.state.language)("highlights",t.state.highlights),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("state",t.state))},directives:[s.f,d.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),a=Object(u.b)([Object(l.b)(f.a)],a)),v=((r=function t(){e(this,t),this.customElementComponent=p}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[c.a,s.e]]}),r)}}])}();