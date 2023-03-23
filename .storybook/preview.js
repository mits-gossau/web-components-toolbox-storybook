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
import themeLogistikplattform from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-logistikplattform/src/css/variablesCustom.css';
import themeMakerSpace from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-maker-space/src/css/variablesCustom.css';
import themeMigrosCity from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-migros-city/src/css/variablesCustom.css';
import themeNature from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-nature/src/css/variablesCustom.css';
import themeNeumarktAltstetten from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-neumarkt-altstetten/src/css/variablesCustom.css';
import themeParkImGruene from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-parkimgruene/src/css/variablesCustom.css';
import themeStageOne from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-stage-one/src/css/variablesCustom.css';
import themeTechDay from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-techday/src/css/variablesCustom.css';
import themeYearbooksIndustrie from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-yearbooks/src/css/variablesIndustrie.css';
import themeYearbooksMiduca from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-yearbooks/src/css/variablesMiduca.css';
import themeYearbooksOperations from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-yearbooks/src/css/variablesOperations.css';
import themeZueriseeCenter from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/web-components-toolbox-zueriseecenter/src/css/variablesCustom.css';

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
      'Logistikplattform': themeLogistikplattform,
      'Maker Space': themeMakerSpace,
      'Migros City': themeMigrosCity,
      'Nature': themeNature,
      'Neumarkt Altstetten': themeNeumarktAltstetten,
      'Park im Grüne': themeParkImGruene,
      'Stage One': themeStageOne,
      'TechDay': themeTechDay,
      'Yearbooks Industrie': themeYearbooksIndustrie,
      'Yearbooks Miduca': themeYearbooksMiduca,
      'Yearbooks Operations': themeYearbooksOperations,
      'Zürisee Center': themeZueriseeCenter,
    },
    defaultTheme: 'No Theme'
  }
}