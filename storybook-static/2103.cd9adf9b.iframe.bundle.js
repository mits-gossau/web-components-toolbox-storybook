"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[2103],{"./src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/PictureWithPicture.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>PictureWithPicture});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/PictureWithPicture.js",document.baseURI).href};class PictureWithPicture extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){connectedCallback(){this.hidden=!0;var showPromises=[];this.shouldRenderCSS()&&showPromises.push(this.renderCSS()),this.shouldRenderHTML()&&this.renderHTML(),Promise.all(showPromises).then((()=>this.hidden=!1))}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.wrapper}renderCSS(){this.css="\n      :host .wrapper {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr;\n        margin: 0 auto;\n        max-width: 100%;\n        overflow: overlay;\n        max-height: 90vh;\n      }\n      :host .wrapper > * {\n        grid-column: 1;\n        grid-row: 1;\n      }\n      :host .wrapper > div {\n        display: flex;\n        margin: 1em;\n        gap: 1em;\n        flex-direction: ".concat(this.getAttribute("icon-direction")||"row",";\n      }\n      :host([place-right]) .wrapper > div {\n        justify-content: end;\n      }\n      :host([place-bottom]) .wrapper > div {\n        align-items: end;\n      }\n      :host .wrapper > div > * {\n        height: fit-content;\n        width: ").concat(this.getAttribute("icon-width")||"10%",";\n      }\n    ");var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];return this.getAttribute("namespace"),this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},...styles],!1)}renderHTML(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),Array.from(this.root.children).forEach((node=>{node.getAttribute("slot")||"STYLE"===node.tagName||this.wrapper.appendChild(node)})),this.html=this.wrapper}}}}]);