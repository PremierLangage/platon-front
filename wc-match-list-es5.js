!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{zyCy:function(n,i,o){"use strict";o.r(i),o.d(i,"MatchListModule",(function(){return j}));var r=o("vOrQ"),s=o("Jj1M"),a=o("QXAp"),c=o("D57K"),l=o("A2ki"),u=o("hlYy"),d=o("JS64"),h=o("YPk2"),f=o("0S4P"),g=o("hPIy"),m=["container"];function p(t,e){1&t&&r["\u0275\u0275elementContainer"](0)}var v=function(t){return{$implicit:t}};function y(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,p,1,0,"ng-container",7),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275nextContext"]();var i=r["\u0275\u0275reference"](7);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngTemplateOutlet",i)("ngTemplateOutletContext",r["\u0275\u0275pureFunction1"](2,v,n))}}function k(t,e){1&t&&r["\u0275\u0275elementContainer"](0)}function C(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,k,1,0,"ng-container",7),r["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit;r["\u0275\u0275nextContext"]();var i=r["\u0275\u0275reference"](7);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngTemplateOutlet",i)("ngTemplateOutletContext",r["\u0275\u0275pureFunction1"](2,v,n))}}function P(t,e){if(1&t&&r["\u0275\u0275element"](0,"nge-markdown",8),2&t){var n=e.$implicit;r["\u0275\u0275property"]("id",n.id)("data",n.content)}}var b,O,w=((O=function(){function n(e,i){t(this,n),this.injector=e,this.changeDetector=i,this.width=0,this.height=0,this.selectedPoints=[]}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.jsPlumb=l.jsPlumb.getInstance({Container:this.container.nativeElement,ConnectionsDetachable:!1,Endpoint:["Dot",{radius:6}],Connector:"StateMachine",PaintStyle:{strokeWidth:4,stroke:"#456"},HoverPaintStyle:{stroke:"#FF4500"},EndpointHoverStyle:{stroke:"#FF4500",fill:"#FF4500"},ConnectionOverlays:[["Arrow",{width:16,length:16,location:.98,id:"arrow"}]],DragOptions:{cursor:"pointer",zIndex:2e3}}),t.next=3,new Promise((function(t){e.jsPlumb.ready((function(){e.addListeners(),t()}))}));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"ngAfterViewChecked",value:function(){var t,e=this.container.nativeElement,n=e.offsetWidth,i=e.offsetHeight;this.width===n&&this.height===i||0!==this.width&&0!==this.height&&(null===(t=this.jsPlumb)||void 0===t||t.repaintEverything()),this.width=n,this.height=i}},{key:"ngOnDestroy",value:function(){var t;null===(t=this.jsPlumb)||void 0===t||t.reset()}},{key:"onChangeState",value:function(){var t=this;this.jsPlumb.batch((function(){t.jsPlumb.reset(!0),t.jsPlumb.setSuspendEvents(t.state.disabled),t.renderEndPoints(),t.renderConnections()}))}},{key:"trackBy",value:function(t,e){return e.id||t}},{key:"renderEndPoints",value:function(){var t=this;this.state.nodes.forEach((function(e){var n;null===(n=t.jsPlumb)||void 0===n||n.addEndpoint(e.id,{id:e.id,isSource:"source"===e.type,isTarget:"target"===e.type,anchor:"source"===e.type?"Right":"Left",maxConnections:t.state.disabled?0:-1})}))}},{key:"renderConnections",value:function(){var t=this;this.state.links.forEach((function(e){var n;e.source&&e.target&&(null===(n=t.jsPlumb)||void 0===n||n.connect({source:e.source,target:e.target,anchors:["RightMiddle","LeftMiddle"],cssClass:e.css}))}))}},{key:"addListeners",value:function(){var t=this;this.jsPlumb.bind("click",(function(e){var n;null===(n=t.jsPlumb)||void 0===n||n.deleteConnection(e)})),this.jsPlumb.bind("connection",(function(e){t.onCreateConnection(e.connection)})),this.jsPlumb.bind("connectionDetached",(function(e){t.onRemoveConnection(e.connection)})),this.jsPlumb.bind("endpointClick",(function(e){if(t.selectPoint(e),t.selectedPoints.length>=2){var n=t.selectedPoints.find((function(t){return t.isSource})),i=t.selectedPoints.find((function(t){return t.isTarget}));if(n&&i)t.unselectPoints(),t.state.links.push({source:n.getElement().id,target:i.getElement().id});else{var o=t.selectedPoints[1];t.unselectPoints(),t.selectPoint(o)}}}))}},{key:"selectPoint",value:function(t){var e=t.canvas;e.classList.remove("selected"),e.classList.add("selected"),this.selectedPoints.push(t)}},{key:"unselectPoints",value:function(){this.selectedPoints.forEach((function(t){t.canvas.classList.remove("selected")})),this.selectedPoints=[]}},{key:"indexOfConnection",value:function(t){for(var e=this.state.links,n=0;n<this.state.links.length;n++){var i=e[n];if(i.source===t.sourceId&&i.target===t.targetId)return n}return-1}},{key:"onCreateConnection",value:function(t){var e=this;-1===this.indexOfConnection(t)&&this.changeDetector.ignore(this,(function(){e.state.links.push({source:t.sourceId,target:t.targetId})}))}},{key:"onRemoveConnection",value:function(t){var e=this,n=this.indexOfConnection(t);-1!==n&&this.changeDetector.ignore(this,(function(){e.state.links.splice(n,1)}))}},{key:"sources",get:function(){return this.state.nodes.filter((function(t){return"source"===t.type}))}},{key:"targets",get:function(){return this.state.nodes.filter((function(t){return"target"===t.type}))}}])&&e(i.prototype,o),r&&e(i,r),n}()).\u0275fac=function(t){return new(t||O)(r["\u0275\u0275directiveInject"](r.Injector),r["\u0275\u0275directiveInject"](d.a))},O.\u0275cmp=r["\u0275\u0275defineComponent"]({type:O,selectors:[["wc-match-list"]],viewQuery:function(t,e){var n;1&t&&r["\u0275\u0275staticViewQuery"](m,!0),2&t&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(e.container=n.first)},inputs:{state:"state"},decls:9,vars:7,consts:[[1,"match-list-container"],["container",""],[1,"match-list-sources"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"match-list-targets"],["nodeTemplate",""],[3,"state","stateChange"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"id","data"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0,1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275template"](3,y,2,4,"ng-container",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275template"](5,C,2,4,"ng-container",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](6,P,1,2,"ng-template",null,5,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementStart"](8,"wc-base",6),r["\u0275\u0275listener"]("stateChange",(function(t){return e.state=t})),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275classProp"]("disabled",e.state.disabled),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",e.sources)("ngForTrackBy",e.trackBy),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",e.targets)("ngForTrackBy",e.trackBy),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("state",e.state))},directives:[f.NgForOf,g.a,f.NgTemplateOutlet,s.NgeMarkdownComponent],styles:[".match-list-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:8rem;align-items:center;position:relative;min-height:100px}.match-list-container.disabled[_ngcontent-%COMP%]{cursor:not-allowed;border:1px dashed #ccc}.match-list-container[_ngcontent-%COMP%]  .jtk-endpoint svg, .match-list-container[_ngcontent-%COMP%]  svg.jtk-connector{cursor:pointer}.match-list-container[_ngcontent-%COMP%]  .jtk-endpoint.selected circle{fill:#ff4500;stroke:#ff4500}.match-list-container[_ngcontent-%COMP%]  svg.error-state, .match-list-container[_ngcontent-%COMP%]  svg.success-state, .match-list-container[_ngcontent-%COMP%]  svg.warning-state{background-color:unset!important;border:unset!important;border-radius:unset!important}.match-list-container[_ngcontent-%COMP%]  svg.error-state path{stroke:red}.match-list-container[_ngcontent-%COMP%]  svg.warning-state path{stroke:#ff0}.match-list-container[_ngcontent-%COMP%]  svg.success-state path{stroke:#0f0}.match-list-sources[_ngcontent-%COMP%]{text-align:end}.match-list-targets[_ngcontent-%COMP%]{text-align:start}nge-markdown[_ngcontent-%COMP%]{display:block;padding:1rem;border-bottom:1px solid #f5f5f5}nge-markdown[_ngcontent-%COMP%]  img{width:128px;-o-object-fit:cover;object-fit:cover;height:auto}"],changeDetection:0}),O=Object(c.b)([Object(u.b)(h.a)],O)),j=((b=function e(){t(this,e),this.customElementComponent=w}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||b)},imports:[[a.a,s.NgeMarkdownModule]]}),b)}}])}();