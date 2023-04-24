"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[9193],{"./src/web-components-toolbox/src/es/components/molecules/cookieBanner/CookieBanner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>CookieBanner});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");class CookieBanner extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.clickListener=event=>{this.section.classList.remove("show"),this.shown=!0}}connectedCallback(){this.shown?this.css="\n        :host {\n          display: none;\n        }\n      ":(this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.addEventListener("click",this.clickListener),setTimeout((()=>this.section.classList.add("show")),this.getAttribute("timeout")||2e3))}disconnectedCallback(){this.removeEventListener("click",this.clickListener)}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!this.section}renderCSS(){this.css="\n      :host > section {\n        align-items: var(--align-items, center);\n        background-color: var(--background-color, black);\n        border-bottom: var(--border-bottom, 0);\n        border-left: var(--border-left, 0);\n        border-right: var(--border-right, 0);\n        border-top: var(--border-top, 3px solid white);\n        bottom: -100%;\n        box-shadow: var(--box-shadow, 0px -3px 10px white);\n        box-sizing: border-box;\n        color: var(--color, white);\n        display: var(--display, flex);\n        font-size: var(--font-size, 3em);\n        height: var(--height, auto);\n        justify-content: var(--justify-content, space-between);\n        padding: var(--padding, 10px);\n        position: fixed;\n        transition: var(--transition, bottom 2s ease);\n        width: 100%;\n      }\n      :host > section.show {\n        bottom: 0;\n      }\n      :host > section a {\n        color: var(--a-color, var(--color, blue));\n        transition: var(--a-transition, all 0.5s ease);\n      }\n      :host > section a:focus {\n        color: var(--a-color-focus, var(--color, coral));\n      }\n      :host > section a:hover {\n        color: var(--a-color-hover, var(--color, coral));\n      }\n      :host > section button {\n        color: var(--button-color, white);\n        background-color: var(--button-background-color, orange);\n        border-bottom: var(--button-border-bottom, solid white);\n        border-left: var(--button-border-left, solid white);\n        border-right: var(--button-border-right, solid white);\n        border-top: var(--button-border-top, 0.1em solid white);\n        border-radius: var(--button-border-radius, 1em);\n        cursor: var(--button-cursor, pointer);\n        font-size: var(--button-font-size, var(--font-size, 1em));\n        padding: var(--button-padding, 0.2em);\n        transition: var(--button-transition, all 0.5s ease);\n      }\n      :host > section button:focus {\n        color: var(--button-color-focus, var(--button-color, gray));\n        background-color: var(--button-background-color-focus, var(--background-color, red));\n      }\n      :host > section button:hover {\n        color: var(--button-color-hover, var(--button-color, gray));\n        background-color: var(--button-background-color-hover, var(--background-color, red));\n      }\n      :host > section p {\n        margin: var(--p-margin, 0);\n      }\n    "}renderHTML(){this.section=this.root.querySelector("section")||document.createElement("section"),Array.from(this.root.children).forEach((node=>{node===this.section||node.getAttribute("slot")||"STYLE"===node.tagName||"SECTION"===node.tagName||this.section.appendChild(node)})),this.html=this.section}get shown(){return this.hasAttribute("storage")?self[this.getAttribute("storage")].getItem(this.storageName):this._shown}set shown(shown){this.hasAttribute("storage")?self[this.getAttribute("storage")].setItem(this.storageName,shown):this._shown=shown}get storageName(){return this.getAttribute("storage-name")||"".concat(location.origin,"-").concat(this.tagName,"-shown")}}}}]);