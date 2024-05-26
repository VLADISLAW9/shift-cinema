import { memo } from 'react';
import { classNames } from '@lib/classNames/classNames';
import { Typography } from '@ui/Typography';

import { FilmsList } from '@/entities/Film';
import { VStack } from '@/shared/ui/Stack';

import cls from './FilmsPage.module.scss';

interface FilmsPageProps {
  className?: string;
}

export const FilmsPage = memo((props: FilmsPageProps) => {
  const { className } = props;

  return (
    <VStack gap='16' className={classNames(cls.film_page, {}, [className])}>
      <Typography className={cls.header} tag='h1' variant='typography24_bold'>
        Афиша
      </Typography>
      <FilmsList />
    </VStack>
  );
});
