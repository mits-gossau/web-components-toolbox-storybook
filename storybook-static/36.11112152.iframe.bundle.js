(window.webpackJsonp=window.webpackJsonp||[]).push([[36,64,65,66],{"./node_modules/core-js/internals/array-last-index-of.js":function(module,exports,__webpack_require__){"use strict";var apply=__webpack_require__("./node_modules/core-js/internals/function-apply.js"),toIndexedObject=__webpack_require__("./node_modules/core-js/internals/to-indexed-object.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),min=Math.min,$lastIndexOf=[].lastIndexOf,NEGATIVE_ZERO=!!$lastIndexOf&&1/[1].lastIndexOf(1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("lastIndexOf"),FORCED=NEGATIVE_ZERO||!STRICT_METHOD;module.exports=FORCED?function lastIndexOf(searchElement){if(NEGATIVE_ZERO)return apply($lastIndexOf,this,arguments)||0;var O=toIndexedObject(this),length=lengthOfArrayLike(O),index=length-1;for(arguments.length>1&&(index=min(index,toIntegerOrInfinity(arguments[1]))),index<0&&(index=length+index);index>=0;index--)if(index in O&&O[index]===searchElement)return index||0;return-1}:$lastIndexOf},"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),$TypeError=TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw $TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/es.array.last-index-of.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),lastIndexOf=__webpack_require__("./node_modules/core-js/internals/array-last-index-of.js");$({target:"Array",proto:!0,forced:lastIndexOf!==[].lastIndexOf},{lastIndexOf:lastIndexOf})},"./src/web-components-toolbox/src/es/components/molecules/pagination/Pagination.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return Pagination}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.last-index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/pagination/Pagination.js",document.baseURI).href},Pagination=function(_Shadow){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Pagination,_Shadow);var _super=_createSuper(Pagination);function Pagination(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Pagination);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).pagination=_this.root.querySelector("div")||document.createElement("div"),_this.answerEventNameListener=function(event){event.detail.fetch.then((function(data){var total=data.total,limit=data.limit,skip=data.skip,pageParam=new URLSearchParams(location.search).get("page")||1,calcSkipPage=(Number(pageParam)-1)*data.limit;calcSkipPage!==skip&&(skip=calcSkipPage);var pages=Math.ceil(total/limit),compactMode=_this.hasAttribute("compact")&&pages>5;_this.renderHTML(pages,limit,skip,compactMode)}))},_this.clickListener=function(event){if(event.preventDefault(),!event.target||"A"!==event.target.tagName||event.target.hasAttribute("placeholder"))return!1;var page=event.target.hasAttribute("page")?event.target.getAttribute("page"):event.target.textContent;_this.dispatchRequestNewsEvent(page-1)},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Pagination,[{key:"connectedCallback",value:function connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),self.addEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventNameListener),this.pagination.addEventListener("click",this.clickListener)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.pagination.removeEventListener("click",this.clickListener),self.removeEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventNameListener)}},{key:"dispatchRequestNewsEvent",value:function dispatchRequestNewsEvent(page){this.dispatchEvent(new CustomEvent(this.getAttribute("request-event-name")||"request-event-name",{detail:{skip:page},bubbles:!0,cancelable:!0,composed:!0}))}},{key:"shouldComponentRenderCSS",value:function shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}},{key:"renderHTML",value:function renderHTML(pages,limit,skip,compactMode){this.html="",this.hidden=!pages;var pageItems=compactMode?this.renderCompactHTML(skip,limit,pages):this.renderAllPagesHTML(pages,skip,limit),withRelAttributeOnLinks=this.setRel(pageItems);this.pagination.innerHTML='<nav>\n        <ul class="pagination">\n          '.concat(withRelAttributeOnLinks,"\n        </ul>\n      </nav>\n    "),this.html=this.pagination}},{key:"renderCompactHTML",value:function renderCompactHTML(skip,limit,pages){var END_RANGE=pages-2,selectedPage=skip/limit,pageItems="";if(selectedPage>2&&selectedPage<END_RANGE)pageItems+='\n        <li class="page-item"><a page='.concat(selectedPage,'>&larr;</a></li>\n        <li class="page-item" page="1"><a target="_self" class="page-link">1</a></li>\n        <li class="page-item"><a placeholder>...</a></li>\n        <li class="page-item active" page="').concat(selectedPage+1,'" ><a target="_self" class="page-link active">').concat(selectedPage+1,'</a></li>\n        <li class="page-item"><a placeholder>...</a></li>\n        <li class="page-item" page="').concat(pages,'"><a target="_self" class="page-link">').concat(pages,'</a></li>\n        <li class="page-item"><a page=').concat(selectedPage+2," next>&rarr;</a></li>\n        ");else if(selectedPage>=END_RANGE)pageItems+='\n        <li class="page-item"><a page='.concat(selectedPage,'>&larr;</a></li>\n        <li class="page-item" page="1"><a target="_self" class="page-link">1</a></li>\n        <li class="page-item"><a placeholder>...</a></li>\n        <li class="page-item ').concat(pages-3===selectedPage?"active":"",'" page="').concat(pages-2,'"><a target="_self" class="page-link ').concat(pages-3===selectedPage?"active":"",'">').concat(pages-2,'</a></li>\n        <li class="page-item ').concat(pages-2===selectedPage?"active":"",'" page="').concat(pages-1,'"><a target="_self" class="page-link ').concat(pages-2===selectedPage?"active":"",'">').concat(pages-1,'</a></li>\n        <li class="page-item ').concat(pages-1===selectedPage?"active":"",'" page="').concat(pages,'"><a target="_self" class="page-link ').concat(pages-1===selectedPage?"active":"",'">').concat(pages,"</a></li>\n        ");else{for(var i=0;i<3;++i)pageItems+='<li class="page-item '.concat(i===selectedPage?"active":"",'" page="').concat(i+1,'" ><a target="_self" class="page-link ').concat(i===selectedPage?"active":"",'">').concat(i+1,"</a></li>");pageItems+='<li class="page-item"><a placeholder>...</a></li>';for(var _i=pages-3;_i<pages;_i++)pageItems+='<li class="page-item '.concat(_i===selectedPage?"active":"",'" page="').concat(_i+1,'" ><a target="_self" class="page-link ').concat(_i===selectedPage?"active":"",'">').concat(_i+1,"</a></li>");pageItems+='<li class="page-item"><a page='.concat(selectedPage+2," next>&rarr;</a></li>")}return pageItems}},{key:"renderAllPagesHTML",value:function renderAllPagesHTML(pages,skip,limit){for(var pageItems="",i=0;i<pages;++i){var active=skip/limit;pageItems+='<li class="page-item '.concat(i===active?"active":"",' " page="').concat(i+1,'" ><a target="_self" class="page-link ').concat(i===active?"active":"",'">').concat(i+1,"</a></li>")}return pageItems}},{key:"setRel",value:function setRel(items){var childNodes=(new DOMParser).parseFromString(items,"text/html").body.childNodes,nodes=Array.from(childNodes).filter((function(node){return 3!==node.nodeType}));if(1===nodes.length)return nodes[0].outerHTML;var url=location.href,pageParam=url.substring(url.lastIndexOf("page=")),updateNodes=nodes.reduce((function(acc,cur,index,nodes){if(cur.classList.contains("active"))if(0===index)acc[index+1].firstChild.setAttribute("rel","next"),acc[index+1].firstChild.setAttribute("href","".concat(location.href,"?page=").concat(acc[index+1].getAttribute("page")));else if(index+1===nodes.length){var rep=location.href.replace(pageParam,"page=".concat(acc[index-1].getAttribute("page")));acc[index-1].firstChild.setAttribute("rel","prev"),acc[index-1].firstChild.setAttribute("href",rep)}else{var repNext=location.href.replace(pageParam,"page=".concat(acc[index+1].getAttribute("page")));acc[index+1].firstChild.setAttribute("rel","next"),acc[index+1].firstChild.setAttribute("href",repNext);var repPrev=location.href.replace(pageParam,"page=".concat(acc[index-1].getAttribute("page")));acc[index-1].firstChild.setAttribute("rel","prev"),acc[index-1].firstChild.setAttribute("href",repPrev)}return acc}),nodes);return Array.from(updateNodes).map((function(item){return item.outerHTML})).join("")}},{key:"renderCSS",value:function renderCSS(){this.css="\n    :host > div {\n      background-color:var(--background-color, black);\n      display: var(--display, block);\n      height:var(--height, 100%);\n    }\n    :host ul {\n      display:var(--ul-display, flex);\n      float:var(--ul-float, right);\n      margin:var(--ul-margin, 0);\n    }\n    :host li {\n      border:var(--li-border, 0);\n      display:var(--li-display, inline);\n      font-size:var(--li-font-size, 1em);\n      height:var(--li-height, 5em);\n      padding:var(--li-padding, 0);\n      position:var(--li-position, relative);\n      width:var(--li-width, 5em);\n    }\n    :host li::after {\n      background-color:var(--li-after-background, red);\n      content:var(--li-after-content, '');\n      height:var(--li-after-height, 100%);\n      left:var(--li-after-left, 0);\n      position:var(--li-after-position, absolute);\n      top:var(--li-after-top, 1em);\n      width:var(--li-after-width, 1px);\n    }\n    :host li.active {\n      background:var(--li-active-background, white);\n    }\n    :host nav ul li > a {\n      align-items:var(--li-a-align-items, center);\n      border-top:var(--li-a-border-top, 1px solid black);\n      display:var(--li-a-display, flex);\n      flex-direction:var(--li-a-flex-direction, row);\n      height:var(--li-a-height, 100%);\n      justify-content:var(--li-a-justify-content, center);\n      margin:var(--li-a-margin, 0);\n      text-decoration:var(--li-a-text-decoration, none);\n    }\n    :host nav ul li > a.active {\n      color:var(--li-a-active, black);\n    }\n    :host nav ul li > a:hover {\n      border-top: var(--li-a-border-top-hover, 1px solid red);\n    }\n    @media only screen and (max-width: _max-width_) {\n      :host li {\n        font-size:var(--li-font-size-mobile, 1em);\n        height:var(--li-height-mobile, 5em);\n        width:var(--li-width-mobile, 2.5em);\n      }\n    }";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];return"pagination-default-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}].concat(styles),!1):this.fetchCSS(styles,!1)}}]),Pagination}(Object(_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_27__.a)())}}]);