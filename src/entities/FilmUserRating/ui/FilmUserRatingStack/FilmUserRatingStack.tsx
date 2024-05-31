import { memo } from 'react';
import StarIcon from '@icons/StarIcon.svg';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

import { convertFilmUserRating } from '../../model/lib/utils/convertFilmUserRating';
import type { FilmUserRating } from '../../model/types/FilmUserRating';

import cls from './FilmUserRating.module.scss';

interface FilmUserRatingStackProps {
  className?: string;
  rate: FilmUserRating;
  size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const FilmUserRatingStack = memo((props: FilmUserRatingStackProps) => {
  const { className, rate = { imdb: '0', kinopoisk: '0' }, size = 15 } = props;

  return (
    <VStack gap='4' className={classNames('', {}, [className])}>
      <HStack>
        {stars.map((starNumber) => {
          const commonProps = {
            Svg: StarIcon,
            width: size,
            height: size,
            key: starNumber,
            className: classNames(
              cls.star_icon,
              {
                [cls.star_icon_filled]:
                  starNumber <= convertFilmUserRating(rate.kinopoisk ?? rate.imdb)
              },
              []
            )
          };
          return <Icon {...commonProps} />;
        })}
      </HStack>
      <Typography className={cls.rate_source} tag='p' variant='typography14_regular'>
        {rate.kinopoisk ? 'Kinipoisk' : 'IMDB'} - {rate.kinopoisk ?? rate.imdb}
      </Typography>
    </VStack>
  );
});
