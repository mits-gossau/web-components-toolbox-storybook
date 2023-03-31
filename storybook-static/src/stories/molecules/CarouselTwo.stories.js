// CarouselTwo.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/carouselTwo/CarouselTwo"
).then((module) =>
  self.customElements.define("m-carousel-two", module.default)
);

export default {
  title: "Molecules/CarouselTwo",
  component: "m-carousel-two",
};

export const Default = () => html`
  <h2>
    Navigation overlay(ed) / use with history (no interval and "history"
    attribute) when it is the only carousel within the page
  </h2>
  <m-carousel-two
    history
    active="11"
    namespace="carousel-two-default-"
    background-color="var(--m-gray-300)"
    nav-align-self="end"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
          alt="Houses"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>Navigation overlay(ed) with effect / no-history</h2>
  <m-carousel-two
    active="11"
    interval="2000"
    namespace="carousel-two-default-"
    background-color="var(--m-gray-300)"
    nav-align-self="end"
  >
    <section>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <div>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
            alt="Houses"
          ></a-picture>
          <div>
            <h1>Houses</h1>
            <p>more Houses</p>
          </div>
        </div>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
          alt="Motel"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
          alt="Stuff"
        ></a-picture>
      </o-intersection-scroll-effect>
      <o-intersection-scroll-effect
        invert="true"
        horizontal
        css-property="transform"
        effect="scale"
        max-value="1"
      >
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </o-intersection-scroll-effect>
    </section>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>Navigation outside / no-history</h2>
  <m-carousel-two
    active="11"
    namespace="carousel-two-default-"
    background-color="var(--m-gray-300)"
    nav-separate
    nav-align-self="start"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <!--<div>
      <a-picture picture-load defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg" alt="Houses"></a-picture>
      <div>
        <h1>Houses</h1>
        <p>more Houses</p>
      </div>
    </div>-->
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>Navigation outside with text / no-history</h2>
  <m-carousel-two
    no-history
    active="11"
    namespace="carousel-two-default-"
    background-color="var(--m-gray-300)"
    nav-separate
    nav-align-self="start"
  >
    <section>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
          alt="Stuff"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>
            more Houses Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sunt amet architecto eveniet voluptate debitis sapiente
            explicabo, officiis, enim qui sed laborum hic vero, repellendus vel
            doloribus quisquam quae mollitia consequatur? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Hic adipisci deserunt eos vero
            quod impedit facere veniam temporibus doloremque? Iure aspernatur
            placeat labore, voluptatibus numquam ipsum tenetur culpa. Totam,
            voluptate.
          </p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
        <div class="text-align-center">
          <h1>Centered Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
          alt="Houses"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>
            more Houses Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. A quas saepe ab nostrum facilis aperiam, cupiditate nobis nemo
            sequi voluptatum totam modi quis fugit, ipsum sunt quam, similique
            officiis eaque.
          </p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
          alt="Motel"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>
            more Houses Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Consequuntur illo voluptate similique quibusdam debitis, hic a
            consectetur temporibus, doloremque explicabo facilis aspernatur
            ullam nulla eligendi voluptatum quos ut vero. Incidunt.
          </p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
        <div class="text-align-center">
          <h1>Centered Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
        <div>
          <h1>Houses</h1>
          <p>more Houses</p>
        </div>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/default-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
        <div class="text-align-center">
          <h1>Centered Houses</h1>
          <p>
            more Houses Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Esse, deserunt dolorem. Hic error atque in doloremque ex.
            Saepe, magni quam autem iusto explicabo molestiae aspernatur,
            corrupti quasi earum qui dicta?
          </p>
        </div>
      </div>
    </section>
  </m-carousel-two>
`;

