// Details.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/details/Details"
).then((module) => self.customElements.define("m-details", module.Details()));

import(
  "../../web-components-toolbox/src/es/components/organisms/bodyStyle/BodyStyle"
).then((module) => self.customElements.define("o-body-style", module.default));

import(
  "../../web-components-toolbox/src/es/components/organisms/wrapper/Wrapper"
).then((module) => self.customElements.define("o-wrapper", module.Wrapper()));

export default {
  title: "Molecules/Details",
  component: "m-details",
};

export const Default = () => html`
  <o-body-style color-secondary="var(--m-green-600)">
    <m-details namespace="details-default-">
      <details>
        <summary>
          <h4>Mehrweg: Der bessere Weg.</h4>
        </summary>
        <div>
          <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
          <p>
            Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
            Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr.
            10.–).
          </p>
          <o-wrapper no-calc-column-width>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-migros.png"
                alt="Migros"
              ></a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-doitgarden.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              ></a-picture
              ><span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-schefer.png"
                alt="Migros"
              >
              </a-picture
              ><span>Migros</span>
            </a>
          </o-wrapper>
          <div class="spacer"></div>
          <a-button
            namespace="button-secondary-"
            href="/"
            target="_self"
            data-href="/"
            role="link"
          >
            Alle teilnehmenden Netzwerkpartner
          </a-button>
          <div class="spacer"></div>
          <h2 class="title-border font-family-secondary">
            Mehrwegbecher für Heissgetränke
          </h2>
          <p>
            Für mehr Stil und weniger Abfall: Für Heissgetränke bieten wir in
            ausgewählten Betriebsrestaurants die nachhaltigen Mehrwegbecher aus
            Porzellan (Kosten: Fr. 9.90, Vergünstigung Fr. 0.50 pro
            Heissgetränk).
          </p>
        </div>
      </details>
    </m-details>
    <m-details namespace="details-default-" scroll-into-view>
      <details>
        <summary>
          <h4>Mehrweg: Der bessere Weg.</h4>
        </summary>
        <div>
          <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
          <p>
            Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
            Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr.
            10.–).
          </p>
          <o-wrapper no-calc-column-width>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-migros.png"
                alt="Migros"
              ></a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-doitgarden.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              ></a-picture
              ><span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="src/web-components-toolbox/src/img/detail-component-content/logo-schefer.png"
                alt="Migros"
              >
              </a-picture
              ><span>Migros</span>
            </a>
          </o-wrapper>
          <div class="spacer"></div>
          <a-button
            namespace="button-secondary-"
            href="/"
            target="_self"
            data-href="/"
            role="link"
          >
            Alle teilnehmenden Netzwerkpartner
          </a-button>
          <div class="spacer"></div>
          <h2 class="title-border font-family-secondary">
            Mehrwegbecher für Heissgetränke
          </h2>
          <p>
            Für mehr Stil und weniger Abfall: Für Heissgetränke bieten wir in
            ausgewählten Betriebsrestaurants die nachhaltigen Mehrwegbecher aus
            Porzellan (Kosten: Fr. 9.90, Vergünstigung Fr. 0.50 pro
            Heissgetränk).
          </p>
        </div>
      </details>
    </m-details>
  </o-body-style>
  <br /><br /><br /><br /><br />
  <m-details no-auto-close namespace="details-default-">
    <details>
      <summary>
        <h4>Food Waste: Wir haben es satt.</h4>
      </summary>
      <div>
        <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
        <p>
          Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
          Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr. 10.–).
        </p>
      </div>
    </details>
  </m-details>
  <m-details no-auto-close open-duration="5000" namespace="details-default-">
    <details>
      <summary>
        <h4>Food Waste: Wir haben es satt.</h4>
      </summary>
      <div>
        <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
        <p>
          Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
          Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr. 10.–).
        </p>
      </div>
    </details>
  </m-details>
`;

