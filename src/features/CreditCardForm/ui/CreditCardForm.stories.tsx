import type { Meta, StoryObj } from '@storybook/react';

import { CreditCardForm } from './CreditCardForm';

const meta: Meta<typeof CreditCardForm> = {
  title: 'features/CreditCardForm',
  component: CreditCardForm
};

export default meta;
type CreditCardFormProps = StoryObj<typeof CreditCardForm>;

export const Default: CreditCardFormProps = {};
