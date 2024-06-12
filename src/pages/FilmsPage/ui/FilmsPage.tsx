import { memo } from 'react';
import { Typography } from '@ui/Typography';

import { FilmsList } from '@/entities/Film';
import { VStack } from '@/shared/ui/Stack';

const FilmsPage = () => (
  <VStack gap='32'>
    <Typography tag='h1' variant='typography32_bold'>
      Афиша
    </Typography>
    <FilmsList />
  </VStack>
);

export default memo(FilmsPage);
