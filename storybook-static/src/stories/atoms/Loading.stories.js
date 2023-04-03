// Loading.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/loading/Loading").then(
  (module) => self.customElements.define("a-loading", module.default)
);

export default {
  title: "Atoms/Loading",
  component: "a-loading",
};

export const Default = () => html` <a-loading /> `;
