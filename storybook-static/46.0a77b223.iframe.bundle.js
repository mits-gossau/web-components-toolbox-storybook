(window.webpackJsonp=window.webpackJsonp||[]).push([[46,64,65,66],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./src/web-components-toolbox/src/es/components/atoms/iconAmp/IconAmp.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return IconAmp}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var IconAmp=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(IconAmp,_Shadow);var _super=_createSuper(IconAmp);function IconAmp(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IconAmp);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).mouseoverListener=function(event){_this.hasAttribute("move")&&!_this.hasAttribute("hover-set-by-outside")&&_this.setAttribute("hover","true"),_this.classList.add("hover")},_this.mouseoutListener=function(event){_this.hasAttribute("move")&&!_this.hasAttribute("hover-set-by-outside")&&_this.setAttribute("hover",""),_this.classList.remove("hover")},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(IconAmp,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.mouseEventElement.addEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.addEventListener("mouseout",this.mouseoutListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.mouseEventElement.removeEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.removeEventListener("mouseout",this.mouseoutListener),this.parentNodeShadowRootHost=null}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.svg}},{key:"renderCSS",value:function renderCSS(){this.css="\n      :host {\n        vertical-align: middle;\n      }\n    ",this.parentElement&&1===this.parentElement.children.length&&this.parentElement.setAttribute("style","font-family: inherit")}},{key:"renderHTML",value:function renderHTML(){this.html='\n    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.7108 8.532C13.8259 9.24574 13.9209 9.80898 13.951 9.96861C14.0435 10.4932 14.0047 11.0318 13.838 11.5386C13.6656 12.0259 13.2695 12.7317 11.8374 13.255L11.0412 13.5487L10.8155 12.7606C10.6207 12.0909 10.438 11.0985 11.0844 10.2204C11.4195 9.79003 11.8521 9.44138 12.3483 9.20173C12.5041 9.12945 13.0357 8.86698 13.7106 8.532M6.52101 10.0979L7.02787 9.56453C9.5743 6.89655 7.77276 4.36744 7.38701 3.88652C7.17979 3.62793 5.00884 0.72256 4.98831 0.69246L4.84479 0.5L4.70127 0.69246C4.67794 0.72256 2.50979 3.62793 2.30256 3.88652C1.91892 4.36379 0.139781 6.85801 2.60593 9.50661L2.42531 9.65301C0.828896 10.9884 0.0123681 12.4058 0 13.8655C0.0137404 14.5042 0.16076 15.1334 0.432052 15.7147C0.703345 16.2959 1.0932 16.8169 1.57774 17.2458C2.52883 18.047 3.74054 18.4916 4.99624 18.5C6.42837 18.5 7.83599 17.9126 9.18202 16.7517L10.3332 18.0209L12.2764 16.4247L6.52101 10.0979ZM4.10177 11.4914L4.27609 11.3512L7.50976 14.9085C6.63163 15.6804 5.78616 16.0694 4.99204 16.0694C4.3726 16.0579 3.77561 15.8408 3.29924 15.4537C3.29108 15.4478 2.54619 14.7801 2.55436 13.8899C2.56719 12.9739 3.40426 12.0797 4.102 11.4923L4.10177 11.4914ZM4.84455 8.28117L4.55776 7.97743C4.22545 7.62853 3.79653 7.08513 3.90108 6.38553C3.96565 6.0322 4.1139 5.69852 4.33396 5.41114C4.39347 5.33703 4.56172 5.1163 4.84479 4.74141C5.12482 5.11037 5.29424 5.3368 5.35561 5.41114C5.57799 5.69643 5.7265 6.03001 5.78849 6.38348C5.83983 6.71823 5.82537 7.25 5.12785 7.97971L4.84455 8.28117Z" fill="#7FC56E" />\n    </svg>\n    '}},{key:"svg",get:function get(){return this.root.querySelector("svg")}},{key:"parentNodeShadowRootHost",get:function get(){if(this._parentNodeShadowRootHost)return this._parentNodeShadowRootHost;return this._parentNodeShadowRootHost=function searchShadowRoot(node){return node.root||node.shadowRoot?node:node.parentNode?searchShadowRoot(node.parentNode):node.host?searchShadowRoot(node.host):node}(this.parentNode)},set:function set(node){this._parentNodeShadowRootHost=node}},{key:"mouseEventElement",get:function get(){return this[this.hasAttribute("hover-on-parent-element")?"parentNode":this.hasAttribute("hover-on-parent-shadow-root-host")?"parentNodeShadowRootHost":"svg"]}}]),IconAmp}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_17__.a)())}}]);