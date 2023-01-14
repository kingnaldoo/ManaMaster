import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userId = action.payload;
    },
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.userId = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
