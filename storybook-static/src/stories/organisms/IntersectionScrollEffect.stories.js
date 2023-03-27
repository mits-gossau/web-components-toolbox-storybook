// IntersectionScrollEffect.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/organisms/intersectionScrollEffect/IntersectionScrollEffect"
).then((module) =>
  self.customElements.define("o-intersection-scroll-effect", module.default)
);

export default {
  title: "Organisms/IntersectionScrollEffect",
  component: "o-intersection-scroll-effect",
};

export const Default = () =>
  html`
    <p>scroll down</p>
    <div style="height: 800px"></div>
    <o-intersection-scroll-effect
      media="desktop"
      css-property="filter"
      effect="grayscale"
      max-value="100%"
      offset="50"
    >
      <a-picture
        namespace="picture-"
        defaultSource="https://picsum.photos/id/866/640/480"
        alt="Image Alt"
      ></a-picture>
    </o-intersection-scroll-effect>
    <div style="height: 800px"></div>
  `;
