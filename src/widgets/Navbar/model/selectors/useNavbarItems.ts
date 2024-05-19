import type { NavbarItem } from '../types/NavbarItem';

export const useNavbarItems = () => {
  const userData = true;
  const navbarItemsList: NavbarItem[] = [];

  if (userData) {
    navbarItemsList.push(
      {
        path: '/page',
        text: 'Профиль',
        authOnly: true
      },
      {
        path: '/home',
        text: 'Билеты',
        authOnly: true
      }
    );
  }

  return navbarItemsList;
};
