import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Grid } from '@/shared/ui/Stack';

import { useCinemaTodayQuery } from '../../api/useCinemaTodayQuery';
import { FilmListItem } from '../FilmListItem/FilmListItem';

interface FilmsListProps {
  className?: string;
}

export const FilmsList = memo((props: FilmsListProps) => {
  const { className } = props;
  const cinemaTodayQuery = useCinemaTodayQuery();

  const films = cinemaTodayQuery.data?.films;

  if (cinemaTodayQuery.isLoading || !films) {
    return <div className={classNames('', {}, [className])}>Loading...</div>;
  }

  return (
    <Grid columns={4} gap={50} className={classNames('', {}, [className])}>
      {films.map((film) => (
        <FilmListItem key={film.id} film={film} />
      ))}
    </Grid>
  );
});
