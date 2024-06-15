import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton
};

export default meta;
type SkeletonProps = StoryObj<typeof Skeleton>;

export const Default: SkeletonProps = {
  args: {
    width: 300,
    height: 100
  }
};
