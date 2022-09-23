import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((theme) => (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };
  return { setTheme, toggleTheme, theme };
};
