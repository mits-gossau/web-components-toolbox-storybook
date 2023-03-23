# Storybook of Web Components

This repository is about offering a Storybook with all Web Components, which are build for any CMS but particularly used for [Mutobo](http://mutobo.ch/).

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
git add .
git commit -m "build Storybook"
git push
```

This push triggers an action to auto deploy static Storybook files. See [static.yml](.github/workflows/static.yml) for more information.

## Projects

This Storybook supports following clients (added as submodules in `src`):

- [Default](https://github.com/mits-gossau/web-components-toolbox)
- [Alnatura](https://github.com/mits-gossau/web-components-toolbox-alnatura)
- [Hitzberger](https://github.com/mits-gossau/web-components-toolbox-hitzberger)
- [Kaimug](https://github.com/mits-gossau/web-components-toolbox-kaimug)
- [Klubschule](https://github.com/mits-gossau/web-components-toolbox-klubschule)
- [Maker Space](https://github.com/mits-gossau/web-components-toolbox-maker-space)
- [Migros City](https://github.com/mits-gossau/web-components-toolbox-migros-city)
- [Nature](https://github.com/mits-gossau/web-components-toolbox-nature)
- [Neumarkt Altstetten](https://github.com/mits-gossau/web-components-toolbox-neumarkt-altstetten)
- [Park im Grüne](https://github.com/mits-gossau/web-components-toolbox-parkimgruene)
- [Stage One](https://github.com/mits-gossau/web-components-toolbox-stage-one)
- [TechDay](https://github.com/mits-gossau/web-components-toolbox-techday)
- [Yearbooks](https://github.com/mits-gossau/web-components-toolbox-yearbooks)
- [Zürisee Center](https://github.com/mits-gossau/web-components-toolbox-zueriseecenter)

> Hint: Update submodules
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
- [Loading](src/stories/atoms/Loading.stories.js)
- [Logo](src/stories/atoms/Logo.stories.js)
- [MenuIcon](src/stories/atoms/MenuIcon.stories.js)
- [Picture](src/stories/atoms/Picture.stories.js)
- [SliderButton](src/stories/atoms/SliderButton.stories.js)
- [Video](src/stories/atoms/Video.stories.js)
