module.exports = {
  staticDirs: [
    { from: "../src/web-components-toolbox/src", to: "/src" },
  ],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@etchteam/storybook-addon-css-variables-theme",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
        measure: false,
        outline: false,
      },
    },
  ],
  framework: "@storybook/web-components",
};
