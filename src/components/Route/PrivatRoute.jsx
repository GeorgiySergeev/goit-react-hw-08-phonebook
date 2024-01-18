import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';

export const PrivatRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  return <>{isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
};

export const PrivatRouteAuth = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  return <>{!isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
};
