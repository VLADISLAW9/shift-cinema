import { useMutation } from '@tanstack/react-query';

import type { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

interface SignInResponseSchema extends Response {
  user: User;
  token: string;
}

interface SignInDto {
  phone: string;
  code: number;
}

export const useSignInMutation = () =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ phone, code }: SignInDto) => {
      return $api.post<SignInResponseSchema>('/users/signin', { phone, code });
    }
  });
