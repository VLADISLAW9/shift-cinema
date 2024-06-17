import { memo } from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';
import { OrdersSection } from '@/widgets/OrdersSection';

const OrdersPage = () => (
  <VStack date-testid='OrdersPage' gap='32'>
    <Typography tag='h1' variant='typography32_bold'>
      Билеты
    </Typography>
    <OrdersSection />
  </VStack>
);
export default memo(OrdersPage);
