import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/ui';
import Input from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
  value: '12345',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  placeholder: 'Placeholder',
  value: '12345',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
