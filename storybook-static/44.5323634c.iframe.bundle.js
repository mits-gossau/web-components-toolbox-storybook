(window.webpackJsonp=window.webpackJsonp||[]).push([[44,62,63,64],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./src/web-components-toolbox/src/es/components/atoms/hotspot/Hotspot.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Hotspot}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/hotspot/Hotspot.js",document.baseURI).href},Hotspot=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Hotspot,_Shadow);var _super=_createSuper(Hotspot);function Hotspot(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Hotspot);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return(_this=_super.call.apply(_super,[this,Object.assign(options,{importMetaUrl:importMeta.url})].concat(args))).hasRendered=!1,_this.buttonClickListener=function(e){_this.classList.contains("active")?(_this.classList.remove("active"),document.body.removeEventListener("click",_this.clickListener)):(_this.classList.add("active"),document.body.addEventListener("click",_this.clickListener))},_this.clickListener=function(e){e.composedPath()[0]!==_this.buttonOpen&&(_this.classList.remove("active"),document.body.removeEventListener("click",_this.clickListener))},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Hotspot,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.buttonOpen.addEventListener("click",this.buttonClickListener),this.buttonClose.addEventListener("click",this.buttonClickListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.buttonOpen.removeEventListener("click",this.buttonClickListener),this.buttonClose.removeEventListener("click",this.buttonClickListener)}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.hasRendered}},{key:"renderCSS",value:function renderCSS(){this.css="\n      :host{\n        ".concat(null!=this.getAttribute("top")?"\n        position: absolute; \n          top: ".concat(this.getAttribute("top"),"%;         \n          left: ").concat(this.getAttribute("left"),"%;\n        "):"position: relative;","\n      }\n\n      :host .btn-close{\n        background-color: transparent;\n        background-image: url(_import-meta-url_./icons/close-orange-large.svg);\n        background-repeat: no-repeat;\n        background-size: contain;\n        border-radius: 50%;\n        border: 0;\n        display:block;\n        height: 1rem;\n        padding: 0;\n        position: absolute;\n        right: 1.25rem;\n        top: 1.25rem;\n        width: 1rem;\n      }\n\n      :host .btn-open {\n        background-color: transparent;\n        border: 0;\n        padding: 0;\n      }\n\n      :host .btn-open:after {\n        border-radius: 50%;\n        cursor: pointer;\n        position: absolute;\n      }\n\n      :host .btn-open:after{\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        box-shadow: 0 0 0 0 transparent;\n        content: '';\n        transition: transform .2s ease-out,\n          box-shadow .2s ease-out,\n          background-color .2s ease-out;\n      }\n\n      :host .sr-only {\n        border: 0;\n        clip: rect(0,0,0,0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n      }\n\n      :host .content{\n        background-color: var(--hotspot-content-background-color, #fff);\n        outline:0;\n        z-index: 100;\n      }\n\n      @media screen and (min-width: _max-width_){\n        :host .content{\n          left: 50%;\n          padding: 1.25rem;\n          position: absolute;\n          top: 50%;\n          transform: scale(0) translate(-50%,-50%);\n          transition: transform 250ms cubic-bezier(.755,.05,.855,.06);\n          width: 22rem;\n        }\n        :host(.active) .content{\n          transition: transform .4s 250ms cubic-bezier(.755,.05,.855,.06);\n          visibility: visible;\n        }\n        :host .content:after{\n          border-width: 0.75rem;\n          border: solid #fff;\n          box-shadow: 5px 5px 15px -6px transparent;\n          content: ' ';\n          height: 0;\n          margin-left: -0.75rem;\n          pointer-events: none;\n          position: absolute;\n          transition: box-shadow .1s cubic-bezier(.755,.05,.855,.06),\n            transform .1s cubic-bezier(.755,.05,.855,.06);\n          width: 0;\n          z-index: -1;\n        }\n        :host(.active) .content > *{\n          opacity: 1;\n          transition: opacity 250ms .4s ease-out;\n        }\n        :host .content > *{\n          opacity: 0;\n          transition: opacity 75ms ease-in;\n        }\n      }\n\n      @media screen and (max-width: _max-width_){\n        :host .content{\n          animation: fadeOutBottom 1s ease;\n          backface-visibility: hidden;\n          border-radius: 10px 10px 0 0;\n          bottom: 0;\n          box-shadow: 0 0 0.625rem 0 rgb(83 83 83 / 20%);\n          left: 0;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          padding: 0 1.25rem 1.25rem;\n          position: fixed;\n          right: 0;\n          top: auto;\n          transition: height .3s, animation .3s ease-in-out, visibility 1s ease;\n          visibility: hidden;\n          white-space: normal;\n        }\n        @keyframes fadeOutBottom{\n          0% {\n            transform: translateY(0);\n          }\n          100% {\n            transform: translateY(100%);\n          }\n        }\n        :host(.active) .content{\n          animation: fadeInBottom 1s ease;\n          visibility: visible;\n        }\n        @keyframes fadeInBottom{\n          0% {\n            transform: translateY(100%);\n          }\n          100% {\n            transform: translateY(0);\n          }\n        }\n        :host .content:before{\n          background-color: var(--hotspot-button-background-color, var(--color-secondary, #ff6600));\n          border-radius: 4px;\n          content: '';\n          height: 4px;\n          left: 50%;\n          position: absolute;\n          top: 0.625rem;\n          transform: translateX(-50%);\n          width: 2.5rem;\n        }\n        :host .content-title{\n          font-size: 1.8rem;\n          margin-bottom: 0.75rem;\n          min-height: 2.5rem;\n          padding: 10px 0 0.75rem;\n          position: relative;\n        }\n        :host .content-title:after{\n          background-color: #f3f2f0;\n          bottom: 0;\n          content: '';\n          height: 2px;\n          left: -1rem;\n          position: absolute;\n          width: calc(100% + 36px);\n        }\n        :host .btn-open {\n          box-shadow: none;\n        }        \n      }\n    ");var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("place")){case"left":styles.push({path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./place/left.css"),namespaceFallback:!0});break;case"right":styles.push({path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./place/right.css"),namespaceFallback:!0});break;case"top":styles.push({path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./place/top.css"),namespaceFallback:!0});break;default:styles.push({path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./place/bottom.css"),namespaceFallback:!0})}return"hotspot-helper-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./helper-/helper-.css"),namespace:!1}].concat(styles),!1):this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}].concat(styles),!1)}},{key:"renderHTML",value:function renderHTML(){var _this2=this;this.hasRendered=!0,this.buttonOpen.classList.add("btn-open"),this.buttonClose.classList.add("btn-close"),Array.from(this.span).forEach((function(node){_this2.buttonOpen.appendChild(node),node.classList.contains("sr-close")&&_this2.buttonClose.appendChild(node.cloneNode())})),null!=this.content.querySelector("h3")&&(this.divTitle.classList.add("content-title"),this.divTitle.appendChild(this.content.querySelector("h3")),this.content.prepend(this.divTitle)),this.content.appendChild(this.buttonClose),this.html=this.buttonOpen}},{key:"content",get:function get(){return this.root.querySelector(".content")}},{key:"divTitle",get:function get(){return this._divTitle||(this._divTitle=document.createElement("div"))}},{key:"buttonOpen",get:function get(){return this._buttonOpen||(this._buttonOpen=document.createElement("button"))}},{key:"buttonClose",get:function get(){return this._buttonClose||(this._buttonClose=document.createElement("button"))}},{key:"span",get:function get(){return this.root.querySelectorAll("span.sr-only")}}]),Hotspot}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_24__.a)())}}]);