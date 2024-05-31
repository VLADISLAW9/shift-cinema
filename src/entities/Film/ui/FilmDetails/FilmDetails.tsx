import { memo } from 'react';

import { FilmUserRatingStack } from '@/entities/FilmUserRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

import { useGetFilmByIdQuery } from '../../api/useGetFilmByIdQuery';
import { FilmImage } from '../FilmImage/FilmImage';

interface FilmDetailsProps {
  className?: string;
  id: string;
}

export const FilmDetails = memo((props: FilmDetailsProps) => {
  const { className, id } = props;

  const filmQuery = useGetFilmByIdQuery(id);

  const film = filmQuery.data?.film;

  if (filmQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!film) {
    return <div>Not found</div>;
  }

  return (
    <VStack className={classNames('', {}, [className])}>
      <HStack align='start' gap='32'>
        <FilmImage film={film} />
        <VStack gap='16'>
          <Typography tag='h1' variant='typography32_bold'>
            {film.name}
          </Typography>
          <FilmUserRatingStack size={25} rate={film.userRatings} />
          <Typography tag='p' variant='typography16_regular'>
            {film.description}
          </Typography>
        </VStack>
      </HStack>
    </VStack>
  );
});
