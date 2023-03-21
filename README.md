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

## Projects

This Storybook supports following clients (added as submodules in `src`):

- [Default](https://github.com/mits-gossau/web-components-toolbox)
- [Alnatura](https://github.com/mits-gossau/web-components-toolbox-alnatura)

## Web Components

At the moment the following components are included.
### Atoms

- [Arrow](src/stories/atoms/Arrow.stories.js)
- [Breadcrumb](src/stories/atoms/Breadcrumb.stories.js)
- [Button](src/stories/atoms/Button.stories.js)
