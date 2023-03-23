(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/web-components-toolbox/src/es/components/atoms/arrow/Arrow.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Arrow}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Arrow=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Arrow,_Shadow);var _super=_createSuper(Arrow);function Arrow(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Arrow);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).mouseoverListener=function(event){_this.hasAttribute("move")&&!_this.hasAttribute("hover-set-by-outside")&&_this.setAttribute("hover","true"),_this.classList.add("hover")},_this.mouseoutListener=function(event){_this.hasAttribute("move")&&!_this.hasAttribute("hover-set-by-outside")&&_this.setAttribute("hover",""),_this.classList.remove("hover")},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Arrow,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.mouseEventElement.addEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.addEventListener("mouseout",this.mouseoutListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.mouseEventElement.removeEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.removeEventListener("mouseout",this.mouseoutListener),this.parentNodeShadowRootHost=null}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){var _this2=this;if("hover"===name){this.style.textContent="\n        :host > svg{\n          animation: move ".concat(300,"ms ease-out ").concat(newValue?"":"reverse",";\n        }\n      "),clearTimeout(this.timeout),this.timeout=setTimeout((function(){return _this2.style.textContent=""}),400)}}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.svg}},{key:"renderCSS",value:function renderCSS(){switch(this.css="\n      :host {\n        cursor: pointer;\n        display: inline-block;\n        overflow: hidden;\n        margin-bottom: 0.225em;\n        height: var(--svg-size, 1.5em);\n        width: var(--svg-size, 1.5em);\n        vertical-align: middle;\n      }\n      :host > svg {\n        align-items: center;\n        color: var(--color, #777);\n        height: var(--svg-size, 1.5em);\n        justify-content: center;\n        width: var(--svg-size, 1.5em);\n      }\n      :host > svg path {\n        stroke: var(--path-color, var(--color, #777));\n        transition: var(--path-transition, all 0.3s ease-out);\n      }\n      :host(:hover) > svg path, :host(.hover) > svg path{\n        stroke: var(--path-color-hover, var(--color, #777));\n      }\n      :host([direction=up]) > svg {\n        transform: rotate(270deg);\n      }\n      :host([direction=right]) > svg {\n        transform: rotate(0deg);\n      }\n      :host([direction=down]) > svg {\n        transform: rotate(90deg);\n      }\n      :host([direction=left]) > svg {\n        transform: rotate(180deg);\n      }\n    ",this.getAttribute("direction")){case"up":this.css="\n          @keyframes move {\n            0% {transform: rotate(270deg) translateY(0);}\n            48% {transform: rotate(270deg) translateY(-0.8em); opacity: 1;}\n            49% {transform: rotate(270deg) translateY(-0.8em); opacity: 0;}\n            50% {transform: rotate(270deg) translateY(0.8em); opacity: 0;}\n            51% {transform: rotate(270deg) translateY(0.8em); opacity: 1;}\n            100% {transform: rotate(270deg) translateY(0);}\n          }\n        ";break;case"down":this.css="\n          @keyframes move {\n            0% {transform: rotate(90deg) translateY(0);}\n            48% {transform: rotate(90deg) translateY(-0.8em); opacity: 1;}\n            49% {transform: rotate(90deg) translateY(-0.8em); opacity: 0;}\n            50% {transform: rotate(90deg) translateY(0.8em); opacity: 0;}\n            51% {transform: rotate(90deg) translateY(0.8em); opacity: 1;}\n            100% {transform: rotate(90deg) translateY(0);}\n          }\n        ";break;case"left":this.css="\n          @keyframes move {\n            0% {transform: rotate(180deg) translateY(0);}\n            48% {transform: rotate(180deg) translateY(-0.8em); opacity: 1;}\n            49% {transform: rotate(180deg) translateY(-0.8em); opacity: 0;}\n            50% {transform: rotate(180deg) translateY(0.8em); opacity: 0;}\n            51% {transform: rotate(180deg) translateY(0.8em); opacity: 1;}\n            100% {transform: rotate(180deg) translateY(0);}\n          }\n        ";break;default:this.css="\n          @keyframes move {\n            0% {transform: translateY(0);}\n            48% {transform: translateY(-0.8em); opacity: 1;}\n            49% {transform: translateY(-0.8em); opacity: 0;}\n            50% {transform: translateY(0.8em); opacity: 0;}\n            51% {transform: translateY(0.8em); opacity: 1;}\n            100% {transform: translateY(0);}\n          }\n        "}}},{key:"renderHTML",value:function renderHTML(){this.html='\n      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    ',this.html=this.style}},{key:"svg",get:function get(){return this.root.querySelector("svg")}},{key:"style",get:function get(){return this._style||(this._style=((style=document.createElement("style")).setAttribute("protected","true"),style));var style}},{key:"parentNodeShadowRootHost",get:function get(){if(this._parentNodeShadowRootHost)return this._parentNodeShadowRootHost;return this._parentNodeShadowRootHost=function searchShadowRoot(node){return node.root||node.shadowRoot?node:node.parentNode?searchShadowRoot(node.parentNode):node.host?searchShadowRoot(node.host):node}(this.parentNode)},set:function set(node){this._parentNodeShadowRootHost=node}},{key:"mouseEventElement",get:function get(){return this[this.hasAttribute("hover-on-parent-element")?"parentNode":this.hasAttribute("hover-on-parent-shadow-root-host")?"parentNodeShadowRootHost":"svg"]}}],[{key:"observedAttributes",get:function get(){return["hover"]}}]),Arrow}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_18__.a)())}}]);