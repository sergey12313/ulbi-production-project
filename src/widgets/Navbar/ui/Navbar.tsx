
import {classNames} from "shared/lib";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import logo from 'shared/assets/images/ulbiLogo.png'

export const Navbar = () => {
    console.log(styles.headerContainer)
    return (<header className={styles.Header}>
        <div className={classNames("container mx-auto", styles.headerContainer)}>
        <AppLink to={'/'} className={classNames('terminal-prompt ', styles.logo)}>
            <img src={logo}/>
            UlbyTV</AppLink>
            <div className={styles.headerSideMenu}>
                <AppLink to={'/'}>Home</AppLink>
                <AppLink to={'/about'}>About</AppLink>
                <ThemeSwitcher/>
            </div>
        </div>
    </header>)
}