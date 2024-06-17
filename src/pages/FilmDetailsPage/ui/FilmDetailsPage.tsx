import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { FilmDetails } from '@/entities/Film/ui/FilmDetails/FilmDetails';

const FilmDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <div data-testid='FilmDetailsPage'>
      <FilmDetails pageId={id} />;
    </div> 
  ) 
};

export default memo(FilmDetailsPage);
