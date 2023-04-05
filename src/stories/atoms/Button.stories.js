// Button.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/atoms/button/Button"
).then((module) => self.customElements.define("a-button", module.default));

export default {
  title: "Atoms/Button",
  component: "a-button",
  argTypes: {
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
  args: {
    disabled: false,
    label: "Button",
  },
};

// export const Primary = {
//   render: (args) => {
//     const btn = document.createElement('a-button');

//     btn.setAttribute("namespace",'button-primary-')
//     btn.innerText = args.label ? args.label : 'Button';
//     args.disabled ? btn.setAttribute('disabled', 'disabled') : undefined;
    
//     return btn;
//   },
//   args: {
//     disabled: true,
//     label: 'Button',
//   },
// };

export const Primary = () => html`
  <a-button namespace="button-primary-">Button</a-button>
`;

export const Secondary = () => html`
  <a-button namespace="button-secondary-">Button</a-button>
`;

export const Quaternary = () => html`
  <a-button namespace="button-quaternary-">Button</a-button>
`;

export const Download = () => html`
  <a-button namespace="button-download-">Button</a-button>
`;

export const Category = () => html`
  <a-button namespace="button-category-">Button</a-button>
`;
