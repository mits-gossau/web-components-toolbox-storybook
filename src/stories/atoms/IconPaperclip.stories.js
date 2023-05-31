// IconPaperclip.stories.js
import { html } from 'lit-html'

import('../../web-components-toolbox/src/es/components/atoms/iconPaperclip/IconPaperclip').then(
  (module) => self.customElements.define('a-icon-paperclip', module.default)
)

export default {
  title: 'Atoms/IconPaperclip',
  component: 'a-icon-paperclip'
}

export const Default = () => html` <a-icon-paperclip /> `
