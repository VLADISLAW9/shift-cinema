import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
  component: AppImage
};

export default meta;
type AppImageProps = StoryObj<typeof AppImage>;

const imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg';
const AppImageFallback = <Typography variant='typography16_regular'>Загрузка...</Typography>;
const AppImageErrorFallback = <Typography variant='typography16_regular'>Ошибка</Typography>;

export const Default: AppImageProps = {
  args: {
    src: imageSrc,
    fallback: AppImageFallback,
    errorFallback: AppImageErrorFallback
  }
};

export const Error: AppImageProps = {
  args: {
    src: '',
    fallback: AppImageFallback,
    errorFallback: AppImageErrorFallback
  }
};
