import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/ui';
import Button, { ButtonAppearance, ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  appearance: ButtonAppearance.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  appearance: ButtonAppearance.OUTLINE,
};

export const OutlineSizeMedium = Template.bind({});
OutlineSizeMedium.args = {
  children: 'Button',
  appearance: ButtonAppearance.OUTLINE,
  size: ButtonSize.MEDIUM,
};

export const OutlineSizeLarge = Template.bind({});
OutlineSizeLarge.args = {
  children: 'Button',
  appearance: ButtonAppearance.OUTLINE,
  size: ButtonSize.LARGE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  appearance: ButtonAppearance.OUTLINE,
};
OutlineDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  appearance: ButtonAppearance.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Button',
  appearance: ButtonAppearance.BACKGROUND,
};
BackgroundDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  appearance: ButtonAppearance.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Button',
  appearance: ButtonAppearance.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const SquareSizeSmall = Template.bind({});
SquareSizeSmall.args = {
  children: '>',
  appearance: ButtonAppearance.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.SMALL,
};

export const SquareSizeMedium = Template.bind({});
SquareSizeMedium.args = {
  children: '>',
  appearance: ButtonAppearance.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.MEDIUM,
};

export const SquareSizeLarge = Template.bind({});
SquareSizeLarge.args = {
  children: '>',
  appearance: ButtonAppearance.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.LARGE,
};
