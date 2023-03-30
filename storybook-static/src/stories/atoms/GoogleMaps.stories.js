// GoogleMaps.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/atoms/googleMaps/GoogleMaps"
).then((module) => self.customElements.define("a-google-maps", module.default));

export default {
  title: "Atoms/GoogleMaps",
  component: "a-google-maps",
};

export const Default = () => html`<a-google-maps
  namespace="google-maps-default-"
  lat=""
  lng=""
  api-key=""
  marker-icon="./img/marker.svg"
>
  <div class="control-events">
    <div><strong>Wegbeschreibung</strong></div>
    <div>
      <o-wrapper
        namespace="wrapper-no-calc-column-width-"
        flex-nowrap-mobile
        no-calc-column-width
      >
        <a id="" href="#">
          <a-picture defaultSource="./img/directions-driving.svg" alt="" />
        </a>
        <a id="transit" href="#">
          <a-picture defaultSource="./img/directions-transit.svg" alt="" />
        </a>
        <a id="bicycling" href="#">
          <a-picture defaultSource="./img/directions-bicycling.svg" alt="" />
        </a>
        <a id="walking" href="#">
          <a-picture defaultSource="./img/directions-walking.svg" alt="" />
        </a>
      </o-wrapper>
    </div>
  </div>
</a-google-maps> `;

export const Iframe = () => html`
  <a-google-maps
    namespace="google-maps-iframe-"
    iframe-url="https://snazzymaps.com/embed/241515"
  ></a-google-maps>
`;
