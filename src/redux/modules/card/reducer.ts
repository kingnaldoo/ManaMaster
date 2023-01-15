import { createSlice } from "@reduxjs/toolkit";
import { CardProps } from "./@types/card";

const initialState: CardProps = {
  name: "",
  url: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    getCard: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
    setCard: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  },
});

export const { getCard, setCard } = cardSlice.actions;

export default cardSlice.reducer;
