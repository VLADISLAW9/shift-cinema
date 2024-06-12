import { memo, useState } from 'react';

import { type Order, OrderModal } from '@/entities/Order';
import { CreditCardForm } from '@/features/CreditCardForm';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PaymentTicketSection.module.scss';

interface PaymentTicketSectionProps {
  className?: string;
}

export const PaymentTicketSection = memo((props: PaymentTicketSectionProps) => {
  const { className } = props;

  const [order, setOrder] = useState<Order | undefined>(undefined);

  const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false);

  return (
    <div className={classNames(cls.PaymentTicketSection, {}, [className])}>
      <CreditCardForm setIsOpenOrderWindow={setIsOpenOrderWindow} setOrder={setOrder} />
      <OrderModal
        isOpen={isOpenOrderWindow}
        onClose={() => setIsOpenOrderWindow(false)}
        order={order}
      />
    </div>
  );
});
