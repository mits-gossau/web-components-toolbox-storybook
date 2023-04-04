module.exports = {
  staticDirs: [{ from: "../src", to: "/src" }],
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
    'storybook-addon-themes',
  ],
  framework: "@storybook/web-components",
};
