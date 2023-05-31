// NewsList.stories.js
import { html } from 'lit-html'

// import(
//   "../../web-components-toolbox/src/es/components/controllers/contentful/Contentful"
// ).then((module) => customElements.define("c-contentful", module.default));

import(
  '../../web-components-toolbox/src/es/components/controllers/recipe/Recipe'
).then((module) => customElements.define('c-recipe', module.default))

import(
  '../../web-components-toolbox/src/es/components/pages/general/General'
).then((module) => customElements.define('p-general', module.default))

import(
  '../../web-components-toolbox/src/es/components/organisms/body/Body'
).then((module) => customElements.define('o-body', module.default))

import(
  '../../web-components-toolbox/src/es/components/contentful/newsList/NewsList'
).then((module) =>
  customElements.define('contentful-news-list', module.default)
)

export default {
  title: 'Contentful/NewsList (WIP)',
  component: 'contentful-news-list'
}

export const Default = () =>
  html`
  <!--<c-contentful
    space-id="sqcdqqsdj2qy"
    token="N0oUSHJElroOFejl3xoL-KMDTU7rNDfwa84cG_JCPxg"
    limit="5"
    skip="5"
    tag="Alnatura"
  >-->
    <c-recipe
      limit="9"
      skip="9"
      endpoint="https://admin.alnatura.ch/umbraco/api/AlnaturaRecipeApi/GetAllRecipes"
    >
      <p-general>
        <o-body>
          <contentful-news-list
            answer-event-name="list-news"
            request-event-name="request-list-news"
            namespace="news-list-default-"
            news-url="http://localhost:4200/docs/Template.html?content=/src/es/components/contentful/newsList/default-/default-.html"
            news-preview-namespace=""
          >
          </contentful-news-list>
        </o-body>
      </p-general>
    </c-recipe>
  <!--</c-contentful>--> `
