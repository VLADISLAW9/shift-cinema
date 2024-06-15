import type { Meta, StoryObj } from '@storybook/react';

import FilmsPage from './FilmsPage';

const meta: Meta<typeof FilmsPage> = {
  title: 'Pages/FilmsPage',
  component: FilmsPage
};

export default meta;
type FilmsPageProps = StoryObj<typeof FilmsPage>;

export const Default: FilmsPageProps = {};