export const SeperateNav = () => html` <m-carousel-two
  namespace="carousel-two-seperate-nav-"
  no-default-arrow-nav
  no-history
  carousel-changed="carousel-two-seperate-nav-changed"
>
  <section>
    <article id="1283">
      <div class="nav" style="background-color:#f44336;">
        <a-picture
          namespace="picture-"
          alt="Lageplan"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/seperate-nav-/img/lageplan.png"
          aspect-ratio="0.75"
        >
        </a-picture>
      </div>
      <div class="content">
        <h3>Bankett (eckige Tische)</h3>
        <article>
          <table>
            <thead>
              <tr>
                <td width="25%">
                  <p><strong>Masse</strong></p>
                </td>
                <td width="25%">
                  <p><strong>MainHall</strong></p>
                </td>
                <td width="25%">
                  <p><strong>SideHall*</strong></p>
                </td>
                <td width="25%">
                  <p><strong>Galerie gesamt*</strong></p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Fläche</p>
                </td>
                <td>
                  <p>1'167 m2</p>
                </td>
                <td>
                  <p>1'473 m2</p>
                </td>
                <td>
                  <p>741 m2</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Höhe</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <table border="0" width="100%">
                    <thead>
                      <tr>
                        <td width="25%">
                          <p><strong>Kapazität</strong></p>
                        </td>
                        <td width="25%">
                          <p><strong>MainHall</strong></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>Bankett (eckig)</p>
                        </td>
                        <td>
                          <p>504</p>
                        </td>
                        <td>
                          <p></p>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colspan="4">
                          <p>* nicht einzeln buchbar</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </article>
    <article id="1281">
      <div class="nav" style="background-color:#bcbcbc;">
        <a-picture
          namespace="picture-"
          alt="Lageplan"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/seperate-nav-/img/lageplan.png"
          aspect-ratio="0.75"
        >
        </a-picture>
      </div>
      <div class="content">
        <h3>Bankett (eckige Tische)</h3>
        <h3 class="title-border" id="">Bankett (eckige Tische)</h3>
        <article>
          <table>
            <thead>
              <tr>
                <td width="25%">
                  <p><strong>Masse</strong></p>
                </td>
                <td width="25%">
                  <p><strong>MainHall</strong></p>
                </td>
                <td width="25%">
                  <p><strong>SideHall*</strong></p>
                </td>
                <td width="25%">
                  <p><strong>Galerie gesamt*</strong></p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Fläche</p>
                </td>
                <td>
                  <p>1'167 m2</p>
                </td>
                <td>
                  <p>1'473 m2</p>
                </td>
                <td>
                  <p>741 m2</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Höhe</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <table border="0" width="100%">
                    <thead>
                      <tr>
                        <td width="25%">
                          <p><strong>Kapazität</strong></p>
                        </td>
                        <td width="25%">
                          <p><strong>MainHall</strong></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>Bankett (eckig)</p>
                        </td>
                        <td>
                          <p>504</p>
                        </td>
                        <td>
                          <p></p>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colspan="4">
                          <p>* nicht einzeln buchbar</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </article>
    <article>
      <div class="nav" style="background-color:#bcbcbc;">
        <a-picture
          namespace="picture-"
          alt="Lageplan"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/seperate-nav-/img/lageplan.png"
          aspect-ratio="0.75"
        >
        </a-picture>
      </div>
      <div class="content">
        <h3>Bankett (eckige Tische)</h3>
        <h3 class="title-border" id="">Bankett (eckige Tische)</h3>
        <article>
          <table>
            <thead>
              <tr>
                <td width="25%">
                  <p><strong>Masse</strong></p>
                </td>
                <td width="25%">
                  <p><strong>MainHall</strong></p>
                </td>
                <td width="25%">
                  <p><strong>SideHall*</strong></p>
                </td>
                <td width="25%">
                  <p><strong>Galerie gesamt*</strong></p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Fläche</p>
                </td>
                <td>
                  <p>1'167 m2</p>
                </td>
                <td>
                  <p>1'473 m2</p>
                </td>
                <td>
                  <p>741 m2</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Höhe</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <table border="0" width="100%">
                    <thead>
                      <tr>
                        <td width="25%">
                          <p><strong>Kapazität</strong></p>
                        </td>
                        <td width="25%">
                          <p><strong>MainHall</strong></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>Bankett (eckig)</p>
                        </td>
                        <td>
                          <p>504</p>
                        </td>
                        <td>
                          <p></p>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colspan="4">
                          <p>* nicht einzeln buchbar</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </article>
    <article>
      <div class="nav" style="background-color:#bcbcbc;">
        <a-picture
          namespace="picture-"
          alt="Lageplan"
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/seperate-nav-/img/lageplan.png"
          aspect-ratio="0.75"
        >
        </a-picture>
      </div>
      <div class="content">
        <h3>Bankett (eckige Tische)</h3>
        <h3 class="title-border" id="">Bankett (eckige Tische)</h3>
        <article>
          <table>
            <thead>
              <tr>
                <td width="25%">
                  <p><strong>Masse</strong></p>
                </td>
                <td width="25%">
                  <p><strong>MainHall</strong></p>
                </td>
                <td width="25%">
                  <p><strong>SideHall*</strong></p>
                </td>
                <td width="25%">
                  <p><strong>Galerie gesamt*</strong></p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Fläche</p>
                </td>
                <td>
                  <p>1'167 m2</p>
                </td>
                <td>
                  <p>1'473 m2</p>
                </td>
                <td>
                  <p>741 m2</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Höhe</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p>8 m</p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <table border="0" width="100%">
                    <thead>
                      <tr>
                        <td width="25%">
                          <p><strong>Kapazität</strong></p>
                        </td>
                        <td width="25%">
                          <p><strong>MainHall</strong></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                        <td width="25%">
                          <p></p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>Bankett (eckig)</p>
                        </td>
                        <td>
                          <p>504</p>
                        </td>
                        <td>
                          <p></p>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colspan="4">
                          <p>* nicht einzeln buchbar</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </article>
  </section>

  <a-slider-button>
    <span class="milestone" data-index="0">Bankett (eckige Tische)</span>
    <span class="milestone" data-index="1">Bankett (eckige Tische)</span>
    <span class="milestone" data-index="2">Bankett (eckige Tische)</span>
    <span class="milestone" data-index="3">Bankett (eckige Tische)</span>
  </a-slider-button>
</m-carousel-two>`;

