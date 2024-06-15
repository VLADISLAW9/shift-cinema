import type { Meta, StoryObj } from '@storybook/react';

import FilmDetailsPage from './FilmDetailsPage';

const meta: Meta<typeof FilmDetailsPage> = {
  title: 'Pages/FilmDetailsPage',
  component: FilmDetailsPage
};

export default meta;
type FilmDetailsPageProps = StoryObj<typeof FilmDetailsPage>;

export const Default: FilmDetailsPageProps = {};
