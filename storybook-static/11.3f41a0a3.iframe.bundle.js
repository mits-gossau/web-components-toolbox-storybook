(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/web-components-toolbox/src/es/components/molecules/teaser/Teaser.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Teaser}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var _prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/teaser/Teaser.js",document.baseURI).href},Teaser=function(_Intersection){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Teaser,_Intersection);var _super=_createSuper(Teaser);function Teaser(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Teaser);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return(_this=_super.call.apply(_super,[this,Object.assign(options,{intersectionObserverInit:{rootMargin:"0px 0px 0px 0px"}})].concat(args))).setAttribute("role","figure"),_this.clickListener=function(event){_this.hasAttribute("href")&&self.open(_this.getAttribute("href"),_this.getAttribute("target")||"_self",_this.hasAttribute("rel")?"rel=".concat(_this.getAttribute("rel")):"")},_this.hasAttribute("href")&&(_this.setAttribute("data-href",_this.getAttribute("href")),_this.setAttribute("role","link")),_this.mouseoverListener=function(event){_this.aArrow&&_this.aArrow.setAttribute("hover","true")},_this.mouseoutListener=function(event){_this.aArrow&&_this.aArrow.setAttribute("hover","")},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Teaser,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;_get(_getPrototypeOf(Teaser.prototype),"connectedCallback",this).call(this),this.hidden=!0;var showPromises=[];this.shouldComponentRenderCSS()&&showPromises.push(this.renderCSS()),this.aPicture&&this.aPicture.hasAttribute("picture-load")&&!this.aPicture.hasAttribute("loaded")&&showPromises.push(new Promise((function(resolve){return _this2.addEventListener("picture-load",(function(event){return resolve()}),{once:!0})}))),Promise.all(showPromises).then((function(){_this2.hasAttribute("no-figcaption-bg-color-equal")||self.requestAnimationFrame((function(timeStamp){var figcaption,figcaptionBackgroundColor;!(figcaption=_this2.root.querySelector("figcaption"))||(figcaptionBackgroundColor=self.getComputedStyle(figcaption).getPropertyValue("--".concat(_this2.namespace||"","figcaption-background-color")).trim())!==self.getComputedStyle(_this2).getPropertyValue("--background-color").trim()&&"transparent"!==figcaptionBackgroundColor?_this2.removeAttribute("figcaption-bg-color-equal"):_this2.setAttribute("figcaption-bg-color-equal",!0)})),_this2.hidden=!1})),this.addEventListener("click",this.clickListener),"teaser-overlay-"===this.getAttribute("namespace")&&(this.addEventListener("mouseover",this.mouseoverListener),this.addEventListener("mouseout",this.mouseoutListener))}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(Teaser.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("click",this.clickListener),"teaser-overlay-"===this.getAttribute("namespace")&&(this.removeEventListener("mouseover",this.mouseoverListener),this.removeEventListener("mouseout",this.mouseoutListener))}},{key:"intersectionCallback",value:function intersectionCallback(entries,observer){this.classList[entries[0]&&entries[0].isIntersecting?"add":"remove"]("intersecting")}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"renderCSS",value:function renderCSS(){"teaser-overlay-"===this.getAttribute("namespace")&&this.aArrow&&this.aArrow.setAttribute("hover-set-by-outside",""),this.css="\n      :host([href]) {\n        cursor: pointer;\n      }\n      :host figure {\n        display: var(--display, flex);\n        background-color: var(--background-color, transparent);\n        border-radius: var(--border-radius, 0);\n        flex-direction: var(--flex-direction, column);\n        align-items: var(--align-items, flex-start);\n        justify-content: var(--justify-content, space-between);\n        margin: var(--margin, 0);\n        padding: var(--padding, 0);\n        height: var(--height, 100%);\n        width: var(--width, 100%);\n        overflow: var(--overflow, visible);\n        position: var(--position, static);\n        overflow: hidden;\n      }\n      :host figure a-picture, :host figure m-picture-with-picture {\n        height: var(--a-picture-height, auto);\n        margin: var(--a-picture-margin, 0);\n        width: var(--a-picture-width, 100%);\n        transition: var(--a-picture-transition, none);\n        transform: var(--a-picture-transform, none);\n      }\n      :host(:hover) figure a-picture, :host(:hover) figure m-picture-with-picture {\n        transform: var(--a-picture-transform-hover, var(--a-picture-transform, none));\n      }\n      :host figure figcaption {\n        border-radius: var(--figcaption-border-radius, var(--border-radius, 0));\n        display: var(--figcaption-display, block);\n        flex-direction: var(--figcaption-flex-direction, row);\n        justify-content: var(--figcaption-justify-content, normal);\n        align-items: var(--figcaption-align-items, normal);\n        align-self: var(--figcaption-align-self, auto);\n        background-color: var(--figcaption-background-color, transparent);\n        margin: var(--figcaption-margin, 0);\n        padding: var(--figcaption-padding, 1em);\n        font-size: var(--figcaption-font-size, 1em);\n        flex-grow: var(--figcaption-flex-grow, 1);\n        height: var(--figcaption-height, 100%);\n        width: var(--figcaption-width, 100%);\n        transition: var(--figcaption-transition, none);\n        transform: var(--figcaption-transform, none);\n      }\n      :host(:hover) figure figcaption {\n        background-color: var(--figcaption-background-color-hover, var(--figcaption-background-color, transparent));\n      }\n      :host(:hover) figure a-picture ~ figcaption, :host(:hover) figure m-picture-with-picture ~ figcaption {\n        background-color: var(--a-picture-figcaption-background-color-hover, var(--figcaption-background-color-hover, var(--figcaption-background-color, transparent)));\n      }\n      :host([figcaption-bg-color-equal=true]) figure figcaption {\n        padding: var(--figcaption-bg-color-equal-padding, var(--figcaption-padding, 1em 0));\n      }\n      :host(:hover) figure figcaption {\n        transform: var(--figcaption-transform-hover, none);\n      }\n      :host figure figcaption * {\n        color: var(--figcaption-color, var(--color, unset));\n      }\n      :host figure figcaption h2, :host figure figcaption h6 {\n        color: var(--h2-figcaption-color, var(--h6-figcaption-color, var(--figcaption-color, var(--color, unset))));\n      }\n      :host(:hover) figure figcaption * {\n        color: var(--figcaption-color-hover, var(--figcaption-color, var(--color, unset)));\n      }\n      :host(:hover) figure figcaption h2, :host(:hover) figure figcaption h6 {\n        color: var(--h2-figcaption-color-hover, var(--h6-figcaption-color-hover, var(--figcaption-color-hover, var(--h2-figcaption-color, var(--h6-figcaption-color, var(--figcaption-color, var(--color, unset)))))));\n      }\n      :host figure figcaption > * {\n        transition: var(--figcaption-any-transition, none);\n        transform: var(--figcaption-any-transform, none);\n        transform-origin: var(--figcaption-any-transform-origin, unset);\n        opacity: var(--figcaption-any-opacity, 1);\n      }\n      :host(.intersecting) figure figcaption > * {\n        transition: var(--intersecting-figcaption-any-transition, var(--figcaption-any-transition, color 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out));\n        transform: var(--intersecting-figcaption-any-transform, var(--figcaption-any-transform, none));\n        opacity: var(--intersecting-figcaption-any-opacity, var(--figcaption-any-opacity, 1));\n      }\n      :host figure figcaption a-link, :host(.intersecting) figure figcaption a-link {\n        position: var(--a-link-position, static);\n        top: var(--a-link-top, auto);\n        bottom: var(--a-link-bottom, auto);\n        transition: var(--a-link-transition, none);\n        transform: var(--a-link-transform, none);\n        opacity: var(--a-link-opacity, 1);\n      }\n      :host(:hover) figure figcaption a-link {\n        transform: var(--a-link-transform-hover, none);\n        opacity: var(--a-link-opacity-hover, 1);\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host figure {\n          border-radius: var(--border-radius-mobile, var(--border-radius, 0));\n        }\n        :host figure figcaption {\n          border-radius: var(--figcaption-border-radius-mobile, var(--border-radius-mobile, var(--figcaption-border-radius, var(--border-radius, 0))));\n        }\n      }\n    ";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("namespace")){case"teaser-tile-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./tile-/tile-.css"),namespace:!1}].concat(styles),!1);case"teaser-tile-text-center-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./tile-/tile-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./tile-text-center-/tile-text-center-.css"),namespace:!1}].concat(styles),!1).then((function(fetchCSSParams){fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--teaser-tile-/g,"--teaser-tile-text-center-")}));case"teaser-tile-rounded-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./tile-/tile-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./tile-rounded-/tile-rounded-.css"),namespace:!1}].concat(styles),!1).then((function(fetchCSSParams){fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--teaser-tile-/g,"--teaser-tile-rounded-")}));case"teaser-overlay-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./overlay-/overlay-.css"),namespace:!1}].concat(styles),!1);case"teaser-overlay-top-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./overlay-top-/overlay-top-.css"),namespace:!1}].concat(styles),!1);case"teaser-download-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./download-/download-.css"),namespace:!1}].concat(styles),!1);case"teaser-round-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./round-/round-.css"),namespace:!1}].concat(styles),!1);case"teaser-plain-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./plain-/plain-.css"),namespace:!1}].concat(styles),!1);default:return this.fetchCSS(styles,!1)}}},{key:"aPicture",get:function get(){return this.root.querySelector("a-picture")}},{key:"aArrow",get:function get(){return this.root.querySelector("a-arrow")}}]),Teaser}(Object(_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_25__.a)())},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Intersection}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _Shadow_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Intersection=function Intersection(){return function(_ChosenClass){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intersection,_ChosenClass);var _super=_createSuper(Intersection);function Intersection(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Intersection);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];(_this=_super.call.apply(_super,[this,options].concat(args))).isObserving=!1;var intersectionObserverInit=_this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(_this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(_this.intersectionCallback.bind(_assertThisInitialized(_this)),intersectionObserverInit);_this.intersectionObserveStart=function(){_this.isObserving||(intersectionObserver.observe(_assertThisInitialized(_this)),_this.isObserving=!0)},_this.intersectionObserveStop=function(){_this.isObserving&&(intersectionObserver.disconnect(),_this.isObserving=!1)}}else _this.intersectionObserveStart=function(){},_this.intersectionObserveStop=function(){},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){_this.intersectionObserveStart=function(){},_this.intersectionObserveStop=function(){},console.warn("IntersectionObserver got not started, due to missing support!")}return _this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intersection,[{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(Intersection.prototype),"connectedCallback",this).call(this),this.intersectionObserveStart()}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(Intersection.prototype),"disconnectedCallback",this).call(this),this.intersectionObserveStop()}},{key:"intersectionCallback",value:function intersectionCallback(entries,observer){}}]),Intersection}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(_Shadow_js__WEBPACK_IMPORTED_MODULE_20__.a)())}}}]);