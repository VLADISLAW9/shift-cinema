import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { useCinemaTodayQuery } from '../../api/useCinemaTodayQuery';
import { FilmListItem } from '../FilmListItem/FilmListItem';

import cls from './FilmsList.module.scss';

interface FilmsListProps {
  className?: string;
}

export const FilmsList = memo((props: FilmsListProps) => {
  const { className } = props;
  const cinemaTodayQuery = useCinemaTodayQuery();

  const films = cinemaTodayQuery.data?.films;

  if (cinemaTodayQuery.isLoading || !films) {
    return <div className={classNames(cls.film_list, {}, [className])}>Loading...</div>;
  }

  return (
    <div className={classNames(cls.film_list, {}, [className])}>
      {films.map((film) => (
        <FilmListItem key={film.id} film={film} />
      ))}
    </div>
  );
});
