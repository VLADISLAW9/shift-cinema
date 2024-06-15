import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal
};

export default meta;
type ModalProps = StoryObj<typeof Modal>;

export const Default: ModalProps = {
  args: {
    isOpen: true,
    children: <div>Modal</div>
  }
};
