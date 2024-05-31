import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { getRouteProfile, getRouteTickets } from '@/shared/consts/router';

import type { NavbarItem } from '../types/NavbarItem';

export const useNavbarItems = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const navbarItemsList: NavbarItem[] = [];

  if (isLoggedIn) {
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