export const Teaser = () => html`<h2>Navigation Teaser</h2>
  <m-carousel-two no-default-nav active="11" namespace="carousel-two-teaser-">
    <section>
      <m-teaser
        namespace="teaser-overlay-"
        href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
      >
        <figure>
          <a-picture
            namespace="picture-teaser-"
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
            alt="Yosemite"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color bg-color-no-box-shadow">
              Unsere Angebote & Services
            </h2>
            <h2 class="bg-color bg-color-no-box-shadow">
              <a-arrow move direction="right"></a-arrow>
            </h2>
          </figcaption>
        </figure>
      </m-teaser>
      <m-teaser namespace="teaser-plain-" width="33%" href="http://www.jowa.ch">
        <figure>
          <a-picture
            namespace="picture-scale-up-"
            hover-on-parent-shadow-root-host=""
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
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
      <m-teaser
        namespace="teaser-overlay-"
        href="https://www.stadlerrail.com/de/ueber-uns/standorte/stadler-bussnang-ag/"
      >
        <figure>
          <a-picture
            namespace="picture-teaser-"
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
            alt="Yosemite"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color">Unsere Angebote & Services</h2>
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
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Yosemite"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color">Unsere Angebote & Services</h2>
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
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
            alt="Yosemite"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color">Unsere Angebote & Services</h2>
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
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
            alt="Yosemite"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color">Unsere Angebote & Services</h2>
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
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/teaser-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Yosemite"
          ></a-picture>
          <figcaption>
            <h2 class="bg-color bg-color-no-box-shadow">
              Unsere Angebote & Services
            </h2>
            <h2 class="bg-color bg-color-no-box-shadow">
              <a-arrow move direction="right"></a-arrow>
            </h2>
          </figcaption>
        </figure>
      </m-teaser>
    </section>
  </m-carousel-two>`;

