import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {selectAuthUser } from 'redux/auth/auth.selector';
import {authLogOutThunk } from 'redux/auth/auth.thunk';

export default function UserMenu() {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    console.log('sgrrfg')
    dispatch(authLogOutThunk())
    navigate('/login', { replace: true });
 }

  return (
    <div>
      <p>Name {user.name}</p>
      <p>Email {user.email}</p>
      <button type='submit' onClick={Logout}>Logout</button>
    </div>
  )
}
