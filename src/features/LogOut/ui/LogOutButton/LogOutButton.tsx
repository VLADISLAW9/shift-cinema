import { memo } from 'react';
import DoorIcon from '@icons/DoorIcon.svg';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Typography';

import cls from './LogOutButton.module.scss';

interface LogOutButtonProps {
  className?: string;
}

export const LogOutButton = memo((props: LogOutButtonProps) => {
  const { className } = props;

  const clearUser = useUserStore((state) => state.clearUser);

  const logOut = () => {
    clearUser();
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  };

  return (
    <Button
      onClick={logOut}
      variant='clear'
      className={classNames(cls.log_out_button, {}, [className])}
    >
      <Icon width='18' height='18' Svg={DoorIcon} />
      <Typography variant='typography16_medium'>Выйти</Typography>
    </Button>
  );
});
