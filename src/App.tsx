import {FC, Suspense} from "react";
import "./styles/index.scss"

import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";


export const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={`app ${theme}`}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toggleTheme}>toggleTheme</button>
        <Suspense fallback={<div>Loading...</div>}>
           <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
           </Routes>
        </Suspense>
    </div>
}