!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{DpEs:function(n,o,a){"use strict";a.r(o),a.d(o,"AutomatonViewerModule",(function(){return h}));var r,c,i=a("vOrQ"),s=a("2cFF"),u=a("QXAp"),f=a("D57K"),p=a("Gvy/"),l=a("hlYy"),d=a("Rqzk"),b=a("hPIy"),m=((c=function(){function n(t){e(this,n),this.injector=t}var o,a,r;return o=n,(a=[{key:"onChangeState",value:function(){this.dot=Object(p.b)(Object(p.d)(this.state.automaton))}}])&&t(o.prototype,a),r&&t(o,r),n}()).\u0275fac=function(e){return new(e||c)(i["\u0275\u0275directiveInject"](i.Injector))},c.\u0275cmp=i["\u0275\u0275defineComponent"]({type:c,selectors:[["wc-automaton-viewer"]],inputs:{state:"state"},decls:2,vars:2,consts:[[3,"renderDot"],[3,"state","stateChange"]],template:function(e,t){1&e&&(i["\u0275\u0275element"](0,"div",0),i["\u0275\u0275elementStart"](1,"wc-base",1),i["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("renderDot",t.dot),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("state",t.state))},directives:[s.a,b.a],styles:[""],changeDetection:0}),c=Object(f.b)([Object(l.b)(d.a)],c)),h=((r=function t(){e(this,t),this.customElementComponent=m}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[u.a,s.b]]}),r)}}])}();