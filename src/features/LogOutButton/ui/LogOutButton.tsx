import { memo } from 'react';
import LogOutIcon from '@icons/AuthIcon.svg';
import { Icon } from '@ui/Icon';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './LogOutButton.module.scss';

interface LogOutButtonProps {
  className?: string;
}

export const LogOutButton = memo((props: LogOutButtonProps) => {
  const { className } = props;
  return (
    <Link to='/' className={classNames(cls.log_out_button, {}, [className])}>
      <Icon width='18' height='18' Svg={LogOutIcon} />
      <Typography variant='typography16_medium'>Выйти</Typography>
    </Link>
  );
});
