// import { addDecorator } from '@storybook/web-components'; // <- or your storybook framework
// import { withThemes } from 'storybook-addon-themes/html'; // <- or your storybook framework

// addDecorator(withThemes);

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

import "../src/web-components-toolbox/src/css/initial.css";
import "../src/web-components-toolbox/src/css/reset.css";
import "../src/web-components-toolbox/src/css/colors.css";
import "../src/web-components-toolbox/src/css/fonts.css";
import "../src/web-components-toolbox/src/css/variables.css";

import themeAlnatura from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-alnatura/src/css/variablesCustom.css';
import themeBetriebsrestaurants from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-betriebsrestaurant/src/css/variablesCustom.css';
import themeBuelachSued from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-buelach-sued/src/css/variablesCustom.css';
import themeEatery from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-eatery/src/css/variablesCustom.css';
import themeHitzberger from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-hitzberger/src/css/variablesCustom.css';
import themeKaimug from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-kaimug/src/css/variablesCustom.css';
import themeKlubschule from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-klubschule/src/css/variablesCustom.css';
import themeLogistikplattform from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-logistikplattform/src/css/variablesCustom.css';
import themeMakerSpace from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-maker-space/src/css/variablesCustom.css';
import themeMDX from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-mdx/src/css/variablesCustom.css';
import themeMigrosCity from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-migros-city/src/css/variablesCustom.css';
import themeNature from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-nature/src/css/variablesCustom.css';
import themeNeumarktAltstetten from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-neumarkt-altstetten/src/css/variablesCustom.css';
import themeOrangerGarten from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-orangergarten/src/css/variablesCustom.css';
import themeParkImGruene from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-parkimgruene/src/css/variablesCustom.css';
import themeStageOne from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-stage-one/src/css/variablesCustom.css';
import themeTechDay from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-techday/src/css/variablesCustom.css';
import themeYearbooksIndustrie from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-yearbooks/src/css/variablesIndustrie.css';
import themeYearbooksMiduca from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-yearbooks/src/css/variablesMiduca.css';
import themeYearbooksOperations from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-yearbooks/src/css/variablesOperations.css';
import themeZueriseeCenter from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/mandants/web-components-toolbox-zueriseecenter/src/css/variablesCustom.css';

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
      'Betriebsrestaurants': themeBetriebsrestaurants,
      'Bülach Süd': themeBuelachSued,
      'Eatery': themeEatery,
      'Hitzberger': themeHitzberger,
      'Kaimug': themeKaimug,
      'Klubschule': themeKlubschule,
      'Logistikplattform': themeLogistikplattform,
      'Maker Space': themeMakerSpace,
      'MDX': themeMDX,
      'Migros City': themeMigrosCity,
      'Nature': themeNature,
      'Neumarkt Altstetten': themeNeumarktAltstetten,
      'Oranger Garten': themeOrangerGarten,
      'Park im Grüene': themeParkImGruene,
      'StageOne': themeStageOne,
      'TechDay': themeTechDay,
      'Yearbooks Industrie': themeYearbooksIndustrie,
      'Yearbooks Miduca': themeYearbooksMiduca,
      'Yearbooks Operations': themeYearbooksOperations,
      'Zürisee Center': themeZueriseeCenter,
    },
    defaultTheme: 'No Theme'
  },
  themes: {
    list: [
      { name: 'corporate', class: 'themeCorporateLight', color: 'rgb(255, 102, 0)' },
      { name: 'm', class: 'themeMLight', color: 'rgb(255, 102, 0)' },
      { name: 'showcase', class: 'themeShowcaseLight', color: 'rgb(255, 191, 41)' }
    ],
    target: 'root',
  },
}