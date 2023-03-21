// Breadcrumb.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/breadcrumb/Breadcrumb").then((module) =>
  self.customElements.define("a-breadcrumb", module.default)
);

export default {
  title: "Atoms/Breadcrumb",
  component: "a-breadcrumb",
};

export const Default = () =>
  html`
    <a-breadcrumb icon="src/web-components-toolbox/src/icons/chevron_right.svg"
      ><ul>
        <li><a href="#">Home</a></li>
        <li><span></span></li>
        <li><a href="#">Item</a></li>
        <li><span></span></li>
        <li><a href="#">Lorem</a></li>
      </ul></a-breadcrumb
    >
  `;
