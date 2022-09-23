import React, { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
