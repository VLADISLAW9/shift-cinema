import { memo } from 'react';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { SignInForm } from '@/features/SingIn/ui/SignInForm/SignInForm';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AuthPageProps {
  className?: string;
}

export const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props;
  return (
    <VStack gap='24' className={classNames('', {}, [className])}>
      <Typography tag='h2' variant='typography24_bold'>
        Авторизация
      </Typography>
      <SignInForm />
    </VStack>
  );
});
