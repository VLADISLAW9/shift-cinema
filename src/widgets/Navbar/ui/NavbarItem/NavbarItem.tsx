import { memo } from 'react';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import type { NavbarItem as NavbarItemType } from '../../model/types/NavbarItem';

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
  const isAuth = true;

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <Link to={item.path}>
      <Typography variant='typography16_medium'>{item.text}</Typography>
    </Link>
  );
});
