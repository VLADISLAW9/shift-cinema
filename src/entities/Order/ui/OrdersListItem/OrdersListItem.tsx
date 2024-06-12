import { memo, useRef } from 'react';
import { useHover } from '@siberiacancode/reactuse';
import { Tag } from '@ui/Tag';

import { classNames } from '@/shared/lib/classNames/classNames';
import { convertDate } from '@/shared/lib/utils/convertDate';
import { formatPlacesToString } from '@/shared/lib/utils/formatPlacesToString';
import { Button } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

import type { Order } from '../../model/types/order';

import cls from './OrdersListItem.module.scss';

interface OrdersListItemProps {
  className?: string;
  order: Order;
  onOpenCancelOrderModal: (orderId: string) => void;
}

export const OrdersListItem = memo((props: OrdersListItemProps) => {
  const { className, order, onOpenCancelOrderModal } = props;

  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef);

  return (
    <VStack
      ref={hoverRef}
      max
      gap='24'
      className={classNames(cls.orders_list_item, {}, [className])}
    >
      <HStack max justify='between'>
        <Typography className={cls.seance_date} variant='typography16_regular'>
          {convertDate(order.tickets[0].seance.date, 'D MMMM, dddd')}
        </Typography>
        <Typography className={cls.seance_time} variant='typography16_regular'>
          {order.tickets[0].seance.time}
        </Typography>
      </HStack>
      <VStack gap='16' max align='center'>
        <Typography variant='typography16_regular'>
          {formatPlacesToString(order.tickets)}
        </Typography>
      </VStack>
      <HStack max justify='between'>
        <Tag variant={order.status === 'PAYED' ? 'success' : 'error'}>
          {order.status === 'PAYED' ? 'Оплачен' : 'Отменен'}
        </Tag>
        <Typography className={cls.order_code} variant='typography16_regular'>
          код билета {order.orderNumber}
        </Typography>
      </HStack>
      {isHover && (
        <Button
          className={cls.cancel_order_button}
          variant='default_filled'
          onClick={() => onOpenCancelOrderModal(order.orderNumber.toString())}
        >
          <Typography variant='typography16_regular'>Вернуть билет</Typography>
        </Button>
      )}
    </VStack>
  );
});
