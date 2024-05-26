import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';

import type { User } from '../model/types/user';

interface InitAuthDataResponseSchema {
  success: boolean;
  reason: string;
  user: User;
}

export const useInitAuthDataQuery = () =>
  useQuery({
    queryKey: ['initAuthData'],
    queryFn: async () => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (!token) {
        throw new Error('token not found');
      }

      const response = await $api.get<InitAuthDataResponseSchema>('/users/session');

      return {
        user: response.data.user,
        status: response.data.success,
        reason: response.data.reason
      };
    }
  });
