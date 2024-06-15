import type { Meta, StoryObj } from '@storybook/react';

import { FilmUserDataModal } from './FilmUserDataModal';

const meta: Meta<typeof FilmUserDataModal> = {
  title: 'features/FilmUserDataModal',
  component: FilmUserDataModal
};

export default meta;
type FilmUserDataModalProps = StoryObj<typeof FilmUserDataModal>;

export const Default: FilmUserDataModalProps = {
  args: {
    isOpen: true
  }
};
