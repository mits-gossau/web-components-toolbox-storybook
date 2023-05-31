// Link.stories.js
import { html } from 'lit-html'

import('../../web-components-toolbox/src/es/components/atoms/link/Link').then(
  (module) => self.customElements.define('a-link', module.default)
)

export default {
  title: 'Atoms/Link',
  component: 'a-link'
}

export const Category = () =>
  html`
  <a-link
    namespace="category-"
    icon-path="src/web-components-toolbox/src/es/components/atoms/link/img/download-orange.svg"
    >
      <a href="#">Category</a>
  </a-link>
`

export const Download = () =>
  html`
    <a-link
      namespace="download-"
      icon-path="src/web-components-toolbox/src/es/components/atoms/link/img/download-orange.svg"
      >
        <a href="#">Download</a>
    </a-link>
  `

export const TagFilter = () =>
  html`
    <a-link
      namespace="tag-filter-"
      icon-path="src/web-components-toolbox/src/es/components/atoms/link/img/download-orange.svg"
      >
        <a href="#">Tag Filter</a>
    </a-link>
  `

export const Underline = () =>
  html`
    <a-link
      namespace="underline-"
      icon-path="src/web-components-toolbox/src/es/components/atoms/link/img/download-orange.svg"
      >
        <a href="#">Underline</a>
    </a-link>
  `
