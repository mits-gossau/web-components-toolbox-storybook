// PictureWithPicture.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/pictureWithPicture/PictureWithPicture"
).then((module) =>
  self.customElements.define("m-picture-with-picture", module.default)
);

export default {
  title: "Molecules/PictureWithPicture",
  component: "m-picture-with-picture",
};

export const Default = () =>
  html`
    <h2>Single picture with picture</h2>
    <m-picture-with-picture namespace="picture-with-picture-default-">
      <a-picture
        picture-load
        alt="Bio Herbst Istock 871137282 Bearbeitet"
        defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/default-/img/2022_ALNATURA_BILD_Randen-Salat_mit_geroesteten_Kichererbsen.jpg"
      >
      </a-picture>
      <div>
        <a-picture
          picture-load
          alt="dude1"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/default-/img/jcr content1.png"
        >
        </a-picture>
        <a-picture
          picture-load
          alt="dude2"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/default-/img/jcr content2.png"
        >
        </a-picture>
      </div>
    </m-picture-with-picture>
    <br /><br /><br /><br /><br /><br /><br />
    <m-picture-with-picture
      namespace="picture-with-picture-default-"
      place-right
      place-bottom
    >
      <a-picture
        picture-load
        alt="Bio Herbst Istock 871137282 Bearbeitet"
        defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/default-/img/Virtualhub StageOne LED.jpg"
      >
      </a-picture>
      <div>
        <a-picture
          picture-load
          alt="dude"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureWithPicture/default-/img/jcr content1.png"
        >
        </a-picture>
      </div>
    </m-picture-with-picture>
  `;
