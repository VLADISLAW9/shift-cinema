import { memo } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { HStack, VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { FilmUserRatingStack } from '@/entities/FilmUserRating';
import { BuyFilmTicketSection } from '@/widgets/BuyFilmTicketSection';

import { useGetFilmByIdQuery } from '../../api/useGetFilmByIdQuery';
import { FilmImage } from '../FilmImage/FilmImage';

import { FilmDetailSkeleton } from './FilmDetailSkeleton';

interface FilmDetailsProps {
  className?: string;
  pageId: string;
}

export const FilmDetails = memo((props: FilmDetailsProps) => {
  const { className, pageId } = props;

  const filmQuery = useGetFilmByIdQuery(pageId);

  const film = filmQuery.data?.film;

  if (filmQuery.isLoading) {
    return <FilmDetailSkeleton />;
  }

  if (!film) {
    return <div>Такого фильма нет :(</div>;
  }

  return (
    <VStack gap='48' className={classNames('', {}, [className])}>
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
      <BuyFilmTicketSection pageId={film.id} />
    </VStack>
  );
});
