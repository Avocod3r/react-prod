import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/ui';
import Button, { ButtonAppearance } from './Button';

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

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  appearance: ButtonAppearance.OUTLINE,
};
OutlineDark.decorators = [
  ThemeDecorator(Theme.DARK),
];
