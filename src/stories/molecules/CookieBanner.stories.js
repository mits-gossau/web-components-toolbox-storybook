// CookieBanner.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/cookieBanner/CookieBanner"
).then((module) => self.customElements.define("m-cookie-banner", module.default));

export default {
  title: "Molecules/CookieBanner (WIP)",
  component: "m-cookie-banner",
};

export const Default = () =>
  html`
    <m-cookie-banner
      props="{'env': 'local', 'language': 'de', 'theme': 'mgb', 'webAPIKey': 'Z46wsqjsTLLFybf2RiThevVkZ4Lvt2AtQPNi4LreVCRe4bA9d3cRmNspVXzRXM7P'}"
    />
  `;
