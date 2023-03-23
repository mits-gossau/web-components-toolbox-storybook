// CookieBanner.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/cookieBanner/CookieBanner"
).then((module) => self.customElements.define("a-arrow", module.default));

export default {
  title: "Molecules/CookieBanner",
  component: "m-cookie-banner",
};

export const Default = () =>
  html`
    <m-cookie-banner
      props="{'env': 'test', 'language': 'de', 'theme': 'mgb', 'webAPIKey': '5reweDEbruthex8s'}"
    />
  `;
