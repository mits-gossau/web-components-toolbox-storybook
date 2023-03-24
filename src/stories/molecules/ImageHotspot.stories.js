// ImageHotspot.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/imageHotspot/ImageHotspot"
).then((module) =>
  self.customElements.define("m-image-hotspot", module.default)
);

export default {
  title: "Molecules/ImageHotspot",
  component: "m-image-hotspot",
};

export const Default = () =>
  html`
    <m-image-hotspot>
      <a-picture
        namespace="hotspot-picture-"
        alt="Dergarten"
        defaultSource="src/web-components-toolbox/src/es/components/molecules/imageHotspot/derGarten.jpg"
      >
      </a-picture>
      <a-hotspot top="33.777777777777779" left="73" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="49.333333333333336" left="80.25" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="68" left="81.75" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="63.555555555555557" left="72.25" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="59.111111111111114" left="64.5" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="37.333333333333336" left="59.5" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="56.888888888888886" left="54.25" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="53.777777777777779" left="43.25" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="71.555555555555557" left="55" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="75.111111111111114" left="40.25" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
      <a-hotspot top="61.333333333333336" left="26.75" place="bottom">
        <div class="content">
          <h3>Walk of Fame</h3>
          <article>
            <div class="hotspot-inner">
              <div class="hotspot-content-wrapper">
                <div
                  class="hotspot-content ui-js-hotspot-content is-bottom"
                  aria-hidden="false"
                >
                  <div class="hotspot-text text-area">
                    <p>
                      Gut. Besser. Am besten. Die Eigenproduktion der Migros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a-hotspot>
    </m-image-hotspot>
  `;
