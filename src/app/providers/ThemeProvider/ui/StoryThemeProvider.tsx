import {
  FC, useEffect, useMemo,
} from 'react';
import { Theme, ThemeContext } from 'shared/ui';

interface StoryThemeProviderProps {
    theme?: Theme
}

const StoryThemeProvider: FC<StoryThemeProviderProps> = ({ children, theme }) => {
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme: () => {},
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default StoryThemeProvider;
