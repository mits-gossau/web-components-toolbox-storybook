"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[6896],{"./src/web-components-toolbox/src/es/components/atoms/logo/Logo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Logo});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/logo/Logo.js",document.baseURI).href};class Logo extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.textSelector=":not(img):not(a):not(style):not(script)",this.setAttribute("lang",document.documentElement.getAttribute("lang")||"de");var timeout=null;this.resizeListener=event=>{clearTimeout(timeout),timeout=setTimeout((()=>{this.text&&(this.css="\n          :host > ".concat(this.textSelector,"{\n            width: var(--text-width, ").concat(this.img.getBoundingClientRect().width,"px);\n          }\n          @media only screen and (max-width: _max-width_) {\n            :host > ").concat(this.textSelector,"{\n              width: var(--text-width-mobile, ").concat(this.img.getBoundingClientRect().width,"px);\n            }\n          }\n        "))}),200)}}connectedCallback(){this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML(),self.addEventListener("resize",this.resizeListener)}disconnectedCallback(){self.removeEventListener("resize",this.resizeListener)}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.img&&!!this.getAttribute("src")}renderCSS(){switch(this.css="\n      :host {\n        align-items: var(--align-items, center);\n        display: flex;\n        flex-flow: var(--flex-flow, row);\n        flex-grow: var(--flex-grow, 0);\n        justify-content: var(--justify-content, center);\n        box-sizing: border-box;\n        margin: var(--margin, 0px);\n        padding: var(--padding, 0px);\n      }\n      :host(.hide-desktop) {\n        display: none;\n      }\n      :host(.hide-mobile) {\n        display: flex;\n      }\n      :host a{\n        height: var(--a-height, auto);\n        width: var(--a-width, auto);\n      }\n      :host img{\n        display: block;\n        height: var(--height, calc(var(--height, 85px) - var(--content-spacing, 40px)));\n        max-height: var(--max-height, none);\n        object-fit: var(--object-fit, scale-down);\n        width: var(--width, auto);\n        max-width: var(--max-width, 80vw);\n        margin: var(--img-margin, 0);\n      }\n      :host > ".concat(this.textSelector,'{\n        font-family: var(--text-font-family);\n        box-sizing: var(--text-box-sizing, border-box);\n        color: var(--text-color, var(--color, pink));\n        font-size: var(--text-font-size, 1em);\n        line-height: var(--text-line-height, normal);\n        padding: var(--text-padding, 0);\n        margin: var(--text-margin, 0);\n      }\n      :host([lang="en"]) > ').concat(this.textSelector,'{\n        padding: var(--text-padding-en, var(--text-padding, 0));\n      }\n      :host([lang="fr"]) > ').concat(this.textSelector,"{\n        padding: var(--text-padding-fr, var(--text-padding, 0));\n      }\n      :host > ").concat(this.textSelector," a{\n        color: var(--text-a-color, var(--color, green));\n        text-decoration: var(--text-a-text-decoration, var(--text-decoration, none));\n        white-space: var(--text-a-white-space, var(--white-space, nowrap));\n      }\n      :host > ").concat(this.textSelector," a:hover{\n        color: var(--text-a-color-hover, var(--color-hover, var(--color, green)));\n        text-decoration: var(--text-a-text-decoration-hover, var(--text-decoration-hover, var(--text-decoration, none)));\n        font-family: var(--text-a-font-family-hover);\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host {\n          margin: var(--margin-mobile, var(--margin, 0px));\n          padding: var(--padding-mobile, var(--padding, 0px));\n        }\n        :host(.hide-desktop) {\n          display: flex;\n        }\n        :host(.hide-mobile) {\n          display: none;\n        }\n        :host img{\n          height: var(--height-mobile, 65px);\n          max-height: var(--max-height-mobile, var(--max-height, none));\n          width: var(--width-mobile, auto);\n          max-width: var(--max-width-mobile, var(--max-width, 80vw));\n          margin: var(--img-margin-mobile, var(--img-margin, 0));\n        }\n        :host > ").concat(this.textSelector,'{\n          box-sizing: var(--text-box-sizing-mobile, border-box);\n          font-size: var(--text-font-size-mobile, 1em);\n          padding: var(--text-padding-mobile, 0);\n          line-height: var(--text-line-height-mobile, normal);\n        }\n        :host([lang="en"]) > ').concat(this.textSelector,'{\n          padding: var(--text-padding-mobile-en, var(--text-padding-mobile, 0));\n        }\n        :host([lang="fr"]) > ').concat(this.textSelector,"{\n          padding: var(--text-padding-mobile-fr, var(--text-padding-mobile, 0));\n        }\n      }\n    "),this.getAttribute("namespace")){case"logo-default-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}]);case"logo-partner-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./partner-/partner-.css"),namespace:!1}])}}renderHTML(){this.img=this.root.querySelector("img")||document.createElement("img"),this.img.setAttribute("src",this.getAttribute("src")),this.img.setAttribute("alt",this.getAttribute("alt")),this.img.setAttribute("loading",this.getAttribute("loading")||"eager");var a=null;this.hasAttribute("href")&&((a=document.createElement("a")).setAttribute("href",this.getAttribute("href")),this.hasAttribute("rel")&&a.setAttribute("rel",this.getAttribute("rel")),this.hasAttribute("target")&&a.setAttribute("target",this.getAttribute("target")),a.appendChild(this.img)),this.html=a||this.img,this.img.addEventListener("load",(event=>{this.resizeListener(event),this.setAttribute("loaded","true"),this.dispatchEvent(new CustomEvent(this.getAttribute("logo-load")||"logo-load",{detail:{origEvent:event,child:this,img:this.img},bubbles:!0,cancelable:!0,composed:!0}))})),this.img.addEventListener("error",(event=>{this.setAttribute("loaded","false"),this.dispatchEvent(new CustomEvent(this.getAttribute("logo-load")||"logo-load",{detail:{error:event},bubbles:!0,cancelable:!0,composed:!0}))}))}get a(){return this.root.querySelector("a")}get text(){return this.root.querySelector(this.textSelector)}}}}]);