import { memo, useMemo } from 'react';
import { AppLogo } from '@ui/AppLogo';
import { HStack } from '@ui/Stack';

import { useNavbarItems } from '../../model/selectors/useNavbarItems';
import { NavbarItem } from '../NavbarItem/NavbarItem';

import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
  const navbarItemList = useNavbarItems();

  const itemsList = useMemo(
    () => navbarItemList.map((item) => <NavbarItem item={item} key={item.text} />),
    [navbarItemList]
  );

  return (
    <HStack gap='32' className={cls.navbar}>
      <AppLogo className={cls.appLogo} />
      <HStack gap='32'>{itemsList}</HStack>
    </HStack>
  );
});
