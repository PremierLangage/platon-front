!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e,r){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,r||t)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4cXV":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("vOrQ"),i=n("2qzO"),o=n("0S4P"),c=n("Eb9S"),a=["container"];function u(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275element"](1,"nge-monaco-viewer",1),r["\u0275\u0275pipe"](2,"json"),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("code",r["\u0275\u0275pipeBind1"](2,1,n.state))}}var f=function(){var t=function(){function t(e,n){s(this,t),this.api=e,this.elementRef=n,this.stateChange=new r.EventEmitter}return l(t,[{key:"ngOnInit",value:function(){var t,e=this,n=this.elementRef.nativeElement,r=null===(t=n.parentElement)||void 0===t?void 0:t.tagName.toLowerCase();this.definition=this.api.findBySelector(r||""),this.observer=new MutationObserver((function(t){t.forEach(e.createStateFromAttributes.bind(e))})),this.observer.observe(n.parentElement,{attributes:!0}),this.createStateFromAttributes()}},{key:"ngOnDestroy",value:function(){var t;null===(t=this.observer)||void 0===t||t.disconnect()}},{key:"parse",value:function(t){return t.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(t):t}},{key:"createStateFromAttributes",value:function(){for(var t,e,n=this.elementRef.nativeElement.parentElement.attributes,r={},i=(null===(e=null===(t=this.definition)||void 0===t?void 0:t.schema)||void 0===e?void 0:e.properties)||{},o=!1,c=0,a=Array.from(n);c<a.length;c++){var s=a[c];s.name in i&&(o=!0,r[s.name]=this.parse(s.value))}o&&this.stateChange.emit(r)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](r.ElementRef))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["wc-base"]],viewQuery:function(t,e){var n;1&t&&r["\u0275\u0275viewQuery"](a,!0),2&t&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(e.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(t,e){1&t&&r["\u0275\u0275template"](0,u,3,3,"ng-container",0),2&t&&r["\u0275\u0275property"]("ngIf",null==e.state?null:e.state.debug)},directives:[o.NgIf,c.h],pipes:[o.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),t}()},Yf6g:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("0S4P"),i=n("Eb9S"),o=n("vOrQ"),c=function(){var t=function t(){s(this,t)};return t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[r.CommonModule,i.g],r.CommonModule]}),t}()},bFHC:function(e,i,c){"use strict";c.d(i,"a",(function(){return et})),c.d(i,"b",(function(){return nt}));var u=c("vOrQ"),f=c("mFH5"),h=c("5XID"),v=c("0S4P"),d=c("Vgaj"),g=c("8j5Y"),m=c("YtkY"),p=c("pBDD"),_=c("r9RI"),y=c("mW0F"),b=function(){function t(e){s(this,t),this.selector=e}return l(t,[{key:"call",value:function(t,e){return e.subscribe(new S(t,this.selector,this.caught))}}]),t}(),S=function(t){r(i,t);var e=o(i);function i(t,n,r){var o;return s(this,i),(o=e.call(this,t)).selector=n,o.caught=r,o}return l(i,[{key:"error",value:function(t){if(!this.isStopped){var e;try{e=this.selector(t,this.caught)}catch(c){return void n(a(i.prototype),"error",this).call(this,c)}this._unsubscribeAndRecycle();var r=new _.a(this,void 0,void 0);this.add(r);var o=Object(y.a)(this,e,void 0,void 0,r);o!==r&&this.add(o)}}}]),i}(p.a),C=c("5uGe"),I=c("bwdy"),E=function(){function t(e){s(this,t),this.callback=e}return l(t,[{key:"call",value:function(t,e){return e.subscribe(new w(t,this.callback))}}]),t}(),w=function(t){r(n,t);var e=o(n);function n(t,r){var i;return s(this,n),(i=e.call(this,t)).add(new I.a(r)),i}return n}(C.a),j=c("ZTXN"),k=c("IdLP");function F(){return function(t){return t.lift(new R(t))}}var O,R=function(){function t(e){s(this,t),this.connectable=e}return l(t,[{key:"call",value:function(t,e){var n=this.connectable;n._refCount++;var r=new A(t,n),i=e.subscribe(r);return r.closed||(r.connection=n.connect()),i}}]),t}(),A=function(t){r(n,t);var e=o(n);function n(t,r){var i;return s(this,n),(i=e.call(this,t)).connectable=r,i}return l(n,[{key:"_unsubscribe",value:function(){var t=this.connectable;if(t){this.connectable=null;var e=t._refCount;if(e<=0)this.connection=null;else if(t._refCount=e-1,e>1)this.connection=null;else{var n=this.connection,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null}}]),n}(C.a),N=function(t){r(n,t);var e=o(n);function n(t,r){var i;return s(this,n),(i=e.call(this)).source=t,i.subjectFactory=r,i._refCount=0,i._isComplete=!1,i}return l(n,[{key:"_subscribe",value:function(t){return this.getSubject().subscribe(t)}},{key:"getSubject",value:function(){var t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}},{key:"connect",value:function(){var t=this._connection;return t||(this._isComplete=!1,(t=this._connection=new I.a).add(this.source.subscribe(new P(this.getSubject(),this))),t.closed&&(this._connection=null,t=I.a.EMPTY)),t}},{key:"refCount",value:function(){return F()(this)}}]),n}(k.a),x={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:(O=N.prototype)._subscribe},_isComplete:{value:O._isComplete,writable:!0},getSubject:{value:O.getSubject},connect:{value:O.connect},refCount:{value:O.refCount}},P=function(t){r(i,t);var e=o(i);function i(t,n){var r;return s(this,i),(r=e.call(this,t)).connectable=n,r}return l(i,[{key:"_error",value:function(t){this._unsubscribe(),n(a(i.prototype),"_error",this).call(this,t)}},{key:"_complete",value:function(){this.connectable._isComplete=!0,this._unsubscribe(),n(a(i.prototype),"_complete",this).call(this)}},{key:"_unsubscribe",value:function(){var t=this.connectable;if(t){this.connectable=null;var e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}]),i}(j.b);function M(){return new j.a}var L=c("J+dc"),U=c("jyyq"),D=c("vG+p"),T=["*"];function z(t){return Error('Unable to find icon with the name "'.concat(t,'"'))}function H(t){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was \"".concat(t,'".'))}function B(t){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was \"".concat(t,'".'))}var W,V=function t(e,n){s(this,t),this.options=n,e.nodeName?this.svgElement=e:this.url=e},q=((W=function(){function t(e,n,r,i){s(this,t),this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=r}return l(t,[{key:"addSvgIcon",value:function(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}},{key:"addSvgIconLiteral",value:function(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}},{key:"addSvgIconInNamespace",value:function(t,e,n,r){return this._addSvgIconConfig(t,e,new V(n,r))}},{key:"addSvgIconLiteralInNamespace",value:function(t,e,n,r){var i=this._sanitizer.sanitize(u.SecurityContext.HTML,n);if(!i)throw B(n);var o=this._createSvgElementForSingleIcon(i,r);return this._addSvgIconConfig(t,e,new V(o,r))}},{key:"addSvgIconSet",value:function(t,e){return this.addSvgIconSetInNamespace("",t,e)}},{key:"addSvgIconSetLiteral",value:function(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}},{key:"addSvgIconSetInNamespace",value:function(t,e,n){return this._addSvgIconSetConfig(t,new V(e,n))}},{key:"addSvgIconSetLiteralInNamespace",value:function(t,e,n){var r=this._sanitizer.sanitize(u.SecurityContext.HTML,e);if(!r)throw B(e);var i=this._svgElementFromString(r);return this._addSvgIconSetConfig(t,new V(i,n))}},{key:"registerFontClassAlias",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return this._fontCssClassesByAlias.set(t,e),this}},{key:"classNameForFontAlias",value:function(t){return this._fontCssClassesByAlias.get(t)||t}},{key:"setDefaultFontSetClass",value:function(t){return this._defaultFontSetClass=t,this}},{key:"getDefaultFontSetClass",value:function(){return this._defaultFontSetClass}},{key:"getSvgIconFromUrl",value:function(t){var e=this,n=this._sanitizer.sanitize(u.SecurityContext.RESOURCE_URL,t);if(!n)throw H(t);var r=this._cachedIconsByUrl.get(n);return r?Object(d.of)(Y(r)):this._loadSvgIconFromConfig(new V(t)).pipe(Object(g.a)((function(t){return e._cachedIconsByUrl.set(n,t)})),Object(m.a)((function(t){return Y(t)})))}},{key:"getNamedSvgIcon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=J(e,t),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);var i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):Object(d.throwError)(z(n))}},{key:"ngOnDestroy",value:function(){this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}},{key:"_getSvgFromConfig",value:function(t){return t.svgElement?Object(d.of)(Y(t.svgElement)):this._loadSvgIconFromConfig(t).pipe(Object(g.a)((function(e){return t.svgElement=e})),Object(m.a)((function(t){return Y(t)})))}},{key:"_getSvgFromIconSetConfigs",value:function(t,e){var n=this,r=this._extractIconWithNameFromAnySet(t,e);if(r)return Object(d.of)(r);var i=e.filter((function(t){return!t.svgElement})).map((function(t){return n._loadSvgIconSetFromConfig(t).pipe((e=function(e){var r=n._sanitizer.sanitize(u.SecurityContext.RESOURCE_URL,t.url);return n._errorHandler.handleError(new Error("Loading icon set URL: ".concat(r," failed: ").concat(e.message))),Object(d.of)(null)},function(t){var n=new b(e),r=t.lift(n);return n.caught=r}));var e}));return Object(d.forkJoin)(i).pipe(Object(m.a)((function(){var r=n._extractIconWithNameFromAnySet(t,e);if(!r)throw z(t);return r})))}},{key:"_extractIconWithNameFromAnySet",value:function(t,e){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.svgElement){var i=this._extractSvgIconFromSet(r.svgElement,t,r.options);if(i)return i}}return null}},{key:"_loadSvgIconFromConfig",value:function(t){var e=this;return this._fetchIcon(t).pipe(Object(m.a)((function(n){return e._createSvgElementForSingleIcon(n,t.options)})))}},{key:"_loadSvgIconSetFromConfig",value:function(t){var e=this;return t.svgElement?Object(d.of)(t.svgElement):this._fetchIcon(t).pipe(Object(m.a)((function(n){return t.svgElement||(t.svgElement=e._svgElementFromString(n)),t.svgElement})))}},{key:"_createSvgElementForSingleIcon",value:function(t,e){var n=this._svgElementFromString(t);return this._setSvgAttributes(n,e),n}},{key:"_extractSvgIconFromSet",value:function(t,e,n){var r=t.querySelector('[id="'.concat(e,'"]'));if(!r)return null;var i=r.cloneNode(!0);if(i.removeAttribute("id"),"svg"===i.nodeName.toLowerCase())return this._setSvgAttributes(i,n);if("symbol"===i.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(i),n);var o=this._svgElementFromString("<svg></svg>");return o.appendChild(i),this._setSvgAttributes(o,n)}},{key:"_svgElementFromString",value:function(t){var e=this._document.createElement("DIV");e.innerHTML=t;var n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}},{key:"_toSvgElement",value:function(t){for(var e=this._svgElementFromString("<svg></svg>"),n=t.attributes,r=0;r<n.length;r++){var i=n[r],o=i.name,c=i.value;"id"!==o&&e.setAttribute(o,c)}for(var a=0;a<t.childNodes.length;a++)t.childNodes[a].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[a].cloneNode(!0));return e}},{key:"_setSvgAttributes",value:function(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}},{key:"_fetchIcon",value:function(t){var e,n=this,r=t.url,i=t.options,o=null!==(e=null==i?void 0:i.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==r)throw Error('Cannot fetch icon from URL "'.concat(r,'".'));var c=this._sanitizer.sanitize(u.SecurityContext.RESOURCE_URL,r);if(!c)throw H(r);var a=this._inProgressUrlFetches.get(c);if(a)return a;var s,l=this._httpClient.get(c,{responseType:"text",withCredentials:o}).pipe((s=function(){return n._inProgressUrlFetches.delete(c)},function(t){return t.lift(new E(s))}),(function(t){return F()((e=M,function(t){var n;n="function"==typeof e?e:function(){return e};var r=Object.create(t,x);return r.source=t,r.subjectFactory=n,r})(t));var e}));return this._inProgressUrlFetches.set(c,l),l}},{key:"_addSvgIconConfig",value:function(t,e,n){return this._svgIconConfigs.set(J(t,e),n),this}},{key:"_addSvgIconSetConfig",value:function(t,e){var n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}}]),t}()).\u0275fac=function(t){return new(t||W)(u["\u0275\u0275inject"](U.HttpClient,8),u["\u0275\u0275inject"](D.DomSanitizer),u["\u0275\u0275inject"](v.DOCUMENT,8),u["\u0275\u0275inject"](u.ErrorHandler))},W.\u0275prov=Object(u["\u0275\u0275defineInjectable"])({factory:function(){return new W(Object(u["\u0275\u0275inject"])(U.HttpClient,8),Object(u["\u0275\u0275inject"])(D.DomSanitizer),Object(u["\u0275\u0275inject"])(v.DOCUMENT,8),Object(u["\u0275\u0275inject"])(u.ErrorHandler))},token:W,providedIn:"root"}),W);function Y(t){return t.cloneNode(!0)}function J(t,e){return t+":"+e}var Q,X,G=Object(f.m)((function t(e){s(this,t),this._elementRef=e})),$=new u.InjectionToken("mat-icon-location",{providedIn:"root",factory:function(){var t=Object(u.inject)(v.DOCUMENT),e=t?t.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),Z=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],K=Z.map((function(t){return"[".concat(t,"]")})).join(", "),tt=/^url\(['"]?#(.*?)['"]?\)$/,et=((X=function(e){r(i,e);var n=o(i);function i(t,e,r,o,c){var a;return s(this,i),(a=n.call(this,t))._iconRegistry=e,a._location=o,a._errorHandler=c,a._inline=!1,a._currentIconFetch=d.Subscription.EMPTY,r||t.nativeElement.setAttribute("aria-hidden","true"),a}return l(i,[{key:"_splitIconName",value:function(t){if(!t)return["",""];var e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error('Invalid icon name: "'.concat(t,'"'))}}},{key:"ngOnChanges",value:function(e){var n=this,r=e.svgIcon;if(r)if(this._currentIconFetch.unsubscribe(),this.svgIcon){var i=t(this._splitIconName(this.svgIcon),2),o=i[0],c=i[1];this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(c,o).pipe(Object(L.a)(1)).subscribe((function(t){return n._setSvgElement(t)}),(function(t){n._errorHandler.handleError(new Error("Error retrieving icon ".concat(o,":").concat(c,"! ").concat(t.message)))}))}else r.previousValue&&this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()}},{key:"ngOnInit",value:function(){this._usingFontIcon()&&this._updateFontIconClasses()}},{key:"ngAfterViewChecked",value:function(){var t=this._elementsWithExternalReferences;if(t&&t.size){var e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}},{key:"ngOnDestroy",value:function(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}},{key:"_usingFontIcon",value:function(){return!this.svgIcon}},{key:"_setSvgElement",value:function(t){this._clearSvgElement();for(var e=t.querySelectorAll("style"),n=0;n<e.length;n++)e[n].textContent+=" ";var r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(t)}},{key:"_clearSvgElement",value:function(){var t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){var n=t.childNodes[e];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||t.removeChild(n)}}},{key:"_updateFontIconClasses",value:function(){if(this._usingFontIcon()){var t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}}},{key:"_cleanupFontValue",value:function(t){return"string"==typeof t?t.trim().split(" ")[0]:t}},{key:"_prependPathToReferences",value:function(t){var e=this._elementsWithExternalReferences;e&&e.forEach((function(e,n){e.forEach((function(e){n.setAttribute(e.name,"url('".concat(t,"#").concat(e.value,"')"))}))}))}},{key:"_cacheChildrenWithExternalReferences",value:function(t){for(var e=t.querySelectorAll(K),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map,r=function(t){Z.forEach((function(r){var i=e[t],o=i.getAttribute(r),c=o?o.match(tt):null;if(c){var a=n.get(i);a||(a=[],n.set(i,a)),a.push({name:r,value:c[1]})}}))},i=0;i<e.length;i++)r(i)}},{key:"inline",get:function(){return this._inline},set:function(t){this._inline=Object(h.b)(t)}},{key:"fontSet",get:function(){return this._fontSet},set:function(t){this._fontSet=this._cleanupFontValue(t)}},{key:"fontIcon",get:function(){return this._fontIcon},set:function(t){this._fontIcon=this._cleanupFontValue(t)}}]),i}(G)).\u0275fac=function(t){return new(t||X)(u["\u0275\u0275directiveInject"](u.ElementRef),u["\u0275\u0275directiveInject"](q),u["\u0275\u0275injectAttribute"]("aria-hidden"),u["\u0275\u0275directiveInject"]($),u["\u0275\u0275directiveInject"](u.ErrorHandler))},X.\u0275cmp=u["\u0275\u0275defineComponent"]({type:X,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:4,hostBindings:function(t,e){2&t&&u["\u0275\u0275classProp"]("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color)},inputs:{color:"color",inline:"inline",fontSet:"fontSet",fontIcon:"fontIcon",svgIcon:"svgIcon"},exportAs:["matIcon"],features:[u["\u0275\u0275InheritDefinitionFeature"],u["\u0275\u0275NgOnChangesFeature"]],ngContentSelectors:T,decls:1,vars:0,template:function(t,e){1&t&&(u["\u0275\u0275projectionDef"](),u["\u0275\u0275projection"](0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),X),nt=((Q=function t(){s(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:Q}),Q.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||Q)},imports:[[f.e],f.e]}),Q)}}])}();