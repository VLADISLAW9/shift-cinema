import { memo } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { AppImage } from '@ui/AppImage/AppImage';
import { Button } from '@ui/Button/Button';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { FilmUserRatingStack } from '@/entities/FilmUserRating';

import type { Film } from '../../model/types/film';

import cls from './FilmCard.module.scss';

interface FilmCardProps {
  className?: string;
  film: Film;
}

export const FilmCard = memo((props: FilmCardProps) => {
  const { className, film } = props;

  const filmImagePath = `${film.img.split('/').slice(2).join('/')}`;

  return (
    <VStack gap='16' className={classNames(cls.FilmCard, {}, [className])}>
      <AppImage className={cls.film_img} src={filmImagePath} />
      <VStack gap='4'>
        <Typography tag='h3' variant='typography20_semibold'>
          {film.name}
        </Typography>
        <Typography className={cls.film_description} tag='p' variant='typography14_regular'>
          {film.description}
        </Typography>
      </VStack>
      <FilmUserRatingStack size={20} rate={film.userRatings} />
      <Button size='l' className={cls.more_info_button}>
        <Typography tag='h3' variant='typography16_semibold'>
          Подробнее
        </Typography>
      </Button>
    </VStack>
  );
});
