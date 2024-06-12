import { memo, useCallback, useState } from 'react';
import QuestionsIcon from '@images/Question.svg';

import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon';
import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography';

import { useCancelOrderMutation } from '../../api/useCancelOrderMutation';

import cls from './CancelOrderModal.module.scss';

interface CancelOrderModalProps {
  className?: string;
  isOpen: boolean;
  orderId: string;
  onClose: () => void;
}

export const CancelOrderModal = memo((props: CancelOrderModalProps) => {
  const { className, isOpen, onClose, orderId } = props;

  const cancelOrderMutation = useCancelOrderMutation();
  const [cancelOrderError, setCancelOrderError] = useState('');

  const onCancelOrder = useCallback(async () => {
    const cancelOrderResponse = await cancelOrderMutation.mutateAsync({ orderId });

    if (!cancelOrderResponse.data.success && cancelOrderResponse.data.reason) {
      return setCancelOrderError(cancelOrderResponse.data.reason);
    }

    onClose();
  }, [cancelOrderMutation, onClose, orderId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <VStack max gap='48'>
        <VStack align='center' justify='center' max gap='24'>
          <Icon Svg={QuestionsIcon} width={100} height={100} />
          <Typography tag='h1' variant='typography20_bold'>
            Вернуть билет?
          </Typography>
        </VStack>
        <VStack max gap='16'>
          <Button
            variant='default_filled'
            className={cls.cancel_order_button}
            onClick={onCancelOrder}
          >
            <Typography variant='typography16_regular'>Вернуть</Typography>
          </Button>
          <Button className={cls.cancel_button} onClick={onClose}>
            <Typography variant='typography16_regular'>Отменить</Typography>
          </Button>
        </VStack>
        {cancelOrderError && (
          <Typography className={cls.error_message} variant='typography16_regular'>
            {cancelOrderError}
          </Typography>
        )}
      </VStack>
    </Modal>
  );
});
