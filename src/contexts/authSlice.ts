import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, userState } from "../interfaces/user";
import { RootState } from "./authStore";

const initialState: userState = {
  user: null,
};

const authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authentication.actions;

export const getUserState = (state:RootState)=>state.auth.user;

export default authentication.reducer;
