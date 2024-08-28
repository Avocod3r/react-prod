import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
LoginFormComponent.decorators = [StoreDecorator({
  login: {
    username: 'username',
    password: 'password',
    isLoading: false,
  },
})];

export const LoginFormError = Template.bind({});
LoginFormError.args = {};
LoginFormError.decorators = [StoreDecorator({
  login: {
    username: 'username',
    password: 'password',
    isLoading: false,
    error: 'ERROR',
  },
})];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {};
LoginFormLoading.decorators = [StoreDecorator({
  login: {
    username: 'username',
    password: 'password',
    isLoading: true,
  },
})];
