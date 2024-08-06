import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/ui';
import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Lorem Ipsum Lorem Ipsum',
  isOpen: true,
  onClose: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem Ipsum Lorem Ipsum',
  isOpen: true,
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
];
