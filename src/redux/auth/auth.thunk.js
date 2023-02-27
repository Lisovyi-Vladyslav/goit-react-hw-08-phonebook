import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { privateApi, publicApi } from '../../http/http';
import { selectAuthData } from './auth.selector';


const setAuthHeader = token => {
  privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  privateApi.defaults.headers.common.Authorization = '';
};

export const authLoginThunk = createAsyncThunk('login', async (values) => {
  const { data } = await publicApi.post('/users/login', values);
 
 setAuthHeader(data.token)
  return data;
});

export const authgetInfoThunk = createAsyncThunk('getInfo', async () => {
  const { data } = await privateApi.get('/users/current');
  return data;
});

export const authLogOutThunk = createAsyncThunk('logOut', async () => {
 
  const { token } = useSelector(selectAuthData);
  setAuthHeader(token)
 
  await privateApi.post('/users/logout');
  clearAuthHeader();
  
});