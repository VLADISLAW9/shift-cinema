import type { Meta, StoryObj } from '@storybook/react';

import type { Film } from '../../model/types/film';

import { FilmListItem } from './FilmListItem';

const meta: Meta<typeof FilmListItem> = {
  title: 'entities/Film/FilmListItem',
  component: FilmListItem,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type FilmListItemProps = StoryObj<typeof FilmListItem>;

const film = {
  id: '1',
  name: 'Name',
  originalName: 'Original Name',
  description: 'Description',
  releaseDate: '20.20.2020',
  actors: ['Actor'],
  directors: ['Director'],
  runtime: 120,
  ageRating: 12,
  genres: ['Genre'],
  userRatings: {
    description: 'description',
    kinopoisk: '10',
    imdb: '10'
  },
  img: '/static/images/cinema/film_1.webp',
  country: {
    name: 'Country Name',
    code: 'CN',
    code2: 'CY',
    id: 1
  }
} as Film;

export const Default: FilmListItemProps = {
  args: {
    film
  }
};
