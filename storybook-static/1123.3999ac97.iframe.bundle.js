"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[1123],{"./src/web-components-toolbox/src/es/components/atoms/input/Input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Input});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}class Input extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){static get observedAttributes(){return["readonly","disabled","error"]}constructor(){for(var _this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{mode:"open"}),...args),_this=this,this.allowedTypes=["text","number","email","password","tel","url","search"],this.setAttribute("role",this.inputType),this.setAttribute("aria-label",this.inputType),this.children.length||(this.labelText=this.textContent),this.lastValue="",this.clickListener=function(event){var retry=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(_this.lastValue!==_this.inputField.value)if(_this.lastValue=_this.inputField.value,_this.getAttribute("search")){if(!_this.inputField.value)return;location.href="".concat(_this.getAttribute("search")).concat(encodeURIComponent(_this.inputField.value))}else _this.dispatchEvent(new CustomEvent(_this.getAttribute("submit-search")||"submit-search",{bubbles:!0,cancelable:!0,composed:!0,detail:{key:_this.inputId,value:_this.inputField.value}}));else retry&&event.composedPath()[0]===_this.inputField&&setTimeout((()=>_this.clickListener(event,!1)),50)},this.changeListener=event=>this.clickListener(event),this.keydownTimeoutId=null,this.keydownListener=event=>{this.root.querySelector(":focus")===this.inputField&&(this.hasAttribute("any-key-listener")||13===event.keyCode)&&(clearTimeout(this.keydownTimeoutId),this.keydownTimeoutId=setTimeout((()=>this.clickListener(event)),13===event.keyCode?0:1e3))},this.answerEventListener=function(){var _ref=_asyncToGenerator((function*(event){var searchTerm=event.detail.searchTerm;_this.getAttribute("active-detail-property-name")&&(searchTerm=yield _this.getAttribute("active-detail-property-name").split(":").reduce(function(){var _ref2=_asyncToGenerator((function*(accumulator,propertyName){return propertyName=propertyName.replace(/-([a-z]{1})/g,((match,p1)=>p1.toUpperCase())),accumulator instanceof Promise&&(accumulator=yield accumulator),accumulator[propertyName]}));return function(_x2,_x3){return _ref2.apply(this,arguments)}}(),event.detail)),searchTerm&&(_this.inputField.value=searchTerm,_this.lastValue=_this.inputField.value)}));return function(_x){return _ref.apply(this,arguments)}}()}connectedCallback(){this.shouldComponentRenderHTML()&&this.renderHTML(),this.shouldComponentRenderCSS()&&this.renderCSS(),this.disabled=this.hasAttribute("disabled"),this.readonly=this.hasAttribute("readonly"),this.error=this.hasAttribute("error"),this.placeholder&&this.inputField&&this.inputField.setAttribute("placeholder",this.placeholder),this.autocomplete&&this.inputField&&this.inputField.setAttribute("autocomplete",this.autocomplete),!this.search||!this.searchButton||this.readonly||this.disabled||this.error||(this.hasAttribute("delete-listener")?this.addEventListener("click",this.clickListener):this.searchButton.addEventListener("click",this.clickListener),this.hasAttribute("change-listener")&&this.inputField.addEventListener("change",this.changeListener),document.addEventListener("keydown",this.keydownListener),this.getAttribute("search")&&location.href.includes(this.getAttribute("search"))&&(this.inputField.value=decodeURIComponent(location.href.split(this.getAttribute("search"))[1])),this.getAttribute("answer-event-name")&&document.body.addEventListener(this.getAttribute("answer-event-name"),this.answerEventListener))}disconnectedCallback(){!this.search||!this.searchButton||this.readonly||this.disabled||this.error||(this.hasAttribute("delete-listener")?this.removeEventListener("click",this.clickListener):this.searchButton.removeEventListener("click",this.clickListener),this.hasAttribute("change-listener")&&this.inputField.removeEventListener("change",this.changeListener),document.removeEventListener("keydown",this.keydownListener),this.getAttribute("answer-event-name")&&document.body.removeEventListener(this.getAttribute("answer-event-name"),this.answerEventListener))}attributeChangedCallback(name){this[name]=this.hasAttribute(name)}shouldComponentRenderCSS(){return!this.root.querySelector("style[_css]")}shouldComponentRenderHTML(){return!this.inputField}renderCSS(){this.css="\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n      }\n\n      :host {\n        display: block;\n      }\n\n      .mui-form-group {\n        font-family: var(--font-family);\n        margin-bottom: var(--margin-bottom, var(--content-spacing));\n        max-width: var(--max-width, none);\n      }\n\n      label {\n        font-size: var(--font-size);\n        font-weight: 700;\n        letter-spacing: 0.03em;\n        line-height: 1;\n        color: var(--color);\n        display: block;\n        margin-bottom: 0.625em;\n      }\n\n      input {\n        caret-color: var(--caret-color, var(--input-color, var(--color-secondary, var(--color))));\n        display: block;\n        padding: 0.625em 1em;\n        width: 100%;\n        font-family: inherit;\n        font-size: var(--input-font-size, var(--font-size));\n        line-height: 1.4;\n        color: var(--input-color, var(--color));\n        appearance: none;\n        background: var(--input-bg-color, var(--m-gray-200));\n        border: var(--border, 1px solid transparent);\n        transition: background ease-out .3s, border-color ease-out .3s;\n      }\n\n      input::placeholder {\n        color: var(--placeholder-color, var(--m-gray-500));\n        opacity: 1;\n      }\n\n      input:focus {\n        outline: none;\n        box-shadow: none;\n      }\n\n      input:focus:not(:read-only):not(:invalid) {\n        background: #fff;\n        border: var(--border-focus, var(--border, 1px solid transparent));\n        border-color: var(--border-color-focus, var(--border-color, var(--m-gray-500)));\n      }\n\n      input:visited {\n        text-decoration: none;\n      }\n\n      input:disabled,\n      input:read-only {\n        cursor: not-allowed;\n      }\n\n      :host([search]) .mui-form-group {\n        position: relative;\n      }\n\n      :host([search]) input {\n        border-color: var(--search-input-border-color, var(--m-gray-300));\n        padding: var(--search-input-padding, 0.75em var(--content-spacing));\n        padding-right: max(2.5em, 35px);\n        border-radius: var(--border-radius, 0.5em);\n        width: var(--search-input-width-big, var(--search-input-width, 100%));\n        min-width: 9.7em;\n      }\n\n      :host([search]) input::-webkit-search-cancel-button {\n        margin-right: 0.5em;\n      }\n\n      :host([search]) button {\n        position: absolute;\n        bottom: 0.5em;\n        right: 0.47em;\n        padding: 0;\n        border: 0;\n        background: transparent;\n        outline: none;\n        appearance: none;\n        box-shadow: none;\n        font-family: inherit;\n        font-size: var(--input-font-size, var(--font-size));\n        line-height: var(--input-line-height, 0.5em);\n        color: var(--icon-color, var(--color-secondary, var(--color)));\n        font-style: normal;\n        cursor: pointer;\n        transition: color ease-out .3s;\n      }\n\n      :host([search]) button svg {\n        height: var(--svg-size, 2em);\n        width: var(--svg-size, 2em);\n      }\n\n      :host([disabled]) button,\n      :host([readonly]) button {\n        cursor: not-allowed;\n      }\n\n      :host([error]) label,\n      :host([error]) input::placeholder,\n      :host([search]) button.error,\n      label.error {\n        color: var(--color-error, var(--m-red-700));\n      }\n\n      :host([error]) input,\n      :host([error]) input:focus,\n      input:invalid {\n        border-color: var(--color-error, var(--m-red-700));\n        color: var(--color-error, var(--m-red-700));\n        background: var(--input-color-bg-error, var(--m-yellow-300));\n      }\n\n      @media (hover: hover) {\n        input:hover:not(:disabled):not(:read-only):not(:invalid) {\n          border-color: var(--border-color-hover, var(--border-color, var(--m-gray-500)));\n          caret-color: var(--caret-color-hover, var(--input-color-hover, var(--color-hover, var(--color))));\n        }\n\n        :host([search]) input:hover {\n          border-color: var(--search-input-border-color-hover, var(--search-input-border-color, var(--m-gray-300)));\n        }\n\n        :host([search]:hover) button {\n          color: var(--icon-color-hover, var(--color-hover, var(--color)));\n        }\n\n        :host([error]) input:hover:not(:disabled):not(:read-only) {\n          border-color: var(--color-error-hover, var(--color-error, var(--m-red-700)));\n        }\n      }\n\n      @media only screen and (max-width: _max-width_) {\n        :host([search]) input {\n          padding: var(--search-input-padding-mobile, var(--search-input-padding, 0.75em var(--content-spacing-mobile)));\n          border-radius: var(--border-radius-mobile, var(--border-radius, 0.571em));\n        }\n        :host([search]) button {\n          right: var(--content-spacing-mobile);\n        }\n        .mui-form-group {\n          max-width: var(--max-width-mobile, var(--max-width, none));\n        }\n        :host([search]) input::-webkit-search-cancel-button {\n          margin-right: 2.5em;\n        }\n        label, input, :host([search]) button {\n          font-size: var(--font-size-mobile, var(--font-size));\n        }\n      }\n    "}renderHTML(){this.html='\n      <div class="mui-form-group">\n        '.concat(this.renderLabelHTML(),'\n        <input id="').concat(this.inputId,'" name="').concat(this.inputId,'" type="').concat(this.inputType,'" />\n        ').concat(this.renderSearchHTML(),"\n      </div>\n    "),this.inputField.setAttribute("enterkeyhint",this.hasAttribute("enterkeyhint")?this.getAttribute("enterkeyhint"):"search")}renderLabelHTML(){return this.labelText?'<label for="'.concat(this.inputId,'">').concat(this.labelText,"</label>"):""}renderSearchHTML(){return this.search?'\n    <button type="button" title="Search">\n      <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" class="icon-stroke-width" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M21 21L16.65 16.65" class="icon-stroke-width" stroke-linecap="round" stroke-linejoin="round"></path>\n      </svg>\n    </button>':""}get inputId(){return this.getAttribute("inputId")}get inputType(){return this.hasAttribute("type")&&this.allowedTypes.includes(this.getAttribute("type"))?this.getAttribute("type"):"text"}get labelField(){return this.root.querySelector("label")}get inputField(){return this.root.querySelector("input")}get searchButton(){return this.root.querySelector("button")}get placeholder(){return this.getAttribute("placeholder")}get autocomplete(){return this.getAttribute("autocomplete")}get search(){return this.hasAttribute("search")}get disabled(){return this.hasAttribute("disabled")}set disabled(isDisabled){this.inputField&&(isDisabled?this.inputField.setAttribute("disabled",""):this.inputField.removeAttribute("disabled"))}get readonly(){return this.hasAttribute("readonly")}set readonly(isReadOnly){this.inputField&&(isReadOnly?this.inputField.setAttribute("readonly",""):this.inputField.removeAttribute("readonly"))}get error(){return this.hasAttribute("error")}set error(isInvalid){this.labelField&&(isInvalid?this.labelField.classList.add("error"):this.labelField.classList.remove("error")),this.textareaField&&(isInvalid?this.textareaField.setAttribute("aria-invalid","true"):this.textareaField.removeAttribute("aria-invalid")),this.searchButton&&(isInvalid?this.searchButton.classList.add("error"):this.searchButton.classList.remove("error"))}}}}]);