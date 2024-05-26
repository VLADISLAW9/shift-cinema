import { Navigate, useLocation } from 'react-router-dom';

import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { getRouteAuth } from '@/shared/consts/router';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const authData = useUserStore((state) => state.user);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