export const IconRight = () => html`
  <o-body-style color-secondary="var(--m-green-600)">
    <m-details namespace="details-default-icon-right-">
      <details>
        <summary>
          <h4>Mehrweg: Der bessere Weg.</h4>
        </summary>
        <div>
          <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
          <p>
            Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
            Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr.
            10.–).
          </p>
          <o-wrapper no-calc-column-width>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-migros.png"
                alt="Migros"
              ></a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-doitgarden.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              ></a-picture
              ><span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-schefer.png"
                alt="Migros"
              >
              </a-picture
              ><span>Migros</span>
            </a>
          </o-wrapper>
          <div class="spacer"></div>
          <a-button
            namespace="button-secondary-"
            href="/"
            target="_self"
            data-href="/"
            role="link"
          >
            Alle teilnehmenden Netzwerkpartner
          </a-button>
          <div class="spacer"></div>
          <h2 class="title-border font-family-secondary">
            Mehrwegbecher für Heissgetränke
          </h2>
          <p>
            Für mehr Stil und weniger Abfall: Für Heissgetränke bieten wir in
            ausgewählten Betriebsrestaurants die nachhaltigen Mehrwegbecher aus
            Porzellan (Kosten: Fr. 9.90, Vergünstigung Fr. 0.50 pro
            Heissgetränk).
          </p>
        </div>
      </details>
    </m-details>
    <m-details namespace="details-default-icon-right-" scroll-into-view>
      <details>
        <summary>
          <h4>Mehrweg: Der bessere Weg.</h4>
        </summary>
        <div>
          <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
          <p>
            Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
            Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr.
            10.–).
          </p>
          <o-wrapper no-calc-column-width>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-migros.png"
                alt="Migros"
              ></a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-doitgarden.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              ></a-picture
              ><span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-sxx.png"
                alt="Migros"
              >
              </a-picture>
              <span>Migros</span>
            </a>
            <a href="#">
              <a-picture
                namespace="picture-store-logo-"
                defaultSource="../src/img/detail-component-content/logo-schefer.png"
                alt="Migros"
              >
              </a-picture
              ><span>Migros</span>
            </a>
          </o-wrapper>
          <div class="spacer"></div>
          <a-button
            namespace="button-secondary-"
            href="/"
            target="_self"
            data-href="/"
            role="link"
          >
            Alle teilnehmenden Netzwerkpartner
          </a-button>
          <div class="spacer"></div>
          <h2 class="title-border font-family-secondary">
            Mehrwegbecher für Heissgetränke
          </h2>
          <p>
            Für mehr Stil und weniger Abfall: Für Heissgetränke bieten wir in
            ausgewählten Betriebsrestaurants die nachhaltigen Mehrwegbecher aus
            Porzellan (Kosten: Fr. 9.90, Vergünstigung Fr. 0.50 pro
            Heissgetränk).
          </p>
        </div>
      </details>
    </m-details>
  </o-body-style>
  <br /><br /><br /><br /><br />
  <m-details no-auto-close namespace="details-default-icon-right-">
    <details>
      <summary>
        <h4>Food Waste: Wir haben es satt.</h4>
      </summary>
      <div>
        <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
        <p>
          Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
          Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr. 10.–).
        </p>
      </div>
    </details>
  </m-details>
  <m-details
    no-auto-close
    open-duration="5000"
    namespace="details-default-icon-right-"
  >
    <details>
      <summary>
        <h4>Food Waste: Wir haben es satt.</h4>
      </summary>
      <div>
        <h2 class="title-border font-family-secondary">Mehrwegschale</h2>
        <p>
          Unsere Erde ist kein Mehrweg-Planet. Deshalb bieten wir in unserem
          Personalrestaurant Mehrwegschalen als Alternative an (Depot Fr. 10.–).
        </p>
      </div>
    </details>
  </m-details>
`;

export const MenuPortion = () => html`
  <o-body-style
    color-secondary="#97A619"
    background-color="var(--m-black)"
    color="var(--m-white)"
  >
    <div style="width: 55%; margin: 1rem auto;">
      <m-details namespace="details-menu-portion-" desktop-open mobile-close>
        <details>
          <summary>
            <h4>Nährwerte pro Portion</h4>
          </summary>

          <div class="nutrients-div">
            <ul class="nutrients-list">
              <li class="nutrients-item">
                <div class="nutrients-circle">
                  <span>552&nbsp;kcal / 2307&nbsp;J</span>
                </div>
                <span>Kilokalorien</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>23</span></div>
                <span>Fett</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>24</span></div>
                <span>Eiweiss</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>67</span></div>
                <span>Kohlenhydrate</span>
              </li>
            </ul>
          </div>
        </details>
      </m-details>
      <m-details namespace="details-menu-portion-">
        <details>
          <summary>
            <h4>Nährwerte pro Portion</h4>
          </summary>

          <div class="nutrients-div">
            <ul class="nutrients-list">
              <li class="nutrients-item">
                <div class="nutrients-circle">
                  <span>552 kcal / 2307 J</span>
                </div>
                <span>Kilokalorien</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>23</span></div>
                <span>Fett</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>24</span></div>
                <span>Eiweiss</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>67</span></div>
                <span>Kohlenhydrate</span>
              </li>
            </ul>
          </div>
        </details>
      </m-details>
      <m-details namespace="details-menu-portion-">
        <details>
          <summary>
            <h4>Nährwerte pro Portion</h4>
          </summary>

          <div class="nutrients-div">
            <ul class="nutrients-list">
              <li class="nutrients-item">
                <div class="nutrients-circle">
                  <span>552 kcal / 2307 J</span>
                </div>
                <span>Kilokalorien</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>23</span></div>
                <span>Fett</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>24</span></div>
                <span>Eiweiss</span>
              </li>
              <li class="nutrients-item">
                <div class="nutrients-circle"><span>67</span></div>
                <span>Kohlenhydrate</span>
              </li>
            </ul>
          </div>
        </details>
      </m-details>
    </div>
  </o-body-style>
`;

