// .storybook/manager.js

import { addons } from '@storybook/addons';
import webComponentsTheme from './WebComponentsTheme';

addons.setConfig({
  theme: webComponentsTheme,
});
