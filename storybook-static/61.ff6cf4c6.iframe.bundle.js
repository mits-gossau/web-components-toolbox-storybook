(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"./src/web-components-toolbox/src/es/components/atoms/menuIcon/MenuIcon.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return MenuIcon}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var MenuIcon=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(MenuIcon,_Shadow);var _super=_createSuper(MenuIcon);function MenuIcon(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MenuIcon);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).setAttribute("id","hamburger"),_this.setAttribute("aria-label","show navigation menu"),_this.setAttribute("aria-expanded","false"),"desktop"===_this.getMedia()&&_this.setAttribute("aria-hidden","true"),_this.openClass=_this.getAttribute("openClass")?_this.getAttribute("openClass"):"open",_this.barClass=_this.getAttribute("barClass")?_this.getAttribute("barClass"):"bar",_this.clickListener=function(event){return _this.toggleAnimationClass()},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MenuIcon,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.hasAttribute("no-click")||this.addEventListener("click",this.clickListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.hasAttribute("no-click")||this.removeEventListener("click",this.clickListener)}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.root.querySelector("div")}},{key:"renderCSS",value:function renderCSS(){this.css="\n      :host {\n        display: inline-block;\n        cursor: pointer;\n        transition: var(--transition, 0.2s);\n        padding: var(--padding, 0 calc(var(--width, 35px) / 4)) !important;\n        margin: var(--margin, 0);\n        transition: var(--transition, 0.2s);\n        font-size: 14px;\n      }\n      :host(.".concat(this.openClass,") {\n        padding: var(--padding-open, 0 calc(var(--width, 35px) / 4)) !important;\n      }\n      .").concat(this.barClass,"1, .").concat(this.barClass,"2, .").concat(this.barClass,"3 {\n        width: var(--width, 35px);\n        height: var(--height, 5px);\n        background-color: var(--background-color, white);\n        margin: 0;\n        transition: var(--transition, all 0.2s ease);\n        border-radius: var(--border-radius, 0);\n      }\n      .").concat(this.barClass,"2 {\n        margin: var(--spacing, var(--height, 5px)) 0;\n        transition: var(--transition, 0.2s);\n      }\n      /* Rotate first ").concat(this.barClass," */\n      :host(.").concat(this.openClass,") .").concat(this.barClass,"1, :host(.").concat(this.openClass,") .").concat(this.barClass,"2 {\n        transform: var(--one-transform, rotate(-45deg) translateY(calc(var(--height, 5px) * 5.5 / 2)));\n      }\n      /* Fade out the second ").concat(this.barClass," */\n      :host(.").concat(this.openClass,") .").concat(this.barClass,"2 {\n        opacity: 0;\n      }\n      /* Rotate last ").concat(this.barClass," */\n      :host(.").concat(this.openClass,") .").concat(this.barClass,"3 {\n        transform: var(--two-transform, rotate(45deg) translateY(calc(var(--height, 5px) * -5.5 / 2)));\n      }\n    ")}},{key:"renderHTML",value:function renderHTML(){this.html='\n      <div class="'.concat(this.barClass,'1"></div>\n      <div class="').concat(this.barClass,'2"></div>\n      <div class="').concat(this.barClass,'3"></div>\n    ')}},{key:"toggleAnimationClass",value:function toggleAnimationClass(){var command=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toggle";this.classList[command](this.openClass),this.setAttribute("aria-expanded",this.classList.contains(this.openClass)?"true":"false")}},{key:"getMedia",value:function getMedia(){return self.matchMedia("(min-width: calc(".concat(this.mobileBreakpoint," + 1px))")).matches?"desktop":"mobile"}}]),MenuIcon}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_17__.a)())}}]);