// EMail.stories.js
import { html } from 'lit-html'

import('../../web-components-toolbox/src/es/components/atoms/email/EMail').then((module) =>
  self.customElements.define('a-email', module.default)
)

export default {
  title: 'Atoms/Email',
  component: 'a-email'
}

export const Default = () => html`
  <a-email local-part="user">user@example.com</a-email>
`
