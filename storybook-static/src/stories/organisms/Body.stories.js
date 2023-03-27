// Body.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/organisms/body/Body"
).then((module) => self.customElements.define("o-body", module.default));

export default {
  title: "Organisms/Body",
  component: "o-body",
};

export const Default = () =>
  html`
    <o-body>
      <section>
        <p>Lorem Ipsum dolor ...</p>
      </section>
    </o-body>
  `;
