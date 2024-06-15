import type { Meta, StoryObj } from '@storybook/react';

import { UpdateProfileForm } from './UpdateProfileForm';

const meta: Meta<typeof UpdateProfileForm> = {
  title: 'features/UpdateProfileForm',
  component: UpdateProfileForm
};

export default meta;
type UpdateProfileFormProps = StoryObj<typeof UpdateProfileForm>;

export const Default: UpdateProfileFormProps = {};
