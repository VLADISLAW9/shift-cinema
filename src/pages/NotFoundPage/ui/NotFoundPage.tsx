import { Typography } from '@/shared/ui/Typography';

import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={cls.not_found_page}>
      <Typography variant='typography32_bold'>Страница не найдена</Typography>
    </div>
  );
};
