import { useMutation } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

interface CreateOtpCodeResponseSchema extends Response {
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
