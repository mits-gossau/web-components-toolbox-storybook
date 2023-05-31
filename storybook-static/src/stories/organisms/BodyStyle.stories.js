// BodyStyle.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/organisms/bodyStyle/BodyStyle'
).then((module) => self.customElements.define('o-body-style', module.default))

export default {
  title: 'Organisms/BodyStyle',
  component: 'o-body-style'
}

export const Default = () =>
  html`
    <o-body-style background-color="var(--m-gray-800)" color="var(--m-white)">
      <section>
        <p>Lorem Ipsum dolor ...</p>
      </section>
    </o-body-style>
  `
