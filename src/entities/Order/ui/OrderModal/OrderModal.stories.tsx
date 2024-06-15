import type { Meta, StoryObj } from '@storybook/react';

import type { Order } from '../../model/types/order';

import { OrderModal } from './OrderModal';

const meta: Meta<typeof OrderModal> = {
  title: 'entities/Order/OrderModal',
  component: OrderModal
};

export default meta;
type OrderModalProps = StoryObj<typeof OrderModal>;

const order: Order = {
  _id: '123',
  filmName: 'Матрица',
  orderNumber: 432,
  status: 'PAYED',
  tickets: [
    {
      _id: '12',
      column: 1,
      phone: '89123456789',
      row: 1,
      seance: {
        date: '20.20.2022',
        time: '12:00'
      }
    }
  ]
};

export const Default: OrderModalProps = {
  args: {
    isOpen: true,
    order
  }
};