export const MenuSingle = () => html`
  <o-body-style
    color-secondary="#97A619"
    background-color="var(--m-black)"
    color="var(--m-white)"
  >
    <div style="width: 55%; margin: 1rem auto;">
      <m-details namespace="details-menu-single-" mobile-open desktop-close>
        <details>
          <summary>
            <div class="image-box">
              <a-picture
                namespace="picture-teaser-"
                picture-load
                alt="Hitzberger ZH Poke Bowls Sushi Poke Lachs November 2021"
                defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/sushi_poke_lachs.webp"
                aspect-ratio="0.6666667"
              >
              </a-picture>
            </div>
            <div class="content-box">
              <h3>Sushi Poké</h3>
              <ul class="legende">
                <li class="legend-icon" id="Superfood">
                  <a-picture
                    namespace="picture-teaser-"
                    picture-load
                    alt="960X540 Superfood"
                    defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/superfood.webp"
                    aspect-ratio="1"
                  >
                  </a-picture>
                  <span class="tooltip">Superfood</span>
                </li>
                <li class="legend-icon" id="Laktosefrei">
                  <a-picture
                    namespace="picture-teaser-"
                    picture-load
                    alt="960X540 Lacktosefrei"
                    defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/lacktosefrei.webp"
                    aspect-ratio="1"
                  >
                  </a-picture>
                  <span class="tooltip"
                    >Ohne milchhaltige Zutaten hergestellt</span
                  >
                </li>
              </ul>
              <p class="description">
                Riso Venere (schwarz), Sushi Lachs, Avocado, Mango, Gurke
              </p>
              <p class="end">21.90 CHF</p>
            </div>
          </summary>
          <div class="details-container">
            <p>einzelne Portionen</p>
          </div>
        </details>
      </m-details>
      <m-details namespace="details-menu-single-" mobile-open desktop-close>
        <details>
          <summary>
            <div class="image-box">
              <a-picture
                namespace="picture-teaser-"
                picture-load
                alt="Hitzberger ZH Poke Bowls Sushi Poke Lachs November 2021"
                defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/sushi_poke_lachs.webp"
                aspect-ratio="0.6666667"
              >
              </a-picture>
            </div>
            <div class="content-box">
              <h3>Sushi Poké</h3>
              <ul class="legende">
                <li class="legend-lable" id="Wechselnd">
                  <span class="legend-span">Wechselnd</span>
                </li>
              </ul>
              <p class="description">
                Riso Venere (schwarz), Sushi Lachs, Avocado, Mango, Gurke
              </p>
              <p class="end">21.90 CHF</p>
            </div>
          </summary>
          <div class="details-container">
            <p>einzelne Portionen</p>
          </div>
        </details>
      </m-details>
      <m-details namespace="details-menu-single-" mobile-open desktop-close>
        <details>
          <summary>
            <div class="image-box">
              <a-picture
                namespace="picture-teaser-"
                picture-load
                alt="Hitzberger ZH Poke Bowls Sushi Poke Lachs November 2021"
                defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/sushi_poke_lachs.webp"
                aspect-ratio="0.6666667"
              >
              </a-picture>
            </div>
            <div class="content-box">
              <h3>Sushi Poké</h3>
              <ul class="legende">
                <li class="legend-icon" id="Superfood">
                  <a-picture
                    namespace="picture-teaser-"
                    picture-load
                    alt="960X540 Superfood"
                    defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/superfood.webp"
                    aspect-ratio="1"
                  >
                  </a-picture>
                  <span class="tooltip">Superfood</span>
                </li>
                <li class="legend-icon" id="Laktosefrei">
                  <a-picture
                    namespace="picture-teaser-"
                    picture-load
                    alt="960X540 Lacktosefrei"
                    defaultsource="src/web-components-toolbox/src/es/components/molecules/details/menu-single-/img/lacktosefrei.webp"
                    aspect-ratio="1"
                  >
                  </a-picture>
                  <span class="tooltip"
                    >Ohne milchhaltige Zutaten hergestellt</span
                  >
                </li>
              </ul>
              <p class="description">
                Riso Venere (schwarz), Sushi Lachs, Avocado, Mango, Gurke
              </p>
              <p class="end">21.90 CHF</p>
            </div>
          </summary>
          <div class="details-container">
            <p>einzelne Portionen</p>
          </div>
        </details>
      </m-details>
    </div>
  </o-body-style>
`;
