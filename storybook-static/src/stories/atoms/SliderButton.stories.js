// SliderButton.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/atoms/sliderButton/SliderButton'
).then((module) =>
  self.customElements.define('a-slider-button', module.default)
)

export default {
  title: 'Atoms/SliderButton',
  component: 'a-slider-button'
}

export const Default = () => html`
  <a-slider-button>
    <span class="milestone" data-index="1">1</span>
    <span class="milestone" data-index="2">2</span>
    <span class="milestone" data-index="3">3</span>
  </a-slider-button>
`
