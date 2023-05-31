// Hotspot.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/atoms/hotspot/Hotspot'
).then((module) => self.customElements.define('a-hotspot', module.default))

export default {
  title: 'Atoms/Hotspot',
  component: 'a-hotspot'
}

export const Default = () => html`
  <div style="background-color: gray; height: 80vh; position: relative;">
    <a-hotspot top="35" left="20" place="right">
      <div class="content">
        <h3>Walk of Fame</h3>
        <article>
          <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
        </article>
      </div>
    </a-hotspot>
    <a-hotspot top="70" left="35" place="top">
      <div class="content">
        <h3>Walk of Fame</h3>
        <article>
          <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
        </article>
      </div>
    </a-hotspot>
    <a-hotspot top="35" left="80" place="left">
      <div class="content">
        <h3>Walk of Fame</h3>
        <article>
          <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
        </article>
      </div>
    </a-hotspot>
    <a-hotspot top="20" left="40" place="bottom">
      <div class="content">
        <h3>Walk of Fame</h3>
        <article>
          <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
        </article>
      </div>
    </a-hotspot>
  </div>
`

export const Helper = () => html`<div
  style="background-color: gray; height: 80vh; position: relative;"
>
  <a-hotspot namespace="hotspot-helper-" top="35" left="20" place="right">
    <div class="content">
      <h3>Walk of Fame</h3>
      <article>
        <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
      </article>
    </div>
  </a-hotspot>
  <a-hotspot namespace="hotspot-helper-" top="70" left="35" place="top">
    <div class="content">
      <h3>Walk of Fame</h3>
      <article>
        <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
      </article>
    </div>
  </a-hotspot>
  <a-hotspot namespace="hotspot-helper-" top="35" left="80" place="left">
    <div class="content">
      <h3>Walk of Fame</h3>
      <article>
        <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
      </article>
    </div>
  </a-hotspot>
  <a-hotspot namespace="hotspot-helper-" top="20" left="40" place="bottom">
    <div class="content">
      <h3>Walk of Fame</h3>
      <article>
        <p>Gut. Besser. Am besten. Die Eigenproduktion der Migros.</p>
      </article>
    </div>
  </a-hotspot>
</div> `
