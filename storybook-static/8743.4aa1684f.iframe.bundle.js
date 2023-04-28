"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[8743],{"./src/web-components-toolbox/src/es/components/molecules/pagination/Pagination.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Pagination});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/pagination/Pagination.js",document.baseURI).href};class Pagination extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.pagination=this.root.querySelector("div")||document.createElement("div"),this.answerEventNameListener=event=>{event.detail.fetch.then((data=>{var{total,limit,skip}=data,pageParam=new URLSearchParams(location.search).get("page")||1,calcSkipPage=(Number(pageParam)-1)*data.limit;calcSkipPage!==skip&&(skip=calcSkipPage);var pages=Math.ceil(total/limit),compactMode=this.hasAttribute("compact")&&pages>5;this.renderHTML(pages,limit,skip,compactMode)}))},this.clickListener=event=>{if(event.preventDefault(),!event.target||"A"!==event.target.tagName||event.target.hasAttribute("placeholder"))return!1;var page=event.target.hasAttribute("page")?event.target.getAttribute("page"):event.target.textContent;this.dispatchRequestNewsEvent(page-1)}}connectedCallback(){this.shouldRenderCSS()&&this.renderCSS(),self.addEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventNameListener),this.pagination.addEventListener("click",this.clickListener)}disconnectedCallback(){this.pagination.removeEventListener("click",this.clickListener),self.removeEventListener(this.getAttribute("answer-event-name")||"answer-event-name",this.answerEventNameListener)}dispatchRequestNewsEvent(page){this.dispatchEvent(new CustomEvent(this.getAttribute("request-event-name")||"request-event-name",{detail:{skip:page,textContent:String(page+1),pageName:this.getAttribute("page-name")||"Page"},bubbles:!0,cancelable:!0,composed:!0}))}shouldRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}renderHTML(pages,limit,skip,compactMode){this.html="",this.hidden=!pages;var pageItems=compactMode?this.renderCompactHTML(skip,limit,pages):this.renderAllPagesHTML(pages,skip,limit),withRelAttributeOnLinks=this.setRel(pageItems);this.pagination.innerHTML='<nav>\n        <ul class="pagination">\n          '.concat(withRelAttributeOnLinks,"\n        </ul>\n      </nav>\n    "),this.html=this.pagination}renderCompactHTML(skip,limit,pages){var END_RANGE=pages-2,selectedPage=skip/limit,pageItems="";if(selectedPage>2&&selectedPage<END_RANGE)pageItems+='\n        <li class="page-item"><a page='.concat(selectedPage,'>&larr;</a></li>\n        <li class="page-item" page="1"><a target="_self" class="page-link">1</a></li>\n        <li class="page-item"><a placeholder>...</a></li>\n        <li class="page-item active" page="').concat(selectedPage+1,'" ><a target="_self" class="page-link active">').concat(selectedPage+1,'</a></li>\n        <li class="page-item"><a placeholder>...</a></li>\n        <li class="page-item" page="').concat(pages,'"><a target="_self" class="page-link">').concat(pages,'</a></li>\n        <li class="page-item"><a page=').concat(selectedPage+2," next>&rarr;</a></li>\n        ");else if(selectedPage>=END_RANGE)pageItems+='\n        <li class="page-item"><a page='.concat(selectedPage,'>&larr;</a></li>\n        <li class="page-item" page="1"><a target="_self" class="page-link">1</a></li>\n        <li class="page-item"><a placeholder>...</a></li>\n        <li class="page-item ').concat(pages-3===selectedPage?"active":"",'" page="').concat(pages-2,'"><a target="_self" class="page-link ').concat(pages-3===selectedPage?"active":"",'">').concat(pages-2,'</a></li>\n        <li class="page-item ').concat(pages-2===selectedPage?"active":"",'" page="').concat(pages-1,'"><a target="_self" class="page-link ').concat(pages-2===selectedPage?"active":"",'">').concat(pages-1,'</a></li>\n        <li class="page-item ').concat(pages-1===selectedPage?"active":"",'" page="').concat(pages,'"><a target="_self" class="page-link ').concat(pages-1===selectedPage?"active":"",'">').concat(pages,"</a></li>\n        ");else{for(var i=0;i<3;++i)pageItems+='<li class="page-item '.concat(i===selectedPage?"active":"",'" page="').concat(i+1,'" ><a target="_self" class="page-link ').concat(i===selectedPage?"active":"",'">').concat(i+1,"</a></li>");pageItems+='<li class="page-item"><a placeholder>...</a></li>';for(var _i=pages-3;_i<pages;_i++)pageItems+='<li class="page-item '.concat(_i===selectedPage?"active":"",'" page="').concat(_i+1,'" ><a target="_self" class="page-link ').concat(_i===selectedPage?"active":"",'">').concat(_i+1,"</a></li>");pageItems+='<li class="page-item"><a page='.concat(selectedPage+2," next>&rarr;</a></li>")}return pageItems}renderAllPagesHTML(pages,skip,limit){for(var pageItems="",i=0;i<pages;++i){var active=skip/limit;pageItems+='<li class="page-item '.concat(i===active?"active":"",' " page="').concat(i+1,'" ><a target="_self" class="page-link ').concat(i===active?"active":"",'">').concat(i+1,"</a></li>")}return pageItems}setRel(items){var childNodes=(new DOMParser).parseFromString(items,"text/html").body.childNodes,nodes=Array.from(childNodes).filter((node=>3!==node.nodeType));if(1===nodes.length)return nodes[0].outerHTML;var url=location.href,pageParam=url.substring(url.lastIndexOf("page=")),updateNodes=nodes.reduce(((acc,cur,index,nodes)=>{if(cur.classList.contains("active"))if(0===index)acc[index+1].firstChild.setAttribute("rel","next"),acc[index+1].firstChild.setAttribute("href","".concat(location.href,"?page=").concat(acc[index+1].getAttribute("page")));else if(index+1===nodes.length){var rep=location.href.replace(pageParam,"page=".concat(acc[index-1].getAttribute("page")));acc[index-1].firstChild.setAttribute("rel","prev"),acc[index-1].firstChild.setAttribute("href",rep)}else{var repNext=location.href.replace(pageParam,"page=".concat(acc[index+1].getAttribute("page")));acc[index+1].firstChild.setAttribute("rel","next"),acc[index+1].firstChild.setAttribute("href",repNext);var repPrev=location.href.replace(pageParam,"page=".concat(acc[index-1].getAttribute("page")));acc[index-1].firstChild.setAttribute("rel","prev"),acc[index-1].firstChild.setAttribute("href",repPrev)}return acc}),nodes);return Array.from(updateNodes).map((item=>item.outerHTML)).join("")}renderCSS(){this.css="\n    :host > div {\n      background-color:var(--background-color, black);\n      display: var(--display, block);\n      height:var(--height, 100%);\n    }\n    :host ul {\n      display:var(--ul-display, flex);\n      float:var(--ul-float, right);\n      margin:var(--ul-margin, 0);\n    }\n    :host li {\n      border:var(--li-border, 0);\n      display:var(--li-display, inline);\n      font-size:var(--li-font-size, 1em);\n      height:var(--li-height, 5em);\n      padding:var(--li-padding, 0);\n      position:var(--li-position, relative);\n      width:var(--li-width, 5em);\n    }\n    :host li::after {\n      background-color:var(--li-after-background, red);\n      content:var(--li-after-content, '');\n      height:var(--li-after-height, 100%);\n      left:var(--li-after-left, 0);\n      position:var(--li-after-position, absolute);\n      top:var(--li-after-top, 1em);\n      width:var(--li-after-width, 1px);\n    }\n    :host li.active {\n      background:var(--li-active-background, white);\n    }\n    :host nav ul li > a {\n      align-items:var(--li-a-align-items, center);\n      border-top:var(--li-a-border-top, 1px solid black);\n      display:var(--li-a-display, flex);\n      flex-direction:var(--li-a-flex-direction, row);\n      height:var(--li-a-height, 100%);\n      justify-content:var(--li-a-justify-content, center);\n      margin:var(--li-a-margin, 0);\n      text-decoration:var(--li-a-text-decoration, none);\n    }\n    :host nav ul li > a.active {\n      color:var(--li-a-active, black);\n    }\n    :host nav ul li > a:hover {\n      border-top: var(--li-a-border-top-hover, 1px solid red);\n    }\n    @media only screen and (max-width: _max-width_) {\n      :host li {\n        font-size:var(--li-font-size-mobile, 1em);\n        height:var(--li-height-mobile, 5em);\n        width:var(--li-width-mobile, 2.5em);\n      }\n    }";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];return"pagination-default-"===this.getAttribute("namespace")?this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},...styles],!1):this.fetchCSS(styles,!1)}}}}]);