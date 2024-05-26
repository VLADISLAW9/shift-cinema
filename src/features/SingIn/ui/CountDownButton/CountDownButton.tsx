import { memo, useEffect } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { useCountDown } from '@lib/hooks/useCountDown';
import { Button } from '@ui/Button/Button';

import { Typography } from '@/shared/ui/Typography';

import cls from './CountDownButton.module.scss';

interface CountDownButtonProps {
  className?: string;
  onRetrySendOtpCode: () => void;
  loading?: boolean;
  endTime: number;
}

export const CountDownButton = memo((props: CountDownButtonProps) => {
  const { className, onRetrySendOtpCode, endTime, loading } = props;
  const [seconds, { startCountDown }] = useCountDown({
    countStart: Math.floor((endTime - Date.now()) / 1000),
    enabled: false,
    interval: 1000
  });

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  if (seconds)
    return (
      <Typography tag='p' variant='typography14_regular' className={cls.count_down_seconds_text}>
        Запросить код повторно можно через {seconds} секунд
      </Typography>
    );

  return (
    <Button
      variant='clear'
      onClick={onRetrySendOtpCode}
      className={classNames(cls.count_down_button, {}, [className])}
    >
      <Typography variant='typography16_medium'>
        {loading ? 'Отправка...' : 'Отправить код еще раз'}
      </Typography>
    </Button>
  );
});
