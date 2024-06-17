import { memo } from 'react';

import { Grid } from '@/shared/ui/Stack';

import { useCinemaTodayQuery } from '../../api/useCinemaTodayQuery';
import { FilmListItem } from '../FilmListItem/FilmListItem';
import { FilmListItemSkeleton } from '../FilmListItem/FilmListItemSkeleton';

interface FilmsListProps {
  className?: string;
}

export const FilmsList = memo((props: FilmsListProps) => {
  const { className } = props;
  const cinemaTodayQuery = useCinemaTodayQuery();

  const films = cinemaTodayQuery.data?.films;

  if (cinemaTodayQuery.isLoading || !films) {
    return (
      <Grid data-testid='loading' columns={4} gap={50} className={className}>
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
        <FilmListItemSkeleton />
      </Grid>
    );
  }

  return (
    <Grid columns={4} gap={50} className={className}>
      {films.map((film) => (
        <FilmListItem key={film.id} film={film} />
      ))}
    </Grid>
  );
});
