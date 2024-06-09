import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

import type { Film } from '../model/types/film';

interface CinemaTodayResponseSchema extends Response {
  films: Film[];
}

export const useCinemaTodayQuery = () => {
  return useQuery({
    queryKey: ['cinemaToday'],
    queryFn: async () => {
      const response = await $api.get<CinemaTodayResponseSchema>('/cinema/today');

      return response.data;
    }
  });
};
