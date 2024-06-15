import type { Meta, StoryObj } from '@storybook/react';

import { FilmDetails } from './FilmDetails';

const meta: Meta<typeof FilmDetails> = {
  title: 'entities/Film/FilmDetails',
  component: FilmDetails
};

export default meta;
type FilmDetailsProps = StoryObj<typeof FilmDetails>;

export const Default: FilmDetailsProps = {
  args: {
    pageId: '1'
  }
};

export const NotFound: FilmDetailsProps = {
  args: {
    pageId: '-1'
  }
};
