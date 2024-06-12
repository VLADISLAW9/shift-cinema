import { memo } from 'react';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { SignInForm } from '@/features/SingIn/ui/SignInForm/SignInForm';

const AuthPage = () => (
  <VStack gap='32'>
    <Typography tag='h2' variant='typography24_bold'>
      Авторизация
    </Typography>
    <SignInForm />
  </VStack>
);
export default memo(AuthPage);
