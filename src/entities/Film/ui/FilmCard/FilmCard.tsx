import { memo } from 'react';
import { AppImage } from '@ui/AppImage/AppImage';

import { classNames } from '@/shared/lib/classNames/classNames';

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
    <div className={classNames(cls.FilmCard, {}, [className])}>
      <AppImage className={cls.film_img} src={filmImagePath} />
    </div>
  );
});
