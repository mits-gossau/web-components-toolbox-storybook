"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[7439],{"./src/web-components-toolbox/src/es/components/atoms/breadcrumb/Breadcrumb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Breadcrumb});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/breadcrumb/Breadcrumb.js",document.baseURI).href};class Breadcrumb extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(_objectSpread(_objectSpread({},options),{},{importMetaUrl:importMeta.url}),...args)}connectedCallback(){this.shouldRenderCSS()&&this.renderCSS()}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}renderCSS(){var icon=this.getAttribute("icon"),color="var(--color, pink)",textDecoration="var(--text-decoration, none)";this.css="\n      :host {\n        margin: var(--margin, 0) !important;\n        width: var(--width, 0) !important;\n      }\n      :host ul {\n        display: flex;\n        flex-wrap: wrap;\n        list-style: var(--list-style, none);\n        margin: var(--ul-margin, 0);\n        padding: var(--ul-padding, 0);\n      }\n      :host > ul > li {\n        display: flex;\n        white-space: nowrap;\n      }\n      :host > ul > li > a {\n        color: var(--a-color, var(--color-secondary, ".concat(color,')); /* use variable "color" */\n        font-weight: var(--a-font-weight, var(--font-weight, normal));\n        text-align: var(--a-text-align, unset);\n        text-decoration: var(--a-text-decoration, ').concat(textDecoration,'); /* use variable "textDecoration" */\n        text-underline-offset: var(--a-text-underline-offset, unset);\n        display: var(--a-display, inline);\n        margin: var(--a-margin, var(--content-spacing, unset)) auto;\n      }\n      :host a:hover, :host a:active, :host a:focus {\n        color: var(--a-color-hover, var(--color-hover-secondary, var(--color-hover, var(--color, green))));\n        text-decoration: var(--a-text-decoration-hover, var(--text-decoration-hover, var(--a-text-decoration, ').concat(textDecoration,'))); /* use variable "textDecoration" */\n      }\n      :host > ul > li > a {\n        color: var(--a-color, var(--color-secondary, ').concat(color,')); /* use variable "color" */\n        text-decoration: var(--a-text-decoration, ').concat(textDecoration,'); /* use variable "textDecoration" */\n        text-underline-offset: var(--a-text-underline-offset, unset);\n      }\n      :host > ul > li > a:hover, :host > ul > li > a:active, :host > ul > li > a:focus {\n        color: var(--a-color-hover, var(--color-hover-secondary, var(--color-hover, var(--color, green))));\n        text-decoration: var(--a-text-decoration-hover, var(--text-decoration-hover, var(--a-text-decoration, ').concat(textDecoration,'))); /* use variable "textDecoration" */\n      }\n      :host > ul > li > span {\n        ').concat("false"!==icon?"background-image: var(--background-image, url(".concat(icon||"_import-meta-url_../web-components/src/icons/chevron_right.svg","));"):"","\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 1em;\n        ").concat("false"!==icon?"color: transparent;":"","\n        min-width: 1em;\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host {\n          margin: var(--margin-mobile, var(--margin, 0)) !important;\n          width: var(--width-mobile, var(--width, 0)) !important;\n        }\n        :host ul {\n          margin: var(--ul-margin-mobile, var(--ul-margin, 0));\n          padding: var(--ul-padding-mobile, var(--ul-padding, 0));\n        }\n        :host > ul > li > a {\n          margin: var(--a-margin-mobile, var(--a-margin, var(--content-spacing-mobile, var(--content-spacing, unset)))) auto;\n        }\n      }\n    ")}}}}]);