
import {classNames} from "shared/lib";
import {AppLink} from "shared/ui";


export const Navbar = () => {
    return (<header>
        <AppLink to={'/'} className={classNames('terminal-prompt')}>Home</AppLink>
        <AppLink to={'/'}>Home</AppLink>
    <AppLink to={'/about'}>About</AppLink>
    </header>)
}