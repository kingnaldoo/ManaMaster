import { createSlice } from "@reduxjs/toolkit";
import { DeckProps } from "./@types/deck";

const initialState: DeckProps = {
  id: null,
  title: "",
  color: "",
  cards: [],
};

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    setDeck: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        color: payload.color,
        cards: payload.cards,
      };
    },
    resetDeck: (state) => {
      return { ...state, name: "", color: "", cards: [] };
    },
  },
});

export const { setDeck } = deckSlice.actions;

export default deckSlice.reducer;
