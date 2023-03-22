// Input.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/input/Input").then(
  (module) => self.customElements.define("a-input", module.default)
);

export default {
  title: "Atoms/Input",
  component: "a-input",
};

export const Default = () => html`
  <a-input
    inputId="inputDefault"
    placeholder="My Placeholder"
    type="number"
    autocomplete="postal-code"
  >
    My Label for the Input Field
  </a-input>
  <hr />
  <a-input inputId="inputDisabled" disabled> Input Field Disabled </a-input>
  <hr />
  <a-input inputId="inputReadOnly" readonly> Input Field ReadOnly </a-input>
  <hr />
  <a-input inputId="inputError" error placeholder="My Placeholder">
    Input Field Error
  </a-input>
  <hr />
  <a-input inputId="inputSearch" placeholder="Ihre Suche..." search>
    Input Search Field
  </a-input>
  <hr />
  <a-input
    inputId="inputSearchDisabled"
    placeholder="Ihre Suche..."
    search
    type="search"
    disabled
  >
    Input Search Field Disabled
  </a-input>
  <hr />
  <a-input
    inputId="inputSearchReadOnly"
    placeholder="Ihre Suche..."
    search
    type="search"
    readonly
  >
    Input Search Field Readonly
  </a-input>
  <hr />
  <a-input
    inputId="inputSearchError"
    placeholder="Ihre Suche..."
    search
    type="search"
    error
  >
    Input Search Field Error
  </a-input>
`;
