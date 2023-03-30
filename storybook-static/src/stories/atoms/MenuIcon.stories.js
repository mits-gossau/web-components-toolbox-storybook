// MenuIcon.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/atoms/menuIcon/MenuIcon"
).then((module) => self.customElements.define("a-menu-icon", module.default));

export default {
  title: "Atoms/MenuIcon",
  component: "a-menu-icon",
};

export const Default = () =>
  html` <div style="background-color: grey; padding: 20px"><a-menu-icon /></div> `;
