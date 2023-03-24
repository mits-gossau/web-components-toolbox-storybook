# Web Components Storybook

This repository is about offering a Storybook with all Web Components, which are build for any CMS but particularly used for [Mutobo](http://mutobo.ch/).

## Table of contents

- [Web Components Storybook](#web-components-storybook)
  - [Table of contents](#table-of-contents)
  - [Setup](#setup)
  - [Demo](#demo)
  - [Build](#build)
  - [Supported Projects](#supported-projects)
  - [Web Components](#web-components)
    - [Atoms](#atoms)
    - [Molecules](#molecules)

## Setup

```console
git clone git@github.com:mits-gossau/web-components-toolbox-storybook.git
```

```console
cd web-components-toolbox-storybook
```

```console
npm install
```

```console
git submodule update --init --recursive --remote --force
```

```console
npm run storybook
```

Take a look at package.json for other scripts.

You can find all stories in `src/stories`.

## Demo

Take a look at [the deployed Storybook](https://mits-gossau.github.io/web-components-toolbox-storybook/storybook-static/).

## Build

To take over changes on stories just build Storybook with static files, create a commit and push it afterwards.

```console
npm run build-storybook
```

```console
git add . && git commit -m "feat(storybook-static): build static files for Storybook" && git push
```

This push triggers an action to auto deploy static Storybook files. See [static.yml](.github/workflows/static.yml) for more information.

## Supported Projects

This Storybook supports following clients (added as submodules in `src`):

- [Default](https://github.com/mits-gossau/web-components-toolbox)
- [Alnatura](https://github.com/mits-gossau/web-components-toolbox-alnatura)
- [Betriebsrestaurants](https://github.com/mits-gossau/web-components-toolbox-betriebsrestaurant)
- [Bülach Süd](https://github.com/mits-gossau/web-components-toolbox-buelach-sued)
- [Eatery](https://github.com/mits-gossau/web-components-toolbox-eatery)
- [Hitzberger](https://github.com/mits-gossau/web-components-toolbox-hitzberger)
- [Kaimug](https://github.com/mits-gossau/web-components-toolbox-kaimug)
- [Klubschule](https://github.com/mits-gossau/web-components-toolbox-klubschule)
- [Logistikplattform](https://github.com/mits-gossau/web-components-toolbox-logistikplattform)
- [Maker Space](https://github.com/mits-gossau/web-components-toolbox-maker-space)
- [Migros City](https://github.com/mits-gossau/web-components-toolbox-migros-city)
- [Nature](https://github.com/mits-gossau/web-components-toolbox-nature)
- [Neumarkt Altstetten](https://github.com/mits-gossau/web-components-toolbox-neumarkt-altstetten)
- [Oranger Garten](https://github.com/mits-gossau/web-components-toolbox-orangergarten)
- [Park im Grüene](https://github.com/mits-gossau/web-components-toolbox-parkimgruene)
- [StageOne](https://github.com/mits-gossau/web-components-toolbox-stage-one)
- [TechDay](https://github.com/mits-gossau/web-components-toolbox-techday)
- [Yearbooks](https://github.com/mits-gossau/web-components-toolbox-yearbooks)
- [Zürisee Center](https://github.com/mits-gossau/web-components-toolbox-zueriseecenter)

> Hint: Update submodules
>
> ```console
> git submodule update --init --recursive --remote --force
>```

## Web Components

At the moment the following components are included.

### Atoms

- [Arrow](src/stories/atoms/Arrow.stories.js)
- [Breadcrumb](src/stories/atoms/Breadcrumb.stories.js)
- [Button](src/stories/atoms/Button.stories.js)
- [Email](src/stories/atoms/Email.stories.js)
- [EmotionPictures](src/stories/atoms/EmotionPictures.stories.js)
- [GoogleMaps](src/stories/atoms/GoogleMaps.stories.js)
- [Hotspot](src/stories/atoms/Hotspot.stories.js)
- [IconAmp](src/stories/atoms/IconAmp.stories.js)
- [IconAmp](src/stories/atoms/IconLocation.stories.js)
- [IconAmp](src/stories/atoms/IconPaperclip.stories.js)
- [Iframe](src/stories/atoms/Iframe.stories.js)
- [Input](src/stories/atoms/Input.stories.js)
- [Link](src/stories/atoms/Link.stories.js)
- [Loading](src/stories/atoms/Loading.stories.js)
- [Logo](src/stories/atoms/Logo.stories.js)
- [MenuIcon](src/stories/atoms/MenuIcon.stories.js)
- [Picture](src/stories/atoms/Picture.stories.js)
- [SliderButton](src/stories/atoms/SliderButton.stories.js)
- [Video](src/stories/atoms/Video.stories.js)

### Molecules

- [Carousel](src/stories/molecules/Carousel.stories.js)
- [CarouselTwo](src/stories/molecules/CarouselTwo.stories.js)
- [CookieBanner](src/stories/molecules/CookieBanner.stories.js) (wip)
- [Details](src/stories/molecules/Details.stories.js)
- [Flockler](src/stories/molecules/Flockler.stories.js)
- [Form](src/stories/molecules/Form.stories.js)
- [FormZadb](src/stories/molecules/FormZadb.stories.js)
- [ImageHotspot](src/stories/molecules/ImageHotspot.stories.js)
- [Navigation](src/stories/molecules/Navigation.stories.js) (wip)
- [Pagination](src/stories/molecules/Pagination.stories.js) (wip)
- [PictureText](src/stories/molecules/PictureText.stories.js)
- [PictureWithPicture](src/stories/molecules/PictureWithPicture.stories.js)
- [RecipeList](src/stories/molecules/RecipeList.stories.js) (wip)
- [TagFilter](src/stories/molecules/TagFilter.stories.js)
- [Teaser](src/stories/molecules/Teaser.stories.js)
