// Video.stories.js
import { html } from "lit-html";

import("../../web-components-toolbox/src/es/components/atoms/video/Video").then(
  (module) => self.customElements.define("a-video", module.default)
);

export default {
  title: "Atoms/Video",
  component: "a-video",
};

export const Default = () => html` <a-video>
    <style>
      :host {
        --width: 300px;
        --height: 200px;
        --filter: grayscale(100%);
        --filter-hover: grayscale(0%);
      }
    </style>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/J---aiyznGQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </a-video>
  <hr />
  <a-video>
    <style>
      :host {
        --width: 100%;
        --height: 400px;
        --filter: grayscale(0%);
        --filter-hover: grayscale(100%);
      }
    </style>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/J---aiyznGQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </a-video>`;

export const Autoplay = () => html`
  <a-video
    muted
    autoplay
    controls
    sources="[{'src':'https://gateway.ipfs.io/ipfs/QmRjXPrLb4wyvNQNfqaeZxT7tchAcznbTJimdey8aLRmJ9?filename=no_coast_drift_hd_stock_video.mp4', 'type':'video/mp4'}]"
  >
    <style>
      :host {
        --width: 200px;
        --filter: grayscale(100%);
        --filter-hover: grayscale(0%);
        --outline: 2px pink solid;
      }
    </style>
  </a-video>
`;

export const Controls = () => html`
  <a-video controls>
    <source
      type="video/mp4"
      src="https://gateway.ipfs.io/ipfs/QmRjXPrLb4wyvNQNfqaeZxT7tchAcznbTJimdey8aLRmJ9?filename=no_coast_drift_hd_stock_video.mp4"
    />
  </a-video>
`;

export const Crop = () => html`
  <a-video
    namespace="video-crop-"
    muted
    video-load
    autoplay
    loop="true"
    aspect-ratio="0.5618181818181818"
    poster="src/web-components-toolbox/src/es/components/atoms/video/crop-/video/video.JPG"
  >
    <source
      type="video/mp4"
      src="src/web-components-toolbox/src/es/components/atoms/video/crop-/video/video.mp4"
    />
  </a-video>
`;
