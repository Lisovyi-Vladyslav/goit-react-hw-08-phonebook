import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import { authInitState } from './auth.init-state';
import { authgetInfoThunk, authLoginThunk, authLogOutThunk } from './auth.thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  reducers: {
    logoutAction: () => authInitState,
  },
  extraReducers: builder => {
    builder.addCase(authLoginThunk.pending, state => {
    
    }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
    
      state.data.user = { name: null, email: null };
        state.data.token = null;
    }).addCase(authLoginThunk.rejected, state => {
    
    }).addCase(authgetInfoThunk.pending, state => {
    
    }).addCase(authgetInfoThunk.fulfilled, (state, { payload }) => {
    console.log(payload)
      state.data = payload;
    }).addCase(authgetInfoThunk.rejected, state => {
    
    }).addCase(authLogOutThunk.fulfilled, (state, action) => {
        state.data.user = { name: null, email: null };
        state.data.token = null;
        
      })
  },
});

export const { logoutAction } = authSlice.actions;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data']
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
