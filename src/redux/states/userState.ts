import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";
import { Roles } from '../../models/RolesModel';

const initialState: User = {
  id: 0,
  name: '',
  email: '',
  rol: Roles.USER
};

const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : initialState,
  reducers: {
    createUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    },
    updateUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify({ ...state, ...action.payload }));
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      localStorage.removeItem('user');
      return initialState;
    }
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice;