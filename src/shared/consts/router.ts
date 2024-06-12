export enum AppRoutes {
  FILMS = 'films',
  AUTH = 'auth',
  FILM_DETAILS = 'films_details',
  ORDERS = 'orders',
  PROFILE = 'profile',
  PAYMENT = 'payment',
  NOT_FOUND = 'not_found'
}

export const getRouteFilms = () => '/';
export const getRouteFilmDetails = (id: string) => `/films/${id}`;
export const getRouteAuth = () => `/auth`;
export const getRouteProfile = () => `/profile`;
export const getRouteOrders = () => `/orders`;
export const getRouteNotFound = () => `/not_found`;
export const getRoutePayment = () => `/payment`;
