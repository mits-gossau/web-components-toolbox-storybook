// Button.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/atoms/button/Button'
).then((module) => self.customElements.define('a-button', module.default))

export default {
  title: 'Atoms/Button',
  component: 'a-button'
}

export const Primary = () => html`<a-button namespace="button-primary-">Button</a-button>
<a-button namespace="button-primary-" disabled>Button</a-button>`

export const Secondary = () => html`
  <a-button namespace="button-secondary-">Button</a-button>
  <a-button namespace="button-secondary-" disabled>Button</a-button>
`

export const Quaternary = () => html`
  <a-button namespace="button-quaternary-">Button</a-button>
  <a-button namespace="button-quaternary-" disabled>Button</a-button>
`

export const Download = () => html`
  <a-button namespace="button-download-">Button</a-button>
`

export const Category = () => html`
  <a-button namespace="button-category-">Button</a-button>
`

export const CategoryWithIcon = () => html`
  <a-button namespace="button-category-">
    Button
    <svg class="icon-left" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 50 50" xml:space="preserve"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M31.785 10.047s-.283-4.306 3.127-4.402M4.062 22.596C2.368 22.596 1 23.853 1 25.412c0 1.323 6.207 16.085 6.207 16.085 1.023 3.557 4.942 6.438 8.754 6.438h17.976c3.807 0 7.731-2.881 8.751-6.438 0 0 6.312-14.762 6.312-16.085 0-1.559-1.368-2.816-3.062-2.816H4.062zM10.517 26.977v7.351M16.312 26.976v14.858M22.104 26.977v16.734M27.896 26.977v16.734M33.689 26.977v14.857M39.485 26.977v7.351M45.895 16.475 25 22.597M26.631 5.886l-19.5.034 14.587-3.855zM7.131 5.92v5.426c.235-.07.476-.121.733-.121 1.413 0 2.555 1.156 2.555 2.581 0 1.426-1.142 2.582-2.555 2.582-.258 0-.498-.05-.733-.122V19.6"/><ellipse cx="17.037" cy="11.07" rx="1.418" ry="1.434"/><ellipse cx="14.166" cy="17.57" rx=".728" ry=".733"/><path d="M20.936 19.52a23.456 23.456 0 0 1-.112-2.1c0-4.695 4.46-8.414 8.974-8.414.612 0 1.215 1.021 1.792 1.148.582-.126 1.184-1.148 1.796-1.148 3.438 0 6.768 2.156 8.218 5.255"/></g></svg>
  </a-button>
`
