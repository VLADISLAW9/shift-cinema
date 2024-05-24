import { useMutation } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';

interface SignInResponse {
  success: boolean;
  reason: string;
  user: {
    phone: string;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    city: string;
  };
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
