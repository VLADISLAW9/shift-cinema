import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type ButtonProps = StoryObj<typeof Button>;

export const PrimaryFilled: ButtonProps = {
  args: {
    variant: 'primary_filled',
    children: <Typography variant='typography16_regular'>Button</Typography>
  }
};

export const DefaultText: ButtonProps = {
  args: {
    variant: 'default_text',
    children: <Typography variant='typography16_regular'>Button</Typography>
  }
};

export const DefaultFilled: ButtonProps = {
  args: {
    variant: 'default_filled',
    children: <Typography variant='typography16_regular'>Button</Typography>
  }
};

export const Clear: ButtonProps = {
  args: {
    variant: 'clear',
    children: <Typography variant='typography16_regular'>Button</Typography>
  }
};

export const PrimaryText: ButtonProps = {
  args: {
    variant: 'primary_text',
    children: <Typography variant='typography16_regular'>Button</Typography>
  }
};

export const Disabled: ButtonProps = {
  args: {
    disabled: true,
    variant: 'primary_text',
    children: <Typography variant='typography16_regular'>Button</Typography>
  }
};
