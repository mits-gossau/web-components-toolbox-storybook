(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/es.date.to-string.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./src/web-components-toolbox/src/es/components/molecules/carousel/Carousel.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return MacroCarousel}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/carousel/Carousel.js",document.baseURI).href},MacroCarousel=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(MacroCarousel,_Shadow);var _super=_createSuper(MacroCarousel);function MacroCarousel(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MacroCarousel);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).macroCarousel=document.createElement("macro-carousel"),Array.from(_this.root.children).forEach((function(node){if(node.getAttribute("slot")||"STYLE"===node.nodeName)return!1;node.setAttribute("loading","eager"),"A"!==node.nodeName&&node.setAttribute("pointer-events","none"),_this.macroCarousel.appendChild(node)})),Array.from(_this.attributes).forEach((function(attribute){attribute.name&&(attribute.name.includes("slides-per-view")?_this.macroCarousel.setAttribute("slides-per-view",_this.getAttribute("slides-per-view".concat(_this.getMedia()))||"1"):"namespace"===attribute.name||attribute.name.includes("hidden")||_this.macroCarousel.setAttribute(attribute.name,attribute.value||"true"))})),_this.resizeListener=function(event){_this.macroCarousel.setAttribute("slides-per-view",_this.getAttribute("slides-per-view".concat(_this.getMedia()))||"1")},_this.macroCarouselSelectedChangedListener=function(event){_this.dispatchEvent(new CustomEvent((_this.getAttribute("macro-carousel-selected-changed")||"macro-carousel-selected-changed")+_this.getAttribute("sync-id"),{detail:{slide:event.detail},bubbles:!0,cancelable:!0,composed:!0}))},_this.macroCarouselSelectedChangedListenerSyncId=function(event){event&&event.detail&&(0===event.detail.slide&&Number(_this.macroCarousel.getAttribute("selected"))===_this.macroCarousel.querySelectorAll("[role=listitem]").length-1?_this.macroCarousel.next():event.detail.slide===_this.macroCarousel.querySelectorAll("[role=listitem]").length-1&&0===Number(_this.macroCarousel.getAttribute("selected"))?_this.macroCarousel.previous():_this.macroCarousel.setAttribute("selected",event.detail.slide))},_this.clickListener=function(event){_this.hasAttribute("open")||event.stopPropagation(),_this.dispatchEvent(new CustomEvent(_this.getAttribute("open-modal")||"open-modal",{detail:{origEvent:event,child:_assertThisInitialized(_this),btnCloseOnly:!0},bubbles:!0,cancelable:!0,composed:!0})),setTimeout((function(){return _this.resizeListener()}),500)},_this.interval=null,_this.blurEventListener=function(event){return _this.clearInterval()},_this.focusEventListener=function(event){return _this.setInterval()},_this.hasAttribute("open-modal")&&(_this.nextEventListener=function(event){return _this.macroCarousel.next()},_this.prevEventListener=function(event){return _this.macroCarousel.previous()},_this.indicatorEventListener=function(event){_this.macroCarousel.selected=Number(event.target.getAttribute("aria-label").replace(/.*?(\d)/,"$1"))-1}),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MacroCarousel,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this,runResizePromises=[];this.shouldComponentRenderCSS()&&runResizePromises.push(this.renderCSS()),this.shouldComponentRenderHTML()&&runResizePromises.push(this.renderHTML()),this.hidden=!0;var showPromises=Array.from(runResizePromises);self.addEventListener("resize",this.resizeListener),setTimeout((function(){return _this2.resizeListener()}),5e3),this.aPictures.some((function(aPicture){return aPicture.hasAttribute("picture-load")&&!aPicture.hasAttribute("loaded")}))&&this.aPictures.forEach((function(aPicture){aPicture.addEventListener("picture-load",_this2.resizeListener,{once:!0}),runResizePromises.push(new Promise((function(resolve){return _this2.addEventListener("picture-load",(function(event){return resolve()}),{once:!0})})))})),this.hasAttribute("sync-id")&&(this.getAttribute("interval")?this.macroCarousel.addEventListener("macro-carousel-selected-changed",this.macroCarouselSelectedChangedListener):document.body.addEventListener((this.getAttribute("macro-carousel-selected-changed")||"macro-carousel-selected-changed")+this.getAttribute("sync-id"),this.macroCarouselSelectedChangedListenerSyncId)),this.hasAttribute("open-modal")&&(this.setAttribute("aria-haspopup","true"),this.addEventListener("click",this.clickListener),this.macroCarousel.querySelector(".macro-carousel-next")&&this.macroCarousel.querySelector(".macro-carousel-next").addEventListener("click",this.nextEventListener),this.macroCarousel.querySelector(".macro-carousel-previous")&&this.macroCarousel.querySelector(".macro-carousel-previous").addEventListener("click",this.prevEventListener),Array.from(this.macroCarousel.querySelectorAll("macro-carousel-pagination-indicator")).forEach((function(indicator){return indicator.addEventListener("click",_this2.indicatorEventListener)}))),this.getAttribute("interval")&&(self.addEventListener("blur",this.blurEventListener),self.addEventListener("focus",this.focusEventListener),document.body.addEventListener("play",this.blurEventListener,!0),document.body.addEventListener("pause",this.focusEventListener,!0)),runResizePromises.length&&Promise.all(runResizePromises).then((function(){return self.requestAnimationFrame((function(timeStamp){return _this2.resizeListener()}))})),Promise.all(showPromises).then((function(){return _this2.hidden=!1}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this3=this;self.removeEventListener("resize",this.resizeListener),this.hasAttribute("sync-id")&&(this.getAttribute("interval")?this.macroCarousel.removeEventListener("macro-carousel-selected-changed",this.macroCarouselSelectedChangedListener):document.body.removeEventListener((this.getAttribute("macro-carousel-selected-changed")||"macro-carousel-selected-changed")+this.getAttribute("sync-id"),this.macroCarouselSelectedChangedListenerSyncId)),this.hasAttribute("open-modal")&&(this.removeEventListener("click",this.clickListener),this.macroCarousel.querySelector(".macro-carousel-next")&&this.macroCarousel.querySelector(".macro-carousel-next").removeEventListener("click",this.nextEventListener),this.macroCarousel.querySelector(".macro-carousel-previous")&&this.macroCarousel.querySelector(".macro-carousel-previous").removeEventListener("click",this.prevEventListener),Array.from(this.macroCarousel.querySelectorAll("macro-carousel-pagination-indicator")).forEach((function(indicator){return indicator.removeEventListener("click",_this3.indicatorEventListener)}))),this.getAttribute("interval")&&(self.removeEventListener("blur",this.blurEventListener),self.removeEventListener("focus",this.focusEventListener),document.body.removeEventListener("play",this.blurEventListener),document.body.removeEventListener("pause",this.focusEventListener))}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.scripts.length}},{key:"renderCSS",value:function renderCSS(){this.css="\n      :host {\n        background: var(--background, none);\n      }\n      :host > macro-carousel {\n         width: var(--width, 100%) !important;\n      }\n      :host > macro-carousel > * {\n        display: flex;\n        align-items: var(--align-items, center);\n        flex-direction: var(--flex-direction, row);\n        justify-content: var(--justify-content, center);\n      }\n      :host > macro-carousel > .container {\n        color: var(--color, red);\n        width: 100%;\n        position: relative;\n      }  \n      :host> macro-carousel >  macro-carousel-nav-button {\n        top:40%;\n      }\n      :host > macro-carousel > .container {\n        display: flex;\n        align-items: stretch;\n        font-size: var(--font-size, 1em);\n      } \n      :host > macro-carousel > div > .text {\n        background-color: var(--text-background-color, red);\n      }\n      :host > macro-carousel > div > .text p {\n        padding:var(--text-padding, 0); \n      }\n      :host .title {\n        position:var(--title-position, absolute);\n        top: var(--title-top, 4vw);\n        left: var(--title-left, 10vw);\n        right: var(--title-right, 10vw);\n      }\n      :host .macro-carousel-previous, .macro-carousel-next{\n         margin:1em;\n      }\n      :host([open-modal]) {\n        position: relative;\n      }\n      :host([open]) > .close-btn {\n        opacity: 0;\n      }\n      :host(:not([open])) > .close-btn {\n        opacity: 1;\n      }\n      :host([open-modal]) > .close-btn {\n        background-color: var(--close-btn-background-color, var(--color-secondary, var(--background-color)));\n        border-radius: 50%;\n        border: 0;\n        box-sizing: border-box;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 7px;\n        padding: 0.75em;\n        width: 7px;\n        position: absolute;\n        right: calc(var(--close-btn-right, var(--content-spacing)) / 2);\n        bottom: calc(var(--close-btn-bottom, var(--content-spacing)) / 2);\n      }\n      :host([open-modal]) > .close-btn > span {\n        height: 22px;\n        width: 22px;\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host> macro-carousel >  macro-carousel-nav-button {\n          top:35%;\n        }\n        :host > macro-carousel > div > .text p {\n          padding:var(--text-padding-mobile, 0); \n        }\n        :host .macro-carousel-previous, :host .macro-carousel-next{\n          display: none;\n        }\n        :host .title > h1.font-size-big {\n          font-size: var(--h1-font-size-mobile);\n        }\n        :host .title {\n          top: 2vw;\n          left: 0;\n          margin:var(--div-margin-mobile);\n        }\n        :host(:not([open-modal-mobile])) {\n          position: static;\n        }\n        :host(:not([open-modal-mobile])) > .close-btn {\n          display: none;\n        }\n        :host([open-modal-mobile]) > .close-btn {\n          right: calc(var(--close-btn-right-mobile, var(--close-btn-right, var(--content-spacing-mobile, var(--content-spacing)))) / 2);\n          bottom: calc(var(--close-btn-bottom-mobile, var(--close-btn-bottom, var(--content-spacing-mobile, var(--content-spacing)))) / 2);\n        }\n      }\n    ",this.injectStyle=document.createElement("style"),this.injectStyle.textContent="\n      :host {\n        --macro-carousel-transition-duration: var(--transition-duration, 0.5s);\n      }\n      :host > #pagination {\n        position: var(--pagination-position);\n        top: var(--pagination-top);\n        bottom: var(--pagination-bottom);\n      }\n      :host div ::slotted(macro-carousel-pagination-indicator) {\n        --macro-carousel-pagination-color: var(--pagination-background-color, var(--background-color, black));\n        --macro-carousel-pagination-color-selected: var(--pagination-background-color-selected, var(--background-color-selected, var(--background-color, pink)));\n        --macro-carousel-pagination-size-dot: var(--pagination-width, 12px);    \n        --macro-carousel-pagination-border-selected: var(--pagination-border-selected);   \n        opacity: var(--pagination-opacity, 1);\n      }\n      :host div ::slotted(macro-carousel-nav-button) {\n        --macro-carousel-navigation-color: var(--navigation-color, var(--color, black));\n        --macro-carousel-navigation-color-focus: var(--navigation-color-focus, var(--color-focus, var(--color, black)));\n        --macro-carousel-navigation-color-background: var(--navigation-background-color, var(--background-color, transparent));\n        --macro-carousel-navigation-color-background-focus: var(--navigation-background-color-focus, var(--navigation-background-color, var(--background-color, rgba(0, 0, 0, 0.2))));\n        --macro-carousel-navigation-button-size: var(--navigation-button-size, 6em);\n        --macro-carousel-navigation-icon-size: var(--navigation-icon-size, 5em);\n        --macro-carousel-navigation-icon-mask: var(--navigation-icon-mask, url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E %3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E %3C/svg%3E\")) ;\n      }\n      @media only screen and (max-width: ".concat(this.mobileBreakpoint,") {\n        :host > #pagination {\n          top: var(--pagination-top-mobile, var(--pagination-top));\n          bottom: var(--pagination-bottom-mobile, var(--pagination-bottom));\n        }\n      }\n    ").replace(/var\(--/g,"var(--".concat(this.namespace));var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("namespace")){case"carousel-default-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}].concat(styles),!1);case"carousel-emotion-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./emotion-/emotion-.css"),namespace:!1}].concat(styles),!1).then((function(fetchCSSParams){fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--carousel-default-/g,"--carousel-emotion-")}));case"carousel-portrait-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./portrait-/portrait-.css"),namespace:!1}].concat(styles),!1).then((function(fetchCSSParams){fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--carousel-default-/g,"--carousel-portrait-")}));default:return this.fetchCSS(styles,!1)}}},{key:"renderHTML",value:function renderHTML(){var _this4=this;return this.loadDependency().then((function(){_this4.html=_this4.macroCarousel;var interval=setInterval((function(){_this4.macroCarousel.shadowRoot&&(clearInterval(interval),_this4.macroCarouselReady())}),100);_this4.hasAttribute("open-modal")&&(_this4.closeBtn=document.createElement("button"),_this4.closeBtn.innerHTML='\n          <span>\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Untitled-Seite%201" viewBox="0 0 22 22" style="background-color:#ffffff00" version="1.1" xml:space="preserve" x="0px" y="0px" width="22px" height="22px">\n              <g>\n                <path id="Ellipse" d="M 1 11 C 1 5.4771 5.4771 1 11 1 C 16.5229 1 21 5.4771 21 11 C 21 16.5229 16.5229 21 11 21 C 5.4771 21 1 16.5229 1 11 Z" fill="#FF6600"/>\n                <path d="M 15 10 L 15 12 L 7 12 L 7 10 L 15 10 Z" fill="#ffffff"/>\n                <path d="M 12 15 L 10 15 L 10 7 L 12 7 L 12 15 Z" fill="#ffffff"/>\n              </g>\n            </svg>\n          </span>\n        ',_this4.closeBtn.classList.add("close-btn"),_this4.html=_this4.closeBtn)}))}},{key:"loadDependency",value:function loadDependency(){var _this5=this;return self.macroCarousel||(self.macroCarousel=new Promise((function(resolve){if(customElements.get("macro-carousel"))resolve();else{var macroCarouselScript=document.createElement("script");macroCarouselScript.setAttribute("type","text/javascript"),macroCarouselScript.setAttribute("async",""),macroCarouselScript.setAttribute("src","https://cdn.jsdelivr.net/npm/macro-carousel@1.0.0/dist/macro-carousel.min.js"),macroCarouselScript.setAttribute("integrity","sha384-zdSqIGGcobwlWW1xUQRlMCHvEp1eYvisEFv4LRQzdG5fZvcZSKFbC3CLWcH1u3mG"),macroCarouselScript.setAttribute("crossorigin","anonymous"),macroCarouselScript.onload=function(){return resolve()},_this5.html=macroCarouselScript}})))}},{key:"macroCarouselReady",value:function macroCarouselReady(){var _this6=this;this.macroCarousel.shadowRoot.appendChild(this.injectStyle),this.getAttribute("interval")&&(this.setInterval(),this.macroCarousel.addEventListener("macro-carousel-selected-changed",(function(event){return _this6.setInterval()})))}},{key:"setInterval",value:function(_setInterval){function setInterval(){return _setInterval.apply(this,arguments)}return setInterval.toString=function(){return _setInterval.toString()},setInterval}((function(){var _this7=this;clearInterval(this.interval),this.interval=setInterval((function(){return _this7.macroCarousel.next()}),Number(this.getAttribute("interval")))}))},{key:"clearInterval",value:function(_clearInterval){function clearInterval(){return _clearInterval.apply(this,arguments)}return clearInterval.toString=function(){return _clearInterval.toString()},clearInterval}((function(){clearInterval(this.interval)}))},{key:"getMedia",value:function getMedia(){return self.matchMedia("(min-width: calc(".concat(this.mobileBreakpoint," + 1px))")).matches?"":"-mobile"}},{key:"scripts",get:function get(){return this.root.querySelectorAll("script")}},{key:"aPictures",get:function get(){return Array.from(this.macroCarousel.querySelectorAll("a-picture"))}}]),MacroCarousel}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_31__.a)())}}]);