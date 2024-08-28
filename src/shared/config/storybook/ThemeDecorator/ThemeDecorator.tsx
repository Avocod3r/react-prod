import { Story, StoryContext } from '@storybook/react';
import { StoryThemeProvider } from 'app/providers/ThemeProvider';
import ThemeBlock from 'shared/config/storybook/ThemeDecorator/ThemeBlock';

export const ThemeDecorator = (story:() => Story, { globals: { theme } }: StoryContext) => (
  <StoryThemeProvider theme={theme}>
    <ThemeBlock fill>
      {story()}
    </ThemeBlock>
  </StoryThemeProvider>
);
