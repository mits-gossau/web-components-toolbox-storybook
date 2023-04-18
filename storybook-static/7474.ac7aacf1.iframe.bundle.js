"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[7474],{"./src/web-components-toolbox/src/es/components/molecules/navigation/Navigation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Navigation});var _prototypes_Mutation_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Mutation.js"),_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/molecules/navigation/Navigation.js",document.baseURI).href};class Navigation extends((0,_prototypes_Mutation_js__WEBPACK_IMPORTED_MODULE_0__.m)()){constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];super(Object.assign(options,{mutationObserverInit:{attributes:!0,attributeFilter:["aria-expanded"]}}),...args),this.isDesktop=this.checkMedia("desktop"),this.clickListener=event=>{this.checkIfWrapped(!0),this.setFocusLostClickBehavior(),this.hasAttribute("no-scroll")&&this.isDesktop===(this.isDesktop=this.checkMedia("desktop"))&&(!this.isDesktop&&this.classList.contains("open")||this.isDesktop&&this.root.querySelector("li.open"))&&(this.dispatchEvent(new CustomEvent(this.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!0,origEvent:event,this:this},bubbles:!0,cancelable:!0,composed:!0})),"desktop"!==this.getMedia()&&this.nav.setAttribute("aria-expanded","true")),self.requestAnimationFrame((timeStamp=>this.backgroundAdjust())),this.liClickListener(event)};var timeout=null;this.resizeListener=event=>{this.hasAttribute("no-scroll")&&(this.classList.remove(this.getAttribute("no-scroll")||"no-scroll"),this.nav.setAttribute("aria-expanded","desktop"===this.getMedia()?"true":"false")),this.clickListener(event),this.adjustArrowDirections(event),this.openClose(!1),clearTimeout(timeout),timeout=setTimeout((()=>this.checkIfWrapped(!0)),200)},this.liClickListener=event=>{event&&event.target&&(this.root.querySelector("nav > ul:not(.language-switcher)").classList[event.target.parentNode&&event.target.parentNode.classList.contains("open")?"add":"remove"]("open"),this.checkMedia("mobile")?this.adjustArrowDirections(event):Array.from(this.root.querySelectorAll("li.open")).forEach((link=>{link!==event.target.parentNode&&(link.classList.remove("open"),link.setAttribute("aria-expanded","false"),link.parentElement&&link.parentElement.classList.remove("open"))})))},this.selfClickListener=event=>{this.openClose(!1),Array.from(this.root.querySelectorAll("nav > ul:not(.language-switcher) > li > a-link")).forEach((aLink=>{var arrow=aLink.parentNode.querySelector("a-arrow");arrow&&arrow.setAttribute("direction",aLink.classList.contains("open")||aLink.parentNode.classList.contains("open")?"left":"right")}))}}connectedCallback(){this.hidden=!0;var showPromises=[];this.shouldComponentRenderCSS()&&showPromises.push(this.renderCSS()),this.shouldComponentRenderHTML()&&showPromises.push(this.renderHTML()),Promise.all(showPromises).then((()=>{this.hidden=!1,this.checkIfWrapped(!0),setTimeout((()=>this.checkIfWrapped(!0)),1e3),this.setFocusLostClickBehavior(),this.css="\n        :host {\n          --show: none;\n          --appear: none;\n        }\n      ",this.dispatchEvent(new CustomEvent(this.getAttribute("navigation-load")||"navigation-load",{detail:{child:this},bubbles:!0,cancelable:!0,composed:!0}))})),self.addEventListener("resize",this.resizeListener),self.addEventListener("click",this.selfClickListener),super.connectedCallback()}disconnectedCallback(){self.removeEventListener("resize",this.resizeListener),self.removeEventListener("click",this.selfClickListener),this.root.querySelectorAll("a-link").forEach((link=>link.removeEventListener("click",this.clickListener))),this.root.querySelectorAll("nav > ul:not(.language-switcher) > li").forEach((link=>link.removeEventListener("click",this.liClickListener))),super.disconnectedCallback()}mutationCallback(mutationList,observer){mutationList.forEach((mutation=>{mutation.target&&"false"===this.nav.getAttribute("aria-expanded")&&(Array.from(this.root.querySelectorAll("li.open")).forEach((link=>{link.classList.remove("open"),link.setAttribute("aria-expanded","false"),link.parentElement&&(link.parentElement.classList.remove("open"),link.parentElement.setAttribute("aria-expanded","false"))})),Array.from(this.root.querySelectorAll("a-link.open")).forEach((aLink=>{aLink.classList.remove("open"),aLink.parentElement&&aLink.parentElement.classList.remove("open")})),Array.from(this.root.querySelectorAll("ul.open")).forEach((ul=>ul.classList.remove("open"))))}))}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!this.nav}renderCSS(){var firstLevelCount=this.root.querySelectorAll("nav > ul > li").length;this.css="\n      :host{\n        color: black;\n        overscroll-behavior: contain;\n      }\n      :host a-link {\n        --padding: var(--a-link-content-spacing, 14px 10px);\n        --font-size: var(--a-link-font-size, 1rem);\n        --font-weight: var(--a-link-font-weight);\n        --line-height: var(--a-link-line-height);\n        --text-transform: var(--a-link-text-transform);\n        font-family: var(--a-link-font-family, var(--font-family));\n        font-weight: var(--a-font-weight, var(--font-weight, normal));\n      }\n      :host(.".concat(this.getAttribute("no-scroll")||"no-scroll",") a-link {\n        --color: var(--a-link-color-").concat(this.getAttribute("no-scroll")||"no-scroll",");\n        --padding: var(--a-link-content-spacing-").concat(this.getAttribute("no-scroll")||"no-scroll",", 14px 10px);\n        --font-size: var(--a-link-font-size-").concat(this.getAttribute("no-scroll")||"no-scroll",", 1rem);\n        --font-weight: var(--a-link-font-weight-").concat(this.getAttribute("no-scroll")||"no-scroll",");\n        --line-height: var(--a-link-line-height-").concat(this.getAttribute("no-scroll")||"no-scroll",");\n      }\n      :host(.").concat(this.getAttribute("no-scroll")||"no-scroll",") > nav > ul li ul a-link {\n        --font-size: var(--a-link-second-level-font-size, 1rem);\n        --font-weight: var(--a-link-second-level-font-weight, var(--a-link-font-weight));\n        --line-height: var(--a-link-second-level-line-height);\n        font-family: var(--a-link-second-level-font-family, var(--font-family));\n        font-weight: var(--a-font-weight, var(--font-weight, normal));\n      }\n      ").concat("true"===this.getAttribute("hover")?":host > nav > ul li:hover ul a-link,\n      :host > nav > ul li ul:hover a-link,":"","\n      :host > nav > ul li a-link.open ~ ul a-link {\n        --font-size: var(--a-link-second-level-font-size-").concat(this.getAttribute("no-scroll")||"no-scroll",", 1rem);\n        --font-weight: var(--a-link-second-level-font-weight-").concat(this.getAttribute("no-scroll")||"no-scroll",", var(--a-link-font-weight-").concat(this.getAttribute("no-scroll")||"no-scroll","));\n        --line-height: var(--a-link-second-level-line-height-").concat(this.getAttribute("no-scroll")||"no-scroll",");\n      }\n      :host(.").concat(this.getAttribute("no-scroll")||"no-scroll",") ul {\n        background-color: var(--background-color-").concat(this.getAttribute("no-scroll")||"no-scroll",", var(--background-color, black));\n      }\n      :host > nav > ul{\n        align-items: var(--align-items, center);\n        justify-content: var(--justify-content, normal);\n        display: flex;\n        flex-wrap: var(--flex-wrap, nowrap);\n        flex-direction: var(--flex-direction, row);\n        padding: var(--padding, calc(var(--content-spacing, 40px) / 2) 0);\n      }\n      :host(.").concat(this.getAttribute("no-scroll")||"no-scroll",") > nav > ul {\n        padding: var(--padding-").concat(this.getAttribute("no-scroll")||"no-scroll",", calc(var(--content-spacing, 40px) / 2) 0);\n      }\n      :host > nav > ul > li{\n        display: block;\n        padding: var(--li-padding, 0 calc(var(--content-spacing, 40px) / 4));\n      }\n      :host > nav > ul li > a-arrow {\n        display: none;\n        user-select: none;\n        visibility: hidden;\n      }\n      :host > nav > ul li:nth-child(n+").concat(firstLevelCount/2+1,") ul{\n        top: var(--li-ul-top-second-half, unset);\n        right: var(--li-ul-right-second-half, unset);\n        bottom: var(--li-ul-bottom-second-half, unset);\n        left: var(--li-ul-left-second-half, unset);\n      }\n      ").concat("true"===this.getAttribute("hover")?":host > nav > ul li:hover ul,\n      :host > nav > ul li ul:hover,":"","\n      :host > nav > ul li a-link.open ~ ul {\n        display: block;\n        margin: var(--li-ul-margin-").concat(this.getAttribute("no-scroll")||"no-scroll",");\n      }\n      :host > nav > ul li:last-child ul{\n        right: 0;\n      }\n      :host > nav > ul > li > ul li {\n        margin-bottom: var(--li-ul-margin-bottom, 0);\n      }\n      :host > nav > ul li ul li {\n        min-width: var(--min-width, 100px);\n      }\n      :host > nav > ul > li > ul > li:first-child{\n        padding-top: var(--padding-top, 6px);\n        border-top: var(--border-top, 1px solid) var(--hr-color, var(--color, white));\n      }\n      :host > nav > ul li.open > a-link, :host > nav > ul li.open > a-arrow{\n        --color: var(--color-open), var(--color));\n        --background-color: var(--background-color-open);\n      }\n      :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section a-link, :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section a-arrow {\n        --color: var(--section-color-open, var(--color-open), var(--color)));\n        --background-color: var(--section-background-color-open, var(--background-color-open));\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host {\n          --font-weight: var(--font-weight-mobile, normal);\n        }\n        :host a-link {\n          --font-size: var(--a-link-font-size-mobile, 2rem);\n          --text-align: var(--a-link-text-align-mobile, center);\n          --line-height: var(--a-link-line-height-mobile, var(--a-link-line-height, var(--line-height-mobile)));\n        }\n        :host(.").concat(this.getAttribute("no-scroll")||"no-scroll",") a-link {\n          --font-size: var(--a-link-font-size-").concat(this.getAttribute("no-scroll")||"no-scroll","-mobile, 2rem);\n          --line-height: var(--a-link-line-height-").concat(this.getAttribute("no-scroll")||"no-scroll","-mobile, var(--a-link-line-height-").concat(this.getAttribute("no-scroll")||"no-scroll",", var(--line-height-mobile)));\n        }\n        :host(.").concat(this.getAttribute("no-scroll")||"no-scroll",") > nav > ul li ul a-link {\n          --font-size: var(--a-link-second-level-font-size-mobile, var(--a-link-second-level-font-size, 1rem));\n        }\n        ").concat("true"===this.getAttribute("hover")?":host > nav > ul li:hover ul a-link,\n        :host > nav > ul li ul:hover a-link,":"","\n        :host > nav > ul li a-link.open ~ ul a-link {\n          --font-size: var(--a-link-second-level-font-size-").concat(this.getAttribute("no-scroll")||"no-scroll","-mobile, var(--a-link-second-level-font-size-").concat(this.getAttribute("no-scroll")||"no-scroll",", 1rem));\n        }\n        :host > nav > ul{\n          flex-direction: var(--flex-direction-mobile, var(--flex-direction, column));\n          padding: 0;\n        }\n        :host > nav > ul li.open > a-link, :host > nav > ul li.open > a-arrow{\n          --color: var(--a-arrow-color-hover, var(--color-hover));\n          --color-mobile: var(--color-open-mobile, var(--color-hover-mobile));\n        }\n        :host > nav > ul li > a-link{\n          flex-grow: 1;\n        }\n        :host > nav > ul > li:not(.no-arrow) > a-arrow {\n          visibility: visible;\n        }\n        :host > nav > ul > li a-arrow {\n          --color: var(--a-arrow-color);\n          display: var(--arrow-display, 'block');\n          min-height: var(--min-height-mobile, 50px);\n          min-width: var(--min-width-mobile, 50px);\n          text-align: right;\n          padding-right: var(--content-spacing-mobile);\n          padding-top: 3px;\n        }\n        :host > nav > ul > li a-link.active ~ a-arrow {\n          --color: var(--a-arrow-color-active);\n        }\n        :host > nav > ul ul > li > a-arrow {\n          display: none;\n        }\n        :host > nav > ul > li a-link:hover ~ a-arrow, :host > nav > ul > li.open a-link:hover ~ a-arrow, :host > nav > ul > li a-link ~ a-arrow:hover, :host > nav > ul > li.open a-link ~ a-arrow:hover {\n          --color: var(--color-hover);\n        }\n        :host > nav > ul > li.open a-arrow {\n          --color: var(--color-secondary);\n        }\n        :host > nav > ul li:hover ul,\n        :host > nav > ul li:not(.open) a-link.open ~ ul,\n        :host > nav > ul li ul:hover{\n          display: none;\n        }\n        :host > nav > ul li.open ul{\n          display: block;\n        }\n        :host > nav > ul > li > ul li {\n          flex-wrap: unset;\n          margin-bottom: var(--li-ul-margin-bottom-mobile, 0);\n        }\n        :host > nav > ul li.open > a-link, :host > nav > ul li.open > a-arrow{\n          --color: var(--color-open-mobile, var(--color-open, var(--color)));\n          --background-color: var(--background-color-open);\n        }\n      }\n    "),this.css="\n      :host > nav > ul {\n        background-color: var(--background-color);\n        margin: 0;\n      }\n      :host > nav > .language-switcher {\n        display: none;\n      }\n      :host > nav > ul > li {\n        margin: var(--margin);\n        border-bottom: var(--border-width, 2px) solid transparent;\n        transition: all 0.1s ease;\n      }\n      :host > nav > ul:not(.open):not(:hover) > li.active:not(.search), :host > nav > ul > li:hover:not(.search) {\n        border-bottom: var(--border-width, 2px) solid var(--border-color, var(--color));\n      }\n      :host > nav > ul li:not(:hover).open {\n        border-bottom: var(--border-width, 2px) solid var(--border-color, var(--color));\n      }\n      :host > nav > ul > li > div.background {\n        cursor: auto;\n        display: none;\n        position: fixed;\n        background-color: var(--m-gray-500);\n        width: var(--ul-li-div-background-width, 100vw);\n        height: 100vw;\n        left: var(--ul-li-div-background-left, 0);\n        top: 0;\n        opacity: 0;\n      }\n      :host > nav > ul > li.open > div.background {\n        display: block;\n        opacity: 0.54;\n      }\n      :host > nav > ul li > ".concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section {\n        --a-link-content-spacing: 0;\n        --a-link-font-size: 1rem;\n        --a-link-font-weight: normal;\n        --justify-content: left;\n        --align-items: normal;\n        background-color: var(--section-background-color, var(--background-color, white));\n        cursor: auto;\n        display: none !important;\n        position: absolute;\n        left: 0;\n        top: 0;\n        margin-top: 3.95em;\n        overflow: auto;\n        box-sizing: border-box;\n        max-height: 80vh;\n        padding: 2.5rem calc((100% - var(--content-width-custom, var(--content-width, 55%))) / 2);\n        transition: all 0.2s ease;\n        z-index: var(--li-ul-z-index, auto);\n      }\n      :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section {\n        display: flex !important;\n      }\n      :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li {\n        list-style: var(--list-style, none);\n        padding-bottom: 0.5rem;\n      }\n      :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li:first-child, :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li.bold {\n        --a-link-font-family: var(--font-family-bold, var(--font-family, inherit));\n        --a-link-font-size: 1.25rem;\n        padding-bottom: 0.875rem;\n      }\n      :host > nav > ul > li.search {\n        flex-grow: 1;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 0;\n        padding: var(--search-li-padding, var(--li-padding, 0 calc(var(--content-spacing, 40px) / 4)));\n      }\n      :host(.wrapped) > nav > ul > li.search {\n        justify-content: flex-start;\n      }\n      :host > nav > ul > li > a-input{\n        --margin-bottom: 0;\n        --search-input-border-color: transparent;\n        --search-input-padding-mobile: var(--a-link-content-spacing);\n      }\n      @media only screen and (max-width: ").concat(self.Environment.mobileBreakpoint(),") {\n        :host {\n          --input-line-height: 1.5;\n        }\n      }\n      @media only screen and (max-width: _max-width_) {\n        :host {\n          --a-link-content-spacing-no-scroll: 1.1429rem 1.2143rem;\n          --a-link-content-spacing: var(--a-link-content-spacing-no-scroll);\n          --a-link-font-size-mobile: var(--a-link-font-size-no-scroll-mobile);\n          --a-link-font-size-mobile: var(--a-link-font-size-no-scroll-mobile);\n          --a-link-font-size-no-scroll-mobile: 1.1429rem;\n          --a-link-font-weight: normal;\n          --a-link-second-level-font-size-mobile: 1.2857rem;\n          --a-link-text-align-mobile: left;\n          --height: auto;\n          --li-padding: 0;\n          --margin: 0;\n          --min-height-mobile: 0;\n          background-color: var(--background-color, black) !important;\n          scrollbar-color: var(--color-secondary) var(--background-color);\n        }\n        /* fix: mobile url address bar covers the footer part of the navigation */\n        :host > nav {\n          height: calc(100% + 300px)\n        }\n        :host > nav {\n          background-color: var(--background-color, black);\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start; /* must be up, otherwise the iphone hides it behind the footer bar */\n          min-height: calc(100vh - var(--header-default-m-navigation-top-mobile));\n        }\n        :host > nav > .language-switcher {\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n        }\n        :host > nav > .language-switcher > li, :host > nav > .language-switcher > li:hover:not(.search) {\n          border: 0;\n          width: auto;\n        }\n        :host > nav > ul > li > a-arrow{\n          padding-bottom: 2px;\n        }\n        :host > nav > .language-switcher > li > a-arrow{\n          display: none;\n        }\n        :host > nav > ul.open > li:not(.open), :host > nav > ul.open ~ ul.language-switcher {\n          display: none;\n        }\n        :host > nav > ul > li{\n          align-items: center;\n          box-sizing: border-box;\n          border-bottom: var(--header-default-border-bottom);\n          display: flex;\n          justify-content: space-between;\n          width: var(--ul-li-width-mobile, 100%);\n        }\n        :host > nav > ul > li.search{\n          width: var(--ul-li-width-search-mobile, var(--ul-li-width-mobile, 100%));\n        }\n        :host > nav > ul:not(.open):not(:hover) > li.active:not(.search), :host > nav > ul > li.active:not(.search), :host > nav > ul > li:hover:not(.search) {\n          border-bottom: var(--header-default-border-bottom);\n        }\n        :host > nav > ul li:not(:hover).open {\n          border: none;\n        }\n        :host > nav > ul li.open {\n          --a-link-content-spacing-no-scroll: var(--a-link-font-size-no-scroll-mobile) 1.2143rem var(--a-link-font-size-no-scroll-mobile) 0;\n          --a-link-content-spacing: var(--a-link-content-spacing-no-scroll);\n          --a-link-font-size-mobile: var(--a-link-font-size-no-scroll-mobile);\n          --a-link-font-size-no-scroll-mobile: 1.7143rem;\n          border-bottom: var(--header-default-border-bottom);\n          flex-direction: row-reverse;\n        }\n        :host > nav > ul > li > div.background {\n          display: none !important;\n        }\n        :host > nav > ul li a-link {\n          display: flex;\n          align-items: center;\n        }\n        :host > nav > ul li > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section {\n          top: auto;\n          margin-top: calc(3rem + 1px);\n          max-height: unset;\n          padding: 0 0 4rem 0;\n          z-index: 100;\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section {\n          --a-link-content-spacing-no-scroll: var(--a-link-content-spacing-no-scroll-custom, 0.5rem 0.5rem 0.5rem calc(2rem + min(30vw, 50px)));\n          --a-link-content-spacing: var(--a-link-content-spacing-no-scroll);\n          --a-link-font-size-mobile: 1.1429rem;\n          --a-link-second-level-font-size-mobile: var(--a-link-font-size-mobile);\n          animation: open .2s ease;\n          left: 0;\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul {\n          --padding-mobile: var(--padding-mobile-custom, 0 0 0.8571rem);\n          --padding-first-child-mobile: var(--padding-mobile);\n          --padding-last-child-mobile: var(--padding-mobile);\n          border-bottom: var(--header-default-border-bottom);\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul:first-child {\n          --padding-mobile: var(--padding-mobile-first-child-custom, 0.8571rem 0);\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul:last-child {\n          margin-bottom: 100px !important; /* must be up, otherwise the iphone hides it behind the footer bar */\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li:first-child, :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li.bold {\n          --a-link-content-spacing-no-scroll: var(--a-link-content-spacing-no-scroll-custom, 0.5rem 0.5rem 0.5rem min(30vw, 50px));\n          --a-link-content-spacing: var(--a-link-content-spacing-custom, var(--a-link-content-spacing-no-scroll));\n          --a-link-font-size-mobile: 1.2857rem;\n          --a-link-second-level-font-size-mobile: var(--a-link-font-size-mobile);\n          padding-bottom: 0;\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li {\n          --line-height-mobile: 1.5em;\n          line-height: 0;\n          padding-bottom: 0;\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li.bold {\n          border-bottom: var(--header-default-border-bottom);\n          padding: var(--padding-mobile);\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li.bold:first-child {\n          padding-top: 0;\n        }\n        :host > nav > ul li.open > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section > ul > li.bold:last-child {\n          border-bottom: 0;\n          padding-bottom: 0;\n        }\n        :host > nav > ul > li.search > * {\n          width: 100%;\n        }\n        :host > nav > ul > li.search {\n          --search-input-width: 100%;\n          margin-top: 0;\n        }\n        :host > nav > ul > li.search {\n          padding: var(--search-li-padding-mobile, var(--search-li-padding, 0 calc(var(--content-spacing, 40px) / 4)));\n        }\n      }\n      @keyframes open {\n        0% {left: -100vw}\n        100% {left: 0}\n      }\n    ");var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/reset.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("namespace")){case"navigation-default-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1}],!1);case"navigation-alnatura-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./alnatura-/alnatura-.css"),namespace:!1},...styles],!1).then((fetchCSSParams=>{fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--navigation-default-/g,"--navigation-alnatura-")}));case"navigation-nature-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./nature-/nature-.css"),namespace:!1},...styles],!1).then((fetchCSSParams=>{fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--navigation-default-/g,"--navigation-nature-")}));case"navigation-yearbooks-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./alnatura-/alnatura-.css"),namespace:!1},{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./yearbooks-/yearbooks-.css"),namespace:!1},...styles],!1).then((fetchCSSParams=>{fetchCSSParams[0].styleNode.textContent=fetchCSSParams[0].styleNode.textContent.replace(/--navigation-default-/g,"--navigation-yearbooks-"),fetchCSSParams[1].styleNode.textContent=fetchCSSParams[1].styleNode.textContent.replace(/--navigation-alnatura-/g,"--navigation-yearbooks-")}));default:return Promise.resolve()}}renderHTML(){var arrowDirections=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["left","right"];return this.nav=this.root.querySelector("nav")||document.createElement("nav"),this.nav.setAttribute("aria-labelledby","hamburger"),this.nav.setAttribute("aria-expanded","desktop"===this.getMedia()?"true":"false"),Array.from(this.root.children).forEach((node=>{if(node.getAttribute("slot")||"STYLE"===node.nodeName||"NAV"===node.tagName)return!1;this.nav.appendChild(node)})),this.html=this.nav,this.loadChildComponents().then((children=>{Array.from(this.root.querySelectorAll("a")).forEach((a=>{var li=a.parentElement;li.querySelector("section")&&li.setAttribute("aria-expanded","false"),li.querySelector("ul")||li.classList.add("no-arrow");var aLink=new children[0][1](a,{namespace:this.getAttribute("namespace")||"",namespaceFallback:this.hasAttribute("namespace-fallback"),mobileBreakpoint:this.mobileBreakpoint});aLink.setAttribute("hit-area",this.getAttribute("hit-area")||"true"),this.hasAttribute("set-active")&&aLink.setAttribute("set-active",this.getAttribute("set-active")),a.classList.contains("active")&&(aLink.classList.add("active"),li.classList.add("active"));var arrow=new children[1][1]({namespace:this.getAttribute("namespace")||"",namespaceFallback:this.hasAttribute("namespace-fallback"),mobileBreakpoint:this.mobileBreakpoint});arrow.setAttribute("direction",arrowDirections[1]);var arrowClickListener=event=>{this.hasAttribute("focus-lost-close-mobile")&&this.adjustArrowDirections(event,arrowDirections),li.classList.toggle("open"),li.setAttribute("aria-expanded",li.classList.contains("open")?"true":"false"),arrow.setAttribute("direction",li.classList.contains("open")?arrowDirections[0]:arrowDirections[1])},aLinkClickListener=event=>{if(event.target){var _a=null;if(event.target.root&&((_a=event.target.root.querySelector("a"))||"right"===event.target.getAttribute("direction")&&event.target.previousElementSibling&&event.target.previousElementSibling.root&&(_a=event.target.previousElementSibling.root.querySelector("a"))))if(arrowClickListener(),_a.getAttribute("href")&&"#"!==_a.getAttribute("href"))_a.getAttribute("href").includes("#")?this.dispatchEvent(new CustomEvent(this.getAttribute("click-anchor")||"click-anchor",{detail:{selector:_a.getAttribute("href")},bubbles:!0,cancelable:!0,composed:!0})):_a.getAttribute("href")&&(event.preventDefault(),"desktop"!==this.getMedia()&&this.setAttribute("style","display: none;"),setTimeout((()=>this.removeAttribute("style")),3e3),self.open(_a.getAttribute("href"),_a.getAttribute("target")||"_self"));else{var wrapper,isOpen=event.target.classList.contains("open");event.preventDefault(),this.focusLostClose&&(event.stopPropagation(),this.hasAttribute("focus-lost-close-mobile")&&this.hasAttribute("no-scroll")&&this.dispatchEvent(new CustomEvent(this.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!isOpen,origEvent:event,this:this},bubbles:!0,cancelable:!0,composed:!0}))),this.adjustArrowDirections(event,arrowDirections,"a-link.open"),event.target&&event.target.parentNode&&event.target.parentNode.parentNode&&"UL"===event.target.parentNode.parentNode.tagName&&event.target.parentNode.parentNode.classList[isOpen?"remove":"add"]("open"),event.target.classList[isOpen?"remove":"add"]("open"),event.target&&event.target.parentNode&&(wrapper=event.target.parentNode.querySelector("o-nav-wrapper"))&&wrapper.calcColumnWidth()}}};arrow.addEventListener("click",aLinkClickListener),aLink.addEventListener("click",aLinkClickListener),self.addEventListener("click",(event=>{this.focusLostClose&&(this.hasAttribute("focus-lost-close-mobile")&&(this.adjustArrowDirections(event,arrowDirections),this.hasAttribute("no-scroll")&&(this.dispatchEvent(new CustomEvent(this.getAttribute("no-scroll")||"no-scroll",{detail:{hasNoScroll:!1,origEvent:event,this:this},bubbles:!0,cancelable:!0,composed:!0})),"desktop"!==this.getMedia()&&this.nav.setAttribute("aria-expanded","false")),this.openClose(!1)),this.adjustArrowDirections(event,arrowDirections,"a-link.open"))})),li.prepend(arrow),a.replaceWith(aLink),li.prepend(aLink)})),Array.from(this.root.querySelectorAll("section")).forEach(((section,i)=>{var wrapper=new children[2][1]({mode:"false",mobileBreakpoint:this.mobileBreakpoint});wrapper.setAttribute("id","nav-section-".concat(i));var sectionChildren=Array.from(section.children);sectionChildren.forEach(((node,i)=>{"navigation-default-"===this.namespace&&sectionChildren.length<4&&self.innerWidth>1600&&wrapper.setAttribute("any-".concat(i+1,"-width"),"25%"),node.getAttribute("slot")||wrapper.root.appendChild(node)})),section.parentNode.prepend(this.getBackground()),section.replaceWith(wrapper)})),this.root.querySelectorAll("a-link").forEach((link=>link.addEventListener("click",this.clickListener))),this.root.querySelectorAll("nav > ul:not(.language-switcher) > li").forEach((link=>link.addEventListener("click",this.liClickListener))),this.html=this.style}))}loadChildComponents(){var linkPromise,arrowPromise,wrapperPromise,promises=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(this.childComponentsPromise)return this.childComponentsPromise;try{linkPromise=Promise.resolve({default:Link})}catch(error){linkPromise=__webpack_require__.e(6818).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/atoms/link/Link.js"))}try{arrowPromise=Promise.resolve({default:Arrow})}catch(error){arrowPromise=__webpack_require__.e(657).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/atoms/arrow/Arrow.js"))}try{wrapperPromise=Promise.resolve({Wrapper})}catch(error){wrapperPromise=__webpack_require__.e(9542).then(__webpack_require__.bind(__webpack_require__,"./src/web-components-toolbox/src/es/components/organisms/wrapper/Wrapper.js"))}return this.childComponentsPromise=Promise.all([linkPromise.then((module=>["a-link",module.default])),arrowPromise.then((module=>["a-arrow",module.default])),wrapperPromise.then((module=>[this.getAttribute("o-nav-wrapper")||"o-nav-wrapper",module.Wrapper((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_1__.j)())])),...promises]).then((elements=>(elements.forEach((element=>{customElements.get(element[0])||customElements.define(...element)})),elements)))}get focusLostClose(){return this.hasAttribute("focus-lost-close")&&"false"!==this.getAttribute("focus-lost-close")}getBackground(){var background=document.createElement("div");return background.classList.add("background"),background}setFocusLostClickBehavior(){clearTimeout(this._focusLostClickBehaviorTimeout),this._focusLostClickBehaviorTimeout=setTimeout((()=>{this.checkMedia("desktop")?this.setAttribute("focus-lost-close-mobile",""):this.removeAttribute("focus-lost-close-mobile")}),50)}adjustArrowDirections(event){var arrowDirections=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["left","right"],selector=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"li.open";event&&Array.from(this.root.querySelectorAll(selector)).forEach((link=>{var arrow;arrowDirections&&link.parentNode&&event.target&&!link.parentNode.classList.contains("open")&&(arrow=link.parentNode.querySelector("[direction=".concat(arrowDirections[0],"]")))&&arrow.setAttribute("direction",arrowDirections[1])}))}backgroundAdjust(){if(this.checkMedia("desktop")){var section;if(!(section=this.root.querySelector("li.open section")))return;this.style.textContent="",this.setCss("\n        :host > nav > ul > li.open > div.background {\n          top: ".concat(section.getBoundingClientRect().bottom,"px;\n        }\n      "),void 0,void 0,void 0,this.style)}}openClose(){var open=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];open||"desktop"===this.getMedia()||this.scroll({top:0,behavior:"smooth"}),open||"true"!==this.nav.getAttribute("aria-expanded")||(Array.from(this.root.querySelectorAll("li.open")).forEach((link=>{link.classList.remove("open"),link.setAttribute("aria-expanded","false"),link.parentElement&&(link.parentElement.classList.remove("open"),link.parentElement.setAttribute("aria-expanded","false"))})),Array.from(this.root.querySelectorAll("a-link.open")).forEach((aLink=>{aLink.classList.remove("open"),aLink.parentElement&&aLink.parentElement.classList.remove("open")})),Array.from(this.root.querySelectorAll("ul.open")).forEach((ul=>ul.classList.remove("open"))))}checkMedia(){var media=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("media");return(self.matchMedia("(max-width: ".concat(this.mobileBreakpoint,")")).matches?"mobile":"desktop")===media}get style(){return this._style||(this._style=((style=document.createElement("style")).setAttribute("protected","true"),style));var style}get liSearch(){return this.root.querySelector("li.search")||this.root.querySelector("li")}checkIfWrapped(resetCouter){"desktop"===this.getMedia()&&(this._checkIfWrappedCounter=resetCouter?1:this._checkIfWrappedCounter?this._checkIfWrappedCounter+1:1,self.requestAnimationFrame((timeStamp=>{if(this._checkIfWrappedCounter<30&&(!this.offsetHeight||!this.liSearch.offsetHeight))return setTimeout((()=>this.checkIfWrapped(!1)),1e3);this.classList[this.offsetHeight>this.liSearch.offsetHeight+5?"add":"remove"]("wrapped"),this.css="\n        @media only screen and (min-width: calc(".concat(this.mobileBreakpoint," + 1px)) {\n          :host > nav > ul li > ").concat(this.getAttribute("o-nav-wrapper")||"o-nav-wrapper"," > section {\n            margin-top: calc(").concat(this.root.querySelector("nav > ul").offsetHeight,"px + var(--section-margin-top-desktop, ").concat(Number(this.getAttribute("margin-top")||1),"px));\n          }\n        }\n      ")})))}getMedia(){return self.matchMedia("(min-width: calc(".concat(this.mobileBreakpoint," + 1px))")).matches?"desktop":"mobile"}}},"./src/web-components-toolbox/src/es/components/prototypes/Mutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Mutation});var _Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),_excluded=["attributeFilter","attributes","attributeOldValue"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Mutation=function Mutation(){var ChosenClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)();return class Mutation extends ChosenClass{constructor(){for(var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mutationObserverInit:void 0},_len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];if(super(options,...args),this.mutationObserverInit="object"==typeof options.mutationObserverInit?options.mutationObserverInit:Mutation.parseAttribute(this.getAttribute("mutationObserverInit")),this.mutationObserverInit&&(this.mutationObserverInit.attributes||this.mutationObserverInit.characterData||this.mutationObserverInit.childList)){if(this.mutationObserver=new MutationObserver(this.mutationCallback.bind(this)),this.mutationObserverInit=Object.assign({attributeFilter:void 0,attributes:!1,attributeOldValue:!0===this.mutationObserverInit.attributes,characterData:!1,characterDataOldValue:!0===this.mutationObserverInit.characterData,childList:!1,subtree:!1},this.mutationObserverInit),this.shadowRoot&&this.mutationObserverInit.attributes){var _this$mutationObserve=this.mutationObserverInit,{attributeFilter,attributes,attributeOldValue}=_this$mutationObserve,restObserverInit=_objectWithoutProperties(_this$mutationObserve,_excluded);this.mutationObserveStart=()=>{(restObserverInit.childList||restObserverInit.characterData)&&this.mutationObserver.observe(this.shadowRoot,restObserverInit),this.mutationObserver.observe(this,{attributeFilter,attributes,attributeOldValue})}}else this.mutationObserveStart=()=>{this.mutationObserver.observe(this.root,this.mutationObserverInit)};this.mutationObserveStop=()=>this.mutationObserver.disconnect()}else this.mutationObserveStart=()=>{},this.mutationObserveStop=()=>{},console.warn("MutationObserver got not started, due to missing options.mutationObserverInit. At least supply an empty object to activate the observer with the default settings!",this)}connectedCallback(){super.connectedCallback(),this.mutationObserveStart()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserveStop()}mutationCallback(mutationList,observer){}}}}}]);