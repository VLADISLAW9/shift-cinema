import { memo } from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';
import { OrdersSection } from '@/widgets/OrdersSection';

import cls from './OrdersPage.module.scss';

const OrdersPage = () => {
  return (
    <VStack gap='32'>
      <Typography className={cls.header} tag='h1' variant='typography32_bold'>
        Билеты
      </Typography>
      <OrdersSection />
    </VStack>
  );
};

export default memo(OrdersPage);
