import { useMutation } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';

interface CreateOtpCodeResponse {
  success: boolean;
  reason: string;
  retryDelay: number;
}

interface CreateOtpCodeRequestBody {
  phone: string;
}

export const useCreateOtpCode = () =>
  useMutation({
    mutationFn: ({ phone }: CreateOtpCodeRequestBody) =>
      $api.post<CreateOtpCodeResponse>('/auth/otp', { phone })
  });
