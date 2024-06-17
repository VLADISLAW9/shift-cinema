import { memo } from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';
import { PaymentTicketSection } from '@/widgets/PaymentTicketSection';

const PaymentPage = () => {
  return ( 
    <VStack date-testid='PaymentPage' gap='32'>
      <Typography tag='h1' variant='typography32_bold'>
        Введите данные карты
      </Typography>
      <PaymentTicketSection />
    </VStack>
  );
};

export default memo(PaymentPage);
