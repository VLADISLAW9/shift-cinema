import { useQuery } from '@tanstack/react-query';

import { $api } from '@/shared/api/api';
import type { Response } from '@/shared/types/response';

import type { Order } from '../model/types/order';

interface OrderResponseSchema extends Response {
  orders: Order[];
}

export const useGetOrdersQuery = () => {
  return useQuery({
    queryKey: ['getOrders'],
    queryFn: async () => {
      const response = await $api.get<OrderResponseSchema>('/cinema/orders');

      return response.data;
    }
  });
};
