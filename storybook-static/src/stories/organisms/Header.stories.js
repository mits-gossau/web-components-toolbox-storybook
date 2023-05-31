// Header.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/organisms/header/Header'
).then((module) => self.customElements.define('o-header', module.default))

export default {
  title: 'Organisms/Header (WIP)',
  component: 'o-header'
}

export const Default = () =>
  html`
    <o-header menu-icon="true" namespace="header-default-" namespace-fallback role="header">
      <a-title>Title</a-title>
    </o-header>
  `
