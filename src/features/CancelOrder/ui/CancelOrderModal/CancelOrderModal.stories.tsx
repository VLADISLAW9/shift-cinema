import type { Meta, StoryObj } from '@storybook/react';

import { CancelOrderModal } from './CancelOrderModal';

const meta: Meta<typeof CancelOrderModal> = {
  title: 'features/CancelOrder/CancelOrderModal',
  component: CancelOrderModal
};

export default meta;
type CancelOrderModalProps = StoryObj<typeof CancelOrderModal>;

export const Default: CancelOrderModalProps = {
  args: {
    isOpen: true
  }
};
