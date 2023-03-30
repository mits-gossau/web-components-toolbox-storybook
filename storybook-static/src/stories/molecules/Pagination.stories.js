// Pagination.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/pagination/Pagination"
).then((module) => self.customElements.define("m-pagination", module.default));

export default {
  title: "Molecules/Pagination",
  component: "m-pagination",
};

export const Default = () => html`
  <m-pagination
    answer-event-name="list-news"
    request-event-name="request-list-news"
    namespace="pagination-default-"
  />
`;
