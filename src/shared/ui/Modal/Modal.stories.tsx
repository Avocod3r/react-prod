import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});
ModalStory.args = {
  children: 'Lorem Ipsum Lorem Ipsum',
  isOpen: true,
  onClose: () => {},
};
