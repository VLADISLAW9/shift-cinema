import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { getRouteOrders, getRouteProfile } from '@/shared/consts/router';

import type { NavbarItem } from '../types/NavbarItem';

export const useNavbarItems = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const navbarItemsList: NavbarItem[] = [];

  if (isLoggedIn) {
    navbarItemsList.push(
      {
        path: getRouteProfile(),
        text: 'Профиль',
        authOnly: true
      },
      {
        path: getRouteOrders(),
        text: 'Билеты',
        authOnly: true
      }
    );
  }

  return navbarItemsList;
};
