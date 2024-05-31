import { useMutation } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';

interface CreateOtpCodeResponseSchema {
  success: boolean;
  reason: string;
  retryDelay: number;
}

interface CreateOtpCodeRequestBody {
  phone: string;
}

export const useCreateOtpCodeMutation = () =>
  useMutation({
    mutationFn: ({ phone }: CreateOtpCodeRequestBody) =>
      $api.post<CreateOtpCodeResponseSchema>('/auth/otp', { phone })
  });
