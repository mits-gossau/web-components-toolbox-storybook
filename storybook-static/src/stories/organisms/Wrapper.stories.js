// Wrapper.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/organisms/wrapper/Wrapper"
).then((module) => self.customElements.define("o-wrapper", module.Wrapper()));

import(
  "../../web-components-toolbox/src/es/components/atoms/picture/Picture"
).then((module) => self.customElements.define("a-picture", module.default));

export default {
  title: "Organisms/Wrapper",
  component: "o-wrapper",
};

export const NoCalcColumnWidth = () => html`
  <o-wrapper
    namespace="wrapper-no-calc-column-width-"
    flex-nowrap-mobile
    no-calc-column-width
  >
    <style>
      :host {
        --store-logo-img-width: min(145px, 50vw);
      }
    </style>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-migros.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-doitgarden.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-sxx.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-micasa.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-schefer.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-qualipet.png"
        alt="Migros"
      ></a-picture
    ></a>
  </o-wrapper>
`;

export const NoCalcColumnWidthLeft = () => html`
  <o-wrapper
    namespace="wrapper-no-calc-column-width-left-"
    flex-nowrap-mobile
    no-calc-column-width
  >
    <style>
      :host {
        --store-logo-img-width: min(145px, 50vw);
      }
    </style>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-migros.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-doitgarden.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-sxx.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-micasa.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-schefer.png"
        alt="Migros"
      ></a-picture
    ></a>
    <a href="#"
      ><a-picture
        namespace="picture-store-logo-"
        defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/no-calc-column-width-/img/logo-qualipet.png"
        alt="Migros"
      ></a-picture
    ></a>
  </o-wrapper>
`;

export const Teaser = () => html`
  <h2 class="title-border">picture-first-mobile</h2>
  <o-wrapper namespace="wrapper-teaser-" picture-first-mobile>
    <a-picture
      defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-/img/catering-services-event.webp"
      alt="Migros"
    ></a-picture>
    <div>
      <h3><strong>Catering Services Migros</strong></h3>
      <p>
        Unter dem Brand «Catering Services Migros» pflegen wir Event-Gastronomie
        auf höchstem Niveau. Wir bieten kulinarische und kulturelle Erlebnisse
        in eigenen Eventhallen und überraschen Gäste mit unserem Catering an
        Grossanlässen. Unter anderem bewirten wir Gäste am
        Leichtathletik-Meeting «Weltklasse Zürich», am Eidgenössischen Schwing-
        und Älplerfest, am Gurtenfestival, in der Swissporarena in Luzern, beim
        VIP-Catering im Stadion St. Gallen und bei «Salto Natale».
      </p>
      <p>
        <a
          rel="noopener"
          href="https://www.migros.ch/de/gastronomie/catering-services.html"
          target="_blank"
          title="Zu den Catering Services Migros"
          >Zu den Catering Services Migros</a
        >
      </p>
    </div>
  </o-wrapper>
  <div class="spacer-two"></div>
  <o-wrapper namespace="wrapper-teaser-" picture-first-mobile>
    <div>
      <h3><strong>Catering Services Migros</strong></h3>
      <p>
        Unter dem Brand «Catering Services Migros» pflegen wir Event-Gastronomie
        auf höchstem Niveau. Wir bieten kulinarische und kulturelle Erlebnisse
        in eigenen Eventhallen und überraschen Gäste mit unserem Catering an
        Grossanlässen. Unter anderem bewirten wir Gäste am
        Leichtathletik-Meeting «Weltklasse Zürich», am Eidgenössischen Schwing-
        und Älplerfest, am Gurtenfestival, in der Swissporarena in Luzern, beim
        VIP-Catering im Stadion St. Gallen und bei «Salto Natale».
      </p>
      <p>
        <a
          rel="noopener"
          href="https://www.migros.ch/de/gastronomie/catering-services.html"
          target="_blank"
          title="Zu den Catering Services Migros"
          >Zu den Catering Services Migros</a
        >
      </p>
    </div>
    <a-picture
      defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-/img/mr_betriebsrestaurants_2160x1215_neu.webp"
      alt="Migros"
    ></a-picture>
  </o-wrapper>
  <hr />
  <h2 class="title-border">picture-last-mobile</h2>
  <o-wrapper namespace="wrapper-teaser-" picture-last-mobile>
    <a-picture
      defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-/img/catering-services-event.webp"
      alt="Migros"
    ></a-picture>
    <div>
      <h3><strong>Catering Services Migros</strong></h3>
      <p>
        Unter dem Brand «Catering Services Migros» pflegen wir Event-Gastronomie
        auf höchstem Niveau. Wir bieten kulinarische und kulturelle Erlebnisse
        in eigenen Eventhallen und überraschen Gäste mit unserem Catering an
        Grossanlässen. Unter anderem bewirten wir Gäste am
        Leichtathletik-Meeting «Weltklasse Zürich», am Eidgenössischen Schwing-
        und Älplerfest, am Gurtenfestival, in der Swissporarena in Luzern, beim
        VIP-Catering im Stadion St. Gallen und bei «Salto Natale».
      </p>
      <p>
        <a
          rel="noopener"
          href="https://www.migros.ch/de/gastronomie/catering-services.html"
          target="_blank"
          title="Zu den Catering Services Migros"
          >Zu den Catering Services Migros</a
        >
      </p>
    </div>
  </o-wrapper>
  <div class="spacer-two"></div>
  <o-wrapper namespace="wrapper-teaser-" picture-last-mobile>
    <div>
      <h3><strong>Catering Services Migros</strong></h3>
      <p>
        Unter dem Brand «Catering Services Migros» pflegen wir Event-Gastronomie
        auf höchstem Niveau. Wir bieten kulinarische und kulturelle Erlebnisse
        in eigenen Eventhallen und überraschen Gäste mit unserem Catering an
        Grossanlässen. Unter anderem bewirten wir Gäste am
        Leichtathletik-Meeting «Weltklasse Zürich», am Eidgenössischen Schwing-
        und Älplerfest, am Gurtenfestival, in der Swissporarena in Luzern, beim
        VIP-Catering im Stadion St. Gallen und bei «Salto Natale».
      </p>
      <p>
        <a
          rel="noopener"
          href="https://www.migros.ch/de/gastronomie/catering-services.html"
          target="_blank"
          title="Zu den Catering Services Migros"
          >Zu den Catering Services Migros</a
        >
      </p>
    </div>
    <a-picture
      defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-/img/mr_betriebsrestaurants_2160x1215_neu.webp"
      alt="Migros"
    ></a-picture>
  </o-wrapper>
`;

