export enum AppRoutes {
  FILMS = 'films',
  AUTH = 'auth',
  FILM_DETAILS = 'films_details',
  TICKETS = 'tickets',
  PROFILE = 'profile',
  PAYMENT = 'payment',
  // last
  NOT_FOUND = 'not_found'
}

export const getRouteFilms = () => '/films';
export const getRouteFilmDetails = (id: string) => `/films/${id}`;
export const getRouteAuth = () => `/auth`;
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteTickets = () => `/tickets`;
export const getRouteNotFound = () => `/not_found`;
export const getRoutePayment = () => `/payment`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteAuth()]: AppRoutes.AUTH,
  [getRouteFilms()]: AppRoutes.FILMS,
  [getRouteFilmDetails(':id')]: AppRoutes.FILM_DETAILS,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteTickets()]: AppRoutes.TICKETS
};
