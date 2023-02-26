import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuthData } from '../../redux/auth/auth.selector';

export const PrivateRoute = () => {
  // const token = useSelector(selectAuthToken);
   const data = useSelector(selectAuthData);

  return data ? <Outlet /> : <Navigate to="/login" replace />;
};