import {useDispatch, useSelector} from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/users/users.operations';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { selectAuthData } from 'redux/auth/auth.selector';
import { PublicRoute } from './AuthRouts/PublicRoute';
import { PrivateRoute } from './AuthRouts/PrivateRoute';


const UserMenu  = lazy(() => import("pages/UserMenu/UserMenu"));
const Navigation  = lazy(() => import("pages/Navigation/Navigation"));
const Register = lazy(() => import("pages/Register/Register"));
const Login = lazy(() => import("pages/Login/Login"));
const Contacts = lazy(() => import("pages/Contacts/Contacts"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));


export function App() {
  
  const data = useSelector(selectAuthData);
  const dispatch = useDispatch();
  useEffect(() => {
   if (data) {
     dispatch(fetchContacts(data.token));
   } 
  }, [dispatch, data]);

  return (
    <>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
    <Route path="/" element={<Navigation/>}>
            
      <Route path="" element={<PublicRoute/>}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
            
      <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contacts />}>
              <Route index element={<UserMenu />} />
               </Route>
      </Route>
            
    </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
      </>
        
  )
}
