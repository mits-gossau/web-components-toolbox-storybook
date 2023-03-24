// Teaser.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/teaser/Teaser"
).then((module) => self.customElements.define("m-teaser", module.default));

export default {
  title: "Molecules/Teaser",
  component: "m-teaser",
};

export const Download = () =>
  html`
    <o-wrapper namespace="wrapper-teaser-">
      <m-teaser namespace="teaser-download-">
        <figure>
          <a-picture
            namespace="picture-teaser-"
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/test-img-1.jpeg"
            alt="randomized image"
          >
          </a-picture>
          <figcaption>
            <h5>Broschüre Gemeinschaftsgastronomie</h5>
            <p>der Genossenschaft Migros Zürich</p>
            <p>
              <a-link namespace="download-">
                <a
                  href="https://www.betriebsrestaurants-migros.ch/dam/jcr:4462224a-82f5-41bb-a940-3a63f0e8bed6/Dokument-Gemeinschaftsgastronomie.pdf"
                  >PDF <span>(1.1 MB)</span></a
                >
              </a-link>
            </p>
          </figcaption>
        </figure>
      </m-teaser>
      <m-teaser namespace="teaser-download-">
        <figure>
          <a-picture
            namespace="picture-teaser-"
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/test-img-2.jpeg"
            alt="randomized image"
          >
          </a-picture>
          <figcaption>
            <h5>Broschüre Gemeinschaftsgastronomie</h5>
            <p>der Genossenschaft Migros Luzern</p>
            <p>
              <a-link
                namespace="download-"
                icon-path="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/download.svg"
              >
                <a
                  href="https://www.betriebsrestaurants-migros.ch/dam/jcr:4462224a-82f5-41bb-a940-3a63f0e8bed6/Dokument-Gemeinschaftsgastronomie.pdf"
                  >PDF <span>(1.1 MB)</span></a
                >
              </a-link>
            </p>
          </figcaption>
        </figure>
      </m-teaser>
      <m-teaser namespace="teaser-download-">
        <figure>
          <a-picture
            namespace="picture-teaser-"
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/test-img-3.jpeg"
            alt="randomized image"
          >
          </a-picture>
          <figcaption>
            <h5>Broschüre Gemeinschaftsgastronomie</h5>
            <p>der Genossenschaft Ostschweiz</p>
            <p>
              <a-link
                namespace="download-"
                icon-path="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/download.svg"
              >
                <a
                  href="https://www.betriebsrestaurants-migros.ch/dam/jcr:4462224a-82f5-41bb-a940-3a63f0e8bed6/Dokument-Gemeinschaftsgastronomie.pdf"
                  >Ein PDF <span>(1.1 MB)</span></a
                >
              </a-link>
            </p>
          </figcaption>
        </figure>
      </m-teaser>
    </o-wrapper>
  `;

export const Overlay = () => html`
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-overlay-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/overlay-/img/unsere_werte_2.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color">Unsere Werte</h2>
          <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-overlay-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/overlay-/img/angebote-und-services_buehne2_1920x1080px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color">Unsere Angebote & Services</h2>
          <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="2">
    <style>
      :host {
        --teaser-overlay-bg-background-color-hover-custom: #003a56;
        --teaser-overlay-bg-background-color-custom: #26b4e9;
      }
    </style>
    <m-teaser namespace="teaser-overlay-" href="http://www.jowa.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/overlay-/img/MV_Brunchschiff_Text_Banner_700x540px_sRGB_high.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <m-teaser namespace="teaser-overlay-" href="http://www.jowa.ch">
    <figure>
      <a-picture
        namespace="picture-teaser-"
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/overlay-/img/MV_Brunchschiff_Text_Banner_700x540px_sRGB_high.jpg"
        alt="randomized image"
      ></a-picture>
      <figcaption>
        <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
      </figcaption>
    </figure>
  </m-teaser>
`;

export const OverlayTop = () => html`
  <o-wrapper namespace="wrapper-teaser-recipe-">
    <m-teaser namespace="teaser-overlay-top-" href="">
      <figure>
        <a-picture
          namespace="picture-"
          alt="Nature Tisane Bouteille Naturopathie Resized"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/overlay-top-/img/nature-tisane-bouteille-naturopathie_resized.webp"
          aspect-ratio="1"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color">Krasser Titel</h2>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-overlay-top-" href="">
      <figure>
        <a-picture
          namespace="picture-"
          alt="Nature Tisane Bouteille Naturopathie Resized"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/overlay-top-/img/nature-tisane-bouteille-naturopathie_resized.webp"
          aspect-ratio="1"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color">Krasser Titel</h2>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
`;
