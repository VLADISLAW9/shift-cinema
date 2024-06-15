import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input
};

export default meta;
type InputProps = StoryObj<typeof Input>;

export const Default: InputProps = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder'
  }
};

export const Disabled: InputProps = {
  args: {
    disabled: true,
    label: 'Label',
    placeholder: 'Placeholder'
  }
};

export const WithError: InputProps = {
  args: {
    error: 'Error',
    label: 'Label',
    placeholder: 'Placeholder'
  }
};
