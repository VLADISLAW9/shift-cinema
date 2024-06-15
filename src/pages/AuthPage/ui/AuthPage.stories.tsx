import type { Meta, StoryObj } from '@storybook/react';

import AuthPage from './AuthPage';

const meta: Meta<typeof AuthPage> = {
  title: 'Pages/AuthPage',
  component: AuthPage
};

export default meta;
type AuthPageProps = StoryObj<typeof AuthPage>;

export const Default: AuthPageProps = {};