export const TeaserRecipe = () => html`
  <o-wrapper namespace="wrapper-teaser-recipe-" no-calc-column-width>
    <m-teaser namespace="teaser-overlay-top-" href="">
      <figure>
        <a-picture
          namespace="picture-"
          alt="Nature Tisane Bouteille Naturopathie Resized"
          defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-recipe-/img/nature-tisane-bouteille-naturopathie_resized.webp"
          aspect-ratio="1"
        >
        </a-picture>
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
          defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-recipe-/img/nature-tisane-bouteille-naturopathie_resized.webp"
          aspect-ratio="1"
        >
        </a-picture>
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
          defaultSource="src/web-components-toolbox/src/es/components/organisms/wrapper/teaser-recipe-/img/nature-tisane-bouteille-naturopathie_resized.webp"
          aspect-ratio="1"
        >
        </a-picture>
        <figcaption>
          <h2 class="bg-color">Krasser Titel</h2>
        </figcaption>
      </figure>
    </m-teaser>
  </o-wrapper>
`;

export const Text = () =>
  html`
    <o-wrapper namespace="wrapper-text-">
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
    </o-wrapper>
  `;

export const TextCenter = () =>
  html`
    <o-wrapper namespace="wrapper-text-center-">
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
      <p width="25%">Lorem Ipsum dolor ...</p>
    </o-wrapper>
  `;

export const TextPictureCover = () =>
  html`
    <o-wrapper>
      <div class="o-wrapper__content">
        <div class="o-wrapper__info">
          <span class="o-wrapper__date">POSTED 6.9.2022</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.039978C4.5 0.039978 0 4.52998 0 10.06C0 15.06 3.66 19.21 8.44 19.96V12.96H5.9V10.06H8.44V7.84998C8.44 5.33998 9.93 3.95998 12.22 3.95998C13.31 3.95998 14.45 4.14998 14.45 4.14998V6.61998H13.19C11.95 6.61998 11.56 7.38998 11.56 8.17998V10.06H14.34L13.89 12.96H11.56V19.96C13.9164 19.5878 16.0622 18.3855 17.6099 16.57C19.1576 14.7546 20.0054 12.4456 20 10.06C20 4.52998 15.5 0.039978 10 0.039978Z"
              fill="#FA4B46"
            />
          </svg>
        </div>
        <h1 class="o-wrapper__heading">My Ugly Clementine (AUT)</h1>
        <p class="o-wrapper__text">
          Mit unwiderstehlichen Pop-Hooks, einer Prise 60er-Jahre-Soul und
          Mitsing-Refrains mischen My Ugly Clementine die Post-Punk-Szene auf:
          Ihre Musik steht für Spass, ihre Texte sind Statements für
          Empowerment, Gleichberechtigung, Selbstliebe und Feminismus. 2020
          erhielt die Band den Amadeus Austrian Music Award, 2021 wurde ihr
          Debütalbum «Vitamin C» mit dem European Independent Album Of The Year
          ausgezeichnet. Hinter der Supergroup aus Wien stehen drei
          szenebekannte Frauen: Sophie Lindinger (Leyya), Mira Lu Kovacs (5K HD
          und Schmieds Puls) und Nastasja Ronck (Lucid Kid). Bis Sommer 2022 war
          zudem Kem Kolleritsch aka Kerosin 95 mit von der Partie.
        </p>
      </div>
      <div class="o-wrapper__picture">
        <a-picture
          namespace="picture-cover-"
          namespace-fallback
          defaultsource="http://via.placeholder.com/960x1000"
          alt="02 DTC Isa"
        >
        </a-picture>
      </div>
    </o-wrapper>
  `;
