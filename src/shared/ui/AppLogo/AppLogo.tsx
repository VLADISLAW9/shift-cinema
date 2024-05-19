import { memo } from 'react';
import LogoSvg from '@images/logo.svg';
import { classNames } from '@lib/classNames';

import { getRouteFilms } from '@/shared/consts/router';

import { Link } from '../Link';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  clickable?: boolean;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, clickable } = props;

  if (clickable) {
    return (
      <Link to={getRouteFilms()} className={classNames(cls.AppLogo, {}, [className])}>
        <LogoSvg />
      </Link>
    );
  }

  return (
    <div className={classNames(cls.AppLogo, {}, [className])}>
      <LogoSvg />
    </div>
  );
});
