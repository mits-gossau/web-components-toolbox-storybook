// Iframe.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/atoms/iframe/Iframe'
).then((module) => self.customElements.define('a-iframe', module.default))

export default {
  title: 'Atoms/Iframe',
  component: 'a-iframe'
}

export const Default = () => html`
  <h2>Iframe with and background-color</h2>
  <a-iframe background-color="var(--m-gray-400)">
    <template>
      <iframe
        width="640"
        height="360"
        src="https://www.bitchute.com/embed/veHkCPWUdPGB"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </template>
  </a-iframe>
  <hr />
  <h2>Iframe with timeout 5s, width=853 and background-color</h2>
  <a-iframe timeout="5000" background-color="var(--m-gray-400)">
    <template>
      <iframe
        width="853"
        height="480"
        src="https://my.matterport.com/show/?m=YSNEkt4DstH&brand=0"
        frameborder="0"
        allowfullscreen
        allow="vr"
      ></iframe>
    </template>
  </a-iframe>
  <hr />
  <h2>Iframe with youtube</h2>
  <a-iframe>
    <template>
      <iframe
        src="https://www.youtube.com/embed/YzpN5Z2vMMo"
        title="Man's World Zürich 2020"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        width="640"
        height="360"
        frameborder="0"
      ></iframe>
    </template>
  </a-iframe>
  <hr />
  <h2>Iframe with youtube in wrapper</h2>
  <o-wrapper namespace="wrapper-teaser-">
    <section>
      <a-iframe>
        <template>
          <iframe
            src="https://www.youtube.com/embed/YzpN5Z2vMMo"
            title="Man's World Zürich 2020"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            width="640"
            height="360"
            frameborder="0"
          ></iframe>
        </template>
      </a-iframe>
      <a-iframe background-color="var(--m-gray-400)">
        <template>
          <iframe
            src="https://www.youtube.com/embed/YzpN5Z2vMMo"
            title="Man's World Zürich 2020"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            width="640"
            height="360"
            frameborder="0"
          ></iframe>
        </template>
      </a-iframe>
    </section>
  </o-wrapper>
  <hr />
  <h2>Iframe without timeout</h2>
  <a-iframe>
    <template>
      <iframe
        width="853"
        height="480"
        src="https://my.matterport.com/show/?m=YSNEkt4DstH&brand=0"
        frameborder="0"
        allowfullscreen
        allow="vr"
      ></iframe>
    </template>
  </a-iframe>
  <hr />
  <h2>
    Iframe with timeout 2s after intersection and background-color. scroll down!
    ↓↓↓
  </h2>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <a-iframe timeout="2000" background-color="var(--m-gray-400)">
    <template>
      <iframe
        width="853"
        height="480"
        src="https://my.matterport.com/show/?m=YSNEkt4DstH&brand=0"
        frameborder="0"
        allowfullscreen
        allow="vr"
      ></iframe>
    </template>
  </a-iframe>
`

export const Portrait = () => html`
  <h2>iframe in portrait mode with keep aspect ratio</h2>
  <a-iframe keep-aspect-ratio background-color="var(--m-gray-400)">
    <template>
      <iframe
        height="1920"
        width="1080"
        src="https://youtube.com/embed/HWIIoYTOQac"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </template>
  </a-iframe>
`
