import { Suspense, useEffect } from 'react';

import { useInitAuthDataQuery } from '@/entities/User/api/useInitAuthData';
import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import { AppLoaderLayout, DesktopLayouts } from '@/shared/layouts';
import { Navbar } from '@/widgets/Navbar';

import AppRouter from './providers/RouterProvider/ui/AppRouter';

export const App = () => {
  const initUser = useUserStore((state) => state.initUser);

  const initAuthDataQuery = useInitAuthDataQuery();

  const userToken = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const userData = initAuthDataQuery.data?.user;

  useEffect(() => {
    if (userToken && userData) {
      initUser(userData);
    }
  }, [initUser, userData, userToken]);

  if (initAuthDataQuery.isLoading && userToken) {
    return <AppLoaderLayout />;
  }

  return (
    <div id='app' className='app'>
      <Suspense fallback=''>
        <DesktopLayouts content={<AppRouter />} header={<Navbar />} />
      </Suspense>
    </div>
  );
};
