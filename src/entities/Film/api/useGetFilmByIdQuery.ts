import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';

import type { Film } from '../model/types/film';

// TODO: Вынести success и reason в абстракцию
interface FilmByIdResponseSchema {
  success: boolean;
  reason: string;
  film: Film;
}

export const useGetFilmByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['getFilmById', id],
    queryFn: async () => {
      const response = await $api.get<FilmByIdResponseSchema>(`/cinema/film/${id}`);

      return response.data;
    }
  });
};
