
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userInitState } from './users.init-state';
import { fetchContacts, deleteContact, addContact } from "./users.operations";

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const userSlice = createSlice({
  name: 'users',
  initialState: userInitState,
  reducers: {
    usersFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
    // handleContacts: (state, { payload }) => {
    // 
      
    // }
  },
  extraReducers: {
   [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    
    },
    
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },

    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },

    [deleteContact.rejected]: handleRejected,
    
  }
});

export const { usersFilterAction} = userSlice.actions;

const persistConfig = {
  key: 'goit-react-hw-06-phonebook',
  storage,
  whitelist: ['contacts'],
};

export const usersReducer = persistReducer(persistConfig, userSlice.reducer);




// reducers: {
//     usersFilterAction: (state, { payload }) => {
//       state.filter = payload;
//     },

//     deleteUserAction: (state, { payload }) => {
//       state.contacts = state.contacts.filter(user => user.id !== payload);
//     },

//     addContactAction: (state, { payload }) => {
//     const names = state.contacts.map(contact => contact.name);

// 		if (names.indexOf(payload.name) >= 0) {
// 			alert(payload.name + " is already in contacts.");
// 			return;
//       }

//     state.contacts = [{ id: nanoid(), "name": payload.name, "number": payload.number }, ...state.contacts];
//     },
//   }