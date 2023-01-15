import { createSlice } from "@reduxjs/toolkit";
import { UserProps } from "./@types/user";

const initialState: UserProps = {
  userId: "",
  decks: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return { ...state, userId: payload.userId, decks: payload.decks };
    },
    logout: (state) => {
      return { ...state, userId: "", decks: [] };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
