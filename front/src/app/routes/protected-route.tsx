import { ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../core';
import { ContaUsuario } from '../../domain-types';

type Props = {
  component: ComponentType;
};

const ProtectedRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const location = useLocation();
  const { getCurrentAccount } = useAuth();

  const currentAccount = getCurrentAccount<ContaUsuario>();

  if (currentAccount === undefined) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <RouteComponent />;
};

export default ProtectedRoute;
