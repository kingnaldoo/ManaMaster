import { createSlice } from "@reduxjs/toolkit";
import { DeckProps } from "./@types/deck";

const initialState: DeckProps = {
  id: "",
  name: "",
  color: "",
  cards: [],
};

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    getDeck: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
    setDeck: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  },
});

export const { getDeck, setDeck } = deckSlice.actions;

export default deckSlice.reducer;
