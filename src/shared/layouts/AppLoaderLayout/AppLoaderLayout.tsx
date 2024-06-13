import { Loader } from '@ui/Loader';

import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = () => {
  return (
    <div className={cls.app_loader_layout}>
      <Loader />
    </div>
  );
};
