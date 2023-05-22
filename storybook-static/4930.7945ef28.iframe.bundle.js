"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[4930,1352],{"./src/web-components-toolbox/src/es/components/molecules/teaser/Teaser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Teaser});var _prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/teaser/Teaser.js",document.baseURI).href};class Teaser extends((0,_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_0__.l)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({importMetaUrl:importMeta.url,intersectionObserverInit:{rootMargin:"0px 0px 0px 0px"}},options),...args),this.setAttribute("role","figure"),this.hasAttribute("href")&&(this.setAttribute("data-href",this.getAttribute("href")),this.setAttribute("role","link")),this.mouseoverListener=event=>{this.aArrow&&this.aArrow.setAttribute("hover","true")},this.mouseoutListener=event=>{this.aArrow&&this.aArrow.setAttribute("hover","")}}connectedCallback(){super.connectedCallback(),this.hidden=!0;var showPromises=[];this.shouldRenderCSS()&&showPromises.push(this.renderCSS()),this.aPicture&&this.aPicture.hasAttribute("picture-load")&&!this.aPicture.hasAttribute("loaded")&&showPromises.push(new Promise((resolve=>this.addEventListener("picture-load",(event=>resolve()),{once:!0})))),Promise.all(showPromises).then((()=>{this.hasAttribute("no-figcaption-bg-color-equal")||self.requestAnimationFrame((timeStamp=>{var figcaption,figcaptionBackgroundColor;!(figcaption=this.root.querySelector("figcaption"))||(figcaptionBackgroundColor=self.getComputedStyle(figcaption).getPropertyValue("--".concat(this.namespace||"","figcaption-background-color")).trim())!==self.getComputedStyle(this).getPropertyValue("--background-color").trim()&&"transparent"!==figcaptionBackgroundColor?this.removeAttribute("figcaption-bg-color-equal"):this.setAttribute("figcaption-bg-color-equal",!0)})),this.checkIfLink(),this.hidden=!1})),this.addEventListener("click",this.clickListener),"teaser-overlay-"===this.getAttribute("namespace")&&(this.addEventListener("mouseover",this.mouseoverListener),this.addEventListener("mouseout",this.mouseoutListener))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.clickListener),"teaser-overlay-"===this.getAttribute("namespace")&&(this.removeEventListener("mouseover",this.mouseoverListener),this.removeEventListener("mouseout",this.mouseoutListener))}intersectionCallback(entries,observer){this.classList[entries[0]&&entries[0].isIntersecting?"add":"remove"]("intersecting")}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}renderCSS(){return"teaser-overlay-"===this.getAttribute("namespace")&&this.aArrow&&this.aArrow.setAttribute("hover-set-by-outside",""),this.css="\n      :host([href]) {\n        cursor: pointer;\n      }\n      :host figure {\n        display: var(--display, flex);\n        background-color: var(--background-color, transparent);\n        border-radius: var(--border-radius, 0);\n        flex-direction: var(--flex-direction, column);\n        align-items: var(--align-items, flex-start);\n        justify-content: var(--justify-content, space-between);\n        margin: var(--margin, 0);\n        padding: var(--padding, 0);\n        height: var(--height, 100%);\n        width: var(--width, 100%);\n        overflow: var(--overflow, visible);\n        position: var(--position, static);\n        overflow: hidden;\n      }\n      :host figure a-picture, :host figure m-picture-with-picture {\n        height: var(--a-picture-height, auto);\n        margin: var(--a-picture-margin, 0);\n        width: var(--a-picture-width, 100%);\n        transition: var(--a-picture-transition, none);\n        transform: var(--a-picture-transform, none);\n      }\n      :host(:hover) figure a-picture, :host(:hover) figure m-picture-with-picture {\n        transform: var(--a-picture-transform-hover, var(--a-picture-transform, none));\n      }\n      :host figure figcaption {\n        border-radius: var(--figcaption-border-radius, var(--border-radius, 0));\n        display: var(--figcaption-display, block);\n        flex-direction: var(--figcaption-flex-direction, row);\n        justify-content: var(--figcaption-justify-content, normal);\n        align-items: var(--figcaption-align-items, normal);\n        align-self: var(--figcaption-align-self, auto);\n        background-color: var(--figcaption-background-color, transparent);\n        margin: var(--figcaption-margin, 0);\n        padding: var(--figcaption-padding, 1em);\n        font-size: var(--figcaption-font-size, 1em);\n        flex-grow: var(--figcaption-flex-grow, 1);\n        height: var(--figcaption-height, 100%);\n        width: var(--figcaption-width, 100%);\n        transition: var(--figcaption-transition, none);\n        transform: var(--figcaption-transform, none);\n      }\n      :host(:hover) figure figcaption {\n        background-color: var(--figcaption-background-color-hover, var(--figcaption-background-color, transparent));\n      }\n      :host(:hover) figure a-picture ~ figcaption, :host(:hover) figure m-picture-with-picture ~ figcaption {\n        background-color: var(--a-picture-figcaption-background-color-hover, var(--figcaption-background-color-hover, var(--figcaption-background-color, transparent)));\n      }\n      :host([figcaption-bg-color-equal=true]) figure figcaption {\n        padding: var(--figcaption-bg-color-equal-padding, var(--figcaption-padding, 1em 0));\n      }\n      :host(:hover) figure figcaption {\n        transform: var(--figcaption-transform-hover, none);\n      }\n      :host figure figcaption * {\n        color: var(--figcaption-color, var(--color, unset));\n      }\n      :host figure figcaption h2, :host figure figcaption h6 {\n        color: var(--h2-figcaption-color, var(--h6-figcaption-color, var(--figcaption-color, var(--color, unset))));\n      }\n      :host(:hover) figure figcaption * {\n        color: var(--figcaption-color-hover, var(--figcaption-color, var(--color, unset)));\n      }\n      :host(:hover) figure figcaption h2, :host(:hover) figure figcaption h6 {\n        color: var(--h2-figcaption-color-hover, var(--h6-figcaption-color-hover, var(--figcaption-color-hover, var(--h2-figcaption-color, var(--h6-figcaption-color, var(--figcaption-color, var(--color, unset)))))));\n      }\n      :host figure figcaption > * {\n        transition: var(--figcaption-any-transition, none);\n        transform: var(--figcaption-any-transform, none);\n        transform-origin: var(--figcaption-any-transform-origin, unset);\n        opacity: var(--figcaption-any-opacity, 1);\n      }\n      :host(.intersecting) figure figcaption > * {\n        transition: var(--intersecting-figcaption-any-transition, var(--figcaption-any-transition, color 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out));\n        transform: var(--intersecting-figcaption-any-transform, var(--figcaption-any-transform, none));\n        opacity: var(--intersecting-figcaption-any-opacity, var(--figcaption-any-opacity, 1));\n      }\n      :host figure figcaption a-link, :host(.intersecting) figure figcaption a-link {\n        position: var(--a-link-position, static);\n        top: var(--a-link-top, auto);\n        bottom: var(--a-link-bottom, auto);\n        transition: var(--a-link-transition, none);\n        transform: var(--a-link-transform, none);\n        opacity: var(--a-link-opacity, 1);\n      }\n      :host(:hover) figure figcaption a-link {\n        transform: var(--a-link-transform-hover, none);\n        opacity: var(--a-link-opacity-hover, 1);\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host figure {\n          border-radius: var(--border-radius-mobile, var(--border-radius, 0));\n        }\n        :host figure figcaption {\n          border-radius: var(--figcaption-border-radius-mobile, var(--border-radius-mobile, var(--figcaption-border-radius, var(--border-radius, 0))));\n        }\n      }\n    ",this.fetchTemplate()}fetchTemplate(){var styles=[{path:"".concat(this.importMetaUrl,"../../../../css/reset.css"),namespace:!1},{path:"".concat(this.importMetaUrl,"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("namespace")){case"teaser-tile-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./tile-/tile-.css"),namespace:!1},...styles],!1);case"teaser-tile-text-center-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./tile-/tile-.css"),namespace:!1,replaces:[{pattern:"--teaser-tile-",flags:"g",replacement:"--teaser-tile-text-center-"}]},{path:"".concat(this.importMetaUrl,"./tile-text-center-/tile-text-center-.css"),namespace:!1},...styles],!1);case"teaser-tile-rounded-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./tile-/tile-.css"),namespace:!1,replaces:[{pattern:"--teaser-tile-",flags:"g",replacement:"--teaser-tile-rounded-"}]},{path:"".concat(this.importMetaUrl,"./tile-rounded-/tile-rounded-.css"),namespace:!1},...styles],!1);case"teaser-overlay-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./overlay-/overlay-.css"),namespace:!1},...styles],!1);case"teaser-overlay-top-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./overlay-top-/overlay-top-.css"),namespace:!1},...styles],!1);case"teaser-download-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./download-/download-.css"),namespace:!1},...styles],!1);case"teaser-round-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./round-/round-.css"),namespace:!1},...styles],!1);case"teaser-plain-":return this.fetchCSS([{path:"".concat(this.importMetaUrl,"./plain-/plain-.css"),namespace:!1},...styles],!1);default:return this.fetchCSS(styles,!1)}}checkIfLink(){if(this.hasAttribute("href")&&this.parentNode){var a=document.createElement("a");Array.from(this.attributes).forEach((attribute=>{attribute.name.includes("hidden")||a.setAttribute(attribute.name,attribute.value)})),a.hasAttribute("id")&&this.removeAttribute("id"),a.setAttribute("wrapper",""),a.style.color="inherit",a.style.textDecoration="inherit",this.parentNode.replaceChild(a,this),a.appendChild(this),this.checkIfLink=()=>{}}}get aPicture(){return this.root.querySelector("a-picture")}get aArrow(){return this.root.querySelector("a-arrow")}}},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Intersection});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),Intersection=function Intersection(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Intersection extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(options,...args),this.isObserving=!1;var intersectionObserverInit=this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(this.intersectionCallback.bind(this),intersectionObserverInit);this.intersectionObserveStart=()=>{this.isObserving||(intersectionObserver.observe(this),this.isObserving=!0)},this.intersectionObserveStop=()=>{this.isObserving&&(intersectionObserver.disconnect(),this.isObserving=!1)}}else this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing support!")}}connectedCallback(){super.connectedCallback(),this.intersectionObserveStart()}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserveStop()}intersectionCallback(entries,observer){}}}}}]);