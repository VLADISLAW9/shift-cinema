import { getRouteProfile, getRouteTickets } from '@/shared/consts/router';

import type { NavbarItem } from '../types/NavbarItem';

export const useNavbarItems = () => {
  const userData = false;
  const navbarItemsList: NavbarItem[] = [];

  if (userData) {
    navbarItemsList.push(
      {
        path: getRouteProfile(':id'),
        text: 'Профиль',
        authOnly: true
      },
      {
        path: getRouteTickets(),
        text: 'Билеты',
        authOnly: true
      }
    );
  }

  return navbarItemsList;
};
