(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,32,38,41,64,65,66],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./src/web-components-toolbox/src/es/components/organisms/body/Body.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Body}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/organisms/body/Body.js",document.baseURI).href},Body=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Body,_Shadow);var _super=_createSuper(Body);function Body(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Body);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).timeout=null,_this.clickAnchorEventListener=function(event){var element=null;(element=_this.root.querySelector(event&&event.detail&&event.detail.selector.replace(/(.*#)(.*)$/,"#$2")||location.hash||null))&&(_this.dispatchEvent(new CustomEvent(_this.getAttribute("scroll-to-anchor")||"scroll-to-anchor",{bubbles:!0,cancelable:!0,composed:!0,detail:{child:element}})),element.scrollIntoView({behavior:"smooth"}),clearTimeout(_this.timeout),_this.timeout=setTimeout((function(){element.scrollIntoView({behavior:"auto"}),_this.dispatchEvent(new CustomEvent(_this.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!1,origEvent:event,this:_assertThisInitialized(_this)},bubbles:!0,cancelable:!0,composed:!0}))}),500),self.removeEventListener("hashchange",_this.clickAnchorEventListener),location.hash=location.hash.replace("_scrolled","")+"_scrolled",self.addEventListener("hashchange",_this.clickAnchorEventListener))},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Body,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;_get(_getPrototypeOf(Body.prototype),"connectedCallback",this).call(this),this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),document.body.addEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorEventListener),location.hash&&(self.addEventListener("load",(function(event){return _this2.clickAnchorEventListener({detail:{selector:location.hash.replace("_scrolled","")}})}),{once:!0}),document.body.addEventListener(this.getAttribute("wc-config-load")||"wc-config-load",(function(event){return setTimeout((function(){return _this2.clickAnchorEventListener({detail:{selector:location.hash.replace("_scrolled","")}})}),1e3)}),{once:!0})),self.addEventListener("hashchange",this.clickAnchorEventListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(Body.prototype),"disconnectedCallback",this).call(this),document.body.removeEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorEventListener),self.removeEventListener("hashchange",this.clickAnchorEventListener)}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.main}},{key:"renderCSS",value:function renderCSS(){this.css='\n      :host {\n        display: flow-root;\n        background-color: var(--background-color, transparent);\n        background-repeat: var(--background-repeat, initial) !important;\n        background-position: var(--background-position, 0);\n        grid-area: body;\n      }\n      :host > main {\n        padding: var(--main-padding, 0);\n      }\n      :host > main > *:not(style):not(script) {\n        display: var(--any-display, block);\n      }\n      :host > main > * {\n        margin: var(--any-content-spacing, var(--content-spacing, unset)) auto;  /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n        width: var(--any-content-width, var(--content-width, 55%));\n      }\n      :host(.content-max-width) > main > *:not(.ignore-max-width), :host> main > *.content-max-width {\n        max-width: var(--content-max-width, none);\n      }\n      :host(.content-max-width-two) > main > *:not(.ignore-max-width), :host > main > *.content-max-width-two {\n        max-width: var(--content-max-width-two, none);\n      }\n      :host >main > *:first-child { /* important: avoid this rule to be extended by BodyStyles Regex: "/s>smain/g" by writing: ">main" */\n        margin-top: var(--any-margin-top-first-child, unset);\n      }\n      :host > main > *.a-emotion-pictures:first-child, :host > main > a-emotion-pictures:first-child, :host > main > m-carousel[namespace=carousel-emotion-]:first-child {\n        margin-top: var(--a-emotion-pictures-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      :host > main > msrc-store-finder:first-child {\n        margin-top: var(--msrc-store-finder-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      :host > main > msrc-store-finder:last-child {\n        margin-bottom: var(--msrc-store-finder-margin-bottom-last-child, 0);\n      }\n      :host > main > a-google-maps:first-child {\n        margin-top: var(--a-google-maps-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host > main {\n          padding: var(--main-padding-mobile, var(--main-padding, 0));\n        }\n        :host > main > * {\n          margin: var(--any-content-spacing-mobile, var(--content-spacing-mobile, var(--content-spacing, unset))) auto; /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n          width: var(--any-content-width-mobile, var(--content-width-mobile, calc(100% - var(--content-spacing-mobile, var(--content-spacing)) * 2)));\n        }\n        :host(.content-max-width) > main > *:not(.ignore-max-width), :host> main > *.content-max-width {\n          max-width: var(--content-max-width-mobile, none);\n        }\n        :host(.content-max-width-two) > main > *:not(.ignore-max-width), :host > main > *.content-max-width-two {\n          max-width: var(--content-max-width-two-mobile, none);\n        }\n       \n        :host >main > *:first-child { /* important: avoid this rule to be extended by BodyStyles Regex: "/s>smain/g" by writing: ">main" */\n          margin-top: var(--any-margin-top-first-child-mobile, unset);\n        }\n        :host > main > *.a-emotion-pictures:first-child, :host > main > a-emotion-pictures:first-child, :host > main > m-carousel[namespace=carousel-emotion-]:first-child {\n          margin-top: var(--a-emotion-pictures-margin-top-first-child-mobile, calc(-1 * var(--content-spacing-mobile, unset)));\n        }\n        :host > main > msrc-store-finder:first-child {\n          margin-top: var(--msrc-store-finder-margin-top-first-child-mobile, calc(-1 * var(--content-spacing-mobile, unset)));\n        }\n        :host > main > msrc-store-finder:last-child {\n          margin-bottom: var(--msrc-store-finder-margin-bottom-last-child-mobile, 0);\n        }\n      }\n    ',this.hasAttribute("no-style-css")||this.importStyles()}},{key:"importStyles",value:function importStyles(){this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css")}])}},{key:"renderHTML",value:function renderHTML(){var _this3=this;this.main=this.root.querySelector(this.cssSelector+" > main")||document.createElement("main"),Array.from(this.root.children).forEach((function(node){if(node===_this3.main||node.getAttribute("slot")||"STYLE"===node.nodeName)return!1;var links=Array.from(node.querySelectorAll("[child-href-target-blank]"));links.length&&_this3.setLinkTarget(links),_this3.main.appendChild(node)})),this.html=this.main}},{key:"setLinkTarget",value:function setLinkTarget(nodeList){nodeList.forEach((function(node){node.querySelectorAll("a").forEach((function(href){href.setAttribute("target","_blank")}))}))}}]),Body}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_26__.a)())},"./src/web-components-toolbox/src/es/components/organisms/bodyStyle/BodyStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return BodyStyle}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var _body_Body_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./src/web-components-toolbox/src/es/components/organisms/body/Body.js"),_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var BodyStyle=function(_Intersection){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(BodyStyle,_Intersection);var _super=_createSuper(BodyStyle);function BodyStyle(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BodyStyle);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return(_this=_super.call.apply(_super,[this,Object.assign(options,{intersectionObserverInit:{}})].concat(args))).setAttribute("aria-label","Section"),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(BodyStyle,[{key:"intersectionCallback",value:function intersectionCallback(entries,observer){(this.isIntersecting=entries&&entries[0]&&entries[0].isIntersecting)&&this.intersectionShouldComponentRenderCSS()&&(this.hasAttribute("only-render-attribute-to-css")?(this.renderAttributesToCSS(),this.importStyles()):this.renderCSS(),this.intersectionObserveStop())}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!1}},{key:"intersectionShouldComponentRenderCSS",value:function intersectionShouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!1}},{key:"renderCSS",value:function renderCSS(){_get(_getPrototypeOf(BodyStyle.prototype),"renderCSS",this).call(this);var bodyCss=this.css.replace(/\s>\smain/g,"");this.css="",this._css.textContent=bodyCss,this.renderAttributesToCSS(),this.css="\n      :host {\n        display: inline-block !important;\n        width: 100% !important;\n        margin: 0 !important;\n      }\n    ","MAIN"===this.parentNode.tagName||"O-BODY-STYLE"===(this.parentNode.tagName||this.parentNode.host&&this.parentNode.host.tagName)||self.getComputedStyle(this).getPropertyValue("--content-width")&&self.getComputedStyle(this).getPropertyValue("--content-width-mobile")||(this.css="\n        :host > * {\n          width: var(--content-width, calc(100% - var(--content-spacing) * 2));\n        }\n        @media only screen and (max-width: _max-width_) {\n          :host > * {\n            width: var(--content-width-mobile, var(--content-width, calc(100% - var(--content-spacing-mobile, var(--content-spacing)) * 2)));\n          }\n        }\n      ")}},{key:"renderAttributesToCSS",value:function renderAttributesToCSS(){var attributesMobile=[],attributesBefore=[],attributesBeforeMobile=[],beforeProps="\n      position: absolute;\n      content: '';\n      pointer-events: none;\n      width: 100%;\n      height: 100%;\n      z-index: 100;\n    ",cssSyntax=function cssSyntax(attribute){var isBefore=arguments.length>2&&void 0!==arguments[2]&&arguments[2],attributeName=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?attribute.name.replace("-mobile",""):attribute.name;return attributeName=isBefore?attributeName.replace("-before",""):attributeName,/-prop$/.test(attributeName)?"".concat(attributeName.replace("-prop",""),":").concat(attribute.value,";"):/-var$/.test(attributeName)?"--".concat(attributeName.replace("-var",""),":").concat(attribute.value,";"):"".concat(attributeName,":").concat(attribute.value,";--").concat(attributeName,":").concat(attribute.value,";")};this.css="\n      :host {\n        ".concat(Array.from(this.attributes).reduce((function(acc,attribute){return!attribute||!attribute.name||!attribute.value||attribute.name.includes("aria")||attribute.name.includes("tabindex")||attribute.name.includes("class")||attribute.name.includes("style")?acc:attribute.name.includes("-before")?(attribute.name.includes("-mobile")?attributesBeforeMobile.push(attribute):attributesBefore.push(attribute),acc):attribute.name.includes("-mobile")?(attributesMobile.push(attribute),acc):"".concat(acc).concat(cssSyntax(attribute))}),""),"\n      }\n      ").concat(attributesBefore.length?"\n          :host:before {\n            ".concat(beforeProps,"\n            ").concat(attributesBefore.reduce((function(acc,attribute){return"".concat(acc).concat(cssSyntax(attribute,!1,!0))}),""),"\n          }\n        "):"","\n      ").concat(attributesBeforeMobile.length?"\n          @media only screen and (max-width: _max-width_) {\n            :host:before {\n              ".concat(beforeProps,"\n              ").concat(attributesBeforeMobile.reduce((function(acc,attribute){return"".concat(acc).concat(cssSyntax(attribute,!0,!0))}),""),"\n            }\n          }\n        "):"","\n      ").concat(attributesMobile.length?"\n          @media only screen and (max-width: _max-width_) {\n            :host {\n              ".concat(attributesMobile.reduce((function(acc,attribute){return"".concat(acc).concat(cssSyntax(attribute,!0))}),""),"\n            }\n          }\n        "):"","\n    ")}}]),BodyStyle}(Object(_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_28__.a)(_body_Body_js__WEBPACK_IMPORTED_MODULE_27__.default))},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Intersection}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _Shadow_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Intersection=function Intersection(){return function(_ChosenClass){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intersection,_ChosenClass);var _super=_createSuper(Intersection);function Intersection(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Intersection);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];(_this=_super.call.apply(_super,[this,options].concat(args))).isObserving=!1;var intersectionObserverInit=_this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(_this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(_this.intersectionCallback.bind(_assertThisInitialized(_this)),intersectionObserverInit);_this.intersectionObserveStart=function(){_this.isObserving||(intersectionObserver.observe(_assertThisInitialized(_this)),_this.isObserving=!0)},_this.intersectionObserveStop=function(){_this.isObserving&&(intersectionObserver.disconnect(),_this.isObserving=!1)}}else _this.intersectionObserveStart=function(){},_this.intersectionObserveStop=function(){},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){_this.intersectionObserveStart=function(){},_this.intersectionObserveStop=function(){},console.warn("IntersectionObserver got not started, due to missing support!")}return _this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intersection,[{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(Intersection.prototype),"connectedCallback",this).call(this),this.intersectionObserveStart()}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(Intersection.prototype),"disconnectedCallback",this).call(this),this.intersectionObserveStop()}},{key:"intersectionCallback",value:function intersectionCallback(entries,observer){}}]),Intersection}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(_Shadow_js__WEBPACK_IMPORTED_MODULE_20__.a)())}}}]);