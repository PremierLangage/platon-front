(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1H1x":function(e,t,i){"use strict";i.r(t),i.d(t,"InputBoxModule",(function(){return re}));var n=i("vOrQ"),o=i("QXAp"),s=i("Tcl6"),a=i("EmXI"),r=i("jL3B"),l=i("5XID"),c=i("pTnX"),p=i("Vgaj"),u=i("0S4P"),h=i("5GZx"),m=i("VbQ3"),d=i("Hq54"),f=i("O1jd"),v=i("ZtZA"),_=i("3xDq"),g=i("J+dc"),b=i("TLy2"),y=i("xVbo"),O=i("YtkY"),C=i("8j5Y"),w=i("BwBJ"),S=i("vE5V");const x=["panel"];function E(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div",0,1),n["\u0275\u0275projection"](2),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275property"]("id",e.id)("ngClass",e._classList)}}const A=["*"];let I=0;class j{constructor(e,t){this.source=e,this.option=t}}class P{}const F=Object(c.p)(P),R=new n.InjectionToken("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}});let D=(()=>{class e extends F{constructor(e,t,i){super(),this._changeDetectorRef=e,this._elementRef=t,this._activeOptionChanges=p.Subscription.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new n.EventEmitter,this.opened=new n.EventEmitter,this.closed=new n.EventEmitter,this.optionActivated=new n.EventEmitter,this._classList={},this.id="mat-autocomplete-"+I++,this._autoActiveFirstOption=!!i.autoActiveFirstOption}get isOpen(){return this._isOpen&&this.showPanel}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(e){this._autoActiveFirstOption=Object(l.c)(e)}set classList(e){this._classList=e&&e.length?e.split(" ").reduce((e,t)=>(e[t.trim()]=!0,e),{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}ngAfterContentInit(){this._keyManager=new r.b(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){const t=new j(this,e);this.optionSelected.emit(t)}_setVisibilityClasses(e){e[this._visibleClass]=this.showPanel,e[this._hiddenClass]=!this.showPanel}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.ChangeDetectorRef),n["\u0275\u0275directiveInject"](n.ElementRef),n["\u0275\u0275directiveInject"](R))},e.\u0275dir=n["\u0275\u0275defineDirective"]({type:e,viewQuery:function(e,t){var i;1&e&&(n["\u0275\u0275staticViewQuery"](n.TemplateRef,!0),n["\u0275\u0275viewQuery"](x,!0)),2&e&&(n["\u0275\u0275queryRefresh"](i=n["\u0275\u0275loadQuery"]())&&(t.template=i.first),n["\u0275\u0275queryRefresh"](i=n["\u0275\u0275loadQuery"]())&&(t.panel=i.first))},inputs:{displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",classList:["class","classList"],panelWidth:"panelWidth"},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[n["\u0275\u0275InheritDefinitionFeature"]]}),e})(),T=(()=>{class e extends D{constructor(){super(...arguments),this._visibleClass="mat-autocomplete-visible",this._hiddenClass="mat-autocomplete-hidden"}}return e.\u0275fac=function(t){return M(t||e)},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["mat-autocomplete"]],contentQueries:function(e,t,i){var o;1&e&&(n["\u0275\u0275contentQuery"](i,c.c,!0),n["\u0275\u0275contentQuery"](i,c.g,!0)),2&e&&(n["\u0275\u0275queryRefresh"](o=n["\u0275\u0275loadQuery"]())&&(t.optionGroups=o),n["\u0275\u0275queryRefresh"](o=n["\u0275\u0275loadQuery"]())&&(t.options=o))},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[n["\u0275\u0275ProvidersFeature"]([{provide:c.d,useExisting:e}]),n["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:A,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(e,t){1&e&&(n["\u0275\u0275projectionDef"](),n["\u0275\u0275template"](0,E,3,2,"ng-template"))},directives:[u.NgClass],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),e})();const M=n["\u0275\u0275getInheritedFactory"](T),k=new n.InjectionToken("mat-autocomplete-scroll-strategy"),L={provide:k,deps:[h.d],useFactory:function(e){return()=>e.scrollStrategies.reposition()}},V={provide:_.NG_VALUE_ACCESSOR,useExisting:Object(n.forwardRef)(()=>Q),multi:!0};let N=(()=>{class e{constructor(e,t,i,n,o,s,a,r,l,c){this._element=e,this._overlay=t,this._viewContainerRef=i,this._zone=n,this._changeDetectorRef=o,this._dir=a,this._formField=r,this._document=l,this._viewportRuler=c,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=p.Subscription.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new p.Subject,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(p.defer)(()=>this.autocomplete&&this.autocomplete.options?Object(p.merge)(...this.autocomplete.options.map(e=>e.onSelectionChange)):this._zone.onStable.pipe(Object(g.a)(1),Object(b.a)(()=>this.optionSelections))),this._scrollStrategy=s}get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(e){this._autocompleteDisabled=Object(l.c)(e)}ngAfterViewInit(){const e=this._getWindow();void 0!==e&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const e=this._getWindow();void 0!==e&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Object(p.merge)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(y.a)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object(y.a)(()=>this._overlayAttached)):Object(p.of)()).pipe(Object(O.a)(e=>e instanceof c.i?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return Object(p.merge)(Object(p.fromEvent)(this._document,"click"),Object(p.fromEvent)(this._document,"touchend")).pipe(Object(y.a)(e=>{const t=this._isInsideShadowRoot&&e.composedPath?e.composedPath()[0]:e.target,i=this._formField?this._formField._elementRef.nativeElement:null,n=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&(!i||!i.contains(t))&&(!n||!n.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)}))}writeValue(e){Promise.resolve(null).then(()=>this._setTriggerValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){const t=e.keyCode;if(t!==d.e||Object(d.o)(e)||e.preventDefault(),this.activeOption&&t===d.d&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){const i=this.autocomplete._keyManager.activeItem,n=t===d.l||t===d.b;this.panelOpen||t===d.k?this.autocomplete._keyManager.onKeydown(e):n&&this._canOpen()&&this.openPanel(),(n||this.autocomplete._keyManager.activeItem!==i)&&this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0)}}_handleInput(e){let t=e.target,i=t.value;"number"===t.type&&(i=""==i?null:parseFloat(i)),this._previousValue!==i&&(this._previousValue=i,this._onChange(i),this._canOpen()&&this._document.activeElement===e.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_floatLabel(e=!1){this._formField&&"auto"===this._formField.floatLabel&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const e=this._zone.onStable.pipe(Object(g.a)(1)),t=this.autocomplete.options.changes.pipe(Object(C.a)(()=>this._positionStrategy.reapplyLastPosition()),Object(w.a)(0));return Object(p.merge)(e,t).pipe(Object(b.a)(()=>{const e=this.panelOpen;return this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelOpen&&(this._overlayRef.updatePosition(),e!==this.panelOpen&&this.autocomplete.opened.emit()),this.panelClosingActions}),Object(g.a)(1)).subscribe(e=>this._setValueAndClose(e))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(e){const t=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(e):e,i=null!=t?t:"";this._formField?this._formField._control.value=i:this._element.nativeElement.value=i,this._previousValue=i}_setValueAndClose(e){e&&e.source&&(this._clearPreviousSelectedOption(e.source),this._setTriggerValue(e.source.value),this._onChange(e.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(e.source)),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(t=>{t!==e&&t.selected&&t.deselect()})}_attachOverlay(){null==this._isInsideShadowRoot&&(this._isInsideShadowRoot=!!Object(f.c)(this._element.nativeElement));let e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new v.h(this.autocomplete.template,this._viewContainerRef),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,e.keydownEvents().subscribe(e=>{(e.keyCode===d.e&&!Object(d.o)(e)||e.keyCode===d.l&&Object(d.o)(e,"altKey"))&&(this._resetActiveItem(),this._closeKeyEventStream.next(),e.stopPropagation(),e.preventDefault())}),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&e&&e.updateSize({width:this._getPanelWidth()})})),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new h.e({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})}_getOverlayPosition(){const e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){const t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,n=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}];let o;o="above"===this.position?n:"below"===this.position?t:[...t,...n],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)}_canOpen(){const e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this._autocompleteDisabled}_getWindow(){var e;return(null===(e=this._document)||void 0===e?void 0:e.defaultView)||window}_scrollToOption(e){const t=this.autocomplete,i=Object(c.m)(e,t.options,t.optionGroups);if(0===e&&1===i)t._setScrollTop(0);else{const i=t.options.toArray()[e];if(i){const e=i._getHostElement(),n=Object(c.n)(e.offsetTop,e.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(n)}}}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.ElementRef),n["\u0275\u0275directiveInject"](h.d),n["\u0275\u0275directiveInject"](n.ViewContainerRef),n["\u0275\u0275directiveInject"](n.NgZone),n["\u0275\u0275directiveInject"](n.ChangeDetectorRef),n["\u0275\u0275directiveInject"](k),n["\u0275\u0275directiveInject"](S.b,8),n["\u0275\u0275directiveInject"](a.a,9),n["\u0275\u0275directiveInject"](u.DOCUMENT,8),n["\u0275\u0275directiveInject"](m.h))},e.\u0275dir=n["\u0275\u0275defineDirective"]({type:e,inputs:{position:["matAutocompletePosition","position"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"],autocomplete:["matAutocomplete","autocomplete"],connectedTo:["matAutocompleteConnectedTo","connectedTo"]},features:[n["\u0275\u0275NgOnChangesFeature"]]}),e})(),Q=(()=>{class e extends N{constructor(){super(...arguments),this._aboveClass="mat-autocomplete-panel-above"}}return e.\u0275fac=function(t){return W(t||e)},e.\u0275dir=n["\u0275\u0275defineDirective"]({type:e,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(e,t){1&e&&n["\u0275\u0275listener"]("focusin",(function(){return t._handleFocus()}))("blur",(function(){return t._onTouched()}))("input",(function(e){return t._handleInput(e)}))("keydown",(function(e){return t._handleKeydown(e)})),2&e&&n["\u0275\u0275attribute"]("autocomplete",t.autocompleteAttribute)("role",t.autocompleteDisabled?null:"combobox")("aria-autocomplete",t.autocompleteDisabled?null:"list")("aria-activedescendant",t.panelOpen&&t.activeOption?t.activeOption.id:null)("aria-expanded",t.autocompleteDisabled?null:t.panelOpen.toString())("aria-owns",t.autocompleteDisabled||!t.panelOpen||null==t.autocomplete?null:t.autocomplete.id)("aria-haspopup",!t.autocompleteDisabled)},exportAs:["matAutocompleteTrigger"],features:[n["\u0275\u0275ProvidersFeature"]([V]),n["\u0275\u0275InheritDefinitionFeature"]]}),e})();const W=n["\u0275\u0275getInheritedFactory"](Q);let B=(()=>{class e{}return e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[L],imports:[[h.g,c.h,c.f,u.CommonModule],m.c,c.h,c.f]}),e})();var Y=i("D57K"),X=i("jIqt"),z=i("mWib"),H=i("hlYy"),K=i("bJsr"),q=i("hPIy"),J=i("J/uC");function G(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"mat-label"),n["\u0275\u0275text"](1),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275textInterpolate"](e.state.placeholder)}}function U(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"mat-hint"),n["\u0275\u0275text"](1),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275textInterpolate"](e.state.hint)}}function Z(e,t){if(1&e&&(n["\u0275\u0275elementContainerStart"](0),n["\u0275\u0275element"](1,"input",8),n["\u0275\u0275elementContainerEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("formControl",e.form)}}function $(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"mat-option",12),n["\u0275\u0275text"](1),n["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;n["\u0275\u0275property"]("value",e),n["\u0275\u0275advance"](1),n["\u0275\u0275textInterpolate1"](" ",e," ")}}function ee(e,t){if(1&e&&(n["\u0275\u0275elementContainerStart"](0),n["\u0275\u0275element"](1,"input",9),n["\u0275\u0275elementStart"](2,"mat-autocomplete",null,10),n["\u0275\u0275template"](4,$,2,2,"mat-option",11),n["\u0275\u0275pipe"](5,"async"),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementContainerEnd"]()),2&e){const e=n["\u0275\u0275reference"](3),t=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("formControl",t.form)("matAutocomplete",e),n["\u0275\u0275advance"](3),n["\u0275\u0275property"]("ngForOf",n["\u0275\u0275pipeBind1"](5,3,t.$autocomplete))}}function te(e,t){if(1&e&&(n["\u0275\u0275elementContainerStart"](0),n["\u0275\u0275elementStart"](1,"textarea",13),n["\u0275\u0275text"](2,"            "),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementContainerEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("formControl",e.form)("matTextareaAutosize",!0)}}function ie(e,t){if(1&e&&(n["\u0275\u0275elementContainerStart"](0),n["\u0275\u0275elementStart"](1,"mat-error"),n["\u0275\u0275text"](2),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementContainerEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](2),n["\u0275\u0275textInterpolate1"]('"',e.state.type,'" is not a valid input type')}}function ne(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div",14),n["\u0275\u0275element"](1,"img",15),n["\u0275\u0275pipe"](2,"icongr"),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("src",n["\u0275\u0275pipeBind1"](2,1,e.state.prefix),n["\u0275\u0275sanitizeUrl"])}}function oe(e,t){if(1&e&&(n["\u0275\u0275elementStart"](0,"div",16),n["\u0275\u0275element"](1,"img",17),n["\u0275\u0275pipe"](2,"icongr"),n["\u0275\u0275elementEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("src",n["\u0275\u0275pipeBind1"](2,1,e.state.suffix),n["\u0275\u0275sanitizeUrl"])}}let se=(()=>{let e=class{constructor(e){this.injector=e,this.form=new _.FormControl,this.$autocomplete=this.form.valueChanges.pipe(Object(X.a)(""),Object(O.a)(e=>this.getSuggestions(e)))}ngOnInit(){this.subscription=this.form.valueChanges.pipe(Object(z.a)(300)).subscribe(e=>{e=e||"","number"===this.state.type&&(e=Number.parseFloat((""+e).replace(",","."))||0),this.state.value!==e&&(this.state.value=e),this.updateFormState()})}ngOnDestroy(){var e;null===(e=this.subscription)||void 0===e||e.unsubscribe()}onChangeState(){this.updateFormState()}updateFormState(){null!=this.form.value&&this.form.value===this.state.value||this.form.patchValue(this.state.value),this.form.enable(),this.state.disabled&&this.form.disable()}getSuggestions(e){if(!e)return[];const t=e=>e.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return e=t(e),this.state.completion.filter(i=>t(i).includes(e))}};return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.Injector))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-input-box"]],inputs:{state:"state"},decls:11,vars:10,consts:[["floatLabel","always",3,"appearance"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","prefix","matPrefix","",4,"ngIf"],["class","suffix","matSuffix","",4,"ngIf"],[3,"state","stateChange"],["matInput","","type","text","inputmode","decimal",3,"formControl"],["matInput","","type","text",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","type","multiline",3,"formControl","matTextareaAutosize"],["matPrefix","",1,"prefix"],["alt","prefix icon",3,"src"],["matSuffix","",1,"suffix"],["alt","suffix icon",3,"src"]],template:function(e,t){1&e&&(n["\u0275\u0275elementStart"](0,"mat-form-field",0),n["\u0275\u0275template"](1,G,2,1,"mat-label",1),n["\u0275\u0275template"](2,U,2,1,"mat-hint",1),n["\u0275\u0275elementContainerStart"](3,2),n["\u0275\u0275template"](4,Z,2,1,"ng-container",3),n["\u0275\u0275template"](5,ee,6,5,"ng-container",3),n["\u0275\u0275template"](6,te,3,2,"ng-container",3),n["\u0275\u0275template"](7,ie,3,1,"ng-container",4),n["\u0275\u0275elementContainerEnd"](),n["\u0275\u0275template"](8,ne,3,3,"div",5),n["\u0275\u0275template"](9,oe,3,3,"div",6),n["\u0275\u0275elementEnd"](),n["\u0275\u0275elementStart"](10,"wc-base",7),n["\u0275\u0275listener"]("stateChange",(function(e){return t.state=e})),n["\u0275\u0275elementEnd"]()),2&e&&(n["\u0275\u0275property"]("appearance",t.state.appearance),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.state.placeholder),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.state.hint),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngSwitch",t.state.type),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngSwitchCase","number"),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngSwitchCase","text"),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngSwitchCase","textarea"),n["\u0275\u0275advance"](2),n["\u0275\u0275property"]("ngIf",t.state.prefix),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("ngIf",t.state.suffix),n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("state",t.state))},directives:[a.c,u.NgIf,u.NgSwitch,u.NgSwitchCase,u.NgSwitchDefault,q.a,a.g,a.f,s.a,_.DefaultValueAccessor,_.NgControlStatus,_.FormControlDirective,Q,T,u.NgForOf,c.g,s.c,a.b,a.h,a.i],pipes:[u.AsyncPipe,J.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:inherit}mat-form-field[_ngcontent-%COMP%]  .mat-form-field-prefix, mat-form-field[_ngcontent-%COMP%]  .mat-form-field-suffix{padding:0 4px}.prefix[_ngcontent-%COMP%], .suffix[_ngcontent-%COMP%]{width:18px;height:18px;position:relative}.prefix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .suffix[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;height:18px;position:absolute;bottom:-3px;background-color:transparent!important}"],changeDetection:0}),e=Object(Y.b)([Object(H.b)(K.a)],e),e})();var ae=i("+OD8");let re=(()=>{class e{constructor(){this.customElementComponent=se}}return e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.a,ae.d,_.FormsModule,_.ReactiveFormsModule,s.b,a.e,B]]}),e})()},QXAp:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("0S4P"),o=i("/suG"),s=i("vOrQ");let a=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.CommonModule,o.g],n.CommonModule]}),e})()},hPIy:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("vOrQ"),o=i("5HSb"),s=i("0S4P"),a=i("/suG");const r=["container"];function l(e,t){if(1&e&&(n["\u0275\u0275elementContainerStart"](0),n["\u0275\u0275element"](1,"nge-monaco-viewer",1),n["\u0275\u0275pipe"](2,"json"),n["\u0275\u0275elementContainerEnd"]()),2&e){const e=n["\u0275\u0275nextContext"]();n["\u0275\u0275advance"](1),n["\u0275\u0275property"]("code",n["\u0275\u0275pipeBind1"](2,1,e.state))}}let c=(()=>{class e{constructor(e,t){this.api=e,this.elementRef=t,this.stateChange=new n.EventEmitter}ngOnInit(){var e;const t=this.elementRef.nativeElement,i=null===(e=t.parentElement)||void 0===e?void 0:e.tagName.toLowerCase();this.definition=this.api.findBySelector(i||""),this.observer=new MutationObserver(e=>{e.forEach(this.createStateFromAttributes.bind(this))}),this.observer.observe(t.parentElement,{attributes:!0}),this.createStateFromAttributes()}ngOnDestroy(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}parse(e){return e.trim().match(/^(true|false|\d+|\[|\{)/)?JSON.parse(e):e}createStateFromAttributes(){var e,t;const i=this.elementRef.nativeElement.parentElement.attributes,n={},o=(null===(t=null===(e=this.definition)||void 0===e?void 0:e.schema)||void 0===t?void 0:t.properties)||{};let s=!1;for(const a of Array.from(i))a.name in o&&(s=!0,n[a.name]=this.parse(a.value));s&&this.stateChange.emit(n)}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](o.a),n["\u0275\u0275directiveInject"](n.ElementRef))},e.\u0275cmp=n["\u0275\u0275defineComponent"]({type:e,selectors:[["wc-base"]],viewQuery:function(e,t){var i;1&e&&n["\u0275\u0275viewQuery"](r,!0),2&e&&n["\u0275\u0275queryRefresh"](i=n["\u0275\u0275loadQuery"]())&&(t.container=i.first)},inputs:{state:"state"},outputs:{stateChange:"stateChange"},decls:1,vars:1,consts:[[4,"ngIf"],["language","json",3,"code"]],template:function(e,t){1&e&&n["\u0275\u0275template"](0,l,3,3,"ng-container",0),2&e&&n["\u0275\u0275property"]("ngIf",null==t.state?null:t.state.debug)},directives:[s.NgIf,a.h],pipes:[s.JsonPipe],styles:["[_nghost-%COMP%]{display:block;margin:.5rem 0}div[_ngcontent-%COMP%]{display:none}"]}),e})()}}]);