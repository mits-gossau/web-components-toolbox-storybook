// Arrow.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/arrow/Arrow").then((module) =>
  self.customElements.define("a-arrow", module.default)
);

export default {
  title: "Atoms/Arrow",
  component: "a-arrow",
};

export const Default = () => html` <a-arrow /> `;
