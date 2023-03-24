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

export const Plain = () => html`
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-plain-" width="33%" href="http://www.jowa.ch">
      <figure>
        <figcaption>
          <div>
            <p class="bold">Nachhaltigkeit in der Gemeinschaftsgastronomie</p>
            <h2 class="line-height-one-em">
              Weil es nur eine Erde gibt: Unser Engagement für eine nachhaltige
              Zukunft.
            </h2>
            <a-arrow
              move=""
              hover-on-parent-shadow-root-host=""
              direction="right"
            ></a-arrow>
          </div>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-overlay-" href="http://www.jowa.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/plain-/img/test-img-2.jpeg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color">Unsere Angebote & Services</h2>
          <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <o-body-style color-secondary="#97A619" color-hover="#737E13">
    <o-wrapper namespace="wrapper-teaser-">
      <m-teaser namespace="teaser-plain-" width="33%" href="http://www.jowa.ch">
        <figure>
          <a-picture
            namespace="picture-scale-up-"
            hover-on-parent-shadow-root-host=""
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/plain-/img/960x960_Grafik_Freisteller.png"
            alt="randomized image"
          ></a-picture>
          <figcaption>
            <div>
              <h2 class="line-height-one-em">
                Catering-Bestellschein (PDF) ausfüllen und mailen.
              </h2>
              <div class="font-size-h2">
                <a-arrow
                  move=""
                  hover-on-parent-shadow-root-host=""
                  direction="right"
                ></a-arrow>
              </div>
            </div>
          </figcaption>
        </figure>
      </m-teaser>
      <m-teaser namespace="teaser-overlay-" href="http://www.jowa.ch">
        <figure>
          <a-picture
            namespace="picture-teaser-"
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/plain-/img/test-img-2.jpeg"
            alt="randomized image"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color">Unsere Angebote & Services</h2>
            <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
          </figcaption>
        </figure>
      </m-teaser>
    </o-wrapper>
  </o-body-style>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-overlay-" href="http://www.jowa.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/plain-/img/test-img-2.jpeg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h2 class="bg-color">Unsere Angebote & Services</h2>
          <h2 class="bg-color"><a-arrow move direction="right"></a-arrow></h2>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-plain-" width="33%" href="http://www.jowa.ch">
      <style>
        :host {
          --teaser-plain-background-color-custom: green;
          --teaser-plain-background-color-hover-custom: darkgreen;
        }
      </style>
      <figure>
        <figcaption>
          <div>
            <p class="bold">Nachhaltigkeit in der Gemeinschaftsgastronomie</p>
            <h2 class="line-height-one-em">
              Weil es nur eine Erde gibt: Unser Engagement für eine nachhaltige
              Zukunft.
            </h2>
            <a-arrow
              move=""
              hover-on-parent-shadow-root-host=""
              direction="right"
            ></a-arrow>
          </div>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <!-- load web components for Demo Purposes Only -->
  <script
    class="template-script"
    type="text/javascript"
    src="./plain-.js"
  ></script>
  <script
    type="text/javascript"
    src="../../../../../../docs/es/loader.js"
  ></script>
  <script
    type="text/javascript"
    src="../../../../../../docs/es/documenter.js?component=Teaser.js"
  ></script>
`;

export const Round = () => html`
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-round-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/round-/img/dummy-img-1.jpeg"
          alt="randomized image"
        >
        </a-picture>
        <figcaption>
          <h5>Blumenladen in der Migros Eatery</h5>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-round-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/round-/img/dummy-img-2.jpeg"
          alt="randomized image"
        >
        </a-picture>
        <figcaption>
          <h5>Mehr zum Label «Frisch & Handgemacht»</h5>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-round-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/round-/img/dummy-img-3.jpeg"
          alt="randomized image"
        >
        </a-picture>
        <figcaption>
          <h5>Die neue Migros Bahnhof Basel SBB</h5>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
`;

export const Tile = () => html`
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-tile-">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/stadler.png"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-tile-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/stadler.png"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-tile-" href="http://www.jowa.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/jowa.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant JOWA AG</h5>
          <p>Erlenwiesenstrasse 9<br />8604 Volketswil ZH<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <m-teaser namespace="teaser-tile-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <style>
      :host {
        --wrapper-teaser-justify-content-custom: center;
      }
    </style>
    <m-teaser namespace="teaser-tile-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <m-teaser namespace="teaser-tile-" href="https://www.migrosbank.ch">
    <figure>
      <a-picture
        namespace="picture-teaser-"
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-/img/migros_bank_logo_orange-pink_300x225px.jpg"
        alt="randomized image"
      ></a-picture>
      <figcaption>
        <h5>Personalrestaurant Migros Bank AG</h5>
        <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
        <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
      </figcaption>
    </figure>
  </m-teaser>
  <h2 class="title-border">Referenzen</h2>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.migrosbank.ch"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Migros Bank Logo Orange Pink 300X225px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/14bexjpj/migros_bank_logo_orange-pink_300x225px.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029773600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/14bexjpj/migros_bank_logo_orange-pink_300x225px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029773600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/14bexjpj/migros_bank_logo_orange-pink_300x225px.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029773600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Stadler"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/j5mbo4j4/stadler.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029839830000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/j5mbo4j4/stadler.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029839830000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/j5mbo4j4/stadler.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029839830000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="http://www.jowa.ch"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Jowa"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/kirlgfzz/jowa.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029769270000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kirlgfzz/jowa.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029769270000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kirlgfzz/jowa.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029769270000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant JOWA AG</h5>
          <p>Erlenwiesenstrasse 9<br />8604 Volketswil ZH<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.unisg.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Unisg"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/opnlldta/unisg.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029858600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/opnlldta/unisg.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029858600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/opnlldta/unisg.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029858600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Gastronomie Universität St. Gallen</h5>
          <p>Dufourstrasse 50<br />9000 St. Gallen<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.ost.ch/de/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Ost Logo DE 4C 480X360px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=jpg&quality=80&rnd=132938029871430000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029871430000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029871430000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=webp&quality=80&rnd=132938029871430000
            "
            type="image/webp"
            media="(min-width: 401px)"
          />
        </a-picture>
        <figcaption>
          <h5>OST – Ostschweizer Fachhochschule</h5>
          <p>Rosenbergstrasse 59<br />9000 St. Gallen<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.syntegon.com/de"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Syntegon Logo 4C 480X360px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=jpg&quality=80&rnd=132938029760230000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029760230000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029760230000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=webp&quality=80&rnd=132938029760230000
            "
            type="image/webp"
            media="(min-width: 401px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Syntegon</h5>
          <p>Industriestrasse 8<br />8222 Beringen<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-"
      href="https://new.abb.com/ch"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Abb"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/s0edybhi/abb.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029764800000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/s0edybhi/abb.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029764800000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/s0edybhi/abb.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029764800000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>ABB Personalrestaurant Torondo</h5>
          <p>Brown Boveri Strasse 5<br />8050 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.kvlu.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Kvluzern"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/kvmhpl3e/kvluzern.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938053176230000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kvmhpl3e/kvluzern.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938053176230000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kvmhpl3e/kvluzern.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938053176230000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>KV Luzern Berufsfachschule</h5>
          <p>Dreilindenstrasse 20<br />6006 Luzern<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.topolino-herdern.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Topolino 2"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/eoxamflq/topolino_2.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029867270000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/eoxamflq/topolino_2.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029867270000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/eoxamflq/topolino_2.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029867270000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Mitarbeiterrestaurant Topolino</h5>
          <p>
            Genossenschaft Migros Zürich<br />Pfingstweidstrasse 101<br />8021
            Zürich
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.pilatus-aircraft.com"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Pilatus"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/zixnqckf/pilatus.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029853600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/zixnqckf/pilatus.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029853600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/zixnqckf/pilatus.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029853600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Betriebsrestaurant Pilatus Flugzeugwerke AG</h5>
          <p>6370 Stans <br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.rheinmetall.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Rheinmetall"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rczgkk20/rheinmetall.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029849300000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rczgkk20/rheinmetall.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029849300000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rczgkk20/rheinmetall.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029849300000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Rheinmetall Air Defence</h5>
          <p>Birchstrasse 155<br />8050 Zürich <br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.six-group.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Six"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029844570000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant SIX</h5>
          <p>Hardturmstrasse 201<br />8005 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.six-group.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Six"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029844570000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant SIX</h5>
          <p>Pfingstweidstrasse 110<br />8005 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.conventionpoint.ch/de/home.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Six Cp 480X360px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=480&format=jpg&quality=80&rnd=132938029797530000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029797530000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029797530000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=480&format=webp&quality=80&rnd=132938029797530000
            "
            type="image/webp"
            media="(min-width: 401px)"
          />
        </a-picture>
        <figcaption>
          <h5>SIX ConventionPoint</h5>
          <p>Pfingstweidstrasse 110<br />8005 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.migros.ch/de/genossenschaften/migros-ostschweiz/gastronomie/restaurant-neuhegi-werk4.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Werk4"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/pwklu24s/werk4.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029834800000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/pwklu24s/werk4.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029834800000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/pwklu24s/werk4.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029834800000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Restaurant WERK4 Neuhegi</h5>
          <p>Sulzerallee 26<br />8404 Winterthur<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-tile-" href="https://xund.ch/" target="_blank">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Xund"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/euun5teh/xund.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029829600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/euun5teh/xund.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029829600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/euun5teh/xund.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029829600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>XUND Bildungszentrum Gesundheit Zentralschweiz</h5>
          <p>
            Standort Alpnach<br />Industriestrasse 23<br />6055 Alpnach Dorf
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.zkb.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Zkb"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/z4ud4rwl/zkb.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029802770000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/z4ud4rwl/zkb.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029802770000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/z4ud4rwl/zkb.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029802770000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Zürcher Kantonalbank</h5>
          <p>Bahnhofstrasse 9<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.swissgrid.ch/de/home.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Swissgrid"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/2hwjgrbn/swissgrid.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029812330000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/2hwjgrbn/swissgrid.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029812330000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/2hwjgrbn/swissgrid.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029812330000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Swissgrid</h5>
          <p>Bleichemattstrasse 31<br />5000 Aarau<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.swarovskigroup.com/S/careers/mannedorf.en.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Swarovski (1)"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/yiahekdl/swarovski.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029824230000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/yiahekdl/swarovski.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029824230000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/yiahekdl/swarovski.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029824230000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Swarovski</h5>
          <p>Alte Landstrasse 411<br />8708 Männedorf<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.amstein-walthert.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Amstein Walthert"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=960&format=png&quality=80&rnd=132938029863100000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=600&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 401px) and (max-width: 600px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=800&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 601px) and (max-width: 800px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=960&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 801px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Amstein+Walthert</h5>
          <p>Andreasstrasse 5<br />8050 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.lufthansa-aviation-training.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Lat"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/uochueix/lat.png?anchor=center&mode=crop&width=300&format=png&quality=80&rnd=132938029792300000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/uochueix/lat.png?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029792300000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/uochueix/lat.png?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029792300000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Lufthansa Aviation Training</h5>
          <p>Cherstrasse 1<br />8152 Opfikon<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.stadt-zuerich.ch/dib/de/index/wasserversorgung.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Wvz"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/xamjj0ey/wvz.png?anchor=center&mode=crop&width=300&format=png&quality=80&rnd=132938029787730000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/xamjj0ey/wvz.png?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029787730000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/xamjj0ey/wvz.png?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029787730000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Wasserversorgung Stadt Zürich</h5>
          <p>Hardhof 9<br />8064 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.kbzsg.ch/home/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Logo KBZ Schwarz 300X252px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/g1wodd2z/logo_kbz_schwarz_300x252px.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132959660971670000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/g1wodd2z/logo_kbz_schwarz_300x252px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132959660971670000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/g1wodd2z/logo_kbz_schwarz_300x252px.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132959660971670000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>KBZ St. Gallen</h5>
          <p>
            Kaufmännisches Berufs- und Weiterbildungszentrum<br />Kreuzbleicheweg
            4<br />9000 St. Gallen<br />Schweiz
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-"
      href="https://www.pwc.ch/en/about-pwc/locations/zurich.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Pwc Schriftzug Referenzen"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/ccqjpsjk/pwc_schriftzug_referenzen.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132959661993030000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ccqjpsjk/pwc_schriftzug_referenzen.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132959661993030000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ccqjpsjk/pwc_schriftzug_referenzen.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132959661993030000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant PwC Zürich</h5>
          <p>
            PricewaterhouseCoopers AG<br />Birchstrasse 160<br />8050 Zürich<br />Schweiz
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
`;

export const TileRounded = () => html`
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-tile-rounded-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/stadler.png"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser namespace="teaser-tile-rounded-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/stadler.png"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-tile-rounded-" href="http://www.jowa.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/jowa.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant JOWA AG</h5>
          <p>Erlenwiesenstrasse 9<br />8604 Volketswil ZH<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <m-teaser namespace="teaser-tile-rounded-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <style>
      :host {
        --wrapper-teaser-justify-content-custom: center;
      }
    </style>
    <m-teaser namespace="teaser-tile-rounded-" href="https://www.migrosbank.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <m-teaser namespace="teaser-tile-rounded-" href="https://www.migrosbank.ch">
    <figure>
      <a-picture
        namespace="picture-teaser-"
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-rounded-/img/migros_bank_logo_orange-pink_300x225px.jpg"
        alt="randomized image"
      ></a-picture>
      <figcaption>
        <h5>Personalrestaurant Migros Bank AG</h5>
        <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
        <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
      </figcaption>
    </figure>
  </m-teaser>
  <h2 class="title-border">Referenzen</h2>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.migrosbank.ch"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Migros Bank Logo Orange Pink 300X225px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/14bexjpj/migros_bank_logo_orange-pink_300x225px.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029773600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/14bexjpj/migros_bank_logo_orange-pink_300x225px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029773600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/14bexjpj/migros_bank_logo_orange-pink_300x225px.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029773600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Stadler"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/j5mbo4j4/stadler.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029839830000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/j5mbo4j4/stadler.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029839830000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/j5mbo4j4/stadler.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029839830000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="http://www.jowa.ch"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Jowa"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/kirlgfzz/jowa.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029769270000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kirlgfzz/jowa.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029769270000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kirlgfzz/jowa.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029769270000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant JOWA AG</h5>
          <p>Erlenwiesenstrasse 9<br />8604 Volketswil ZH<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.unisg.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Unisg"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/opnlldta/unisg.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029858600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/opnlldta/unisg.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029858600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/opnlldta/unisg.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029858600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Gastronomie Universität St. Gallen</h5>
          <p>Dufourstrasse 50<br />9000 St. Gallen<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.ost.ch/de/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Ost Logo DE 4C 480X360px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=jpg&quality=80&rnd=132938029871430000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029871430000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029871430000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rgqfl4zz/ost_logo_de_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=webp&quality=80&rnd=132938029871430000
            "
            type="image/webp"
            media="(min-width: 401px)"
          />
        </a-picture>
        <figcaption>
          <h5>OST – Ostschweizer Fachhochschule</h5>
          <p>Rosenbergstrasse 59<br />9000 St. Gallen<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.syntegon.com/de"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Syntegon Logo 4C 480X360px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=jpg&quality=80&rnd=132938029760230000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029760230000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029760230000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/crdpoy0i/syntegon_logo_4c_480x360px.jpg?anchor=center&mode=crop&width=480&format=webp&quality=80&rnd=132938029760230000
            "
            type="image/webp"
            media="(min-width: 401px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Syntegon</h5>
          <p>Industriestrasse 8<br />8222 Beringen<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://new.abb.com/ch"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Abb"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/s0edybhi/abb.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029764800000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/s0edybhi/abb.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029764800000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/s0edybhi/abb.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029764800000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>ABB Personalrestaurant Torondo</h5>
          <p>Brown Boveri Strasse 5<br />8050 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.kvlu.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Kvluzern"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/kvmhpl3e/kvluzern.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938053176230000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kvmhpl3e/kvluzern.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938053176230000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/kvmhpl3e/kvluzern.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938053176230000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>KV Luzern Berufsfachschule</h5>
          <p>Dreilindenstrasse 20<br />6006 Luzern<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.topolino-herdern.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Topolino 2"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/eoxamflq/topolino_2.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029867270000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/eoxamflq/topolino_2.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029867270000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/eoxamflq/topolino_2.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029867270000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Mitarbeiterrestaurant Topolino</h5>
          <p>
            Genossenschaft Migros Zürich<br />Pfingstweidstrasse 101<br />8021
            Zürich
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.pilatus-aircraft.com"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Pilatus"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/zixnqckf/pilatus.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029853600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/zixnqckf/pilatus.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029853600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/zixnqckf/pilatus.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029853600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Betriebsrestaurant Pilatus Flugzeugwerke AG</h5>
          <p>6370 Stans <br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.rheinmetall.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Rheinmetall"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rczgkk20/rheinmetall.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029849300000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rczgkk20/rheinmetall.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029849300000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rczgkk20/rheinmetall.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029849300000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Rheinmetall Air Defence</h5>
          <p>Birchstrasse 155<br />8050 Zürich <br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.six-group.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Six"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029844570000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant SIX</h5>
          <p>Hardturmstrasse 201<br />8005 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.six-group.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Six"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029844570000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/rwlfw42v/six.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029844570000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant SIX</h5>
          <p>Pfingstweidstrasse 110<br />8005 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.conventionpoint.ch/de/home.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Six Cp 480X360px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=480&format=jpg&quality=80&rnd=132938029797530000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029797530000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029797530000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ohfeeyoz/six_cp_480x360px.jpg?anchor=center&mode=crop&width=480&format=webp&quality=80&rnd=132938029797530000
            "
            type="image/webp"
            media="(min-width: 401px)"
          />
        </a-picture>
        <figcaption>
          <h5>SIX ConventionPoint</h5>
          <p>Pfingstweidstrasse 110<br />8005 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.migros.ch/de/genossenschaften/migros-ostschweiz/gastronomie/restaurant-neuhegi-werk4.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Werk4"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/pwklu24s/werk4.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029834800000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/pwklu24s/werk4.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029834800000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/pwklu24s/werk4.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029834800000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Restaurant WERK4 Neuhegi</h5>
          <p>Sulzerallee 26<br />8404 Winterthur<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://xund.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Xund"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/euun5teh/xund.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029829600000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/euun5teh/xund.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029829600000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/euun5teh/xund.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029829600000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>XUND Bildungszentrum Gesundheit Zentralschweiz</h5>
          <p>
            Standort Alpnach<br />Industriestrasse 23<br />6055 Alpnach Dorf
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.zkb.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Zkb"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/z4ud4rwl/zkb.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029802770000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/z4ud4rwl/zkb.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029802770000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/z4ud4rwl/zkb.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029802770000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Zürcher Kantonalbank</h5>
          <p>Bahnhofstrasse 9<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.swissgrid.ch/de/home.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Swissgrid"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/2hwjgrbn/swissgrid.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029812330000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/2hwjgrbn/swissgrid.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029812330000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/2hwjgrbn/swissgrid.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029812330000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Swissgrid</h5>
          <p>Bleichemattstrasse 31<br />5000 Aarau<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.swarovskigroup.com/S/careers/mannedorf.en.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Swarovski (1)"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/yiahekdl/swarovski.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132938029824230000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/yiahekdl/swarovski.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029824230000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/yiahekdl/swarovski.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029824230000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Swarovski</h5>
          <p>Alte Landstrasse 411<br />8708 Männedorf<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.amstein-walthert.ch/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Amstein Walthert"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=960&format=png&quality=80&rnd=132938029863100000"
          aspect-ratio="0.75"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=400&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 201px) and (max-width: 400px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=600&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 401px) and (max-width: 600px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=800&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 601px) and (max-width: 800px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/erul5m4j/amstein-walthert.png?anchor=center&mode=crop&width=960&format=webp&quality=80&rnd=132938029863100000
            "
            type="image/webp"
            media="(min-width: 801px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Amstein+Walthert</h5>
          <p>Andreasstrasse 5<br />8050 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.lufthansa-aviation-training.com/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Lat"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/uochueix/lat.png?anchor=center&mode=crop&width=300&format=png&quality=80&rnd=132938029792300000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/uochueix/lat.png?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029792300000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/uochueix/lat.png?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029792300000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Lufthansa Aviation Training</h5>
          <p>Cherstrasse 1<br />8152 Opfikon<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.stadt-zuerich.ch/dib/de/index/wasserversorgung.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Wvz"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/xamjj0ey/wvz.png?anchor=center&mode=crop&width=300&format=png&quality=80&rnd=132938029787730000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/xamjj0ey/wvz.png?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132938029787730000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/xamjj0ey/wvz.png?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132938029787730000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant Wasserversorgung Stadt Zürich</h5>
          <p>Hardhof 9<br />8064 Zürich<br />Schweiz</p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.kbzsg.ch/home/"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Logo KBZ Schwarz 300X252px"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/g1wodd2z/logo_kbz_schwarz_300x252px.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132959660971670000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/g1wodd2z/logo_kbz_schwarz_300x252px.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132959660971670000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/g1wodd2z/logo_kbz_schwarz_300x252px.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132959660971670000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>KBZ St. Gallen</h5>
          <p>
            Kaufmännisches Berufs- und Weiterbildungszentrum<br />Kreuzbleicheweg
            4<br />9000 St. Gallen<br />Schweiz
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-rounded-"
      href="https://www.pwc.ch/en/about-pwc/locations/zurich.html"
      target="_blank"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          alt="Pwc Schriftzug Referenzen"
          defaultsource="https://www.betriebsrestaurants-migros.ch/media/ccqjpsjk/pwc_schriftzug_referenzen.jpg?anchor=center&mode=crop&width=300&format=jpg&quality=80&rnd=132959661993030000"
          aspect-ratio="0.84"
        >
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ccqjpsjk/pwc_schriftzug_referenzen.jpg?anchor=center&mode=crop&width=200&format=webp&quality=80&rnd=132959661993030000
            "
            type="image/webp"
            media="(max-width: 200px)"
          />
          <source
            srcset="
              https://www.betriebsrestaurants-migros.ch/media/ccqjpsjk/pwc_schriftzug_referenzen.jpg?anchor=center&mode=crop&width=300&format=webp&quality=80&rnd=132959661993030000
            "
            type="image/webp"
            media="(min-width: 201px)"
          />
        </a-picture>
        <figcaption>
          <h5>Personalrestaurant PwC Zürich</h5>
          <p>
            PricewaterhouseCoopers AG<br />Birchstrasse 160<br />8050 Zürich<br />Schweiz
          </p>
          <a-link namespace="underline-">
            <a> Mehr erfahren </a>
          </a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
`;

export const TileTextCenter = () => html`
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-text-center-"
      href="https://www.migrosbank.ch"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-text-center-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/stadler.png"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-">
    <m-teaser
      namespace="teaser-tile-text-center-"
      href="https://www.migrosbank.ch"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser
      namespace="teaser-tile-text-center-"
      href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/stadler.png"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Stadler Bussnang</h5>
          <p>Ernst-Stadler-Strasse 1<br />9565 Bussnang<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
    <m-teaser namespace="teaser-tile-text-center-" href="http://www.jowa.ch">
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/jowa.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant JOWA AG</h5>
          <p>Erlenwiesenstrasse 9<br />8604 Volketswil ZH<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <o-wrapper namespace="wrapper-teaser-" simulate-children="3">
    <m-teaser
      namespace="teaser-tile-text-center-"
      href="https://www.migrosbank.ch"
    >
      <figure>
        <a-picture
          namespace="picture-teaser-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/migros_bank_logo_orange-pink_300x225px.jpg"
          alt="randomized image"
        ></a-picture>
        <figcaption>
          <h5>Personalrestaurant Migros Bank AG</h5>
          <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
          <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
  <m-teaser
    namespace="teaser-tile-text-center-"
    href="https://www.migrosbank.ch"
  >
    <figure>
      <a-picture
        namespace="picture-teaser-"
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/teaser/tile-text-center-/img/migros_bank_logo_orange-pink_300x225px.jpg"
        alt="randomized image"
      ></a-picture>
      <figcaption>
        <h5>Personalrestaurant Migros Bank AG</h5>
        <p>Seidengasse 12<br />8001 Zürich<br />Schweiz</p>
        <a-link namespace="underline-"><a>Mehr erfahren</a></a-link>
      </figcaption>
    </figure>
  </m-teaser>
`;
