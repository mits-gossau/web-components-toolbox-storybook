(window.webpackJsonp=window.webpackJsonp||[]).push([[27,9,39,40,42,66,67,68],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./src/web-components-toolbox/src/es/components/atoms/logo/Logo.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Logo}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/logo/Logo.js",document.baseURI).href},Logo=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Logo,_Shadow);var _super=_createSuper(Logo);function Logo(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Logo);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(_this=_super.call.apply(_super,[this].concat(args))).textSelector=":not(img):not(a):not(style):not(script)",_this.setAttribute("lang",document.documentElement.getAttribute("lang")||"de");var timeout=null;return _this.resizeListener=function(event){clearTimeout(timeout),timeout=setTimeout((function(){_this.text&&(_this.css="\n          :host > ".concat(_this.textSelector,"{\n            width: var(--text-width, ").concat(_this.img.getBoundingClientRect().width,"px);\n          }\n          @media only screen and (max-width: _max-width_) {\n            :host > ").concat(_this.textSelector,"{\n              width: var(--text-width-mobile, ").concat(_this.img.getBoundingClientRect().width,"px);\n            }\n          }\n        "))}),200)},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Logo,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),self.addEventListener("resize",this.resizeListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){self.removeEventListener("resize",this.resizeListener)}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.img&&!!this.getAttribute("src")}},{key:"renderCSS",value:function renderCSS(){switch(this.css="\n      :host {\n        align-items: var(--align-items, center);\n        display: flex;\n        flex-flow: var(--flex-flow, row);\n        flex-grow: var(--flex-grow, 0);\n        justify-content: var(--justify-content, center);\n        box-sizing: border-box;\n        margin: var(--margin, 0px);\n        padding: var(--padding, 0px);\n      }\n      :host(.hide-desktop) {\n        display: none;\n      }\n      :host(.hide-mobile) {\n        display: flex;\n      }\n      :host a{\n        height: var(--a-height, auto);\n        width: var(--a-width, auto);\n      }\n      :host img{\n        display: block;\n        height: var(--height, calc(var(--height, 85px) - var(--content-spacing, 40px)));\n        max-height: var(--max-height, none);\n        object-fit: var(--object-fit, scale-down);\n        width: var(--width, auto);\n        max-width: var(--max-width, 80vw);\n        margin: var(--img-margin, 0);\n      }\n      :host > ".concat(this.textSelector,'{\n        font-family: var(--text-font-family);\n        box-sizing: var(--text-box-sizing, border-box);\n        color: var(--text-color, var(--color, pink));\n        font-size: var(--text-font-size, 1em);\n        line-height: var(--text-line-height, normal);\n        padding: var(--text-padding, 0);\n        margin: var(--text-margin, 0);\n      }\n      :host([lang="en"]) > ').concat(this.textSelector,'{\n        padding: var(--text-padding-en, var(--text-padding, 0));\n      }\n      :host([lang="fr"]) > ').concat(this.textSelector,"{\n        padding: var(--text-padding-fr, var(--text-padding, 0));\n      }\n      :host > ").concat(this.textSelector," a{\n        color: var(--text-a-color, var(--color, green));\n        text-decoration: var(--text-a-text-decoration, var(--text-decoration, none));\n        white-space: var(--text-a-white-space, var(--white-space, nowrap));\n      }\n      :host > ").concat(this.textSelector," a:hover{\n        color: var(--text-a-color-hover, var(--color-hover, var(--color, green)));\n        text-decoration: var(--text-a-text-decoration-hover, var(--text-decoration-hover, var(--text-decoration, none)));\n        font-family: var(--text-a-font-family-hover);\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host {\n          margin: var(--margin-mobile, var(--margin, 0px));\n          padding: var(--padding-mobile, var(--padding, 0px));\n        }\n        :host(.hide-desktop) {\n          display: flex;\n        }\n        :host(.hide-mobile) {\n          display: none;\n        }\n        :host img{\n          height: var(--height-mobile, 65px);\n          max-height: var(--max-height-mobile, var(--max-height, none));\n          width: var(--width-mobile, auto);\n          max-width: var(--max-width-mobile, var(--max-width, 80vw));\n          margin: var(--img-margin-mobile, var(--img-margin, 0));\n        }\n        :host > ").concat(this.textSelector,'{\n          box-sizing: var(--text-box-sizing-mobile, border-box);\n          font-size: var(--text-font-size-mobile, 1em);\n          padding: var(--text-padding-mobile, 0);\n          line-height: var(--text-line-height-mobile, normal);\n        }\n        :host([lang="en"]) > ').concat(this.textSelector,'{\n          padding: var(--text-padding-mobile-en, var(--text-padding-mobile, 0));\n        }\n        :host([lang="fr"]) > ').concat(this.textSelector,"{\n          padding: var(--text-padding-mobile-fr, var(--text-padding-mobile, 0));\n        }\n      }\n    "),this.getAttribute("namespace")){case"logo-default-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}]);case"logo-partner-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./partner-/partner-.css"),namespace:!1}])}}},{key:"renderHTML",value:function renderHTML(){var _this2=this;this.img=this.root.querySelector("img")||document.createElement("img"),this.img.setAttribute("src",this.getAttribute("src")),this.img.setAttribute("alt",this.getAttribute("alt")),this.img.setAttribute("loading",this.getAttribute("loading")||"eager");var a=null;this.hasAttribute("href")&&((a=document.createElement("a")).setAttribute("href",this.getAttribute("href")),this.hasAttribute("rel")&&a.setAttribute("rel",this.getAttribute("rel")),this.hasAttribute("target")&&a.setAttribute("target",this.getAttribute("target")),a.appendChild(this.img)),this.html=a||this.img,this.img.addEventListener("load",(function(event){_this2.resizeListener(event),_this2.setAttribute("loaded","true"),_this2.dispatchEvent(new CustomEvent(_this2.getAttribute("logo-load")||"logo-load",{detail:{origEvent:event,child:_this2,img:_this2.img},bubbles:!0,cancelable:!0,composed:!0}))})),this.img.addEventListener("error",(function(event){_this2.setAttribute("loaded","false"),_this2.dispatchEvent(new CustomEvent(_this2.getAttribute("logo-load")||"logo-load",{detail:{error:event},bubbles:!0,cancelable:!0,composed:!0}))}))}},{key:"a",get:function get(){return this.root.querySelector("a")}},{key:"text",get:function get(){return this.root.querySelector(this.textSelector)}}]),Logo}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_21__.a)())}}]);