export enum AppRoutes {
  FILMS = 'films',
  AUTH = 'auth',
  FILM_DETAILS = 'films_details',
  ORDERS = 'orders',
  PROFILE = 'profile',
  PAYMENT = 'payment',
  // last
  NOT_FOUND = 'not_found'
}

export const getRouteFilms = () => '/films';
export const getRouteFilmDetails = (id: string) => `/films/${id}`;
export const getRouteAuth = () => `/auth`;
export const getRouteProfile = () => `/profile`;
export const getRouteOrders = () => `/orders`;
export const getRouteNotFound = () => `/not_found`;
export const getRoutePayment = () => `/payment`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteAuth()]: AppRoutes.AUTH,
  [getRouteFilms()]: AppRoutes.FILMS,
  [getRouteFilmDetails(':id')]: AppRoutes.FILM_DETAILS,
  [getRouteProfile()]: AppRoutes.PROFILE,
  [getRouteOrders()]: AppRoutes.ORDERS
};
