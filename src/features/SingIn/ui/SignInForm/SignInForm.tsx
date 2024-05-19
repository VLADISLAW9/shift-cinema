import { memo } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { Input } from '@ui/Input';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { Button } from '@/shared/ui/Button/Button';

import cls from './SignInForm.module.scss';

interface SignInFormProps {
  className?: string;
}

export const SignInForm = memo((props: SignInFormProps) => {
  const { className } = props;
  return (
    <VStack gap='32' className={classNames('', {}, [className])}>
      <Typography tag='p' variant='typography16_regular'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>
      <Input className={cls.phone_number_input} placeholder='Телефон' />
      <Button className={cls.continue_button} variant='primary_filled'>
        <Typography variant='typography16_semibold'>Продолжить</Typography>
      </Button>
    </VStack>
  );
});
