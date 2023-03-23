import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

import "../src/web-components-toolbox/src/css/initial.css";
import "../src/web-components-toolbox/src/css/reset.css";
import "../src/web-components-toolbox/src/css/colors.css";
import "../src/web-components-toolbox/src/css/fonts.css";
import "../src/web-components-toolbox/src/css/variables.css";

import themeAlnatura from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-alnatura/src/css/variablesCustom.css';
import themeHitzberger from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-hitzberger/src/css/variablesCustom.css';
import themeKaimug from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-kaimug/src/css/variablesCustom.css';
import themeKlubschule from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-klubschule/src/css/variablesCustom.css';
import themeNature from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-nature/src/css/variablesCustom.css';
import themeStageOne from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-stage-one/src/css/variablesCustom.css';

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
      'Hitzberger': themeHitzberger,
      'Kaimug': themeKaimug,
      'Klubschule': themeKlubschule,
      'Nature': themeNature,
      'Stage One': themeStageOne,
    },
    defaultTheme: 'No Theme'
  }
}