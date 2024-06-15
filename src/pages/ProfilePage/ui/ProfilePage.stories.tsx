import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/ProfilePage',
  component: ProfilePage
};

export default meta;
type ProfilePageProps = StoryObj<typeof ProfilePage>;

export const Default: ProfilePageProps = {};
