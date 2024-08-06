import { Story } from '@storybook/react';
import { Theme } from 'shared/ui';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <body className={theme}>
      <div className="app">
        <StoryComponent />
      </div>
    </body>
  </ThemeProvider>
);
