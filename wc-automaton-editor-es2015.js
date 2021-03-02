(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{y1ob:function(t,e,n){"use strict";n.r(e),n.d(e,"AutomatonEditorModule",function(){return _});var i=n("vOrQ"),o=n("Dxy4"),s=n("Tj54"),a=n("ZFy/"),r=n("1TZ5"),c=n("9LOt"),u=n("mrSG"),h=n("4ZMo"),l=n("NLDi"),d=n("Qn65");const m=new i.InjectionToken("AUTOMATON_EDITOR_ACTIONS");var p=n("Vgaj"),f=n("+AXo");let v=(()=>{class t{constructor(){this.createStateEvent=new p.Subject,this.createTransitionEvent=new p.Subject,this.createInitialStateEvent=new p.Subject,this.createAcceptingStateEvent=new p.Subject,this.removeStateEvent=new p.Subject,this.removeTransitionEvent=new p.Subject,this.removeInitialStateEvent=new p.Subject,this.removeAcceptingStateEvent=new p.Subject,this.renameStateEvent=new p.Subject,this.renameTransitionEvent=new p.Subject}get onCreateState(){return this.createStateEvent.asObservable()}get onCreateTransition(){return this.createTransitionEvent.asObservable()}get onCreateInitialState(){return this.createInitialStateEvent.asObservable()}get onCreateAcceptingState(){return this.createAcceptingStateEvent.asObservable()}get onRemoveState(){return this.removeStateEvent.asObservable()}get onRemoveTransition(){return this.removeTransitionEvent.asObservable()}get onRemoveInitialState(){return this.removeInitialStateEvent.asObservable()}get onRemoveAcceptingState(){return this.removeAcceptingStateEvent.asObservable()}get onRenameState(){return this.renameStateEvent.asObservable()}get onRenameTransition(){return this.renameTransitionEvent.asObservable()}get automaton(){try{"string"==typeof this.state.automaton?this.state.automaton=Object(f.a)(this.state.automaton):this.state.automaton||(this.state.automaton=Object(f.c)())}catch(e){console.log(e),this.state.automaton=Object(f.c)()}const t=this.state.automaton;return t.position||(t.position={}),t.states||(t.states=[]),t.initialStates||(t.initialStates=[]),t.acceptingStates||(t.acceptingStates=[]),t.alphabet||(t.alphabet=[]),t.transitions||(t.transitions=[]),t}set automaton(t){this.state.automaton=t}get alphabet(){return this.automaton.alphabet}set alphabet(t){this.automaton.alphabet=t}get states(){return this.automaton.states}set states(t){this.automaton.states=t}get position(){return this.automaton.position||(this.automaton.position={}),this.automaton.position}set position(t){this.automaton.position=t}get transitions(){return this.automaton.transitions}set transitions(t){this.automaton.transitions=t}get initialStates(){return this.automaton.initialStates}set initialStates(t){this.automaton.initialStates=t}get acceptingStates(){return this.automaton.acceptingStates}set acceptingStates(t){this.automaton.acceptingStates=t}sync(t){this.state=t,this.validate()}findPosition(t){return this.position[t]}forEachState(t){this.states.forEach(t)}forEachTransition(t){this.transitions.forEach(t)}stateName(){return"S"+(this.states.length+1)}isState(t){return null!=this.states.find(e=>e===t)}isInitial(t){return this.isState(t)&&null!=this.initialStates.find(e=>e===t)}isAccepting(t){return this.isState(t)&&null!=this.acceptingStates.find(e=>e===t)}addState(t,e,n){return!this.isState(t)&&(this.states.push(t),this.moveState(t,e,n),this.initialStates.length||this.addInitial(t),this.createStateEvent.next(t),!0)}moveState(t,e,n){this.position[t]={x:e,y:n}}addInitial(t){return!this.isInitial(t)&&(this.initialStates.push(t),this.createInitialStateEvent.next(t),!0)}addAccepting(t){return!!this.isState(t)&&!this.isAccepting(t)&&(this.acceptingStates.push(t),this.createAcceptingStateEvent.next(t),!0)}removeState(t){return!!this.remove(this.states,e=>e===t)&&(delete this.position[t],this.removeInitial(t),this.removeAccepting(t),this.remove(this.transitions,e=>e.fromState===t||e.toState===t),this.validate(),this.removeStateEvent.next(t),!0)}removeInitial(t){return!!this.remove(this.initialStates,e=>e===t)&&(this.removeInitialStateEvent.next(t),!0)}removeAccepting(t){return!!this.remove(this.acceptingStates,e=>e===t)&&(this.removeAcceptingStateEvent.next(t),!0)}renameState(t,e){return!!this.isState(t)&&(this.states=[e,...this.states.filter(e=>e!==t)],this.initialStates=this.initialStates.map(n=>n===t?e:n),this.acceptingStates=this.acceptingStates.map(n=>n===t?e:n),this.automaton.transitions.forEach(n=>{n.fromState===t&&(n.fromState=e),n.toState===t&&(n.toState=e)}),this.position[e]=this.position[t],delete this.position[t],this.validate(),this.renameStateEvent.next({oldName:t,newName:e}),!0)}isTransition(t){return this.transitions.find(e=>e.fromState===t.fromState&&e.toState===t.toState)}addTransition(t){return!this.isTransition(t)&&(this.transitions.push(t),this.validate(),this.createTransitionEvent.next(t),!0)}removeTransition(t){return!!this.remove(this.transitions,e=>e.fromState===t.fromState&&e.toState===t.toState)&&(this.validate(),this.removeTransitionEvent.next(t),!0)}renameTransition(t,e){const n=this.transitions.find(e=>e.fromState===t.fromState&&e.toState===t.toState);return!!n&&(n.symbols=[...e],this.validate(),this.renameTransitionEvent.next(n),!0)}findTransition(t){return this.transitions.find(t)}validate(){const t=[];this.transitions.forEach(e=>{e.symbols.forEach(e=>{t.includes(e)||t.push(e)})}),this.alphabet=t}remove(t,e){let n=0;for(const i of t){if(e(i))return t.splice(n,1),!0;n++}return!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();const b={provide:m,multi:!0,useClass:(()=>{class t{constructor(t){this.editor=t,this.name="Supprimer"}run(t){t.state&&this.editor.removeState(t.state)}condition(t){return!!t.state}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},g={provide:m,multi:!0,useClass:(()=>{class t{constructor(t,e){this.dialog=t,this.editor=e,this.name="Renommer"}run(t){return Object(u.a)(this,void 0,void 0,function*(){if(!t.state)return;const e=t.state;let n=yield this.prompt(`Renommer l'\xe9tat \u201c${e}\u201d`,"Nouveau nom",e);if(n&&n.trim()){if(n=n.trim(),this.editor.isState(n))return void this.dialog.snack("Il existe d\xe9j\xe0 un \xe9tat avec ce nom !",{verticalPosition:"top",horizontalPosition:"end"});this.editor.renameState(e,n)}})}condition(t){return!!t.state}prompt(t,e,n){return Object(u.a)(this,void 0,void 0,function*(){const i=yield this.dialog.promptAsync({title:t,okTitle:"Valider",noTitle:"Annuler",fields:[{type:"text",placeholder:e,value:n,required:!0}]});return i?i.fields[0].value:""})}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](r.a),i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},S={provide:m,multi:!0,useClass:(()=>{class t{constructor(t){this.editor=t,this.name="Final"}run(t){t.state&&this.editor.addAccepting(t.state)}condition(t){return!!t.state&&!this.editor.isAccepting(t.state)}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},C={provide:m,multi:!0,useClass:(()=>{class t{constructor(t){this.editor=t,this.name="Inital"}run(t){t.state&&this.editor.addInitial(t.state)}condition(t){return!!t.state&&!this.editor.isInitial(t.state)}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},j={provide:m,multi:!0,useClass:(()=>{class t{constructor(t){this.editor=t,this.name="Non final"}run(t){t.state&&this.editor.removeAccepting(t.state)}condition(t){return!!t.state&&this.editor.isAccepting(t.state)}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},E={provide:m,multi:!0,useClass:(()=>{class t{constructor(t){this.editor=t,this.name="Non initial"}run(t){t.state&&this.editor.removeInitial(t.state)}condition(t){return!!t.state&&this.editor.isInitial(t.state)}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},x={provide:m,multi:!0,useClass:(()=>{class t{constructor(t){this.editor=t,this.name="Supprimer transition"}run(t){t.transition&&this.editor.removeTransition(t.transition)}condition(t){return!!t.transition}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},y={provide:m,multi:!0,useClass:(()=>{class t{constructor(t,e){this.dialog=t,this.editor=e,this.name="Changer \xe9tiquette"}run(t){return Object(u.a)(this,void 0,void 0,function*(){if(!t.transition)return;const e=t.transition,n=yield this.prompt("Transition","Entrez les symboles en les s\xe9parant par une virgule",e.symbols.join(","));if(n){const t=n.split(",").map(t=>t.trim()).filter(t=>!!t);0===t.length?this.dialog.snack("Vous devez saisir les symboles en les s\xe9parant par une virgule",{verticalPosition:"top",horizontalPosition:"end"}):this.editor.renameTransition(e,t)}})}condition(t){return!!t.transition}prompt(t,e,n){return Object(u.a)(this,void 0,void 0,function*(){const i=yield this.dialog.promptAsync({title:t,okTitle:"Valider",noTitle:"Annuler",fields:[{type:"text",placeholder:e,value:n,required:!0}]});return i?i.fields[0].value:""})}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](r.a),i["\u0275\u0275inject"](v))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()};var k=n("tQwQ"),O=n("0S4P"),w=n("eFZk");const I=["container"];function T(t,e){if(1&t){const t=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275elementStart"](1,"button",8),i["\u0275\u0275listener"]("click",function(){i["\u0275\u0275restoreView"](t);const n=e.$implicit;return i["\u0275\u0275nextContext"]().run(n)}),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementContainerEnd"]()}if(2&t){const t=e.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",t.name," ")}}let P=(()=>{let t=class{constructor(t,e,n,i){this.injector=t,this.editor=e,this.changeDetector=n,this.editorActions=i,this.subs=[],this.context={state:void 0,transition:void 0},this.zoom=1,this.actions=[]}get canvas(){return this.container.nativeElement.querySelector(".automaton-editor-canvas")}ngOnInit(){return this.jsp=h.jsPlumb.getInstance({Endpoint:["Dot",{radius:2}],Connector:"StateMachine",HoverPaintStyle:{stroke:"#1e8151",strokeWidth:2},ConnectionOverlays:[["Arrow",{location:1,id:"arrow",length:14,foldback:.8}],["Label",{label:"transition",id:"transition",cssClass:"automaton-transition"}]],Container:this.canvas}),this.jsp.registerConnectionType("basic",{anchor:"Continuous",connector:"StateMachine"}),new Promise(t=>{this.jsp.ready(()=>{this.addListeners(),t()})})}ngOnDestroy(){this.removeListeners()}onChangeState(){this.editor.sync(this.state),this.jsp.reset(!0),this.jsp.getContainer().innerHTML="",this.jsp.batch(()=>{this.editor.forEachState(this.renderEndpoint.bind(this)),this.editor.forEachTransition(this.renderConnection.bind(this))}),this.unfocus()}run(t){this.changeDetector.ignore(this,()=>t.run(this.context))}zoomIn(t){t.preventDefault(),t.stopPropagation(),this.zoom+=.1,this.zoom>=1&&(this.zoom=1),this.setZoom(this.zoom)}zoomOut(t){t.preventDefault(),t.stopPropagation(),this.zoom-=.1,this.zoom<=.2&&(this.zoom=.2),this.setZoom(this.zoom)}addListeners(){this.jsp.bind("click",this.onClickConnection.bind(this)),this.jsp.bind("beforeDrop",this.onWillCreateConnection.bind(this)),h.jsPlumb.on(this.container.nativeElement,"click",this.onClickContainer.bind(this)),h.jsPlumb.on(this.container.nativeElement,"dblclick",this.onDblClickContainer.bind(this)),this.subs.push(this.editor.onCreateState.subscribe(this.renderEndpoint.bind(this))),this.subs.push(this.editor.onCreateTransition.subscribe(this.renderConnection.bind(this))),this.subs.push(this.editor.onCreateInitialState.subscribe(t=>{const e=this.findEndpoint(t);e&&(e.classList.remove("automaton-state--initial"),e.classList.add("automaton-state--initial"),this.focus(e))})),this.subs.push(this.editor.onCreateAcceptingState.subscribe(t=>{const e=this.findEndpoint(t);e&&(e.classList.remove("automaton-state--final"),e.classList.add("automaton-state--final"),this.focus(e))})),this.subs.push(this.editor.onRemoveInitialState.subscribe(t=>{const e=this.findEndpoint(t);e&&(e.classList.remove("automaton-state--initial"),this.focus(e))})),this.subs.push(this.editor.onRemoveAcceptingState.subscribe(t=>{const e=this.findEndpoint(t);e&&(e.classList.remove("automaton-state--final"),this.focus(e))})),this.subs.push(this.editor.onRemoveState.subscribe(t=>{this.jsp.remove(t),this.unfocus()})),this.subs.push(this.editor.onRemoveTransition.subscribe(t=>{this.jsp.deleteConnection(this.findConnection(t)),this.unfocus()})),this.subs.push(this.editor.onRenameState.subscribe(t=>{const{oldName:e,newName:n}=t,i=this.findEndpoint(t.oldName);if(i){i.id=n;const t=i.querySelector(".automaton-state__label");t&&(t.innerHTML=n),this.jsp.setIdChanged(e,n),this.focus(i)}})),this.subs.push(this.editor.onRenameTransition.subscribe(t=>{const e=this.findConnection(t);e&&(e.getOverlay("transition").setLabel(t.symbols.join(",")),this.focus(e))}))}removeListeners(){var t;null===(t=this.jsp)||void 0===t||t.reset(),null==h.jsPlumb||h.jsPlumb.off(this.container.nativeElement,"mousedown",this.onClickContainer.bind(this)),null==h.jsPlumb||h.jsPlumb.off(this.container.nativeElement,"dblclick",this.onDblClickContainer.bind(this)),this.subs.forEach(t=>t.unsubscribe())}renderEndpoint(t){const e=document.createElement("div");e.id=t,e.className="automaton-state",e.innerHTML=`\n        <div class="automaton-state__label">${t}</div>\n        <div class="automaton-state__endpoint"></div>\n        `;const{x:n,y:i}=this.editor.findPosition(t);e.style.left=n+"px",e.style.top=i+"px",e.onclick=e.ontouchstart=()=>{this.changeDetector.ignore(this,()=>this.focus(e))},this.editor.isInitial(t)&&e.classList.add("automaton-state--initial"),this.editor.isAccepting(t)&&e.classList.add("automaton-state--final"),this.jsp.getContainer().appendChild(e),this.jsp.draggable(e,{drag:t=>{this.changeDetector.ignore(this,()=>{this.editor.moveState(e.id,t.pos[0],t.pos[1])})}}),this.jsp.makeSource(e,{filter:".automaton-state__endpoint",anchor:"Continuous",connectorStyle:{stroke:"#5c96bc",strokeWidth:2,outlineStroke:"transparent",outlineWidth:4},connectionType:"basic",maxConnections:-1}),this.jsp.makeTarget(e,{anchor:"Continuous",dropOptions:{hoverClass:"dragHover"},allowLoopback:!0})}createEndpoint(t,e,n){e=null!=e?e:Math.random()*this.container.nativeElement.offsetWidth,n=null!=n?n:Math.random()*this.container.nativeElement.offsetHeight,this.editor.addState(t,e*this.zoom,n*this.zoom)}createConnection(t){return this.editor.addTransition(t)}renderConnection(t){setTimeout(()=>{const e=this.findConnection(t);e&&e.getOverlay("transition").setLabel(t.symbols.join(","))})}focus(t){if(this.unfocus(),t){if(t instanceof HTMLElement)t.classList.remove("focused"),t.classList.add("focused"),this.context.state=t.id;else{const e=t.canvas;null==e||e.classList.remove("focused"),null==e||e.classList.add("focused"),this.context.transition=this.editor.findTransition(e=>e.fromState===t.sourceId&&e.toState===t.targetId)}this.actions=this.editorActions.filter(t=>t.condition(this.context))}}unfocus(){var t,e,n;if(this.context.state){const e=this.findEndpoint(this.context.state);null===(t=null==e?void 0:e.classList)||void 0===t||t.remove("focused")}if(this.context.transition){const t=this.findConnection(this.context.transition);null===(n=null===(e=null==t?void 0:t.canvas)||void 0===e?void 0:e.classList)||void 0===n||n.remove("focused")}this.actions=[],this.context.state=void 0,this.context.transition=void 0}onClickContainer(t){const e=t.target;e.classList.contains("automaton-state")?this.changeDetector.ignore(this,()=>this.focus(e)):e.isSameNode(this.container.nativeElement)&&this.changeDetector.ignore(this,()=>this.unfocus())}onDblClickContainer(t){const e=t.target;e instanceof HTMLElement&&(e.isSameNode(this.container.nativeElement)||e.isSameNode(this.canvas))&&this.changeDetector.ignore(this,()=>{this.createEndpoint(this.editor.stateName(),t.offsetX,t.offsetY)})}onClickConnection(t){this.changeDetector.ignore(this,()=>{this.focus(t)})}onWillCreateConnection(t){return this.changeDetector.ignore(this,()=>this.createConnection({fromState:t.connection.sourceId,toState:t.connection.targetId,symbols:["$"]}))}findEndpoint(t){return this.container.nativeElement.querySelector("#"+t)}findConnection(t){return this.jsp.getAllConnections().find(e=>e.sourceId===t.fromState&&e.targetId===t.toState)}setZoom(t,e){e=e||[.5,.5];const n=this.jsp.getContainer();n.style.overflow="visible",n.style.border="1px solid #F5F5F5";const i=["webkit","moz","ms","o"],o="scale("+t+")",s=100*e[0]+"% "+100*e[1]+"%";for(let a=0;a<i.length;a++)n.style[i[a]+"Transform"]=o,n.style[i[a]+"TransformOrigin"]=s;n.style.transform=o,n.style.transformOrigin=s,this.jsp.setZoom(t)}};return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275directiveInject"](i.Injector),i["\u0275\u0275directiveInject"](v),i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](m))},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["wc-automaton-editor"]],viewQuery:function(t,e){if(1&t&&i["\u0275\u0275viewQuery"](I,3),2&t){let t;i["\u0275\u0275queryRefresh"](t=i["\u0275\u0275loadQuery"]())&&(e.container=t.first)}},inputs:{state:"state"},features:[i["\u0275\u0275ProvidersFeature"]([v,C,E,S,j,g,b,y,x])],decls:13,vars:4,consts:[[1,"automaton-editor-container"],["container",""],[1,"automaton-editor-actions-top"],[4,"ngFor","ngForOf"],[1,"automaton-editor-canvas"],[1,"automaton-editor-actions-bottom"],["mat-icon-button","",3,"click"],[3,"state","stateChange"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div",0,1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275template"](3,T,3,1,"ng-container",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](4,"div",4),i["\u0275\u0275elementStart"](5,"div",5),i["\u0275\u0275elementStart"](6,"button",6),i["\u0275\u0275listener"]("click",function(t){return e.zoomIn(t)}),i["\u0275\u0275elementStart"](7,"mat-icon"),i["\u0275\u0275text"](8,"zoom_in"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"button",6),i["\u0275\u0275listener"]("click",function(t){return e.zoomOut(t)}),i["\u0275\u0275elementStart"](10,"mat-icon"),i["\u0275\u0275text"](11,"zoom_out"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"wc-base",7),i["\u0275\u0275listener"]("stateChange",function(t){return e.state=t}),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275styleProp"]("height",e.state.height+"px"),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",e.actions),i["\u0275\u0275advance"](9),i["\u0275\u0275property"]("state",e.state))},directives:[O.NgForOf,o.b,s.a,w.a],styles:['@charset "UTF-8";.automaton-editor-container[_ngcontent-%COMP%] {position:relative;display:flex;width:100%;height:500px;overflow:auto;background-color:rgba(27,31,35,.050980392156862744);-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state{padding:12px;position:absolute;z-index:4;opacity:.8;cursor:move;background-color:#fff;font-size:14px;border:1px solid #2e6f9a;border-radius:50%;box-shadow:2px 2px 19px #e0e0e0;transition:background-color .25s ease-in}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state.focused, .automaton-editor-container[_ngcontent-%COMP%]  .automaton-state:hover{background-color:#5c96bc;color:#fff}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state.automaton-state--initial:before{content:"\u2192";font-size:48px;position:absolute;left:-48px;top:50%;transform:translateY(-50%);color:#000}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state.automaton-state--final:after{content:" ";position:absolute;z-index:-1;top:3px;left:3px;right:3px;bottom:3px;border:3px solid #2e6f9a;border-radius:50%}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state__label{pointer-events:none}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state__endpoint{position:absolute;bottom:37%;right:-6px;width:1em;height:1em;background-color:orange;cursor:pointer;border-radius:50%;box-shadow:0 0 2px #000;transition:box-shadow .25s ease-in}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-state__endpoint:hover{box-shadow:0 0 6px #000}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-transition{opacity:.8;padding:.3em;border-radius:.5em;border:1px solid #346789;cursor:pointer;background-color:#fff;transition:background-color .25s ease-in}.automaton-editor-container[_ngcontent-%COMP%]  .automaton-transition.jtk-hover, .automaton-editor-container[_ngcontent-%COMP%]  .jtk-connector.focused+.automaton-transition, .automaton-editor-container[_ngcontent-%COMP%]  .jtk-source-hover, .automaton-editor-container[_ngcontent-%COMP%]  .jtk-target-hover{background-color:#1e8151;color:#fff}.automaton-editor-container[_ngcontent-%COMP%]  .jtk-endpoint{z-index:3}.automaton-editor-container[_ngcontent-%COMP%]  .jtk-connector.focused path{stroke:#1e8151!important;stroke-width:2}.automaton-editor-container[_ngcontent-%COMP%]  .jtk-endpoint, .automaton-editor-container[_ngcontent-%COMP%]  path{cursor:pointer}.automaton-editor-canvas[_ngcontent-%COMP%]{flex:1;position:relative;overflow:auto}.automaton-editor-actions-top[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px;z-index:100}.automaton-editor-actions-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:4px}.automaton-editor-actions-bottom[_ngcontent-%COMP%]{position:absolute;right:8px;bottom:8px;z-index:100}'],changeDetection:0}),t=Object(u.b)([Object(l.b)(k.a),Object(u.c)("design:paramtypes",[i.Injector,v,d.a,Array])],t),t})(),_=(()=>{class t{constructor(){this.customElementComponent=P}}return t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[c.a,s.b,o.c,a.b,r.b]]}),t})()}}]);