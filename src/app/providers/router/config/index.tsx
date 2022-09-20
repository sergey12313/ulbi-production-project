import {AppRoutes, RoutePath} from "shared/config";
import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {path: RoutePath.main, element: <MainPage/>},
    [AppRoutes.ABOUT]: {path: RoutePath.about, element: <AboutPage/>}
}