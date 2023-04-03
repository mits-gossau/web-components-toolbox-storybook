// Logo.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/logo/Logo").then(
  (module) => self.customElements.define("a-logo", module.default)
);

export default {
  title: "Atoms/Logo",
  component: "a-logo",
};

export const Default = () =>
  html`
    <a-logo
      target="_blank"
      rel="noopener"
      namespace="logo-default-"
      namespace-fallback
      src="src/web-components-toolbox/src/img/logo_zueriseecenter.png"
      href="/"
    ></a-logo>
  `;

export const Partner = () =>
  html`
    <a-logo
      target="_blank"
      rel="noopener"
      namespace="logo-partner-"
      namespace-fallback
      src="src/web-components-toolbox/src/img/logo_zueriseecenter.png"
      href="/"
    ></a-logo>
  `;
