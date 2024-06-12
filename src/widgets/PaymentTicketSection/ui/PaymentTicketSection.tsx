import { memo, useState } from 'react';

import { type Order, OrderModal } from '@/entities/Order';
import { CreditCardForm } from '@/features/CreditCardForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

import cls from './PaymentTicketSection.module.scss';

interface PaymentTicketSectionProps {
  className?: string;
}

export const PaymentTicketSection = memo((props: PaymentTicketSectionProps) => {
  const { className } = props;

  const [order, setOrder] = useState<Order | undefined>(undefined);

  const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false);

  return (
    <VStack gap='32' className={classNames(cls.PaymentTicketSection, {}, [className])}>
      <Typography tag='h1' variant='typography32_bold'>
        Введите данные карты
      </Typography>
      <CreditCardForm setIsOpenOrderWindow={setIsOpenOrderWindow} setOrder={setOrder} />
      <OrderModal
        isOpen={isOpenOrderWindow}
        onClose={() => setIsOpenOrderWindow(false)}
        order={order}
      />
    </VStack>
  );
});
