import { Navigate, useLocation } from 'react-router-dom';

import { getRouteAuth } from '@/shared/consts/router';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = null;
  const location = useLocation();

  if (!auth) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
