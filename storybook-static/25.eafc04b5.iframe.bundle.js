(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/es.array.every.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$every=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").every;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js")("every")},{every:function every(callbackfn){return $every(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"./src/web-components-toolbox/src/es/components/atoms/video/Video.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Video}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.every.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/video/Video.js",document.baseURI).href},Video=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Video,_Shadow);var _super=_createSuper(Video);function Video(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Video);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).sources=_this.getAttribute("sources")&&Video.parseAttribute(_this.getAttribute("sources"))||null,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Video,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML()}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.video}},{key:"renderCSS",value:function renderCSS(){if(this.css="\n    :host {\n      width: var(--width, 100%);\n      height: var(--height, auto);\n    }\n    :host video, :host iframe {\n      ".concat(this.getAttribute("height")?"height: ".concat(this.getAttribute("height")):"","\n      ").concat(this.getAttribute("width")?"width: ".concat(this.getAttribute("width")):"","\n      aspect-ratio: ").concat(this.hasAttribute("aspect-ratio")?"1/".concat(this.getAttribute("aspect-ratio")):"var(--aspect-ratio, auto)",";\n      display: var(--display, block);\n      filter: var(--filter, none);\n      margin: var(--margin, 0 auto);\n      max-height: var(--max-height, 75vh);\n      max-width: var(--max-width, 100%);\n      min-height: var(--min-height);\n      min-width: var(--min-width);\n      outline: var(--outline, none);\n      transform: var(--transform, none);\n      transition: var(--transition, none);\n      width: var(--width, 100%);\n      height: var(--height, auto);\n    }\n    :host video:hover, :host iframe:hover {\n      filter: var(--filter-hover, var(--filter, none));\n    }\n    :host video {\n      object-fit: var(--video-object-fit, cover);\n      clip-path: var(--clip-path, none);\n    }\n\n    @media only screen and (max-width: _max-width_) {\n      :host video, :host iframe {\n        filter: var(--filter-mobile, none);\n        transform: var(--transform-mobile, none);\n        transition: var(--transition-mobile, none);\n        width: var(--width-mobile, 100%);\n      }\n    }\n    "),"video-crop-"===this.getAttribute("namespace"))return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./crop-/crop-.css"),namespace:!1}])}},{key:"renderHTML",value:function renderHTML(){var _this2=this;this.video=this.root.querySelector("div")||document.createElement("div"),this.video.innerHTML=Array.from(this.attributes).reduce((function(acc,attribute){return attribute.name&&"sources"!==attribute.name&&"namespace"!==attribute.name&&!attribute.name.includes("hidden")?"".concat(acc," ").concat(attribute.name,'="').concat(attribute.value||"true",'"').concat(_this2.hasAttribute("playsinline")||"autoplay"!==attribute.name||"false"===attribute.value?"":" playsinline"):acc}),"<video")+"></video",this.video=this.video.children[0],Array.from(this.root.children).forEach((function(node){"SOURCE"===node.nodeName&&_this2.video.appendChild(node)})),(this.sources&&this.sources.every((function(i){return""!==i.src&&""!==i.type&&(_this2.video.innerHTML+='<source src="'.concat(i.src,'" type="').concat(i.type,'">'))}))||this.video.querySelector("source"))&&(this.html=this.video),this.hasAttribute("video-load")?(this.video.addEventListener(this.hasAttribute("poster")?"loadedmetadata":"loadeddata",(function(event){_this2.setAttribute("loaded","true"),_this2.dispatchEvent(new CustomEvent(_this2.getAttribute("video-load")||"video-load",{detail:{origEvent:event,child:_this2,video:_this2.video,picture:_this2.picture},bubbles:!0,cancelable:!0,composed:!0}))})),this.video.addEventListener("error",(function(event){_this2.setAttribute("loaded","false"),_this2.dispatchEvent(new CustomEvent(_this2.getAttribute("video-load")||"video-load",{detail:{error:event},bubbles:!0,cancelable:!0,composed:!0}))})),this.video.setAttribute("loading","eager")):this.video.setAttribute("loading",this.getAttribute("loading")||"lazy")}}]),Video}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_28__.a)())}}]);