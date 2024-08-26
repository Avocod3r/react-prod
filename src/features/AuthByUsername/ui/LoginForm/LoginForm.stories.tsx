import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/ui';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormComponent = Template.bind({});
LoginFormComponent.args = {
};

export const LoginFormComponentDark = Template.bind({});
LoginFormComponentDark.args = {
};

LoginFormComponentDark.decorators = [ThemeDecorator(Theme.DARK)];
