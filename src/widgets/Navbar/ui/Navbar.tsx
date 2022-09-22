
import {classNames} from "shared/lib";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import logo from 'shared/assets/images/ulbiLogo.png'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";

export const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggle = ()=>{
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (<header className={styles.Header}>
        <div className={classNames("container mx-auto", styles.headerContainer)}>
        <AppLink to={'/'} className={classNames('terminal-prompt ', styles.logo)}>
            <img src={logo}/>
            UlbyTV</AppLink>
            <div className={styles.headerSideMenu}>
                <AppLink to={'/'}>{t('home')}</AppLink>
                <AppLink to={'/about'}>{t('about')}</AppLink>
                <ThemeSwitcher/>
                <Button ghost onClick={toggle}><span className="material-symbols-outlined">
language
</span></Button>
            </div>
        </div>
    </header>)
}