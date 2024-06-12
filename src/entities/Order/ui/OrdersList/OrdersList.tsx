import { memo } from 'react';

import { VStack } from '@/shared/ui/Stack';

import { useGetOrdersQuery } from '../../api/useGetOrdersQuery';
import { OrdersListItem } from '../OrdersListItem/OrdersListItem';

interface OrdersListProps {
  className?: string;
  onOpenCancelOrderModal: (orderId: string) => void;
}

export const OrdersList = memo((props: OrdersListProps) => {
  const { className, onOpenCancelOrderModal } = props;
  const ordersQuery = useGetOrdersQuery();

  if (ordersQuery.isLoading || !ordersQuery.data) {
    return (
      <VStack gap='24' className={className}>
        Загрузка...
      </VStack>
    );
  }

  return (
    <VStack gap='24' className={className}>
      {ordersQuery.data.orders.map((order) => (
        <OrdersListItem
          onOpenCancelOrderModal={onOpenCancelOrderModal}
          key={order.orderNumber}
          order={order}
        />
      ))}
    </VStack>
  );
});
