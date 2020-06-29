function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "../../libs/webcomponents/src/lib/text-input/text-input.component.ts":
  /*!************************************************************************************************************!*\
    !*** /Users/mamadou/Desktop/PL/platon-front/libs/webcomponents/src/lib/text-input/text-input.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: TextInputComponent */

  /***/
  function libsWebcomponentsSrcLibTextInputTextInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
      return TextInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "@angular/core");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _web_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../web-components */
    "../../libs/webcomponents/src/lib/web-components.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "@angular/common");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_6__);

    function TextInputComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.state), "\n");
      }
    }

    var TextInputComponent = /*#__PURE__*/function () {
      function TextInputComponent(changeDetector) {
        _classCallCheck(this, TextInputComponent);

        this.changeDetector = changeDetector;
      }

      _createClass(TextInputComponent, [{
        key: "onAfterDeserialize",
        value: function onAfterDeserialize() {
          this.changeDetector.detectChanges();
        }
      }]);

      return TextInputComponent;
    }();

    TextInputComponent.ɵfac = function TextInputComponent_Factory(t) {
      return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    TextInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TextInputComponent,
      selectors: [["wc-text-input"]],
      inputs: {
        state: "state"
      },
      decls: 5,
      vars: 2,
      consts: [["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"]],
      template: function TextInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextInputComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.state.value = $event;
          })("ngModelChange", function TextInputComponent_Template_input_ngModelChange_3_listener() {
            return ctx.onAfterDeserialize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TextInputComponent_ng_container_4_Template, 3, 3, "ng-container", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.state.debug);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
      styles: [""],
      changeDetection: 0
    });
    TextInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_web_components__WEBPACK_IMPORTED_MODULE_2__["WebComponent"])({
      name: 'TextInput',
      icon: 'input.svg',
      selector: 'wc-input',
      description: 'Inputs provides a way for users to enter a data.',
      properties: {
        value: {
          name: 'value',
          'type': 'string',
          "default": '',
          description: ''
        }
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], TextInputComponent);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'wc-text-input',
          templateUrl: 'text-input.component.html',
          styleUrls: ['text-input.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/webcomponents/src/lib/text-input/text-input.module.ts":
  /*!*********************************************************************************************************!*\
    !*** /Users/mamadou/Desktop/PL/platon-front/libs/webcomponents/src/lib/text-input/text-input.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: TextInputModule */

  /***/
  function libsWebcomponentsSrcLibTextInputTextInputModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextInputModule", function () {
      return TextInputModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "@angular/core");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "@angular/common");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _text_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./text-input.component */
    "../../libs/webcomponents/src/lib/text-input/text-input.component.ts"); // ANGULAR
    // LIBS
    // MODULE


    var TextInputModule = function TextInputModule() {
      _classCallCheck(this, TextInputModule);

      this.customElementComponent = _text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"];
    };

    TextInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TextInputModule
    });
    TextInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TextInputModule_Factory(t) {
        return new (t || TextInputModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TextInputModule, {
        declarations: [_text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]],
        exports: [_text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]],
          exports: [_text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/webcomponents/src/lib/web-components.ts":
  /*!*******************************************************************************************!*\
    !*** /Users/mamadou/Desktop/PL/platon-front/libs/webcomponents/src/lib/web-components.ts ***!
    \*******************************************************************************************/

  /*! exports provided: WebComponent, stateGetter, stateSetter */

  /***/
  function libsWebcomponentsSrcLibWebComponentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebComponent", function () {
      return WebComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stateGetter", function () {
      return stateGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stateSetter", function () {
      return stateSetter;
    });
    /**
     * Decorator that marks a class as a web component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
     * @param definition metadata informations about the component.
     */


    function WebComponent(definition) {
      return function (target) {
        injectDefaultProperties(definition);
        var prototype = target.prototype; // DYNAMICALLY DEFINE BACKED FIELD FOR `state` property.

        Object.defineProperty(prototype, '__state__', {
          value: {
            cid: '',
            debug: false,
            selector: definition.selector
          },
          writable: true
        }); // DYNAMICALLY DEFINE GETTER AND SETTER FOR `state` PROPERTY

        Object.defineProperty(prototype, 'state', {
          get: function get() {
            return stateGetter(this, definition);
          },
          set: function set(newState) {
            stateSetter(this, definition, newState);
          }
        });
        defineWebComponentInDocument(definition);
        return target;
      };
    }

    function stateGetter(instance, definition) {
      var state = instance.__state__;
      Object.keys(definition.properties).forEach(function (propertyName) {
        var property = definition.properties[propertyName];
        state[propertyName] = instance.__state__[propertyName];

        if (state[propertyName] == null && property["default"] != null) {
          if (typeof property["default"] === 'function') {
            state[propertyName] = property["default"]();
          } else {
            state[propertyName] = property["default"];
          }
        }
      });
      var lifecyles = instance;

      if (lifecyles.onAfterSerialize) {
        lifecyles.onAfterSerialize(state);
      }

      return state;
    }

    function stateSetter(instance, definition, newState) {
      if (!newState) {
        return;
      } // CONVERT STRING TO OBJECT IF NEEDED


      if (typeof newState === 'string') {
        newState = JSON.parse(newState);
      }

      var currentState = instance.__state__ || {};
      Object.keys(definition.properties).forEach(function (propertyName) {
        var _a;

        var property = definition.properties[propertyName];
        currentState[propertyName] = (_a = newState[propertyName]) !== null && _a !== void 0 ? _a : currentState[propertyName];

        if (currentState[propertyName] == null && property["default"] != null) {
          if (typeof property["default"] === 'function') {
            currentState[propertyName] = property["default"]();
          } else {
            currentState[propertyName] = property["default"];
          }
        }
      });
      instance.__state__ = currentState;
      var lifecyles = instance;

      if (lifecyles.onAfterDeserialize) {
        lifecyles.onAfterDeserialize();
      }
    }

    function injectDefaultProperties(definition) {
      definition.properties = Object.assign(Object.assign({}, definition.properties), {
        cid: {
          name: 'cid',
          "default": '',
          type: 'string',
          description: 'Unique identifier of the component'
        },
        debug: {
          name: 'debug',
          "default": false,
          type: 'boolean',
          description: 'Prints the current properties of the component'
        },
        selector: {
          name: 'selector',
          "default": '',
          type: 'string',
          description: 'Selector of the component.'
        }
      });
    }
    /**
     * Store the given web component definition inside the property `document.platon.components` of the browserr document.
     * @param definition the web component metadata informations.
     */


    function defineWebComponentInDocument(definition) {
      var platon = document.platon || {};
      platon.components = platon.components || new Map();
      platon.components.set(definition.selector, definition);
      document.platon = platon;
    }
    /***/

  }
}]);