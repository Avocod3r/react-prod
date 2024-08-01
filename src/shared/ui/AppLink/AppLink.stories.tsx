import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLinkAppearance, Theme } from 'shared/ui';
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'App Link',
  appearance: AppLinkAppearance.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'App Link',
  appearance: AppLinkAppearance.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: 'App Link',
  appearance: AppLinkAppearance.INVERTED,
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
