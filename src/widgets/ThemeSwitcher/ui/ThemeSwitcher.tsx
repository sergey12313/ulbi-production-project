import { FC } from 'react';
import { useTheme } from 'shared/theme-context';
import { Theme } from 'shared/theme-context/ThemeContext';
import { IconButton } from 'shared/ui/Button';
interface ThemeSwitcherProps {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <IconButton
      ghost
      onClick={toggleTheme}
      icon={theme === Theme.DARK ? 'light_mode' : 'dark_mode'}
    />
  );
};
