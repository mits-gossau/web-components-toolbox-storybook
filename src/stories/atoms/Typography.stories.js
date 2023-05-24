// Arrow.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/organisms/body/Body"
).then((module) => self.customElements.define("o-body", module.default));

export default {
  title: "Atoms/Typography",
  component: "o-body",
};

export const Default = () =>
  html` <o-body
    ><p>&nbsp;</p>
    <h1>Headline Size 1</h1>
    <h2>Headline Size 2</h2>
    <h3>Headline Size 3</h3>
    <h4>Headline Size 4</h4>
    <h5>Headline Size 5</h5>
    <h6>Headline Size 6</h6>
    <p>&nbsp;</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor <u>incididunt ut labore</u> et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation <i>ullamco laboris nisi</i> ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu <b>fugiat nulla pariatur</b>.
      Excepteur sint occaecat cupidatat <strike>non proident</strike>, sunt in
      culpa qui <a href="#">officia deserunt mollit</a> anim id est laborum.
    </p>
    <p>&nbsp;</p>
  </o-body>`;
