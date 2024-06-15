import type { Meta, StoryObj } from '@storybook/react';

import PaymentPage from './PaymentPage';

const meta: Meta<typeof PaymentPage> = {
  title: 'Pages/PaymentPage',
  component: PaymentPage
};

export default meta;
type PaymentPageProps = StoryObj<typeof PaymentPage>;

export const Default: PaymentPageProps = {};
