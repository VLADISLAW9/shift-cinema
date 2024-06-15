import type { Meta, StoryObj } from '@storybook/react';

import OrdersPage from './OrdersPage';

const meta: Meta<typeof OrdersPage> = {
  title: 'Pages/OrdersPage',
  component: OrdersPage
};

export default meta;
type OrdersPageProps = StoryObj<typeof OrdersPage>;

export const Default: OrdersPageProps = {};
