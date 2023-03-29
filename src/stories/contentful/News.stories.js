// News.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/contentful/news/News"
).then((module) => customElements.define("news", module.default));

export default {
  title: "Contentful/News",
  component: "news",
};

const date = new Date();
const tags = ["lorem", "ipsum", "dolor"];
const location = "Zürich";
const introHeadline =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const introImage = {
  title: "Intro Image",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "https://picsum.photos/id/866/640/480",
};
const imageOne = {
  title: "Image One",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "https://picsum.photos/id/244/640/480",
};
const imageTwo = {
  title: "Image Two",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "https://picsum.photos/id/1060/640/480",
};
const contentOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const contentTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const linkListCollection = {
  items: [],
};
const backBtnLabel = "Back";

export const Default = () => html`<div style="max-width: 480px">
  <news>
    <div class="intro">
      <p>
        ${new Date(date).toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
        - ${tags[1]}
      </p>
      <h1 class="font-size-big">${introHeadline}</h1>
      <p>
        <b class="intro">${location ? html`${location} - ` : ""}${introText}</b>
      </p>
      ${introImage
        ? html`<div>
            <a-picture
              mobile-breakpoint="767"
              picture-load
              defaultSource="${introImage.url}?w=2160&q=80&fm=jpg"
              alt="${introImage.description !== ""
                ? introImage.description
                : introImage.title}"
              query-width="w"
              query-format="fm"
              query-quality="q"
              query-height="h"
            ></a-picture>
          </div>`
        : ""}
    </div>
    <div class="content">
      ${contentOne ? html`<p>${contentOne}</p>` : ""}
      ${imageOne
        ? html`<a-picture
            mobile-breakpoint="767"
            picture-load
            defaultSource="${imageOne.url}?w=2160&q=80&fm=jpg"
            alt="${imageOne.description !== ""
              ? imageOne.description
              : imageOne.title}"
            query-width="w"
            query-format="fm"
            query-quality="q"
            query-height="h"
          ></a-picture>`
        : ""}
      ${contentTwo ? html`<p>${contentTwo}</p>` : imageTwo ? "<br />" : ""}
      ${imageTwo
        ? html`<a-picture
            mobile-breakpoint="767"
            picture-load
            defaultSource="${imageTwo.url}?w=2160&q=80&fm=jpg"
            alt="${imageTwo.description !== ""
              ? imageTwo.description
              : imageTwo.title}"
            query-width="w"
            query-format="fm"
            query-quality="q"
            query-height="h"
          ></a-picture>`
        : ""}
    </div>
    ${linkListCollection.items.length
      ? html`<div class="link-collection">
          ${this.renderLinkListCollection(linkListCollection.items)}
        </div>`
      : ""}
    <div class="back-btn-wrapper">
      <a-button
        mobile-breakpoint="767"
        class="back-btn"
        namespace="button-primary-"
      >
        ${backBtnLabel}</a-button
      >
    </div>
  </news>
</div> `;
