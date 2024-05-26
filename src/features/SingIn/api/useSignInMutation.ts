import { useMutation } from '@tanstack/react-query';

import type { User } from '@/entities/User';
import { $api } from '@/shared/api/api';

interface SignInResponseSchema {
  success: boolean;
  reason: string;
  user: User;
  token: string;
}

interface SignInRequestBody {
  phone: string;
  code: number;
}

export const useSignInMutation = () =>
  useMutation({
    mutationFn: ({ phone, code }: SignInRequestBody) => {
      return $api.post<SignInResponseSchema>('/users/signin', { phone, code });
    }
  });
