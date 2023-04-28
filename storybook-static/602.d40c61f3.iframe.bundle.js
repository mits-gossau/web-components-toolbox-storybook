"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[602,5719],{"./src/web-components-toolbox/src/es/components/organisms/body/Body.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Body});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/organisms/body/Body.js",document.baseURI).href};class Body extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.timeout=null,this.clickAnchorEventListener=event=>{var element=null;(element=this.root.querySelector(event&&event.detail&&event.detail.selector.replace(/(.*#)(.*)$/,"#$2")||location.hash||null))&&(this.dispatchEvent(new CustomEvent(this.getAttribute("scroll-to-anchor")||"scroll-to-anchor",{bubbles:!0,cancelable:!0,composed:!0,detail:{child:element}})),element.scrollIntoView({behavior:"smooth"}),clearTimeout(this.timeout),this.timeout=setTimeout((()=>{element.scrollIntoView({behavior:"auto"}),this.dispatchEvent(new CustomEvent(this.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!1,origEvent:event,this:this},bubbles:!0,cancelable:!0,composed:!0}))}),500),self.removeEventListener("hashchange",this.clickAnchorEventListener),location.hash=location.hash.replace("_scrolled","")+"_scrolled",self.addEventListener("hashchange",this.clickAnchorEventListener))}}connectedCallback(){super.connectedCallback(),this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML(),document.body.addEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorEventListener),location.hash&&(self.addEventListener("load",(event=>this.clickAnchorEventListener({detail:{selector:location.hash.replace("_scrolled","")}})),{once:!0}),document.body.addEventListener(this.getAttribute("wc-config-load")||"wc-config-load",(event=>setTimeout((()=>this.clickAnchorEventListener({detail:{selector:location.hash.replace("_scrolled","")}})),1e3)),{once:!0})),self.addEventListener("hashchange",this.clickAnchorEventListener)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener(this.getAttribute("click-anchor")||"click-anchor",this.clickAnchorEventListener),self.removeEventListener("hashchange",this.clickAnchorEventListener)}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.main}renderCSS(){this.css='\n      :host {\n        display: flow-root;\n        background-color: var(--background-color, transparent);\n        background-repeat: var(--background-repeat, initial) !important;\n        background-position: var(--background-position, 0);\n        grid-area: body;\n      }\n      :host > main {\n        padding: var(--main-padding, 0);\n      }\n      :host > main > *:not(style):not(script) {\n        display: var(--any-display, block);\n      }\n      :host > main > * {\n        margin: var(--any-content-spacing, var(--content-spacing, unset)) auto;  /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n        width: var(--any-content-width, var(--content-width, 55%));\n      }\n      :host(.content-max-width) > main > *:not(.ignore-max-width), :host> main > *.content-max-width {\n        max-width: var(--content-max-width, none);\n      }\n      :host(.content-max-width-two) > main > *:not(.ignore-max-width), :host > main > *.content-max-width-two {\n        max-width: var(--content-max-width-two, none);\n      }\n      :host >main > *:first-child { /* important: avoid this rule to be extended by BodyStyles Regex: "/s>smain/g" by writing: ">main" */\n        margin-top: var(--any-margin-top-first-child, unset);\n      }\n      :host > main > *.a-emotion-pictures:first-child, :host > main > a-emotion-pictures:first-child, :host > main > m-carousel[namespace=carousel-emotion-]:first-child {\n        margin-top: var(--a-emotion-pictures-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      :host > main > msrc-store-finder:first-child {\n        margin-top: var(--msrc-store-finder-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      :host > main > msrc-store-finder:last-child {\n        margin-bottom: var(--msrc-store-finder-margin-bottom-last-child, 0);\n      }\n      :host > main > a-google-maps:first-child {\n        margin-top: var(--a-google-maps-margin-top-first-child, calc(-1 * var(--content-spacing, unset)));\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host > main {\n          padding: var(--main-padding-mobile, var(--main-padding, 0));\n        }\n        :host > main > * {\n          margin: var(--any-content-spacing-mobile, var(--content-spacing-mobile, var(--content-spacing, unset))) auto; /* Warning! Keep horizontal margin at auto, otherwise the content width + margin may overflow into the scroll bar */\n          width: var(--any-content-width-mobile, var(--content-width-mobile, calc(100% - var(--content-spacing-mobile, var(--content-spacing)) * 2)));\n        }\n        :host(.content-max-width) > main > *:not(.ignore-max-width), :host> main > *.content-max-width {\n          max-width: var(--content-max-width-mobile, none);\n        }\n        :host(.content-max-width-two) > main > *:not(.ignore-max-width), :host > main > *.content-max-width-two {\n          max-width: var(--content-max-width-two-mobile, none);\n        }\n       \n        :host >main > *:first-child { /* important: avoid this rule to be extended by BodyStyles Regex: "/s>smain/g" by writing: ">main" */\n          margin-top: var(--any-margin-top-first-child-mobile, unset);\n        }\n        :host > main > *.a-emotion-pictures:first-child, :host > main > a-emotion-pictures:first-child, :host > main > m-carousel[namespace=carousel-emotion-]:first-child {\n          margin-top: var(--a-emotion-pictures-margin-top-first-child-mobile, calc(-1 * var(--content-spacing-mobile, unset)));\n        }\n        :host > main > msrc-store-finder:first-child {\n          margin-top: var(--msrc-store-finder-margin-top-first-child-mobile, calc(-1 * var(--content-spacing-mobile, unset)));\n        }\n        :host > main > msrc-store-finder:last-child {\n          margin-bottom: var(--msrc-store-finder-margin-bottom-last-child-mobile, 0);\n        }\n      }\n    ',this.hasAttribute("no-style-css")||this.importStyles()}importStyles(){this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css")}])}renderHTML(){this.main=this.root.querySelector(this.cssSelector+" > main")||document.createElement("main"),Array.from(this.root.children).forEach((node=>{if(node===this.main||node.getAttribute("slot")||"STYLE"===node.nodeName)return!1;var links=Array.from(node.querySelectorAll("[child-href-target-blank]"));links.length&&this.setLinkTarget(links),this.main.appendChild(node)})),this.html=this.main}setLinkTarget(nodeList){nodeList.forEach((node=>{node.querySelectorAll("a").forEach((href=>{href.setAttribute("target","_blank")}))}))}}},"./src/web-components-toolbox/src/es/components/organisms/wrapper/Wrapper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Wrapper:()=>Wrapper});var _body_Body_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/organisms/body/Body.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/organisms/wrapper/Wrapper.js",document.baseURI).href},Wrapper=function Wrapper(){var ChosenHTMLElement=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_body_Body_js__WEBPACK_IMPORTED_MODULE_0__.default;return class Wrapper extends ChosenHTMLElement{constructor(){super(...arguments),this.hasAttribute("href")&&(this.setAttribute("data-href",this.getAttribute("href")),this.setAttribute("role","link"));var timeout=null;this.resizeListener=event=>{clearTimeout(timeout),timeout=setTimeout((()=>this.calcColumnWidth()),200)}}connectedCallback(){this.hidden=!0;var showPromises=[];this.shouldRenderHTML()&&showPromises.push(this.renderHTML()),this.shouldRenderCSS()&&showPromises.push(this.renderCSS()),Promise.all(showPromises).then((()=>{this.checkIfLink(),this.hidden=!1})),self.addEventListener("resize",this.resizeListener),super.connectedCallback()}disconnectedCallback(){self.removeEventListener("resize",this.resizeListener),super.disconnectedCallback()}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.section}renderCSS(){this.css="\n      :host {\n        display: block;\n      }\n      :host([href]) {\n        cursor: pointer;\n      }\n      :host > section {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: ".concat(this.hasAttribute("align-items")?this.getAttribute("align-items"):"var(--align-items, center)",";\n        justify-content: var(--justify-content, center);\n        flex-direction: var(--flex-direction, row);\n        width: 100%;\n        gap: var(--gap, normal);\n      }\n      :host > section > * {\n        box-sizing: border-box;\n        margin: var(--margin, 0) !important;\n        padding: var(--padding, 0) !important;\n      }\n      :host > section > *:not([style]):first-child {\n        margin: var(--margin-first-child, var(--margin, 0)) !important;\n        padding: var(--padding-first-child, var(--padding, 0)) !important;\n      }\n      :host > section > *:not([style]):last-child {\n        margin: var(--margin-last-child, var(--margin, 0)) !important;\n        padding: var(--padding-last-child, var(--padding, 0)) !important;\n      }\n      :host > section > * > *:not([style]):last-child {\n        padding-bottom: var(--any-padding-bottom-last-child, var(--any-padding-bottom, 0)) !important;\n        margin-bottom: var(--any-margin-bottom-last-child, var(--any-margin-bottom, 0)) !important;\n      }\n      :host([fix-one-pixel-glitch]) > section > *:not(:first-child) {\n        transform: translateX(-1px) scaleX(1.005);\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host > section {\n          flex-direction: var(--flex-direction-mobile, var(--flex-direction, row));\n        }\n        :host > section > * {\n          margin: var(--margin-mobile, var(--margin, 0)) !important;\n          padding: var(--padding-mobile, var(--padding, 0)) !important;\n          ").concat(this.hasAttribute("flex-nowrap-mobile")?"":"width: 100% !important;","\n          ").concat(this.hasAttribute("width-mobile")?"width: ".concat(this.getAttribute("width-mobile")," !important;"):"","\n        }\n        :host > section > *:not([style]):first-child {\n          margin: var(--margin-first-child-mobile, var(--margin-first-child, var(--margin-mobile, var(--margin, 0)))) !important;\n          padding: var(--padding-first-child-mobile, var(--padding-first-child, var(--padding-mobile, var(--padding, 0)))) !important;\n        }\n        :host > section > *:not([style]):last-child {\n          margin: var(--margin-last-child-mobile, var(--margin-last-child, var(--margin-mobile, var(--margin, 0)))) !important;\n          padding: var(--padding-last-child-mobile, var(--padding-last-child, var(--padding-mobile, var(--padding, 0)))) !important;\n        }\n        :host > section > * > *:not([style]):last-child {\n          padding-bottom: var(--any-padding-bottom-last-child-mobile, var(--any-padding-bottom-last-child, var(--any-padding-bottom-mobile, var(--any-padding-bottom, 0)))) !important;\n          margin-bottom: var(--any-margin-bottom-last-child-mobile, var(--any-margin-bottom-last-child, var(--any-margin-bottom-mobile, var(--any-margin-bottom, 0)))) !important;\n        }\n        :host > section > *.first-mobile {\n          order: -1;\n        }\n        ").concat(this.hasAttribute("picture-first-mobile")?"\n            :host > section > a-picture, :host > section > picture, :host > section > img {\n              order: -1;\n            }\n          ":"","\n        ").concat(this.hasAttribute("picture-last-mobile")?"\n            :host > section > *:not(a-picture):not(picture):not(img) {\n              order: -1;\n            }\n          ":"","\n        ").concat(this.hasAttribute("overlay-mobile")?"\n            :host > section {\n              display: grid;\n            }\n            :host > section > * {\n              display: block;\n              grid-column: 1;\n              grid-row: 1;\n            }\n            :host > section > *:not([style]):last-child {\n              margin: var(--content-spacing-mobile, var(--content-spacing, 2em)) auto !important;\n              width: calc(100% - var(--content-spacing-mobile, var(--content-spacing, 2em)) * 2) !important;\n            }\n          ":"","\n        :host([fix-one-pixel-glitch]) > section > *:not(:first-child) {\n          transform: none;\n        }\n      }\n    ");var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("namespace")){case"wrapper-teaser-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./teaser-/teaser-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"wrapper-teaser-recipe-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./teaser-recipe-/teaser-recipe-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"wrapper-text-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./text-/text-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"wrapper-text-center-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./text-center-/text-center-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"wrapper-no-calc-column-width-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./no-calc-column-width-/no-calc-column-width-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"wrapper-no-calc-column-width-left-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./no-calc-column-width-left-/no-calc-column-width-left-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"menu-legends-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./menu-legends-/menu-legends-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));case"wrapper-text-picture-cover-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./text-picture-cover-/text-picture-cover-.css"),namespace:!1},...styles],!1).then((()=>this.calcColumnWidth()));default:return this.hasAttribute("namespace")||(this.css="\n            :host {\n              --gap: var(--gap-custom, var(--content-spacing));\n            }\n            :host > section > *:not(a-picture) ~ * {\n              align-self: var(--not-a-picture-align-self, normal);\n            }\n            @media only screen and (max-width: _max-width_) {\n              :host {\n                --gap: var(--gap-mobile-custom, var(--gap-custom, var(--content-spacing-mobile, var(--content-spacing))));\n              }\n            }\n          "),this.fetchCSS(styles,!1).then((()=>this.calcColumnWidth()))}}calcColumnWidth(){var children=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.section.children;this.hasAttribute("no-calc-column-width")||self.requestAnimationFrame((timeStamp=>{var childNodes=Array.from(children).filter((node=>"STYLE"!==node.nodeName&&("DIV"!==node.nodeName||!node.hasAttribute("hidden")))),childNodesLength=Number(this.getAttribute("simulate-children"))||childNodes.length,childNodesLengthNotWidthHundredPercent=childNodesLength;childNodes.length<childNodesLength?childNodes=childNodes.concat(Array(childNodesLength-childNodes.length).fill(childNodes[0])):childNodes.length>childNodesLength&&(childNodes=childNodes.splice(0,childNodesLength));for(var i=0;i<childNodesLength;i++)(this.hasAttribute("any-".concat(i+1,"-width"))||childNodes[i]&&childNodes[i].hasAttribute("width"))&&(this.css="\n            :host {\n              --any-".concat(i+1,"-width: ").concat(childNodes[i].getAttribute("width")||this.getAttribute("any-".concat(i+1,"-width")),";\n            }\n          "));var[bookedWidth,bookedCount,margin,unit]=childNodes.reduce(((acc,node,i)=>{var width=this.cleanPropertyWidthValue(self.getComputedStyle(node).getPropertyValue("--".concat(this.namespace||"","any-").concat(i+1,"-width")));!width&&this.hasAttribute("namespace-fallback")&&(width=this.cleanPropertyWidthValue(self.getComputedStyle(node).getPropertyValue("--any-".concat(i+1,"-width")))),width>=100&&(width=0,childNodesLengthNotWidthHundredPercent--);var margin=!1,unit=!1;return 0===i&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--".concat(this.namespace||"","margin-first-child"))),!1===margin&&this.hasAttribute("namespace-fallback")&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--margin-first-child")))),i===childNodesLength-1&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--".concat(this.namespace||"","margin-last-child"))),!1===margin&&this.hasAttribute("namespace-fallback")&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--margin-last-child")))),!1===margin&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--".concat(this.namespace||"","margin"))),!1===margin&&this.hasAttribute("namespace-fallback")&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--margin")))),!1===margin&&i<childNodesLength-1&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--".concat(this.namespace||"","gap"))),!1===margin&&this.hasAttribute("namespace-fallback")&&([margin,unit]=this.cleanPropertyMarginValue(self.getComputedStyle(node).getPropertyValue("--gap"))),margin&&(margin/=2)),[acc[0]+width,width?acc[1]+1:acc[1],unit?acc[2]+margin:acc[2],unit||acc[3]]}),[0,0,0,""]),freeWidth=(100-bookedWidth)/(childNodesLengthNotWidthHundredPercent-bookedCount);freeWidth!==1/0&&freeWidth!==-1/0||(freeWidth=0),this.style.textContent="";for(var _i=1;_i<childNodesLength+1;_i++)this.setCss("\n          :host > section > *:nth-child(".concat(_i,") {\n            width: calc(var(--any-").concat(_i,"-width, ").concat(freeWidth,"%) - ").concat((childNodes[_i-1].hasAttribute("width")&&childNodes[_i-1].getAttribute("width").includes("100")?0:margin||0)/childNodesLengthNotWidthHundredPercent||0).concat(unit||"px",");\n          }\n        "),void 0,void 0,void 0,this.style)}))}renderHTML(){return this.section=this.root.querySelector(this.cssSelector+" > section")||document.createElement("section"),Array.from(this.root.children).forEach((node=>{"STYLE"!==node.tagName&&"SECTION"!==node.tagName&&this.section.appendChild(node)})),this.html=[this.section,this.style],Promise.resolve()}checkIfLink(){if(this.hasAttribute("href")&&this.parentNode){var a=document.createElement("a");a.setAttribute("wrapper",""),a.setAttribute("href",this.getAttribute("href")),a.setAttribute("target",this.getAttribute("target")||"_self"),this.hasAttribute("rel")&&a.setAttribute("rel",this.getAttribute("rel")),a.style.color="inherit",a.style.textDecoration="inherit",this.parentNode.replaceChild(a,this),a.appendChild(this),this.checkIfLink=()=>{}}}cleanPropertyWidthValue(value){return Number(value.trim().replace(/[^0-9]/g,""))}cleanPropertyMarginValue(value){if(!value)return[!1,!1];var values=value.trimStart().split(" ").filter((value=>value.length));if(0===values.length)return[!1,!1];1===values.length&&(values=Array(4).fill(values[0])),2===values.length&&(values=[values[0],values[1],values[0],values[1]]),3===values.length&&(values=[values[0],values[1],values[2],values[1]]);var unitRegex=/[a-z%]/g,valueRegex=/[^a-z%]/g,unit=unitRegex.test(values[1]||"")?values[1].replace(valueRegex,""):unitRegex.test(values[3]||"")?values[3].replace(valueRegex,""):"";return value=unitRegex.test(values[1]||"")?Number(values[1].replace(unitRegex,"")):0,[value+=unitRegex.test(values[3]||"")?Number(values[3].replace(unitRegex,"")):0,unit]}get style(){return this._style||(this._style=((style=document.createElement("style")).setAttribute("protected","true"),style));var style}}}}}]);