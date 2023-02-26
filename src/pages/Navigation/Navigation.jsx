import React from 'react'
import { Outlet, Link  } from "react-router-dom";
import { Suspense } from "react";
import { selectAuthData } from 'redux/auth/auth.selector';
import { useSelector } from 'react-redux';

export default function SharedLayout() {
  const token = useSelector(selectAuthData);
  
  return (
      <>
       <nav>
        {token ?
          <>
          <Link to="/contacts">Contacts</Link>
          </>
          :
          <>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
          </>}
        </nav> 
           <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </>

  )
}
