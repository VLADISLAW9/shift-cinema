import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

import type { Schedule } from '../model/types/schedule';

export interface FilmScheduleResponseSchema extends Response {
  schedules: Schedule[];
}

export const useGetFilmScheduleByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['getFilmScheduleByIdQuery', id],
    queryFn: async () => {
      const response = await $api.get<FilmScheduleResponseSchema>(`/cinema/film/${id}/schedule`);

      return response.data;
    }
  });
};
