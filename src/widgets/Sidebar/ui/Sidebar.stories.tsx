import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarStory = Template.bind({});
SidebarStory.args = {};
