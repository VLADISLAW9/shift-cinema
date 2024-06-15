import type { Meta, StoryObj } from '@storybook/react';

import { SignInForm } from './SignInForm';

const meta: Meta<typeof SignInForm> = {
  component: SignInForm
};

export default meta;
type SignInFormProps = StoryObj<typeof SignInForm>;

export const Default: SignInFormProps = {};
