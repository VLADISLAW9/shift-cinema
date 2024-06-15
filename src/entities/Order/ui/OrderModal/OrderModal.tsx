import SuccessIcon from '@images/Success.svg';
import { classNames } from '@lib/classNames/classNames';
import { convertDate } from '@lib/utils/convertDate/';
import { formatPlacesToString } from '@lib/utils/formatPlacesToString';
import { Icon } from '@ui/Icon';
import { Link } from '@ui/Link';
import { Modal } from '@ui/Modal';
import { VStack } from '@ui/Stack';
import { Typography } from '@ui/Typography';

import { getRouteOrders } from '@/shared/consts/router';

import type { Order } from '../../model/types/order';

import cls from './OrderModal.module.scss';

interface OrderModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  order?: Order;
}

export const OrderModal = (props: OrderModalProps) => {
  const { className, isOpen, onClose, order } = props;

  if (!order) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.order_modal, {}, [className])}
    >
      <VStack gap='24'>
        <VStack justify='center' align='center' gap='32'>
          <Icon width={60} height={60} Svg={SuccessIcon} />
          <Typography tag='h1' variant='typography32_bold'>
            Оплата прошла успешно
          </Typography>
        </VStack>
        <VStack gap='32'>
          <VStack gap='4'>
            <Typography className={cls.header} variant='typography14_regular'>
              Номер билета
            </Typography>
            <Typography variant='typography20_regular'>{order.orderNumber}</Typography>
          </VStack>
          <VStack gap='4'>
            <Typography className={cls.header} variant='typography14_regular'>
              Дата и время
            </Typography>
            <Typography variant='typography20_regular'>
              {convertDate(order.tickets[0].seance.date, 'D MMMM')} {order.tickets[0].seance.time}
            </Typography>
          </VStack>
          <VStack gap='4'>
            <Typography className={cls.header} variant='typography14_regular'>
              Места
            </Typography>
            <Typography variant='typography20_regular'>
              {formatPlacesToString(order.tickets)}
            </Typography>
          </VStack>
          <Typography className={cls.some_info} variant='typography14_regular'>
            Вся информация была продублирована в SMS
          </Typography>
        </VStack>
        <VStack justify='center'>
          <Link to={getRouteOrders()}>
            <Typography className={cls.link_to_account} variant='typography16_regular'>
              Перейти в личный кабинет
            </Typography>
          </Link>
        </VStack>
      </VStack>
    </Modal>
  );
};
