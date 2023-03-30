// Picture.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/atoms/picture/Picture"
).then((module) => self.customElements.define("a-picture", module.default));

export default {
  title: "Atoms/Picture",
  component: "a-picture",
};

export const Cover = () =>
  html`
    <a-picture
      namespace="picture-cover-"
      defaultSource="src/web-components-toolbox/src/es/components/atoms/picture/cover-/img/Oeffnungszeiten-Hightlight-Teaser.png"
      alt="Öffnungszeiten"
    />
  `;

export const Overflow = () =>
  html`
    <a-picture
      namespace="picture-overflow-"
      defaultSource="src/web-components-toolbox/src/es/components/atoms/picture/cover-/img/Oeffnungszeiten-Hightlight-Teaser.png"
      alt="Öffnungszeiten"
    />
  `;

export const OverflowScaleUp = () =>
  html`
    <a-picture
      namespace="picture-overflow-scale-up-"
      defaultSource="src/web-components-toolbox/src/es/components/atoms/picture/cover-/img/Oeffnungszeiten-Hightlight-Teaser.png"
      alt="Öffnungszeiten"
    />
  `;

export const ScaleUp = () =>
  html`
    <a-picture
      namespace="picture-scale-up-"
      defaultSource="src/web-components-toolbox/src/es/components/atoms/picture/cover-/img/Oeffnungszeiten-Hightlight-Teaser.png"
      alt="Öffnungszeiten"
    />
  `;

export const StoreLogo = () =>
  html`
    <a-picture
      namespace="picture-store-logo-"
      defaultSource="src/web-components-toolbox/src/es/components/atoms/picture/cover-/img/Oeffnungszeiten-Hightlight-Teaser.png"
      alt="Öffnungszeiten"
    />
  `;

export const Teaser = () =>
  html`
    <a-picture
      namespace="picture-teaser-"
      defaultSource="src/web-components-toolbox/src/es/components/atoms/picture/cover-/img/Oeffnungszeiten-Hightlight-Teaser.png"
      alt="Öffnungszeiten"
    />
  `;
