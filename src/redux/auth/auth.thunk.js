import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi } from '../../http/http';

const setAuthHeader = token => {
  privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  privateApi.defaults.headers.common.Authorization = '';
};

export const authLoginThunk = createAsyncThunk('login', async (values) => {
  const { data } = await publicApi.post('/users/login', values);
  console.log(data.token)
 setAuthHeader(data.token)
  return data;
});

export const authgetInfoThunk = createAsyncThunk('getInfo', async () => {
  const { data } = await privateApi.get('/users/current');
  return data;
});

export const authLogOutThunk = createAsyncThunk('logOut', async () => {
 await privateApi.post('/users/logout');
console.log('gsgsdg')
  clearAuthHeader();
  
});