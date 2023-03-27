(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/web-components-toolbox/src/es/components/atoms/picture/Picture.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Picture}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var _prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/picture/Picture.js",document.baseURI).href},Picture=function(_Intersection){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Picture,_Intersection);var _super=_createSuper(Picture);function Picture(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Picture);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return(_this=_super.call.apply(_super,[this,Object.assign(options,{intersectionObserverInit:{}})].concat(args))).clickListener=function(event){_this.hasAttribute("open")||event.stopPropagation(),_this.dispatchEvent(new CustomEvent(_this.getAttribute("open-modal")||"open-modal",{detail:{origEvent:event,child:_assertThisInitialized(_this)},bubbles:!0,cancelable:!0,composed:!0}))},_this.mouseoverListener=function(event){_this.picture.classList.add("hover")},_this.mouseoutListener=function(event){_this.picture.classList.remove("hover")},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Picture,[{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(Picture.prototype),"connectedCallback",this).call(this),this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.hasAttribute("open-modal")&&(this.setAttribute("aria-haspopup","true"),this.addEventListener("click",this.clickListener)),this.mouseEventElement&&(this.mouseEventElement.addEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.addEventListener("mouseout",this.mouseoutListener))}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(Picture.prototype),"disconnectedCallback",this).call(this),this.hasAttribute("open-modal")&&this.removeEventListener("click",this.clickListener),this.mouseEventElement&&(this.mouseEventElement.removeEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.removeEventListener("mouseout",this.mouseoutListener),this.parentNodeShadowRootHost=null)}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){this.img&&("loading"===name&&this.img?this.img.setAttribute(name,newValue):"pointer-events"===name&&(this.css="\n          :host picture img {\n            pointer-events: ".concat(newValue,";\n          }\n        ")))}},{key:"intersectionCallback",value:function intersectionCallback(entries,observer){(this.isIntersecting=entries&&entries[0]&&entries[0].isIntersecting)&&(this.intersecting(),this.openModalIntersecting())}},{key:"intersecting",value:function intersecting(){}},{key:"openModalIntersecting",value:function openModalIntersecting(){}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"shouldComponentRenderHTML",value:function shouldComponentRenderHTML(){return!this.picture}},{key:"renderCSS",value:function renderCSS(){switch(this.css="\n      :host {\n        overflow: var(--host-overflow, initial);\n      }\n      :host picture {\n        display: var(--display, inline); /* don't use flex here, it can have strange side effects */\n      }\n      :host picture img {\n        aspect-ratio: ".concat(this.hasAttribute("aspect-ratio")?"1/".concat(this.getAttribute("aspect-ratio")):"var(--aspect-ratio, auto)",";\n        border-radius: var(--border-radius, 0);\n        display: var(--img-display, block);\n        filter: var(--filter, none);\n        height: var(--img-height, auto);\n        image-rendering: var(--image-rendering, -webkit-optimize-contrast); /* fix blurred image on webkit: https://www.betriebsrestaurants-migros.ch/landingpages/swissgrid/info-menuplan/ */\n        margin: var(--img-margin, auto);\n        max-height: var(--img-max-height, 75vh);\n        max-width: var(--img-max-width, 100%); /* max-content would have been nice to not scale up the image, but in general make the editor use big enough images and this must stay at 100% default value, otherwise there are several side effects */\n        min-height: var(--img-min-height, unset);\n        min-width: var(--img-min-width, unset);\n        object-fit: var(--img-object-fit, contain); /* cover does not render the same on IOS */\n        opacity: 0;\n        overflow: var(--overflow, auto);\n        position: var(--position, static);\n        transform: var(--transform, none);\n        transition: var(--transition, none);\n        vertical-align: middle; /* use middle to avoid having a gap at the bottom of the image https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image */\n        width: var(--img-width, max-content);\n        z-index: var(--z-index, auto);\n      }\n      :host([loaded]) picture img {\n        animation: var(--appear, appear .3s ease-out);\n        opacity: 1;\n      }\n      :host picture img:hover, :host picture.hover img {\n        filter: var(--filter-hover, var(--filter, none));\n        transform: var(--transform-hover, var(--transform, none));\n      }\n      /* modal stuff */\n      ").concat(this.hasAttribute("no-modal-icon")?"\n          :host([open-modal]) {\n            cursor: pointer;\n          }\n          :host([open-modal]) > .close-btn {\n            display: none;\n            background-color: var(--close-btn-background-color, var(--color-secondary, var(--background-color)));\n          }\n        ":"\n          :host([open-modal]) {\n            display: block !important; /* must be display block for adjustBtnPosition calculations of this.getBoundingClientRect */\n            cursor: pointer;\n            position: relative;\n          }\n          :host([open-modal][open]) > .close-btn.adjusted {\n            display: none;\n          }\n          :host([open-modal][loaded]:not([open])) > .close-btn.adjusted {\n            display: flex;\n            animation: var(--close-btn-appear, appear .3s ease-out);\n          }\n          :host([open-modal]) > .close-btn {\n            background-color: var(--close-btn-background-color, var(--color-secondary, var(--background-color)));\n            border-radius: 50%;\n            border: 0;\n            box-sizing: border-box;\n            cursor: pointer;\n            display: none;\n            align-items: center;\n            justify-content: center;\n            height: 7px;\n            padding: 0.75em;\n            width: 7px;\n            position: absolute;\n            right: calc(var(--close-btn-right, var(--content-spacing)) / 2);\n            bottom: calc(var(--close-btn-bottom, var(--content-spacing)) / 2);\n          }\n          :host([open-modal]) > .close-btn > span {\n            height: 22px;\n            width: 22px;\n          }\n        ","\n      @media only screen and (max-width: _max-width_) {\n        :host picture img {\n          border-radius: var(--border-radius-mobile, 0);\n          filter: var(--filter-mobile, var(--filter, none));\n          height: var(--img-height-mobile, var(--img-height, auto));\n          margin: var(--img-margin-mobile, var(--img-margin, auto));\n          transform: var(--transform-mobile, var(--transform, none));\n          transition: var(--transition-mobile, var(--transition, none));\n          width: var(--img-width-mobile, var(--img-width, 100%));\n        }\n        :host picture img:hover, :host picture.hover img {\n          filter: var(--filter-mobile-hover, var(--filter-hover, var(--filter, none)));\n          transform: var(--transform-mobile-hover, var(--transform-hover, var(--transform, none)));\n        }\n        /* modal stuff */\n        :host(:not([open-modal-mobile])) {\n          cursor: auto;\n          position: static;\n        }\n        :host(:not([open-modal-mobile])) > .close-btn.adjusted {\n          display: none !important;\n        }\n        :host([open-modal-mobile]) > .close-btn {\n          right: calc(var(--close-btn-right-mobile, var(--close-btn-right, var(--content-spacing-mobile, var(--content-spacing)))) / 2);\n          bottom: calc(var(--close-btn-bottom-mobile, var(--close-btn-bottom, var(--content-spacing-mobile, var(--content-spacing)))) / 2);\n        }\n      }\n      @keyframes appear {\n        0%{opacity: 0}\n        100%{opacity: 1}\n      }\n    "),this.getAttribute("namespace")){case"picture-overflow-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./overflow-/overflow-.css"),namespace:!1}]);case"picture-overflow-scale-up-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./overflow-scale-up-/overflow-scale-up-.css"),namespace:!1}]);case"picture-scale-up-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./scale-up-/scale-up-.css"),namespace:!1}]);case"picture-teaser-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./teaser-/teaser-.css"),namespace:!1}]);case"picture-store-logo-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./store-logo-/store-logo-.css"),namespace:!1}]);case"picture-cover-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./cover-/cover-.css"),namespace:!1}])}}},{key:"renderHTML",value:function renderHTML(){var _this2=this;if(this.html=this.picture=this.root.querySelector("picture")||document.createElement("picture"),this.sources=[],Array.from(this.root.children).forEach((function(node){"IMG"===node.nodeName?(node.setAttribute("data-src",Picture.pathResolver(node.getAttribute("src"))),node.removeAttribute("src"),_this2.img=node):"SOURCE"===node.nodeName&&(node.setAttribute("data-srcset",Picture.pathResolver(node.getAttribute("srcset"))),node.removeAttribute("srcset"),_this2.sources.push(node))})),this.defaultSource&&(this.img=document.createElement("img"),this.img.setAttribute("data-src",Picture.pathResolver(this.defaultSource)),this.img.setAttribute("alt",this.alt),""===this.alt&&console.warn("a-picture alt is missing",this)),!this.img)return console.warn("At Picture... no <img> nor a defaultSource was supplied: ",this);if(this.img.setAttribute("decoding","async"),this.setAttribute("loading",this.hasAttribute("picture-load")?"eager":this.getAttribute("loading")||"lazy"),this.sourcesObj){var div=document.createElement("div");this.sourcesObj.forEach((function(i){if(""!==i.src&&""!==i.type&&""!==i.size)switch(i.size){case"small":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(max-width: 400px)">');break;case"medium":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(min-width: 401px) and (max-width: 600px)">');break;case"large":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(min-width: 601px) and (max-width: 1200px)">');break;case"extra-large":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(min-width: 1201px)">');break;default:div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'">')}else console.warn("a-picture src - missing attributes: ".concat(""===i.src?"src":""," ").concat(""===i.type?"type":""," ").concat(""===i.size?"size":""))})),Array.from(div.children).forEach((function(node){return _this2.sources.push(node)}))}if(!this.sources.length){var naturalWidth,src=Picture.newUrl(this.img.getAttribute("data-src"));if(naturalWidth=src.searchParams.get(this.hasAttribute("query-width")?this.getAttribute("query-width"):"width")){this.img.naturalWidth&&(naturalWidth=this.img.naturalWidth),src.searchParams.delete(this.hasAttribute("query-height")?this.getAttribute("query-height"):"height"),src.searchParams.get(this.hasAttribute("query-format")?this.getAttribute("query-format"):"format")&&src.searchParams.set(this.hasAttribute("query-format")?this.getAttribute("query-format"):"format","webp"),src.searchParams.get(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality")&&src.searchParams.set(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality","80");for(var width=50,prevWidth=0,nextWidth=0;width<naturalWidth;){(nextWidth=width+50<naturalWidth?width+50:0)?src.searchParams.set(this.hasAttribute("query-width")?this.getAttribute("query-width"):"width",String(width)):src.searchParams.delete(this.hasAttribute("query-width")?this.getAttribute("query-width"):"width");var source=document.createElement("source");source.setAttribute("data-srcset",src.href),src.searchParams.get(this.hasAttribute("query-format")?this.getAttribute("query-format"):"format")&&source.setAttribute("type","image/webp"),source.setAttribute("media","".concat(prevWidth?"(min-width: ".concat(prevWidth+1,"px)"):"").concat(prevWidth&&nextWidth?" and ":"").concat(nextWidth?"(max-width: ".concat(width,"px)"):"")),this.sources.push(source),prevWidth=width,width+=50}}}var img=this.img;if("eager"===this.getAttribute("loading")){var _src=Picture.newUrl(this.img.getAttribute("data-src"));_src.searchParams.get(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality")&&(this.sources.forEach((function(source){var newSource=source.cloneNode(),src=Picture.newUrl(source.getAttribute("data-srcset"));src.searchParams.set(_this2.hasAttribute("query-quality")?_this2.getAttribute("query-quality"):"quality","0"),_this2.picture.appendChild(newSource),newSource.setAttribute("srcset",src.href)})),img.setAttribute("decoding","sync"),img=this.img.cloneNode(),_src.searchParams.set(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality","0"),img.setAttribute("data-src",_src.href),this.picture.appendChild(img),img.setAttribute("src",img.getAttribute("data-src")),img.addEventListener("load",(function(event){return _this2.setAttribute("loaded-bad-quality","true")}),{once:!0}),img.addEventListener("error",(function(event){return _this2.setAttribute("loaded-bad-quality","false")}),{once:!0}),this.intersecting=function(){_this2.intersecting=function(){},_this2.intersectionObserveStop();var picture=document.createElement("picture");_this2.sources.forEach((function(source){picture.appendChild(source),source.setAttribute("srcset",source.getAttribute("data-srcset"))})),picture.appendChild(_this2.img),_this2.img.setAttribute("src",_this2.img.getAttribute("data-src"));var replaceImg=function replaceImg(event){_this2.css="\n              :host {\n                --show: none;\n                --appear: none;\n              }\n            ",_this2.picture.replaceWith(picture),_this2.picture=picture};_this2.img.addEventListener("load",replaceImg,{once:!0}),img.addEventListener("error",replaceImg,{once:!0})},this.isIntersecting&&this.intersecting())}if(img===this.img&&(this.intersecting=function(){_this2.intersecting=function(){},_this2.intersectionObserveStop(),_this2.sources.forEach((function(source){_this2.picture.appendChild(source),source.setAttribute("srcset",source.getAttribute("data-srcset"))})),_this2.picture.appendChild(_this2.img),_this2.img.setAttribute("src",_this2.img.getAttribute("data-src"))},(this.isIntersecting||"eager"===this.getAttribute("loading"))&&this.intersecting()),img.addEventListener("load",(function(event){return _this2.setAttribute("loaded","true")}),{once:!0}),img.addEventListener("error",(function(event){return _this2.setAttribute("loaded","false")}),{once:!0}),this.hasAttribute("picture-load")&&(img.addEventListener("load",(function(event){_this2.dispatchEvent(new CustomEvent(_this2.getAttribute("picture-load")||"picture-load",{detail:{origEvent:event,child:_this2,img:_this2.img,picture:_this2.picture},bubbles:!0,cancelable:!0,composed:!0}))}),{once:!0}),img.addEventListener("error",(function(event){_this2.dispatchEvent(new CustomEvent(_this2.getAttribute("picture-load")||"picture-load",{detail:{error:event},bubbles:!0,cancelable:!0,composed:!0}))}),{once:!0})),this.hasAttribute("open-modal")){this.closeBtn=document.createElement("button"),this.closeBtn.innerHTML='\n        <span>\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Untitled-Seite%201" viewBox="0 0 22 22" style="background-color:#ffffff00" version="1.1" xml:space="preserve" x="0px" y="0px" width="22px" height="22px">\n            <g>\n              <path d="M 15 10 L 15 12 L 7 12 L 7 10 L 15 10 Z" fill="#ffffff"/>\n              <path d="M 12 15 L 10 15 L 10 7 L 12 7 L 12 15 Z" fill="#ffffff"/>\n            </g>\n          </svg>\n        </span>\n      ',this.closeBtn.classList.add("close-btn");var adjustBtnPosition=function adjustBtnPosition(){var hasRepeat=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(_this2.style.textContent="",_this2.isConnected&&("mobile"!==_this2.getMedia()||_this2.hasAttribute("open-modal-mobile"))&&(hasRepeat&&setTimeout((function(){return self.requestAnimationFrame((function(timeStamp){return adjustBtnPosition(!1)}))}),1e3),"function"==typeof _this2.getBoundingClientRect&&_this2.getBoundingClientRect().width&&_this2.getBoundingClientRect().height&&_this2.img&&"function"==typeof _this2.img.getBoundingClientRect&&_this2.img.getBoundingClientRect().width&&_this2.img.getBoundingClientRect().height)){var widthDiff=_this2.getBoundingClientRect().width-_this2.img.getBoundingClientRect().width,heightDiff=_this2.getBoundingClientRect().height-_this2.img.getBoundingClientRect().height;(widthDiff>0||heightDiff>0)&&_this2.setCss("\n          ".concat("desktop"===_this2.getMedia()?"\n                :host([open-modal]) > .close-btn {\n                  ".concat(heightDiff>0?"bottom: calc(var(--close-btn-bottom, var(--content-spacing)) / 2 + ".concat(heightDiff,"px);"):"","\n                  ").concat(widthDiff>0?"right: calc(var(--close-btn-right, var(--content-spacing)) / 2 + ".concat(widthDiff/2,"px);"):"","\n                }\n              "):"\n                @media only screen and (max-width: _max-width_) {\n                  :host([open-modal-mobile]) > .close-btn {\n                    ".concat(heightDiff>0?"bottom: calc(var(--close-btn-bottom-mobile, var(--close-btn-bottom, var(--content-spacing-mobile, var(--content-spacing)))) / 2 + ".concat(heightDiff,"px);"):"","\n                    ").concat(widthDiff>0?"right: calc(var(--close-btn-right-mobile, var(--close-btn-right, var(--content-spacing-mobile, var(--content-spacing)))) / 2 + ".concat(widthDiff/2,"px);"):"","\n                  }\n                }\n              "),"\n          \n        "),void 0,void 0,!0,_this2.style),hasRepeat||_this2.closeBtn.classList.add("adjusted")}};self.addEventListener("resize",(function(){return adjustBtnPosition()})),img.addEventListener("load",(function(){return adjustBtnPosition()}),{once:!0}),this.openModalIntersecting=function(){_this2.openModalIntersecting=function(){},adjustBtnPosition()},this.html=this.closeBtn,this.html=this.style}}},{key:"alt",get:function get(){return this.getAttribute("alt")?this.getAttribute("alt"):""}},{key:"defaultSource",get:function get(){return this.getAttribute("defaultSource")?this.getAttribute("defaultSource"):""}},{key:"sourcesObj",get:function get(){return this.getAttribute("sources")&&Picture.parseAttribute(this.getAttribute("sources"))||null}},{key:"parentNodeShadowRootHost",get:function get(){if(this._parentNodeShadowRootHost)return this._parentNodeShadowRootHost;return this._parentNodeShadowRootHost=function searchShadowRoot(node){return node.root||node.shadowRoot?node:node.parentNode?searchShadowRoot(node.parentNode):node.host?searchShadowRoot(node.host):node}(this.parentNode)},set:function set(node){this._parentNodeShadowRootHost=node}},{key:"mouseEventElement",get:function get(){return this[this.hasAttribute("hover-on-parent-element")?"parentNode":this.hasAttribute("hover-on-parent-shadow-root-host")?"parentNodeShadowRootHost":void 0]}},{key:"style",get:function get(){return this._style||(this._style=((style=document.createElement("style")).setAttribute("protected","true"),style));var style}},{key:"getMedia",value:function getMedia(){return self.matchMedia("(min-width: calc(".concat(this.mobileBreakpoint," + 1px))")).matches?"desktop":"mobile"}}],[{key:"observedAttributes",get:function get(){return["loading","pointer-events"]}},{key:"newUrl",value:function newUrl(path){return new URL(path,"/"===path.charAt(0)?location.origin:"."===path.charAt(0)?importMeta.url.replace(/(.*\/)(.*)$/,"$1"):void 0)}},{key:"pathResolver",value:function pathResolver(path){var a=document.createElement("a");return a.href=path,a.href}}]),Picture}(Object(_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_27__.a)())},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Intersection}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _Shadow_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Intersection=function Intersection(){return function(_ChosenClass){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Intersection,_ChosenClass);var _super=_createSuper(Intersection);function Intersection(){var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Intersection);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];(_this=_super.call.apply(_super,[this,options].concat(args))).isObserving=!1;var intersectionObserverInit=_this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(_this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(_this.intersectionCallback.bind(_assertThisInitialized(_this)),intersectionObserverInit);_this.intersectionObserveStart=function(){_this.isObserving||(intersectionObserver.observe(_assertThisInitialized(_this)),_this.isObserving=!0)},_this.intersectionObserveStop=function(){_this.isObserving&&(intersectionObserver.disconnect(),_this.isObserving=!1)}}else _this.intersectionObserveStart=function(){},_this.intersectionObserveStop=function(){},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){_this.intersectionObserveStart=function(){},_this.intersectionObserveStop=function(){},console.warn("IntersectionObserver got not started, due to missing support!")}return _this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Intersection,[{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(Intersection.prototype),"connectedCallback",this).call(this),this.intersectionObserveStart()}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(Intersection.prototype),"disconnectedCallback",this).call(this),this.intersectionObserveStop()}},{key:"intersectionCallback",value:function intersectionCallback(entries,observer){}}]),Intersection}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(_Shadow_js__WEBPACK_IMPORTED_MODULE_20__.a)())}}}]);