// Carousel.stories.js
import { html } from "lit-html";

import(
  "../../web-components-toolbox/src/es/components/molecules/carousel/Carousel"
).then((module) => self.customElements.define("m-carousel", module.default));

export default {
  title: "Molecules/Carousel",
  component: "m-carousel",
};

export const Default = () => html`
  <div class="wrapper" style="max-width: 640px">
    <m-carousel
      navigation
      pagination
      loop
      height="auto"
      namespace="carousel-default-"
      interval="5000"
    >
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/default-/img/dummy-img-1.jpeg"
          alt="test 1"
        >
        </a-picture>
        <div class="text">
          <p>Sushi-Herstellung vor Ort.</p>
        </div>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/default-/img/dummy-img-2.jpeg"
          alt="test 1"
        >
        </a-picture>
        <div class="text">
          <p>Sandwicheria: für jeden Geschmack das Richtige.</p>
        </div>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/default-/img/dummy-img-3.jpeg"
          alt="test 1"
        >
        </a-picture>
        <div class="text">
          <p>Gefüllte Sandwiches</p>
        </div>
      </div>
    </m-carousel>
  </div>
`;

export const Emotion = () => html`
  <div class="wrapper" style="max-width: 640px">
    <m-carousel
      navigation
      pagination
      loop
      height="auto"
      namespace="carousel-emotion-"
      interval="5000"
    >
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/emotion-/img/dummy_1.jpeg"
          alt="test 1"
        ></a-picture>
        <div class="title">
          <h1 class="bg-color font-size-big font-family-secondary">H1 Title</h1>
        </div>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/emotion-/img/dummy_2.jpeg"
          alt="test 2"
        ></a-picture>
        <div class="title">
          <h1 class="bg-color font-size-big font-family-secondary">
            Sandwicheria:<br />für jeden Geschmack das Richtige.
          </h1>
        </div>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/emotion-/img/dummy_3.jpeg"
          alt="test 3"
        ></a-picture>
        <div class="title">
          <h1 class="bg-color font-size-big font-family-secondary">
            Gefüllte Sandwiches
          </h1>
        </div>
      </div>
    </m-carousel>
  </div>
`;

export const Portrait = () => html`
  <div class="wrapper" style="max-width: 260px">
    <m-carousel
      navigation
      pagination
      loop
      height="auto"
      namespace="carousel-portrait-"
      interval="5000"
    >
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/portrait-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
          alt="test 1"
        ></a-picture>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/portrait-/img/tiffanytrenda-vanishingportrait-identity.jpg"
          alt="test 1"
        ></a-picture>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/portrait-/img/a3ac1ed5abaedffd9947face7901e14c.jpg"
          alt="test 1"
        ></a-picture>
      </div>
      <div class="container">
        <a-picture
          namespace="carousel-picture-"
          picture-load
          defaultSource="src/web-components-toolbox/src/es/components/molecules/carousel/portrait-/img/tiffanytrenda-vanishingportrait-identity.jpg"
          alt="test 1"
        ></a-picture>
      </div>
    </m-carousel>
  </div>
`;
