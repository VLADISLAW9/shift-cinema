import { memo } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { Button } from '@ui/Button/Button';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { FilmUserRatingStack } from '@/entities/FilmUserRating';
import { getRouteFilmDetails } from '@/shared/consts/router';
import { Link } from '@/shared/ui/Link';

import type { Film } from '../../model/types/film';
import { FilmImage } from '../FilmImage/FilmImage';

import cls from './FilmListItem.module.scss';

interface FilmListItemProps {
  className?: string;
  film: Film;
}

export const FilmListItem = memo((props: FilmListItemProps) => {
  const { className, film } = props;

  return (
    <VStack data-testid='film_list_item' gap='16' className={classNames(cls.FilmListItem, {}, [className])}>
      <FilmImage film={film} />
      <VStack gap='4'>
        <Typography tag='h3' variant='typography20_semibold'>
          {film.name}
        </Typography>
        <Typography className={cls.film_description} tag='p' variant='typography14_regular'>
          {film.description}
        </Typography>
      </VStack>
      <FilmUserRatingStack size={20} rate={film.userRatings} />
      <Link className={cls.more_info_button_wrapper} to={getRouteFilmDetails(film.id)}>
        <Button size='l' className={cls.more_info_button}>
          <Typography tag='h3' variant='typography16_semibold'>
            Подробнее
          </Typography>
        </Button>
      </Link>
    </VStack>
  );
});
