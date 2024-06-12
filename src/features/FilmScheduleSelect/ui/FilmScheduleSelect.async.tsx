import type { FC } from 'react';
import { lazy } from 'react';

import type { FilmScheduleSelectProps } from './FilmScheduleSelect';

export const FilmScheduleSelectAsync = lazy<FC<FilmScheduleSelectProps>>(
  () => import('./FilmScheduleSelect')
);
