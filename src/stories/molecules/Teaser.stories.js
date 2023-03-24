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
              <a-link namespace="download-" icon-path="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/download.svg">
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
              <a-link namespace="download-" icon-path="src/web-components-toolbox/src/es/components/molecules/teaser/download-/img/download.svg">
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
