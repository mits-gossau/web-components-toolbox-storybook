"use strict";(self.webpackChunkweb_components_toolbox_storybook=self.webpackChunkweb_components_toolbox_storybook||[]).push([[9734],{"./src/web-components-toolbox/src/es/components/atoms/googleMaps/GoogleMaps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>GoogleMaps});var _prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/web-components-toolbox/src/es/components/prototypes/Shadow.js"),importMeta={url:new URL("./src/web-components-toolbox/src/es/components/atoms/googleMaps/GoogleMaps.js",document.baseURI).href};class GoogleMaps extends((0,_prototypes_Shadow_js__WEBPACK_IMPORTED_MODULE_0__.j)()){constructor(){super(...arguments),this.MAP_URL="https://maps.googleapis.com/maps/api/js?v=weekly&key=".concat(this.apiKey,"&callback=initMap"),this.DEFAULT_COORDINATES={lat:47.3756,lng:8.67532},this.iframeUrl||(this.googleMapTransport=event=>{var eventTarget=event.target,windowOpen=position=>{var saddr=position&&position.coords?"&saddr=".concat(position.coords.latitude,",").concat(position.coords.longitude):"";self.open("https://www.google.com/maps?daddr=".concat(this.lat,",").concat(this.lng).concat(saddr).concat(eventTarget.id?"&dirflg=".concat(eventTarget.id):eventTarget.parentElement&&eventTarget.parentElement.id?"&dirflg=".concat(eventTarget.parentElement.id):""),"_blank")};navigator.geolocation.getCurrentPosition(windowOpen,windowOpen)})}connectedCallback(){this.shouldComponentRenderCSS()&&this.renderCSS(),this.shouldComponentRenderHTML()&&this.renderHTML(),this.transportIcons&&this.transportIcons.forEach((transportIcon=>{transportIcon.addEventListener("click",this.googleMapTransport)}))}disconnectedCallback(){this.transportIcons.forEach((transportIcon=>{transportIcon.removeEventListener("click",this.googleMapTransport)}))}shouldComponentRenderCSS(){return!this.root.querySelector(":host > style[_css], ".concat(this.tagName," > style[_css]"))}shouldComponentRenderHTML(){return!this.scripts.length}renderCSS(){this.css=" \n    :host {\n       display:var(--display, block);\n       position:var(--position, relative);\n       width: var(--width, 100%) !important;\n    }\n    :host > #map {\n      width: var(--map-width, 100%);\n      height: var(--map-height, 75vh);\n    }  \n    :host > hr {\n      display: none;\n    }\n    :host .control-events {\n      background-color: #fff;\n      box-shadow: 2px 2px 2px -2px #999;\n      height: 81px;\n      padding: 0 12px 0 0;\n      position: absolute;\n      right: 70px;\n      top: 455px;\n      width: 220px;\n      z-index: 1;\n    }\n    :host .control-events > div {\n      margin:6px 0 6px 6px;\n    }\n    :host iframe {\n      border:var(--border, none);\n      width:var(--width, 100%);\n      height:var(--height, 75vh);\n    }\n    @media only screen and (max-width: _max-width_) {\n      :host {\n        display: flex !important;\n        flex-direction: column;\n      }\n      :host > #map {\n        height: var(--map-height-mobile, 25vh);\n        order: 1;\n        width: var(--map-width-mobile, 100%);\n      }  \n      :host > hr {\n        display: block;\n        order: 3;\n        width: var(--hr-width, 200px);\n      }\n      :host .control-events{\n        box-shadow: none;\n        height: 70px;\n        order: 2;\n        padding: 15px 0 0 0;\n        position: static;\n        width: 100%;\n      }\n      :host .control-events > div {\n        margin:0 0 6px var(--control-events-div-margin-left-mobile, 0);\n      }\n    }";var styles=[{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"../../../../css/style.css"),namespaceFallback:!0}];switch(this.getAttribute("namespace")){case"google-maps-default-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./default-/default-.css"),namespace:!1},...styles],!1);case"google-maps-iframe-":return this.fetchCSS([{path:"".concat(importMeta.url.replace(/(.*\/)(.*)$/,"$1"),"./iframe-/iframe-.css"),namespace:!1},...styles],!1)}}renderHTML(){var element=null;if(this.iframeUrl){var iframe=document.createElement("iframe");iframe.src=this.iframeUrl,iframe.name="map",element=iframe}else{var mapDiv=document.createElement("div");mapDiv.setAttribute("id","map"),this.loadDependency().then((googleMap=>{var map=this.createMap(googleMap,mapDiv,this.lat,this.lng);this.setMarker(googleMap,map,this.lat,this.lng)})),element=mapDiv}this.html=element}loadDependency(){return self.initMap=()=>{},new Promise((resolve=>{var googleMapScript=document.createElement("script");googleMapScript.setAttribute("type","text/javascript"),googleMapScript.setAttribute("async",""),googleMapScript.setAttribute("src",this.MAP_URL),googleMapScript.onload=()=>{"google"in self&&resolve(self.google.maps)},this.html=googleMapScript}))}createMap(googleMap,mapTarget,lat,lng){return new googleMap.Map(mapTarget,{center:{lat,lng},zoom:15,scrollwheel:!1,mapTypeControl:!1,streetViewControl:!1,zoomControl:!0,panControl:!0,styles:[{featureType:"landscape",stylers:[{saturation:-100},{lightness:60}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"on"},{lightness:30}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ef8c25"},{lightness:40}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#b6c54c"},{lightness:40},{saturation:-40}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]}]})}setMarker(googleMap,map,lat,lng){var marker=new googleMap.Marker({position:{lat,lng},icon:this.markerIcon});marker.setMap(map),marker.setAnimation(4)}get scripts(){return this.root.querySelectorAll("script")}get lat(){return Number(this.getAttribute("lat"))||this.DEFAULT_COORDINATES.lat}get lng(){return Number(this.getAttribute("lng"))||this.DEFAULT_COORDINATES.lng}get transportIcons(){var wrapper=this.root.querySelector("o-wrapper");if(wrapper)return wrapper.root?wrapper.root.querySelectorAll("a"):wrapper.querySelectorAll("a")}get apiKey(){return this.getAttribute("api-key")||""}get markerIcon(){return this.getAttribute("marker-icon")}get iframeUrl(){return this.getAttribute("iframe-url")||""}}}}]);