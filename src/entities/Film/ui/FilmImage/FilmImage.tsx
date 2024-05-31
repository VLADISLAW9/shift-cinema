import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';

import type { Film } from '../../model/types/film';

import cls from './FilmImage.module.scss';

interface FilmImageProps {
  className?: string;
  film: Film;
}

export const FilmImage = memo((props: FilmImageProps) => {
  const { className, film } = props;

  const filmImagePath = `/${film.img.split('/').slice(2).join('/')}`;

  return (
    <div className={classNames(cls.film_img_wrapper, {}, [className])}>
      <AppImage className={cls.film_img} src={filmImagePath} />
    </div>
  );
});
