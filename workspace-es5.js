!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{m79I:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return c}),r.d(t,"c",function(){return u}),r.d(t,"d",function(){return s});var a=r("GS7A");function i(e,t){return[].concat(n(t&&"before"===t.animateChildren?[Object(a.j)("@*",Object(a.f)(),{optional:!0})]:[]),[Object(a.h)([Object(a.q)(e)].concat(n(t&&t.animateChildren&&"together"!==t.animateChildren?[]:[Object(a.j)("@*",Object(a.f)(),{optional:!0})])))],n(t&&"after"===t.animateChildren?[Object(a.j)("@*",Object(a.f)(),{optional:!0})]:[]))}function o(e){return Object(a.p)(e&&e.anchor||"fadeIn",[Object(a.o)("0 => 1",[Object(a.n)({visibility:"hidden"})].concat(n(i(Object(a.g)([Object(a.e)("{{duration}}ms {{delay}}ms",Object(a.i)([Object(a.n)({visibility:"visible",opacity:0,easing:"ease",offset:0}),Object(a.n)({opacity:1,easing:"ease",offset:1})]))]),e))),{params:{delay:e&&e.delay||0,duration:e&&e.duration||1e3}})])}function c(e){return Object(a.p)(e&&e.anchor||"lightSpeedInOnEnter",[Object(a.o)(":enter",[Object(a.n)({visibility:"hidden"})].concat(n(i(Object(a.g)([Object(a.e)("{{duration}}ms {{delay}}ms",Object(a.i)([Object(a.n)({visibility:"visible",opacity:0,transform:"translate3d({{translate}}, 0, 0) skewX(-30deg)",easing:"ease-out",offset:0}),Object(a.n)({opacity:1,transform:"skewX(20deg)",easing:"ease-out",offset:.6}),Object(a.n)({opacity:1,transform:"skewX(-5deg)",easing:"ease-out",offset:.8}),Object(a.n)({opacity:1,transform:"translate3d(0, 0, 0)",easing:"ease-out",offset:1})]))]),e))),{params:{delay:e&&e.delay||0,duration:e&&e.duration||1e3,translate:e&&e.translate||"100%"}})])}function u(e){return Object(a.p)(e&&e.anchor||"lightSpeedOutOnLeave",[Object(a.o)(":leave",n(i(Object(a.g)([Object(a.e)("{{duration}}ms {{delay}}ms",Object(a.i)([Object(a.n)({opacity:1,easing:"ease-in",offset:0}),Object(a.n)({opacity:0,transform:"translate3d({{translate}}, 0, 0) skewX(30deg)",easing:"ease-in",offset:1})]))]),e)),{params:{delay:e&&e.delay||0,duration:e&&e.duration||1e3,translate:e&&e.translate||"100%"}})])}function s(e){return Object(a.p)(e&&e.anchor||"zoomInOnEnter",[Object(a.o)(":enter",[Object(a.n)({visibility:"hidden"})].concat(n(i(Object(a.g)(Object(a.h)([Object(a.e)("{{duration}}ms {{delay}}ms",Object(a.i)([Object(a.n)({opacity:0,easing:"ease",offset:0}),Object(a.n)({opacity:1,easing:"ease",offset:.5}),Object(a.n)({opacity:1,easing:"ease",offset:1})])),Object(a.e)("{{duration}}ms {{delay}}ms",Object(a.i)([Object(a.n)({visibility:"visible",transform:"scale3d(0.3, 0.3, 0.3)",easing:"ease",offset:0}),Object(a.n)({transform:"scale3d(1, 1, 1)",easing:"ease",offset:1})]))])),e))),{params:{delay:e&&e.delay||0,duration:e&&e.duration||1e3}})])}},oZEQ:function(n,r,a){"use strict";a.r(r),a.d(r,"WorkspaceModule",function(){return j});var i,o,c,u=a("Ff2x"),s=a("JAnZ"),l=a("0S4P"),d=a("vOrQ"),f=a("m79I"),b=a("pLZG"),p=a("hHaA"),h=a("sSqP"),m=[{path:"create-circle",loadChildren:function(){return Promise.all([a.e(1),a.e(2),a.e(11),a.e(10),a.e(43)]).then(a.bind(null,"0yFO")).then(function(e){return e.CreateCircleModule})}},{path:"editor",loadChildren:function(){return a.e(48).then(a.bind(null,"NI9w")).then(function(e){return e.EditorModule})}},{path:"",component:(i=function(){function n(t,r){e(this,n),this.router=t,this.changeDetector=r,this.animate=!1}var r,a,i;return r=n,(a=[{key:"ngOnInit",value:function(){var e=this;this.subscription=this.router.events.pipe(Object(b.a)(function(e){return e instanceof s.NavigationStart})).subscribe(function(){e.animate=!0,e.changeDetector.detectChanges(),setTimeout(function(){e.animate=!1},1e3)})}},{key:"ngOnDestroy",value:function(){var e;null===(e=this.subscription)||void 0===e||e.unsubscribe()}}])&&t(r.prototype,a),i&&t(r,i),n}(),i.\u0275fac=function(e){return new(e||i)(d["\u0275\u0275directiveInject"](s.Router),d["\u0275\u0275directiveInject"](d.ChangeDetectorRef))},i.\u0275cmp=d["\u0275\u0275defineComponent"]({type:i,selectors:[["app-workspace"]],decls:3,vars:1,template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"app-container"),d["\u0275\u0275elementStart"](1,"app-content"),d["\u0275\u0275element"](2,"router-outlet"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("@fadeIn",t.animate))},directives:[p.a,h.a,s.RouterOutlet],styles:[""],data:{animation:[Object(f.a)()]}}),i),children:[{path:"search",loadChildren:function(){return Promise.all([a.e(1),a.e(2),a.e(4),a.e(12),a.e(9),a.e(49)]).then(a.bind(null,"aROI")).then(function(e){return e.SearchModule})}},{path:"activity",data:{resourceType:"ACTIVITY"},loadChildren:function(){return Promise.all([a.e(1),a.e(10),a.e(8),a.e(44)]).then(a.bind(null,"bcyh")).then(function(e){return e.DetailModule})}},{path:"circle",data:{resourceType:"CIRCLE"},loadChildren:function(){return Promise.all([a.e(1),a.e(10),a.e(8),a.e(44)]).then(a.bind(null,"bcyh")).then(function(e){return e.DetailModule})}},{path:"exercise",data:{resourceType:"EXERCISE"},loadChildren:function(){return Promise.all([a.e(1),a.e(10),a.e(8),a.e(44)]).then(a.bind(null,"bcyh")).then(function(e){return e.DetailModule})}},{path:"**",redirectTo:"search",pathMatch:"full"}]},{path:"**",redirectTo:"",pathMatch:"full"}],y=((c=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[l.CommonModule,s.RouterModule.forChild(m)],s.RouterModule]}),c),j=((o=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[u.a,y]]}),o)}}])}();