export const Thumbnail = () => html`
  <h2>Navigation overlay(ed)</h2>
  <m-carousel-two
    interval="2000"
    active="3"
    namespace="carousel-two-thumbnail-"
    background-color="var(--m-gray-300)"
    nav-align-self="start"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <div>
        <style>
          :host #image-2 {
            --carousel-two-thumbnail-section-child-justify-content: space-between;
          }
        </style>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
          alt="Houses"
        ></a-picture>
        <h1>Houses</h1>
        <p>more Houses</p>
        <div class="spacer"></div>
      </div>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
    <nav>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
          alt="Houses"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>

      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </nav>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>Navigation outside</h2>
  <m-carousel-two
    active="3"
    namespace="carousel-two-thumbnail-"
    background-color="var(--m-gray-300)"
    nav-separate
    nav-align-self="end"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <div>
        <style>
          :host #image-2 {
            --carousel-two-thumbnail-section-child-justify-content: space-between;
          }
        </style>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
          alt="Houses"
        ></a-picture>
        <h1>Houses</h1>
        <p>more Houses</p>
        <div class="spacer"></div>
      </div>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
    <nav>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg"
          alt="Houses"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </nav>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>ridiculously long Navigation outside</h2>
  <m-carousel-two
    active="3"
    namespace="carousel-two-thumbnail-"
    background-color="var(--m-gray-300)"
    nav-separate
    nav-align-self="end"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
    <nav>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </nav>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>ridiculously long Navigation nav-flex-wrap</h2>
  <m-carousel-two
    active="3"
    namespace="carousel-two-thumbnail-"
    background-color="var(--m-gray-300)"
    nav-flex-wrap
    nav-align-self="start"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
    <nav>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </nav>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>ridiculously long Navigation outside + nav-flex-wrap</h2>
  <m-carousel-two
    active="3"
    namespace="carousel-two-thumbnail-"
    background-color="var(--m-gray-300)"
    nav-flex-wrap
    nav-separate
    nav-align-self="start"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
    <nav>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </nav>
  </m-carousel-two>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h2>ridiculously long Navigation outside + nav-flex-wrap + bottom</h2>
  <m-carousel-two
    active="3"
    namespace="carousel-two-thumbnail-"
    background-color="var(--m-gray-300)"
    nav-flex-wrap
    nav-separate
    nav-align-self="end"
  >
    <section>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
        alt="Yosemite"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
        alt="Galaxies"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
        alt="Motel"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
        alt="Minimalist nightmare"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
        alt="Hoops"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
        alt="Gentleman"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
        alt="Stuff"
      ></a-picture>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </section>
    <nav>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg"
          alt="Yosemite"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/arnaud-mariat-IPXcUYHeErc-unsplash.jpg"
          alt="Galaxies"
        ></a-picture>
      </a>
      <span>
        <a>
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/matthew-smith-9CV6WrxxdrM-unsplash.jpg"
            alt="Motel"
          ></a-picture>
        </a>
      </span>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"
          alt="Minimalist nightmare"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/jakob-owens-EkxOtUljwhs-unsplash.jpg"
          alt="Hoops"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/tim-bogdanov-4uojMEdcwI8-unsplash.jpg"
          alt="Gentleman"
        ></a-picture>
      </a>
      <a>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/weston-mackinnon-caUtk0DTiR0-unsplash.jpg"
          alt="Stuff"
        ></a-picture>
      </a>
      <a-picture
        picture-load
        defaultSource="src/web-components-toolbox/src/es/components/molecules/carouselTwo/thumbnail-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
        alt="Stuff"
      ></a-picture>
    </nav>
  </m-carousel-two>
`;
