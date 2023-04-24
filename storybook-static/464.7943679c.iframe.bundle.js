"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[464],{"./src/web-components-toolbox/src/es/components/contentful/newsList/NewsList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>NewsList});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/contentful/newsList/NewsList.js",document.baseURI).href};class NewsList extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.RESOLVE_STATE="LOADED",this.answerEventNameListener=event=>{this.hidden=!1;var newsPreviewNamespace=this.getAttribute("news-preview-namespace")||"preview-default-";this.loadScriptDependency().then((script=>{script===this.RESOLVE_STATE&&this.loadDependency().then((dependency=>{dependency===this.RESOLVE_STATE&&this.renderHTML(event.detail.fetch,newsPreviewNamespace)}))}))}}connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),document.body.addEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventNameListener),this.hidden=!0,Promise.all([this.loadScriptDependency(),this.loadDependency()]).then((()=>this.dispatchEvent(new CustomEvent(this.getAttribute("request-event-name")||"request-event-name",{bubbles:!0,cancelable:!0,composed:!0}))))}disconnectedCallback(){document.body.removeEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventNameListener)}loadScriptDependency(){return new Promise(((resolve,reject)=>{if(document.getElementById("contentful-module-export"))return resolve(this.RESOLVE_STATE);var moduleExportScripts=document.createElement("script");moduleExportScripts.setAttribute("id","contentful-module-export"),moduleExportScripts.type="text/javascript";try{return moduleExportScripts.appendChild(document.createTextNode('var exports = { "__esModule": true };')),document.body.appendChild(moduleExportScripts),resolve(this.RESOLVE_STATE)}catch(e){return reject(e)}}))}loadDependency(){return new Promise(((resolve,reject)=>{if(document.getElementById("contentful-renderer"))return resolve(this.RESOLVE_STATE);var contentfulRenderer=document.createElement("script");contentfulRenderer.setAttribute("type","text/javascript"),contentfulRenderer.setAttribute("id","contentful-renderer");try{contentfulRenderer.setAttribute("src","".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../controllers/contentful/rich-text-html-renderer.es5.min.js")),document.body.appendChild(contentfulRenderer),contentfulRenderer.onload=()=>resolve(this.RESOLVE_STATE)}catch(e){return reject(e)}}))}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}renderCSS(){this.css="\n    :host > div {\n      display: var(--display, flex);\n      flex-direction: var(--flex-direction, column);\n      width: var(--width, 100%);\n    }\n    @media only screen and (max-width: _max-width_) {}\n    ";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!1}];return"news-list-default-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},...styles]):this.fetchCSS(styles)}renderHTML(newsFetch,namespace){Promise.all([newsFetch,this.loadChildComponents()]).then((_ref=>{var[news,child]=_ref,{items}=news,wrapper=document.createElement("div");items.forEach((news=>{var newsEle=new child[0][1](news,{namespace,mobileBreakpoint:this.mobileBreakpoint});newsEle.setAttribute("news-url",this.getAttribute("news-url")),null!==this.getAttribute("is-on-home")&&newsEle.setAttribute("is-on-home",this.getAttribute("is-on-home")),wrapper.appendChild(newsEle)})),this.html="",this.html=wrapper})).catch((e=>{this.html="Error"}))}loadChildComponents(){return this.childComponentsPromise||(this.childComponentsPromise=Promise.all([__webpack_require__.e(2365).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/contentful/newsPreview/NewsPreview.js")).then((module=>["m-news-preview",module.default])),__webpack_require__.e(6739).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/atoms/picture/Picture.js")).then((module=>["a-picture",module.default]))]).then((elements=>(elements.forEach((element=>{customElements.get(element[0])||customElements.define(...element)})),elements))))}}}}]);