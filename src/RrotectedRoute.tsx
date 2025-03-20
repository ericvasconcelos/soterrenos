import { Navigate, Outlet } from 'react-router';

import { useAuth } from './auth/AuthContext';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/entrar" replace />;
};
