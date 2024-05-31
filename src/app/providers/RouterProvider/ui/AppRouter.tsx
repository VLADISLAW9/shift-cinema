import { memo, Suspense, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { getRouteAuth, getRouteFilms } from '@/shared/consts/router';
import type { AppRoutesProps } from '@/shared/types/router';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

const AppRouter = memo(() => {
  const navigate = useNavigate();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback=''>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate(getRouteAuth());
    }
    return navigate(getRouteFilms());
  }, [isLoggedIn, navigate]);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

export default memo(AppRouter);
