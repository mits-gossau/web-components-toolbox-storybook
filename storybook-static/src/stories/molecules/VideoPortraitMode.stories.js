// VideoPortraitMode.stories.js
import { html } from 'lit-html'

export default {
  title: 'Molecules/Video Portrait Mode',
  component: 'm-video-portrait-mode'
}

export const Default = () => html`
  <o-wrapper>
    <section>
      <div>
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
      </div>
      <div>
        <a-iframe keep-aspect-ratio background-color="var(--m-gray-400)">
          <template>
            <iframe
              height="1920"
              width="1080"
              src="https://youtube.com/embed/enyMjVjQ-EU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </template>
        </a-iframe>
      </div>
    </section>
  </o-wrapper>
`
