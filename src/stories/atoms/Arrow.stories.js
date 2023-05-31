// Arrow.stories.js
import { html } from 'lit-html'

import('../../web-components-toolbox/src/es/components/atoms/arrow/Arrow').then(
  (module) => self.customElements.define('a-arrow', module.default)
)

export default {
  title: 'Atoms/Arrow',
  component: 'a-arrow'
}

export const Default = () =>
  html` <div>
    <p><a-arrow /></p>
    <hr />
    <p><a-arrow direction="up" /></p>
    <p><a-arrow direction="right" /></p>
    <p><a-arrow direction="down" /></p>
    <p><a-arrow direction="left" /></p>
    <hr />
    <p><a-arrow move direction="down" /></p>
    <p><a-arrow move hover-on-parent-shadow-root-host direction="right" /></p>
    <p><a-arrow move hover-on-parent-shadow-root-host direction="down" /></p>
  </div>`
