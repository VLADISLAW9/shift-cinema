import { AuthPage } from '@/pages/AuthPage';
import { FilmDetailsPage } from '@/pages/FilmDetailsPage';
import { FilmsPage } from '@/pages/FilmsPage';
import {
  AppRoutes,
  getRouteAuth,
  getRouteFilmDetails,
  getRouteFilms,
  getRouteNotFound,
  getRoutePayment,
  getRouteProfile,
  getRouteTickets
} from '@/shared/consts/router';
import type { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />
  },
  [AppRoutes.FILMS]: {
    path: getRouteFilms(),
    element: <FilmsPage />
  },
  [AppRoutes.FILM_DETAILS]: {
    path: getRouteFilmDetails(':id'),
    element: <FilmDetailsPage />
  },
  [AppRoutes.PAYMENT]: {
    path: getRoutePayment(),
    element: <div />,
    authOnly: true
  },
  [AppRoutes.TICKETS]: {
    path: getRouteTickets(),
    element: <div />,
    authOnly: true
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <div />,
    authOnly: true
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <div />
  }
};
