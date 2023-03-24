// Flockler.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/flockler/Flockler"
).then((module) => self.customElements.define("m-flockler", module.default));

export default {
  title: "Molecules/Flockler",
  component: "m-flockler",
};

export const Default = () =>
  html`
    <m-flockler
      site-id="16dd9acca8d0179e9a41a44f681583c4"
      embed-id="17351b12b2d0ef35d9212fc920f01d7c"
      namespace="flockler-default-"
    />
  `;
