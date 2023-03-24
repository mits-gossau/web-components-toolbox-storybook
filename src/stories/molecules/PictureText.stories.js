// PictureText.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/pictureText/PictureText"
).then((module) =>
  self.customElements.define("m-picture-text", module.default)
);

export default {
  title: "Molecules/PictureText",
  component: "m-picture-text",
};

export const Default = () =>
  html`
    <m-picture-text namespace="picture-text-default-" place-right>
      <a-picture
        picture-load
        alt="Bio Herbst Istock 871137282 Bearbeitet"
        defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureText/default-/img/Virtualhub StageOne LED.jpg"
      ></a-picture>
      <div class="content">
        <h3 class="title-border">Virtualhub LED Studio</h3>
        <div>
          <p>
            Position: SideHall 3<br />Grösse Bühne: 8.00 x 5.00m<br />Anzahl
            Speaker: bis 6 gleichzeitig<br />Position Speaker: sitzend /
            stehend<br />Anzahl Publikum: max. 50 Gäste
          </p>
        </div>
      </div>
    </m-picture-text>
    <br /><br /><br /><br /><br />
    <m-picture-text namespace="picture-text-default-" place-left>
      <a-picture
        picture-load
        alt="Bio Herbst Istock 871137282 Bearbeitet"
        defaultSource="src/web-components-toolbox/src/es/components/molecules/pictureText/default-/img/Virtualhub StageOne LED.jpg"
      ></a-picture>
      <div class="content" style="padding-left: 65px">
        <h3 class="title-border">Virtualhub LED Studio</h3>
        <div>
          <p>
            Position: SideHall 3<br />Grösse Bühne: 8.00 x 5.00m<br />Anzahl
            Speaker: bis 6 gleichzeitig<br />Position Speaker: sitzend /
            stehend<br />Anzahl Publikum: max. 50 Gäste
          </p>
        </div>
      </div>
    </m-picture-text>
  `;
