import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN_ROUTE = 'main',
    ABOUT_ROUTE = 'about',
    NOT_FOUND_ROUTE = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_ROUTE]: '/',
  [AppRoutes.ABOUT_ROUTE]: '/about',
  [AppRoutes.NOT_FOUND_ROUTE]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },

  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,

  },
];
