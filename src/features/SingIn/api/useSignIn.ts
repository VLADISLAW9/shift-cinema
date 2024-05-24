import { useMutation } from '@tanstack/react-query';

import type { User } from '@/entities/User';
import { $api } from '@/shared/api/api';

interface SignInResponse {
  success: boolean;
  reason: string;
  user: User;
  token: string;
}

interface SignInRequestBody {
  phone: string;
  code: number;
}

export const useSignIn = () =>
  useMutation({
    mutationFn: ({ phone, code }: SignInRequestBody) => {
      return $api.post<SignInResponse>('/users/signin', { phone, code });
    }
  });
