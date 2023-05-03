"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[6285],{"./src/web-components-toolbox/src/es/components/molecules/tagFilter/TagFilter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>TagFilter});var _prototypes_Mutation_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Mutation.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/tagFilter/TagFilter.js",document.baseURI).href};class TagFilter extends((0,_prototypes_Mutation_js__WEBPACK_IMPORTED_MODULE_0__.m)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{mutationObserverInit:{childList:!0}}),...args),this.answerEventListener=event=>{var tagsFetch=event.detail[this.getAttribute("tag-detail-property-name")||"tag-detail-property-name"];event.detail.clearSubTags&&(this.html=""),tagsFetch&&tagsFetch.then((data=>{this.renderHTML(data,event),this.scrollIntoView()}))}}connectedCallback(){super.connectedCallback(),this.shouldRenderCSS()&&this.renderCSS(),this.shouldRenderHTML()&&this.renderHTML(),this.getAttribute("answer-event-name")&&document.body.addEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventListener)}disconnectedCallback(){super.disconnectedCallback(),this.getAttribute("answer-event-name")&&document.body.removeEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventListener)}mutationCallback(mutationList,observer){this.setAttribute("count-children",Array.from(this.root.children).filter((child=>"STYLE"!==child.tagName)).length)}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldRenderHTML(){return!this.tagFilterWrapper}renderCSS(){this.css="\n      :host {\n        display: var(--display, flex);\n        flex-wrap:var(--flex-wrap, wrap);\n        gap: var(--gap, 0.25em);\n        width: 100%;\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host {\n          flex-wrap:var(--flex-wrap, wrap);\n        }\n      }\n    ";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!1}];switch(this.getAttribute("namespace")){case"tag-filter-vertical-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./vertical-/vertical-.css"),namespace:!1},...styles]);case"tag-filter-horizontal-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./horizontal-/horizontal-.css"),namespace:!1},...styles]);default:return this.fetchCSS(styles)}}renderHTML(tagList){tagList&&tagList.length&&(this.loadChildComponents(),this.html="",tagList.forEach((tagItem=>{this.html='<a-button\n          namespace="button-category-"\n          tag="'.concat(tagItem.code,'"\n          answer-event-name="').concat(this.getAttribute("answer-event-name")||"",'"\n          request-event-name="').concat(this.getAttribute("request-event-name")||"",'"\n          active-detail-property-name="').concat(this.getAttribute("active-detail-property-name")||"",'"\n        >').concat(tagItem.name,"</a-button>")})))}loadChildComponents(){return this.childComponentsPromise||(this.childComponentsPromise=Promise.all([__webpack_require__.e(6681).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/atoms/button/Button.js")).then((module=>["a-button",module.default]))]).then((elements=>(elements.forEach((element=>{customElements.get(element[0])||customElements.define(...element)})),elements))))}setURLSearchParam(param,value,url){url.searchParams.set(param,value)}}},"./src/web-components-toolbox/src/es/components/prototypes/Mutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Mutation});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),_excluded=["attributeFilter","attributes","attributeOldValue"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Mutation=function Mutation(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Mutation extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mutationObserverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];if(super(options,...args),this.mutationObserverInit="object"==typeof options.mutationObserverInit?options.mutationObserverInit:Mutation.parseAttribute(this.getAttribute("mutationObserverInit")),this.mutationObserverInit&&(this.mutationObserverInit.attributes||this.mutationObserverInit.characterData||this.mutationObserverInit.childList)){if(this.mutationObserver=new MutationObserver(this.mutationCallback.bind(this)),this.mutationObserverInit=Object.assign({attributeFilter:void 0,attributes:!1,attributeOldValue:!0===this.mutationObserverInit.attributes,characterData:!1,characterDataOldValue:!0===this.mutationObserverInit.characterData,childList:!1,subtree:!1},this.mutationObserverInit),this.shadowRoot&&this.mutationObserverInit.attributes){var _this$mutationObserve=this.mutationObserverInit,{attributeFilter,attributes,attributeOldValue}=_this$mutationObserve,restObserverInit=_objectWithoutProperties(_this$mutationObserve,_excluded);this.mutationObserveStart=()=>{(restObserverInit.childList||restObserverInit.characterData)&&this.mutationObserver.observe(this.shadowRoot,restObserverInit),this.mutationObserver.observe(this,{attributeFilter,attributes,attributeOldValue})}}else this.mutationObserveStart=()=>{this.mutationObserver.observe(this.root,this.mutationObserverInit)};this.mutationObserveStop=()=>this.mutationObserver.disconnect()}else this.mutationObserveStart=()=>{},this.mutationObserveStop=()=>{},console.warn("MutationObserver got not started, due to missing options.mutationObserverInit. At least supply an empty object to activate the observer with the default settings!",this)}connectedCallback(){super.connectedCallback(),this.mutationObserveStart()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserveStop()}mutationCallback(mutationList,observer){}}}}}]);