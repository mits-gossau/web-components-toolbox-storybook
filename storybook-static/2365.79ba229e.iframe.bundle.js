"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[2365],{"./src/web-components-toolbox/src/es/components/contentful/newsPreview/NewsPreview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>NewsPreview});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/contentful/newsPreview/NewsPreview.js",document.baseURI).href};class NewsPreview extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(news){for(var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];super(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({importMetaUrl:importMeta.url},options),...args),this.news=news||null,this.ERROR_MSG="Error. News could not be displayed."}connectedCallback(){this.shouldRenderHTML()&&this.renderHTML(),this.shouldRenderCSS()&&this.renderCSS()}shouldRenderHTML(){return!this.newsWrapper}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}renderHTML(){if(this.news){this.fetchModules([{path:"".concat(this.importMetaUrl,"../../organisms/wrapper/Wrapper.js"),name:"o-wrapper"},{path:"".concat(this.importMetaUrl,"../../atoms/picture/Picture.js"),name:"a-picture"}]),this.newsWrapper=this.root.querySelector("div")||document.createElement("div");var url=new URL(this.newsUrl,"/"===this.newsUrl.charAt(0)?location.origin:"."===this.newsUrl.charAt(0)?this.importMetaUrl:void 0);url.searchParams.set(this.getAttribute("slug-name")||"news",this.news.slug),this.newsWrapper.innerHTML='\n    <a class="link" href="'.concat(url.href,'">\n    <o-wrapper>\n        <div class="image-wrapper" width="30%">\n          <a-picture picture-load defaultSource="').concat(this.news.introImage.url,'?w=500&q=80&fm=jpg" alt="').concat(""!==this.news.introImage.description?this.news.introImage.description:this.news.introImage.title,'" query-width="w" query-format="fm" query-quality="q" query-height="h"></a-picture></div>\n        </div>\n        <div class="text-wrapper">\n          <p class="margin-zero">').concat(new Date(this.news.date).toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"}),'</p>\n          <h3 class="title">').concat(this.news.introHeadline,'</h3>\n          <p class="margin-zero">').concat(this.news.introText,"</p>\n        </div> \n      </o-wrapper>\n    </a>\n  "),this.html=this.newsWrapper}else this.html=this.ERROR_MSG}renderCSS(){return this.css="\n    :host > div {\n      border-width:var(--border-width, 0 0 2px);\n      border-image:var(--border-image-source, url(_import-meta-url_./default-/img/border-dotted.png)) var(--border-image-slice, 0 0 2 0) var(--border-image-repeat, repeat);\n      border-style:var(--border-style, dotted);\n    }\n\n    :host > div > a {\n      align-items:var(--preview-a-align-items, flex-start);\n      display:flex !important;\n      flex-direction:var(--preview-a-flex-direction, row);\n      flex-wrap:var(--preview-a-flex-wrap, nowrap);\n      gap:var(--preview-a-flex-gap, 2em);\n      padding:var(--preview-a-padding, 1em 0);\n      text-decoration:var(--preview-a-text-decoration, none);\n    }\n    ".concat(null!==this.getAttribute("is-on-home")?"\n          :host(:first-child) > div {\n            border-width: var(--first-child-border-width, 2px 0 2px 0);\n          }\n        ":"","   \n    @media only screen and (max-width: _max-width_) {}\n    "),this.fetchTemplate()}fetchTemplate(){var styles=[{path:"".concat(this.importMetaUrl,"../../../../css/reset.css"),namespace:!1},{path:"".concat(this.importMetaUrl,"../../../../css/style.css"),namespaceFallback:!0}];return"preview-default-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(this.importMetaUrl,"./default-/default-.css"),namespace:!1},...styles]):this.fetchCSS(styles)}get newsUrl(){return this.getAttribute("news-url")||null}}}}]);