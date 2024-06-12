import { memo, useState } from 'react';

import { OrdersList } from '@/entities/Order';
import { CancelOrderModal } from '@/features/CancelOrder';

export const OrdersSection = memo(() => {
  const [isOpenCancelOrderModal, setIsOpenCancelOrderModal] = useState(false);
  const [orderId, setOrderId] = useState<string | undefined>(undefined);

  const onOpenCancelOrderModal = (orderId: string) => {
    setIsOpenCancelOrderModal(true);
    setOrderId(orderId);
  };

  return (
    <div>
      <OrdersList onOpenCancelOrderModal={onOpenCancelOrderModal} />
      {orderId && (
        <CancelOrderModal
          orderId={orderId}
          isOpen={isOpenCancelOrderModal}
          onClose={() => setIsOpenCancelOrderModal(false)}
        />
      )}
    </div>
  );
});
