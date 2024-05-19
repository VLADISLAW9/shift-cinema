import { memo } from 'react';
import SignInIcon from '@icons/AuthIcon.svg';
import { Icon } from '@ui/Icon';
import { Link } from '@ui/Link';
import { Typography } from '@ui/Typography';

import { getRouteAuth } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SignInButton.module.scss';

interface SignInButtonProps {
  className?: string;
}

export const SignInButton = memo((props: SignInButtonProps) => {
  const { className } = props;
  return (
    <Link to={getRouteAuth()} className={classNames(cls.sign_in_button, {}, [className])}>
      <Icon width='18' height='18' Svg={SignInIcon} />
      <Typography variant='typography16_medium'>Войти</Typography>
    </Link>
  );
});
