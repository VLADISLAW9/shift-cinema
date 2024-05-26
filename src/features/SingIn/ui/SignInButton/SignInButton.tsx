import { memo } from 'react';
import DoorIcon from '@icons/DoorIcon.svg';

import { getRouteAuth } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Link } from '@/shared/ui/Link';
import { Typography } from '@/shared/ui/Typography';

import cls from './SignInButton.module.scss';

interface SignInButtonProps {
  className?: string;
}

export const SignInButton = memo((props: SignInButtonProps) => {
  const { className } = props;
  return (
    <Link to={getRouteAuth()} className={classNames(cls.sign_in_button, {}, [className])}>
      <Icon width='18' height='18' Svg={DoorIcon} />
      <Typography variant='typography16_medium'>Войти</Typography>
    </Link>
  );
});
