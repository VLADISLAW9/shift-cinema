import { memo } from 'react';

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
  return (
    <VStack gap='32' className={classNames(cls.PaymentTicketSection, {}, [className])}>
      <Typography tag='h1' variant='typography32_bold'>
        Введите данные карты
      </Typography>
      <CreditCardForm />
    </VStack>
  );
});
