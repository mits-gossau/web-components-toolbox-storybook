"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[297],{"./src/stories/molecules/RecipeList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Promise.all([__webpack_require__.e(1658),__webpack_require__.e(4051)]).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/atoms/input/Input.js")).then((module=>self.customElements.define("a-input",module.default))),Promise.all([__webpack_require__.e(1658),__webpack_require__.e(4676)]).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/atoms/button/Button.js")).then((module=>self.customElements.define("a-button",module.default))),Promise.all([__webpack_require__.e(1658),__webpack_require__.e(8743)]).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/molecules/pagination/Pagination.js")).then((module=>self.customElements.define("m-pagination",module.default))),Promise.all([__webpack_require__.e(1658),__webpack_require__.e(122)]).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/molecules/recipeList/RecipeList.js")).then((module=>self.customElements.define("m-recipe-list",module.default))),Promise.all([__webpack_require__.e(1658),__webpack_require__.e(6285)]).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/molecules/tagFilter/TagFilter.js")).then((module=>self.customElements.define("m-tag-filter",module.default))),Promise.all([__webpack_require__.e(1658),__webpack_require__.e(4164)]).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/organisms/grid/Grid.js")).then((module=>self.customElements.define("o-grid",module.default)));const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/RecipeList",component:"m-recipe-list"};var Default=()=>(0,lit_html__WEBPACK_IMPORTED_MODULE_0__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <a-input\n      inputid="inputSearch"\n      placeholder="Suchen..."\n      submit-search="request-list-recipe"\n      search=""\n      type="search"\n      any-key-listener\n      change-listener\n      delete-listener\n      answer-event-name="list-recipe"\n      active-detail-property-name="fetch:searchTerm"\n    ></a-input>\n    <o-grid\n      namespace="grid-2colums2rows-"\n      first-container-vertical\n      first-column-with="20%"\n    >\n      <section>\n        <m-tag-filter namespace="tag-filter-vertical-">\n          <a-button\n            namespace="button-category-"\n            tag="Drinks"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Getränke</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="Appetizers"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Vorspeisen</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="MainDishes"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Hauptgerichte</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="DessertsAndBaking"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Dessert & Backen</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="DIY"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >DIY</a-button\n          >\n        </m-tag-filter>\n        <o-grid namespace="grid-2colums2rows-" first-container-horizontal>\n          <m-tag-filter\n            namespace="tag-filter-horizontal-"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n          >\n            <a-button\n              namespace="button-category-"\n              tag="vegetarisch"\n              answer-event-name="list-recipe"\n              request-event-name="request-list-recipe"\n              active-detail-property-name="fetch:tag"\n              >Vegetarisch</a-button\n            >\n            <a-button\n              namespace="button-category-"\n              tag="glut"\n              answer-event-name="list-recipe"\n              request-event-name="request-list-recipe"\n              active-detail-property-name="fetch:tag"\n              >Glutenfrei</a-button\n            >\n            <a-button\n              namespace="button-category-"\n              tag="vegan"\n              answer-event-name="list-recipe"\n              request-event-name="request-list-recipe"\n              active-detail-property-name="fetch:tag"\n              >Vegan</a-button\n            >\n          </m-tag-filter>\n          <m-pagination\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            namespace="pagination-default-"\n            compact\n          ></m-pagination>\n        </o-grid>\n        <m-recipe-list\n          answer-event-name="list-recipe"\n          request-event-name="request-list-recipe"\n          namespace="recipe-list-default-"\n        >\n        </m-recipe-list>\n      </section>\n    </o-grid>\n  '])));Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'() => html`\n    <a-input\n      inputid="inputSearch"\n      placeholder="Suchen..."\n      submit-search="request-list-recipe"\n      search=""\n      type="search"\n      any-key-listener\n      change-listener\n      delete-listener\n      answer-event-name="list-recipe"\n      active-detail-property-name="fetch:searchTerm"\n    ></a-input>\n    <o-grid\n      namespace="grid-2colums2rows-"\n      first-container-vertical\n      first-column-with="20%"\n    >\n      <section>\n        <m-tag-filter namespace="tag-filter-vertical-">\n          <a-button\n            namespace="button-category-"\n            tag="Drinks"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Getränke</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="Appetizers"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Vorspeisen</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="MainDishes"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Hauptgerichte</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="DessertsAndBaking"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >Dessert & Backen</a-button\n          >\n          <a-button\n            namespace="button-category-"\n            tag="DIY"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            active-detail-property-name="fetch:tag"\n            >DIY</a-button\n          >\n        </m-tag-filter>\n        <o-grid namespace="grid-2colums2rows-" first-container-horizontal>\n          <m-tag-filter\n            namespace="tag-filter-horizontal-"\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n          >\n            <a-button\n              namespace="button-category-"\n              tag="vegetarisch"\n              answer-event-name="list-recipe"\n              request-event-name="request-list-recipe"\n              active-detail-property-name="fetch:tag"\n              >Vegetarisch</a-button\n            >\n            <a-button\n              namespace="button-category-"\n              tag="glut"\n              answer-event-name="list-recipe"\n              request-event-name="request-list-recipe"\n              active-detail-property-name="fetch:tag"\n              >Glutenfrei</a-button\n            >\n            <a-button\n              namespace="button-category-"\n              tag="vegan"\n              answer-event-name="list-recipe"\n              request-event-name="request-list-recipe"\n              active-detail-property-name="fetch:tag"\n              >Vegan</a-button\n            >\n          </m-tag-filter>\n          <m-pagination\n            answer-event-name="list-recipe"\n            request-event-name="request-list-recipe"\n            namespace="pagination-default-"\n            compact\n          ></m-pagination>\n        </o-grid>\n        <m-recipe-list\n          answer-event-name="list-recipe"\n          request-event-name="request-list-recipe"\n          namespace="recipe-list-default-"\n        >\n        </m-recipe-list>\n      </section>\n    </o-grid>\n  `'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});const __namedExportsOrder=["Default"]}}]);