import { Navigate, useLocation } from 'react-router-dom';

import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import { getRouteAuth } from '@/shared/consts/router';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isUserInited = !!localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const location = useLocation();

  if (!isUserInited) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
