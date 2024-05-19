import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface FilmsPageProps {
  className?: string;
}

export const FilmsPage = memo((props: FilmsPageProps) => {
  const { className } = props;
  return <div className={classNames('', {}, [className])}>FilmsPage</div>;
});
