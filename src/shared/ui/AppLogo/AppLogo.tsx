import { memo } from 'react';
import LogoSvg from '@images/logo.svg';
import { classNames } from '@lib/classNames';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.AppLogo, {}, [className])}>
      <LogoSvg />
    </div>
  );
});
