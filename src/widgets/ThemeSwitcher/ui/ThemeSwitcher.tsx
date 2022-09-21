import React, {FC} from 'react';
import Sun from "shared/assets/icons/sun.svg";
import Moon from "shared/assets/icons/moon.svg";
import styles from "./ThemeSwitcher.module.scss"
import {useTheme} from "shared/theme-context";
import {Theme} from "shared/theme-context/ThemeContext";
interface ThemeSwitcherProps {

}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme, toggleTheme} = useTheme()
    return <button onClick={toggleTheme} className={styles.ThemeSwitcher}> {theme === Theme.DARK ? (<Sun/>):( <Moon/>)} </button>
};