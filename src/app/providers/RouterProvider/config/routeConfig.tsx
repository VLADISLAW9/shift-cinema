import { AuthPage } from '@/pages/AuthPage';
import { FilmDetailsPage } from '@/pages/FilmDetailsPage';
import { FilmsPage } from '@/pages/FilmsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { OrdersPage } from '@/pages/OrdersPage';
import PaymentPage from '@/pages/PaymentPage/ui/PaymentPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
  AppRoutes,
  getRouteAuth,
  getRouteFilmDetails,
  getRouteFilms,
  getRouteNotFound,
  getRouteOrders,
  getRoutePayment,
  getRouteProfile
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
    element: <PaymentPage />,
    authOnly: true
  },
  [AppRoutes.ORDERS]: {
    path: getRouteOrders(),
    element: <OrdersPage />,
    authOnly: true
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
};
