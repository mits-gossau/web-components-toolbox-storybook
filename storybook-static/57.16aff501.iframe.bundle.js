(window.webpackJsonp=window.webpackJsonp||[]).push([[57,66,67,68],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/PictureWithPicture.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return PictureWithPicture}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/PictureWithPicture.js",document.baseURI).href},PictureWithPicture=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(PictureWithPicture,_Shadow);var _super=_createSuper(PictureWithPicture);function PictureWithPicture(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PictureWithPicture),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PictureWithPicture,[{key:"connectedCallback",value:function connectedCallback(){var _this=this;this.hidden=!0;var showPromises=[];this.shouldComponentRenderCSS()&&showPromises.push(this.renderCSS()),this.shouldComponentRenderHTML()&&this.renderHTML(),Promise.all(showPromises).then((function(){return _this.hidden=!1}))}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.wrapper}},{key:"renderCSS",value:function renderCSS(){this.css="\n      :host .wrapper {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr;\n        margin: 0 auto;\n        max-width: 100%;\n        overflow: overlay;\n        max-height: 90vh;\n      }\n      :host .wrapper > * {\n        grid-column: 1;\n        grid-row: 1;\n      }\n      :host .wrapper > div {\n        display: flex;\n        margin: 1em;\n        gap: 1em;\n        flex-direction: ".concat(this.getAttribute("icon-direction")||"row",";\n      }\n      :host([place-right]) .wrapper > div {\n        justify-content: end;\n      }\n      :host([place-bottom]) .wrapper > div {\n        align-items: end;\n      }\n      :host .wrapper > div > * {\n        height: fit-content;\n        width: ").concat(this.getAttribute("icon-width")||"10%",";\n      }\n    ");var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];return this.getAttribute("namespace"),this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}].concat(styles),!1)}},{key:"renderHTML",value:function renderHTML(){var _this2=this;this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),Array.from(this.root.children).forEach((function(node){node.getAttribute("slot")||"STYLE"===node.tagName||_this2.wrapper.appendChild(node)})),this.html=this.wrapper}}]),PictureWithPicture}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_24__.a)())}}]);