import { Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';

export const App = () => {
  return (
    <div id='app' className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />
        123
      </Suspense>
    </div>
  );
};
