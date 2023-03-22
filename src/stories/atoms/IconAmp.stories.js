// Arrow.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/iconAmp/IconAmp").then(
  (module) => self.customElements.define("a-icon-amp", module.default)
);

export default {
  title: "Atoms/IconAmp",
  component: "a-icon-amp",
};

export const Default = () => html` <a-icon-amp /> `;
