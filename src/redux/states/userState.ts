import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";

const initialState: User = {
  id: 0,
  name: '',
  email: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => initialState
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice;