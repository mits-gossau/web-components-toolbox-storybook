// NewsList.stories.js
import { html } from 'lit-html'

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
    <contentful-news-list
      answer-event-name="list-news"
      request-event-name="request-list-news"
      namespace="news-list-default-"
      news-url="src/web-components-toolbox/docs/Template.html?content=/src/es/components/contentful/newsList/default-/default-.html"
      news-preview-namespace=""
    ></contentful-news-list>

  <script class=template-script type="text/javascript" src="src/web-components-toolbox/src/es/components/contentful/newsList/default-/default-.js"></script>
  <script type="text/javascript" src="src/web-components-toolbox/docs/es/loader.js"></script>  <script type="text/javascript" src="src/web-components-toolbox/docs/es/documenter.js?component=NewsList.js"></script>
  `
