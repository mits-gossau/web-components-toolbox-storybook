"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[907],{"./src/web-components-toolbox/src/es/components/molecules/pictureText/PictureText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Hotspot});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/pictureText/PictureText.js",document.baseURI).href};class Hotspot extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{importMetaUrl:importMeta.url}),...args),this.buttonClickListener=e=>{this.hasAttribute("show-text")?this.removeAttribute("show-text"):this.setAttribute("show-text",!0)},this.clickListener=event=>{event.composedPath()[0]!==this.button&&this.hasAttribute("show-text")&&this.removeAttribute("show-text")}}connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.button.addEventListener("click",this.buttonClickListener),this.addEventListener("click",this.clickListener)}disconnectedCallback(){this.button.removeEventListener("click",this.buttonClickListener),this.removeEventListener("click",this.clickListener)}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!this.wrapper}renderCSS(){this.css="\n      :host([show-text]) {\n        cursor: pointer;\n      }\n      :host .wrapper {\n        width: max-content;\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr;\n        margin: 0 auto;\n        max-width: 100%;\n        align-items: end;\n        overflow: overlay;\n        max-height: 90vh;\n      }\n      :host .wrapper > * {\n        grid-column: 1;\n        grid-row: 1;\n      }\n      :host .image-button {\n        cursor: pointer;\n        background-color: var(--image-button-background-color);\n        margin: 1em;\n        width: 38px;\n        height: 38px;\n        border: 0;\n        border-radius: 50%;\n        transition: background-color 0.3s ease-out;\n        position: relative;\n        z-index: 3;\n      }\n      :host([place-right]) .image-button {\n        justify-self: end;\n      }\n      :host([place-bottom]) .image-button {\n        align-self: end;\n      }\n      :host .image-button:hover{\n        background-color: var(--image-button-background-color-hover, var(--image-button-background-color));\n      }\n      :host .image-button::before{\n        border-top: 2px solid var(--image-button-border-color);\n        border-bottom: 2px solid var(--image-button-border-color);\n        position: absolute;\n        top: 16px;\n        left: 11px;\n        width: 16px;\n        height: 3px;\n        content: '';\n        transition: border-top-color 0.3s ease-out;\n      }\n      :host .image-button::after{\n        border-bottom: 2px solid var(--image-button-border-color);\n        position: absolute;\n        top: 16px;\n        left: 11px;\n        width: 10px;\n        height: 10px;\n        content: '';\n        transition: border-bottom-color 0.3s ease-out;\n      }\n      :host .content-wrapper {\n        display: flex;\n        align-items: end;\n        color: var(--color);\n        background: var(--content-wrapper-background);\n        opacity: 0;\n        transition: opacity .3s ease-out;\n      }\n      :host .content {\n        padding: 1em;\n        z-index: 2;\n      }\n      :host([show-text]) .content-wrapper{\n        opacity: 1;\n      }\n      :host([show-text]) .image-button{\n        background-color: var(--image-button-background-color-show-text, var(--image-button-background-color));\n      }\n      :host([show-text]) .image-button::before{\n        border-top: 2px solid transparent;\n        border-bottom: 2px solid var(--image-button-border-color);\n      }\n      :host([show-text]) .image-button::after{\n        border-bottom: 2px solid transparent;\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host .content-wrapper {\n          background: var(--content-wrapper-background-mobile, var(--content-wrapper-background));\n        }\n      }\n    ";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];return this.getAttribute("namespace"),this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},...styles],!1)}renderHTML(){null!==this.content&&(this.button.classList.add("image-button"),this.contentWrapper.classList.add("content-wrapper"),this.contentWrapper.appendChild(this.content),this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),this.wrapper.appendChild(this.picture),this.wrapper.appendChild(this.button),this.wrapper.appendChild(this.contentWrapper),this.html=this.wrapper)}get content(){return this.root.querySelector(".content")}get picture(){return this.root.querySelector("a-picture")}get contentWrapper(){return this._contentWrapper||(this._contentWrapper=document.createElement("div"))}get button(){return this._button||(this._button=document.createElement("button"))}}}}]);