import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN_ROUTE = 'main',
    ABOUT_ROUTE = 'about',
}

export const RoutePath :Record<AppRoutes, string> = {
    [AppRoutes.MAIN_ROUTE]: '/',
    [AppRoutes.ABOUT_ROUTE]: '/about',
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]