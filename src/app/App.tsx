import { Suspense } from 'react';

import { DesktopLayouts } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';

import AppRouter from './providers/RouterProvider/ui/AppRouter';

export const App = () => {
  return (
    <div id='app' className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <DesktopLayouts content={<AppRouter />} header={<Navbar />} />
      </Suspense>
    </div>
  );
};
