import React, {FC} from 'react';
import Sun from "shared/assets/icons/sun.svg";
import Moon from "shared/assets/icons/moon.svg";
import styles from "./ThemeSwitcher.module.scss"
import {useTheme} from "shared/theme-context";
import {Theme} from "shared/theme-context/ThemeContext";
import {IconButton} from "shared/ui/Button";
interface ThemeSwitcherProps {

}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme, toggleTheme} = useTheme()
    return <IconButton ghost onClick={toggleTheme} > {theme === Theme.DARK ? 'light_mode': 'dark_mode'} </IconButton>
};