import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/auth.slice';
import { usersReducer } from './users/users.slice';

import { authInitState } from './auth/auth.init-state';
import { userInitState } from './users/users.init-state';

const initState = {
  users: userInitState,
  data: authInitState,
};

export const store = configureStore({
  reducer: {
    preloadedState: initState,
    users: usersReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);