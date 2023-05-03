(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[1658],{"./src/web-components-toolbox/src/es/components/prototypes/Shadow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{j:()=>Shadow});var importMeta_url=new URL("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js",document.baseURI).href,Shadow=function Shadow(){var ChosenHTMLElement=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return class Shadow extends ChosenHTMLElement{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:void 0,namespace:void 0,namespaceFallback:void 0,mobileBreakpoint:void 0,importMetaUrl:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];if(super(...args),this.mode=Shadow.getMode("string"==typeof options.mode?options.mode:this.getAttribute("mode")),this.hasShadowRoot){var shadowRoot=this.attachShadow({mode:this.mode});Array.from(this.children).forEach((node=>{node.getAttribute("slot")||shadowRoot.appendChild(node)})),this.setAttribute("tabindex","0")}"string"==typeof options.namespace&&this.setAttribute("namespace",options.namespace),this.namespace=this.getAttribute("namespace")||"",options.namespaceFallback&&this.setAttribute("namespace-fallback",""),this.namespaceFallback=this.hasAttribute("namespace-fallback"),"string"==typeof options.mobileBreakpoint&&this.setAttribute("mobile-breakpoint",options.mobileBreakpoint),this.importMetaUrl=(options.importMetaUrl||importMeta_url).replace(/(.*\/)(.*)$/,"$1")}connectedCallback(){}disconnectedCallback(){}static parseAttribute(attribute){if(!attribute||"string"!=typeof attribute)return null;try{return JSON.parse(attribute.replace(/'/g,'"'))||null}catch(e){return null}}static getMode(mode){return"closed"===mode||"open"===mode||"false"===mode?mode:"open"}get hasShadowRoot(){return"closed"===this.mode||"open"===this.mode}get root(){return this.shadowRoot||this}get cssSelector(){return this.hasShadowRoot?":host":this.getAttribute("id")?"#".concat(this.getAttribute("id")):this.nodeName}get css(){return this._css&&this._css.textContent}set css(style){this.setCss(style)}setCss(style){var cssSelector=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.cssSelector,namespace=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.namespace,namespaceFallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.namespaceFallback,styleNode=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this._css,appendStyleNode=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],maxWidth=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this.mobileBreakpoint,node=arguments.length>7&&void 0!==arguments[7]?arguments[7]:this,replaces=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[];return styleNode||((styleNode=document.createElement("style")).setAttribute("_css",""),styleNode.setAttribute("protected","true"),this._css=styleNode),appendStyleNode&&node.root.appendChild(styleNode),style?(style=Shadow.cssMaxWidth(style,maxWidth),style=Shadow.cssImportMetaUrl(style,this.importMetaUrl),":host"!==cssSelector&&(style=Shadow.cssHostFallback(style,cssSelector)),namespace&&(style.includes("---")&&console.error("this.css has illegal dash characters at:",this),namespaceFallback?(style=Shadow.cssNamespaceToVarFunc(style,namespace),style=Shadow.cssNamespaceToVarDec(style,namespace)):style=Shadow.cssNamespaceToVar(style,namespace)),replaces.forEach((replace=>style=style.replace(new RegExp(replace.pattern,replace.flags),replace.replacement))),Shadow.isMac&&style.includes("text-decoration:")&&(style=Shadow.cssTextDecorationShortHandFix(style,node)),styleNode.textContent+=style):styleNode.textContent=""}static cssHostFallback(style,cssSelector){return(style=style.replace(/:host\s{0,5}\((.*?)\)/g,"".concat(cssSelector,"$1 "))).replace(/:host\s{0,5}/g,"".concat(cssSelector," "))}static cssNamespaceToVarFunc(style,namespace){return style.replace(/var\(--([^,)]*)([^;]*)/g,((match,p1,p2)=>(p2||console.error("this.css cssNamespaceToVarFunc found corrupt css at:",this),"var(--".concat(namespace).concat(p1,",var(--").concat(p1).concat(p2?this.cssNamespaceToVarFunc(p2,namespace).replace(/([^)]*)(.*?)$/,"$1)$2"):"));"))))}static cssNamespaceToVarDec(style,namespace){return style.replace(/([^(])--([^;]*)/g,"$1--".concat(namespace,"$2;--$2"))}static cssNamespaceToVar(style,namespace){return style.replace(/--/g,"--".concat(namespace))}static cssMaxWidth(style,maxWidth){return style.replace(/_max-width_/g,maxWidth)}static cssImportMetaUrl(style,importMetaUrl){return style.replace(/_import-meta-url_/g,importMetaUrl)}static cssTextDecorationShortHandFix(style,node){return style.replace(/text-decoration:\s*([^;]*);/g,((match,p1)=>(p1.includes("var(--")&&p1.match(/var\(--[^,)]*/g).some((variable=>""!==(p1=self.getComputedStyle(node).getPropertyValue(variable.replace("var(",""))))),"".concat(p1.split(" ").filter((prop=>/\w/g.test(prop))).reduce(((acc,prop,i)=>{switch(i){case 0:return"".concat(acc,"text-decoration-line: ").concat(prop,";");case 1:return"".concat(acc,"text-decoration-style: ").concat(prop,";");case 2:return"".concat(acc,"text-decoration-color: ").concat(prop,";");case 3:return"".concat(acc,"text-decoration-thickness: ").concat(prop,";");default:return acc}}),"".concat(match,"/* Safari fix of text-decoration shorthand bug which only supports the first two arguments. */")),"/* end of fix. More Infos at: src/es/components/web-components-cms-template/src/es/components/prototypes/Shadow.js */"))))}static get isMac(){return navigator.userAgent.includes("Mac")}fetchCSS(fetchCSSParams){var hide=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],useController=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return hide&&(this.hidden=!0),Array.isArray(fetchCSSParams)||(fetchCSSParams=[fetchCSSParams]),this.isConnected&&useController&&document.body.hasAttribute(this.getAttribute("fetch-css")||"fetch-css")?new Promise((resolve=>this.dispatchEvent(new CustomEvent(this.getAttribute("fetch-css")||"fetch-css",{detail:{fetchCSSParams,resolve,node:this},bubbles:!0,cancelable:!0,composed:!0})))).then((resultFetchCSSParams=>(hide&&(this.hidden=!1),resultFetchCSSParams))):Promise.all(fetchCSSParams.map((fetchCSSParam=>fetch(fetchCSSParam.path).then((response=>{if(response.status>=200&&response.status<=299)return Promise.all([Promise.resolve(fetchCSSParam),response.text()]);throw new Error(response.statusText)})).then((_ref=>{var[fetchCSSParam,style]=_ref;return _objectSpread(_objectSpread({},fetchCSSParam),{},{style})})).catch((error=>(hide&&(this.hidden=!1),error="".concat(fetchCSSParam.path," ").concat(error,"!!!"),_objectSpread(_objectSpread({},fetchCSSParam),{},{error:this.html=console.error(error,this)||'<code style="color: red;">'.concat(error,"</code>")}))))))).then((fetchCSSParams=>{var result=fetchCSSParams.map(((_ref2,i)=>{var{path,cssSelector,namespace,namespaceFallback,styleNode,style,appendStyleNode=!0,error,maxWidth=this.mobileBreakpoint,node=this,replaces=[]}=_ref2;return error?fetchCSSParams[i]:(styleNode||((styleNode=document.createElement("style")).setAttribute("_css",path),styleNode.setAttribute("mobile-breakpoint",maxWidth),styleNode.setAttribute("protected","true"),this.root.querySelector(this.cssSelector+' > [_css="'.concat(path,'"]'))&&console.warn("".concat(path," got imported more than once!!!"),node)),appendStyleNode&&node.root.appendChild(styleNode),_objectSpread(_objectSpread({},fetchCSSParams[i]),{},{styleNode,appendStyleNode,node,style:this.setCss(style,cssSelector,namespace,namespaceFallback,styleNode,appendStyleNode,maxWidth,node,replaces)}))}));return hide&&(this.hidden=!1),result})).catch((error=>error))}fetchHTML(paths){var hide=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],useController=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return hide&&(this.hidden=!0),Array.isArray(paths)||(paths=[paths]),this.isConnected&&useController&&document.body.hasAttribute(this.getAttribute("fetch-html")||"fetch-html")?new Promise((resolve=>this.dispatchEvent(new CustomEvent(this.getAttribute("fetch-html")||"fetch-html",{detail:{paths,resolve,node:this},bubbles:!0,cancelable:!0,composed:!0})))).then((htmls=>(hide&&(this.hidden=!1),htmls))):Promise.all(paths.map((path=>fetch(path).then((response=>{if(response.status>=200&&response.status<=299)return response.text();throw new Error(response.statusText)})).catch((error=>(hide&&(this.hidden=!1),error="".concat(path," ").concat(error,"!!!"),{path,error:this.html=console.error(error,this)||'<code style="color: red;">'.concat(error,"</code>")})))))).then((htmls=>(hide&&(this.hidden=!1),htmls.map((html=>html.error?html.error:html))))).catch((error=>error))}fetchModules(fetchModulesParams){var hide=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],useController=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return hide&&(this.hidden=!0),Array.isArray(fetchModulesParams)||(fetchModulesParams=[fetchModulesParams]),this.isConnected&&useController&&document.body.hasAttribute(this.getAttribute("fetch-modules")||"fetch-modules")?new Promise((resolve=>this.dispatchEvent(new CustomEvent(this.getAttribute("fetch-modules")||"fetch-modules",{detail:{fetchModulesParams,resolve,node:this},bubbles:!0,cancelable:!0,composed:!0})))).then((resultFetchModulesParams=>(hide&&(this.hidden=!1),resultFetchModulesParams))):Promise.all(fetchModulesParams.map((fetchModulesParam=>__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes lazy recursive")(fetchModulesParam.path).then((module=>{var constructorClass=module.default||module;return"object"==typeof constructorClass&&(constructorClass=constructorClass[Object.keys(constructorClass)[0]]()),customElements.get(fetchModulesParam.name)||customElements.define(fetchModulesParam.name,constructorClass),fetchModulesParam.constructorClass=constructorClass,fetchModulesParam})).catch((error=>(hide&&(this.hidden=!1),error="".concat(fetchModulesParam.path," ").concat(error,"!!!"),_objectSpread(_objectSpread({},fetchModulesParam),{},{error:this.html=console.error(error,this)||'<code style="color: red;">'.concat(error,"</code>")}))))))).then((fetchModulesParams=>(hide&&(this.hidden=!1),fetchModulesParams))).catch((error=>error))}get html(){return this.root.innerHTML}set html(innerHTML){if("string"==typeof innerHTML)if(innerHTML){var div=document.createElement("div");div.innerHTML=innerHTML,innerHTML=div.childNodes}else innerHTML=this.root.querySelectorAll("[protected=true]"),this.root.innerHTML="";void 0===innerHTML.length&&(innerHTML=[innerHTML]),Array.from(innerHTML).forEach((node=>{node&&this.root.appendChild(node)}))}set hidden(value){this._cssHidden||(this._cssHidden=document.createElement("style"),this._cssHidden.setAttribute("_cssHidden",""),this._cssHidden.setAttribute("protected","true"),this.root.appendChild(this._cssHidden)),this._cssHidden.textContent="",value?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden");var generalFix="\n      a {\n        color: var(--color, inherit);\n        text-decoration: var(--text-decoration, inherit);\n      }\n    ";this.setCss("\n        ".concat(generalFix,value?"\n        :host {\n          visibility: hidden !important;\n        }\n      ":"\n        :host, :host > *, :host > * > * {\n          animation: var(--show, show .3s ease-out);\n        }\n        @keyframes show {\n          0%{opacity: 0}\n          100%{opacity: 1}\n        }\n      "),void 0,void 0,void 0,this._cssHidden),super.hidden=value}get hidden(){return super.hidden}get mobileBreakpoint(){return this.getMobileBreakpoint()}getMobileBreakpoint(){var organism=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{constructor:this.constructor.name,tagName:this.tagName,namespace:this.namespace};return this.hasAttribute("mobile-breakpoint")?this.getAttribute("mobile-breakpoint"):self.Environment&&"function"==typeof self.Environment.mobileBreakpoint?self.Environment.mobileBreakpoint(organism):self.Environment&&self.Environment.mobileBreakpoint?self.Environment.mobileBreakpoint:"767px"}}}},"./src/web-components-toolbox/src/es/components/prototypes lazy recursive":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src/web-components-toolbox/src/es/components/prototypes lazy recursive",module.exports=webpackEmptyAsyncContext}}]);