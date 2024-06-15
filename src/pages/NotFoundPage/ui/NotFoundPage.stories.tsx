import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage
};

export default meta;
type NotFoundPageProps = StoryObj<typeof NotFoundPage>;

export const Default: NotFoundPageProps = {};
