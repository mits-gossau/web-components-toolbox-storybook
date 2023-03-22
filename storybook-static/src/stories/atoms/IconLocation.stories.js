// IconLocation.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/iconLocation/IconLocation").then(
  (module) => self.customElements.define("a-icon-location", module.default)
);

export default {
  title: "Atoms/IconLocation",
  component: "a-icon-location",
};

export const Default = () => html` <a-icon-location /> `;
