import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { FilmDetails } from '@/entities/Film/ui/FilmDetails/FilmDetails';
import { VStack } from '@/shared/ui/Stack';
import { BuyFilmTicketSection } from '@/widgets/BuyFilmTicketSection/ui/BuyFilmTicketSection';

const FilmDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <VStack gap='48'>
      <FilmDetails id={id} />
      <BuyFilmTicketSection pageId={id} />
    </VStack>
  );
};

export default memo(FilmDetailsPage);
