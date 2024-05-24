import { memo, useMemo } from 'react';
import DoorIcon from '@icons/DoorIcon.svg';
import { AppLogo } from '@ui/AppLogo';
import { HStack } from '@ui/Stack';

import { getRouteAuth } from '@/shared/consts/router';
import { Icon } from '@/shared/ui/Icon';
import { Link } from '@/shared/ui/Link';
import { Typography } from '@/shared/ui/Typography';

import { useNavbarItems } from '../../model/selectors/useNavbarItems';
import { NavbarItem } from '../NavbarItem/NavbarItem';

import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
  const authData = false;
  const navbarItemList = useNavbarItems();

  const itemsList = useMemo(
    () => navbarItemList.map((item) => <NavbarItem item={item} key={item.text} />),
    [navbarItemList]
  );

  return (
    <HStack justify='between' align='center' gap='32' className={cls.navbar}>
      <AppLogo clickable className={cls.appLogo} />
      {authData ? (
        <>
          <HStack className={cls.links} gap='32'>
            {itemsList}
          </HStack>
          <Link to='/' className={cls.log_out_button}>
            <Icon width='18' height='18' Svg={DoorIcon} />
            <Typography variant='typography16_medium'>Выйти</Typography>
          </Link>
        </>
      ) : (
        <Link to={getRouteAuth()} className={cls.sign_in_button}>
          <Icon width='18' height='18' Svg={DoorIcon} />
          <Typography variant='typography16_medium'>Войти</Typography>
        </Link>
      )}
    </HStack>
  );
});
