"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[8636],{"./src/web-components-toolbox/src/es/components/atoms/iconPaperclip/IconPaperclip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>IconPaperclip});var _prototypes_Hover_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Hover.js");class IconPaperclip extends((0,_prototypes_Hover_js__WEBPACK_IMPORTED_MODULE_0__.T)()){connectedCallback(){super.connectedCallback(),this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML()}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.svg}renderCSS(){this.css="\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        height: var(--svg-size, 1.5em);\n        width: var(--svg-size, 1.5em);\n        vertical-align: middle;\n      }\n      :host > svg {\n        align-items: center;\n        color: var(--color, #777);\n        height: var(--svg-size, 1.5em);\n        justify-content: center;\n        width: var(--svg-size, 1.5em);\n      }\n      :host > svg path {\n        stroke: var(--path-color, var(--color, #777));\n        transition: var(--path-transition, all 0.3s ease-out);\n      }\n      :host(:hover) > svg path, :host(.hover) > svg path{\n        stroke: var(--path-color-hover, var(--color-hover, var(--color, #777)));\n      }\n      :host(:hover), :host(.hover){\n        cursor: pointer;\n      }\n    ",this.parentElement&&1===this.parentElement.children.length&&this.parentElement.setAttribute("style","font-family: inherit")}renderHTML(){this.html='\n      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M21.44 11.05L12.25 20.24C11.1242 21.3659 9.5972 21.9984 8.00502 21.9984C6.41283 21.9984 4.88586 21.3659 3.76002 20.24C2.63417 19.1142 2.00168 17.5872 2.00168 15.995C2.00168 14.4029 2.63417 12.8759 3.76002 11.75L12.95 2.56004C13.7006 1.80948 14.7186 1.38782 15.78 1.38782C16.8415 1.38782 17.8595 1.80948 18.61 2.56004C19.3606 3.3106 19.7822 4.32859 19.7822 5.39004C19.7822 6.4515 19.3606 7.46948 18.61 8.22004L9.41002 17.41C9.03473 17.7853 8.52574 17.9962 7.99502 17.9962C7.46429 17.9962 6.9553 17.7853 6.58002 17.41C6.20473 17.0348 5.9939 16.5258 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.10004" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    '}get svg(){return this.root.querySelector("svg")}}},"./src/web-components-toolbox/src/es/components/prototypes/Hover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Hover});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),Hover=function Hover(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Hover extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hoverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(options,...args),this.hoverInit="object"==typeof options.hoverInit?options.hoverInit:{level:this.getAttribute("hover-level")?this.getAttribute("hover-level"):this.hasAttribute("hover-on-parent-element")?1:void 0,selector:this.getAttribute("hover-selector")?this.getAttribute("hover-selector"):this.hasAttribute("hover-on-parent-shadow-root-host")?"hover-on-parent-shadow-root-host":void 0},this.mouseOverListener=event=>{this.setAttribute("hover","true"),this.classList.add("hover")},this.mouseOutListener=event=>{this.setAttribute("hover",""),this.classList.remove("hover")}}connectedCallback(){var _this$hoverTarget,_this$hoverTarget2;(super.connectedCallback(),this.hoverInit.level||this.hoverInit.selector)&&(null===(_this$hoverTarget=this.hoverTarget)||void 0===_this$hoverTarget||_this$hoverTarget.addEventListener("mouseover",this.mouseOverListener),null===(_this$hoverTarget2=this.hoverTarget)||void 0===_this$hoverTarget2||_this$hoverTarget2.addEventListener("mouseout",this.mouseOutListener))}disconnectedCallback(){var _this$hoverTarget3,_this$hoverTarget4;(super.disconnectedCallback(),this.hoverInit.level||this.hoverInit.selector)&&(null===(_this$hoverTarget3=this.hoverTarget)||void 0===_this$hoverTarget3||_this$hoverTarget3.removeEventListener("mouseover",this.mouseoverListener),null===(_this$hoverTarget4=this.hoverTarget)||void 0===_this$hoverTarget4||_this$hoverTarget4.removeEventListener("mouseout",this.mouseoutListener),this.hoverTarget=null)}set hoverTarget(value){this._hoverTarget=value}get hoverTarget(){return this._hoverTarget||(this._hoverTarget=(()=>this.hoverInit.selector?"hover-on-parent-shadow-root-host"===this.hoverInit.selector?Hover.findNextHost(this):Hover.findByQuerySelector(this,this.hoverInit.selector):Hover.findByLevel(this,Number(this.hoverInit.level)))())}static findByQuerySelector(el,selector){for(;el=el.parentNode||el.host;){var parentNode=el.parentNode||el.host;if(parentNode&&parentNode.querySelector(selector))return el}return document.documentElement}static findByLevel(el,level){for(var currentLevel=1;el=el.parentNode||el.host;){if(currentLevel>=level&&el.tagName)return el;currentLevel++}return el}static findNextHost(el){var searchShadowRoot=el=>el.root||el.shadowRoot?el:el.parentNode?searchShadowRoot(el.parentNode):el.host?searchShadowRoot(el.host):el;return searchShadowRoot(el.parentNode||el.host)}}}}}]);