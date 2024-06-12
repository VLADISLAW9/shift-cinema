import { useMutation } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

type CancelOrderResponseSchema = Response;

interface CancelOrderDto {
  orderId: string;
}

export const useCancelOrderMutation = () =>
  useMutation({
    mutationKey: ['cancelOrder'],
    mutationFn: ({ orderId }: CancelOrderDto) => {
      return $api.put<CancelOrderResponseSchema>('/order/cancel', { orderId });
    }
  });
