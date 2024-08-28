import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLinkAppearance } from 'shared/ui';
import AppLink from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },

} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'App Link',
  appearance: AppLinkAppearance.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'App Link',
  appearance: AppLinkAppearance.SECONDARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'App Link',
  appearance: AppLinkAppearance.INVERTED,
};
