!function(){function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"9LOt":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("0S4P"),o=n("FvuC"),a=n("vOrQ"),s=function(){var e=function e(){i(this,e)};return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,o.g],r.CommonModule]}),e}()},ZORW:function(t,n,o){"use strict";o.r(n),o.d(n,"TextSelectModule",function(){return g});var a,s,c=o("vOrQ"),u=o("9LOt"),l=o("Lb1P"),f=o("mrSG"),d=o("NLDi"),h=o("5Ekz"),m=o("eFZk"),p="data-select-index",v=((s=function(){function t(e,n,r){i(this,t),this.injector=e,this.el=n,this.cssPipe=r}return r(t,[{key:"container",get:function(){var e=this.el.nativeElement,t=e.firstElementChild;return"DIV"!==t.tagName&&(t=document.createElement("div"),e.insertBefore(t,e.firstElementChild)),t.className="cursor-pointer","free"===this.state.mode&&(t.className="cursor-text"),t}},{key:"onChangeState",value:function(){switch(this.state.mode){case"units":this.renderModeUnits();break;case"free":this.renderModeFree();break;default:this.renderModeRegex()}this.highlightSelections()}},{key:"onMouseUp",value:function(e){"free"===this.state.mode?this.createSelectionFromMouse():this.createSelectionFromEvent(e)}},{key:"createSelectionFromMouse",value:function(){var e,t,n=(window.getSelection||document.getSelection)(),r=null===(e=null==n?void 0:n.anchorNode)||void 0===e?void 0:e.parentElement,i=null===(t=null==n?void 0:n.focusNode)||void 0===t?void 0:t.parentElement,o=Number.parseInt((null==r?void 0:r.getAttribute(p))||"",10),a=Number.parseInt((null==i?void 0:i.getAttribute(p))||"",10);if(!Number.isNaN(o)&&!Number.isNaN(a)){for(var s=Math.min(o,a),c=Math.max(o,a),u=this.state.selections,l=0;l<u.length;l++){var f=u[l];if("object"==typeof f.position){var d=f.position,h=c>=d[0]&&s<=d[1];if(s>=d[0]&&s<=d[1]||h)return void u.splice(l,1)}}this.state.selections.push({position:[s,c]})}}},{key:"createSelectionFromEvent",value:function(t){if(t.target instanceof HTMLElement){var n=this.container,r=t.target;if(!n.isSameNode(r)&&n.contains(r)){for(;null==r.getAttribute(p);){if(null==(r=r.parentElement))return;if(r.isSameNode(n))return}var i=Number.parseInt(r.getAttribute(p)||"",10);if(!Number.isNaN(i)){var o,a=0,s=e(this.state.selections);try{for(s.s();!(o=s.n()).done;){if(o.value.position===i)return void this.state.selections.splice(a,1);a++}}catch(c){s.e(c)}finally{s.f()}this.state.selections.push({position:i})}}}}},{key:"renderModeFree",value:function(){this.container.innerHTML=this.state.text.trim();var t=0;!function n(r){var i;if(r.nodeType!==Node.TEXT_NODE)Array.from(r.childNodes).forEach(function(e){return n(e)});else{var o,a=document.createElement("span"),s=e(r.textContent);try{for(s.s();!(o=s.n()).done;){var c=o.value;if("\n"!==c){var u=document.createElement("span");u.innerText=c,u.setAttribute(p,(t++).toString()),a.appendChild(u)}}}catch(l){s.e(l)}finally{s.f()}null===(i=r.parentElement)||void 0===i||i.replaceChild(a,r)}}(this.container)}},{key:"renderModeUnits",value:function(){var e=0;this.container.innerHTML=this.state.text.replace(/\{([^}]+?)\}/gm,function(t,n){return"<span ".concat(p,'="').concat(e++,'">').concat(n,"</span>")})}},{key:"renderModeRegex",value:function(){var e=0;this.container.innerHTML=this.state.text.trim().replace(new RegExp(this.state.regex||"","gm"),function(t){return"<span ".concat(p,'="').concat(e++,'">').concat(t,"</span>")})}},{key:"highlightRange",value:function(e,t,n){for(var r=this.container,i=[],o=e;o<=t;o++){var a=r.querySelector("[".concat(p,'="').concat(o,'"]'));a&&(a.className=n||"highlight-state",i.push(a.innerHTML))}return i.join("")}},{key:"highlightSelections",value:function(){var e=this,t=this.container;t.querySelectorAll("[".concat(p,"]")).forEach(function(e){e.className=""}),this.state.selections.forEach(function(n){var r=e.cssPipe.transform(n.css,"class");if("number"==typeof n.position){var i=t.querySelector("[".concat(p,'="').concat(n.position,'"]'));i&&(i.className=r||"highlight-state",n.content!==i.textContent&&(n.content=i.textContent))}else{var o=e.highlightRange(n.position[0],n.position[1],r);n.content!==o&&(n.content=o)}})}}]),t}()).\u0275fac=function(e){return new(e||s)(c["\u0275\u0275directiveInject"](c.Injector),c["\u0275\u0275directiveInject"](c.ElementRef),c["\u0275\u0275directiveInject"](l.a))},s.\u0275cmp=c["\u0275\u0275defineComponent"]({type:s,selectors:[["wc-text-select"]],hostBindings:function(e,t){1&e&&c["\u0275\u0275listener"]("mouseup",function(e){return t.onMouseUp(e)})},inputs:{state:"state"},decls:1,vars:1,consts:[[3,"state","stateChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"wc-base",0),c["\u0275\u0275listener"]("stateChange",function(e){return t.state=e}),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("state",t.state)},directives:[m.a],styles:["[_nghost-%COMP%]  .cursor-pointer{cursor:pointer}[_nghost-%COMP%]  .cursor-text{cursor:text}[_nghost-%COMP%]  .highlight-state{color:var(--brand-color-primary);background-color:#cce5ff;border-bottom:1px solid #b8daff;border-color:#b8daff transparent;border-top:1px solid #b8daff}[_nghost-%COMP%]  .error-state, [_nghost-%COMP%]  .success-state, [_nghost-%COMP%]  .warning-state{border:unset;border-radius:unset}[_nghost-%COMP%]  .error-state{text-decoration:line-through}"],changeDetection:0}),s=Object(f.b)([Object(d.b)(h.a),Object(f.c)("design:paramtypes",[c.Injector,c.ElementRef,l.a])],s)),g=((a=function e(){i(this,e),this.customElementComponent=v}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},providers:[l.a],imports:[[u.a,l.b]]}),a)},eFZk:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n("vOrQ"),a=n("t5Kd"),s=n("0S4P"),c=n("FvuC"),u=["container"];function l(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275element"](1,"nge-monaco-viewer",1),o["\u0275\u0275pipe"](2,"json"),o["\u0275\u0275elementContainerEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("code",o["\u0275\u0275pipeBind1"](2,1,n.state))}}var f=function(){var e=function(){function e(t,n){i(this,e),this.api=t,this.elementRef=n,this.stateChange=new o.EventEmitter}return r(e,[{key:"ngOnInit",value:function(){var e,t=this,n=this.elementRef.nativeElement,r=null===(e=n.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(r||""),this.observer=new MutationObserver(function(e){e.forEach(t.createStateFromAttributes.bind(t))}),this.observer.observe(n.parentElement,{attributes:!0}),this.createStateFromAttributes()}},{key:"ngOnDestroy",value:function(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}},{key:"parse",value:function(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}},{key:"createStateFromAttributes",value:function(){for(var e,t,n=this.elementRef.nativeElement.parentElement.attributes,r={},i=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{},o=!1,a=0,s=Array.from(n);a<s.length;a++){var c=s[a];c.name in i&&(o=!0,r[c.name]=this.parse(c.value))}o&&this.stateChange.emit(r)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](o.ElementRef))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-base"]],viewQuery:function(e,t){var n;(1&e&&o["\u0275\u0275viewQuery"](u,1),2&e)&&(o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.container=n.first))},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&o["\u0275\u0275template"](0,l,3,3,"ng-container",0),2&e&&o["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug)},directives:[s.NgIf,c.h],pipes:[s.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),e}()}}])}();