// RecipeList.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/atoms/input/Input'
).then((module) => self.customElements.define('a-input', module.default))

import(
  '../../web-components-toolbox/src/es/components/atoms/button/Button'
).then((module) => self.customElements.define('a-button', module.default))

import(
  '../../web-components-toolbox/src/es/components/molecules/pagination/Pagination'
).then((module) => self.customElements.define('m-pagination', module.default))

import(
  '../../web-components-toolbox/src/es/components/molecules/recipeList/RecipeList'
).then((module) => self.customElements.define('m-recipe-list', module.default))

import(
  '../../web-components-toolbox/src/es/components/molecules/tagFilter/TagFilter'
).then((module) => self.customElements.define('m-tag-filter', module.default))

import(
  '../../web-components-toolbox/src/es/components/organisms/grid/Grid'
).then((module) => self.customElements.define('o-grid', module.default))

export default {
  title: 'Molecules/RecipeList (WIP)',
  component: 'm-recipe-list'
}

export const Default = () =>
  html`
    <a-input
      inputid="inputSearch"
      placeholder="Suchen..."
      submit-search="request-list-recipe"
      search=""
      type="search"
      any-key-listener
      change-listener
      delete-listener
      answer-event-name="list-recipe"
      active-detail-property-name="fetch:searchTerm"
    ></a-input>
    <o-grid
      namespace="grid-2colums2rows-"
      first-container-vertical
      first-column-with="20%"
    >
      <section>
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
        <o-grid namespace="grid-2colums2rows-" first-container-horizontal>
          <m-tag-filter
            namespace="tag-filter-horizontal-"
            answer-event-name="list-recipe"
            request-event-name="request-list-recipe"
          >
            <a-button
              namespace="button-category-"
              tag="vegetarisch"
              answer-event-name="list-recipe"
              request-event-name="request-list-recipe"
              active-detail-property-name="fetch:tag"
              >Vegetarisch</a-button
            >
            <a-button
              namespace="button-category-"
              tag="glut"
              answer-event-name="list-recipe"
              request-event-name="request-list-recipe"
              active-detail-property-name="fetch:tag"
              >Glutenfrei</a-button
            >
            <a-button
              namespace="button-category-"
              tag="vegan"
              answer-event-name="list-recipe"
              request-event-name="request-list-recipe"
              active-detail-property-name="fetch:tag"
              >Vegan</a-button
            >
          </m-tag-filter>
          <m-pagination
            answer-event-name="list-recipe"
            request-event-name="request-list-recipe"
            namespace="pagination-default-"
            compact
          ></m-pagination>
        </o-grid>
        <m-recipe-list
          answer-event-name="list-recipe"
          request-event-name="request-list-recipe"
          namespace="recipe-list-default-"
        >
        </m-recipe-list>
      </section>
    </o-grid>
  `
