import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: 'max-content' }}>
        <Story {...args} />
      </div>
    )
  ]
};

export default meta;
type TagProps = StoryObj<typeof Tag>;

export const Success: TagProps = {
  args: {
    children: <Typography variant='typography16_regular'>Success</Typography>,
    variant: 'success'
  }
};

export const Error: TagProps = {
  args: {
    children: <Typography variant='typography16_regular'>Error</Typography>,
    variant: 'error'
  }
};
