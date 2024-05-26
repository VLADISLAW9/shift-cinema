import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';

import type { Film } from '../model/types/film';

interface CinemaTodayResponseSchema {
  success: boolean;
  reason: string;
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
