"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[527],{"./src/web-components-toolbox/src/es/components/atoms/picture/Picture.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Picture});var _prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/picture/Picture.js",document.baseURI).href};class Picture extends((0,_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_0__.l)()){static get observedAttributes(){return["loading","pointer-events"]}constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{intersectionObserverInit:{}}),...args),this.clickListener=event=>{this.hasAttribute("open")||event.stopPropagation(),this.dispatchEvent(new CustomEvent(this.getAttribute("open-modal")||"open-modal",{detail:{origEvent:event,child:this},bubbles:!0,cancelable:!0,composed:!0}))},this.mouseoverListener=event=>{this.picture.classList.add("hover")},this.mouseoutListener=event=>{this.picture.classList.remove("hover")}}connectedCallback(){super.connectedCallback(),this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.hasAttribute("open-modal")&&(this.setAttribute("aria-haspopup","true"),this.addEventListener("click",this.clickListener)),this.mouseEventElement&&(this.mouseEventElement.addEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.addEventListener("mouseout",this.mouseoutListener))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("open-modal")&&this.removeEventListener("click",this.clickListener),this.mouseEventElement&&(this.mouseEventElement.removeEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.removeEventListener("mouseout",this.mouseoutListener),this.parentNodeShadowRootHost=null)}attributeChangedCallback(name,oldValue,newValue){this.img&&("loading"===name&&this.img?this.img.setAttribute(name,newValue):"pointer-events"===name&&(this.css="\n          :host picture img {\n            pointer-events: ".concat(newValue,";\n          }\n        ")))}intersectionCallback(entries,observer){(this.isIntersecting=entries&&entries[0]&&entries[0].isIntersecting)&&(this.intersecting(),this.openModalIntersecting())}intersecting(){}openModalIntersecting(){}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!this.picture}renderCSS(){switch(this.css="\n      :host {\n        overflow: var(--host-overflow, initial);\n      }\n      :host picture {\n        display: var(--display, inline); /* don't use flex here, it can have strange side effects */\n      }\n      :host picture img {\n        aspect-ratio: ".concat(this.hasAttribute("aspect-ratio")?"1/".concat(this.getAttribute("aspect-ratio")):"var(--aspect-ratio, auto)",";\n        border-radius: var(--border-radius, 0);\n        display: var(--img-display, block);\n        filter: var(--filter, none);\n        height: var(--img-height, auto);\n        image-rendering: var(--image-rendering, -webkit-optimize-contrast); /* fix blurred image on webkit: https://www.betriebsrestaurants-migros.ch/landingpages/swissgrid/info-menuplan/ */\n        margin: var(--img-margin, auto);\n        max-height: var(--img-max-height, 75vh);\n        max-width: var(--img-max-width, 100%); /* max-content would have been nice to not scale up the image, but in general make the editor use big enough images and this must stay at 100% default value, otherwise there are several side effects */\n        min-height: var(--img-min-height, unset);\n        min-width: var(--img-min-width, unset);\n        object-fit: var(--img-object-fit, contain); /* cover does not render the same on IOS */\n        opacity: 0;\n        overflow: var(--overflow, auto);\n        position: var(--position, static);\n        transform: var(--transform, none);\n        transition: var(--transition, none);\n        vertical-align: middle; /* use middle to avoid having a gap at the bottom of the image https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image */\n        width: var(--img-width, max-content);\n        z-index: var(--z-index, auto);\n      }\n      :host([loaded]) picture img {\n        animation: var(--appear, appear .3s ease-out);\n        opacity: 1;\n      }\n      :host picture img:hover, :host picture.hover img {\n        filter: var(--filter-hover, var(--filter, none));\n        transform: var(--transform-hover, var(--transform, none));\n      }\n      /* modal stuff */\n      ").concat(this.hasAttribute("no-modal-icon")?"\n          :host([open-modal]) {\n            cursor: pointer;\n          }\n          :host([open-modal]) > .close-btn {\n            display: none;\n            background-color: var(--close-btn-background-color, var(--color-secondary, var(--background-color)));\n          }\n        ":"\n          :host([open-modal]) {\n            display: block !important; /* must be display block for adjustBtnPosition calculations of this.getBoundingClientRect */\n            cursor: pointer;\n            position: relative;\n          }\n          :host([open-modal][open]) > .close-btn.adjusted {\n            display: none;\n          }\n          :host([open-modal][loaded]:not([open])) > .close-btn.adjusted {\n            display: flex;\n            animation: var(--close-btn-appear, appear .3s ease-out);\n          }\n          :host([open-modal]) > .close-btn {\n            background-color: var(--close-btn-background-color, var(--color-secondary, var(--background-color)));\n            border-radius: 50%;\n            border: 0;\n            box-sizing: border-box;\n            cursor: pointer;\n            display: none;\n            align-items: center;\n            justify-content: center;\n            height: 7px;\n            padding: 0.75em;\n            width: 7px;\n            position: absolute;\n            right: calc(var(--close-btn-right, var(--content-spacing)) / 2);\n            bottom: calc(var(--close-btn-bottom, var(--content-spacing)) / 2);\n          }\n          :host([open-modal]) > .close-btn > span {\n            height: 22px;\n            width: 22px;\n          }\n        ","\n      @media only screen and (max-width: _max-width_) {\n        :host picture img {\n          border-radius: var(--border-radius-mobile, 0);\n          filter: var(--filter-mobile, var(--filter, none));\n          height: var(--img-height-mobile, var(--img-height, auto));\n          margin: var(--img-margin-mobile, var(--img-margin, auto));\n          transform: var(--transform-mobile, var(--transform, none));\n          transition: var(--transition-mobile, var(--transition, none));\n          width: var(--img-width-mobile, var(--img-width, 100%));\n        }\n        :host picture img:hover, :host picture.hover img {\n          filter: var(--filter-mobile-hover, var(--filter-hover, var(--filter, none)));\n          transform: var(--transform-mobile-hover, var(--transform-hover, var(--transform, none)));\n        }\n        /* modal stuff */\n        :host(:not([open-modal-mobile])) {\n          cursor: auto;\n          position: static;\n        }\n        :host(:not([open-modal-mobile])) > .close-btn.adjusted {\n          display: none !important;\n        }\n        :host([open-modal-mobile]) > .close-btn {\n          right: calc(var(--close-btn-right-mobile, var(--close-btn-right, var(--content-spacing-mobile, var(--content-spacing)))) / 2);\n          bottom: calc(var(--close-btn-bottom-mobile, var(--close-btn-bottom, var(--content-spacing-mobile, var(--content-spacing)))) / 2);\n        }\n      }\n      @keyframes appear {\n        0%{opacity: 0}\n        100%{opacity: 1}\n      }\n    "),this.getAttribute("namespace")){case"picture-overflow-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./overflow-/overflow-.css"),namespace:!1}]);case"picture-overflow-scale-up-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./overflow-scale-up-/overflow-scale-up-.css"),namespace:!1}]);case"picture-scale-up-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./scale-up-/scale-up-.css"),namespace:!1}]);case"picture-teaser-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./teaser-/teaser-.css"),namespace:!1}]);case"picture-store-logo-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./store-logo-/store-logo-.css"),namespace:!1}]);case"picture-cover-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./cover-/cover-.css"),namespace:!1}])}}renderHTML(){var _this=this;if(this.html=this.picture=this.root.querySelector("picture")||document.createElement("picture"),this.sources=[],Array.from(this.root.children).forEach((node=>{"IMG"===node.nodeName?(node.setAttribute("data-src",Picture.pathResolver(node.getAttribute("src"))),node.removeAttribute("src"),this.img=node):"SOURCE"===node.nodeName&&(node.setAttribute("data-srcset",Picture.pathResolver(node.getAttribute("srcset"))),node.removeAttribute("srcset"),this.sources.push(node))})),this.defaultSource&&(this.img=document.createElement("img"),this.img.setAttribute("data-src",Picture.pathResolver(this.defaultSource)),this.img.setAttribute("alt",this.alt),""===this.alt&&console.warn("a-picture alt is missing",this)),!this.img)return console.warn("At Picture... no <img> nor a defaultSource was supplied: ",this);if(this.img.setAttribute("decoding","async"),this.setAttribute("loading",this.hasAttribute("picture-load")?"eager":this.getAttribute("loading")||"lazy"),this.sourcesObj){var div=document.createElement("div");this.sourcesObj.forEach((i=>{if(""!==i.src&&""!==i.type&&""!==i.size)switch(i.size){case"small":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(max-width: 400px)">');break;case"medium":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(min-width: 401px) and (max-width: 600px)">');break;case"large":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(min-width: 601px) and (max-width: 1200px)">');break;case"extra-large":div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'" media="(min-width: 1201px)">');break;default:div.innerHTML+='<source data-srcset="'.concat(i.src,'" type="').concat(i.type,'">')}else console.warn("a-picture src - missing attributes: ".concat(""===i.src?"src":""," ").concat(""===i.type?"type":""," ").concat(""===i.size?"size":""))})),Array.from(div.children).forEach((node=>this.sources.push(node)))}if(!this.sources.length){var naturalWidth,src=Picture.newUrl(this.img.getAttribute("data-src"));if(naturalWidth=src.searchParams.get(this.hasAttribute("query-width")?this.getAttribute("query-width"):"width")){this.img.naturalWidth&&(naturalWidth=this.img.naturalWidth),src.searchParams.delete(this.hasAttribute("query-height")?this.getAttribute("query-height"):"height"),src.searchParams.get(this.hasAttribute("query-format")?this.getAttribute("query-format"):"format")&&src.searchParams.set(this.hasAttribute("query-format")?this.getAttribute("query-format"):"format","webp"),src.searchParams.get(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality")&&src.searchParams.set(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality","80");for(var width=50,prevWidth=0,nextWidth=0;width<naturalWidth;){(nextWidth=width+50<naturalWidth?width+50:0)?src.searchParams.set(this.hasAttribute("query-width")?this.getAttribute("query-width"):"width",String(width)):src.searchParams.delete(this.hasAttribute("query-width")?this.getAttribute("query-width"):"width");var source=document.createElement("source");source.setAttribute("data-srcset",src.href),src.searchParams.get(this.hasAttribute("query-format")?this.getAttribute("query-format"):"format")&&source.setAttribute("type","image/webp"),source.setAttribute("media","".concat(prevWidth?"(min-width: ".concat(prevWidth+1,"px)"):"").concat(prevWidth&&nextWidth?" and ":"").concat(nextWidth?"(max-width: ".concat(width,"px)"):"")),this.sources.push(source),prevWidth=width,width+=50}}}var img=this.img;if("eager"===this.getAttribute("loading")){var _src=Picture.newUrl(this.img.getAttribute("data-src"));_src.searchParams.get(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality")&&(this.sources.forEach((source=>{var newSource=source.cloneNode(),src=Picture.newUrl(source.getAttribute("data-srcset"));src.searchParams.set(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality","0"),this.picture.appendChild(newSource),newSource.setAttribute("srcset",src.href)})),img.setAttribute("decoding","sync"),img=this.img.cloneNode(),_src.searchParams.set(this.hasAttribute("query-quality")?this.getAttribute("query-quality"):"quality","0"),img.setAttribute("data-src",_src.href),this.picture.appendChild(img),img.setAttribute("src",img.getAttribute("data-src")),img.addEventListener("load",(event=>this.setAttribute("loaded-bad-quality","true")),{once:!0}),img.addEventListener("error",(event=>this.setAttribute("loaded-bad-quality","false")),{once:!0}),this.intersecting=()=>{this.intersecting=()=>{},this.intersectionObserveStop();var picture=document.createElement("picture");this.sources.forEach((source=>{picture.appendChild(source),source.setAttribute("srcset",source.getAttribute("data-srcset"))})),picture.appendChild(this.img),this.img.setAttribute("src",this.img.getAttribute("data-src"));var replaceImg=event=>{this.css="\n              :host {\n                --show: none;\n                --appear: none;\n              }\n            ",this.picture.replaceWith(picture),this.picture=picture};this.img.addEventListener("load",replaceImg,{once:!0}),img.addEventListener("error",replaceImg,{once:!0})},this.isIntersecting&&this.intersecting())}if(img===this.img&&(this.intersecting=()=>{this.intersecting=()=>{},this.intersectionObserveStop(),this.sources.forEach((source=>{this.picture.appendChild(source),source.setAttribute("srcset",source.getAttribute("data-srcset"))})),this.picture.appendChild(this.img),this.img.setAttribute("src",this.img.getAttribute("data-src"))},(this.isIntersecting||"eager"===this.getAttribute("loading"))&&this.intersecting()),img.addEventListener("load",(event=>this.setAttribute("loaded","true")),{once:!0}),img.addEventListener("error",(event=>this.setAttribute("loaded","false")),{once:!0}),this.hasAttribute("picture-load")&&(img.addEventListener("load",(event=>{this.dispatchEvent(new CustomEvent(this.getAttribute("picture-load")||"picture-load",{detail:{origEvent:event,child:this,img:this.img,picture:this.picture},bubbles:!0,cancelable:!0,composed:!0}))}),{once:!0}),img.addEventListener("error",(event=>{this.dispatchEvent(new CustomEvent(this.getAttribute("picture-load")||"picture-load",{detail:{error:event},bubbles:!0,cancelable:!0,composed:!0}))}),{once:!0})),this.hasAttribute("open-modal")){this.closeBtn=document.createElement("button"),this.closeBtn.innerHTML='\n        <span>\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Untitled-Seite%201" viewBox="0 0 22 22" style="background-color:#ffffff00" version="1.1" xml:space="preserve" x="0px" y="0px" width="22px" height="22px">\n            <g>\n              <path d="M 15 10 L 15 12 L 7 12 L 7 10 L 15 10 Z" fill="#ffffff"/>\n              <path d="M 12 15 L 10 15 L 10 7 L 12 7 L 12 15 Z" fill="#ffffff"/>\n            </g>\n          </svg>\n        </span>\n      ',this.closeBtn.classList.add("close-btn");var adjustBtnPosition=function adjustBtnPosition(){var hasRepeat=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(_this.style.textContent="",_this.isConnected&&("mobile"!==_this.getMedia()||_this.hasAttribute("open-modal-mobile"))&&(hasRepeat&&setTimeout((()=>self.requestAnimationFrame((timeStamp=>adjustBtnPosition(!1)))),1e3),"function"==typeof _this.getBoundingClientRect&&_this.getBoundingClientRect().width&&_this.getBoundingClientRect().height&&_this.img&&"function"==typeof _this.img.getBoundingClientRect&&_this.img.getBoundingClientRect().width&&_this.img.getBoundingClientRect().height)){var widthDiff=_this.getBoundingClientRect().width-_this.img.getBoundingClientRect().width,heightDiff=_this.getBoundingClientRect().height-_this.img.getBoundingClientRect().height;(widthDiff>0||heightDiff>0)&&_this.setCss("\n          ".concat("desktop"===_this.getMedia()?"\n                :host([open-modal]) > .close-btn {\n                  ".concat(heightDiff>0?"bottom: calc(var(--close-btn-bottom, var(--content-spacing)) / 2 + ".concat(heightDiff,"px);"):"","\n                  ").concat(widthDiff>0?"right: calc(var(--close-btn-right, var(--content-spacing)) / 2 + ".concat(widthDiff/2,"px);"):"","\n                }\n              "):"\n                @media only screen and (max-width: _max-width_) {\n                  :host([open-modal-mobile]) > .close-btn {\n                    ".concat(heightDiff>0?"bottom: calc(var(--close-btn-bottom-mobile, var(--close-btn-bottom, var(--content-spacing-mobile, var(--content-spacing)))) / 2 + ".concat(heightDiff,"px);"):"","\n                    ").concat(widthDiff>0?"right: calc(var(--close-btn-right-mobile, var(--close-btn-right, var(--content-spacing-mobile, var(--content-spacing)))) / 2 + ".concat(widthDiff/2,"px);"):"","\n                  }\n                }\n              "),"\n          \n        "),void 0,void 0,!0,_this.style),hasRepeat||_this.closeBtn.classList.add("adjusted")}};self.addEventListener("resize",(()=>adjustBtnPosition())),img.addEventListener("load",(()=>adjustBtnPosition()),{once:!0}),this.openModalIntersecting=()=>{this.openModalIntersecting=()=>{},adjustBtnPosition()},this.html=this.closeBtn,this.html=this.style}}get alt(){return this.getAttribute("alt")?this.getAttribute("alt"):""}get defaultSource(){return this.getAttribute("defaultSource")?this.getAttribute("defaultSource"):""}get sourcesObj(){return this.getAttribute("sources")&&Picture.parseAttribute(this.getAttribute("sources"))||null}get parentNodeShadowRootHost(){if(this._parentNodeShadowRootHost)return this._parentNodeShadowRootHost;var searchShadowRoot=node=>node.root||node.shadowRoot?node:node.parentNode?searchShadowRoot(node.parentNode):node.host?searchShadowRoot(node.host):node;return this._parentNodeShadowRootHost=searchShadowRoot(this.parentNode)}set parentNodeShadowRootHost(node){this._parentNodeShadowRootHost=node}get mouseEventElement(){return this[this.hasAttribute("hover-on-parent-element")?"parentNode":this.hasAttribute("hover-on-parent-shadow-root-host")?"parentNodeShadowRootHost":void 0]}get style(){return this._style||(this._style=((style=document.createElement("style")).setAttribute("protected","true"),style));var style}getMedia(){return self.matchMedia("(min-width: calc(".concat(this.mobileBreakpoint," + 1px))")).matches?"desktop":"mobile"}static newUrl(path){return new URL(path,"/"===path.charAt(0)?location.origin:"."===path.charAt(0)?importMeta.url.replace(/(.*\/)(.*)$/,"$1"):void 0)}static pathResolver(path){var a=document.createElement("a");return a.href=path,a.href}}},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Intersection});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),Intersection=function Intersection(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Intersection extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(options,...args),this.isObserving=!1;var intersectionObserverInit=this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(this.intersectionCallback.bind(this),intersectionObserverInit);this.intersectionObserveStart=()=>{this.isObserving||(intersectionObserver.observe(this),this.isObserving=!0)},this.intersectionObserveStop=()=>{this.isObserving&&(intersectionObserver.disconnect(),this.isObserving=!1)}}else this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing support!")}}connectedCallback(){super.connectedCallback(),this.intersectionObserveStart()}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserveStop()}intersectionCallback(entries,observer){}}}}}]);