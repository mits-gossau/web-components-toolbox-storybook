// EmotionPictures.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/atoms/emotionPictures/EmotionPictures'
).then((module) =>
  self.customElements.define('a-emotion-pictures', module.default)
)

export default {
  title: 'Atoms/EmotionPictures',
  component: 'a-emotion-pictures'
}

export const Default = () =>
  html`
    <a-emotion-pictures namespace="emotion-pictures-default-">
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/default-/img/jcr_content2.jpeg"
          alt="randomized image"
        ></a-picture>
      </div>
      <div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/default-/img/jcr_content3.jpeg"
          alt="randomized image"
        ></a-picture>
      </div>
    </a-emotion-pictures>
    <hr />
    <a-emotion-pictures namespace="emotion-pictures-default-">
      <a href="#">
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/default-/img/jcr_content5_2.jpeg"
          alt="randomized image"
        ></a-picture>
      </a>
    </a-emotion-pictures>
  `

export const Button = () =>
  html`
    <a-emotion-pictures namespace="emotion-pictures-with-button-">
        <a href="#">
            <div>
            <h1 class="bg-color font-size-big font-family-secondary">H1 Title</h1>
            <div class="spacer-one"></div>
            <a-button hover-on-parent-shadow-root-host namespace="button-primary-" href="#" target="_self" tabindex="0" role="link"
                data-href="#">
                Order now
            </a-button>
            </div>
            <a-picture picture-load defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-button-/img/jcr_content.jpeg" alt="randomized image"></a-picture>
        </a>
    </a-emotion-pictures>
    <hr />
    <a-emotion-pictures namespace="emotion-pictures-with-button-">
        <div>  
            <div>
            <style>
                :host {
                --emotion-pictures-with-button-color:var(--m-white);
                --emotion-pictures-with-button-h2-margin: 0 0 0.5rem;
                }
            </style>

            <h2 class="font-size-big font-family-secondary">H1 Title</h1>
            <h2 class="font-size-big font-color font-family-secondary subline">Die Location, die sich Ihrem Anlass anpasst.</h2>
            <div class="spacer-one"></div>
            <a-button hover-on-parent-shadow-root-host namespace="button-primary-" href="#" target="_self" tabindex="0" role="link"
                data-href="#">
                Order now
            </a-button>
            </div>
            <a-picture picture-load defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-button-/img/jcr_content.jpeg" alt="randomized image"></a-picture>
        </div>
    </a-emotion-pictures>
  `

export const Logo = () =>
  html`
    <a-emotion-pictures namespace="emotion-pictures-with-logo-">
      <a href="#">
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">Logo Top</h2>
          <h2 class="bg-color font-family-secondary subline">
            Gewinne ein Goodie-Package von YOGA NINA und HITZBERGER.
          </h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
        <div class="logo" logo-position="flex-start">
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/logo.png"
            alt="randomized image"
            namespace="logo-"
          ></a-picture>
        </div>
      </a>
    </a-emotion-pictures>
    <hr />
    <a-emotion-pictures namespace="emotion-pictures-with-logo-">
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">
            (1/2) Logo - Top
          </h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
        <div class="logo" logo-position="flex-start">
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/logo.png"
            alt="randomized image"
            namespace="logo-"
          ></a-picture>
        </div>
      </div>
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">
            (2/2) Logo - Default
          </h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
        <div class="logo">
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/logo.png"
            alt="randomized image"
            namespace="logo-"
          ></a-picture>
        </div>
      </div>
    </a-emotion-pictures>
    <hr />
    <a-emotion-pictures namespace="emotion-pictures-with-logo-">
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">
            (1/2) Logo - Center
          </h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
        <div class="logo" logo-position="center">
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/logo.png"
            alt="randomized image"
            namespace="logo-"
          ></a-picture>
        </div>
      </div>
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">
            (2/2) Logo - End
          </h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
        <div class="logo" logo-position="flex-end">
          <a-picture
            picture-load
            defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-logo-/img/logo.png"
            alt="randomized image"
            namespace="logo-"
          ></a-picture>
        </div>
      </div>
    </a-emotion-pictures>
  `

export const Title = () =>
  html`
    <a-emotion-pictures namespace="emotion-pictures-with-title-">
      <a href="#">
        <div>
          <h1 class="bg-color font-size-big font-family-secondary">H1 Title</h1>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-title-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
      </a>
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">H2 Title</h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-title-/img/jcr_content4.jpeg"
          alt="randomized image"
        ></a-picture>
      </div>
    </a-emotion-pictures>
    <hr />
    <a-emotion-pictures namespace="emotion-pictures-with-title-">
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">H2 Title</h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-title-/img/jcr_content.jpeg"
          alt="randomized image"
        ></a-picture>
      </div>
    </a-emotion-pictures>
    <hr />
    <a-emotion-pictures namespace="emotion-pictures-with-title-">
      <div>
        <div>
          <h2 class="bg-color font-size-big font-family-secondary">
            (1/2) Pictures
          </h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-title-/img/jcr_content4.jpeg"
          alt="randomized image"
        ></a-picture>
      </div>
      <div>
        <div>
          <h2 class="bg-color font-size-big">(2/2) Pictures</h2>
        </div>
        <a-picture
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-title-/img/jcr_content4_2.jpeg"
          alt="randomized image"
        ></a-picture>
      </div>
    </a-emotion-pictures>
  `

export const Video = () =>
  html`
    <a-emotion-pictures namespace="emotion-pictures-with-video-">
      <div>
        <div>
          <h1 class="font-size-big font-family-secondary">NACHHALTIGKEIT</h1>
        </div>
        <a-video controls>
          <source
            type="video/mp4"
            src="src/web-components-toolbox/src/es/components/atoms/emotionPictures/with-video-/video/video.mp4"
          />
        </a-video>
      </div>
    </a-emotion-pictures>
  `
