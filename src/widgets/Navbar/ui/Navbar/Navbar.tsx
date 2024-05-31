import { memo, useMemo } from 'react';
import { AppLogo } from '@ui/AppLogo';
import { HStack } from '@ui/Stack';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { LogOutButton } from '@/features/LogOut';
import { SignInButton } from '@/features/SingIn';

import { useNavbarItems } from '../../model/selectors/useNavbarItems';
import { NavbarItem } from '../NavbarItem/NavbarItem';

import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const navbarItemList = useNavbarItems();

  const itemsList = useMemo(
    () => navbarItemList.map((item) => <NavbarItem item={item} key={item.text} />),
    [navbarItemList]
  );

  return (
    <HStack justify='between' align='center' gap='32' className={cls.navbar}>
      <AppLogo clickable className={cls.appLogo} />
      {isLoggedIn ? (
        <>
          <HStack className={cls.links} gap='32'>
            {itemsList}
          </HStack>
          <LogOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </HStack>
  );
});
