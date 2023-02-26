import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';

import { selectAuthData} from '../../redux/auth/auth.selector';

export const PublicRoute = () => {
  // const token = useSelector(selectAuthToken);
   const data = useSelector(selectAuthData);

  return data ? <Navigate to="/contacts" replace /> : <Outlet />;
};
