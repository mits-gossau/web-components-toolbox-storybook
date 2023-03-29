// Button.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/atoms/button/Button"
).then((module) => self.customElements.define("a-button", module.default));

export default {
  title: "Atoms/Button",
  component: "a-button",
};

export const Primary = () => html`
  <a-button namespace="button-primary-">Button</a-button>
`;

export const Secondary = () => html`
  <a-button namespace="button-secondary-">Button</a-button>
`;

export const Quaternary = () => html`
  <a-button namespace="button-quaternary-">Button</a-button>
`;

export const Download = () => html`
  <a-button namespace="button-download-">Button</a-button>
`;

export const Category = () => html`
  <a-button namespace="button-category-">Button</a-button>
`;
