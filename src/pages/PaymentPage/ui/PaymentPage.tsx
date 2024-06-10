import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { PaymentTicketSection } from '@/widgets/PaymentTicketSection';

interface PaymentPageProps {
  className?: string;
}

const PaymentPage = memo((props: PaymentPageProps) => {
  const { className } = props;
  return (
    <div className={classNames('', {}, [className])}>
      <PaymentTicketSection />
    </div>
  );
});

export default PaymentPage;
