import { memo } from 'react';

import { UpdateProfileForm } from '@/features/UpdateProfile/ui/UpdateProfileForm/UpdateProfileForm';
import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

const ProfilePage = () => {
  return (
    <VStack date-testid='ProfilePage' gap='32'>
      <Typography tag='h1' variant='typography32_bold'>
        Профиль
      </Typography>
      <UpdateProfileForm />
    </VStack>
  );
};

export default memo(ProfilePage);
