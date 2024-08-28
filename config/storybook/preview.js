import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../../src/shared/ui';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'uk', title: 'Ukraine' },
      ],
      showName: true,
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: Theme.LIGHT,
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: Theme.LIGHT, icon: 'circlehollow', title: 'Light' },
        { value: Theme.DARK, icon: 'circle', title: 'Dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /(Date)$/,

    },
  },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator);
addDecorator(RouterDecorator);
