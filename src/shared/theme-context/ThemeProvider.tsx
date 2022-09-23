import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  const values = Object.values(Theme) as Array<string>;

  if (theme && values.includes(theme)) {
    return theme as Theme;
  } else return Theme.DARK;
};
const saveThemeToLocalStorage = (theme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  useEffect(() => {
    saveThemeToLocalStorage(theme);
  }, [theme]);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
