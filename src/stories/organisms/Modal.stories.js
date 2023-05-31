// Modal.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/organisms/modal/Modal'
).then((module) => self.customElements.define('o-modal', module.default))

export default {
  title: 'Organisms/Modal',
  component: 'o-modal'
}

export const Default = () =>
  html`
    <div style="height:200px; width:300px;">
      <a-picture
        open-modal
        defaultSource="src/web-components-toolbox/src/es/components/organisms/modal/default-/img/jcr_content2.jpeg"
        alt="Alt Text"
      ></a-picture>
    </div>
    <o-modal />
  `
