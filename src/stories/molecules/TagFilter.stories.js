// TagFilter.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/tagFilter/TagFilter"
).then((module) => self.customElements.define("m-tag-filter", module.default));

export default {
  title: "Molecules/TagFilter",
  component: "m-tag-filter",
};

export const Default = () =>
  html`
    <m-tag-filter namespace="tag-filter-vertical-">
      <a-button
        namespace="button-category-"
        tag="Drinks"
        answer-event-name="list-recipe"
        request-event-name="request-list-recipe"
        active-detail-property-name="fetch:tag"
        >Getränke</a-button
      >
      <a-button
        namespace="button-category-"
        tag="Appetizers"
        answer-event-name="list-recipe"
        request-event-name="request-list-recipe"
        active-detail-property-name="fetch:tag"
        >Vorspeisen</a-button
      >
      <a-button
        namespace="button-category-"
        tag="MainDishes"
        answer-event-name="list-recipe"
        request-event-name="request-list-recipe"
        active-detail-property-name="fetch:tag"
        >Hauptgerichte</a-button
      >
      <a-button
        namespace="button-category-"
        tag="DessertsAndBaking"
        answer-event-name="list-recipe"
        request-event-name="request-list-recipe"
        active-detail-property-name="fetch:tag"
        >Dessert & Backen</a-button
      >
      <a-button
        namespace="button-category-"
        tag="DIY"
        answer-event-name="list-recipe"
        request-event-name="request-list-recipe"
        active-detail-property-name="fetch:tag"
        >DIY</a-button
      >
    </m-tag-filter>
  `;
