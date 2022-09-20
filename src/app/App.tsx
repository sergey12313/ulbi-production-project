import {FC} from "react";
import "./styles/index.scss"
import {useTheme} from "shared/theme-context";
import {classNames} from "shared/lib";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets";


export const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={classNames('app', theme)}>
        <Navbar/>
        <button onClick={toggleTheme}>toggleTheme</button>
        <AppRouter/>
    </div>
}