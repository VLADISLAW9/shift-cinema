import { memo } from 'react';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FilmsPageProps {
  className?: string;
}

export const FilmsPage = memo((props: FilmsPageProps) => {
  const { className } = props;
  const user = useUserStore((state) => state.user);

  return <div className={classNames('', {}, [className])}>{user?.phone}</div>;
});
