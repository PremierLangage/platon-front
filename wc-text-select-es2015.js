(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+S1+":function(e,t,n){"use strict";n.r(t),n.d(t,"TextSelectModule",(function(){return h}));var s=n("vOrQ"),r=n("Yf6g"),o=n("PxAM"),i=n("D57K"),a=n("wgwC"),c=n("Dy3e"),l=n("4cXV");const u="data-select-index";let d=(()=>{let e=class{constructor(e,t,n){this.injector=e,this.el=t,this.cssPipe=n}get container(){const e=this.el.nativeElement;let t=e.firstElementChild;return"DIV"!==t.tagName&&(t=document.createElement("div"),e.insertBefore(t,e.firstElementChild)),t.className="cursor-pointer","free"===this.state.mode&&(t.className="cursor-text"),t}onChangeState(){switch(this.state.mode){case"units":this.renderModeUnits();break;case"free":this.renderModeFree();break;default:this.renderModeRegex()}this.highlightSelections()}onMouseUp(e){"free"===this.state.mode?this.createSelectionFromMouse():this.createSelectionFromEvent(e)}createSelectionFromMouse(){var e,t;const n=(window.getSelection||document.getSelection)(),s=null===(e=null==n?void 0:n.anchorNode)||void 0===e?void 0:e.parentElement,r=null===(t=null==n?void 0:n.focusNode)||void 0===t?void 0:t.parentElement,o=Number.parseInt((null==s?void 0:s.getAttribute(u))||"",10),i=Number.parseInt((null==r?void 0:r.getAttribute(u))||"",10);if(Number.isNaN(o)||Number.isNaN(i))return;const a=Math.min(o,i),c=Math.max(o,i),l=this.state.selections;for(let u=0;u<l.length;u++){const e=l[u];if("object"==typeof e.position){const t=e.position,n=c>=t[0]&&a<=t[1];if(a>=t[0]&&a<=t[1]||n)return void l.splice(u,1)}}this.state.selections.push({position:[a,c]})}createSelectionFromEvent(e){if(!(e.target instanceof HTMLElement))return;const t=this.container;let n=e.target;if(t.isSameNode(n)||!t.contains(n))return;for(;null==n.getAttribute(u);){if(n=n.parentElement,null==n)return;if(n.isSameNode(t))return}const s=Number.parseInt(n.getAttribute(u)||"",10);if(!Number.isNaN(s)){let e=0;for(const t of this.state.selections){if(t.position===s)return void this.state.selections.splice(e,1);e++}this.state.selections.push({position:s})}}renderModeFree(){this.container.innerHTML=this.state.text.trim();let e=0;const t=n=>{var s;if(n.nodeType!==Node.TEXT_NODE)Array.from(n.childNodes).forEach(e=>t(e));else{const t=document.createElement("span");for(const s of n.textContent){if("\n"===s)continue;const n=document.createElement("span");n.innerText=s,n.setAttribute(u,(e++).toString()),t.appendChild(n)}null===(s=n.parentElement)||void 0===s||s.replaceChild(t,n)}};t(this.container)}renderModeUnits(){let e=0;this.container.innerHTML=this.state.text.replace(/\{([^}]+?)\}/gm,(t,n)=>`<span ${u}="${e++}">${n}</span>`)}renderModeRegex(){let e=0;this.container.innerHTML=this.state.text.trim().replace(new RegExp(this.state.regex||"","gm"),t=>`<span ${u}="${e++}">${t}</span>`)}highlightRange(e,t,n){const s=this.container,r=[];for(let o=e;o<=t;o++){const e=s.querySelector(`[${u}="${o}"]`);e&&(e.className=n||"highlight-state",r.push(e.innerHTML))}return r.join("")}highlightSelections(){const e=this.container;e.querySelectorAll(`[${u}]`).forEach(e=>{e.className=""}),this.state.selections.forEach(t=>{const n=this.cssPipe.transform(t.css,"class");if("number"==typeof t.position){const s=e.querySelector(`[${u}="${t.position}"]`);s&&(s.className=n||"highlight-state",t.content!==s.textContent&&(t.content=s.textContent))}else{const e=this.highlightRange(t.position[0],t.position[1],n);t.content!==e&&(t.content=e)}})}};return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](s.Injector),s["\u0275\u0275directiveInject"](s.ElementRef),s["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-text-select"]],hostBindings:function(e,t){1&e&&s["\u0275\u0275listener"]("mouseup",(function(e){return t.onMouseUp(e)}))},inputs:{state:"state"},decls:1,vars:1,consts:[[3,"state","stateChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"wc-base",0),s["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("state",t.state)},directives:[l.a],styles:["[_nghost-%COMP%]  .cursor-pointer{cursor:pointer}[_nghost-%COMP%]  .cursor-text{cursor:text}[_nghost-%COMP%]  .highlight-state{color:var(--brand-color-primary);background-color:#cce5ff;border-bottom:1px solid #b8daff;border-color:#b8daff transparent;border-top:1px solid #b8daff}[_nghost-%COMP%]  .error-state, [_nghost-%COMP%]  .success-state, [_nghost-%COMP%]  .warning-state{border:unset;border-radius:unset}[_nghost-%COMP%]  .error-state{text-decoration:line-through}"],changeDetection:0}),e=Object(i.b)([Object(a.b)(c.a)],e),e})(),h=(()=>{class e{constructor(){this.customElementComponent=d}}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[o.a],imports:[[r.a,o.b]]}),e})()},"4cXV":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("vOrQ"),r=n("2qzO"),o=n("0S4P"),i=n("Eb9S");const a=["container"];function c(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275element"](1,"nge-monaco-viewer",1),s["\u0275\u0275pipe"](2,"json"),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("code",s["\u0275\u0275pipeBind1"](2,1,e.state))}}let l=(()=>{class e{constructor(e,t){this.api=e,this.elementRef=t,this.stateChange=new s.EventEmitter}ngOnInit(){var e;const t=this.elementRef.nativeElement,n=null===(e=t.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(n||""),this.observer=new MutationObserver(e=>{e.forEach(this.createStateFromAttributes.bind(this))}),this.observer.observe(t.parentElement,{attributes:!0}),this.createStateFromAttributes()}ngOnDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}parse(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}createStateFromAttributes(){var e,t;const n=this.elementRef.nativeElement.parentElement.attributes,s={},r=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{};let o=!1;for(const i of Array.from(n))i.name in r&&(o=!0,s[i.name]=this.parse(i.value));o&&this.stateChange.emit(s)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](s.ElementRef))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-base"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](a,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.container=n.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&s["\u0275\u0275template"](0,c,3,3,"ng-container",0),2&e&&s["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug)},directives:[o.NgIf,i.h],pipes:[o.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),e})()},Yf6g:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("0S4P"),r=n("Eb9S"),o=n("vOrQ");let i=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.CommonModule,r.g],s.CommonModule]}),e})()}}]);