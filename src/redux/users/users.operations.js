import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "http/http";
import { setAuthHeader } from "redux/auth/auth.thunk";

export const fetchContacts  = createAsyncThunk(
  "contacts/fetchAll",
  async (token, thunkAPI) => {
    try {
      setAuthHeader(token)
       console.log(token) 

        const response = await privateApi.get("/contacts");
    
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact  = createAsyncThunk(
  "contacts/addTask",
  async ({number ,name}, thunkAPI) => {
    try {
      
      const response = await privateApi.post("/contacts", {name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact  = createAsyncThunk(
  "contacts/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await privateApi.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


