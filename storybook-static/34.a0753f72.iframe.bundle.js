(window.webpackJsonp=window.webpackJsonp||[]).push([[34,9,39,40,42,66,67,68],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./src/web-components-toolbox/src/es/components/organisms/header/Header.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Header}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/organisms/header/Header.js",document.baseURI).href},Header=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Header,_Shadow);var _super=_createSuper(Header);function Header(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Header);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(_this=_super.call.apply(_super,[this].concat(args))).setAttribute("role","banner"),_this.setAttribute("aria-label","Header"),_this.scrollListener=function(event){var lastScroll=self.scrollY;setTimeout((function(){_this.setStickyOffsetHeight(),self.scrollY<=_this.offsetHeight+5?_this.classList.add("top"):(_this.classList.remove("top"),Math.abs(self.scrollY-lastScroll)>30&&self.scrollY<=lastScroll?_this.classList.add("show"):Math.abs(self.scrollY-lastScroll)>30&&_this.classList.remove("show")),self.addEventListener("scroll",_this.scrollListener,{once:!0})}),200)},_this.clickAnimationListener=function(event){_this.header.classList.contains("open")?(_this.mNavigation.classList.add("open"),"desktop"!==_this.getMedia()&&_this.mNavigation.setAttribute("aria-expanded","true")):event&&"close"===event.animationName&&(_this.mNavigation.classList.remove("open"),"desktop"!==_this.getMedia()&&_this.mNavigation.setAttribute("aria-expanded","false"))},_this.keyupListener=function(event){"Escape"===event.key&&(document.body.click(),_this.MenuIcon.classList.contains("open")&&_this.MenuIcon.click())},_this.clickAnchorListener=function(event){"desktop"!==_this.getMedia()&&_this.MenuIcon.classList.contains("open")&&_this.MenuIcon.click()};var timeout=null;return _this.resizeListener=function(event){clearTimeout(timeout),timeout=setTimeout((function(){_this.adjustLogoPos(!0),_this.setStickyOffsetHeight()}),200)},_this.mutationCallbackTimeout=null,_this.mutationCallback=function(mutationsList){clearTimeout(_this.mutationCallbackTimeout),_this.mutationCallbackTimeout=setTimeout((function(){_this.header.classList.contains("open")&&!_this.classList.contains("show")&&_this.classList.add("show")}),50)},_this.observer=new MutationObserver(_this.mutationCallback),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Header,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;this.hidden=!0;var showPromises=[];this.shouldComponentRenderCSS()&&showPromises.push(this.renderCSS()),this.shouldComponentRenderHTML()&&showPromises.push(this.renderHTML()),showPromises.push(new Promise((function(resolve){return _this2.addEventListener("navigation-load",(function(event){return resolve()}),{once:!0})}))),this.aLogo&&!this.aLogo.hasAttribute("loaded")&&showPromises.push(new Promise((function(resolve){return _this2.addEventListener("logo-load",(function(event){return resolve()}),{once:!0})}))),Promise.all(showPromises).then((function(){_this2.hidden=!1,_this2.setStickyOffsetHeight(),_this2.adjustLogoPos(!0),setTimeout((function(){return _this2.adjustLogoPos(!0)}),1e3)})),this.hasAttribute("sticky")&&self.addEventListener("scroll",this.scrollListener,{once:!0}),this.addEventListener("click",this.clickAnimationListener),this.addEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorListener),self.addEventListener("resize",this.resizeListener),this.mNavigation&&this.mNavigation.addEventListener("animationend",this.clickAnimationListener),self.addEventListener("resize",this.mutationCallback),document.addEventListener("keyup",this.keyupListener),this.observer.observe(this.header,{attributes:!0})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.hasAttribute("sticky")&&self.removeEventListener("scroll",this.scrollListener),this.removeEventListener("click",this.clickAnimationListener),this.removeEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorListener),self.removeEventListener("resize",this.resizeListener),this.mNavigation&&this.mNavigation.removeEventListener("animationend",this.clickAnimationListener),self.removeEventListener("resize",this.mutationCallback),document.removeEventListener("keyup",this.keyupListener),this.observer.disconnect()}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.header}},{key:"renderCSS",value:function renderCSS(){return this.css="\n      :host {\n        grid-area: header;\n        position: var(--position, sticky);\n        top: 0;\n        z-index: var(--z-index, 1000);\n        text-align: var(--text-align, initial);\n        background-color: var(--host-background-color, transparent);\n      }\n      :host > * {\n        font-size: var(--font-size, 1rem);\n        margin: var(--content-spacing, 40px) auto;  /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n        width: var(--content-width, 55%);\n      }\n      :host([sticky]) {\n        position: static;\n      }\n      :host > header > ".concat(this.getAttribute("m-navigation")||"m-navigation"," {\n        flex-grow: 1;\n        max-width: calc(var(--content-width, 55%) - var(--logo-width));\n      }\n      :host > header::before {\n        display: block;\n        width: var(--logo-width);\n        height: auto;\n        clear: both;\n        content: '';\n        order: 1;\n      }\n      :host > header > *:first-child {\n        align-self: baseline;\n      }\n      :host > span, :host > div, :host > p, :host > ul, :host > ol {\n        width: var(--content-width, 55%);\n      }\n      :host > header {\n        align-items: var(--align-items, center);\n        background-color: var(--background-color, black);\n        border: var(--border, 0);\n        border-bottom: var(--border-bottom, 0);\n        display: flex;\n        flex-direction: var(--flex-direction , row);\n        flex-wrap: var(--flex-wrap, nowrap);\n        height: var(--height , 85px);\n        justify-content: var(--justify-content , space-between);\n        padding: var(--padding, 0);\n        margin: var(--margin, 0);\n        ").concat(this.previousElementSibling&&"MSRC-LOGIN"===this.previousElementSibling.tagName?"margin-top: 0;":"","\n        width: var(--width, 100%);\n        position: var(--header-position, relative);\n        transition: var(--transition, all 0.2s ease);\n      }\n      :host > header.open {\n        background-color: var(--background-color-open, var(--background-color, black));\n      }\n      :host > header.animate {\n        background: linear-gradient(to bottom, var(--background-color-open) 0%, var(--background-color-open) 50%, var(--background-color) 50%, var(--background-color) 100%);\n        animation: backgroundAnimation var(--background-animation, 0.5s ease);\n        background-size: 100% 200%;\n        background-position-y: 0%;\n      }\n      :host > header > a {\n        align-self: var(--a-align-self, var(--align-self, auto));\n        color: var(--a-color, var(--color));\n        font-family: var(--a-font-family, var(--font-family));\n        font-weight: var(--a-font-weight, var(--font-weight, normal));\n        font-size: var(--a-font-size, var(--font-size));\n        padding: var(--a-padding, 0);\n        margin: var(--a-margin, 0);\n        line-height: var(--a-line-height, 0);\n        order: var(--order, 1);\n        text-decoration: var(--a-text-decoration, var(--text-decoration, none));\n        text-underline-offset: var(--a-text-underline-offset, unset);\n        text-transform: var(--a-text-transform, none);\n        transition: var(--a-transition, all 0.2s ease);\n        white-space: var(--a-white-space, normal);\n      }\n      :host > header > a:hover {\n        color: var(--a-color-hover, var(--a-color-hover, var(--a-color, var(--color))));\n        text-decoration: var(--a-text-decoration-hover, var(--text-decoration-hover, var(--a-text-decoration, var(--text-decoration, none))));\n      }\n      :host > header.open > a {\n        font-size: var(--a-font-size-open, var(--font-size-open, var(--a-font-size, var(--font-size))));\n      }\n      :host > header > a-menu-icon {\n        align-self: var(--a-menu-icon-align-self, var(--align-self, auto));\n        display: none;\n      }\n      :host([sticky].top) {\n        position: var(--position, sticky);\n      }\n      :host([sticky].show:not(.top)) {\n        top: 0;\n        transition: var(--sticky-transition-show, top .5s ease);\n      }\n      :host([sticky].show:not(.top)) > header {\n        border-bottom: var(--sticky-border-bottom, 1px solid var(--color));\n      }\n      :host([sticky]:not(.top)) {\n        transition: var(--sticky-transition-hide, top .4s ease);\n      }\n      :host > header > ").concat(this.getAttribute("m-navigation")||"m-navigation"," {\n        order: 2;\n      }\n      :host > header > a-logo{\n        position: absolute;\n        left: calc((100% - var(--content-width, 55%)) / 2);\n        z-index: 1001;\n        top: var(--a-logo-top, 0);\n        transition: top 0.2s ease-out;\n      }\n      @keyframes backgroundAnimation {\n        0%{background-position-y:100%}\n        100%{background-position-y:0%}\n      }\n      @keyframes open {\n        0% {left: -100vw}\n        100% {left: 0}\n      }\n      @keyframes close {\n        0% {left: 0}\n        100% {left: -100vw}\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host > * {\n          --logo-default-justify-content: flex-end;\n          font-size: var(--font-size-mobile, var(--font-size, 1rem));\n          margin: var(--content-spacing-mobile, 0) auto; /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n          width: var(--content-width-mobile, 90%);\n        }\n        :host([sticky]) {\n          position: sticky;\n          top: -7em;\n        }\n        :host([sticky].show:not(.top)) > header, :host([sticky]:not(.top)) > header {\n          transform: translateY(calc(-1 * var(--content-spacing-mobile)));\n        }\n        :host > header {\n          flex-wrap: nowrap;\n          margin: var(--margin-mobile, var(--margin, 0));\n          ").concat(this.previousElementSibling&&"MSRC-LOGIN"===this.previousElementSibling.tagName?"margin-top: 0;":"","\n          width: var(--width-mobile, var(--width, 100%));\n        }\n        :host > header > ").concat(this.getAttribute("m-navigation")||"m-navigation"," {\n          animation: close .4s ease-in;\n          left: -100vw;\n        }\n        :host > header > ").concat(this.getAttribute("m-navigation")||"m-navigation",".open {\n          display: block;\n        }\n        :host > header.open > ").concat(this.getAttribute("m-navigation")||"m-navigation"," {\n          animation: open .3s ease-out;\n          left: 0;\n        }\n        :host > header > *:first-child {\n          align-self: center;\n        }\n        :host > span, :host > div, :host > p, :host > ul, :host > ol {\n          width: var(--content-width, 90%);\n        }\n        :host > header {\n          box-sizing: var(--box-sizing-open-mobile, var(--box-sizing-open, var(--box-sizing, content-box)));\n          height: var(--height-mobile, 50px);\n          flex-direction: var(--flex-direction-mobile, row-reverse);\n          justify-content: var(--justify-content-mobile, space-between);\n          padding: var(--padding-mobile, var(--padding, 0 calc(var(--content-spacing, 40px) / 2)));\n        }\n        :host > header.open {\n          position: var(--position-open-mobile, var(--position-open, var(--position, static)));\n          top: var(--top-open-mobile, var(--top-open, var(--top, auto)));\n          left: var(--left-open-mobile, var(--left-open, var(--position, auto)));\n          width: var(--width-open-mobile, var(--width-open, var(--width, auto)));\n        }\n        :host > header > ").concat(this.getAttribute("m-navigation")||"m-navigation"," {\n          display: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-display-mobile, none);\n          left: 0;\n          background-color: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-background-color-mobile, transparent);\n          height: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-height-mobile, 0);\n          overflow: hidden;\n          position: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-position-mobile, absolute);\n          align-items: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-align-items-mobile, normal);\n          justify-content: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-justify-content-mobile, normal);\n          transition: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-transition, all 0.2s ease);\n          top: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-top-mobile, var(--height-mobile, 50px));\n          padding: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-padding-mobile, 0);\n          width: 100%;\n          min-width: 100%;\n        }\n        :host > header > a {\n          align-self: var(--a-align-self-mobile, var(--a-align-self, var(--align-self, auto)));\n          font-size: var(--a-font-size-mobile, var(--a-font-size, var(--font-size)));\n          padding: var(--a-padding-mobile, var(--a-padding, 0));\n          margin: var(--a-margin-mobile, var(--a-margin, 0));\n          order: var(--order-mobile, var(--order, 1));\n        }\n        :host > header > a-title {\n          z-index: var(--a-title-z-index, auto);\n        }\n        :host > header.open > ").concat(this.getAttribute("m-navigation")||"m-navigation"," {\n          display: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-display-open-mobile, var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-display-mobile, block));\n          height: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-height-open-mobile, 100vh);\n          overflow-y: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-overflow-y-open-mobile, auto);\n          padding: var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-padding-open-mobile, var(--").concat(this.getAttribute("m-navigation")||"m-navigation","-padding-mobile, 0));\n        }\n        :host  > header > a-menu-icon{\n          align-self: var(--a-menu-icon-align-self-mobile, var(--a-menu-icon-align-self, var(--align-self, auto)));\n          display: var(--a-menu-icon-display-mobile, block);\n          z-index: 1002;\n        }\n        :host  > header.open > a-menu-icon{\n          --a-menu-icon-height: var(--a-menu-icon-height-open-mobile);\n          --a-menu-icon-margin: var(--a-menu-icon-margin-open-mobile);\n          display: var(--a-menu-icon-display-open-mobile, var(--a-menu-icon-display-mobile, block));\n        }\n        :host > header > a-menu-icon {\n          order: 3;\n        }\n        :host > header > a-logo{\n          flex-grow: 1;\n          left: auto;\n          right: var(--content-spacing-mobile, var(--content-spacing));\n          top: var(--a-logo-top-mobile, -1em);\n        }\n        :host > header::before {\n          order: 1;\n        }\n      }\n    "),"header-default-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}],!1):Promise.resolve()}},{key:"renderHTML",value:function renderHTML(){var _this3=this;return this.header=this.root.querySelector(this.cssSelector+" > header")||document.createElement("header"),Array.from(this.root.children).forEach((function(node){if(node===_this3.header||node.getAttribute("slot")||"STYLE"===node.nodeName)return!1;_this3.header.appendChild(node)})),this.html=this.header,this.hasAttribute("sticky")&&this.classList.add("top"),self.addEventListener("resize",(function(event){return _this3.dispatchEvent(new CustomEvent(_this3.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!1,origEvent:event,this:_this3},bubbles:!0,cancelable:!0,composed:!0}))})),this.getAttribute("menu-icon")?this.loadChildComponents().then((function(children){_this3.MenuIcon=new children[0][1]({namespace:_this3.getAttribute("namespace")?"".concat(_this3.getAttribute("namespace"),"a-menu-icon-"):"",namespaceFallback:_this3.hasAttribute("namespace-fallback"),mobileBreakpoint:_this3.mobileBreakpoint}),_this3.MenuIcon.addEventListener("click",(function(event){_this3.header.classList.toggle("open");var prop=_this3.header.classList.contains("open")?"add":"remove";"desktop"!==_this3.getMedia()&&_this3.mNavigation.setAttribute("aria-expanded",_this3.header.classList.contains("open")?"true":"false"),_this3.dispatchEvent(new CustomEvent(_this3.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:_this3.header.classList.contains("open"),origEvent:event,this:_this3},bubbles:!0,cancelable:!0,composed:!0})),Array.from(_this3.header.children).forEach((function(node){node.classList[prop](_this3.getAttribute("no-scroll")||"no-scroll")}))})),_this3.header.appendChild(_this3.MenuIcon),_this3.html=_this3.style,_this3.html=_this3.styleTwo,_this3.adjustLogoPos(!0)})):Promise.resolve()}},{key:"loadChildComponents",value:function loadChildComponents(){if(this.childComponentsPromise)return this.childComponentsPromise;var menuIconPromise;try{menuIconPromise=Promise.resolve({default:MenuIcon})}catch(error){menuIconPromise=__webpack_require__.e(65).then(__webpack_require__.bind(null,"./src/web-components-toolbox/src/es/components/atoms/menuIcon/MenuIcon.js"))}return this.childComponentsPromise=Promise.all([menuIconPromise.then((function(module){return["a-menu-icon",module.default]}))]).then((function(elements){return elements.forEach((function(element){var _customElements;customElements.get(element[0])||(_customElements=customElements).define.apply(_customElements,_toConsumableArray(element))})),elements}))}},{key:"mNavigation",get:function get(){return this.root.querySelector(this.getAttribute("m-navigation")||"m-navigation")}},{key:"aLogo",get:function get(){return this.root.querySelector(this.getAttribute("a-logo")||"a-logo")}},{key:"setStickyOffsetHeight",value:function setStickyOffsetHeight(){var _this4=this;this.style.textContent="",self.requestAnimationFrame((function(timeStamp){_this4.setCss("\n        :host([sticky].top), :host([sticky]:not(.top)) {\n          top: -".concat(_this4.offsetHeight+5,"px;\n          transition: var(--sticky-transition-hide, top .4s ease);\n        }\n        @media only screen and (max-width: _max-width_) {\n          :host {\n            min-height: ").concat(_this4.offsetHeight,"px;\n          }\n        }\n      "),void 0,void 0,void 0,_this4.style)}))}},{key:"adjustLogoPos",value:function adjustLogoPos(resetCouter){var _this5=this;this.styleTwo.textContent="","desktop"===this.getMedia()&&(this._adjustLogoPosCounter=resetCouter?1:this._adjustLogoPosCounter?this._adjustLogoPosCounter+1:1,self.requestAnimationFrame((function(timeStamp){var navHeight=_this5.mNavigation?_this5.mNavigation.offsetHeight:200,logoHeight=_this5.aLogo.offsetHeight;if(_this5._adjustLogoPosCounter<30&&(!navHeight||!logoHeight))return setTimeout((function(){return _this5.adjustLogoPos(!1)}),1e3);_this5.setCss("\n        :host > header > a-logo {\n          top: calc(".concat(navHeight,"px / 2 - ").concat(logoHeight,"px / 2);\n        }\n      "),void 0,void 0,void 0,_this5.styleTwo)})))}},{key:"getMedia",value:function getMedia(){return self.matchMedia("(min-width: calc(".concat(this.mobileBreakpoint," + 1px))")).matches?"desktop":"mobile"}},{key:"style",get:function get(){return this._style||(this._style=((style=document.createElement("style")).setAttribute("protected","true"),style.setAttribute("_csssetStickyOffsetHeight",""),style));var style}},{key:"styleTwo",get:function get(){return this._styleTwo||(this._styleTwo=((styleTwo=document.createElement("style")).setAttribute("protected","true"),styleTwo.setAttribute("_cssadjustLogoPos",""),styleTwo));var styleTwo}}]),Header}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_28__.a)())}}]);