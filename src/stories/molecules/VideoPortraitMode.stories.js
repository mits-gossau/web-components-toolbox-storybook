// VideoPortraitMode.stories.js
import { html } from "lit-html";

export default {
  title: "Molecules/Video Portrait Mode (WIP)",
};

export const Default = () => html`
  <o-grid namespace="grid-2colums2rows-" first-container-vertical first-column-with="50%">
    <section>
      <div>
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
      </div>
      <div>
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
      </div>
    </section>
  </o-grid>
`;
