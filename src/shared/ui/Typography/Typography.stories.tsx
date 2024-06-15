import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography
};

export default meta;
type TypographyProps = StoryObj<typeof Typography>;

export const Default: TypographyProps = {
  args: {
    children: 'Some text',
    variant: 'typography16_regular'
  }
};
