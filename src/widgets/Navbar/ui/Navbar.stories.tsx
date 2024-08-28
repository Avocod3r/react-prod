import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarStory = Template.bind({});
NavbarStory.args = {};
NavbarStory.decorators = [StoreDecorator({})];

export const AuthNavbarStory = Template.bind({});
AuthNavbarStory.args = {};
AuthNavbarStory.decorators = [StoreDecorator({
  user: {
    authData: {
      username: 'admin',
      id: '1',
    },
  },
})];
