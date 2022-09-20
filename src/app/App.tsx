import {FC, Suspense} from "react";
import "./styles/index.scss"

import {Link, Route, Routes} from "react-router-dom";


import {useTheme} from "shared/theme-context";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib";


export const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={classNames('app', theme)}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toggleTheme}>toggleTheme</button>
        <Suspense fallback={<div>Loading...</div>}>
           <Routes>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
           </Routes>
        </Suspense>
    </div>
}