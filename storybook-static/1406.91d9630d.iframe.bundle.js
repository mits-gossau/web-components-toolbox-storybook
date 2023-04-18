"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[1406,1151],{"./src/web-components-toolbox/src/es/components/organisms/body/Body.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Body});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/organisms/body/Body.js",document.baseURI).href};class Body extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.timeout=null,this.clickAnchorEventListener=event=>{var element=null;(element=this.root.querySelector(event&&event.detail&&event.detail.selector.replace(/(.*#)(.*)$/,"#$2")||location.hash||null))&&(this.dispatchEvent(new CustomEvent(this.getAttribute("scroll-to-anchor")||"scroll-to-anchor",{bubbles:!0,cancelable:!0,composed:!0,detail:{child:element}})),element.scrollIntoView({behavior:"smooth"}),clearTimeout(this.timeout),this.timeout=setTimeout((()=>{element.scrollIntoView({behavior:"auto"}),this.dispatchEvent(new CustomEvent(this.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!1,origEvent:event,this:this},bubbles:!0,cancelable:!0,composed:!0}))}),500),self.removeEventListener("hashchange",this.clickAnchorEventListener),location.hash=location.hash.replace("_scrolled","")+"_scrolled",self.addEventListener("hashchange",this.clickAnchorEventListener))}}connectedCallback(){super.connectedCallback(),this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),document.body.addEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorEventListener),location.hash&&(self.addEventListener("load",(event=>this.clickAnchorEventListener({detail:{selector:location.hash.replace("_scrolled","")}})),{once:!0}),document.body.addEventListener(this.getAttribute("wc-config-load")||"wc-config-load",(event=>setTimeout((()=>this.clickAnchorEventListener({detail:{selector:location.hash.replace("_scrolled","")}})),1e3)),{once:!0})),self.addEventListener("hashchange",this.clickAnchorEventListener)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorEventListener),self.removeEventListener("hashchange",this.clickAnchorEventListener)}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!this.main}renderCSS(){this.css='\n      :host {\n        display: flow-root;\n        background-color: var(--background-color, transparent);\n        background-repeat: var(--background-repeat, initial) !important;\n        background-position: var(--background-position, 0);\n        grid-area: body;\n      }\n      :host > main {\n        padding: var(--main-padding, 0);\n      }\n      :host > main > *:not(style):not(script) {\n        display: var(--any-display, block);\n      }\n      :host > main > * {\n        margin: var(--any-content-spacing, var(--content-spacing, unset)) auto;  /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n        width: var(--any-content-width, var(--content-width, 55%));\n      }\n      :host(.content-max-width) > main > *:not(.ignore-max-width), :host> main > *.content-max-width {\n        max-width: var(--content-max-width, none);\n      }\n      :host(.content-max-width-two) > main > *:not(.ignore-max-width), :host > main > *.content-max-width-two {\n        max-width: var(--content-max-width-two, none);\n      }\n      :host >main > *:first-child { /* important: avoid this rule to be extended by BodyStyles Regex: "/s>smain/g" by writing: ">main" */\n        margin-top: var(--any-margin-top-first-child, unset);\n      }\n      :host > main > *.a-emotion-pictures:first-child, :host > main > a-emotion-pictures:first-child, :host > main > m-carousel[namespace=carousel-emotion-]:first-child {\n        margin-top: var(--a-emotion-pictures-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      :host > main > msrc-store-finder:first-child {\n        margin-top: var(--msrc-store-finder-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      :host > main > msrc-store-finder:last-child {\n        margin-bottom: var(--msrc-store-finder-margin-bottom-last-child, 0);\n      }\n      :host > main > a-google-maps:first-child {\n        margin-top: var(--a-google-maps-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host > main {\n          padding: var(--main-padding-mobile, var(--main-padding, 0));\n        }\n        :host > main > * {\n          margin: var(--any-content-spacing-mobile, var(--content-spacing-mobile, var(--content-spacing, unset))) auto; /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n          width: var(--any-content-width-mobile, var(--content-width-mobile, calc(100% - var(--content-spacing-mobile, var(--content-spacing)) * 2)));\n        }\n        :host(.content-max-width) > main > *:not(.ignore-max-width), :host> main > *.content-max-width {\n          max-width: var(--content-max-width-mobile, none);\n        }\n        :host(.content-max-width-two) > main > *:not(.ignore-max-width), :host > main > *.content-max-width-two {\n          max-width: var(--content-max-width-two-mobile, none);\n        }\n       \n        :host >main > *:first-child { /* important: avoid this rule to be extended by BodyStyles Regex: "/s>smain/g" by writing: ">main" */\n          margin-top: var(--any-margin-top-first-child-mobile, unset);\n        }\n        :host > main > *.a-emotion-pictures:first-child, :host > main > a-emotion-pictures:first-child, :host > main > m-carousel[namespace=carousel-emotion-]:first-child {\n          margin-top: var(--a-emotion-pictures-margin-top-first-child-mobile, calc(-1 * var(--content-spacing-mobile, unset)));\n        }\n        :host > main > msrc-store-finder:first-child {\n          margin-top: var(--msrc-store-finder-margin-top-first-child-mobile, calc(-1 * var(--content-spacing-mobile, unset)));\n        }\n        :host > main > msrc-store-finder:last-child {\n          margin-bottom: var(--msrc-store-finder-margin-bottom-last-child-mobile, 0);\n        }\n      }\n    ',this.hasAttribute("no-style-css")||this.importStyles()}importStyles(){this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css")}])}renderHTML(){this.main=this.root.querySelector(this.cssSelector+" > main")||document.createElement("main"),Array.from(this.root.children).forEach((node=>{if(node===this.main||node.getAttribute("slot")||"STYLE"===node.nodeName)return!1;var links=Array.from(node.querySelectorAll("[child-href-target-blank]"));links.length&&this.setLinkTarget(links),this.main.appendChild(node)})),this.html=this.main}setLinkTarget(nodeList){nodeList.forEach((node=>{node.querySelectorAll("a").forEach((href=>{href.setAttribute("target","_blank")}))}))}}},"./src/web-components-toolbox/src/es/components/organisms/bodyStyle/BodyStyle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BodyStyle});var _body_Body_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/organisms/body/Body.js"),_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Intersection.js");class BodyStyle extends((0,_prototypes_Intersection_js__WEBPACK_IMPORTED_MODULE_1__.l)(_body_Body_js__WEBPACK_IMPORTED_MODULE_0__.default)){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{intersectionObserverInit:{}}),...args),this.setAttribute("aria-label","Section")}intersectionCallback(entries,observer){(this.isIntersecting=entries&&entries[0]&&entries[0].isIntersecting)&&this.intersectionShouldComponentRenderCSS()&&(this.hasAttribute("only-render-attribute-to-css")?(this.renderAttributesToCSS(),this.importStyles()):this.renderCSS(),this.intersectionObserveStop())}shouldComponentRenderCSS(){return!1}intersectionShouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!1}renderCSS(){super.renderCSS();var bodyCss=this.css.replace(/\s>\smain/g,"");this.css="",this._css.textContent=bodyCss,this.renderAttributesToCSS(),this.css="\n      :host {\n        display: inline-block !important;\n        width: 100% !important;\n        margin: 0 !important;\n      }\n    ","MAIN"===this.parentNode.tagName||"O-BODY-STYLE"===(this.parentNode.tagName||this.parentNode.host&&this.parentNode.host.tagName)||self.getComputedStyle(this).getPropertyValue("--content-width")&&self.getComputedStyle(this).getPropertyValue("--content-width-mobile")||(this.css="\n        :host > * {\n          width: var(--content-width, calc(100% - var(--content-spacing) * 2));\n        }\n        @media only screen and (max-width: _max-width_) {\n          :host > * {\n            width: var(--content-width-mobile, var(--content-width, calc(100% - var(--content-spacing-mobile, var(--content-spacing)) * 2)));\n          }\n        }\n      ")}renderAttributesToCSS(){var attributesMobile=[],attributesBefore=[],attributesBeforeMobile=[],beforeProps="\n      position: absolute;\n      content: '';\n      pointer-events: none;\n      width: 100%;\n      height: 100%;\n      z-index: 100;\n    ",cssSyntax=function cssSyntax(attribute){var isBefore=arguments.length>2&&void 0!==arguments[2]&&arguments[2],attributeName=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?attribute.name.replace("-mobile",""):attribute.name;return attributeName=isBefore?attributeName.replace("-before",""):attributeName,/-prop$/.test(attributeName)?"".concat(attributeName.replace("-prop",""),":").concat(attribute.value,";"):/-var$/.test(attributeName)?"--".concat(attributeName.replace("-var",""),":").concat(attribute.value,";"):"".concat(attributeName,":").concat(attribute.value,";--").concat(attributeName,":").concat(attribute.value,";")};this.css="\n      :host {\n        ".concat(Array.from(this.attributes).reduce(((acc,attribute)=>!attribute||!attribute.name||!attribute.value||attribute.name.includes("aria")||attribute.name.includes("tabindex")||attribute.name.includes("class")||attribute.name.includes("style")?acc:attribute.name.includes("-before")?(attribute.name.includes("-mobile")?attributesBeforeMobile.push(attribute):attributesBefore.push(attribute),acc):attribute.name.includes("-mobile")?(attributesMobile.push(attribute),acc):"".concat(acc).concat(cssSyntax(attribute))),""),"\n      }\n      ").concat(attributesBefore.length?"\n          :host:before {\n            ".concat(beforeProps,"\n            ").concat(attributesBefore.reduce(((acc,attribute)=>"".concat(acc).concat(cssSyntax(attribute,!1,!0))),""),"\n          }\n        "):"","\n      ").concat(attributesBeforeMobile.length?"\n          @media only screen and (max-width: _max-width_) {\n            :host:before {\n              ".concat(beforeProps,"\n              ").concat(attributesBeforeMobile.reduce(((acc,attribute)=>"".concat(acc).concat(cssSyntax(attribute,!0,!0))),""),"\n            }\n          }\n        "):"","\n      ").concat(attributesMobile.length?"\n          @media only screen and (max-width: _max-width_) {\n            :host {\n              ".concat(attributesMobile.reduce(((acc,attribute)=>"".concat(acc).concat(cssSyntax(attribute,!0))),""),"\n            }\n          }\n        "):"","\n    ")}}},"./src/web-components-toolbox/src/es/components/prototypes/Intersection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Intersection});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),Intersection=function Intersection(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Intersection extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{intersectionObserverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(options,...args),this.isObserving=!1;var intersectionObserverInit=this.getAttribute("intersectionObserverInit")?Intersection.parseAttribute(this.getAttribute("intersectionObserverInit")):options.intersectionObserverInit;try{if(intersectionObserverInit){intersectionObserverInit=Object.assign({root:void 0,rootMargin:"200px 0px 200px 0px",threshold:0},intersectionObserverInit);var intersectionObserver=new IntersectionObserver(this.intersectionCallback.bind(this),intersectionObserverInit);this.intersectionObserveStart=()=>{this.isObserving||(intersectionObserver.observe(this),this.isObserving=!0)},this.intersectionObserveStop=()=>{this.isObserving&&(intersectionObserver.disconnect(),this.isObserving=!1)}}else this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing options.intersectionObserverInit. At least supply an empty object to activate the observer with the default settings!")}catch(error){this.intersectionObserveStart=()=>{},this.intersectionObserveStop=()=>{},console.warn("IntersectionObserver got not started, due to missing support!")}}connectedCallback(){super.connectedCallback(),this.intersectionObserveStart()}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserveStop()}intersectionCallback(entries,observer){}}}}}]);