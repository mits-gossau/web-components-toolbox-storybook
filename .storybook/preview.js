import "../src/web-components-toolbox/src/css/initial.css";
import "../src/web-components-toolbox/src/css/reset.css";
import "../src/web-components-toolbox/src/css/colors.css";
import "../src/web-components-toolbox/src/css/fonts.css";
import "../src/web-components-toolbox/src/css/variables.css";

import themeAlnatura from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-alnatura/src/css/variablesCustom.css';

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

export const decorators = [
  cssVariablesTheme,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      'No Theme': '',
      'Alnatura': themeAlnatura,
    },
    defaultTheme: 'No Theme'
  }
}