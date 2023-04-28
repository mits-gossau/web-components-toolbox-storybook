"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[4676,6681],{"./src/web-components-toolbox/src/es/components/atoms/button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Button});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/button/Button.js",document.baseURI).href};class Button extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){static get observedAttributes(){return["label","disabled"]}constructor(){var _this;super(...arguments),_this=this,this.buttonTagName=this.hasAttribute("href")?"a":"button",this.clickListener=event=>{this.hasAttribute("disabled")&&event.preventDefault(),this.getAttribute("request-event-name")&&(this.button.classList.toggle("active"),this.button.setAttribute("aria-pressed",this.button.classList.contains("active")),this.dispatchEvent(new CustomEvent(this.getAttribute("request-event-name"),{detail:{origEvent:event,tags:[this.getAttribute("tag")],isActive:this.button.classList.contains("active"),fetchSubTags:this.hasAttribute("fetch-sub-tags"),clearSubTags:this.hasAttribute("clear-sub-tags"),this:this,textContent:this.label.textContent},bubbles:!0,cancelable:!0,composed:!0})))},this.answerEventListener=function(){var _ref=_asyncToGenerator((function*(event){var tags=event.detail.tags;if(_this.getAttribute("active-detail-property-name")&&(tags=yield _this.getAttribute("active-detail-property-name").split(":").reduce(function(){var _ref2=_asyncToGenerator((function*(accumulator,propertyName){return propertyName=propertyName.replace(/-([a-z]{1})/g,((match,p1)=>p1.toUpperCase())),accumulator instanceof Promise&&(accumulator=yield accumulator),accumulator[propertyName]}));return function(_x2,_x3){return _ref2.apply(this,arguments)}}(),event.detail)),tags){var tagsIncludesTag=_this.hasAttribute("tag-search")?tags.some((tag=>tag.includes(_this.getAttribute("tag-search")))):tags.includes(_this.getAttribute("tag"));_this.button.classList[tagsIncludesTag?"add":"remove"]("active")}_this.button.setAttribute("aria-pressed",_this.button.classList.contains("active"))}));return function(_x){return _ref.apply(this,arguments)}}(),this.hasAttribute("href")&&(this.setAttribute("data-href",this.getAttribute("href")),this.setAttribute("role","link")),this.textContent.length&&(this.labelText=this.textContent.trim(),this.textContent=""),this.mouseoverListener=event=>{this.button.classList.add("hover")},this.mouseoutListener=event=>{this.button.classList.remove("hover")}}connectedCallback(){this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML(),this.button.addEventListener("click",this.clickListener),this.getAttribute("answer-event-name")&&document.body.addEventListener(this.getAttribute("answer-event-name"),this.answerEventListener),this.attributeChangedCallback("disabled"),this.mouseEventElement&&(this.mouseEventElement.addEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.addEventListener("mouseout",this.mouseoutListener))}disconnectedCallback(){this.button.removeEventListener("click",this.clickListener),this.getAttribute("answer-event-name")&&document.body.removeEventListener(this.getAttribute("answer-event-name"),this.answerEventListener),this.mouseEventElement&&(this.mouseEventElement.removeEventListener("mouseover",this.mouseoverListener),this.mouseEventElement.removeEventListener("mouseout",this.mouseoutListener),this.parentNodeShadowRootHost=null)}attributeChangedCallback(name,oldValue,newValue){"label"===name?(this.labelText=newValue,this.label&&(this.label.textContent=this.labelText||"",this.label.classList[this.labelText?"remove":"add"]("hide"))):this.button&&"disabled"===name&&(this.hasAttribute("disabled")?this.button.setAttribute("disabled",""):this.button.removeAttribute("disabled"),this.hasAttribute("aria-disabled")?this.button.setAttribute("aria-disabled","true"):this.button.removeAttribute("aria-disabled"))}shouldRenderCSS(){return!this.root.querySelector("style[_css]")}shouldRenderHTML(){return!this.button||!this.label}renderCSS(){this.css="\n      :host {\n        cursor: unset !important;\n        display: inline-block;\n      }\n      ".concat(this.buttonTagName," {\n        align-items: center;\n        background-color: var(--background-color, transparent);\n        border-radius: var(--border-radius, 0.5em);\n        border: var(--border-width, 0px) solid var(--border-color, transparent);\n        color: var(--color, black);\n        cursor: pointer;\n        display: flex;\n        font-family: var(--font-family, unset);\n        font-size: var(--font-size, 1em);\n        font-weight: var(--font-weight, 400);\n        justify-content: var(--justify-content, center);\n        letter-spacing: var(--letter-spacing, normal);\n        line-height: var(--line-height, 1.5em);\n        margin: var(--margin, auto);\n        opacity: var(--opacity, 1);\n        outline: var(--outline, none);\n        overflow: hidden;\n        padding: var(--padding, calc(0.75em - var(--border-width, 0px)) calc(1.5em - var(--border-width, 0px)));\n        text-decoration: var(--text-decoration, none);\n        text-transform: var(--text-transform, none);\n        touch-action: manipulation;\n        transition: var(--transition, background-color 0.3s ease-out, border-color 0.3s ease-out, color 0.3s ease-out);\n        width: var(--width, auto);\n      }\n      :host a {\n        width: var(--width, fit-content);\n      }\n      ").concat(this.buttonTagName,":hover, ").concat(this.buttonTagName,".hover {\n        background-color: var(--background-color-hover, var(--background-color, #B24800));\n        border: var(--border-width-hover, var(--border-width, 0px)) solid var(--border-color-hover, var(--border-color, #FFFFFF));\n        color: var(--color-hover, var(--color, #FFFFFF));\n        opacity: var(--opacity-hover, var(--opacity, 1));\n      }\n      ").concat(this.buttonTagName,":active, ").concat(this.buttonTagName,".active {\n        background-color: var(--background-color-active, var(--background-color-hover, var(--background-color, #803300)));\n        color: var(--color-active, var(--color-hover, var(--color, #FFFFFF)));\n      }\n      :host ").concat(this.buttonTagName,"[disabled] {\n        border: var(--border-width-disabled, var(--border-width, 0px)) solid var(--border-color-disabled, var(--border-color, #FFFFFF));\n        background-color: var(--background-color-disabled, var(--background-color, #FFDAC2));\n        color: var(--color-disabled, var(--color, #FFFFFF));\n        cursor: not-allowed;\n        opacity: var(--opacity-disabled, var(--opacity, 1));\n        transition: opacity 0.3s ease-out;\n      }\n      :host ").concat(this.buttonTagName,"[disabled]:hover, :host ").concat(this.buttonTagName,"[disabled].hover {\n        opacity: var(--opacity-disabled-hover, var(--opacity-disabled, var(--opacity, 1)));\n      }\n      #label {\n        display: inline-block;\n        position: relative;\n        text-align: var(--label-text-align, center);\n      }\n      #label.hide {\n        display: none;\n      }\n      .icon-left {\n        margin: var(--icon-left-margin, 0 0.5em 0 0);\n      }\n      .icon-right {\n        margin: var(--icon-right-margin, 0 0 0 0.5em);\n      }\n      .icon-left, .icon-right {\n        height: var(--icon-height, 1.5em);\n        width: var(--icon-width, auto);\n      }\n      .icon-left, .icon-right {\n        flex-shrink: 0;\n      }\n      @media only screen and (max-width: _max-width_) {\n        ").concat(this.buttonTagName," {\n          font-size: var(--font-size-mobile, var(--font-size, 1em));\n          margin: var(--margin-mobile, var(--margin, auto));\n          border-radius: var(--border-radius-mobile, var(--border-radius, 0.571em));\n        }\n        ").concat(this.buttonTagName,":hover, ").concat(this.buttonTagName,".hover {\n          background-color: var(--background-color-hover-mobile, var(--background-color-hover, var(--background-color, #B24800)));\n          color: var(--color-hover-mobile, var(--color-hover, var(--color, #FFFFFF)));\n        }\n        ").concat(this.buttonTagName,":active, ").concat(this.buttonTagName,".active {\n          background-color: var(--background-color-active-mobile, var(--background-color-active, var(--background-color-hover, var(--background-color, #803300))));\n          color: var(--color-active-mobile, var(--color-active, var(--color-hover, var(--color, #FFFFFF))));\n        }\n        .icon-left {\n          margin: var(--icon-left-margin-mobile, var(--icon-left-margin, 0 0.5em 0 0));\n        }\n        .icon-right {\n          margin: var(--icon-right-margin-mobile, var(--icon-right-margin, 0 0 0 0.5em));\n        }\n        .icon-left, .icon-right {\n          height: var(--icon-height-mobile,var(--icon-height, 1.5em));\n          width: var(--icon-width-mobile, var(--icon-width, auto));\n        }\n      }\n    ");var replaces="a"===this.buttonTagName?[{pattern:"[^-]{1}button",flags:"g",replacement:"a"}]:[];switch(this.getAttribute("namespace")){case"button-primary-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./primary-/primary-.css"),namespace:!1,replaces}]);case"button-secondary-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./secondary-/secondary-.css"),namespace:!1,replaces}]);case"button-tertiary-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./tertiary-/tertiary-.css"),namespace:!1,replaces}]);case"button-quaternary-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./quaternary-/quaternary-.css"),namespace:!1,replaces}]);case"button-download-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./download-/download-.css"),namespace:!1,replaces}]);case"button-category-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./primary-/primary-.css"),namespace:!1,replaces},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./category-/category-.css"),namespace:!1}]).then((fetchCSSParams=>{fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--primary-/g,"--category-")}));case"button-square-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./square-/square-.css"),namespace:!1,replaces}])}}renderHTML(){var iconLeft,iconRight;this.html="\n      <".concat(this.buttonTagName," \n        ").concat("a"===this.buttonTagName?'href="'.concat(this.getAttribute("href"),'" target="').concat(this.getAttribute("target")||"_self",'" ').concat(this.hasAttribute("rel")?'rel="'.concat(this.getAttribute("rel"),'"'):""):"",'\n        type="').concat(this.hasAttribute("type")?this.getAttribute("type"):"button",'">\n        <span id="label"').concat(this.labelText?"":' class="hide"',">").concat(this.labelText||"","</span>\n      </").concat(this.buttonTagName,">\n    "),"button-download-"===this.getAttribute("namespace")&&this.button.prepend(this.downloadIcon),(iconLeft=this.root.querySelector(".icon-left"))&&this.button.prepend(iconLeft),(iconRight=this.root.querySelector(".icon-right"))&&this.button.append(iconRight)}get button(){return this.root.querySelector(this.buttonTagName)}get label(){return this.root.querySelector("#label")}get parentNodeShadowRootHost(){if(this._parentNodeShadowRootHost)return this._parentNodeShadowRootHost;var searchShadowRoot=node=>node.root||node.shadowRoot?node:node.parentNode?searchShadowRoot(node.parentNode):node.host?searchShadowRoot(node.host):node;return this._parentNodeShadowRootHost=searchShadowRoot(this.parentNode)}set parentNodeShadowRootHost(node){this._parentNodeShadowRootHost=node}get mouseEventElement(){return this[this.hasAttribute("hover-on-parent-element")?"parentNode":this.hasAttribute("hover-on-parent-shadow-root-host")?"parentNodeShadowRootHost":void 0]}get downloadIcon(){var iconImg;return(iconImg=document.createElement("div")).innerHTML='\n      <svg class="icon-left" width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        \x3c!-- Generator: Sketch 63.1 (92452) - https://sketch.com --\x3e\n        <title>Button Download</title>\n        <desc>Created with Sketch.</desc>\n        <g id="Button-Download" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Group-2">\n                <circle id="Oval" fill="var(--button-download-background-color)" cx="30" cy="30" r="30"></circle>\n                <g id="Group" transform="translate(19.000000, 14.000000)" stroke="var(--button-download-icon-color)" stroke-width="3">\n                    <line x1="0" y1="30.5" x2="23" y2="30.5" id="Line-3" stroke-linecap="square"></line>\n                    <line x1="11.5" y1="22" x2="11.5" y2="-6.10622664e-16" id="Line-3-Copy" stroke-linecap="square"></line>\n                    <polyline id="Path-2" points="0 12.5 11.5 24.5 23 12.5"></polyline>\n                </g>\n            </g>\n        </g>\n      </svg>',iconImg.children[0]}}}}]);