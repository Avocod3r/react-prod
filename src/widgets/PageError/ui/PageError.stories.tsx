import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageError from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorStory = Template.bind({});
PageErrorStory.args = {};
