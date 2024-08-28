import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography, { TypographyAppearance } from './Typography';

export default {
  title: 'shared/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },

} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Description Description Description Description Description Description Description',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Only Title Title title',
};

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  text: 'Description Description Description Description Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description Description Description Description Description Description Description',
  appearance: TypographyAppearance.ERROR,
};
