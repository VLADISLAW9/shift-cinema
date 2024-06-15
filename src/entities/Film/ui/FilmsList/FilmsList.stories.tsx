import type { Meta, StoryObj } from '@storybook/react';

import { FilmsList } from './FilmsList';

const meta: Meta<typeof FilmsList> = {
  title: 'entities/Film/FilmsList',
  component: FilmsList
};

export default meta;
type FilmsListProps = StoryObj<typeof FilmsList>;

export const Default: FilmsListProps = {};
