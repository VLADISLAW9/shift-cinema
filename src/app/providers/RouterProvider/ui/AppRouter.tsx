import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import type { AppRoutesProps } from '@/shared/types/router';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

const AppRouter = memo(() => {
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

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

export default memo(AppRouter);
